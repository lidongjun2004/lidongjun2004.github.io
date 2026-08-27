---
title: "2016 年冬《计算机组成与体系结构》期末试卷"
description: "2015—2016 学年第一学期《计算机组成与体系结构》期末试卷完整题面。"
date: 2026-08-27
tags: ["真题"]
---

考试日期为 2016 年 1 月 12 日。这份试卷与同月 21 日的《计算组成原理》卷不是同一套题：内容更接近 CS:APP，覆盖数据表示、x86 栈、Cache、链接、进程和虚拟内存。源 PDF 只有空白答题页，没有答案，因此本文不补写解析。

## Problem 1：选择题（20 分）

### 1. 移位与类型转换

```c
int x = 0x152F2F10 >> 12;
char y = (char)x;
unsigned char z = (unsigned char)x;
printf("%d, %u", y, z);
```

`printf` 的输出是什么？

A. `-241, 15`

B. `-15, 241`

C. `-12, 244`

D. `-14, 242`

### 2. 补码溢出

在二进制补码中，$T_{\max}+1$ 等于什么？

A. $T_{\min}$

B. $T_{\max}$

C. 0

D. -1

### 3. 除法与右移

```c
int x = -17 / 4;
int y = -17 >> 2;
```

`x`、`y` 分别是多少？

A. `x=-5, y=-5`

B. `x=-4, y=-4`

C. `x=-5, y=-4`

D. `x=-4, y=-5`

### 4. C 语言表达式

以下哪一项恒为真？

A. `10000U > -1`

B. 对任意 `double d`，`d*d >= 0`

C. 对任意 `int x`，`x*x >= 0`

D. 对任意 `int x`，`x == (int)(float)x`

### 5. x86 栈

Intel x86 默认的栈（　）。

A. 位于内存底部

B. 向较小地址增长

C. 向较大地址增长

D. 位于堆中

### 6. 字节序

Intel x86-64 系统是（　）。

A. 小端

B. 大端

C. 没有字节序

D. 取决于操作系统

### 7. 补码取负

二进制值 `00001011` 的补码负数是（　）。

A. `11110100`

B. `11110111`

C. `11110101`

D. `10001011`

### 8. 信号默认动作

以下哪一项不是任何信号类型的默认动作？

A. 进程终止

B. 进程回收等待队列中的僵尸进程

C. 进程停止，直到收到 `SIGCONT`

D. 进程忽略该信号

E. 进程终止并生成 core dump

### 9. `fork`

成功时，`fork` 被调用一次，一共返回多少次？

A. 0

B. 1

C. 2

D. 3

### 10. Cache 组号

一个系统采用 4 路组相联 Cache，共 16 组，块大小 32 字节。字节地址 `0xdeadbeef` 映射到哪一组？

A. Set 7

B. Set 11

C. Set 13

D. Set 14

## Problem 2：7 位浮点格式（12 分）

有两种仿照 IEEE 浮点数设计的 7 位、无符号格式，只表示非负数。

- Format A：3 位阶码，偏置为 3；4 位小数。
- Format B：4 位阶码，偏置为 7；3 位小数。

把给定格式的值转换成另一格式中最接近的值；必要时采用舍入到偶数。位模式的值用整数或分数表示。

| Format A Bits | Format A Value | Format B Bits | Format B Value |
| --- | --- | --- | --- |
| `010 1110` |  |  |  |
| `110 1111` |  |  |  |
| `000 0001` |  |  |  |
|  |  |  | 16 |

## Problem 3：x86 栈与 `strcpy`（10 分）

以下 C 代码在 32 位机器上编译：

```c
void foo(char *str, int a) {
    int buf[2];
    a = a;                 /* Keep GCC happy */
    strcpy((char *)buf, str);
}

/* caller() 栈帧的基址是 0xffffd3a0 */
void caller() {
    foo("0123456789", 0xdeadbeef);
}
```

对应的 32 位 Linux/x86 汇编为：

