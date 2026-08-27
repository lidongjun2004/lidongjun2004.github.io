---
title: "第 5 讲 · 函数、作用域与递归"
description: "掌握函数原型、值传递、接口设计、变量生命周期、递归分解和常用标准库函数"
date: 2026-08-27
---

函数把一段计算封装成一个带名字的模块。好的函数不是“把长代码随便切开”，而是用清楚的接口承诺：给我什么，我会返回什么，会不会修改外部状态。

## 1. 函数原型、定义与调用

```c
#include <math.h>
#include <stdio.h>

double distance(double x1, double y1, double x2, double y2);

int main(void)
{
    double d = distance(0, 0, 3, 4);
    printf("%.2f\n", d);
    return 0;
}

double distance(double x1, double y1, double x2, double y2)
{
    double dx = x1 - x2;
    double dy = y1 - y2;
    return sqrt(dx * dx + dy * dy);
}
```

- 原型声明函数名、返回类型和参数类型；
- 定义给出函数体；
- 调用计算实参，把控制权交给函数，再接收返回值。

编译器在调用点之前必须知道函数声明，才能检查参数和返回类型。原型通常写在文件开头或头文件中，定义可以放在 `main` 后面。

返回类型为 `void` 的函数不产生结果值；非 `void` 函数的每条正常结束路径都应返回兼容类型的值。

## 2. 形参、实参与值传递

```c
int square(int x)  /* x 是形参 */
{
    return x * x;
}

int y = square(5); /* 5 是实参 */
```

C 的参数传递永远是值传递：调用时把实参的值复制给形参。修改形参不会修改调用者的普通变量。

```c
void wrong_swap(int a, int b)
{
    int t = a;
    a = b;
    b = t;
}
```

这个函数只交换两个副本。若要修改调用者对象，应传入地址：

```c
void swap(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

swap(&x, &y);
```

“传指针”仍是值传递：复制的是地址值，只是两个地址都指向同一对象。

## 3. 怎样设计一个好接口

函数接口由函数名、参数和返回值组成。设计时按这条顺序：

1. 用一句话说清函数职责；
2. 列出完成职责必需的输入；
3. 决定结果用返回值还是输出参数；
4. 规定非法输入怎样处理；
5. 再写内部算法。

例如日期函数：

```c
int get_weekday(int year, int month, int day);
```

比下面的接口更清楚：

```c
int get_weekday(int yyyymmdd);
```

前者不用让函数内部再拆位，也让调用处自然表达年月日。接口应尽量少依赖全局变量，不暴露内部临时状态，并让正确用法容易、错误用法显眼。

### 3.1 模块化不是函数越多越好

适合独立成函数的内容通常具有至少一个特征：

- 可以用一句话命名；
- 在多处复用；
- 能单独测试；
- 隐藏一段复杂细节；
- 把输入、计算、输出分开后更清晰。

课件中的向量夹角、幂运算、三个数最大值、素数判断、哥德巴赫验证和日期计算，都是把重复或独立逻辑封装成函数的例子。

## 4. 数组参数的本质

```c
double average(const double values[], int n);
```

函数参数位置的 `double values[]` 会调整为 `const double *values`，函数拿到首元素地址，而不是整个数组副本。因此：

- 函数可以通过这个地址访问调用者数组；
- 原型中的 `[]` 不携带实际长度；
- 必须另传 `n`；
- 函数内 `sizeof(values)` 得到指针大小，不是原数组大小。

`const` 表明函数只读数组内容：

```c
double dot(const double a[], const double b[], int n)
{
    double result = 0;
    for (int i = 0; i < n; ++i) {
        result += a[i] * b[i];
    }
    return result;
}
```

## 5. 作用域：名字在哪里可见

### 5.1 局部变量

在函数或语句块内定义，只在对应块及其内层块可见：

```c
int main(void)
{
    int x = 1;
    if (x > 0) {
        int y = 2;
        printf("%d\n", y);
    }
    /* 此处不能使用 y */
}
```

内层可以定义同名变量遮蔽外层，但容易混淆，应谨慎使用。

### 5.2 全局变量

函数外定义的变量具有文件作用域。它便于多个函数共享，却会隐藏依赖，使函数难以复用和测试。除非数据确实代表整个模块的共享状态，优先通过参数传递。

`extern` 声明表示“定义在别处”，常用于多源文件程序；声明不分配新的对象。

## 6. 生命周期：对象在内存中存在多久

### 6.1 自动局部变量

普通局部变量进入语句块时创建，离开时结束生命周期。`auto` 是这种存储期的历史关键字，通常省略。

### 6.2 静态对象

