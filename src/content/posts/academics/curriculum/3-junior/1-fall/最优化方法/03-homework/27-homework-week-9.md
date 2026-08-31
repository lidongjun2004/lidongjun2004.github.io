---
title: "第 9 周作业：KKT 与二阶条件"
description: "整理约束问题的 KKT 乘子求解，并在临界锥上用 Lagrange Hessian 判断局部最优"
date: 2026-08-24
tags: ["作业"]
---

本周源文件是我的手写作业，题号为 2、4、5、8、9。我根据扫描中的题面与作答过程还原，并用参考解核对候选点、乘子和二阶型。统一把不等式写成 $g_i(x)\ge0$，并取

$$
L(x,w,v)=f(x)-\sum_iw_ig_i(x)-\sum_jv_jh_j(x),
\qquad w_i\ge0.
$$

等式乘子的正负只取决于 Lagrange 函数的记号约定，不影响最优性结论。

## 题目（根据扫描还原）

完成第 2、4、5、8、9 题：对给定约束优化问题检查候选点，求 KKT 乘子，并在临界锥上用 Lagrange 函数的 Hessian 判断二阶必要或充分条件。扫描可辨认的完整模型随解答一起保留。

<details class="exam-answer">
<summary>查看还原题面与解答</summary>

## 第 2 题：圆盘与直线交集上的投影

$$
\begin{aligned}
\min\quad &(x_1-3)^2+(x_2-2)^2\\
\text{s.t.}\quad
&-x_1^2-x_2^2+5\ge0,\\
&x_1+2x_2-4=0,\\
&x_1,x_2\ge0.
\end{aligned}
$$

第一条是圆盘约束，不是线性约束。由等式消去 $x_1=4-2x_2$，圆盘与非负约束给 $1\le x_2\le2$，目标变成

$$
\phi(x_2)=5x_2^2-8x_2+5.
$$

无约束极小点 $x_2=4/5$ 不在区间内，因此

$$
\boxed{x^*=(2,1)^T}.
$$

在该点，圆盘约束和等式都活动。梯度为

$$
\nabla f=(-2,-2)^T,\quad
\nabla g=(-4,-2)^T,\quad
\nabla h=(1,2)^T.
$$

驻点方程

$$
\nabla f-w\nabla g-v\nabla h=0
$$

给出

$$
\boxed{w=\frac13,\qquad v=-\frac23}.
$$

$w\ge0$，KKT 成立。目标严格凸，可行域是圆盘、仿射直线与非负正交象限的凸交集，所以该点还是唯一全局最优解。

## 第 4 题：逐个检查候选点

根据作答过程还原问题：

$$
\begin{aligned}
\min\quad
&\left(x_1-\frac94\right)^2+(x_2-2)^2\\
\text{s.t.}\quad
&-x_1^2+x_2\ge0,\\
&-x_1-x_2+6\ge0,\\
&x_1,x_2\ge0.
\end{aligned}
$$

题目给出三个候选点。

### 候选点 $x^{(1)}=(3/2,9/4)^T$

它满足全部约束，且只有 $g_1=-x_1^2+x_2$ 活动。此时

$$
\nabla f=\left(-\frac32,\frac12\right)^T,
\qquad
\nabla g_1=(-3,1)^T.
$$

由 $\nabla f-w_1\nabla g_1=0$ 得

$$
\boxed{w_1=\frac12}>0.
$$

KKT 成立，目标值为

$$
f(x^{(1)})=
\left(-\frac34\right)^2+\left(\frac14\right)^2
=\frac58.
$$

目标严格凸，而可行域是凸函数 $x_1^2$ 的上图集与半空间的交，因此

$$
\boxed{x^*=\left(\frac32,\frac94\right)^T,\qquad f^*=\frac58}
$$

是唯一全局最优解。

### 候选点 $x^{(2)}=(9/4,2)^T$

代入第一条约束：

$$
-\left(\frac94\right)^2+2=-\frac{49}{16}<0,
$$

所以它不可行，直接排除。

### 候选点 $x^{(3)}=(0,-2)^T$

扫描和参考解都印出了这个候选点，但它与题面中的 $x_2\ge0$ 直接矛盾，也不满足 $-x_1^2+x_2\ge0$。因此这里存在源材料笔误，不能把它当作可行 KKT 点；手写过程中得到负乘子，也会独立排除它。

## 第 5 题：等式与不等式混合

根据作答过程还原问题：

$$
\begin{aligned}
\min\quad &x_1^2-x_2-3x_3\\
\text{s.t.}\quad
&g(x)=-x_1-x_2-x_3\ge0,\\
&h(x)=x_1^2+2x_2-x_3=0.
\end{aligned}
$$

解 KKT 方程得到