```text
080483c8 <foo>:
080483c8 <foo+0>:    push  %ebp
080483c9 <foo+1>:    mov   %esp,%ebp
080483cb <foo+3>:    sub   $0x18,%esp
080483ce <foo+6>:    lea   -0x10(%ebp),%edx
080483d1 <foo+9>:    mov   0x8(%ebp),%eax
080483d4 <foo+12>:   mov   %eax,0x4(%esp)
080483d8 <foo+16>:   mov   %edx,(%esp)
080483db <foo+19>:   call  0x80482c0 <strcpy@plt>
080483e0 <foo+24>:   leave
080483e1 <foo+25>:   ret

080483e2 <caller>:
080483e2 <caller+0>:  push  %ebp
080483e3 <caller+1>:  mov   %esp,%ebp
080483e5 <caller+3>:  sub   $0x8,%esp
080483e8 <caller+6>:  movl  $0xdeadbeef,0x4(%esp)
080483f0 <caller+14>: movl  $0x80485d0,(%esp)
080483f7 <caller+21>: call  0x80483c8 <foo>
080483fc <caller+26>: leave
080483fd <caller+27>: ret
```

已知 `strcpy` 会把终止字符 `\0` 一并复制；机器采用小端序；字符 `'0'` 到 `'9'` 的十六进制编码依次为 `0x30` 到 `0x39`。

A. `foo` 调用 `strcpy` 前，是否存在一个能保证 `buf[x] == a` 的整数 `x`？若存在，求 `x`。

B. 被 `strcpy` 复制之前，字符串 `"0123456789"` 存在哪个内存地址？

C. `strcpy` 返回 `foo` 后，填写下列十六进制值：

```text
buf[0] = 0x________
buf[1] = 0x________
buf[4] = 0x________
buf[5] = 0x________
```

D. `foo` 执行 `ret` 前，`%esp` 指向的栈顶值是什么？

E. 调用 `caller()` 的函数会发生段错误或察觉栈损坏吗？解释原因。

## Problem 4：二维数组与汇编（10 分）

`M`、`N` 是由 `#define` 声明的常数：

```c
int array1[M][N];
int array2[N][M];

int copy(int i, int j) {
    array1[i][j] = array2[j][i];
}
```

编译得到：

```text
copy:
    pushl %ebp
    movl  %esp,%ebp
    pushl %ebx
    movl  8(%ebp),%ecx
    movl  12(%ebp),%ebx
    leal  (%ecx,%ecx,8),%edx
    sall  $2,%edx
    movl  %ebx,%eax
    sall  $4,%eax
    subl  %ebx,%eax
    sall  $2,%eax
    movl  array2(%eax,%ecx,4),%eax
    movl  %eax,array1(%edx,%ebx,4)
    popl  %ebx
    movl  %ebp,%esp
    popl  %ebp
    ret
```

求 `M` 和 `N`。

## Problem 5：循环展开与 CPE（10 分）

以下函数计算整数数组的乘积，循环按 3 展开：

```c
int aprod(int a[], int n) {
    int i, x, y, z;
    int r = 1;
    for (i = 0; i < n - 2; i += 3) {
        x = a[i];
        y = a[i + 1];
        z = a[i + 2];
        r = r * x * y * z;
    }
    for (; i < n; i++)
        r *= a[i];
    return r;
}
```

把乘积的结合方式改成以下五种形式：

```c
r = ((r * x) * y) * z; // A1
r = (r * (x * y)) * z; // A2
r = r * ((x * y) * z); // A3
r = r * (x * (y * z)); // A4
r = (r * x) * (y * z); // A5
```

本题用到的运算延迟与发射间隔如下：

| 运算 | 整数延迟 | 整数发射 | 单精度延迟 | 单精度发射 | 双精度延迟 | 双精度发射 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 加法 | 1 | 0.33 | 3 | 1 | 3 | 1 |
| 乘法 | 3 | 1 | 4 | 1 | 5 | 1 |
| 除法 | 11—21 | 5—13 | 10—15 | 6—11 | 10—23 | 6—19 |

根据数据依赖，分别求 A1—A5 的 CPE 下界。

## Problem 6：矩阵转置与 Cache（6 分）

```c
typedef int array[2][2];

void transpose(array dst, array src) {
    int i, j;
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            dst[i][j] = src[j][i];
        }
    }
}
```

假设：

