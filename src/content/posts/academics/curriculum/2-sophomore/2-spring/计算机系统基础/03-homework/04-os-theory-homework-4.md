---
title: "操作系统理论作业 4：进程同步"
description: "操作系统理论作业 4 原题与我当时的提交，包含写者优先的读者—写者问题、寿司店、进门和搜索—插入—删除问题。"
date: 2026-08-27
tags: ["作业"]
---

## 1. 写者优先的读者—写者问题

满足以下约束：共享读；互斥写；读写互斥；写者优先于读者——一旦有写者等待，后续读者必须等待，唤醒时优先考虑写者。

<details class="exam-answer">
<summary>查看我当时提交的代码</summary>

```cpp
#include <pthread.h>
#include <stdio.h>

typedef struct {
    pthread_mutex_t mutex;
    pthread_cond_t read_cond;
    pthread_cond_t write_cond;
    int readers_active;
    int writers_waiting;
    int writing;
} rwlock_t;

void rwlock_init(rwlock_t *rw) {
    pthread_mutex_init(&rw->mutex, NULL);
    pthread_cond_init(&rw->read_cond, NULL);
    pthread_cond_init(&rw->write_cond, NULL);
    rw->readers_active = 0;
    rw->writers_waiting = 0;
    rw->writing = 0;
}

void reader_lock(rwlock_t *rw) {
    pthread_mutex_lock(&rw->mutex);
    while (rw->writers_waiting > 0 || rw->writing) {
        pthread_cond_wait(&rw->read_cond, &rw->mutex);
    }
    rw->readers_active++;
    pthread_mutex_unlock(&rw->mutex);
}

void reader_unlock(rwlock_t *rw) {
    pthread_mutex_lock(&rw->mutex);
    rw->readers_active--;
    if (rw->readers_active == 0) {
        pthread_cond_signal(&rw->write_cond);
    }
    pthread_mutex_unlock(&rw->mutex);
}

void writer_lock(rwlock_t *rw) {
    pthread_mutex_lock(&rw->mutex);
    rw->writers_waiting++;
    while (rw->readers_active > 0 || rw->writing) {
        pthread_cond_wait(&rw->write_cond, &rw->mutex);
    }
    rw->writers_waiting--;
    rw->writing = 1;
    pthread_mutex_unlock(&rw->mutex);
}

void writer_unlock(rwlock_t *rw) {
    pthread_mutex_lock(&rw->mutex);
    rw->writing = 0;
    if (rw->writers_waiting > 0) {
        pthread_cond_signal(&rw->write_cond);
    } else {
        pthread_cond_broadcast(&rw->read_cond);
    }
    pthread_mutex_unlock(&rw->mutex);
}

rwlock_t rwlock;

void *reader_thread(void *arg) {
    reader_lock(&rwlock);
    printf("Reader %ld is reading\n", (long)arg);
    reader_unlock(&rwlock);
    return NULL;
}

void *writer_thread(void *arg) {
    writer_lock(&rwlock);
    printf("Writer %ld is writing\n", (long)arg);
    writer_unlock(&rwlock);
    return NULL;
}

int main(void) {
    pthread_t readers[5], writers[5];
    rwlock_init(&rwlock);

    for (long i = 0; i < 2; i++) {
        pthread_create(&writers[i], NULL, writer_thread, (void *)i);
    }
    for (long i = 0; i < 3; i++) {
        pthread_create(&readers[i], NULL, reader_thread, (void *)i);
    }
    for (int i = 0; i < 2; i++) {
        pthread_join(writers[i], NULL);
    }
    for (int i = 0; i < 3; i++) {
        pthread_join(readers[i], NULL);
    }
    return 0;
}
```

</details>

## 2. 寿司店问题

一个寿司店有 5 个座位。若顾客到达时还有空位，可以立刻就坐；若到达时 5 个座位全满，则当前就坐者被视为同一批顾客，新顾客必须等待这一批人全部离开后才能就坐。编写同步原语实现该约束。

