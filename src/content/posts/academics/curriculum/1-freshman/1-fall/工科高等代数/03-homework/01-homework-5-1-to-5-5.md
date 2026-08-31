---
title: "作业 5.1–5.5 · 欧氏空间"
description: "原作业中关于内积、正交基、正交补、正交变换和最短距离的 12 道题。"
date: 2026-08-27
tags: ["作业"]
---

> 以下按《作业 5.1–5.5 习题》转写。源文件只有题面，未附答案或作答，因此我不补造解答。

<!-- markdownlint-disable MD029 -->

## 第 1 题

证明：对任意实数 $a_1,a_2,\ldots,a_n$ 有

$$
|a_1|+|a_2|+\cdots+|a_n|
\le
\sqrt{n(a_1^2+a_2^2+\cdots+a_n^2)}.
$$

## 第 2 题

设 $\alpha\ne\beta$ 是欧氏空间中长度为 $1$ 的两个向量，求证：$(\alpha,\beta)\ne1$。

## 第 3 题

设 $\alpha_1,\ldots,\alpha_n$ 是欧氏空间 $\mathbb R^n$ 的一组基，$\alpha,\beta\in\mathbb R^n$，求证：

1. $\alpha=0\Longleftrightarrow(\alpha,\alpha_i)=0$ 对所有 $1\le i\le n$ 成立；
2. $\alpha=\beta\Longleftrightarrow(\alpha,\alpha_i)=(\beta,\alpha_i)$ 对所有 $1\le i\le n$ 成立。

## 第 4 题

设 $A=(a_{ij})$ 是一个 $n$ 阶正定阵（若对任意 $X\ne0\in\mathbb R^n$ 有 $X^TAX>0$，则称实对称方阵 $A$ 是正定阵）。对向量

$$
\alpha=(x_1,x_2,\ldots,x_n),
\qquad
\beta=(y_1,y_2,\ldots,y_n)\in\mathbb R^n,
$$

在 $\mathbb R^n$ 上定义内积

$$
(\alpha,\beta)=\alpha A\beta^T.
$$

1. 证明：在这个内积定义下，$\mathbb R^n$ 是一个欧氏空间；
2. 求自然基 $\varepsilon_1=(1,0,\ldots,0),\ldots,\varepsilon_n=(0,0,\ldots,1)$ 的度量矩阵。

## 第 5 题

设 $\eta_1,\eta_2,\eta_3$ 是三维欧氏空间的一组标准正交基，证明

$$
\begin{aligned}
\alpha_1&=\frac13(2\eta_1+2\eta_2-\eta_3),\\
\alpha_2&=\frac13(2\eta_1-\eta_2+2\eta_3),\\
\alpha_3&=\frac13(\eta_1-2\eta_2-2\eta_3)
\end{aligned}
$$

也是一组标准正交基。

## 第 6 题

1. 求齐次方程组

$$
\begin{cases}
x_1+x_2+x_3+x_4+x_5=0,\\
2x_1+3x_2+5x_3+8x_4=0
\end{cases}
$$

的解空间的一组标准正交基。

2. 将 $(1,1,1,1,1),(2,3,5,8,0)$ 扩充为欧氏空间 $\mathbb R^5$ 的一组标准正交基。

## 第 7 题

在欧氏空间 $\mathbb R^4$ 中，设 $W$ 为

$$
\begin{cases}
2x_1+x_2+3x_3-x_4=0,\\
3x_1+2x_2-2x_4=0,\\
3x_1+x_2+9x_3-x_4=0
\end{cases}
$$

的解空间，求 $W^\perp$。

## 第 8 题

设 $\eta$ 是欧氏空间 $V$ 中的一个单位向量，定义

$$
\mathcal A(\alpha)=\alpha-2(\eta,\alpha)\eta.
$$

证明：

1. $\mathcal A$ 是 $V$ 上的正交变换；
2. $\mathcal A$ 是第二类的。

## 第 9 题

设 $V$ 是 $n$ 维欧氏空间，$\alpha\ne0$ 是 $V$ 中一个固定向量。

1. 证明 $V_1=\{x\mid(x,\alpha)=0,x\in V\}$ 是 $V$ 的一个子空间；
2. 证明 $V_1$ 的维数等于 $n-1$。

## 第 10 题

设 $T$ 是 $n$ 维欧氏空间 $V$ 的正交变换，又设

$$
V_1=\{\alpha\in V\mid T(\alpha)=\alpha\},
\qquad
V_2=\{\alpha-T(\alpha)\mid\alpha\in V\}.
$$

证明：$V_1,V_2$ 是 $V$ 的子空间，且 $V=V_1\oplus V_2$。

## 第 11 题

设 $T_1,T_2$ 是欧氏空间 $V$ 的两个线性变换，并且对任意 $\alpha\in V$ 有

$$
(T_1(\alpha),T_1(\alpha))
=(T_2(\alpha),T_2(\alpha)).
$$

证明：$T_1(V)$ 和 $T_2(V)$ 作为欧氏空间是同构的。

## 第 12 题

设 $W$ 是 $\mathbb R^3$ 中过 $(0,0,0),(1,2,2),(3,4,0)$ 的平面，求点 $A(5,0,0)$ 到平面 $W$ 的最短距离。

<!-- markdownlint-enable MD029 -->
