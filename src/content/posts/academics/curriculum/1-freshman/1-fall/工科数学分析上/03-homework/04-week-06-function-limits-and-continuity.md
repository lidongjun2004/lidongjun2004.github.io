---
title: "第 6 周作业 · 函数极限与连续性"
description: "教学日历第 6 周作业，题目来自教材习题 3.2 至 3.6。"
date: 2026-08-27
tags: ["作业"]
---

我按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次作业提供答案，因此这里只保留题目，不补写答案。

## 习题 3.2

### 习题 3.2 · 第 1 题（第 2、5 小题）

用函数极限的定义证明：

1. $\displaystyle\lim_{x\to-\infty}\frac{x-2}{2x+3}=\frac12$；
2. $\displaystyle\lim_{x\to+\infty}\sqrt x=+\infty$。

### 习题 3.2 · 第 2 题

已知常数 $a_k$（$k=1,2,\ldots,n$）满足 $\sum_{k=1}^n a_k=0$，证明

$$
\lim_{x\to+\infty}\sum_{k=1}^n a_k\sin\sqrt{x+k}=0.
$$

### 习题 3.2 · 第 3 题（第 1、3 小题）

求下列极限：

1. $\displaystyle\lim_{x\to+\infty}\left(1-\frac2x\right)^{-x}$；
2. $\displaystyle\lim_{x\to0}\left(\frac{1+x}{1-x}\right)^{1/x}$。

### 习题 3.2 · 第 4 题

利用 Heine 定理证明 $\displaystyle\lim_{x\to+\infty}\cos x$ 不存在。

### 习题 3.2 · 第 5 题

已知

$$
\lim_{x\to+\infty}\left(\frac{x-a}{x+a}\right)^x=e^2,
$$

求常数 $a$。

### 习题 3.2 · 第 8 题

设 $f(x)$ 为周期函数且 $\displaystyle\lim_{x\to+\infty}f(x)=A$，证明 $f(x)\equiv A$。

## 习题 3.3

### 习题 3.3 · 第 1 题

若 $f(x)$ 恒正，且在 $[a,b]$ 连续，按定义证明 $\dfrac1{f(x)}$ 在 $[a,b]$ 连续。

### 习题 3.3 · 第 3 题

讨论下列函数的不连续点：

1. $\displaystyle y=\frac{x^2-4}{x^3-3x+2}$；
2. $\displaystyle f(x)=\begin{cases}e^{1/x},&x<0,\\ \sin x,&x\geqslant0;\end{cases}$
3. $\displaystyle y=\frac{x}{\tan x}$；
4. $\displaystyle y=x\left[\frac1x\right]$。

### 习题 3.3 · 第 4 题（第 1、3、5 小题）

计算极限：

1. $\displaystyle\lim_{x\to1}\frac{\sqrt[3]x-1}{\sqrt x-1}$；
2. $\displaystyle\lim_{x\to0}\frac{\sqrt[m]{1+x}-\sqrt[n]{1-2x}}x$，其中 $m,n\in\mathbb N^*$；
3. $\displaystyle\lim_{x\to0}\frac{\sqrt{\cos x}-\sqrt[3]{\cos x}}{x\sin2x}$。

### 习题 3.3 · 第 5 题

若存在正数 $a\neq1$，使定义在 $(0,+\infty)$ 上的函数 $f(x)$ 满足 $f(ax)=f(x)$，证明：若极限 $\displaystyle\lim_{x\to0^+}f(x)$ 或 $\displaystyle\lim_{x\to+\infty}f(x)$ 存在，则 $f(x)$ 为常值函数。

### 习题 3.3 · 第 7 题

已知定义在 $\mathbb R$ 上的函数 $f(x)$ 在某个 $x=x_0$ 处连续，且对所有 $x,y$ 都有

$$
f(x+y)=f(x)+f(y),
$$

证明 $f(x)=f(1)x$。

### 习题 3.3 · 第 9 题

设 $f(x)\in C[a,b]$ 单调递增，且对任意 $x\in[a,b]$ 都有 $a<f(x)<b$。任取 $x_1\in[a,b]$，用递推公式

$$
x_{n+1}=f(x_n),\qquad n=1,2,\ldots
$$

确定数列 $\{x_n\}$。证明 $\displaystyle\lim_{n\to\infty}x_n$ 存在，且其极限 $c$ 满足 $c=f(c)$。

### 习题 3.3 · 第 10 题

设函数 $f(x)$ 满足

$$
|f(x)-f(y)|\leqslant k|x-y|,
\qquad \forall x,y\in(-\infty,+\infty),
$$

其中 $0<k<1$。证明：存在唯一的 $\xi\in(-\infty,+\infty)$，使得 $f(\xi)=\xi$。

## 习题 3.4

### 习题 3.4 · 第 1 题（第 4—7、10 小题）

求下列无穷小或无穷大的阶：

