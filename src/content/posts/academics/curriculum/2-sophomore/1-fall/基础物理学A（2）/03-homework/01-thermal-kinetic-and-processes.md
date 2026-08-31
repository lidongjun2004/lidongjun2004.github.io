---
title: "第 1 次作业：分子碰撞与理想气体过程"
description: "我当时提交的作业：平均自由程、碰撞频率与三类准静态过程计算；题目在外，答案默认折叠。"
date: 2026-08-27
tags: ["作业"]
---

## 题 3.12

电子管的真空度为 $1.333\times10^{-3}\ \mathrm{Pa}$。设空气分子的有效直径为 $3.0\times10^{-10}\ \mathrm m$，求 $27\ ^\circ\mathrm C$ 时单位体积内的分子数 $n$、平均自由程 $\lambda$ 和平均碰撞频率 $Z$。

<details class="exam-answer">
<summary>展开我当时提交的解答</summary>

由理想气体的微观状态方程，

$$
n=\frac{p}{k_BT}
=\frac{1.333\times10^{-3}}
{1.38\times10^{-23}\times300.15}
\approx3.22\times10^{17}\ \mathrm{m^{-3}}.
$$

硬球模型给出的平均自由程为

$$
\lambda=\frac{1}{\sqrt2\pi d^2n}
\approx7.76\ \mathrm m.
$$

空气分子的平均速率取

$$
\bar v=\sqrt{\frac{8RT}{\pi M}},
$$

其中按空气的平均摩尔质量取

$$
M\approx2.9\times10^{-2}\ \mathrm{kg\,mol^{-1}},
$$

在 $T=300.15\ \mathrm K$ 时有 $\bar v\approx4.68\times10^2\ \mathrm{m\,s^{-1}}$。于是平均碰撞频率

$$
Z=\frac{\bar v}{\lambda}\approx60.2\ \mathrm{s^{-1}}.
$$

</details>

## 题 4.1

在 $p$-$V$ 图上画出以下理想气体完成的准静态过程：

1. $p=kV$；
2. $p=kT$；
3. $V=kT$。

其中 $k$ 为常数。并计算当系统体积由 $V_1$ 变至 $V_2$ 时，三个过程中系统对外界所作的功。

<details class="exam-answer">
<summary>展开我当时提交的解答</summary>

1. $p=kV$ 在 $p$-$V$ 图上是一条过原点的直线，

   $$
   W=\int_{V_1}^{V_2}p\,\mathrm dV
   =\int_{V_1}^{V_2}kV\,\mathrm dV
   =\frac{k}{2}\left(V_2^2-V_1^2\right).
   $$

2. 联立 $p=kT$ 与 $pV=\nu RT$，得到 $V=\nu R/k$，所以这是等体过程，

   $$
   W=0.
   $$

3. 联立 $V=kT$ 与 $pV=\nu RT$，得到 $p=\nu R/k$，所以这是等压过程，

   $$
   W=p(V_2-V_1)=\frac{\nu R}{k}(V_2-V_1).
   $$

</details>
