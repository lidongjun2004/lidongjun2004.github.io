---
title: "E5 练习赛解题记录（原题面缺失）"
description: "根据 E5 解析册与留存代码整理；原始题面、完整输入输出和约束未保留，不把推断内容冒充原题"
date: 2026-08-27
tags: ["作业"]
---

这不是一份完整题单。源目录只保留了 `E5 - Solution.pdf` 和我当时 A～H 的答题代码，没有原始题面；解析册也多次直接引用“题目描述”，没有重印完整输入、输出与数据约束。

因此，下面折叠外只记录解析册能够直接确认的题名、难度、考点和任务轮廓，不补造缺失条件；折叠内整理解析册思路与我留存代码的核心实现。我没有保留 I、J 的代码，只记录解析册方案。若要重新提交这些题，必须先找到原 OJ 题面核对全部约束。

## A. 无幂之幂

- 难度：1
- 考点：函数
- 可确认任务：解析册示例对多组整数 $a,b$，自行实现整数幂和绝对值，输出 $|a^b-b^a|$；代码中禁止出现解析册列出的 `math.h`、`pow`、`abs` 字符串。完整取值范围未保留。

<details class="exam-answer">
<summary>查看解析与我的核心代码</summary>

用循环连乘实现非负整数指数，用分支实现绝对值。解析册还用这题提醒：函数式宏是文本替换，每个参数和整个展开式都要加括号；即便括号正确，也不要传入 `i++` 这类带副作用表达式。

我的核心实现：

```cpp
int absolute_value(int x)
{
    return x >= 0 ? x : -x;
}

int main()
{
    int a, b;
    while (scanf("%d%d", &a, &b) == 2) {
        int power_ab = 1;
        int power_ba = 1;
        for (int i = 0; i < b; ++i) power_ab *= a;
        for (int i = 0; i < a; ++i) power_ba *= b;
        printf("%d\n", absolute_value(power_ab - power_ba));
    }
    return 0;
}
```

由于原范围缺失，无法确认 `int` 是否始终足够，也不能确认指数是否保证非负。

</details>

## B. 阶阶乘乘

- 难度：2
- 考点：函数、模运算
- 可确认任务：解析册示例定义阶乘取模函数，并把第一次调用结果再次作为函数实参，即计算形如 `factorial_mod(factorial_mod(n))` 的结果；模数为 1000000007。原题对 $n$ 的约束和数学表达式未完整保留。

<details class="exam-answer">
<summary>查看解析与我的核心代码</summary>

每乘一个因子就取模，避免先产生完整阶乘：

```cpp
const long long MOD = 1000000007LL;

long long factorial_mod(long long n)
{
    long long result = 1;
    while (n > 0) {
        result = result * n % MOD;
        --n;
    }
    return result;
}

int main()
{
    long long n;
    while (scanf("%lld", &n) == 1) {
        printf("%lld\n", factorial_mod(factorial_mod(n)));
    }
    return 0;
}
```

必须特别小心：一般而言，先把内层阶乘对模数取余，再拿余数当外层阶乘的“自变量”，并不天然等价于先算完整内层阶乘。解析册说明这里依赖原题范围与模数关系；由于约束已缺失，不能把这份写法推广到任意模数和任意 $n$。

</details>

## C. 朗伯 W 函数

- 难度：3
- 考点：二分法求函数零点
- 可确认任务：解析册示例在区间 $[-1,10]$ 内求满足 $we^w=x$ 的数值解，输出 6 位小数；$x$ 的完整范围未保留。

<details class="exam-answer">
<summary>查看解析与我的核心代码</summary>

把问题改写为在单调区间上寻找 `f(w) = w * exp(w)` 与输入 `x` 的交点。若 `f(mid) > x`，答案在左半边；否则在右半边。

```cpp
#include <math.h>
#include <stdio.h>

double f(double w)
{
    return w * exp(w);
}

int main()
{
    double x;
    scanf("%lf", &x);

    double left = -1.0;
    double right = 10.0;
    while (right - left > 1e-8) {
        double mid = (left + right) / 2.0;
        if (f(mid) > x) right = mid;
        else left = mid;
    }
    printf("%.6f", (left + right) / 2.0);
    return 0;
}
```

二分正确性的前提是原题保证解存在于该区间，且所用分支上的函数单调；这两个条件应以原题为准。

</details>

## D. 经典的三角形

- 难度：3
- 考点：函数
- 可确认任务：解析册读入 10 个边长，按固定的 7 组三元下标调用分类函数；先判断是否成三角形，再按最大角分类为锐角、直角或钝角，并判断等腰或等边。完整输入输出说明未保留。