- `sizeof(int) == 4`；
- `src` 起始地址为十进制 0，`dst` 起始地址为十进制 16；
- 只有一个直接映射、写分配的 L1 Cache，块大小 8 字节；
- `src`、`dst` 的访问分别是唯一的读缺失、写缺失来源。

A. Cache 数据容量为 16 字节，初始为空。按循环执行顺序，对每次 `src[row][col]` 和 `dst[row][col]` 访问标出命中 `h` 或缺失 `m`。题面已提示第一次读 `src[0][0]` 和第一次写 `dst[0][0]` 都是 `m`。

B. 把 Cache 数据容量改成 32 字节，重复 A。

## Problem 7：链接、作用域与指针（10 分）

在 32 位 Linux 上执行：

```text
gcc -o a.out main.c foo.c
```

`main.c`：

```c
#include <stdio.h>

static int a = 1;
int b = 2;
int c;

int main() {
    int c = 3;
    foo();
    {
        int c = 4;
    }
    printf("a=%d, b=%d, c=%d, ", a, b, c);

    short **p = calloc(8, sizeof(char));
    long *a = (long *)(*p + 0x200);
    c = (int)(a + 0x300);
    printf("a=0x%x, c=0x%x\n", a, c);
    return 0;
}
```

`foo.c`：

```c
int a, b, c;

void foo() {
    a = 100;
    b = 200;
    c = 300;
}
```

写出 `a.out` 的输出：

```text
a=____, b=____, c=____, a=____, c=____
```

## Problem 8：`fork`、`wait` 与输出顺序（10 分）

假设所有函数都正常返回：

```c
int main() {
    if (fork() == 0) {
        if (fork() == 0) {
            printf("3");
        } else {
            pid_t pid;
            int status;
            if ((pid = wait(&status)) > 0) {
                printf("4");
            }
        }
    } else {
        printf("2");
        exit(0);
    }
    printf("0");
    return 0;
}
```

判断下列字符串是否可能成为程序输出，分别圈 Y 或 N。

| 选项 | 输出 |
| --- | --- |
| A | `32040` |
| B | `34002` |
| C | `30402` |
| D | `23040` |
| E | `40302` |

## Problem 9：两级页表地址翻译（12 分）

系统为 32 位 Intel，页面大小 4 KB，采用两级页表：线性地址的第 31—22 位是 Directory 索引，第 21—12 位是 Table 索引，第 11—0 位是 Offset。PDE、PTE 均为 32 位，地址基址在第 31—12 位，最低位 P 为 Present 位。页目录基地址为 `0x0c23b000`，未列出的内存内容均视为 0。

| Address | Contents |
| --- | --- |
| `00023000` | `beefbee0` |
| `00023120` | `12fdc883` |
| `00023200` | `debcfd23` |
| `00023320` | `d2e52933` |
| `00023FFF` | `bcdeff29` |
| `00055002` | `8974d003` |
| `00055004` | `457bc293` |
| `00055008` | `457bd293` |
| `00055464` | `457be293` |
| `0c23b010` | `01288b52` |
| `0c23b020` | `012aab53` |
| `0c23b040` | `00055d01` |
| `0c23b080` | `0FF2d303` |
| `0c23b274` | `00023d03` |
| `0c23b7bc` | `514d2274` |
| `2314d200` | `0fdc1223` |
| `2314d220` | `d21345a9` |
| `2314d4a0` | `d388bcbd` |
| `2314d890` | `00b32d00` |
| `24AEE520` | `b58cdad1` |
| `29DE2504` | `56ffad02` |
| `29DE4400` | `2ab45cd0` |
| `29DE9402` | `d4732000` |
| `29DEE500` | `1a23cdb0` |

对下面两次读取完成虚拟地址到物理地址的翻译。若翻译中出现会阻止查找的错误，在 c 中写 `FAILURE`；例如 PDE 的 Present 位为 0 时，b 留空，c 写 `FAILURE`。

### 1. 读取虚拟地址 `0x7bcd8001`

```text
a. PDE 的物理地址：________________
b. PTE 的物理地址：________________
c. 最终访问的物理地址：____________
```

### 2. 读取虚拟地址 `0x04002abc`

```text
a. PDE 的物理地址：________________
b. PTE 的物理地址：________________
c. 最终访问的物理地址：____________
```
