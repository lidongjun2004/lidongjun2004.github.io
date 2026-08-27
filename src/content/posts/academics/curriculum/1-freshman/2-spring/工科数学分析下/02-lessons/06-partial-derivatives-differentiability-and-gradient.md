---
title: "第 6 讲：偏导数、全微分、方向导数与梯度"
description: "分清偏导、方向导数与可微性，用梯度统一表示局部线性近似和最快变化方向。"
date: 2026-08-27
---

偏导数只观察坐标轴方向；可微性要求一个线性函数能同时近似所有方向。把这两个层次分开，是多元微分最重要的一关。

## 偏导数：固定其他变量

对 $z=f(x,y)$，在 $(x_0,y_0)$ 处对 $x$ 的偏导为

$$
f_x(x_0,y_0)
=\lim_{h\to0}\frac{f(x_0+h,y_0)-f(x_0,y_0)}h.
$$

计算时把 $y$ 当常数，对 $x$ 做一元求导。$f_y$ 同理。偏导数的几何意义，是曲面与平面 $y=y_0$ 或 $x=x_0$ 的交线上切线的斜率。

偏导存在不保证连续。经典构造方法是让函数沿坐标轴恒为零，于是两偏导都存在；但沿斜线或曲线趋近时函数不趋于同一个值，从而连连续性都失败。

## 全微分：统一的线性近似

$f$ 在 $(x_0,y_0)$ 可微，指存在常数 $A,B$ 使

$$
\Delta f
=A\Delta x+B\Delta y
+o\!\left(\sqrt{(\Delta x)^2+(\Delta y)^2}\right).
$$

若可微，则 $A=f_x(x_0,y_0)$、$B=f_y(x_0,y_0)$，全微分为

$$
df=f_x\,dx+f_y\,dy.
$$

它近似的是函数增量：

$$
\Delta f\approx df.
$$

例如测量 $x,y$ 有小误差时，可用

$$
|\Delta f|\approx|f_x\Delta x+f_y\Delta y|
\le |f_x||\Delta x|+|f_y||\Delta y|
$$

估计输出误差。

### 关系链

$$
\text{偏导在邻域连续}
\Longrightarrow\text{可微}
\Longrightarrow\text{连续且各偏导存在}.
$$

反向一般不成立。偏导连续是常用的充分条件，不是可微的必要条件。

按定义验证可微时，先写

$$
R=\Delta f-f_x\Delta x-f_y\Delta y,
$$

再证明

$$
\frac{|R|}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\to0.
$$

## 方向导数

给定单位方向

$$
\mathbf e=(\cos\alpha,\cos\beta),
$$

方向导数定义为

$$
D_{\mathbf e}f(x_0,y_0)
=\lim_{t\to0}
\frac{f(x_0+t\cos\alpha,y_0+t\cos\beta)-f(x_0,y_0)}t.
$$

若 $f$ 可微，则

$$
D_{\mathbf e}f
=f_x\cos\alpha+f_y\cos\beta
=\nabla f\cdot\mathbf e.
$$

这个公式依赖可微性；若只知道方向导数存在，不能机械套梯度点积。

## 梯度

梯度是偏导数组成的向量：

$$
\nabla f=(f_x,f_y)
$$

![梯度垂直于等值线并指向函数最快上升方向](/images/academics/math-analysis-2/gradient-level-set.svg)

或在 $n$ 维写成 $(f_{x_1},\dots,f_{x_n})$。由 Cauchy–Schwarz 不等式，

$$
D_{\mathbf e}f
=\nabla f\cdot\mathbf e
\le\|\nabla f\|.
$$

最大方向导数为 $\|\nabla f\|$，在 $\mathbf e$ 与梯度同向时取得；最小值是 $-\|\nabla f\|$。

对等值曲线 $f(x,y)=c$，沿曲线切向量 $\mathbf t$ 移动时函数值不变，所以

$$
\nabla f\cdot\mathbf t=0.
$$

梯度因此垂直于等值曲线；在三维则垂直于等值面。

## 高阶偏导

二阶偏导包括

$$
f_{xx},\quad f_{xy},\quad f_{yx},\quad f_{yy}.
$$

若混合偏导 $f_{xy},f_{yx}$ 在该点附近连续，则

$$
f_{xy}=f_{yx}.
$$

没有连续性条件时，不能默认交换顺序。二阶偏导组成 Hessian：

$$
H_f=
\begin{pmatrix}
f_{xx}&f_{xy}\\
f_{yx}&f_{yy}
\end{pmatrix},
$$

它描述一阶线性近似之后剩余的曲率，也是二阶 Taylor 公式和极值判别的核心。

## 做题检查

- “求偏导”只固定变量，不等于证明可微；
- “方向”应先单位化，否则结果会多一个长度倍数；
- 在奇点使用梯度公式前，先核对可微；
- 证明可微要控制所有方向的余项，不能只看坐标轴；
- 混合偏导交换要说明连续等条件。
