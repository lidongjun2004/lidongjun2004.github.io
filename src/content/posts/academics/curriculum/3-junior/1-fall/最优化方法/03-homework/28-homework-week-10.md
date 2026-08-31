---
title: "第 10 周作业：最速下降、Newton 与共轭方向"
description: "整理多道无约束迭代计算，比较最速下降、Newton 和共轭梯度的方向与步长"
date: 2026-08-24
tags: ["作业"]
---

本周源文件是我的手写作业，包含第 1、2、3、10、12、14 题。我根据扫描中的题面和数值过程还原，并用参考解复算每个方向与步长。

## 题目（根据扫描还原）

完成第 1、2、3、10、12、14 题：计算指定点的最速下降方向和 Newton 方向，执行精确线搜索，验证方向的 $Q$-共轭性质，并完成共轭梯度迭代。扫描可辨认的函数、初值和小题条件随解答一起保留。

<details class="exam-answer">
<summary>查看还原题面与解答</summary>

## 第 1 题：Rosenbrock 函数的最速方向

$$
f(x)=100(x_2-x_1^2)^2+(1-x_1)^2.
$$

梯度为

$$
\nabla f(x)=
\begin{bmatrix}
-400x_1(x_2-x_1^2)-2(1-x_1)\\
200(x_2-x_1^2)
\end{bmatrix}.
$$

题目给出的三个点分别为：

1. 在 $(0,0)^T$，

   $$
   \nabla f=(-2,0)^T,
   \qquad
   \boxed{d_S=-\nabla f=(2,0)^T}.
   $$

2. 在 $(1,1)^T$，

   $$
   \nabla f=0,
   $$

   所以它是驻点；又因 $f\ge0$ 且 $f(1,1)=0$，它是全局最优点。

3. 在 $(3/2,1)^T$，

   $$
   \nabla f=(751,-250)^T,
   \qquad
   \boxed{d_S=(-751,250)^T}.
   $$

最速下降方向就是负梯度，不需要先求驻点；但若梯度已经为零，就没有非零最速方向。

## 第 2 题：同一点的最速方向与 Newton 方向

根据作答过程还原目标函数：

$$
f(x)=
(6+x_1+x_2)^2+
(2-3x_1-3x_2-x_1x_2)^2.
$$

在 $\hat x=(-4,6)^T$，直接求导得到

$$
\nabla f(\hat x)=(-344,56)^T,
$$

所以

$$
\boxed{d_S=(344,-56)^T}.
$$

Hessian 为

$$
\nabla^2f(\hat x)=
\begin{bmatrix}
164&-56\\
-56&4
\end{bmatrix}.
$$

Newton 方程

$$
\nabla^2f(\hat x)d_N=-\nabla f(\hat x)
$$

给出

$$
\boxed{
d_N=\left(\frac{22}{31},-\frac{126}{31}\right)^T
}.
$$

此处 Hessian 并非正定，不能只凭“它是 Newton 方向”就断言下降；直接核对

$$
\nabla f(\hat x)^Td_N
=-\frac{14624}{31}<0,
$$

才确认本题的 $d_N$ 确实是下降方向。

## 第 3 题：最速下降的两次精确搜索

$$
f(x)=x_1^2-2x_1x_2+4x_2^2+x_1-3x_2,
\qquad x^{(1)}=(1,1)^T.
$$

Hessian

$$
Q=
\begin{bmatrix}
2&-2\\
-2&8
\end{bmatrix}
\succ0.
$$

第一次梯度和方向为

$$
g_1=(1,3)^T,\qquad d_1=(-1,-3)^T.
$$

对二次函数作精确一维搜索，

$$
\alpha_1=\frac{g_1^Tg_1}{g_1^TQg_1}
=\frac{5}{31},
$$

于是

$$
x^{(2)}
=x^{(1)}+\alpha_1d_1
=\left(\frac{26}{31},\frac{16}{31}\right)^T.
$$

第二次

$$
g_2=
\left(\frac{51}{31},-\frac{17}{31}\right)^T,
\qquad
d_2=-g_2=
\left(-\frac{51}{31},\frac{17}{31}\right)^T,
$$

并得到

$$
\alpha_2=\frac{5}{19},
\qquad
\boxed{
x^{(3)}
=\left(\frac{239}{589},\frac{389}{589}\right)^T
}.
$$

精确搜索后相邻梯度正交：

$$
g_1^Tg_2=0.
$$

这是二次函数最速下降法的典型性质，但不代表两步就到最优点。

## 第 10 题：验证 $Q$-共轭

