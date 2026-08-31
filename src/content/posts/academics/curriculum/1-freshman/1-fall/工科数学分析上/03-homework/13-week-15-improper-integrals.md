---
title: "第 15 周作业 · 广义积分"
description: "教学日历第 15 周教材作业，题目来自教材习题 9.1 与 9.2。"
date: 2026-08-27
tags: ["作业"]
---

本篇按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次教材作业提供答案，因此这里只保留题目，不补写答案。

## 习题 9.1

### 习题 9.1 · 第 1 题（第 3、5、7、10 小题）

计算下列广义积分：

1. $\displaystyle\int_0^{+\infty}\frac{dx}{x^4+a^4}$；
2. $\displaystyle\int_0^{+\infty}\frac{x\ln x}{(1+x^2)^2}\,dx$；
3. $\displaystyle\int_0^{+\infty}\frac{dx}{1+x^3}$；
4. $\displaystyle\int_0^{+\infty}e^{-ax}\sin bx\,dx$，其中 $a>0$，$b\neq0$。

### 习题 9.1 · 第 3 题

求 $c$ 的值，使广义积分

$$
\int_0^{+\infty}\left(\frac{2x}{x^2+1}-\frac{c}{2x+1}\right)dx
$$

收敛，并求出广义积分的值。

### 习题 9.1 · 第 6 题

设 $f(x)$ 是区间 $[a,+\infty)$ 上的连续函数，且 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛。证明：存在数列 $\{x_n\}$，使得

$$
\lim_{n\to\infty}x_n=+\infty,
\qquad
\lim_{n\to\infty}f(x_n)=0.
$$

## 习题 9.2

### 习题 9.2 · 第 1 题（第 1、3、7 小题）

判定下列广义积分的敛散性：

1. $\displaystyle\int_1^{+\infty}\frac{x}{1+x^2}\,dx$；
2. $\displaystyle\int_1^{+\infty}\frac{dx}{1+x|\sin x|}$；
3. $\displaystyle\int_0^{+\infty}\frac{\arctan x}{1+x^p}\,dx$。

### 习题 9.2 · 第 2 题

设 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛，是否一定有 $\lim_{x\to+\infty}f(x)=0$？证明：当 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛时，如果存在实数 $b$ 使得 $\lim_{x\to+\infty}f(x)=b$，那么必有 $b=0$。

### 习题 9.2 · 第 4 题

设对任意 $A>a$，函数 $f(x),g(x),h(x)$ 都在 $[a,A]$ 上可积，且对任意 $x\in[a,+\infty)$ 有

$$
g(x)\leq f(x)\leq h(x).
$$

证明：当 $\displaystyle\int_a^{+\infty}g(x)\,dx$ 和 $\displaystyle\int_a^{+\infty}h(x)\,dx$ 都收敛时，$\displaystyle\int_a^{+\infty}f(x)\,dx$ 必收敛。
