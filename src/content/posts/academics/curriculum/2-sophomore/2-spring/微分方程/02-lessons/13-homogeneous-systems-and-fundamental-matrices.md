---
title: "第 13 讲：齐次线性方程组与基解矩阵"
description: "用基本解组、Wronski 行列式、Liouville 公式和基解矩阵描述齐次线性系统的全部解。"
date: 2026-08-27
---

齐次系统

$$
\mathbf x'=A(t)\mathbf x
$$

的全部解构成 $n$ 维线性空间。选取 $n$ 个线性无关解作为列，就得到把所有解一次装进去的基解矩阵。

## 基本解组

若 $\mathbf x_1(t),\dots,\mathbf x_n(t)$ 都是系统解，且线性无关，就称为基本解组。任意解都可唯一写成

$$
\mathbf x(t)=c_1\mathbf x_1(t)+\cdots+c_n\mathbf x_n(t).
$$

把这些解作为列：

$$
\Phi(t)=
\bigl[\mathbf x_1(t) \cdots \mathbf x_n(t)\bigr].
$$

由于每一列都满足方程，

$$
\Phi'=A(t)\Phi.
$$

$\Phi$ 是基解矩阵当且仅当 $\det\Phi(t)\ne0$。

## Wronski 行列式与 Liouville 公式

系统的 Wronski 行列式就是

$$
W(t)=\det\Phi(t).
$$

Liouville 公式：

$$
W(t)=W(t_0)
\exp\left(
\int_{t_0}^{t}\operatorname{tr}A(s)ds
\right).
$$

所以若某一点 $W(t_0)\ne0$，则整个连续区间上都不为零；若一点为零，则这些解始终线性相关。

这也表明系统流对体积的伸缩由 $\operatorname{tr}A$ 控制：迹为负时体积元总体收缩，迹为正时膨胀。

## 基解矩阵不唯一

若 $\Phi$ 是基解矩阵，$C$ 是任意常数可逆矩阵，则

$$
\widetilde\Phi=\Phi C
$$

仍是基解矩阵。反过来，任意两个基解矩阵都相差右乘一个常数可逆矩阵。

右乘而不是左乘：右乘是在列解之间做常系数线性组合；左乘一般会破坏 $\Phi'=A\Phi$。

## 标准基解矩阵

指定

$$
\Phi(t_0)=I
$$

得到相对于 $t_0$ 的标准基解矩阵，也就是状态转移矩阵 $\Phi(t,t_0)$。若已有任意基解矩阵 $X(t)$，则

$$
\Phi(t,t_0)=X(t)X^{-1}(t_0).
$$

它自动满足初始条件，并给出

$$
\mathbf x(t)=\Phi(t,t_0)\mathbf x_0.
$$

## 伴随系统与逆矩阵

由 $(\Phi^{-1})'=-\Phi^{-1}A$ 可见，$\Phi^{-1}$ 的行向量与某个伴随系统相关。这个公式在常数变易时非常重要：它保证

$$
\frac{d}{dt}(\Phi^{-1}\mathbf x)
$$

能把齐次演化抵消掉，只留下外力项。

## 如何验证候选基解矩阵

给定矩阵 $X(t)$，依次检查：

1. 求导，验证 $X'=AX$；
2. 在一个方便的点计算 $\det X$；
3. 若非零，则由 Liouville 公式知全区间可逆；
4. 通解写成 $\mathbf x=X(t)\mathbf c$；
5. 初值给出 $\mathbf c=X^{-1}(t_0)\mathbf x_0$。

只验证每一列是解还不够；若列之间相关，就不能张成全部解。

## 与高阶方程的对应

把 $n$ 阶标量方程化为一阶系统后，标量基本解 $y_1,\dots,y_n$ 会形成矩阵

$$
\Phi=
\begin{pmatrix}
y_1&\cdots&y_n\\
y_1'&\cdots&y_n'\\
\vdots&&\vdots\\
y_1^{(n-1)}&\cdots&y_n^{(n-1)}
\end{pmatrix}.
$$

它的行列式正是标量方程的 Wronski 行列式。两套理论不是类比，而是同一个系统表示。
