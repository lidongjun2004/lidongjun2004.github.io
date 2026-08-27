---
title: "第 8 讲 · 数组指针、多重指针与函数指针"
description: "辨清数组和指针，掌握数组指针、多维数组、指针数组、命令行参数、函数指针、qsort 与 bsearch"
date: 2026-08-27
---

这一讲最容易被各种星号和括号淹没。读复杂声明时不要整行硬背，始终从变量名出发，先看它是数组还是指针，再看它最终指向或保存什么。

## 1. 数组名为什么“像指针”

```c
int a[5] = {10, 20, 30, 40, 50};
int *p = a;
```

数组名在大多数表达式中会转换成指向首元素的指针，所以：

```c
a[i] == *(a + i);
p[i] == *(p + i);
```

但数组和指针是不同类型：

- `a` 自己拥有 5 个 `int` 的连续空间；
- `p` 只拥有一个指针大小的空间，里面保存地址；
- `sizeof a` 是整个数组大小；
- `sizeof p` 是指针大小；
- `p` 可以重新赋值，`a = p` 和 `a++` 都不合法。

“数组名像指针”只是在特定表达式中的隐式转换，不是二者本来就是同一种东西。

## 2. `a` 与 `&a`：数值相同，类型不同

对 `int a[5]`：

```c
a      /* 表达式中通常转换为 int *，指向 a[0] */
&a     /* 类型为 int (*)[5]，指向整个数组 */
```

两者打印出的起始地址数值通常相同，但：

```c
a + 1   /* 跨过一个 int */
&a + 1  /* 跨过整个 int[5] */
```

类型决定了步长。

## 3. 数组指针

```c
int (*pa)[5] = &a;
```

从 `pa` 向外读：先遇到 `*`，所以 `pa` 是指针；再遇到 `[5]`，所以它指向“含 5 个 `int` 的数组”。括号不能少：

```c
int *pa[5];   /* 这是含 5 个 int* 元素的数组，即指针数组 */
```

用数组指针访问：

```c
(*pa)[2] = 99;
```

`*pa` 是整个数组，在表达式中又可转换为首元素指针。

## 4. 二维数组就是“数组的数组”

```c
int matrix[3][4];
```

它是长度为 3 的数组，每个元素类型都是 `int[4]`。因此 `matrix` 在表达式中转换成指向第一行的指针，类型为 `int (*)[4]`。

```text
matrix
  ↓
+-------------------+-------------------+-------------------+
| matrix[0]: int[4] | matrix[1]: int[4] | matrix[2]: int[4] |
+-------------------+-------------------+-------------------+
```

函数可这样接收：

```c
void print_matrix(const int (*a)[4], int rows)
{
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < 4; ++j) {
            printf("%d%c", a[i][j], j == 3 ? '\n' : ' ');
        }
    }
}
```

`const int a[][4]` 与上述参数形式等价。列数是类型的一部分，必须知道；行数另传。

## 5. 多维数组怎样映射到线性地址

二维 `a[R][C]` 按行优先存储：

$$
\operatorname{offset}(a[i][j])=iC+j.
$$

三维 `a[D][R][C]`：

$$
\operatorname{offset}(a[i][j][k])=(iR+j)C+k.
$$

最右下标变化最快。线性化不仅用于理解内存，也能让矩阵函数接受运行时维度：

```c
double *at(double *a, int columns, int i, int j)
{
    return &a[i * columns + j];
}
```

此时编译器不再替你检查行宽，公式和边界必须自己保证。

## 6. 多重指针

```c
int value = 42;
int *p = &value;
int **pp = &p;
```

```text
pp ─→ p ─→ value
       地址    42
```

典型用途是让函数修改调用者的指针本身：

```c
void swap_strings(const char **a, const char **b)
{
    const char *t = *a;
    *a = *b;
    *b = t;
}
```

若只传 `const char *a`，函数得到指针值的副本，无法改变调用者保存的地址。

多重指针不等于二维数组。`int **` 指向一个 `int *`；`int (*)[4]` 指向一整行连续的 4 个 `int`，内存布局和步长不同，不能互换。

## 7. 指针数组

```c
const char *subjects[] = {
    "biology",
    "computer science",
    "mathematics"
};
```

`subjects` 是数组，元素是 `const char *`。它只保存各字符串的地址，字符串本体可以长短不同、位于不同位置。

二维字符数组则是固定宽度的连续存储：

```c
char subjects2[3][32];
```

二者差异：

