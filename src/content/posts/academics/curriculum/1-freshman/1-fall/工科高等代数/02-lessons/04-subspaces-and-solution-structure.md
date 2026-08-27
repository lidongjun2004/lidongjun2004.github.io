---
title: "第 4 讲 · 线性空间、子空间与解的结构"
description: "理解子空间判定、维数公式、直和、齐次解空间与非齐次解集。"
date: 2026-08-27
---

前面的向量都在 $\mathbb R^n$ 里，但线性代数并不关心「元素一定是数组」。多项式、矩阵、函数都能成为向量，只要它们的加法和数乘满足相同的线性规则。

## 线性空间是一套运算结构

一个集合 $V$ 配上向量加法和数乘，若对任意 $\boldsymbol u,\boldsymbol v,\boldsymbol w\in V$ 和标量 $a,b$ 满足加法交换、结合，存在零元和负元，数乘与加法满足分配律等公理，就称 $V$ 为线性空间。

考试中判断一个「新运算」能否构成线性空间，最快的办法不是按顺序默写所有公理，而是先找最易失败的项：

- 零元是否真的在集合中，并满足 $\boldsymbol v+\boldsymbol0=\boldsymbol v$；
- 每个元素是否有加法逆元；
- $1\boldsymbol v=\boldsymbol v$ 是否成立；
- 对加法和数乘是否封闭。

只要找到一条反例，就已经能否定。

## 子空间只需要一条实用判定

非空子集 $W\subseteq V$ 是子空间，当且仅当对任意 $\boldsymbol u,\boldsymbol v\in W$ 和标量 $a,b$，都有

$$
a\boldsymbol u+b\boldsymbol v\in W.
$$

这条「对线性组合封闭」的判定，已经同时包含了加法和数乘封闭。特别地，子空间一定包含零向量，所以不过原点的直线或平面不是 $\mathbb R^n$ 的子空间。

齐次方程组的解集

$$
N(A)=\{\boldsymbol x:A\boldsymbol x=\boldsymbol0\}
$$

对线性组合封闭，因此是子空间，叫 $A$ 的零空间或核。它的维数由秩-零度定理给出：

$$
\dim N(A)=n-\operatorname{rank}(A),
$$

其中 $n$ 是 $A$ 的列数。这正是自由变量的个数。

## 和、交与维数公式

对子空间 $U,W\subseteq V$，

$$
U+W=\{\boldsymbol u+\boldsymbol w:
\boldsymbol u\in U,\boldsymbol w\in W\}
$$

仍是子空间，而 $U\cap W$ 也是子空间。它们的维数满足

$$
\dim(U+W)=\dim U+\dim W-\dim(U\cap W).
$$

这是线性空间版的「容斥」：$U$ 和 $W$ 里重复计数的方向，正是交空间。

若 $U\cap W=\{\boldsymbol0\}$，就称 $U+W$ 为直和，记为 $U\oplus W$。「直」不是说几何上必须垂直，而是说每个向量的分解

$$
\boldsymbol v=\boldsymbol u+\boldsymbol w,
\qquad
\boldsymbol u\in U,
\quad
\boldsymbol w\in W
$$

是唯一的。唯一性和交只含零向量是等价的。

## 非齐次解集不是子空间

若 $A\boldsymbol x=\boldsymbol b$ 有一个特解 $\boldsymbol x_0$，那么任意解 $\boldsymbol x$ 都满足

$$
A(\boldsymbol x-\boldsymbol x_0)=\boldsymbol0.
$$

因此

$$
\{\boldsymbol x:A\boldsymbol x=\boldsymbol b\}
=\boldsymbol x_0+N(A).
$$

它是零空间的一个平移，一般不经过原点，因而不是子空间。但它的「方向」和维数都由 $N(A)$ 决定。

这个结构还立即解释了两个事实：

- 两个非齐次解之差一定是齐次解；
- 对若干个非齐次解做线性组合，系数之和等于 $1$ 时，结果仍是非齐次解。

## 线性变换把「矩阵乘法」说清了

映射 $T:V\to W$ 若满足

$$
T(a\boldsymbol u+b\boldsymbol v)
=aT(\boldsymbol u)+bT(\boldsymbol v),
$$

就是线性变换。一旦给定 $V,W$ 的基，$T$ 可由一个矩阵 $A$ 表示：$A$ 的第 $j$ 列是 $T(\boldsymbol e_j)$ 在输出基下的坐标。所以矩阵不只是数表，而是线性变换在某两组基下的坐标表达。

核与像分别是

$$
\ker T=\{\boldsymbol v:T(\boldsymbol v)=\boldsymbol0\},
\qquad
\operatorname{im}T=\{T(\boldsymbol v):\boldsymbol v\in V\}.
$$

对矩阵 $A$，$\ker T=N(A)$，而 $\dim\operatorname{im}T=\operatorname{rank}(A)$。因此秩-零度定理也可写成

$$
\dim V=\dim\ker T+\dim\operatorname{im}T.
$$

## 完整算例：求两个子空间的交

设

$$
U=\operatorname{span}\left\{
\begin{pmatrix}1\\0\\1\end{pmatrix},
\begin{pmatrix}0\\1\\1\end{pmatrix}
\right\},
\quad
W=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\0\end{pmatrix},
\begin{pmatrix}1\\0\\-1\end{pmatrix}
\right\}.
$$

交中向量同时有两种表示：

$$
a\begin{pmatrix}1\\0\\1\end{pmatrix}
+b\begin{pmatrix}0\\1\\1\end{pmatrix}
=c\begin{pmatrix}1\\1\\0\end{pmatrix}
+d\begin{pmatrix}1\\0\\-1\end{pmatrix}.
$$

对 $a,b,c,d$ 解齐次方程，得 $a=b=c=t,d=0$。因此

$$
U\cap W
=\operatorname{span}\left\{
\begin{pmatrix}1\\1\\2\end{pmatrix}
\right\},
$$

交空间维数为 $1$。这类题的统一方法就是「两种线性表示相等」，再解一个齐次方程组。

## 易错点

- 两个子空间的并集通常不是子空间；和空间才是包含两者的最小子空间。
- $U+W$ 是直和只需 $U\cap W=\{\boldsymbol0\}$，不需要 $U\perp W$。
- 非齐次解集一般不含零向量，所以不是子空间；不要因为它有参数形式就称之为「解空间」。
- 验证子空间时不能只看加法封闭，数乘封闭也必须成立。