<details class="exam-answer">
<summary>查看解析与我的核心代码</summary>

先把最大边放到 `a`，即可用三角形不等式和勾股关系分类：

```cpp
void triangle(int number, long long a, long long b, long long c)
{
    printf("Question %d:\n", number);

    if (b > a) { long long t = a; a = b; b = t; }
    if (c > a) { long long t = a; a = c; c = t; }

    if (b + c <= a) {
        printf("no triangle\n");
        return;
    }

    long long left = b * b + c * c;
    long long right = a * a;
    if (left > right) printf("acute triangle\n");
    else if (left == right) printf("right triangle\n");
    else printf("obtuse triangle\n");

    if (a == b && b == c) printf("equilateral triangle\n");
    else if (a == b || b == c || a == c) printf("isosceles triangle\n");
}
```

我留存的代码把“角分类”和“等腰分类”拆成 `f1`、`f2` 两个函数，再用二维下标表保存 7 组三元组合。上面合并为一段是为了阅读方便，输出字符串沿用解析册。

</details>

## E. 计算不确定度

- 难度：3
- 考点：循环、浮点数、计算
- 可确认任务：读入一组测量数据，输出平均值与 A 类标准不确定度，均保留 6 位小数。原题的样例和 $n$ 的范围未保留。

<details class="exam-answer">
<summary>查看解析与我的核心代码</summary>

解析册使用：

$$
\bar x=\frac1n\sum_{i=1}^{n}x_i,
\qquad
u_A=\sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar x)^2}{n(n-1)}}.
$$

必须先读完并得到平均值，才能计算各项偏差。

```cpp
#include <math.h>
#include <stdio.h>

int main()
{
    double data[1000];
    double average = 0.0;
    double sum_square = 0.0;
    int n;

    scanf("%d", &n);
    for (int i = 0; i < n; ++i) {
        scanf("%lf", &data[i]);
        average += data[i];
    }
    average /= n;

    for (int i = 0; i < n; ++i) {
        double difference = data[i] - average;
        sum_square += difference * difference;
    }

    double uncertainty = sqrt(sum_square / n / (n - 1));
    printf("%.6f\n%.6f", average, uncertainty);
    return 0;
}
```

公式要求 $n>1$；是否由原题保证，需要找回原题确认。

</details>

## F. 哪吒的水题

- 难度：4
- 考点：二分法、三分法
- 可确认任务：在两个给定横坐标之间选择供水站位置，使到两个给定点的加权距离和最小，并输出位置与最小费用，各保留 3 位小数。输入六个参数的确切命名和范围未完整保留。

<details class="exam-answer">
<summary>查看解析与我的核心代码</summary>

解析册给出两条路线：对费用函数求导后二分导数零点；或利用费用函数先减后增的单峰性质直接三分。我留存的是三分版本：

```cpp
#include <math.h>
#include <stdio.h>

double cost(double x,
            double x1, double y1,
            double x2, double y2,
            double weight1, double weight2)
{
    double d1 = hypot(x - x1, y1);
    double d2 = hypot(x - x2, y2);
    return weight1 * d1 + weight2 * d2;
}

int main()
{
    double x1, y1, x2, y2, weight1, weight2;
    scanf("%lf%lf%lf%lf%lf%lf",
          &x1, &y1, &x2, &y2, &weight1, &weight2);

    double left = x1;
    double right = x2;
    while (right - left > 1e-8) {
        double mid1 = (2 * left + right) / 3.0;
        double mid2 = (left + 2 * right) / 3.0;
        if (cost(mid1, x1, y1, x2, y2, weight1, weight2)
            > cost(mid2, x1, y1, x2, y2, weight1, weight2)) {
            left = mid1;
        } else {
            right = mid2;
        }
    }

    double answer = (left + right) / 2.0;
    printf("%.3f %.3f",
           answer,
           cost(answer, x1, y1, x2, y2, weight1, weight2));
    return 0;
}
```

三分的必要前提是搜索区间内目标函数单峰。若端点次序、权值符号等条件不满足，区间和单峰性都要重新检查。

</details>

## G. 格雷码 2023

- 难度：5
- 考点：递归、分治
- 可确认任务：输入位数 $n$，按解析册规定次序输出全部 $n$ 位格雷码。原题的 $n$ 上限未保留。

<details class="exam-answer">
<summary>查看解析与我的核心代码</summary>

格雷码相邻两项只有一位不同。解析册给出三种方法：递归镜像、二维数组构造、位运算公式。

