---
title: "第四次作业 · 归纳法与基数"
description: "用数学归纳法证明不等式，并练习可数集合与幂集的基数比较"
date: 2026-08-27
tags: ["作业"]
---

源文件保留了本次作业的 3 道题及手写作答。第 9 题原稿只写出了基数夹逼的想法，下面在折叠块中补齐了避免集合重叠的严格论证。

## 第 3 题

证明：

$$
(n+1)!\leq2^{n^2}.
$$

<details class="exam-answer">
<summary>展开查看作答</summary>

先用归纳法证明 $n+1\leq2^n$。

当 $n=0$ 时，$1\leq1$。若 $m+1\leq2^m$，则：

$$
m+2\leq2^m+1\leq2^m+2^m=2^{m+1}.
$$

所以对所有自然数 $n$，$n+1\leq2^n$。再注意：

$$
(n+1)!=1\cdot2\cdots(n+1)\leq(n+1)^n.
$$

于是：

$$
(n+1)!\leq(n+1)^n\leq(2^n)^n=2^{n^2}.
$$

</details>

## 第 9 题

如果集合 $A$ 和 $B$ 都是可数的，试证明 $A\cup B$ 也是可数的。

<details class="exam-answer">
<summary>展开查看作答</summary>

分别按序列列出：

$$
A=\{a_0,a_1,a_2,\ldots\},\qquad
B=\{b_0,b_1,b_2,\ldots\}.
$$

把两个序列交错排列：

$$
a_0,b_0,a_1,b_1,a_2,b_2,\ldots
$$

从左到右扫描，遇到之前已经出现的元素就跳过。$A\cup B$ 中任意元素属于 $A$ 或 $B$，所以必会在这个序列的某个位置出现；去重后便得到 $A\cup B$ 的一个枚举。因此它至多可数。

若 $A\cup B$ 有限，它当然可数；若无限，上述枚举给出它与自然数集的双射。

</details>

## 第 10 题

证明：实数集合 $\mathbb R$ 与自然数集合 $\mathbb N$ 的幂集 $\mathcal P(\mathbb N)$ 等势。

<details class="exam-answer">
<summary>展开查看作答</summary>

原作答使用：

$$
|\mathbb R|=2^{\aleph_0},\qquad
|\mathcal P(\mathbb N)|=2^{|\mathbb N|}=2^{\aleph_0}.
$$

可以把这个结论展开成两边的单射。

任意 $S\subseteq\mathbb N$ 都有特征序列 $(s_0,s_1,\ldots)$。把它映射到三进制数：

$$
x_S=\sum_{n=0}^{\infty}\frac{2s_n}{3^{n+1}}.
$$

不同子集的特征序列不同，因此得到 $\mathcal P(\mathbb N)\to\mathbb R$ 的单射。

反过来，把有理数排成序列 $q_0,q_1,\ldots$，对每个实数 $x$ 定义：

$$
D_x=\{n\in\mathbb N\mid q_n<x\}.
$$

若 $x<y$，有理数稠密性保证存在 $q_n$ 满足 $x<q_n<y$，于是 $n\notin D_x$ 而 $n\in D_y$，所以 $D_x\ne D_y$。这给出 $\mathbb R\to\mathcal P(\mathbb N)$ 的单射。

由 Cantor–Schröder–Bernstein 定理，两集合等势。

</details>
