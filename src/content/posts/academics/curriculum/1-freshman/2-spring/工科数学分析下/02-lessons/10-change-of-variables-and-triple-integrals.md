---
title: "第 10 讲：积分换元、Jacobian 与三重积分"
description: "理解换元时面积体积元为何变化，并掌握极坐标、柱面坐标、球坐标和三重累次积分。"
date: 2026-08-27
---

积分换元不是只把被积函数里的变量替换掉，还必须计算小面积或小体积在映射下被放大了多少。这个局部伸缩因子就是 Jacobian 行列式的绝对值。

## 二重积分的一般换元

设

$$
x=x(u,v),\qquad y=y(u,v),
$$

把 $uv$ 平面的区域 $\Delta$ 一一映到 $xy$ 平面的区域 $D$。在适当光滑和非退化条件下，

$$
\iint_D f(x,y)\,dx\,dy
=\iint_\Delta
f(x(u,v),y(u,v))
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|
du\,dv,
$$

其中

$$
\frac{\partial(x,y)}{\partial(u,v)}
=\begin{vmatrix}
x_u&x_v\\
y_u&y_v
\end{vmatrix}.
$$

绝对值不能漏：行列式的符号表示方向是否翻转，面积本身非负。

### 极坐标

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad
\left|\frac{\partial(x,y)}{\partial(r,\theta)}\right|=r.
$$

因此

$$
dx\,dy=r\,dr\,d\theta.
$$

适合圆盘、圆环、扇形以及含 $x^2+y^2$ 的被积函数。区域描述应先确定角度范围，再沿每条射线确定 $r$ 的内外边界。

例如

$$
\iint_{x^2+y^2\le a^2}(x^2+y^2)\,dA
=\int_0^{2\pi}\!\int_0^a r^2\cdot r\,dr\,d\theta
=\frac{\pi a^4}{2}.
$$

被积函数的 $r^2$ 和面积元额外的 $r$ 是两个不同来源。

### 线性换元

若区域由 $ax+by$、$cx+dy$ 的等值线围成，令

$$
u=ax+by,\qquad v=cx+dy
$$

常能把斜平行四边形变成矩形。此时题目给的是 $(u,v)$ 关于 $(x,y)$ 的 Jacobian，换元公式却需要反方向：

$$
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|
=\frac1{\left|\frac{\partial(u,v)}{\partial(x,y)}\right|}.
$$

## 三重积分

对空间区域 $\Omega$，三重积分

$$
\iiint_\Omega f(x,y,z)\,dV
$$

是小体积加权求和的极限。$f=1$ 时给体积；$f=\rho$ 时给质量。

常见累次积分有“先一重后两重”的投影法：若

$$
\Omega={(x,y,z):(x,y)\in D, z_1(x,y)\le z\le z_2(x,y)},
$$

则

$$
\iiint_\Omega f\,dV
=\iint_D\left[
\int_{z_1(x,y)}^{z_2(x,y)}f(x,y,z)\,dz
\right]dx\,dy.
$$

另一种是截面法：固定 $z$，先对截面 $D_z$ 做二重积分，再对 $z$ 积。选择哪种取决于哪一类截面更简单。

## 柱面坐标与球坐标

柱面坐标

$$
x=r\cos\theta,\quad y=r\sin\theta,\quad z=z,\qquad
dV=r\,dr\,d\theta\,dz
$$

适合绕 $z$ 轴旋转对称的圆柱、圆锥、旋转抛物面。

球坐标可约定为

$$
x=\rho\sin\varphi\cos\theta,\quad
y=\rho\sin\varphi\sin\theta,\quad
z=\rho\cos\varphi,
$$

其中 $\rho\ge0$、$0\le\varphi\le\pi$ 是与正 $z$ 轴的夹角、$0\le\theta<2\pi$ 是方位角。体积元为

$$
dV=\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta.
$$

不同教材可能交换 $\theta,\varphi$ 的命名，做题必须看清约定；公式的几何含义不变。

## 一般三维换元

若

$$
x=x(u,v,w),\quad y=y(u,v,w),\quad z=z(u,v,w),
$$

则

$$
dV=
\left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|
du\,dv\,dw.
$$

计算流程始终是四步：

1. 把旧区域改写成新变量的区域；
2. 把被积函数全部换成新变量；
3. 乘 Jacobian 绝对值；
4. 检查映射是否一一、变量范围是否重复覆盖。

## 常见错误

- 极坐标只替换 $x,y$，漏乘 $r$；
- 把 $\partial(u,v)/\partial(x,y)$ 当成所需的反向 Jacobian；
- 球坐标漏掉 $\sin\varphi$；
- 角度范围多取一倍，导致区域重复覆盖；
- 只变被积函数，不变区域上下限。

换元后先用 $f=1$ 验证能否得到合理的面积或体积，通常能迅速发现范围和 Jacobian 的错误。
