---
title: "第 3 周作业 · 极限运算与无穷量"
description: "教学日历第 3 周作业，题目来自教材习题 2.2 与 2.3。"
date: 2026-08-27
tags: ["作业"]
---

本篇按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次作业提供答案，因此这里只保留题目，不补写答案。

## 习题 2.2

### 习题 2.2 · 第 1 题

证明：若子列 $\{a_{2n}\}$、$\{a_{2n+1}\}$ 收敛且有相同极限，则数列 $\{a_n\}$ 收敛。

### 习题 2.2 · 第 2 题

证明：数列 $\{\sin n\}$ 发散。

### 习题 2.2 · 第 5 题

设 $\displaystyle\lim_{n\to\infty}a_n=a$，证明

$$
\lim_{n\to\infty}\sqrt[3]{a_n}=\sqrt[3]{a}.
$$

### 习题 2.2 · 第 6 题（第 3、4、12 小题）

求下列极限：

1. $\displaystyle\lim_{n\to\infty}\left(\frac1{1\cdot2}+\frac1{2\cdot3}+\cdots+\frac1{(n-1)n}\right)$；
2. $\displaystyle\lim_{n\to\infty}\left(1-\frac1{2^2}\right)\left(1-\frac1{3^2}\right)\cdots\left(1-\frac1{n^2}\right)$；
3. $\displaystyle\lim_{n\to\infty}\frac{a_mn^m+a_{m-1}n^{m-1}+\cdots+a_1n+a_0}{b_kn^k+b_{k-1}n^{k-1}+\cdots+b_1n+b_0}$，其中 $m\leqslant k$，$a_m\neq0$，$b_k\neq0$，$m,k\in\mathbb N^*$。

### 习题 2.2 · 第 8 题（第 1、4、6 小题）

求下列数列的极限：

1. $\displaystyle\lim_{n\to\infty}\left(\frac1{\sqrt{n^2+1}}+\frac1{\sqrt{n^2+2}}+\cdots+\frac1{\sqrt{n^2+n}}\right)$；
2. $\displaystyle\lim_{n\to\infty}(\arctan n)^{1/n}$；
3. $\displaystyle\lim_{n\to\infty}(a_1^n+a_2^n+\cdots+a_m^n)^{1/n}$，其中 $a_i>0$，$i=1,\ldots,m$。

## 习题 2.3

### 习题 2.3 · 第 1 题

设 $a_1=2$，$a_{n+1}=2+\dfrac1{a_n}$，$n=1,2,\ldots$。问数列 $\{a_n\}$ 是否收敛；如果收敛，求其极限。

### 习题 2.3 · 第 4 题

证明：

$$
\lim_{n\to\infty}n(\sqrt n-\sqrt{n+1})=-\infty.
$$

### 习题 2.3 · 第 7 题

若

$$
\lim_{n\to\infty}a_{2n}=a,
\qquad
\lim_{n\to\infty}a_{2n+1}=b,
$$

证明：

$$
\lim_{n\to\infty}\frac{a_1+a_2+\cdots+a_n}{n}=\frac{a+b}{2}.
$$

### 习题 2.3 · 第 8 题

1. 设 $a_n>0$，$n=1,2,\ldots$，且 $\displaystyle\lim_{n\to\infty}a_n=a$。证明

   $$
   \lim_{n\to\infty}\sqrt[n]{a_1a_2\cdots a_n}=a.
   $$

2. 设 $a_n>0$，$n=1,2,\ldots$，且 $\displaystyle\lim_{n\to\infty}\dfrac{a_{n+1}}{a_n}=l$。证明

   $$
   \lim_{n\to\infty}\sqrt[n]{a_n}
   =\lim_{n\to\infty}\frac{a_{n+1}}{a_n}=l.
   $$

### 习题 2.3 · 第 9 题

设 $\displaystyle\lim_{n\to\infty}a_n=a$，$\displaystyle\lim_{n\to\infty}b_n=b$，证明

$$
\lim_{n\to\infty}\frac{a_1b_n+a_2b_{n-1}+\cdots+a_nb_1}{n}=ab.
$$
