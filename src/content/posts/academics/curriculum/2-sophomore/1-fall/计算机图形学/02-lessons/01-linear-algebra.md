---
title: "第 1 讲：图形学里的线性代数"
description: "从向量、点积和叉积讲到正交坐标架与矩阵，为后续变换、相机、法线和光照搭好共同语言"
date: 2026-08-27
---

图形学里的线性代数不是一套独立的计算题，而是后面所有算法共用的语言。位置、方向、颜色、法线、相机朝向，最后都要变成向量；“把物体摆过去”和“把相机转过来”最后都要变成矩阵。

## 1. 点和向量不是一回事

一个三维向量

$$
\mathbf v=(v_x,v_y,v_z)^T
$$

编码方向和长度。它可以表示位移、速度、光线方向或法线。点表示“在哪里”，向量表示“往哪走多少”。二者都写成三个数，但几何意义不同；这一区别会在齐次坐标里变成点的 $w=1$、方向的 $w=0$。

向量长度与归一化分别为

$$
\|\mathbf v\|=\sqrt{v_x^2+v_y^2+v_z^2},
\qquad
\widehat{\mathbf v}=\frac{\mathbf v}{\|\mathbf v\|}.
$$

归一化只保留方向。零向量不能归一化，代码里遇到两点重合、三角形退化或法线长度接近零时，需要先判断再除。

向量加法对应首尾相接，数乘改变长度并可能反转方向。线性组合 $a\mathbf u+b\mathbf v$ 是插值、坐标展开和重心坐标的基础。

## 2. 点积：问两个方向有多一致

点积既可按分量计算，也可按夹角理解：

$$
\mathbf u\cdot\mathbf v
=u_xv_x+u_yv_y+u_zv_z
=\|\mathbf u\|\,\|\mathbf v\|\cos\theta.
$$

- 点积为正：夹角小于 $90^\circ$，大体同向。
- 点积为零：正交。
- 点积为负：大体反向。

把 $\mathbf u$ 投影到 $\mathbf v$ 上：

$$
\operatorname{proj}_{\mathbf v}\mathbf u
=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v.
$$

图形学里它反复出现：判断面朝不朝向相机、计算 Lambert 漫反射、把运动分解到相机的前后左右方向。

## 3. 叉积：得到垂直方向

三维叉积

$$
\mathbf u\times\mathbf v=
\begin{pmatrix}
u_yv_z-u_zv_y\\
u_zv_x-u_xv_z\\
u_xv_y-u_yv_x
\end{pmatrix}
$$

垂直于 $\mathbf u$ 和 $\mathbf v$，长度为

$$
\|\mathbf u\times\mathbf v\|
=\|\mathbf u\|\,\|\mathbf v\|\sin\theta.
$$

它满足 $\mathbf u\times\mathbf v=-(\mathbf v\times\mathbf u)$，所以顶点绕序会决定法线方向。给三角形顶点 $A,B,C$，常用

$$
\mathbf n=(B-A)\times(C-A)
$$

求法线。交换 $B,C$ 后法线翻转，这正是背面剔除依赖顺时针或逆时针约定的原因。

二维判左右也可看作叉积的 $z$ 分量。对有向边 $A\to B$ 和点 $P$，

$$
E_{AB}(P)=(B_x-A_x)(P_y-A_y)-(B_y-A_y)(P_x-A_x).
$$

三个边函数同号，就说明点落在同一绕序的三角形内部或边界上。

## 4. 正交坐标架怎样搭出来

一个三维正交归一坐标架由三个两两垂直、长度为 $1$ 的向量组成。已知大致的观察方向 $\mathbf a$ 和“向上”参考 $\mathbf b$，可以这样构造：

$$
\mathbf z=\frac{\mathbf a}{\|\mathbf a\|},
\quad
\mathbf x=\frac{\mathbf b\times\mathbf z}{\|\mathbf b\times\mathbf z\|},
\quad
\mathbf y=\mathbf z\times\mathbf x.
$$

这实际上是一次 Gram–Schmidt 正交化。若 $\mathbf a$ 与 $\mathbf b$ 平行，叉积为零，坐标架无法建立；相机的 up 方向因此不能与视线共线。

把 $\mathbf x,\mathbf y,\mathbf z$ 作为矩阵的列，就得到从局部坐标到参考坐标的旋转关系。采用行向量还是列向量、基向量放行还是放列，必须全程统一。

## 5. 矩阵表示变换

$m\times n$ 矩阵可把 $n$ 维向量映射到 $m$ 维，矩阵乘法为

$$
(AB)_{ij}=\sum_k A_{ik}B_{kj}.
$$

最重要的性质是

$$
A(BC)=(AB)C,
\qquad AB\ne BA\ \text{通常成立}.
$$

结合律允许预先合并一串变换；不可交换说明“先旋转再平移”和“先平移再旋转”不是一回事。

单位矩阵 $I$ 不改变向量。逆矩阵满足 $A^{-1}A=I$，表示撤销一个可逆变换。转置满足

$$
(AB)^T=B^TA^T.
$$

正交矩阵的列向量组成正交坐标架，因此

$$
R^{-1}=R^T,
$$

这让旋转矩阵求逆特别便宜。

## 6. 把这一讲带到后面

- 点积：方向有多一致、投影有多长。
- 叉积：垂直方向、朝向和面积。
- 正交基：换坐标系、搭相机。
- 矩阵：把同一种几何操作批量作用到所有点。
- 逆矩阵：从一个坐标系退回另一个坐标系。

把这些几何意义抓住，比只记分量公式更不容易写反。
