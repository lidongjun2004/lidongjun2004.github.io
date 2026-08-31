---
title: "第 12 周作业 · 黎曼积分"
description: "教学日历第 12 周教材作业，题目来自教材习题 7.1 与 7.2。"
date: 2026-08-27
tags: ["作业"]
---

本篇按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次教材作业提供答案，因此这里只保留题目，不补写答案。

## 习题 7.1

### 习题 7.1 · 第 1 题（第 2、3 小题）

利用定积分的定义计算下列积分：

1. $\displaystyle\int_0^1x\,dx$；
2. $\displaystyle\int_a^b\frac1{x^2}\,dx$，其中 $b>a>0$。

### 习题 7.1 · 第 2 题

利用定积分的几何意义，计算下列积分：

1. $\displaystyle\int_{-1}^1\sqrt{1-x^2}\,dx$；
2. $\displaystyle\int_a^b\left(x-\frac{a+b}{2}\right)dx$。

## 习题 7.2

### 习题 7.2 · 第 2 题

证明下列函数在给定区间上可积：

1. 设 $f(x)$ 是 $[a,b]$ 上的有界函数，其不连续点为 $x_n$（$n=1,2,\ldots$），且 $\lim_{n\to\infty}x_n=c$。证明 $f(x)$ 在 $[a,b]$ 上可积；
2. 证明函数

   $$
   f(x)=
   \begin{cases}
   0,&x=0,\\
   \dfrac1n,&\dfrac1{n+1}<x\leq\dfrac1n
   \end{cases}
   $$

   在 $[0,1]$ 上可积；
3. 证明 $\operatorname{sgn}\!\left(\sin\dfrac{\pi}{x}\right)$ 在 $[0,1]$ 上可积。

### 习题 7.2 · 第 4 题

设 $f(x)$ 在 $[a,b]$ 上连续且非负。证明：若

$$
\int_a^b f(x)\,dx=0,
$$

则 $f(x)\equiv0$。

### 习题 7.2 · 第 5 题（第 2、3 小题）

不通过计算积分值，比较下列各组积分的大小：

1. $\displaystyle\int_0^{\pi/2}x\,dx$ 与 $\displaystyle\int_0^{\pi/2}\sin x\,dx$；
2. $\displaystyle\int_0^1e^{-x}\,dx$ 与 $\displaystyle\int_0^1e^{-x^2}\,dx$。

### 习题 7.2 · 第 7 题（第 1、2、4 小题）

求下列极限：

1. $\displaystyle\lim_{n\to\infty}\int_0^1\frac{x^n}{1+x}\,dx$；
2. $\displaystyle\lim_{n\to\infty}\int_0^{\pi/2}\sin^n x\,dx$；
3. $\displaystyle\lim_{n\to\infty}\int_n^{n+1}\frac{\cos x}{x}\,dx$。

### 习题 7.2 · 第 8 题（第 1、3 小题）

证明下列不等式：

1. $\displaystyle\frac\pi2<\int_0^{\pi/2}\frac{dx}{\sqrt{1-\frac12\sin^2x}}<\frac\pi{\sqrt2}$；
2. $\displaystyle\frac2\pi<\int_0^1f(x)\,dx<1$，其中

   $$
   f(x)=
   \begin{cases}
   1,&x=0,\\
   \dfrac{\sin x}{x},&0<x\leq1.
   \end{cases}
   $$

### 习题 7.2 · 第 9 题

设 $f(x)$ 在 $[0,1]$ 上连续且单调递减。证明对任意 $\beta\in[0,1]$，都有

$$
\int_0^\beta f(x)\,dx\geq\beta\int_0^1f(x)\,dx.
$$

### 习题 7.2 · 第 10 题

设函数 $f(x),g(x)$ 在 $[a,b]$ 上可积，且 $f(x),g(x)$ 仅在有限个点处不相等。证明

$$
\int_a^b f(x)\,dx=\int_a^b g(x)\,dx.
$$

### 习题 7.2 · 第 11 题

证明下列不等式：

1. 设 $f(x)$ 在 $[a,b]$ 上可积，则

   $$
   \left(\int_a^bf(x)\sin x\,dx\right)^2+
   \left(\int_a^bf(x)\cos x\,dx\right)^2
   \leq(b-a)\int_a^bf^2(x)\,dx;
   $$

2. 设 $f(x)$ 在 $[a,b]$ 上可积且非负，则

   $$
   \left(\int_a^bf(x)\sin nx\,dx\right)^2+
   \left(\int_a^bf(x)\cos nx\,dx\right)^2
   \leq\left(\int_a^bf(x)\,dx\right)^2.
   $$