$$
\boxed{
x^*=\left(-\frac72,-\frac{35}{12},\frac{77}{12}\right)^T,
\quad
w^*=\frac73,\quad v^*=\frac23
}.
$$

两个约束在 $x^*$ 处都活动。按本页的记号

$$
L=f-wg-vh,
$$

其 Hessian 为

$$
\nabla_{xx}^2L
=
\begin{bmatrix}
2/3&0&0\\
0&0&0\\
0&0&0
\end{bmatrix}.
$$

正乘子活动约束与等式约束给临界方向条件

$$
-d_1-d_2-d_3=0,
\qquad
-7d_1+2d_2-d_3=0.
$$

解得

$$
d=(d_1,2d_1,-3d_1)^T.
$$

因此对任意非零临界方向，

$$
d^T\nabla_{xx}^2L\,d
=\frac23d_1^2>0.
$$

故 $x^*$ 是严格局部极小点，目标值为

$$
\boxed{f(x^*)=-\frac{49}{12}}.
$$

## 第 8 题：两圆约束的三个候选点

根据作答过程还原问题：

$$
\begin{aligned}
\min\quad &x_2\\
\text{s.t.}\quad
&g(x)=-x_1^2-(x_2-4)^2+16\ge0,\\
&h(x)=(x_1-2)^2+(x_2-3)^2-13=0.
\end{aligned}
$$

题目给出

$$
x^{(1)}=(0,0)^T,\qquad
x^{(2)}=\left(\frac{16}{5},\frac{32}{5}\right)^T,\qquad
x^{(3)}=(2,3+\sqrt{13})^T.
$$

### 在 $x^{(1)}=(0,0)^T$

两条约束都活动，KKT 乘子为

$$
\boxed{w=\frac18,\qquad v=0}.
$$

临界方向需满足

$$
(0,8)d=0,\qquad (-4,-6)d=0,
$$

只能得到 $d=0$。两个活动边界在该点横截，局部没有非零临界方向，因此二阶充分条件成立，$x^{(1)}$ 是局部极小点。

### 在 $x^{(2)}=(16/5,32/5)^T$

两条约束也都活动。解驻点方程得到

$$
\boxed{w=\frac{3}{40},\qquad v=\frac15}.
$$

两条活动约束梯度线性无关，临界方向仍只有 $d=0$，所以 $x^{(2)}$ 也是局部极小点。

### 在 $x^{(3)}=(2,3+\sqrt{13})^T$

圆盘约束不活动，故 $w=0$；等式约束给

$$
\boxed{v=\frac{\sqrt{13}}{26}}.
$$

等式切方向满足 $d_2=0$。此时

$$
\nabla_{xx}^2L
=-\frac{1}{\sqrt{13}}I,
$$

所以对 $d=(d_1,0)^T\ne0$，

$$
d^T\nabla_{xx}^2L\,d
=-\frac{d_1^2}{\sqrt{13}}<0.
$$

它不是局部极小点。

## 第 9 题：参数 $\beta$ 改变二阶性质

$$
\begin{aligned}
\min\quad
&\frac12\left[(x_1-1)^2+x_2^2\right]\\
\text{s.t.}\quad
&-x_1+\beta x_2^2=0.
\end{aligned}
$$

考察 $(0,0)^T$。驻点方程给等式乘子 $v=1$，切方向由

$$
-d_1=0
$$

得到 $d=(0,d_2)^T$。Lagrange Hessian 在切方向上的二阶型是

$$
d^T\nabla_{xx}^2L\,d=(1-2\beta)d_2^2.
$$

因此 $\beta<1/2$ 时二阶充分条件直接给严格局部极小；$\beta>1/2$ 时存在二阶下降方向，不是局部极小。边界 $\beta=1/2$ 时二阶型为零，还不能停在必要条件上。

用约束精确消元 $x_1=\beta t^2,\ x_2=t$：

$$
\begin{aligned}
f(t)
&=\frac12\left[(\beta t^2-1)^2+t^2\right]\\
&=\frac12+\left(\frac12-\beta\right)t^2
+\frac{\beta^2}{2}t^4.
\end{aligned}
$$

当 $\beta=1/2$ 时，非零小 $t$ 仍使四次项严格增加。因此完整结论是

$$
\boxed{
\beta\le\frac12\text{ 时 }(0,0)\text{ 是严格局部极小点；}
\quad
\beta>\frac12\text{ 时不是局部极小点。}
}
$$

## 作业自检

- 先验可行性，再列活动约束；不可行候选点无需解 KKT。
- 二阶条件检查 $d^T\nabla_{xx}^2L\,d$，不是只看 $\nabla^2f$。
- 二阶型等于零时必要条件没有给答案，要像参数题一样回到原函数或更高阶项。

</details>