<details class="exam-answer">
<summary>查看我当时提交的代码</summary>

```cpp
#include <pthread.h>
#include <stdbool.h>

#define NUM_SEATS 5

typedef struct {
    pthread_mutex_t lock;
    pthread_cond_t all_left;
    pthread_cond_t can_seat;
    int seats_occupied;
    int waiting_customers;
    bool is_waiting_group;
} SushiBar;

void sushi_bar_init(SushiBar *bar) {
    pthread_mutex_init(&bar->lock, NULL);
    pthread_cond_init(&bar->all_left, NULL);
    pthread_cond_init(&bar->can_seat, NULL);
    bar->seats_occupied = 0;
    bar->waiting_customers = 0;
    bar->is_waiting_group = false;
}

void take_seat(SushiBar *bar) {
    pthread_mutex_lock(&bar->lock);

    if (bar->seats_occupied > 0 && bar->seats_occupied < NUM_SEATS) {
        bar->seats_occupied++;
        pthread_mutex_unlock(&bar->lock);
        return;
    }

    bar->waiting_customers++;
    while (true) {
        if (bar->seats_occupied == 0) {
            bar->is_waiting_group = true;
            bar->seats_occupied = 0;

            int group_size = bar->waiting_customers < NUM_SEATS
                                 ? bar->waiting_customers
                                 : NUM_SEATS;
            bar->waiting_customers -= group_size;
            bar->seats_occupied = group_size;
            bar->is_waiting_group = false;

            pthread_mutex_unlock(&bar->lock);
            return;
        }
        pthread_cond_wait(&bar->all_left, &bar->lock);
    }
}

void leave_seat(SushiBar *bar) {
    pthread_mutex_lock(&bar->lock);
    bar->seats_occupied--;
    if (bar->seats_occupied == 0 && bar->waiting_customers > 0) {
        pthread_cond_broadcast(&bar->all_left);
    }
    pthread_mutex_unlock(&bar->lock);
}
```

</details>

## 3. 进门问题

1. 给出 P、V 操作和信号量的物理意义。
2. 一个软件公司有 5 名员工，每人刷卡后等待，直到所有员工都刷卡后才能进入公司。员工要逐个通过大门；所有员工进入后，最后进入者负责关门。请用 P、V 操作实现同步。

<details class="exam-answer">
<summary>查看我当时提交的答案与代码</summary>

信号量是表示可用资源数量的整型计数器。P 操作用于申请资源或进入临界区，V 操作用于释放资源或退出临界区。

```cpp
#include <semaphore.h>
#include <pthread.h>
#include <stdio.h>

#define NUM_EMPLOYEES 5

sem_t mutex;
sem_t all_here;
sem_t entry_mutex;
int swipe_count = 0;
int entry_count = 0;

void *employee(void *id_ptr) {
    int id = (int)(long)id_ptr;

    sem_wait(&mutex);
    swipe_count++;
    printf("员工 %d 刷卡\n", id);
    if (swipe_count == NUM_EMPLOYEES) {
        for (int i = 0; i < NUM_EMPLOYEES - 1; i++) {
            sem_post(&all_here);
        }
    }
    sem_post(&mutex);

    if (id != NUM_EMPLOYEES) {
        sem_wait(&all_here);
    }

    sem_wait(&entry_mutex);
    entry_count++;
    printf("员工 %d 进入公司\n", id);
    if (entry_count == NUM_EMPLOYEES) {
        printf("--> 员工 %d 关闭大门\n", id);
        swipe_count = 0;
        entry_count = 0;
    }
    sem_post(&entry_mutex);
    return NULL;
}

int main(void) {
    sem_init(&mutex, 0, 1);
    sem_init(&all_here, 0, 0);
    sem_init(&entry_mutex, 0, 1);

    pthread_t employees[NUM_EMPLOYEES];
    for (long i = 1; i <= NUM_EMPLOYEES; i++) {
        pthread_create(&employees[i - 1], NULL, employee, (void *)i);
    }
    for (int i = 0; i < NUM_EMPLOYEES; i++) {
        pthread_join(employees[i], NULL);
    }

    sem_destroy(&mutex);
    sem_destroy(&all_here);
    sem_destroy(&entry_mutex);
    return 0;
}
```

