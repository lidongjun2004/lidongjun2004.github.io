---
title: "第 3 次作业：单边拉普拉斯变换与冲激匹配"
description: "2024–2025 学年第三次作业，含单边拉普拉斯、初终值、系统性质与冲激匹配。"
date: 2026-08-27
tags: ["作业"]
---

本篇按 `3信号与系统第三次作业.pdf` 整理，共六题。

## 1. 单边拉普拉斯变换

求下列 $x(t)$ 的单边拉普拉斯变换并给出收敛域：

1. $\delta(at)+u(bt)$；
2. $|t|e^{-2|t|}$；
3. $\cos(t-\pi)$；
4. $\cos(t-\pi)u(t-\pi)$；
5. $\cos t\,u(t-\pi)$。

<details class="exam-answer">
<summary>展开解析</summary>

按源题默认 $a,b>0$：

$$
\mathcal L_+\{\delta(at)+u(bt)\}=\frac1a+\frac1s,
\qquad \Re(s)>0,
$$

$$
\mathcal L_+\{|t|e^{-2|t|}\}=\frac1{(s+2)^2},
\qquad \Re(s)>-2,
$$

$$
\mathcal L_+\{\cos(t-\pi)\}=-\frac{s}{s^2+1},
\qquad \Re(s)>0,
$$

$$
\mathcal L_+\{\cos(t-\pi)u(t-\pi)\}
=\frac{se^{-\pi s}}{s^2+1},
$$

$$
\mathcal L_+\{\cos t\,u(t-\pi)\}
=-\frac{se^{-\pi s}}{s^2+1}.
$$

最后两式只差一个负号，因为 $\cos(t-\pi)=-\cos t$。

</details>

## 2. 双边变换反求参数

设

$$
g(t)=x(t)+\alpha x(-t),\qquad x(t)=\beta e^{-t}u(t),
$$

$$
G(s)=\frac{924s-1008}{s^2-1}.
$$

求 $\alpha,\beta$。

<details class="exam-answer">
<summary>展开解析</summary>

有

$$
X(s)=\frac\beta{s+1},\qquad
G(s)=X(s)+\alpha X(-s).
$$

通分后

$$
G(s)=\beta\frac{1-s+\alpha s+\alpha}{1-s^2}
=\beta\frac{(1-\alpha)s-(1+\alpha)}{s^2-1}.
$$

与题给分子比较系数，得到

$$
\alpha=\frac1{23},\qquad \beta=966.
$$

这里纠正了源文件解答中的一个符号笔误：把 $\alpha=-1/23$ 代回去会得到互换后的分子系数，不能还原题给的 $924s-1008$。

</details>

## 3. 初值与终值

求下列 $F(s)$ 对应信号的初值与终值：

$$
\frac{2s+51}{47s^2+67s},\qquad
\frac{3}{s(s^2+4)},\qquad
\frac5{s^2}.
$$

<details class="exam-answer">
<summary>展开解析</summary>

1. 初值为 $\lim_{s\to\infty}sF(s)=2/47$；终值为 $\lim_{s\to0}sF(s)=51/67$。
2. 初值为 0；因 $sF(s)=3/(s^2+4)$ 在虚轴有极点，终值不存在。
3. 初值为 0；对应斜坡信号，终值发散，不存在。

终值定理不能只“代 $s=0$”，还必须先检查 $sF(s)$ 的极点是否都在左半平面，至多允许原点有一个一阶极点。

</details>

## 4. 系统性质

判断下列系统是否因果、线性、时不变：

1. $y(t)=tx(t)$；
2. $y(t)=x(t)+x(t-1)$；
3. $y(t)=\sin(x(t))$；
4. $y(t)=tx(t)x^2(t-1)$。

<details class="exam-answer">
<summary>展开解析</summary>

1. 因果、线性、时变；
2. 因果、线性、时不变；
3. 因果、非线性、时不变；
4. 因果、非线性、时变。

判断时变最直接的方法是比较“先把输入延时”与“先过系统再把输出延时”；出现显式 $t$ 的系统通常会在这一步失败。

</details>

## 5. 冲激函数匹配法

已知 $r(0^-)=r'(0^-)=0$，求：

1. $r''+r'+r=\delta(t)+\delta'(t)$；
2. $r''+2r'+r=\delta(t)$；
3. $r''+2r'+r=\delta'(t)$。

<details class="exam-answer">
<summary>展开解析</summary>

第一题先匹配 $\delta'$ 与 $\delta$：可得 $r(0^+)=1$、$r'(0^+)=0$。$t>0$ 时解齐次方程，得到

$$
r(t)=e^{-t/2}\left[
\cos\left(\frac{\sqrt3}{2}t\right)
+\frac{\sqrt3}{3}\sin\left(\frac{\sqrt3}{2}t\right)
\right]u(t).
$$

后两题的特征根均为 $-1$ 的二重根。匹配跳变后：

$$
r_2(t)=te^{-t}u(t),
$$

$$
r_3(t)=(1-t)e^{-t}u(t).
$$

</details>

## 6. 广义初值定理

证明：若对所有 $n<N$ 都有 $x^{(n)}(0^+)=0$，且 $x(t)$ 在 $0^+$ 邻域可作相应 Taylor 展开，则

$$
x^{(N)}(0^+)=\lim_{s\to\infty}s^{N+1}X(s).
$$

<details class="exam-answer">
<summary>展开解析</summary>

在 $0^+$ 处展开：

$$
x(t)=\left[x(0^+)+x'(0^+)t+\cdots
+x^{(n)}(0^+)\frac{t^n}{n!}+\cdots\right]u(t).
$$

由低阶导数为零，逐项作拉普拉斯变换得

$$
X(s)=\sum_{n=N}^{\infty}
\frac{x^{(n)}(0^+)}{s^{n+1}}.
$$

乘 $s^{N+1}$：

$$
s^{N+1}X(s)=x^{(N)}(0^+)
+\sum_{n=N+1}^{\infty}\frac{x^{(n)}(0^+)}{s^{n-N}}.
$$

令 $s\to\infty$，余项趋于 0，即得结论。

</details>
