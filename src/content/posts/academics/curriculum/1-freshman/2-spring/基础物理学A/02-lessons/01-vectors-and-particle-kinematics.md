---
title: "第 1 讲：矢量与质点运动学"
description: "从位置矢量的时间导数出发，掌握直角、自然和极坐标中的速度与加速度。"
date: 2026-08-27
---

运动学只描述“怎样运动”，不问“为什么这样运动”。第一步永远是选参考系、坐标系和时间零点，再用位置矢量 $\mathbf r(t)$ 表示轨迹。

## 矢量运算

点积

$$
\mathbf a\cdot\mathbf b=ab\cos\theta
$$

结果为标量，用于求投影、功和通量。

叉积

$$
\mathbf a\times\mathbf b
=ab\sin\theta\,\mathbf n
$$

结果为垂直于两矢量平面的矢量，方向由右手定则决定，用于力矩、角动量和磁力。叉积不满足交换律：

$$
\mathbf a\times\mathbf b
=-\mathbf b\times\mathbf a.
$$

对随时间变化的矢量，导数遵守乘积法则：

$$
\frac d{dt}(\mathbf a\cdot\mathbf b)
=\dot{\mathbf a}\cdot\mathbf b
+\mathbf a\cdot\dot{\mathbf b},
$$

叉积同理，但顺序不能交换。

## 位置、速度与加速度

$$
\mathbf v=\frac{d\mathbf r}{dt},
\qquad
\mathbf a=\frac{d\mathbf v}{dt}
=\frac{d^2\mathbf r}{dt^2}.
$$

在固定直角坐标系中基矢不随时间变：

$$
\mathbf r=x\mathbf e_x+y\mathbf e_y+z\mathbf e_z,
$$

所以可逐分量求导。

路程是沿轨迹累积的标量，位移是起终点位置差。平均速率与平均速度也不是一回事。

## 一维匀加速

仅在加速度为常量时，

$$
v=v_0+at,
$$

$$
x=x_0+v_0t+\frac12at^2,
$$

$$
v^2-v_0^2=2a(x-x_0).
$$

第三式通过消去时间得到，若 $a$ 依赖位置或速度，必须重新积分，不能套用。

## 自然坐标

沿轨迹切向单位矢量为 $\mathbf e_\tau$，指向曲率中心的法向单位矢量为 $\mathbf e_n$：

$$
\mathbf v=v\mathbf e_\tau,
$$

$$
\mathbf a=
\frac{dv}{dt}\mathbf e_\tau
+\frac{v^2}{R}\mathbf e_n.
$$

切向加速度改变速率，法向加速度改变速度方向。匀速圆周运动的速率不变，但加速度不为零。

## 平面极坐标

极坐标基矢随角度转动：

$$
\dot{\mathbf e}_r=\dot\theta\,\mathbf e_\theta,
\qquad
\dot{\mathbf e}_\theta=-\dot\theta\,\mathbf e_r.
$$

因此

$$
\mathbf v=
\dot r\,\mathbf e_r+r\dot\theta\,\mathbf e_\theta,
$$

$$
\mathbf a=
(\ddot r-r\dot\theta^2)\mathbf e_r
+(r\ddot\theta+2\dot r\dot\theta)\mathbf e_\theta.
$$

$-r\dot\theta^2$ 是向心项，$2\dot r\dot\theta$ 是径向运动和转动耦合产生的项。漏掉基矢导数，就会漏掉这两项。

## 相对运动

若参考系 $S'$ 仅相对 $S$ 以速度 $\mathbf V(t)$ 平移、不转动，

$$
\mathbf r=\mathbf R+\mathbf r',
$$

$$
\mathbf v=\mathbf V+\mathbf v',
\qquad
\mathbf a=\mathbf A+\mathbf a'.
$$

对匀速平移，$\mathbf a=\mathbf a'$，这是 Galilean 力学中惯性系等价的基础。若参考系转动，还会出现离心、Coriolis 和 Euler 项，不能只做速度相加。

## 解题习惯

1. 画坐标轴和正方向；
2. 写矢量方程后再投影；
3. 区分速度大小 $v$ 与速度矢量 $\mathbf v$；
4. 曲线运动先问用直角、自然还是极坐标最简；
5. 最后检查量纲和特殊时刻。