| 指针数组 | 二维数组 |
|---|---|
| 每个元素是地址 | 每行直接拥有固定容量 |
| 各字符串可不同长度 | 每行占相同空间 |
| 交换两个指针即可重排 | 通常要复制整行或排索引 |
| 目标空间需另有合法来源 | 所有字符空间一次分配 |

按字符串长度排序时，可以保留原二维数组不动，只排序一组指向各行的指针，交换成本很低。

## 8. 命令行参数

操作系统调用 `main` 时可以传入参数：

```c
int main(int argc, char *argv[])
{
    for (int i = 0; i < argc; ++i) {
        printf("argv[%d] = %s\n", i, argv[i]);
    }
    return 0;
}
```

- `argc` 是参数个数，至少为 1；
- `argv` 是字符指针数组；
- `argv[0]` 通常是程序名；
- `argv[argc]` 保证为空指针。

命令行传进来的都是字符串，数值要显式解析。`strtol` 比 `atoi` 更适合做错误检查：

```c
if (argc < 2) {
    return 1;
}

char *end = NULL;
long value = strtol(argv[1], &end, 10);
if (end == argv[1] || *end != '\0') {
    /* 没读到数字，或后面还有无法解析的字符 */
}
```

若还要识别超出 `long` 范围，需要在调用前清空 `errno`，并在调用后检查 `ERANGE`。

## 9. 函数指针

函数也有地址。一个接受两个 `int`、返回 `int` 的函数指针声明为：

```c
int (*operation)(int, int);
```

```c
int add(int a, int b)
{
    return a + b;
}

operation = add;
printf("%d\n", operation(2, 3));
```

括号不能省：`int *operation(int, int)` 声明的是“返回 `int *` 的函数”。

函数指针的价值是把固定流程与可变动作分开。例如计算器流程固定，但具体运算可作为参数传入：

```c
int apply(int a, int b, int (*op)(int, int))
{
    return op(a, b);
}
```

这就是回调函数的基本形式。

## 10. 通用排序为什么需要 `void *` 和函数指针

标准库不知道你要排的是整数、浮点数还是结构体，因此 `qsort` 接收：

- 原始数组地址 `void *`；
- 元素个数；
- 每个元素字节数；
- 一个知道怎样比较两个元素的函数。

```c
#include <stdlib.h>

int compare_int(const void *left, const void *right)
{
    int a = *(const int *)left;
    int b = *(const int *)right;
    return (a > b) - (a < b);
}

int values[] = {4, 1, 7, 2};
qsort(values,
      sizeof values / sizeof values[0],
      sizeof values[0],
      compare_int);
```

不要简单写 `return a - b`，差值可能溢出。比较函数必须满足一致的严格顺序：若 `a < b` 返回负数，相等返回 0，`a > b` 返回正数。

### 10.1 排二维点

若每个元素是 `double[2]`，先按 $x$ 升序，$x$ 相同时按 $y$ 降序：

```c
int compare_point(const void *lhs, const void *rhs)
{
    const double *a = lhs;
    const double *b = rhs;

    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return 0;
}
```

调用时元素大小是整行：

```c
qsort(points, n, sizeof points[0], compare_point);
```

## 11. `bsearch`：在有序数组中通用查找

```c
int key = 7;
int *found = bsearch(&key,
                     values,
                     sizeof values / sizeof values[0],
                     sizeof values[0],
                     compare_int);

if (found != NULL) {
    printf("found: %d\n", *found);
}
```

数组必须已经按与比较函数一致的规则排序。存在重复值时，`bsearch` 只保证返回某个匹配项，不保证第一个。

## 12. 复杂声明的阅读法

从变量名开始，按括号和运算符优先级向外读：

```c
int *a[10];          /* a 是数组，含 10 个 int* */
int (*b)[10];        /* b 是指针，指向 int[10] */
int (*f)(double);    /* f 是指针，指向“收 double、返 int”的函数 */
int *g(double);      /* g 是函数，收 double、返 int* */
```

更复杂的类型可以用 `typedef` 给概念命名：

```c
typedef int (*Comparator)(const void *, const void *);
```

目标不是炫耀能写多复杂的声明，而是让类型准确表达内存布局和调用契约。

## 13. 本讲最容易混淆的四组概念

1. 数组与指针：数组拥有元素空间，指针只保存地址；
2. 数组指针与指针数组：`int (*p)[N]` 对比 `int *p[N]`；
3. 二维数组与二重指针：连续定宽行对比指向多个指针；
4. 函数指针与返回指针的函数：括号决定 `*` 属于变量还是返回类型。

只要先画出“谁拥有空间、谁保存谁的地址、加一跨过什么”，这些声明就能还原成具体内存关系。
