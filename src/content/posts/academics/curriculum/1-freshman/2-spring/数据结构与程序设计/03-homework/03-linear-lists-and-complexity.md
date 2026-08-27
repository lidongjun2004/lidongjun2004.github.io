---
title: 第 3 次作业 · 线性表与复杂度
description: 第三次作业的线性表客观题，以及链表、文件和内存模拟提交。
date: 2026-08-27
tags: ["作业"]
---

本页按课程保存的答案 PDF 整理客观题。编程题的独立题面未保存；“多项式相乘”和“词频统计”另有一份讲解 PDF，可确认其解法方向，其余仅记录提交。

## 选择题

### 1. 单向循环链表中，在 `p` 所指结点后插入新结点，需要修改几个指针域？

<details class="exam-answer"><summary>展开答案</summary>

2 个，对应 B。

</details>

### 2. 以 `h` 为头结点的单循环链表中，`p` 指向链尾的条件是什么？

<details class="exam-answer"><summary>展开答案</summary>

`p->next == h`，对应 A。

</details>

### 3. 关于线性表，“有序性”应怎样理解？题目要求选错误叙述

<details class="exam-answer"><summary>展开答案</summary>

“线性表的有序性是数据元素按数值由小到大或由大到小排列”错误，对应 C。线性表的“有序”指元素具有前后次序，不等于按关键字排序。

</details>

### 4. 外层 `k*=2` 到 $n$、内层从 1 到 $n$ 的二重循环，时间复杂度是什么？

<details class="exam-answer"><summary>展开答案</summary>

$O(n\log n)$，对应 C。

</details>

### 5. 把题给四个复杂度由小到大排序

<details class="exam-answer"><summary>展开答案</summary>

源答案为 `3, 4, 1, 2`，对应 B。原 PDF 中四个公式字形没有被文本层保留下来，因此这里只保留可核验的编号顺序。

</details>

### 6. 含 $n$ 个结点的链表中，等概率成功查找平均比较多少个结点？

<details class="exam-answer"><summary>展开答案</summary>

$(n+1)/2$，对应 C。

</details>

### 7. 数据的存储结构通常分为哪几类？

<details class="exam-answer"><summary>展开答案</summary>

顺序、链式、索引和散列存储结构，对应 D。

</details>

### 8. 长度为 $n$ 的顺序表在第 $i$ 个位置插入元素，时间复杂度是什么？

<details class="exam-answer"><summary>展开答案</summary>

$O(n)$，对应 C。

</details>

### 9. 关于线性表，哪一项叙述错误？

<details class="exam-answer"><summary>展开答案</summary>

“顺序存储便于插入和删除”错误，对应 B。

</details>

### 10. 最常做“尾部插入、删除第一个元素”时，哪种链表表示更省时间？

<details class="exam-answer"><summary>展开答案</summary>

仅设尾指针的单循环链表，对应 D；尾指针的后继就是首结点。

</details>

## 填空题

### 1. 20 人围成一圈从 1 开始报数，报到 2 的人出列，最后留下几号？

<details class="exam-answer"><summary>展开答案</summary>

9 号。

</details>

### 2. `x` 从 2 开始不断翻倍，直到不小于 `n/2`，时间复杂度是什么？

<details class="exam-answer"><summary>展开答案</summary>

$O(\log n)$。

</details>

### 3. 两重循环分别执行 $n$ 次和 $m$ 次，循环体为常数操作，复杂度是什么？

<details class="exam-answer"><summary>展开答案</summary>

$O(mn)$。

</details>

### 4. `i=1,j=0`，循环条件为 `i+j<=n`，每轮把较小关系对应的一个变量加一，循环体执行多少次？

<details class="exam-answer"><summary>展开答案</summary>

$n$ 次。

</details>

### 5. 补全两个递增链表的合并函数

<details class="exam-answer"><summary>展开答案</summary>

取 `p` 时依次执行 `r->link=p; r=p; p=p->link;`；取 `q` 时同理。循环结束后可写 `r->link = (p != NULL) ? p : q;`。

</details>

### 6. 长度为 $n$ 的顺序表，在第 $i$ 个元素前插入，需要后移多少个元素？

<details class="exam-answer"><summary>展开答案</summary>

$n-i+1$ 个。

</details>

### 7. 顺序存储和链式存储在插入、删除上的复杂度分别是什么？

<details class="exam-answer"><summary>展开答案</summary>

顺序存储平均移动近一半元素，为 $O(n)$；已知链表结点位置后，局部插入、删除为 $O(1)$。

</details>

### 8. 顺序表每元素占 4 个单元，首地址为 100，第 10 个元素地址是多少？

<details class="exam-answer"><summary>展开答案</summary>

$100+(10-1)\times4=136$。

</details>

### 9. 在 `p` 所指结点后插入 `q`，两条语句是什么？

<details class="exam-answer"><summary>展开答案</summary>

`q->link=p->link; p->link=q;`。

</details>

### 10. 数组表示的长度为 $n$ 的线性表，等概率删除任一元素，平均移动多少个元素？

<details class="exam-answer"><summary>展开答案</summary>

$(n-1)/2$ 个。

</details>

## 编程题提交

### 连续线段

<details class="exam-answer"><summary>查看提交实现</summary>

提交代码遍历线段数据并维护连续关系。独立题面没有保留，无法确认“连续”的全部判定约束，故不从实现反推题意。

</details>

### 多项式相乘

<details class="exam-answer"><summary>查看提交实现</summary>

课程保存的讲解 PDF 明确采用链表法：两输入链表结点保存系数和指数，枚举两表项相乘，再把结果按指数递减插入第三条链；指数相同则合并系数。

</details>

### 文件加密（环）

<details class="exam-answer"><summary>查看提交实现</summary>

源目录保存输入、加密结果和提交代码。实现以环式移动处理文件字符；由于教师题面和完整密钥约定未保存，这里只保留提交边界。

</details>

### 空闲空间申请模拟（最佳适应）

<details class="exam-answer"><summary>查看提交实现</summary>

提交维护空闲分区，申请时选择能够容纳请求的最小分区，分配后更新剩余空间。这对应最佳适应策略；关键不变量是空闲表始终准确覆盖尚未分配的区间。

</details>

### 词频统计

<details class="exam-answer"><summary>查看提交实现</summary>

讲解 PDF 与代码均保留：提交把不同单词放入结构数组，已存在则增加计数，否则追加新项，最后用 `qsort` 按单词字典序输出。线性查找已有单词使最坏代价较高，后续作业会改用树结构。

</details>
