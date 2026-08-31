---
title: "第 8 周作业 · 中值定理与函数性态"
description: "教学日历第 8 周作业，题目来自教材习题 4.5 与 4.6。"
date: 2026-08-27
tags: ["作业"]
---

我按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次作业提供答案，因此这里只保留题目，不补写答案。

## 习题 4.5

### 习题 4.5 · 第 3 题

证明：方程

$$
(n+1)a_nx^n+na_{n-1}x^{n-1}+\cdots+3a_2x^2+2a_1x
=a_n+a_{n-1}+\cdots+a_1
$$

在区间 $(0,1)$ 上至少有一个根。

### 习题 4.5 · 第 4 题

设函数 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 上可导，且存在 $c\in(a,b)$，使得

$$
f(a)+f(c)=2f(b).
$$

证明：存在 $\theta\in(a,b)$，使得 $f'(\theta)=0$。

### 习题 4.5 · 第 6 题

设函数 $f(x)$ 在 $[0,1]$ 上有 $n$ 阶导数，且 $f(0)=f(1)=0$。令

$$
F(x)=x^{n-1}f(x).
$$

证明：存在 $\xi\in(0,1)$，使得 $F^{(n)}(\xi)=0$。

### 习题 4.5 · 第 7 题

设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，$f(0)=0$，且对任意 $x\in(0,1)$ 有 $f(x)\neq0$。证明：任取 $a>0$，都存在 $\theta\in(0,1)$，使得

$$
\frac{f'(1-\theta)}{f(1-\theta)}
=a\frac{f'(\theta)}{f(\theta)}.
$$

### 习题 4.5 · 第 8 题

设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)=0$。证明：对任意 $k\in\mathbb R$，存在 $\theta\in(a,b)$，使得

$$
f'(\theta)=k f(\theta).
$$

### 习题 4.5 · 第 9 题

设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导。证明存在 $\xi\in(a,b)$，使得

$$
2\xi\,[f(b)-f(a)]=(b^2-a^2)f'(\xi).
$$

### 习题 4.5 · 第 10 题

设非线性函数在 $[a,b]$ 上连续，在 $(a,b)$ 内可导。证明在 $(a,b)$ 上至少存在一点 $\eta$，使得

$$
|f'(\eta)|>\left|\frac{f(b)-f(a)}{b-a}\right|.
$$

### 习题 4.5 · 第 11 题

设 $f(x)$ 在区间 $(a,b)$ 上可导。证明：对任意 $x_0\in(a,b)$，存在趋于 $x_0$ 的两个数列 $\{x_n\}$、$\{y_n\}$，其中 $x_n<x_0<y_n$，使 $\{f'(x_n)\}$ 和 $\{f'(y_n)\}$ 都趋于 $f'(x_0)$。

### 习题 4.5 · 第 12 题

求数列极限

$$
\lim_{n\to\infty}n^2\left(\arctan\frac an-\arctan\frac a{n+1}\right),
$$

其中 $a\neq0$ 为常数。

### 习题 4.5 · 第 15 题（第 1 小题）

证明恒等式

$$
2\arctan x+\arcsin\frac{2x}{1+x^2}=\pi,
\qquad x\in[1,+\infty).
$$

### 习题 4.5 · 第 16 题（第 1、3 小题）

利用 Lagrange 公式证明不等式：

1. $|\sin x-\sin y|\leqslant|x-y|$，$x,y\in\mathbb R$；
2. $\displaystyle\frac{\beta-\alpha}{\cos^2\alpha}<\tan\beta-\tan\alpha<\frac{\beta-\alpha}{\cos^2\beta}$，其中 $0<\alpha<\beta<\dfrac\pi2$。

### 习题 4.5 · 第 17 题

设 $x_2>x_1>0$。证明：存在 $\xi\in(x_1,x_2)$，满足

$$
x_1e^{x_2}-x_2e^{x_1}=(1-\xi)e^\xi(x_1-x_2).
$$

## 习题 4.6

### 习题 4.6 · 第 1 题（第 1 小题）

研究函数

$$
f(x)=\left(1+\frac1x\right)^x,
\qquad x\in(0,+\infty)
$$

在指定区间内的单调性，并根据结论证明

$$
\left(1+\frac1x\right)^x<e<\left(1+\frac1x\right)^{x+1},
\qquad x>0.
$$

### 习题 4.6 · 第 2 题（第 1、2 小题）

利用函数的单调性证明：

1. $\displaystyle x-\frac{x^3}{6}<\sin x<x$，当 $x>0$ 时；
2. $\displaystyle x-\frac{x^2}{2}<\ln(1+x)<x$，当 $x>0$ 时。

### 习题 4.6 · 第 3 题

设函数 $f(x)$ 在区间 $[a,+\infty)$ 上连续，在 $(a,+\infty)$ 可导，且 $f'$ 严格单调递增。证明

$$
F(h)=\frac{f(a+h)-f(a)}h
$$

关于 $h$ 也严格单调递增。

### 习题 4.6 · 第 5 题

设 $f(x)$ 在 $\mathbb R$ 上有连续二阶导数。若 $f(x)$ 在 $\mathbb R$ 上有界，证明存在 $\theta\in\mathbb R$，使得 $f''(\theta)=0$。

### 习题 4.6 · 第 6 题（第 4 小题）

求函数

$$
y=x-\ln(1+x)
$$

的极值点，并确定其单调区间。

### 习题 4.6 · 第 9 题（第 2、3 小题）

求下列函数在指定区间上的最大值和最小值：

1. $\displaystyle f(x)=|2x^3-9x^2+12x|$，$x\in\left[-\frac14,\frac52\right]$；
2. $\displaystyle f(x)=x^2e^{-nx}$，$x\in(0,+\infty)$。

### 习题 4.6 · 第 10 题（第 1 小题）

在 $\alpha>1$ 的情形下，求函数

$$
f(x)=(1+x)^\alpha-\alpha x
$$

在 $(-1,+\infty)$ 上的最值，并据此证明 Bernoulli 不等式：当 $x\geqslant-1$ 时，

$$
(1+x)^\alpha\geqslant1+\alpha x.
$$

### 习题 4.6 · 第 15 题

设 $f(x)$ 是区间 $(a,b)$ 上的凸函数。证明：对任意 $x\in(a,b)$，$f(x)$ 在 $x$ 点连续，并存在左右导数。

> 教材提示：凸函数的定义中并没有预先假设函数连续。

### 习题 4.6 · 第 18 题（第 2 小题）

判断函数

$$
f(x)=\ln\frac{x}{1+x},
\qquad x>0
$$

的凹凸性。

### 习题 4.6 · 第 19 题（第 1 小题）

求曲线

$$
y=-x^3+3x^2
$$

的拐点。
