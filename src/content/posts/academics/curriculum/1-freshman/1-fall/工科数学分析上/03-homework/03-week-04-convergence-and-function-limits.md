---
title: "第 4 周作业 · 数列收敛与函数极限"
description: "教学日历第 4 周作业，题目来自教材习题 2.4、2.5 与 3.1。"
date: 2026-08-27
tags: ["作业"]
---

我按教学日历指定的题号，从《工科数学分析（上册）》逐题转录。源材料没有随这次作业提供答案，因此这里只保留题目，不补写答案。

## 习题 2.4

### 习题 2.4 · 第 1 题

设 $\{a_n\}$ 单调递增，$\{b_n\}$ 单调递减，且

$$
\lim_{n\to\infty}(b_n-a_n)=0.
$$

证明：$\lim a_n$、$\lim b_n$ 都存在且相等。

### 习题 2.4 · 第 2 题（第 1 小题）

证明下列数列收敛，并求其极限：设 $0<a_1<1$，

$$
a_{n+1}=a_n(2-a_n).
$$

### 习题 2.4 · 第 3 题

设 $a_n>0$，且

$$
\lim_{n\to\infty}\frac{a_n}{a_{n+1}}=l>1.
$$

证明 $\displaystyle\lim_{n\to\infty}a_n=0$。

### 习题 2.4 · 第 4 题

设 $0<x_0<\dfrac13$，

$$
x_{n+1}=x_n(2-3x_n),\qquad n=0,1,2,\ldots
$$

求 $\displaystyle\lim_{n\to\infty}x_n$。

### 习题 2.4 · 第 6 题

1. 设 $a>0$，$x_1>0$，

   $$
   x_{n+1}=\frac12\left(x_n+\frac{a}{x_n}\right),
   \qquad n=1,2,\ldots
   $$

   求 $\displaystyle\lim_{n\to\infty}x_n$。

2. 设 $a>0$，$x_1>0$，

   $$
   x_{n+1}=\frac13\left(2x_n+\frac{a}{x_n^2}\right),
   \qquad n=1,2,\ldots
   $$

   求 $\displaystyle\lim_{n\to\infty}x_n$。

### 习题 2.4 · 第 8 题（第 2、3 小题）

求下列数列的极限：

1. $\displaystyle\lim_{n\to\infty}\left(1+\frac1{n-2}\right)^n$；
2. $\displaystyle\lim_{n\to\infty}\left(1+\frac1n-\frac1{n^2}\right)^n$。

### 习题 2.4 · 第 9 题

求下列极限：

1. $\displaystyle\lim_{n\to\infty}\frac{\ln n}{n}$；
2. $\displaystyle\lim_{n\to\infty}\frac{1+\frac12+\cdots+\frac1n}{\ln n}$。

### 习题 2.4 · 第 10 题

求极限

$$
\lim_{n\to\infty}\left(\frac1{n+1}+\frac1{n+2}+\cdots+\frac1{2n}\right).
$$

### 习题 2.4 · 第 11 题

1. 证明

   $$
   \frac1{2\sqrt{n+1}}<\sqrt{n+1}-\sqrt n<\frac1{2\sqrt n},
   \qquad n=1,2,\ldots
   $$

2. 证明序列

   $$
   x_n=1+\frac1{\sqrt2}+\cdots+\frac1{\sqrt n}-2\sqrt n
   $$

   的极限存在。

## 习题 2.5

### 习题 2.5 · 第 4 题

证明下列数列收敛：

1. $\displaystyle a_n=1-\frac12+\frac13-\cdots+(-1)^{n+1}\frac1n$；
2. $\displaystyle a_n=\sin1+\frac{\sin2}{2^2}+\cdots+\frac{\sin n}{2^n}$；
3. $\displaystyle x_n=\frac{\cos1!}{1\cdot2}+\frac{\cos2!}{2\cdot3}+\cdots+\frac{\cos n!}{n(n+1)}$。

### 习题 2.5 · 第 6 题

证明：数列 $\{a_n\}$ 有界的充分必要条件是，$\{a_n\}$ 的任意子列 $\{a_{n_k}\}$ 都有收敛的子数列。

### 习题 2.5 · 第 7 题

设数列 $\{x_n\}$ 满足 $x_n\in[a,b]$，$n=0,1,2,\ldots$，且发散。证明 $\{x_n\}$ 中必有两个收敛于不同数的子列。

### 习题 2.5 · 第 8 题

设数列定义如下：

$$
x_0=1,\qquad x_{n+1}=\frac1{x_n+1},\qquad n=0,1,2,3,\ldots
$$

用闭区间套定理证明

$$
\lim_{n\to\infty}x_n=\frac{\sqrt5-1}{2}.
$$

## 习题 3.1

### 习题 3.1 · 第 1 题（第 1、3 小题）

用“$\varepsilon$—$\delta$”定义证明下列极限：

1. $\displaystyle\lim_{x\to2}(x^2-6x+10)=2$；
2. $\displaystyle\lim_{x\to x_0}\cos x=\cos x_0$。

### 习题 3.1 · 第 6 题

使用夹逼定理求下列极限：

1. $\displaystyle\lim_{x\to0^+}x\left[\frac1x\right]$；
2. $\displaystyle\lim_{x\to0^+}\left(\frac1x\right)^x$。

### 习题 3.1 · 第 7 题（第 1、3、5、7 小题）

计算下列极限：

1. $\displaystyle\lim_{x\to1}\frac{x^2-1}{x^2+x-2}$；
2. $\displaystyle\lim_{x\to1}\frac{\sqrt x-1}{\sqrt[3]x-1}$；
3. $\displaystyle\lim_{x\to1}\frac{x+x^2+\cdots+x^k-k}{x-1}$，其中 $k\in\mathbb N^*$；
4. $\displaystyle\lim_{x\to1}\left(\frac{k}{x^k-1}-\frac{l}{x^l-1}\right)$，其中 $k,l\in\mathbb N^*$。

### 习题 3.1 · 第 11 题（第 1、3、5、7 小题）

计算下列极限：

1. $\displaystyle\lim_{x\to0}\frac{\sin3x-\sin x}{\sin2x}$；
2. $\displaystyle\lim_{x\to0}\frac{1-\cos x\cos3x}{x^2}$；
3. $\displaystyle\lim_{x\to0}\frac{\sin(\sin x)}x$；
4. $\displaystyle\lim_{n\to\infty}\frac{2^n}{x}\sin\frac{x}{2^n}$，其中 $x\neq0$。

### 习题 3.1 · 第 12 题

求极限

$$
\lim_{n\to\infty}\sin\left(\pi\sqrt{n^2+\sqrt n}\right)
$$

和

$$
\lim_{n\to\infty}2n\sin\left(\pi\sqrt{4n^2+1}\right),
$$

其中 $n$ 为正整数。

### 习题 3.1 · 第 13 题

证明

$$
\lim_{x\to0}\left[\lim_{n\to\infty}
\left(\cos x\cos\frac x2\cos\frac x4\cdots\cos\frac{x}{2^n}\right)
\right]=1,
$$

其中 $n$ 为正整数。
