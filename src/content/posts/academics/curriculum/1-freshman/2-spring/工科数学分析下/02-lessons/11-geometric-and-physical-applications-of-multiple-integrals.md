---
title: "第 11 讲：重积分的几何与物理应用"
description: "用重积分统一计算面积、体积、曲面面积、质量、质心和转动惯量。"
date: 2026-08-27
---

重积分的应用不需要背很多孤立公式。统一原则是：**先找一个足够小的几何单元，写出它对目标量的贡献，再对全区域累加。**

## 面积与体积

平面区域面积：

$$
A=\iint_D1\,dA.
$$

若立体在 $(x,y)$ 上方由 $z_1(x,y)$ 和 $z_2(x,y)$ 夹住，体积为

$$
V=\iint_D\bigl[z_2(x,y)-z_1(x,y)\bigr]dA.
$$

任意空间区域则直接写

$$
V=\iiint_\Omega1\,dV.
$$

这三条其实都是“每个小单元贡献自身大小”。

## 曲面面积

对图形曲面

$$
\Sigma:z=f(x,y),\qquad (x,y)\in D,
$$

参数化为 $\mathbf r(x,y)=(x,y,f(x,y))$。两个切向量叉积的模为

$$
\|\mathbf r_x\times\mathbf r_y\|
=\sqrt{1+f_x^2+f_y^2},
$$

所以曲面面积

$$
S=\iint_D\sqrt{1+f_x^2+f_y^2}\,dx\,dy.
$$

若曲面写成 $x=g(y,z)$ 或 $y=h(z,x)$，应投影到相应坐标面，公式中的偏导也随之改变。

参数曲面 $\mathbf r(u,v)$ 的统一公式是

$$
S=\iint_\Delta
\|\mathbf r_u\times\mathbf r_v\|\,du\,dv.
$$

曲面面积与方向无关，所以取叉积的模。

## 质量与质心

薄片占据 $D$，面密度为 $\rho(x,y)$：

$$
M=\iint_D\rho(x,y)\,dA.
$$

对 $y$ 轴和 $x$ 轴的一阶矩分别为

$$
M_y=\iint_Dx\rho\,dA,\qquad
M_x=\iint_Dy\rho\,dA.
$$

质心坐标

$$
\bar x=\frac{M_y}{M},\qquad
\bar y=\frac{M_x}{M}.
$$

下标容易记反：$M_y$ 是关于 $y$ 轴的矩，力臂是到 $y$ 轴的距离 $x$。

三维物体同理：

$$
M=\iiint_\Omega\rho\,dV,\qquad
\bar x=\frac1M\iiint_\Omega x\rho\,dV,
$$

$\bar y,\bar z$ 类似。

### 对称性先用

若密度和区域关于 $y$ 轴对称，则 $x\rho$ 是奇对称贡献，$\bar x=0$。先判断对称性能省去大量积分，也可作为结果的 sanity check。

## 转动惯量

质量元到转轴距离的平方乘质量，再累加：

$$
I=\int r_\perp^2\,dm.
$$

对平面薄片：

$$
I_x=\iint_D y^2\rho\,dA,\qquad
I_y=\iint_D x^2\rho\,dA,
$$

$$
I_O=\iint_D(x^2+y^2)\rho\,dA=I_x+I_y.
$$

三维中绕 $z$ 轴的距离平方为 $x^2+y^2$，所以

$$
I_z=\iiint_\Omega(x^2+y^2)\rho\,dV.
$$

不要把到轴的距离误写成到原点的距离。

## 平均值

函数在平面区域 $D$ 上的平均值定义为

$$
\bar f=\frac1{\operatorname{Area}(D)}\iint_D f\,dA.
$$

在空间区域上则除以体积。连续函数在适当区域上满足积分中值性质：存在某点使函数值等于平均值。

## 如何从文字建模

1. 明确物体占据的区域和密度类型；
2. 选小单元：$dA$、$dV$ 或 $dS$；
3. 写目标量的微元，例如 $dm=\rho dA$、$dI=r_\perp^2dm$；
4. 根据对称性和边界选坐标系；
5. 积分后检查单位。

单位是非常有效的检查：质量是密度乘面积或体积；一阶矩多一个长度；转动惯量多两个长度。若结果量纲不对，通常是密度、Jacobain 或距离平方漏了一项。
