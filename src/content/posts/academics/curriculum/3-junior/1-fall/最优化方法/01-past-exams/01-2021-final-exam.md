---
title: "2021 年期末真题"
description: "覆盖方向判定、一维搜索、单纯形法、KKT 和资源分配证明"
date: 2026-08-24
tags: ["真题"]
---

我在下面按原卷四道大题转写，并重新核算解析，不直接照搬扫描答案。

## 一、填空题（40 分）

### 1. 可行方向与 Lagrange 对偶

$$
\begin{aligned}
\min\quad &f(x)=x_1^2+x_2^2-4x_1-4x_2\\
\text{s.t.}\quad &x_1+2x_2\ge4,\\
&x_1,x_2\ge0.
\end{aligned}
$$

在 $(4,0)^T$ 处写出活动约束、一个可行方向、一个下降方向和一个可行下降方向；取

$$
D=\{(x_1,x_2)^T\mid x_1\ge0,x_2\ge0\},
$$

写出 Lagrange 对偶问题。

<details class="exam-answer">
<summary>查看解析</summary>

在 $(4,0)$ 处，$x_1+2x_2=4$ 与 $x_2=0$ 都活动。方向 $d$ 局部可行需满足

$$
d_1+2d_2\ge0,\qquad d_2\ge0.
$$

例如 $(0,1)^T$ 可行。梯度

$$
\nabla f(4,0)=(4,-4)^T.
$$

$(-1,0)^T$ 是下降方向但不可行；$(0,1)^T$ 满足梯度内积 $-4<0$，所以也是可行下降方向。

对 $x_1+2x_2-4\ge0$ 引入 $\lambda\ge0$：

$$
L=f-\lambda(x_1+2x_2-4).
$$

在 $D$ 上分别完成平方：

$$
q(\lambda)=4\lambda-\frac{(4+\lambda)^2}{4}
-\frac{(4+2\lambda)^2}{4}.
$$

对偶为 $\max_{\lambda\ge0}q(\lambda)$。

</details>

### 2. Newton 方向、共轭方向和精确搜索

设

$$
f(x)=2x_1^2+2x_2^2-2x_1x_2+4x_1+6x_2.
$$

求 $(1,1)^T$ 处的 Newton 方向并判断它是否下降；求最速下降方向；给出关于 $\nabla^2f$ 的一组共轭方向；从 $(0,0)^T$ 沿 $(0,-2)^T$ 作精确一维搜索，求步长。

<details class="exam-answer">
<summary>查看解析</summary>

$$
g(1,1)=(6,8)^T,\qquad
H=\begin{bmatrix}4&-2\\-2&4\end{bmatrix}.
$$

Newton 方向

$$
d_N=-H^{-1}g=\left(-\frac{10}{3},-\frac{11}{3}\right)^T.
$$

$g^Td_N=-148/3<0$，所以是下降方向。最速下降方向为 $(-6,-8)^T$。

例如取 $d_1=(1,0)^T,d_2=(1,2)^T$，有

$$
d_1^THd_2=(1,0)\begin{bmatrix}0\\6\end{bmatrix}=0,
$$

故它们 $H$-共轭。

沿 $(0,-2)$：

$$
\phi(\lambda)=f(0,-2\lambda)=8\lambda^2-12\lambda,
$$

因此 $\phi'(\lambda)=16\lambda-12=0$，

$$
\boxed{\lambda^*=3/4}.
$$

</details>

## 二、线性规划（30 分）

$$
\begin{aligned}
\min\quad &-2x_1-x_2\\
\text{s.t.}\quad &x_1+x_2\ge3,\\
&-x_1+x_2\ge1,\\
&x_1+2x_2\le8,\\
&x_1,x_2\ge0.
\end{aligned}
$$

1. 用单纯形法求最优解。
2. 写出对偶问题。
3. 用互补松弛求对偶最优解。
4. 求目标系数 $c_1=-2$ 的允许变化范围，使最优基不变。
5. 当对偶价格向量 $(3,1,8)^T$ 变为 $(2,-6,3)^T$ 时，求原问题的新最优解。

<details class="exam-answer">
<summary>查看解析</summary>

二维图解可用于核验单纯形结果。第二、三条约束交于

$$
-x_1+x_2=1,\qquad x_1+2x_2=8,
$$

得到 $(2,3)^T$，目标值 $-7$。其余顶点目标值更大，所以

