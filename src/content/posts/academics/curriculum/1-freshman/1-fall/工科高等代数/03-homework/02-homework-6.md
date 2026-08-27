---
title: "作业 6 · 特征值与相似"
description: "原作业中关于特征值、特征向量、对角化、相似矩阵和线性变换的 10 道题。"
date: 2026-08-27
tags: ["作业"]
---

> 以下按《作业 6 习题》转写。源文件只有题面，未附答案或作答，因此本文不补造解答。

## 第 1 题

已知矩阵

$$
A=\begin{pmatrix}
\frac35&\frac45\\
\frac45&-\frac35
\end{pmatrix}.
$$

平面直角坐标系中的变换

$$
\sigma:
\begin{pmatrix}x\\y\end{pmatrix}
\longmapsto
A\begin{pmatrix}x\\y\end{pmatrix}.
$$

它将哪些向量变到自己的实数倍？$\sigma$ 是什么变换？

## 第 2 题

已知方阵 $A$ 满足 $A^2=E$，求 $A$ 的特征值。

## 第 3 题

设

$$
A=\begin{pmatrix}
5&6&-3\\
-1&0&1\\
1&2&-1
\end{pmatrix}.
$$

求 $A$ 的特征值和相应的特征向量。又问：$A$ 可否对角化？若可对角化，求 $C$ 使 $C^{-1}AC$ 为对角矩阵。

## 第 4 题

已知

$$
A=\begin{pmatrix}0&2\\1&-1\end{pmatrix},
$$

求 $A^n$。

## 第 5 题

证明以下两个方阵相似：

$$
A=\operatorname{diag}(\lambda_1,\ldots,\lambda_n),
\qquad
B=\operatorname{diag}(\lambda_{i_1},\ldots,\lambda_{i_n}),
$$

其中 $i_1,i_2,\ldots,i_n$ 是 $1,2,\ldots,n$ 的一个排列。

## 第 6 题

已知矩阵

$$
A=\begin{pmatrix}
-2&0&0\\
2&a&2\\
3&1&1
\end{pmatrix}
$$

与矩阵 $B=\operatorname{diag}(-1,2,b)$ 相似，求 $a,b$。

## 第 7 题

设 $A,B$ 为 $n$ 阶方阵且 $B$ 可逆，多项式

$$
f(\lambda)=\det(A-\lambda B)
$$

有两两互异的根 $\lambda_1,\ldots,\lambda_n$。证明：若 $X_i$ 是方程组

$$
(A-\lambda_iB)X=0,
\qquad
X=(x_1,\ldots,x_n)^T,
\quad
i=1,\ldots,n
$$

的非零解，则 $X_1,X_2,\ldots,X_n$ 线性无关。

## 第 8 题

如果 $A$ 可逆，证明 $AB$ 与 $BA$ 相似。

## 第 9 题

如果 $A$ 与 $B$ 相似，$C$ 与 $D$ 相似，证明

$$
\begin{pmatrix}A&0\\0&C\end{pmatrix}
\quad\text{与}\quad
\begin{pmatrix}B&0\\0&D\end{pmatrix}
$$

相似。

## 第 10 题

设 $\sigma$ 是数域 $F$ 上线性空间 $V$ 的一个线性变换。如果 $V$ 中某个非零元素 $\alpha$ 被 $\sigma$ 映到它自己的 $\lambda\in F$ 倍，即

$$
\sigma(\alpha)=\lambda\alpha,
$$

则称 $\lambda$ 是线性变换 $\sigma$ 的特征值，$\alpha$ 是属于特征值 $\lambda$ 的特征向量。在这个定义下：

1. 设 $n\ge2$，$V$ 是数域 $F$ 上全体 $n$ 阶方阵组成的线性空间。$V$ 上的线性变换 $\tau:A\mapsto A^T$ 将每个方阵 $A$ 映为转置 $A^T$。求 $\tau$ 的特征值和相应的特征向量；
2. 在由所有次数小于 $n$ 的多项式组成的线性空间 $K[x]_n$ 上，设线性变换 $\sigma:f(x)\mapsto f'(x)$。求 $\sigma$ 的特征值和相应的特征向量。
