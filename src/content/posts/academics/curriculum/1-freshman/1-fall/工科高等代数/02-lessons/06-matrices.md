---
title: "第 6 讲 · 矩阵运算、逆、初等矩阵与分块"
description: "把矩阵乘法理解为线性变换复合，串联秩、逆矩阵、伴随矩阵、初等矩阵和分块计算。"
date: 2026-08-27
---

矩阵是数表，但更重要的理解是：矩阵是线性变换在选定基下的记录。矩阵乘向量是做一次变换，矩阵相乘是变换的复合。

## 为什么矩阵乘法是「行乘列」

若 $B:\mathbb R^p\to\mathbb R^n$，$A:\mathbb R^n\to\mathbb R^m$，那么先做 $B$、再做 $A$ 的复合是

$$
\boldsymbol x\longmapsto B\boldsymbol x
\longmapsto A(B\boldsymbol x)=(AB)\boldsymbol x.
$$

所以 $A_{m\times n}B_{n\times p}$ 才有定义，结果是 $m\times p$。「内维相同，外维留下」是尺寸检查的快速口诀。

第 $j$ 列视角更有用：$AB$ 的第 $j$ 列是 $A$ 作用在 $B$ 的第 $j$ 列上的结果。由此可见矩阵乘法一般不可交换：先旋转再投影，和先投影再旋转，通常不是同一件事。

## 常规运算的规则

$$
A(B+C)=AB+AC,
\qquad
(AB)C=A(BC),
$$

但一般 $AB\ne BA$。转置会把乘法顺序反过来：

$$
(AB)^T=B^TA^T.
$$

对方阵，迹 $\operatorname{tr}(A)$ 是主对角线元素之和，并有

$$
\operatorname{tr}(AB)=\operatorname{tr}(BA).
$$

这不是说 $AB=BA$，而是两个积的迹恰好相同。

## 可逆意味着信息没有丢失

$n$ 阶方阵 $A$ 可逆，是指存在 $A^{-1}$ 使

$$
AA^{-1}=A^{-1}A=I.
$$

它有许多等价条件：

$$
\begin{aligned}
A\text{ 可逆}
&\Longleftrightarrow \det A\ne0\\
&\Longleftrightarrow \operatorname{rank}(A)=n\\
&\Longleftrightarrow A\boldsymbol x=\boldsymbol0\text{ 只有零解}\\
&\Longleftrightarrow A\boldsymbol x=\boldsymbol b\text{ 对每个 }\boldsymbol b\text{ 有唯一解}.
\end{aligned}
$$

因此可逆不只是「有个公式能算」，而是这个变换一一对应，不把两个不同输入压成同一输出。

常用的求逆方法有两种：

1. 对 $[A\mid I]$ 做行变换，化为 $[I\mid A^{-1}]$；
2. 用伴随矩阵 $A^*$：$A^{-1}=A^*/\det A$。

第一种更适合具体数值，第二种更适合理论推导和低阶符号矩阵。

## 初等矩阵是行变换的矩阵版

对单位矩阵做一次初等行变换，得到初等矩阵 $E$。左乘 $EA$ 就等于对 $A$ 做同一次行变换；右乘则对应列变换。

每个初等矩阵都可逆，它的逆是反向操作所对应的初等矩阵。任意可逆矩阵都能写成若干初等矩阵的乘积，这也是 $[A\mid I]$ 求逆法的本质。

## 秩与矩阵乘法

初等行、列变换不改变秩。对任意可乘矩阵，

$$
\operatorname{rank}(AB)\le
\min\{\operatorname{rank}(A),\operatorname{rank}(B)\}.
$$

如果 $P,Q$ 可逆，则

$$
\operatorname{rank}(PAQ)=\operatorname{rank}(A).
$$

因为可逆变换不丢失方向，它只是换了坐标描述。

## 分块矩阵：把大矩阵当成小矩阵算

尺寸匹配时，分块矩阵可以按普通矩阵的规则运算。例如

$$
\begin{pmatrix}A&B\\C&D\end{pmatrix}
\begin{pmatrix}X\\Y\end{pmatrix}
=
\begin{pmatrix}AX+BY\\CX+DY\end{pmatrix}.
$$

最常用的是分块三角矩阵。若 $B,D$ 可逆，

$$
M=\begin{pmatrix}B&0\\C&D\end{pmatrix},
$$

设 $M^{-1}=\begin{pmatrix}X&0\\Y&Z\end{pmatrix}$，由 $MM^{-1}=I$ 比较分块可得

$$
M^{-1}=
\begin{pmatrix}
B^{-1}&0\\
-D^{-1}CB^{-1}&D^{-1}
\end{pmatrix}.
$$

不必死记负号和乘法顺序；临场设未知分块再相乘，更稳。

## 完整算例：利用低秩结构求高次幂

设

$$
A=\begin{pmatrix}1&1&1\\2&2&2\\1&1&1\end{pmatrix}
=
\begin{pmatrix}1\\2\\1\end{pmatrix}
\begin{pmatrix}1&1&1\end{pmatrix}
=\boldsymbol u\boldsymbol v^T.
$$

因为 $\boldsymbol v^T\boldsymbol u=4$，

$$
A^2=\boldsymbol u(\boldsymbol v^T\boldsymbol u)\boldsymbol v^T=4A.
$$

于是归纳得

$$
A^n=4^{n-1}A,
\qquad n\ge1.
$$

这比直接乘 $n$ 次快得多。遇到各行或各列成比例的矩阵，先尝试写成列向量乘行向量的秩 $1$ 分解。

## 易错点

- $(AB)^{-1}=B^{-1}A^{-1}$，$(AB)^T=B^TA^T$；涉及逆和转置时都要反转顺序。
- $AB=0$ 不能推出 $A=0$ 或 $B=0$，矩阵有零因子。
- 若 $AB=AC$，只有当 $A$ 可逆或额外条件保证消去律时，才能推出 $B=C$。
- 分块运算中的「元素」是矩阵，它们一般仍不可交换，所以乘法顺序不能换。
