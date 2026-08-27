---
title: "第 10 讲：参数曲线、Bezier 曲线与曲面"
description: "从线性插值、Hermite 和 Catmull–Rom 推到 de Casteljau、Bernstein 基与双三次 Bezier 曲面"
date: 2026-08-27
---

曲线用于字体、动画轨迹和造型轮廓，曲面用于汽车、船体和自由形状建模。课件的主线是：先学会用参数在两个点间移动，再把“点和导数约束”变成一条光滑曲线。

## 1. 三种描述方式

二维曲线可以是显式形式 $y=f(x)$、隐式形式 $g(x,y)=0$，也可以写成参数形式

$$
\mathbf p(t)=(x(t),y(t),z(t)).
$$

参数形式不要求每个 $x$ 只有一个 $y$，能自然描述闭环、空间曲线和运动轨迹，因此是这讲的重点。同一条空间曲线可有不同参数化；参数还决定物体沿曲线运动的速度。

## 2. 从线性插值到三次 Hermite

两点间线性插值为

$$
\mathbf p(t)=(1-t)\mathbf p_0+t\mathbf p_1,
\qquad 0\le t\le1.
$$

分段常量会在值上跳变，分段线性虽然位置连续，导数却在折点跳变。若希望同时控制端点位置与端点切线，最低需要四个系数，因此选择三次多项式。

三次 Hermite 曲线由 $\mathbf p_0,\mathbf p_1$ 和两端切向量 $\mathbf m_0,\mathbf m_1$ 决定：

$$
\mathbf p(t)=
h_{00}(t)\mathbf p_0+
h_{10}(t)\mathbf m_0+
h_{01}(t)\mathbf p_1+
h_{11}(t)\mathbf m_1,
$$

其中

$$
\begin{aligned}
h_{00}&=2t^3-3t^2+1,\\
h_{10}&=t^3-2t^2+t,\\
h_{01}&=-2t^3+3t^2,\\
h_{11}&=t^3-t^2.
\end{aligned}
$$

$3t^2-2t^3$ 这类 ease function 在端点速度为零，常用于动画柔和起停。

## 3. Catmull–Rom：只给点也能估切线

Hermite 需要手动给切向量。Catmull–Rom 用相邻控制点估计中间段端点切线，例如均匀参数化下

$$
\mathbf m_i=\frac12(\mathbf p_{i+1}-\mathbf p_{i-1}).
$$

这样生成的曲线插值所有控制点，并通常达到 $C^1$ 连续。代价是某一段还依赖左右邻点，控制点分布很不均匀时可能过冲；实际系统可改用弦长或向心参数化。

## 4. Bezier 曲线

三次 Hermite 的切线也可改写成两个额外控制点：

$$
\mathbf m_0=3(\mathbf P_1-\mathbf P_0),
\qquad
\mathbf m_1=3(\mathbf P_3-\mathbf P_2).
$$

得到三次 Bezier：

$$
\mathbf B(t)=
(1-t)^3\mathbf P_0+
3(1-t)^2t\mathbf P_1+
3(1-t)t^2\mathbf P_2+
t^3\mathbf P_3.
$$

一般 $n$ 次形式为

$$
\mathbf B(t)=
\sum_{i=0}^n
\binom ni
(1-t)^{n-i}t^i\mathbf P_i.
$$

这些 Bernstein 基函数非负且和为 $1$，因此曲线位于控制点凸包内。

## 5. de Casteljau 算法

de Casteljau 不直接展开多项式，而是反复做线性插值：

$$
\mathbf P_i^{(r)}
=(1-t)\mathbf P_i^{(r-1)}
+t\mathbf P_{i+1}^{(r-1)}.
$$

直到只剩一个点 $\mathbf P_0^{(n)}=\mathbf B(t)$。它几何直观、数值稳定，还能在任意 $t$ 处把一条 Bezier 精确拆成两段。

Bezier 曲线的常用性质：

- 插值首尾控制点。
- 首尾切线分别沿 $\mathbf P_1-\mathbf P_0$ 与 $\mathbf P_n-\mathbf P_{n-1}$。
- 位于控制点凸包内。
- 仿射不变：先变换控制点再求曲线，等于先求曲线再做仿射变换。

高次曲线控制会变得全局而不稳定，工程中更常拼接多段低次、尤其是三次 Bezier。

## 6. 拼接连续性

两段曲线端点相同是 $C^0$ 连续，位置不会断开。若一阶导数也相同，则为 $C^1$，速度方向和大小都连续。对相邻三次 Bezier，若

$$
\mathbf P_3=\mathbf Q_0,
\qquad
\mathbf P_3-\mathbf P_2
=\mathbf Q_1-\mathbf Q_0,
$$

就满足参数意义下的一阶连续。若只要求两边切线共线、允许速度大小不同，则是几何连续 $G^1$。

## 7. 从曲线到参数曲面

参数曲面由两个参数给出：

$$
\mathbf S(u,v)
=
\bigl(x(u,v),y(u,v),z(u,v)\bigr).
$$

两个切方向是 $\partial\mathbf S/\partial u$ 与 $\partial\mathbf S/\partial v$，法线为

$$
\mathbf n=
\frac{
\mathbf S_u\times\mathbf S_v
}{
\|\mathbf S_u\times\mathbf S_v\|
}.
$$

双三次 Bezier patch 使用 $4\times4$ 控制点网格：

$$
\mathbf S(u,v)=
\sum_{i=0}^3\sum_{j=0}^3
B_i^3(u)B_j^3(v)\mathbf P_{ij}.
$$

可以先固定 $v$，沿 $u$ 做四条 de Casteljau，再沿 $v$ 合成；也可以直接用矩阵形式计算。曲面只插值四个角控制点，其余控制点塑造边界切线和内部弯曲。

复杂模型由多个 patch 拼接。$C^0$ 要求边界控制点重合，$C^1$ 还要求边界两侧控制点差给出一致的一阶导数。Utah Teapot 正是多个双三次 Bezier patch 组成的经典例子。