$$
Q=
\begin{bmatrix}
2&3\\
3&5
\end{bmatrix},
\qquad
d_1=(1,0)^T,\quad d_2=(3,-2)^T.
$$

先算

$$
Qd_2=
\begin{bmatrix}
0\\
-1
\end{bmatrix},
$$

再算

$$
d_1^TQd_2=0.
$$

因此

$$
\boxed{d_1,d_2\text{ 关于 }Q\text{ 共轭}}.
$$

共轭不是普通正交；中间必须有矩阵 $Q$。

## 第 12 题：对称矩阵不同特征值的特征向量

设对称矩阵 $A$ 的两个特征向量满足

$$
Ax_1=\lambda_1x_1,\qquad
Ax_2=\lambda_2x_2,\qquad
\lambda_1\ne\lambda_2.
$$

由 $A=A^T$，

$$
\lambda_1x_1^Tx_2
=(Ax_1)^Tx_2
=x_1^TAx_2
=\lambda_2x_1^Tx_2.
$$

所以

$$
(\lambda_1-\lambda_2)x_1^Tx_2=0
\quad\Longrightarrow\quad
x_1^Tx_2=0.
$$

进一步，

$$
x_1^TAx_2=\lambda_2x_1^Tx_2=0,
$$

故不同特征值的特征向量既普通正交，也关于 $A$ 共轭。

## 第 14 题：三组共轭梯度计算

对正定二次函数，采用

$$
d_1=-g_1,\qquad
\alpha_k=-\frac{g_k^Td_k}{d_k^TQd_k},
$$

$$
\beta_k=\frac{g_{k+1}^Tg_{k+1}}{g_k^Tg_k},
\qquad
d_{k+1}=-g_{k+1}+\beta_kd_k.
$$

二维正定二次函数在精确计算下至多两步到达最优点。

### （1）$f=\frac12x_1^2+x_2^2,\quad x^{(1)}=(4,4)^T$

第一步：

$$
g_1=(4,8)^T,\quad d_1=(-4,-8)^T,\quad
\alpha_1=\frac59,
$$

$$
x^{(2)}=
\left(\frac{16}{9},-\frac49\right)^T,\qquad
g_2=
\left(\frac{16}{9},-\frac89\right)^T.
$$

共轭系数

$$
\beta_1=\frac{4}{81}.
$$

由公式得到的 $d_2$ 与 $(-4,1)^T$ 同向。方向可任意乘非零常数，因此把它缩放为

$$
d_2=(-4,1)^T,\qquad \alpha_2=\frac49.
$$

于是

$$
\boxed{x^{(3)}=(0,0)^T}.
$$

### （3）$f=(x_1-2)^2+2(x_2-1)^2,\quad x^{(1)}=(1,3)^T$

第一步：

$$
g_1=(-2,8)^T,\quad d_1=(2,-8)^T,\quad
\alpha_1=\frac{17}{66},
$$

$$
x^{(2)}=
\left(\frac{50}{33},\frac{31}{33}\right)^T,
\qquad
g_2=
\left(-\frac{32}{33},-\frac8{33}\right)^T.
$$

此时

$$
\beta_1=\frac{16}{33^2},
$$

而公式方向与 $(8,1)^T$ 同向。缩放后取

$$
d_2=(8,1)^T,\qquad \alpha_2=\frac2{33},
$$

得到

$$
\boxed{x^{(3)}=(2,1)^T}.
$$

### （5）$f=2x_1^2+2x_1x_2+5x_2^2,\quad x^{(1)}=(2,-2)^T$

第一步：

$$
g_1=(4,-16)^T,\quad d_1=(-4,16)^T,\quad
\alpha_1=\frac{17}{148},
$$

$$
x^{(2)}=
\left(\frac{57}{37},-\frac6{37}\right)^T,
\qquad
g_2=
\left(\frac{216}{37},\frac{54}{37}\right)^T.
$$

共轭系数为

$$
\beta_1=\left(\frac{27}{74}\right)^2.
$$

公式方向与 $(-19,2)^T$ 同向，缩放后取

$$
d_2=(-19,2)^T,\qquad \alpha_2=\frac3{37},
$$

因此

$$
\boxed{x^{(3)}=(0,0)^T}.
$$

## 作业自检

- 最速下降方向的符号是 $-\nabla f$，第 2 题尤其容易把第二分量抄反。
- Newton 方向只有在 Hessian 正定时自动下降；否则要算 $\nabla f^Td_N$。
- 共轭梯度方向允许缩放，但步长必须随缩放同步改变。
- 验证共轭要算 $d_i^TQd_j$，不是只算 $d_i^Td_j$。

</details>
