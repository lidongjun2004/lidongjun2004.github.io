---
title: "第 16 周作业 · 广义积分的判敛"
description: "教学日历第 16 周教材作业，题目来自教材习题 9.3 与 9.4。"
date: 2026-08-27
tags: ["作业"]
---

本篇按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次教材作业提供答案，因此这里只保留题目，不补写答案。教学日历另注明：习题 9.3 第 4、5 题不要求书面完成，但应了解结论与反例，故也将题面列在“阅读题”中。

## 习题 9.3

### 习题 9.3 · 第 1 题

设 $f(x)$ 为非负递减函数，且广义积分 $\displaystyle\int_1^{+\infty}f(x)\,dx$ 收敛。证明当 $x\to+\infty$ 时，

$$
f(x)=o\!\left(\frac1x\right).
$$

### 习题 9.3 · 第 7 题（第 1、3、7、11 小题）

研究下列积分的敛散性：

1. $\displaystyle\int_1^{+\infty}\frac{\ln x}{x}\sin x\,dx$；
2. $\displaystyle\int_0^{+\infty}\frac{x\sin(a+x)}{1+x^\alpha}\,dx$，其中 $\alpha>0$；
3. $\displaystyle\int_1^{+\infty}\frac{\sin x\cos\frac1x}{x}\,dx$；
4. $\displaystyle\int_1^{+\infty}(3-\arctan x)\frac{\cos2x}{x^m}\,dx$，其中 $m>0$。

### 习题 9.3 · 第 8 题（第 1、4 小题）

研究下列积分的绝对收敛性和条件收敛性：

1. $\displaystyle\int_0^{+\infty}\frac{\sqrt{x}\cos x}{1+x}\,dx$；
2. $\displaystyle\int_1^{+\infty}(3-\arctan x)\frac{\cos2x}{x^m}\,dx$，其中 $m>0$。

### 习题 9.3 · 第 9 题

设 $f(x)$ 在 $[a,+\infty)$ 上单调递减趋于 $0$。试用 Dirichlet 判别法证明，广义积分

$$
\int_a^{+\infty}f(x)\,dx,
\qquad
\int_a^{+\infty}f(x)\sin^2x\,dx,
\qquad
\int_a^{+\infty}f(x)\cos^2x\,dx
$$

同时敛散。

### 阅读题：第 4、5 题

1. 证明：若 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 绝对收敛，且 $\lim_{x\to+\infty}g(x)=A$，则 $\displaystyle\int_a^{+\infty}f(x)g(x)\,dx$ 绝对收敛。若将 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 改为条件收敛，结论如何？
2. 设对任意 $A>a$，$g(x)\in R([a,A])$，且 $g(x)$ 在 $[a,+\infty)$ 上有界。若 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛，试问 $\displaystyle\int_a^{+\infty}f(x)g(x)\,dx$ 是否收敛？

## 习题 9.4

### 习题 9.4 · 第 1 题（第 1、4、6 小题）

求下列瑕积分：

1. $\displaystyle\int_0^a\frac{dx}{\sqrt{a-x}}$；
2. $\displaystyle\int_{-1}^1\frac{|x|}{(2-x^2)\sqrt{1-x^2}}\,dx$；
3. $\displaystyle\int_0^1x^m\ln^n x\,dx$。