全局变量和 `static` 局部变量在程序整个运行期间存在，并在程序开始时完成一次初始化：

```c
int call_count(void)
{
    static int count = 0;
    return ++count;
}
```

多次调用共享同一个 `count`。它不是每次重新变为 0。静态局部状态会让函数结果依赖调用历史，使用时应明确。

文件作用域的 `static` 还能限制名字只在当前源文件可见；它与“静态生命周期”相关，但作用不完全相同。

课件还提到 `register`：它过去用于建议编译器把变量放进寄存器，现代编译器通常自行优化，不应把它当性能保证。

## 7. 递归：让函数解决更小的同类问题

递归不是“函数神奇地知道答案”，而是一份严格契约：

```text
若问题已经足够小：直接回答
否则：
  把原问题缩成一个或多个更小的同类问题
  调用同一函数解决它们
  组合子问题答案
```

### 7.1 阶乘

$$
n!=
\begin{cases}
1,&n=0,\\
n\times(n-1)!,&n>0.
\end{cases}
$$

```c
long long factorial(int n)
{
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
```

调用 `factorial(4)` 时，栈中依次保存 4、3、2、1、0 五层调用；到基本情况后再逐层返回。递归深度过大会耗尽调用栈。

### 7.2 斐波那契：正确不等于高效

```c
unsigned long long fibonacci(int n)
{
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

定义正确，但同一子问题会被重复计算很多次，时间呈指数增长。循环版本只保存前两项：

```c
unsigned long long fibonacci(int n)
{
    unsigned long long a = 0, b = 1;
    for (int i = 0; i < n; ++i) {
        unsigned long long next = a + b;
        a = b;
        b = next;
    }
    return a;
}
```

选递归还是循环，要同时看问题结构、代码清晰度、重复计算和最大深度。

### 7.3 汉诺塔：先相信接口

定义：`hanoi(n, from, via, to)` 把 `n` 个盘从 `from` 移到 `to`，借助 `via`。

```c
void hanoi(int n, char from, char via, char to)
{
    if (n == 0) {
        return;
    }
    hanoi(n - 1, from, to, via);
    printf("%c -> %c\n", from, to);
    hanoi(n - 1, via, from, to);
}
```

不要在每一层重新展开“更小问题到底怎样做”；只要接口定义正确，就把它当成已经会完成的动作。总移动次数为 $2^n-1$，因此 64 层即使代码很短也无法在现实时间内逐步完成。

### 7.4 递归设计检查

- 基本情况覆盖所有终点吗？
- 每次调用的规模严格变小吗？
- 子问题与原问题确实同构吗？
- 递归返回后还要做什么？
- 是否存在指数级重复计算？
- 最大深度是否安全？

课件的座位选择问题强调“递归重在调用”：先定义子区间函数的职责，再按区间关系拆分，而不是从一大堆循环细节开始。

## 8. 标准库：不要重复造已经可靠的轮子

常用头文件按职责记忆：

| 头文件 | 典型能力 |
|---|---|
| `<stdio.h>` | `scanf`、`printf`、`getchar`、`fgets` |
| `<ctype.h>` | `isdigit`、`isalpha`、`tolower`、`toupper` |
| `<string.h>` | `strlen`、`strcmp`、`strcpy`、`strstr` |
| `<math.h>` | `sqrt`、`sin`、`fabs`、`pow` |
| `<stdlib.h>` | `malloc`、`free`、`qsort`、`bsearch`、`rand` |

### 8.1 字符判断

```c
unsigned char raw = (unsigned char)ch;
if (isdigit(raw)) {
    /* ch 是数字字符 */
}
```

除 `EOF` 外，传给 `<ctype.h>` 分类函数的值必须能表示为 `unsigned char`，强制转换可避免负 `char` 导致未定义行为。

### 8.2 伪随机数

```c
#include <stdlib.h>
#include <time.h>

srand((unsigned)time(NULL));
int die = rand() % 6 + 1;
```

`rand` 产生确定的伪随机序列；`srand` 设置起点。通常在程序开始时播种一次，不要在快速循环中反复播种。`rand() % n` 还可能有轻微取模偏差，基础模拟通常可接受，严谨随机算法要用更合适的生成方法。

## 9. 函数级调试

模块化的直接收益是能单独测试：

```c
printf("gcd(18, 12) = %d\n", gcd(18, 12));
printf("gcd(7, 0) = %d\n", gcd(7, 0));
```

为每个函数准备：普通值、最小值、边界值、非法值。若函数有清晰接口，出错时能先判断是“调用者给错了”“函数内部算错了”还是“接口本身没有定义清楚”。这正是函数比复制粘贴代码更重要的原因。
