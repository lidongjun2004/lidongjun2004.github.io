---
title: "第 7 周作业 · 导数与高阶导数"
description: "教学日历第 7 周作业，题目来自教材习题 4.1 至 4.4。"
date: 2026-08-27
tags: ["作业"]
---

我按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次作业提供答案，因此这里只保留题目，不补写答案。

## 习题 4.1

### 习题 4.1 · 第 1 题

设函数 $f(x)$ 在 $x=0$ 可导，且 $f(0)=0$，$f'(0)=1$，求

$$
\lim_{n\to\infty}n f\left(\frac1n\right).
$$

### 习题 4.1 · 第 2 题

求实数 $a$，使曲线 $y=ax^3$ 和曲线 $y=\ln x$ 相切。这里“相切”指两条曲线有一条共同的切线。

### 习题 4.1 · 第 3 题

证明：

1. 若 $f(x)$ 是可导的偶函数，则 $f'(x)$ 是奇函数；
2. 若 $f(x)$ 是可导的奇函数，则 $f'(x)$ 是偶函数；
3. 若 $f(x)$ 是可导的周期函数，则 $f'(x)$ 仍是周期函数。

### 习题 4.1 · 第 7 题

已知在原点的某个邻域内有 $|f(x)|\leqslant|g(x)|$，且 $g'(0)=g(0)=0$，求 $f'(0)$。

### 习题 4.1 · 第 8 题

设 $f(x)$ 为 $(-\infty,+\infty)$ 上的可导函数，且在 $x=0$ 的某个邻域内成立

$$
f(1+\sin x)-3f(1-\sin x)=8x+\alpha(x),
$$

其中 $\alpha(x)$ 是当 $x\to0$ 时比 $x$ 高阶的无穷小量。求曲线 $y=f(x)$ 在点 $(1,f(1))$ 处的切线方程。

### 习题 4.1 · 第 9 题

已知 $f'(0)=a$，$f(0)=b\neq0$，求数列极限

$$
\lim_{n\to\infty}\left[\frac{f(1/n)}{f(0)}\right]^n.
$$

### 习题 4.1 · 第 13 题

设

$$
f(x)=
\begin{cases}
0,&x=0,\\
|x|^\lambda\cos\dfrac1x,&x\neq0.
\end{cases}
$$

证明：

1. 当 $\lambda>1$ 时，$f'(0)$ 存在；
2. 当 $0\leqslant\lambda\leqslant1$ 时，$f(x)$ 在 $x=0$ 处不可导。

## 习题 4.2

### 习题 4.2 · 第 1 题（第 6、8 小题）

求下列函数的导函数：

1. $\displaystyle\frac{x^2\cos x-\ln x}{\sqrt x+3}$；
2. $\displaystyle\frac{x^2+\sec x}{x-\csc x}$。

### 习题 4.2 · 第 4 题（第 1、6、10 小题）

求下列函数的导数：

1. $e^{ax}\sin bx$；
2. $\ln(\cos x+\sin x)$；
3. $\ln\left(x+\sqrt{a^2+x^2}\right)$。

### 习题 4.2 · 第 5 题

记

$$
\sinh x=\frac{e^x-e^{-x}}2,
\qquad
\cosh x=\frac{e^x+e^{-x}}2,
$$

分别称为双曲正弦函数和双曲余弦函数。证明：

1. $\cosh^2x-\sinh^2x=1$；
2. $(\sinh x)'=\cosh x$，$(\cosh x)'=\sinh x$。

并分别求出它们的反函数 $\operatorname{arcsinh}x$ 和 $\operatorname{arccosh}x$ 的导数。

### 习题 4.2 · 第 6 题（第 1、4 小题）

求下列函数的导数：

1. $\sqrt x$，$x>0$；
2. $y=(x-x_1)(x-x_2)\cdots(x-x_n)$。

### 习题 4.2 · 第 10 题

在 $\mu$ 满足什么条件时，函数

$$
f(x)=
\begin{cases}
|x|^\mu\sin\dfrac1x,&x\neq0,\\
0,&x=0
\end{cases}
$$

分别满足：

1. 在 $x=0$ 处连续；
2. 在 $x=0$ 处可导；
3. 在 $x=0$ 处其导函数连续。

## 习题 4.3

### 习题 4.3 · 第 1 题（第 1、3 小题）

求下列方程所决定的隐函数 $y=y(x)$ 的导数：

1. $\displaystyle\sqrt{x^2+y^2}=e^{\arctan(y/x)}$；
2. $\displaystyle x^{2/3}+y^{2/3}=a^{2/3}$，其中 $a>0$。

### 习题 4.3 · 第 2 题（第 3 小题）

求由下列参数方程所表示的函数 $y=y(x)$ 的导数：

$$
\begin{cases}
x=a\cos^3t,\\
y=a\sin^3t.
\end{cases}
$$

### 习题 4.3 · 第 3 题

求曲线 $xy+e^y=1$ 在点 $M(1,0)$ 处的切线和法线方程。

### 习题 4.3 · 第 5 题

若曲线有极坐标方程 $r=f(\theta)$，则可得参数方程

$$
x=f(\theta)\cos\theta,
\qquad
y=f(\theta)\sin\theta.
$$

求 $y'(x)$。

## 习题 4.4

### 习题 4.4 · 第 2 题（第 5、7、8 小题）

求下列函数的 $n$ 阶导数：

1. $y=\sin ax\sin bx$；
2. $y=e^x(\sin x+\cos x)$；
3. $\displaystyle y=\ln\frac{a+bx}{a-bx}$。

### 习题 4.4 · 第 3 题（第 2 小题）

求函数 $y=x^2\sin3x$ 的 $n$ 阶导数。

### 习题 4.4 · 第 4 题（第 1 小题）

对于方程

$$
\tan(x+y)-xy=0
$$

所确定的隐函数 $y=y(x)$，求 $\dfrac{d^2y}{dx^2}$。

### 习题 4.4 · 第 5 题（第 2 小题）

对于参数方程

$$
\begin{cases}
x=at\cos t,\\
y=at\sin t
\end{cases}
$$

所确定的函数 $y=y(x)$，求 $\dfrac{d^2y}{dx^2}$。

### 习题 4.4 · 第 6 题

设 $y=(\arcsin x)^2$：

1. 证明 $(1-x^2)y''-xy'=2$；
2. 求 $y^{(n)}(0)$。

### 习题 4.4 · 第 9 题

设

$$
f(x)=
\begin{cases}
x^{2n}\sin\dfrac1x,&x\neq0,\\
0,&x=0.
\end{cases}
$$

求 $f^{(n)}(0)$。
