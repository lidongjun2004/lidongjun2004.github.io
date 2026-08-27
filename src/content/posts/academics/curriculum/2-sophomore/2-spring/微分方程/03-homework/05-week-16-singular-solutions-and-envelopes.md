---
title: "第 16 周作业：奇解、包络与连续依赖"
description: "p 判别式、曲线族包络、初值敏感性和 Gronwall 不等式；题面按手写提交还原"
date: 2026-08-27
tags: ["作业"]
---

这份提交横跨习题 4.4、4.5。手写页中有一道截距曲线族题，原题名称不清，但参数关系和直线方程可以辨认，下面如实保留。

## 习题 4.4 第 1 题：求奇解

对下列方程使用 $p$ 判别式求奇解：

$$
y=2xy'+x^2(y')^4,
$$

$$
x(y')^3-y(y')^2=1.
$$

<details class="exam-answer">
<summary>查看提交内容与核对</summary>

令 $p=y'$。第一式写成

$$
F=y-2xp-x^2p^4=0.
$$

联立 $F_p=0$ 得 $p^3=-1/(2x)$；消去 $p$ 后得到包络型奇解

$$
y=-\frac{3}{2^{4/3}}x^{2/3},
$$

其中 $x^{2/3}$ 取实值。原提交在最后常数因子处有一次化简偏差，上式是代回原方程后成立的结果。

第二式可写为

$$
y=xp-\frac1{p^2}.
$$

联立 $\partial y/\partial p=0$，即 $x+2/p^3=0$，消去 $p$ 得

$$
y=-3\left(\frac{x^2}{4}\right)^{1/3}.
$$

</details>

## 习题 4.4 第 2 题：截距固定的直线族（根据作答还原）

设一族直线在 $y$ 轴上的截距为 $(0,m)$，在 $x$ 轴上的截距为 $(\pm(\alpha-|m|),0)$，其中 $\alpha>0$。求该直线族的包络。

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

提交先按 $m$ 的正负及横截距的正负，分别写出

$$
\pm\frac{x}{\alpha-|m|}+\frac ym=1,
$$

再与对参数 $m$ 的偏导方程联立消元。令 $u=|m|$，并分别用 $s,r\in\{1,-1\}$ 表示横、纵截距的符号，则四支直线可统一写成

$$
\frac{sx}{\alpha-u}+\frac{ry}{u}=1.
$$

联立关于 $u$ 的偏导方程，得到包络的参数式

$$
x=s\frac{(\alpha-u)^2}{\alpha},\qquad
y=r\frac{u^2}{\alpha},\qquad 0\le u\le\alpha.
$$

消去 $u$ 后，四支包络合起来就是

$$
\sqrt{|x|}+\sqrt{|y|}=\sqrt\alpha.
$$

源文件最后用图形工具把不同 $\alpha$ 的曲线叠画，以检查四种符号分支没有漏掉。

这道题的原始印刷题面不在目录中，因此这里不额外杜撰题目背景或曲线名称。

</details>

## 习题 4.4 第 3 题：两个圆族的包络

求下列曲线族的包络：

$$
(x-C)^2+(y-C)^2=4,
$$

$$
(x-C)^2+y^2=4C.
$$

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

第一族令 $F=(x-C)^2+(y-C)^2-4$。由 $F_C=0$ 得 $C=(x+y)/2$，代回得到两条平行包络

$$
y=x\pm2\sqrt2.
$$

第二族由

$$
F=(x-C)^2+y^2-4C=0,\qquad F_C=2(C-x)-4=0
$$

得 $C=x+2$，代回得到

$$
y^2=4x+4.
$$

</details>

## 习题 4.5 第 2 题：解对初值的敏感性

设 $y=\varphi(x;x_0,y_0)$ 是

$$
y'=\sin(xy),\qquad y(x_0)=y_0
$$

的解。求在 $(x_0,y_0)=(0,0)$ 处对 $x_0,y_0$ 的偏导。

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

基准解是 $y\equiv0$。令

$$
z=\frac{\partial\varphi}{\partial y_0},
$$

则变分方程为 $z'=xz$、$z(0)=1$，所以

$$
\left.\frac{\partial\varphi}{\partial y_0}\right|_{(0,0)}
=e^{x^2/2}.
$$

对初始时刻的偏导满足同一个齐次变分方程，但初值为 $-f(0,0)=0$，因此

$$
\left.\frac{\partial\varphi}{\partial x_0}\right|_{(0,0)}=0.
$$

</details>

## 习题 4.5 第 3 题：Gronwall 型估计

设 $f,g$ 非负连续，$g$ 单调不减，且

$$
x(t)\le g(t)+\int_{t_0}^t f(\tau)x(\tau)d\tau.
$$

证明

$$
x(t)\le g(t)\exp\left(\int_{t_0}^t f(s)ds\right).
$$

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

令

$$
u(t)=\int_{t_0}^t f(\tau)x(\tau)d\tau.
$$

则 $u(t_0)=0$，并有

$$
u'\le f(t)[g(t)+u(t)].
$$

乘积分因子并积分，得到

$$
u(t)\le g(t)\left[
\exp\left(\int_{t_0}^t f(s)ds\right)-1
\right],
$$

其中用到了 $g(\tau)\le g(t)$。再代回 $x\le g+u$ 即得结论。

</details>
