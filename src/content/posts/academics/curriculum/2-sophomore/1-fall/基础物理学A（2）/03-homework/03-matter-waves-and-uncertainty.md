---
title: "第 3 次作业：物质波与不确定关系"
description: "原作业中的 de Broglie 波长、光子与电子能量、不确定关系和能级寿命计算；题目在外，提交答案默认折叠。"
date: 2026-08-27
tags: ["作业"]
---

## 题 3.1

设电子动能为 $1.00\times10^4\ \mathrm{eV}$，中子动能为 $1.00\times10^5\ \mathrm{eV}$，求相应的 de Broglie 波长。忽略相对论效应。

<details class="exam-answer">
<summary>展开原提交解答</summary>

非相对论粒子的动量和波长为

$$
p=\sqrt{2mE_k},
\qquad
\lambda=\frac{h}{p}.
$$

代入电子和中子的质量，原提交得到

$$
\lambda_e\approx0.123\ \mathring{\mathrm A},
\qquad
\lambda_n\approx9.26\times10^{-4}\ \mathring{\mathrm A}.
$$

</details>

## 题 3.2

已知电子和光子的波长均为 $2.0\ \mathring{\mathrm A}$，它们的动量是多少？动能各是多少？

<details class="exam-answer">
<summary>展开原提交解答</summary>

两者具有相同波长，所以动量相同：

$$
p=\frac{h}{\lambda}
\approx3.3\times10^{-24}\ \mathrm{kg\,m\,s^{-1}}.
$$

光子的能量为

$$
E_\gamma=pc=\frac{hc}{\lambda}\approx6.2\ \mathrm{keV}.
$$

电子按非相对论关系计算：

$$
E_e=\frac{p^2}{2m_e}\approx37\ \mathrm{eV}.
$$

</details>

## 题 3.5

假定粒子的动量可以在千分之一这一不确定范围内测定，求粒子位置的不确定量。设：

1. 粒子的质量为 $5.0\times10^{-3}\ \mathrm{kg}$，速度为 $2.0\ \mathrm{m/s}$；
2. 粒子是电子，速度为 $1.8\times10^8\ \mathrm{m/s}$。速度已可与光速相比，必须考虑相对论效应。

<details class="exam-answer">
<summary>展开原提交解答</summary>

原提交采用数量级关系

$$
\Delta x\gtrsim\frac{h}{\Delta p},
\qquad
\frac{\Delta p}{p}=10^{-3}.
$$

对第一种粒子，$p=mv$，代入得到

$$
\Delta x\gtrsim6.6\times10^{-29}\ \mathrm m
=6.6\times10^{-19}\ \mathring{\mathrm A}.
$$

对电子，先以

$$
p=\gamma m_ev,
\qquad
\gamma=\frac{1}{\sqrt{1-v^2/c^2}}
$$

计入相对论修正，再代入动量不确定度，原提交得到

$$
\Delta x\gtrsim32\ \mathring{\mathrm A}.
$$

</details>

## 题 3.6

波长为 $3000\ \mathring{\mathrm A}$ 的光子，其波长的测量精度为十万分之一。测量其位置的绝对误差不能小于多少？

<details class="exam-answer">
<summary>展开原提交解答</summary>

由 $p=h/\lambda$，小量近似给出

$$
\Delta p\approx\frac{h}{\lambda^2}\Delta\lambda.
$$

再代入原提交采用的 $\Delta x\gtrsim h/\Delta p$：

$$
\Delta x\gtrsim\frac{\lambda^2}{\Delta\lambda}
=\frac{\lambda}{\Delta\lambda/\lambda}
\approx3.0\ \mathrm{cm}.
$$

</details>

## 题 3.8

电子从某激发态跃迁到基态时发出波长为 $4000\ \mathring{\mathrm A}$ 的光谱线。由于激发能级有一定宽度，该谱线有 $1.0\times10^{-4}\ \mathring{\mathrm A}$ 的宽度。问该激发态能级的平均寿命是多少？

<details class="exam-answer">
<summary>展开原提交解答</summary>

由 $E=hc/\lambda$，谱线宽度对应的能量宽度为

$$
\Delta E\approx\frac{hc}{\lambda^2}\Delta\lambda.
$$

再用寿命与能级宽度的数量级关系 $\tau\sim h/\Delta E$：

$$
\tau\sim\frac{\lambda^2}{c\,\Delta\lambda}
\approx5.3\times10^{-8}\ \mathrm s.
$$

</details>
