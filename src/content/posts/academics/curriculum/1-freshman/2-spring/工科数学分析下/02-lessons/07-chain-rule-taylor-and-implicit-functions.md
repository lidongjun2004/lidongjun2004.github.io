---
title: "第 7 讲：链式法则、Taylor 公式与隐函数定理"
description: "用依赖图和矩阵链式法则组织复合求导，再连接多元 Taylor 展开与隐函数求导。"
date: 2026-08-27
---

这一讲的三个工具都在回答局部问题：复合关系怎样传递变化，函数怎样用多项式近似，方程什么时候能在局部解出一个变量。

## 链式法则先画依赖关系

若

$$
z=f(u,v),\qquad u=\varphi(x,y),\quad v=\psi(x,y),
$$

则

$$
\frac{\partial z}{\partial x}
=f_u\varphi_x+f_v\psi_x,\qquad
\frac{\partial z}{\partial y}
=f_u\varphi_y+f_v\psi_y.
$$

每一项都对应从自变量到因变量的一条路径。最稳的方法是画出 $x,y\to u,v\to z$ 的依赖图：对目标偏导，沿所有可达路径相乘，再求和。

矩阵形式更统一。若 $g:\mathbb R^n\to\mathbb R^m$、$f:\mathbb R^m\to\mathbb R^p$ 可微，则

$$
D(f\circ g)(\mathbf x)=Df(g(\mathbf x))Dg(\mathbf x).
$$

矩阵尺寸能帮助检查顺序是否写反。

### 全导数

若 $z=f(x(t),y(t))$，则

$$
\frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}.
$$

若 $f$ 还显含 $t$，即 $z=f(x(t),y(t),t)$，别漏掉 $f_t$：

$$
\frac{dz}{dt}=f_xx'(t)+f_yy'(t)+f_t.
$$

## 多元 Taylor 公式

在 $(x_0,y_0)$ 附近令 $h=x-x_0,k=y-y_0$。二阶展开为

$$
\begin{aligned}
f(x_0+h,y_0+k)
={}&f(x_0,y_0)+f_xh+f_yk\\
&+\frac12\bigl(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2\bigr)
+o(h^2+k^2),
\end{aligned}
$$

所有偏导都在 $(x_0,y_0)$ 取值。向量形式是

$$
f(\mathbf x_0+\mathbf h)
=f(\mathbf x_0)+\nabla f^T\mathbf h
+\frac12\mathbf h^TH_f\mathbf h+o(\|\mathbf h\|^2).
$$

一阶项给切平面；在驻点一阶项消失，二次型 $\mathbf h^TH_f\mathbf h$ 决定局部形状。

多元中值公式可以把两点增量限制到连接它们的线段上。若区域凸且 $f$ 可微，存在 $0<\theta<1$ 使

$$
f(\mathbf b)-f(\mathbf a)
=\nabla f(\mathbf a+\theta(\mathbf b-\mathbf a))
\cdot(\mathbf b-\mathbf a).
$$

“区域凸”保证整条线段都在定义域中，不能省略。

## 隐函数定理在保证什么

方程

$$
F(x,y)=0
$$

不一定能在全局写成 $y=\varphi(x)$，但在一点附近可能可以。若

$$
F(x_0,y_0)=0,\qquad F_y(x_0,y_0)\ne0,
$$

且 $F$ 在附近有连续偏导，那么在该点附近存在唯一可微函数 $y=\varphi(x)$ 满足方程，并且

$$
\varphi'(x)=-\frac{F_x}{F_y}.
$$

$F_y\ne0$ 的直观含义是：方程对 $y$ 的变化不“变平”，可以局部反解出 $y$。若 $F_x\ne0$，则可以反过来解出 $x$ 为 $y$ 的函数。

### 二阶隐式求导

先从

$$
F_x+F_yy'=0
$$

得到 $y'$，再对 $x$ 求全导数：

$$
F_{xx}+2F_{xy}y'+F_{yy}(y')^2+F_yy''=0,
$$

从而

$$
y''=-\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}.
$$

这里每个 $F$ 的偏导都要沿隐函数 $y(x)$ 取值。

### 隐函数组

对方程组

$$
\mathbf F(\mathbf x,\mathbf y)=\mathbf0,
$$

若关于待解变量 $\mathbf y$ 的 Jacobian 矩阵 $D_{\mathbf y}\mathbf F$ 在该点可逆，就能局部解出 $\mathbf y=\boldsymbol\varphi(\mathbf x)$，且

$$
D\boldsymbol\varphi
=-(D_{\mathbf y}\mathbf F)^{-1}D_{\mathbf x}\mathbf F.
$$

标量公式 $-F_x/F_y$ 正是这个矩阵公式的一维版本。

## 常见错误

- 链式求导只沿一条路径，漏掉其他中间变量；
- 二阶 Taylor 中漏掉混合项的系数 $2$；
- 隐式求导时把 $F_x,F_y$ 当成只依赖 $x$ 的常数；
- 只看到 $F(x_0,y_0)=0$ 就默认能解出 $y$，没有检查 $F_y\ne0$；
- 使用线段上的中值公式却没有确认区域包含整条线段。
