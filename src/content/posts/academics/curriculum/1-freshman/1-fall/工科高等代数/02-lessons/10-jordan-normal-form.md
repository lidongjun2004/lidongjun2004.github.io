---
title: "第 10 讲 · Jordan 标准形"
description: "理解不可对角化矩阵缺少的特征向量如何由广义特征向量补齐，并读懂 Jordan 块。"
date: 2026-08-27
---

对角化需要 $n$ 个线性无关特征向量。如果某个重特征值能提供的特征向量太少，矩阵就不能对角化。Jordan 标准形的作用，是在「不可对角化」时给出尽可能接近对角阵的最简形式。

## Jordan 块长什么样

特征值 $\lambda$ 的 $k$ 阶 Jordan 块是

$$
J_k(\lambda)=
\begin{pmatrix}
\lambda&1&0&\cdots&0\\
0&\lambda&1&\ddots&\vdots\\
\vdots&\ddots&\ddots&\ddots&0\\
0&\cdots&0&\lambda&1\\
0&\cdots&\cdots&0&\lambda
\end{pmatrix}.
$$

它只比对角阵多了超对角线上的 $1$。复数域上任意方阵都相似于若干个 Jordan 块的分块对角矩阵：

$$
P^{-1}AP=
\operatorname{diag}
\bigl(J_{k_1}(\lambda_1),\ldots,J_{k_s}(\lambda_s)\bigr).
$$

若所有 Jordan 块都是 $1$ 阶，Jordan 形就是对角阵，矩阵可对角化。

## 超对角线上的 $1$ 从哪里来

对一条向量链 $\boldsymbol v_1,\ldots,\boldsymbol v_k$，若

$$
\begin{aligned}
(A-\lambda I)\boldsymbol v_1&=0,\\
(A-\lambda I)\boldsymbol v_2&=\boldsymbol v_1,\\
&\vdots\\
(A-\lambda I)\boldsymbol v_k&=\boldsymbol v_{k-1},
\end{aligned}
$$

则 $\boldsymbol v_1$ 是普通特征向量，后面的是广义特征向量。把这些向量依次作为一组基，$A$ 的作用是

$$
A\boldsymbol v_1=\lambda\boldsymbol v_1,
\qquad
A\boldsymbol v_j=\boldsymbol v_{j-1}+\lambda\boldsymbol v_j.
$$

这就恰好对应一个 Jordan 块的列。所以那些 $1$ 记录了「后一级广义特征向量会被送到前一级」的链式关系。

## 如何从核空间维数读出块大小

固定特征值 $\lambda$，考察

$$
d_r=\dim\ker(A-\lambda I)^r.
$$

随 $r$ 增大，核空间逐步扩大，最后稳定在 $\lambda$ 的代数重数。这些维数增量直接编码了 Jordan 块：

- $d_1$ 是 $\lambda$ 对应的 Jordan 块总数，也是特征子空间维数；
- $d_r-d_{r-1}$ 是大小至少为 $r$ 的 Jordan 块个数；
- 使 $d_r$ 首次稳定的 $r$，是最大 Jordan 块的大小。

例如某特征值代数重数为 $4$，并有

$$
d_1=2,
\qquad d_2=3,
\qquad d_3=4.
$$

则有 $2$ 个 Jordan 块，其中只有 $1$ 个大小至少为 $2$，且只有 $1$ 个大小至少为 $3$。因此块大小是 $3+1$。

## 完整算例

设

$$
A=\begin{pmatrix}2&1\\0&2\end{pmatrix}.
$$

特征多项式为 $(\lambda-2)^2$，唯一特征值是 $2$，代数重数为 $2$。但

$$
A-2I=\begin{pmatrix}0&1\\0&0\end{pmatrix},
$$

其核只有一维，可取特征向量 $\boldsymbol v_1=(1,0)^T$。几何重数 $1<2$，所以 $A$ 不可对角化。

再求 $\boldsymbol v_2$ 使

$$
(A-2I)\boldsymbol v_2=\boldsymbol v_1.
$$

可取 $\boldsymbol v_2=(0,1)^T$。以 $\boldsymbol v_1,\boldsymbol v_2$ 为基，$A$ 的矩阵正是

$$
J_2(2)=\begin{pmatrix}2&1\\0&2\end{pmatrix}.
$$

这个例子已经处在 Jordan 形上，它清楚显示了「一个重特征值，但只有一个独立特征向量」的情况。

## Jordan 形怎么算函数

把 Jordan 块写成

$$
J_k(\lambda)=\lambda I+N,
$$

其中 $N$ 的超对角线为 $1$，且 $N^k=0$。因为 $\lambda I$ 与 $N$ 可交换，

$$
J_k(\lambda)^m
=\sum_{r=0}^{k-1}
\binom mr\lambda^{m-r}N^r.
$$

幂级数在 $r=k$ 之前就截断。对解微分方程、求矩阵高次幂和矩阵指数时，这比直接乘法简单得多。

## 最小多项式与 Jordan 形

使 $m_A(A)=0$ 的首一多项式 $m_A$ 叫 $A$ 的最小多项式。对每个特征值 $\lambda$，$m_A$ 中因子 $(x-\lambda)$ 的次数，正好等于 $\lambda$ 所对应最大 Jordan 块的大小。

因此一个矩阵可对角化，当且仅当它的最小多项式没有重根。

## 易错点

- 代数重数决定同一特征值的 Jordan 块总大小，几何重数决定 Jordan 块个数，两者不能混。
- Jordan 标准形的块顺序可以调换，所以「唯一」指不计块排列顺序的唯一。
- 广义特征向量不一定满足 $A\boldsymbol v=\lambda\boldsymbol v$；它满足某个 $r$ 使 $(A-\lambda I)^r\boldsymbol v=0$。
- 实矩阵若有非实特征值，在实数域上不一定有上述 Jordan 形；课件中的标准结论是在复数域上陈述的。
