---
title: "第 6 次作业：z 变换与初终值定理"
description: "2024–2025 学年第六次作业，含双边 z 变换、收敛域、逆变换与初终值。"
date: 2026-08-27
tags: ["作业"]
---

我按 `6信号与系统第六次作业.pdf` 整理，共三题。

## 1. z 变换与收敛域

求：

1. $x[n]=(1/3)^{|n|}$；
2. $x[n]=(1/4)^{-n}u[n]$；
3. $x[n]=(1/5)^n u[-n]$；
4. $x[n]=(-1/6)^n u[n]$

的 $z$ 变换及收敛域。

<details class="exam-answer">
<summary>展开解析</summary>

1. 分开 $n<0$ 与 $n\ge0$ 两个几何级数：

   $$
   X(z)=\frac{-8z}{(z-3)(3z-1)},
   \qquad \frac13<|z|<3.
   $$

2.

   $$
   X(z)=\frac{z}{z-4},\qquad |z|>4.
   $$

1.

   $$
   X(z)=\frac1{1-5z},\qquad |z|<\frac15.
   $$

1.

   $$
   X(z)=\frac{6z}{6z+1},\qquad |z|>\frac16.
   $$

收敛域同时编码“左边还是右边”：圆外对应右边序列，圆内对应左边序列，圆环对应双边序列。

</details>

## 2. 逆 z 变换

求：

$$
X_1(z)=\frac{1-\frac12z^{-1}}
{1+\frac34z^{-1}+\frac18z^{-2}},
\qquad |z|>\frac12,
$$

$$
X_2(z)=\frac{1-az^{-1}}{z^{-1}-a},
\qquad |z|>\frac1a
$$

的逆变换。

<details class="exam-answer">
<summary>展开解析</summary>

第一式分解为

$$
X_1(z)=4\frac{z}{z+1/2}-3\frac{z}{z+1/4}.
$$

收敛域在圆外，所以

$$
x_1[n]=\left[4\left(-\frac12\right)^n
-3\left(-\frac14\right)^n\right]u[n].
$$

第二式可写成

$$
X_2(z)=(a-a^{-1})\frac{z}{z-a^{-1}}-a.
$$

因此

$$
x_2[n]=(a-a^{-1})a^{-n}u[n]-a\delta[n].
$$

</details>

## 3. 因果序列的初值与终值

求下列因果序列的 $x[0]$ 与 $x[\infty]$：

$$
X_1(z)=\frac{1+z^{-1}+z^{-2}}
{(1-z^{-1})(1-2z^{-1})},
$$

$$
X_2(z)=\frac1{(1-0.5z^{-1})(1+0.5z^{-1})},
$$

$$
X_3(z)=\frac{z^{-1}}{1-1.5z^{-1}+0.5z^{-2}}.
$$

<details class="exam-answer">
<summary>展开解析</summary>

初值定理与终值定理为

$$
x[0]=\lim_{z\to\infty}X(z),
\qquad
x[\infty]=\lim_{z\to1}(z-1)X(z).
$$

终值定理还要求 $(z-1)X(z)$ 的极点严格位于单位圆内。

1. $x_1[0]=1$；$X_1$ 在 $z=2$ 有极点，终值不存在。
2. 极点为 $\pm0.5$，故 $x_2[0]=1$，$x_2[\infty]=0$。
3. 分母为 $(1-z^{-1})(1-0.5z^{-1})$，只在 $z=1$ 有允许的一阶极点，所以 $x_3[0]=0$，$x_3[\infty]=2$。

</details>