1. $\sqrt{1+\tan x}-\sqrt{1-\sin x}$，$x\to0$；
2. $\sqrt{1+\sqrt{1+\sqrt x}}-\sqrt2$，$x\to0^+$；
3. $\sqrt{x+\sqrt{x+\sqrt x}}$，$x\to0^+$；
4. $x^x-1$，$x\to1$；
5. $(1+x)(1+x^2)\cdots(1+x^n)$，$x\to\infty$。

### 习题 3.4 · 第 3 题（第 2 小题）

求满足下列条件的常数 $a,b$：

$$
\lim_{x\to-\infty}\left(\sqrt{x^2-x+1}-ax-b\right)=0.
$$

### 习题 3.4 · 第 4 题（第 1、5、6 小题）

用等价无穷小替换求下列极限：

1. $\displaystyle\lim_{x\to0}\frac{\sqrt{1+x\tan x}-1}{1-\cos x}$；
2. $\displaystyle\lim_{x\to0}\frac{\sqrt{1+x\sin x}-1}{e^{x^2}-1}$；
3. $\displaystyle\lim_{x\to0}\frac{(1+x^2-2x^3)^{1/n}-1}{\cos x-1}$，其中 $n\in\mathbb N^*$。

### 习题 3.4 · 第 5 题（第 2、3 小题）

计算下列极限：

1. $\displaystyle\lim_{x\to0}\left(\frac{1+\sin x}{1+\tan x}\right)^{\frac1{x(1-\cos x)}}$；
2. $\displaystyle\lim_{x\to\pi/4}(\tan x)^{1/\tan2x}$。

### 习题 3.4 · 第 6 题

求极限

$$
\lim_{x\to0}\left(\frac{a_1^x+a_2^x+\cdots+a_n^x}{n}\right)^{1/x},
$$

其中常数 $a_i>0$，$i=1,2,\ldots,n$。

## 习题 3.5

### 习题 3.5 · 第 2 题

证明函数 $\sqrt x$ 在区间 $[0,+\infty)$ 上一致连续。

### 习题 3.5 · 第 3 题（第 1、3 小题）

讨论下列函数在相应区间上的一致连续性：

1. $f(x)=\sin x^2$：在 $(-\infty,+\infty)$ 上；在 $[0,A]$ 上，其中 $A>0$；
2. $f(x)=\sin\dfrac1x$：在 $(0,+\infty)$ 上；在 $(\delta,+\infty)$ 上，其中 $\delta>0$。

### 习题 3.5 · 第 4 题

设 $f(x)$ 是定义在区间 $I$ 上的函数。若存在正常数 $L$，使得对任意 $x,y\in I$ 都有

$$
|f(x)-f(y)|\leqslant L|x-y|,
$$

则称 $f$ 在 $I$ 上满足 Lipschitz 条件。证明：如果 $f$ 在 $I$ 上满足 Lipschitz 条件，则 $f$ 在 $I$ 上一致连续。

## 习题 3.6

### 习题 3.6 · 第 1 题

设 $f(x)$ 在 $[a,b]$ 上连续，且存在实数 $q\in(0,1)$，使得对于区间 $[a,b]$ 的每一点 $x$，总存在 $y\in[a,b]$，使得

$$
|f(y)|\leqslant q|f(x)|.
$$

证明：至少存在一点 $\xi\in[a,b]$，使得 $f(\xi)=0$。

### 习题 3.6 · 第 2 题

设 $f(x)\in C[0,+\infty)$，且 $\displaystyle\lim_{x\to+\infty}f(x)=A$（有限数）。证明 $f(x)$ 在 $[0,+\infty)$ 上有界。

### 习题 3.6 · 第 4 题

设 $f(x)\in C(-\infty,+\infty)$，且 $\displaystyle\lim_{x\to\infty}f(x)=-\infty$。证明 $f(x)$ 在 $(-\infty,+\infty)$ 内能够取到它的最大值。

### 习题 3.6 · 第 5 题

设 $f(x)\in C[a,b)$，$\displaystyle\lim_{x\to b^-}f(x)=B$。证明：若存在 $x_1\in[a,b)$，使得 $f(x_1)>B$，则 $f(x)$ 在 $[a,b)$ 上取得最大值。

### 习题 3.6 · 第 6 题

设 $f(x)\in C[a,b]$，且 $f(x)$ 的最小值在唯一的点 $x^*$ 取得。又设 $x_n\in[a,b]$（$n=1,2,\ldots$）满足 $f(x_n)\to f(x^*)$。证明 $x_n\to x^*$。

### 习题 3.6 · 第 7 题

证明方程 $2^x-4x=0$ 在 $(0,\frac12)$ 内至少有一个根。

### 习题 3.6 · 第 12 题

设 $f(x)\in C(-\infty,+\infty)$，且 $\displaystyle\lim_{x\to\infty}f(x)$ 存在。证明 $f(x)$ 在 $(-\infty,+\infty)$ 上一致连续。

### 习题 3.6 · 第 13 题

设 $f(x)$ 是 $\mathbb R$ 上的连续周期函数，证明 $f(x)$ 在 $\mathbb R$ 上一致连续。
