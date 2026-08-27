---
title: "第 7 讲 · 内积、正交化、投影与距离"
description: "从内积定义长度和角度，掌握 Gram-Schmidt 正交化、正交补、最佳逼近与正交变换。"
date: 2026-08-27
---

线性空间只能谈加法、数乘和维数；要谈长度、角度、垂直和最短距离，还要给它加上一个内积。有内积的有限维实线性空间叫欧氏空间。

## 内积把几何带进线性空间

实内积 $(\boldsymbol x,\boldsymbol y)$ 满足对称、对每个变量的线性，以及正定性：

$$
(\boldsymbol x,\boldsymbol x)\ge0,
\qquad
(\boldsymbol x,\boldsymbol x)=0
\Longleftrightarrow
\boldsymbol x=\boldsymbol0.
$$

标准内积是 $\boldsymbol x^T\boldsymbol y$，但也可用正定对称矩阵 $A$ 定义

$$
(\boldsymbol x,\boldsymbol y)_A=\boldsymbol x^TA\boldsymbol y.
$$

正定性保证它真的能定义长度，而不会出现非零向量「长度平方为负数」。

定义

$$
\lVert\boldsymbol x\rVert=\sqrt{(\boldsymbol x,\boldsymbol x)},
\qquad
\cos\theta=
\frac{(\boldsymbol x,\boldsymbol y)}
{\lVert\boldsymbol x\rVert\lVert\boldsymbol y\rVert}.
$$

柯西-施瓦茨不等式

$$
|(\boldsymbol x,\boldsymbol y)|
\le\lVert\boldsymbol x\rVert\lVert\boldsymbol y\rVert
$$

保证了上式的余弦确实在 $[-1,1]$ 中。等号成立当且仅当两向量线性相关。

## 正交基为什么好用

基 $\boldsymbol e_1,\ldots,\boldsymbol e_n$ 若两两正交且每个长度为 $1$，就是标准正交基。对任意向量 $\boldsymbol x$，坐标可直接由内积读出：

$$
\boldsymbol x
=\sum_{i=1}^n(\boldsymbol x,\boldsymbol e_i)\boldsymbol e_i.
$$

普通基下要解一个方程组才能找坐标，正交基下却只要做内积。正交性把各个方向彻底解耦了。

## Gram-Schmidt 正交化

从线性无关组 $\boldsymbol a_1,\ldots,\boldsymbol a_k$ 出发，逐个删掉新向量在已有正交方向上的投影：

$$
\begin{aligned}
\boldsymbol u_1&=\boldsymbol a_1,\\
\boldsymbol u_2&=\boldsymbol a_2
-\frac{(\boldsymbol a_2,\boldsymbol u_1)}
{(\boldsymbol u_1,\boldsymbol u_1)}\boldsymbol u_1,\\
\boldsymbol u_j&=\boldsymbol a_j-
\sum_{i=1}^{j-1}
\frac{(\boldsymbol a_j,\boldsymbol u_i)}
{(\boldsymbol u_i,\boldsymbol u_i)}\boldsymbol u_i.
\end{aligned}
$$

最后再归一化 $\boldsymbol e_i=\boldsymbol u_i/\lVert\boldsymbol u_i\rVert$。这个过程没有改变每一步的张成空间，只是把基换成更容易计算的正交基。

### 完整算例

对

$$
\boldsymbol a_1=\begin{pmatrix}1\\1\\0\end{pmatrix},
\qquad
\boldsymbol a_2=\begin{pmatrix}1\\0\\1\end{pmatrix},
$$

先取 $\boldsymbol u_1=\boldsymbol a_1$，再算

$$
\boldsymbol u_2
=\boldsymbol a_2-
\frac{\boldsymbol a_2^T\boldsymbol u_1}
{\boldsymbol u_1^T\boldsymbol u_1}\boldsymbol u_1
=
\begin{pmatrix}1\\0\\1\end{pmatrix}
-\frac12\begin{pmatrix}1\\1\\0\end{pmatrix}
=\frac12\begin{pmatrix}1\\-1\\2\end{pmatrix}.
$$

去掉无关的比例因子，归一化得

$$
\boldsymbol e_1=\frac1{\sqrt2}
\begin{pmatrix}1\\1\\0\end{pmatrix},
\qquad
\boldsymbol e_2=\frac1{\sqrt6}
\begin{pmatrix}1\\-1\\2\end{pmatrix}.
$$

检查 $\boldsymbol e_1^T\boldsymbol e_2=0$ 且两者长度均为 $1$。

## 正交投影与最短距离

若 $W$ 的一组标准正交基是 $\boldsymbol e_1,\ldots,\boldsymbol e_k$，那么 $\boldsymbol x$ 在 $W$ 上的正交投影是

$$
\operatorname{proj}_W\boldsymbol x
=\sum_{i=1}^k
(\boldsymbol x,\boldsymbol e_i)\boldsymbol e_i.
$$

余量

$$
\boldsymbol r=
\boldsymbol x-\operatorname{proj}_W\boldsymbol x
$$

与 $W$ 中每个向量正交，因此 $\boldsymbol r\in W^\perp$。对任意 $\boldsymbol w\in W$，勾股分解给出

$$
\lVert\boldsymbol x-\boldsymbol w\rVert^2
=\lVert\boldsymbol r\rVert^2
+\lVert\operatorname{proj}_W\boldsymbol x-
\boldsymbol w\rVert^2.
$$

所以离 $\boldsymbol x$ 最近的 $W$ 中向量就是正交投影，最短距离是余量的长度。最小二乘法的几何本质就在这里。

## 正交补和维数

$$
W^\perp=\{\boldsymbol x:(\boldsymbol x,\boldsymbol w)=0,
\ \forall\boldsymbol w\in W\}.
$$

在 $n$ 维欧氏空间中，

$$
V=W\oplus W^\perp,
\qquad
\dim W+\dim W^\perp=n.
$$

对矩阵 $A$，行空间的正交补是零空间，因为 $A\boldsymbol x=0$ 正是说 $\boldsymbol x$ 与 $A$ 的每一行正交。

## 正交矩阵

实方阵 $Q$ 若满足

$$
Q^TQ=I,
$$

就是正交矩阵。它的列向量构成标准正交基，$Q^{-1}=Q^T$。它保持内积，因而保持长度和夹角：

$$
(Q\boldsymbol x)^T(Q\boldsymbol y)
=\boldsymbol x^TQ^TQ\boldsymbol y
=\boldsymbol x^T\boldsymbol y.
$$

$\det Q=1$ 时对应保定向的旋转，$\det Q=-1$ 时包含反射。

## 易错点

- 正交只要内积为 $0$，标准正交还要求每个向量长度为 $1$。
- Gram-Schmidt 的每一项投影都要除以 $(\boldsymbol u_i,\boldsymbol u_i)$；只有 $\boldsymbol u_i$ 已归一化时分母才是 $1$。
- 在一般内积 $(\cdot,\cdot)_A$ 下，「垂直」应用 $\boldsymbol x^TA\boldsymbol y=0$ 判定，不能偷换成标准点积。
- 正交矩阵是方阵；对非方阵只能说列正交或行正交。
