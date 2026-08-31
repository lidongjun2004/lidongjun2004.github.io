---
title: "第 15 周作业：存在唯一性与延拓"
description: "非 Lipschitz 初值问题、Picard 迭代、误差估计和解的延拓；题面按我当时的手写提交还原"
date: 2026-08-27
tags: ["作业"]
---

源文件是我当时的手写提交，题目来自习题 4.2、4.3。我只整理能够从作答唯一恢复的题面。

## 习题 4.2 第 1 题：唯一性失效在哪里

讨论初值问题 $y'=\sqrt{|y|}$ 和 $y'=|y|^\alpha$（$\alpha>0$）的解及唯一性。

<details class="exam-answer">
<summary>查看我当时的提交与核对</summary>

$y'=\sqrt{|y|}$ 在 $y=0$ 附近不满足关于 $y$ 的 Lipschitz 条件。除零解外，还可以先沿 $y=0$ 停留任意时间，再接上平方曲线，所以过 $(x_0,0)$ 的解不唯一。

更一般地，$y'=|y|^\alpha$ 在 $y_0\ne0$ 附近可正常使用唯一性定理；在 $y_0=0$ 时：

- $0<\alpha<1$ 时不唯一，可以出现“等待后离开”的解；
- $\alpha\ge1$ 时 $|y|^\alpha$ 在零点局部 Lipschitz，零解唯一。

我当时把“$\alpha>1$”也写进了不唯一情形；这一步与唯一性定理不符，整理时已明确更正。

</details>

## 习题 4.2 第 2 题：Picard 第三次近似

用 Picard 迭代求

$$
y'=x^2+y^2,\qquad y(0)=0
$$

的第三次近似。

<details class="exam-answer">
<summary>查看我当时的提交与核对</summary>

取 $\varphi_0=0$，并递推

$$
\varphi_{n+1}(x)=\int_0^x\left[s^2+\varphi_n(s)^2\right]ds.
$$

于是

$$
\varphi_1=\frac{x^3}{3},\qquad
\varphi_2=\frac{x^3}{3}+\frac{x^7}{63},
$$

$$
\varphi_3
=\frac{x^3}{3}+\frac{x^7}{63}
+\frac{2x^{11}}{2079}
+\frac{x^{15}}{59535}.
$$

</details>

## 习题 4.2 第 4 题：Picard 误差估计

在矩形区域内设 $|f(x,y)|\le M$，且 $f$ 关于 $y$ 的 Lipschitz 常数为 $L$。证明 Picard 迭代满足

$$
|\varphi(x)-\varphi_n(x)|
\le \frac{ML^n}{(n+1)!}|x-x_0|^{n+1}.
$$

<details class="exam-answer">
<summary>查看我当时的提交与整理</summary>

先由积分方程得到第一步估计，再反复使用

$$
|f(s,u)-f(s,v)|\le L|u-v|.
$$

若第 $n$ 步估计成立，则

$$
\begin{aligned}
|\varphi-\varphi_{n+1}|
&\le L\int_{x_0}^x|\varphi(s)-\varphi_n(s)|ds\\
&\le \frac{ML^{n+1}}{(n+1)!}
\int_{x_0}^x|s-x_0|^{n+1}ds\\
&=\frac{ML^{n+1}}{(n+2)!}|x-x_0|^{n+2}.
\end{aligned}
$$

数学归纳法即得结论。

</details>

## 习题 4.3 第 1 题：全局解

证明对任意 $x_0\in\mathbb R$、$y_0\in(0,1)$，初值问题

$$
y'=y(y-1),\qquad y(x_0)=y_0
$$

的解在整个实轴上有定义。

<details class="exam-answer">
<summary>查看我当时的提交与整理</summary>

$y=0$、$y=1$ 都是平衡解。由唯一性，初值落在两者之间的解不能穿过边界。直接分离变量还可得

$$
y(x)=\frac1{1+Ke^x},\qquad K>0,
$$

它始终位于 $(0,1)$，因此不会在有限时刻逃向无穷，解可延拓到 $\mathbb R$。

</details>

## 习题 4.3 第 2 题：最大存在区间

求 $y'=y^2$ 分别通过 $(1,1)$、$(3,-1)$ 的解及其最大存在区间。

<details class="exam-answer">
<summary>查看我当时的提交与整理</summary>

非零解满足

$$
y=-\frac1{x+C}.
$$

通过 $(1,1)$ 得 $C=-2$，所以 $y=-1/(x-2)$，包含初始点的最大区间是 $(-\infty,2)$。

通过 $(3,-1)$ 得 $C=-2$，仍是同一条积分曲线，但包含 $x=3$ 的最大区间是 $(2,+\infty)$。

</details>

## 习题 4.3 第 3 题：耗散型自治方程

设 $f\in C^1(\mathbb R)$ 且 $yf(y)<0$（$y\ne0$）。证明 $y'=f(y)$ 的解向前全局存在，并且 $y(x)\to0$。

<details class="exam-answer">
<summary>查看我当时的提交与整理</summary>

沿解有

$$
\frac d{dx}y^2=2yf(y)<0\qquad(y\ne0),
$$

所以 $|y|$ 单调不增，解始终留在一个紧区间内。$f\in C^1$ 给出局部唯一性；解既不可能有限时刻爆炸，就能向前无限延拓。

$|y|$ 的极限存在。若极限为某个 $L>0$，则在对应的紧邻域里 $|f(y)|$ 有正下界，$|y|$ 会持续以至少固定速度下降，与趋于 $L$ 矛盾。因此极限只能是零。

</details>