最短的是：第 $x$ 个格雷码等于

$$
g(x)=x\oplus(x\gg1).
$$

```c
#include <stdio.h>

void print_bits(unsigned value, int n)
{
    for (int bit = n - 1; bit >= 0; --bit) {
        printf("%u", (value >> bit) & 1u);
    }
    putchar('\n');
}

int main(void)
{
    int n;
    scanf("%d", &n);
    for (unsigned x = 0; x < (1u << n); ++x) {
        print_bits(x ^ (x >> 1), n);
    }
    return 0;
}
```

我留存的代码用数组按镜像关系逐层构造，属于解析册的第二种方案。位运算版本更短，但 `1u << n` 要求 $n$ 小于 `unsigned` 位宽，具体上限仍需原题确认。

</details>

## H. 让废土重获生机

- 难度：5
- 考点：递归思想
- 可确认任务：对一个 $m\times n$ 区域，分别输出能量石数、有生机区域数和无生机区域数；摆放规则和输入范围只在缺失原题中完整定义，解析册把二维计数拆成两个一维递归。

<details class="exam-answer">
<summary>查看解析与我的核心思路</summary>

解析册定义一维函数 $f(n)$ 表示长度为 $n$ 时可放置的数量：

```c
long long count_one_dimension(long long n)
{
    if (n <= 2) return 1;
    if (n <= 4) return 2;
    if (n % 2 == 1) {
        return 2 * count_one_dimension((n + 1) / 2) - 1;
    }
    return count_one_dimension(n / 2)
         + count_one_dimension(n / 2 + 1) - 1;
}
```

然后令 `rows = f(m)`、`columns = f(n)`：

```c
long long stones = rows * columns;
long long dead = (m - rows) * (n - columns);
long long alive = m * n - dead;
```

我留存的代码也先分别处理 $m$、$n$，再组合三个计数，但把多个小规模情况展开成了分支。这里展示解析册更直接的递推式。

解析册特别提醒：同一个递归子问题不要重复调用，可先保存结果；否则看似只多一次调用，递归树却可能成倍扩大。

</details>

## I. 哪吒的分形

- 难度：5
- 考点：递归、循环、二维数组
- 可确认任务：按给定阶数输出一个中心挖空、四周递归复制的方形分形。原始图样、空格格式和阶数上限应以缺失原题为准。

<details class="exam-answer">
<summary>查看解析册的三种方案</summary>

解析册给出：

1. 递归输出每一行；
2. 对每个坐标递归判断输出 `1` 还是空格；
3. 用二维数组复制四份，再把中心区域清空。

第二种最容易理解。设当前层边长的一半为 `half`，若坐标落在中央区域就输出空格，否则把坐标对 `half` 取模并进入下一层：

```c
void print_cell(int row, int column, int level)
{
    if (level == 0) {
        putchar('1');
        return;
    }

    int half = 1 << (level - 1);
    int in_middle_rows = half <= row && row < 3 * half;
    int in_middle_columns = half <= column && column < 3 * half;
    if (in_middle_rows && in_middle_columns) {
        putchar(' ');
    } else {
        print_cell(row % (2 * half), column % (2 * half), level - 1);
    }
}
```

解析册指出二维数组方案直观但空间很大，而且只适合这种可直接复制的图案；我的 E5 目录没有保留 I 题代码。

</details>

## J. 博丽灵梦的大清洗

- 难度：6
- 考点：递归
- 可确认任务：对 1 到 $n$ 的序列交替执行从上到下、从下到上的消去，输出最终留下的数字；完整操作描述与 $n$ 范围未保留。

<details class="exam-answer">
<summary>查看解析册的递归关系</summary>

解析册将大序列映射成规模减半的小序列，并利用两个方向的对称关系，得到：

```c
int great_purge(int n)
{
    if (n == 1) {
        return 1;
    }
    return 2 * (n / 2 + 1 - great_purge(n / 2));
}
```

每层把 $n$ 缩到 $\lfloor n/2\rfloor$，递归深度为 $O(\log n)$。这类题的关键不是模拟每次删除，而是找出“剩余序列怎样重新编号”以及相反方向之间的对称关系。

我的 E5 目录没有保留 J 题代码。

</details>

## 证据边界小结

- A～J 的题名、难度、考点和上述解法来自 E5 解析册；
- A～H 另有我的代码文件，可用于交叉核对实现轮廓；
- I、J 只有解析册示例；
- 原始题面、完整样例、限制与评测环境均未保留；
- 我故意不补写“输入格式”“输出格式”“数据范围”，也不把它放进真题目录。