</details>

## 4. 搜索—插入—删除问题

三个线程组并发访问一个单链表：

- 搜索线程只读链表，多个搜索线程可以并发。
- 插入线程在链表末尾插入；多个插入线程必须互斥，但插入线程可以和搜索线程并发。
- 删除线程可删除任意位置的元素。一次只能有一个删除线程；删除不能与搜索或插入并发。

请编写三类线程的同步互斥代码。

<details class="exam-answer">
<summary>查看我当时提交的代码</summary>

```cpp
#include <pthread.h>
#include <semaphore.h>
#include <stdio.h>

sem_t insert_mutex;
sem_t delete_mutex;
pthread_mutex_t search_count_mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t sync_mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t no_search = PTHREAD_COND_INITIALIZER;

int search_count = 0;
int delete_waiting = 0;

void *search_thread(void *arg) {
    pthread_mutex_lock(&sync_mutex);
    while (delete_waiting > 0) {
        pthread_cond_wait(&no_search, &sync_mutex);
    }
    pthread_mutex_unlock(&sync_mutex);

    pthread_mutex_lock(&search_count_mutex);
    search_count++;
    pthread_mutex_unlock(&search_count_mutex);

    printf("搜索线程 %ld: 正在搜索...\n", (long)arg);

    pthread_mutex_lock(&search_count_mutex);
    search_count--;
    if (search_count == 0 && delete_waiting > 0) {
        pthread_cond_signal(&no_search);
    }
    pthread_mutex_unlock(&search_count_mutex);
    return NULL;
}

void *insert_thread(void *arg) {
    sem_wait(&insert_mutex);
    pthread_mutex_lock(&sync_mutex);
    while (delete_waiting > 0) {
        pthread_cond_wait(&no_search, &sync_mutex);
    }
    pthread_mutex_unlock(&sync_mutex);

    printf("插入线程 %ld: 正在插入...\n", (long)arg);
    sem_post(&insert_mutex);
    return NULL;
}

void *delete_thread(void *arg) {
    sem_wait(&delete_mutex);
    pthread_mutex_lock(&sync_mutex);
    delete_waiting++;
    while (search_count > 0) {
        pthread_cond_wait(&no_search, &sync_mutex);
    }
    pthread_mutex_unlock(&sync_mutex);

    printf("删除线程 %ld: 正在删除...\n", (long)arg);

    pthread_mutex_lock(&sync_mutex);
    delete_waiting--;
    pthread_cond_broadcast(&no_search);
    pthread_mutex_unlock(&sync_mutex);
    sem_post(&delete_mutex);
    return NULL;
}

int main(void) {
    sem_init(&insert_mutex, 0, 1);
    sem_init(&delete_mutex, 0, 1);

    pthread_t threads[9];
    long thread_id = 0;
    for (int i = 0; i < 3; i++) {
        pthread_create(&threads[thread_id++], NULL, search_thread,
                       (void *)thread_id);
    }
    for (int i = 0; i < 3; i++) {
        pthread_create(&threads[thread_id++], NULL, insert_thread,
                       (void *)thread_id);
    }
    for (int i = 0; i < 3; i++) {
        pthread_create(&threads[thread_id++], NULL, delete_thread,
                       (void *)thread_id);
    }
    for (int i = 0; i < 9; i++) {
        pthread_join(threads[i], NULL);
    }

    sem_destroy(&insert_mutex);
    sem_destroy(&delete_mutex);
    pthread_mutex_destroy(&search_count_mutex);
    pthread_mutex_destroy(&sync_mutex);
    pthread_cond_destroy(&no_search);
    return 0;
}
```

</details>