$$
\boxed{x^*=(2,3)^T,\quad f^*=-7}.
$$

把第三条改写为 $-x_1-2x_2\ge-8$，对偶为

$$
\begin{aligned}
\max\quad &3y_1+y_2-8y_3\\
\text{s.t.}\quad &y_1-y_2-y_3\le-2,\\
&y_1+y_2-2y_3\le-1,\\
&y_1,y_2,y_3\ge0.
\end{aligned}
$$

第一条原约束在最优点有松弛，故 $y_1=0$；又 $x_1,x_2>0$，两条对偶约束取等号。解得

$$
\boxed{y^*=(0,1,1)^T},\qquad b^Ty=-7.
$$

目标系数改为 $(c_1,-1)$ 时，同一顶点保持最优，需要沿从该顶点离开的两条可行边都不下降。两条极方向可取 $(-1,-1)$ 与 $(-2,1)$，故

$$
(c_1,-1)\cdot(-1,-1)\ge0,\qquad
(c_1,-1)\cdot(-2,1)\ge0,
$$

即 $-c_1+1\ge0$ 与 $-2c_1-1\ge0$，所以

$$
\boxed{c_1\le-1/2}.
$$

端点对应多重最优解。

价格向量变化等价于右端变为 $x_1+x_2\ge2$、$-x_1+x_2\ge-6$、$x_1+2x_2\le3$。逐顶点比较得到

$$
\boxed{x'=(3,0)^T,\quad f'=-6}.
$$

</details>

## 三、非线性规划（20 分）

$$
\begin{aligned}
\min\quad &\frac14x_1^2-x_1-\frac12x_2\\
\text{s.t.}\quad &x_1^2+2x_2^2\le1,\\
&x_1^2\le x_2,\\
&x_1\ge0.
\end{aligned}
$$

判断

$$
x^{(1)}=\left(\frac1{\sqrt2},\frac12\right)^T,
\qquad x^{(2)}=(0,0)^T
$$

是否为最优解。

<details class="exam-answer">
<summary>查看解析</summary>

目标函数与不等式函数都是凸函数，可行域凸，因此满足 KKT 的点就是全局最优点。

$x^{(1)}$ 的前两条约束都活动，$x_1>0$。取乘子 $\lambda_1,\lambda_2\ge0$，驻点条件为

$$
\frac12x_1-1+2\lambda_1x_1+2\lambda_2x_1=0,
$$

$$
-\frac12+4\lambda_1x_2-\lambda_2=0.
$$

代入可得一组非负乘子

$$
\lambda_1=\frac{1/\sqrt2+1/4}{3},\qquad
\lambda_2=2\lambda_1-\frac12.
$$

故 $x^{(1)}$ 是全局最优解。

$x^{(2)}$ 可行，但沿方向 $(0,1)^T$ 小步前进仍可行，而

$$
\nabla f(0,0)^T(0,1)=-1/2<0.
$$

所以它不是局部最优解。

</details>

## 四、资源分配问题的必要条件（10 分）

$$
\begin{aligned}
\min\quad &f_1(x_1)+\cdots+f_n(x_n)\\
\text{s.t.}\quad &x_1+\cdots+x_n=M,\\
&x_j\ge0.
\end{aligned}
$$

证明：若可行解 $\bar x$ 是局部最优解，则存在数 $\bar v$，使当 $\bar x_j>0$ 时 $f_j'(\bar x_j)=\bar v$；当 $\bar x_j=0$ 时 $f_j'(\bar x_j)\ge\bar v$。

<details class="exam-answer">
<summary>查看证明</summary>

对等式引入乘子 $v$，对 $x_j\ge0$ 引入 $\mu_j\ge0$，取

$$
L=\sum_jf_j(x_j)-v\left(\sum_jx_j-M\right)-\sum_j\mu_jx_j.
$$

KKT 驻点与互补松弛为

$$
f_j'(\bar x_j)-v-\mu_j=0,\qquad
\mu_j\bar x_j=0.
$$

若 $\bar x_j>0$，则 $\mu_j=0$，所以 $f_j'(\bar x_j)=v$；若 $\bar x_j=0$，则 $\mu_j\ge0$，所以 $f_j'(\bar x_j)=v+\mu_j\ge v$。取 $\bar v=v$ 即得结论。

直觉是：被分到资源的项目边际代价必须相同，否则可从边际代价高者挪一点给低者；没分到资源的项目，其起始边际代价不能更低。

</details>
