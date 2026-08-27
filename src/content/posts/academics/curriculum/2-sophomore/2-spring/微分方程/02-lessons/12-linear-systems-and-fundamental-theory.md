---
title: "第 12 讲：线性微分方程组与基本理论"
description: "把高阶方程化为一阶系统，理解矩阵函数、存在唯一性和线性系统的状态表示。"
date: 2026-08-27
---

多个状态量相互耦合时，自然得到一阶系统

$$
\mathbf x'(t)=A(t)\mathbf x(t)+\mathbf f(t).
$$

它既能直接描述多变量模型，也能统一表示任意高阶标量方程。

## 高阶方程化为一阶系统

对

$$
y^{(n)}+a_1(t)y^{(n-1)}+\cdots+a_n(t)y=f(t),
$$

令

$$
x_1=y, x_2=y', \dots, x_n=y^{(n-1)}.
$$

则

$$
\mathbf x'=
\begin{pmatrix}
0&1&0&\cdots&0\\
0&0&1&\cdots&0\\
\vdots&&&\ddots&\vdots\\
0&0&0&\cdots&1\\
-a_n&-a_{n-1}&-a_{n-2}&\cdots&-a_1
\end{pmatrix}
\mathbf x+
\begin{pmatrix}0\\\vdots\\0\\f\end{pmatrix}.
$$

高阶初值正好组成状态初值 $\mathbf x(t_0)$。

## 矩阵函数的微积分

矩阵函数 $A(t)=[a_{ij}(t)]$ 的连续、求导和积分按元素定义：

$$
A'(t)=[a_{ij}'(t)],\qquad
\int A(t)dt=\left[\int a_{ij}(t)dt\right].
$$

乘积求导仍为

$$
(A B)'=A'B+AB',
$$

但矩阵一般不可交换，顺序不能调换。若 $A(t)$ 可逆，

$$
(A^{-1})'=-A^{-1}A'A^{-1}.
$$

## 存在唯一性

若 $A(t)$ 和 $\mathbf f(t)$ 在区间 $I$ 连续，则对任意 $t_0\in I$ 和初值 $\mathbf x(t_0)=\mathbf x_0$，线性系统在整个 $I$ 上存在唯一解。

线性系统的这个结论比一般非线性系统更强：系数连续即可，不需额外单独验证 Lipschitz，因为右端对 $\mathbf x$ 是线性的，并在紧区间上满足 Lipschitz 控制。

## 积分方程与逐步逼近

初值问题等价于

$$
\mathbf x(t)=\mathbf x_0+
\int_{t_0}^{t}
[A(s)\mathbf x(s)+\mathbf f(s)]ds.
$$

从常函数 $\mathbf x_0(t)=\mathbf x_0$ 出发定义

$$
\mathbf x_{k+1}(t)=\mathbf x_0+
\int_{t_0}^{t}[A(s)\mathbf x_k(s)+\mathbf f(s)]ds,
$$

在适当区间上一致收敛到唯一解。这是 Picard 逐步逼近在系统中的版本，也解释了存在唯一性证明的构造性。

## 齐次与非齐次结构

齐次系统

$$
\mathbf x'=A(t)\mathbf x
$$

的解集是 $n$ 维向量空间。非齐次系统的两个解之差是齐次解，所以仍有

$$
\mathbf x=\mathbf x_h+\mathbf x_p.
$$

这与高阶线性标量方程完全平行；矩阵只是把 $n$ 个状态统一装进向量。

## 状态转移观点

给定初始时刻 $t_0$，齐次系统的状态转移矩阵 $\Phi(t,t_0)$ 满足

$$
\frac{\partial}{\partial t}\Phi(t,t_0)
=A(t)\Phi(t,t_0),\qquad
\Phi(t_0,t_0)=I.
$$

它把初态映到当前状态：

$$
\mathbf x(t)=\Phi(t,t_0)\mathbf x_0.
$$

并满足组合律

$$
\Phi(t,s)\Phi(s,t_0)=\Phi(t,t_0).
$$

对时变矩阵 $A(t)$，一般不能随意写成 $e^{\int A dt}$，除非不同时刻的矩阵满足适当交换条件。常系数时才直接是 $e^{A(t-t_0)}$。

## 检查

- 矩阵与向量维数要匹配；
- 把高阶方程化系统时，最后一行系数顺序最容易写反；
- 矩阵乘积不能交换；
- 初值的顺序必须与状态向量定义一致；
- 时变系统不要未经证明就把标量指数公式照搬到矩阵积分上。
