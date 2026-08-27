---
title: "第 10 讲：Laplace 变换法"
description: "掌握导数、移位、卷积和阶跃函数的 Laplace 变换，用代数方式求解初值与分段输入问题。"
date: 2026-08-27
---

Laplace 变换把时间域中的微分变成变换域中的乘法，同时把初值自动带入。它特别适合常系数线性初值问题、分段输入和冲击输入。

## 定义与存在条件

$$
\mathcal L\{f(t)\}(s)
=F(s)=\int_0^\infty e^{-st}f(t)dt.
$$

若 $f$ 分段连续且为指数阶，即 $|f(t)|\le Me^{at}$，则对充分大的 $s$ 变换存在。

常用表：

$$
\mathcal L\{1\}=\frac1s,\qquad
\mathcal L\{t^n\}=\frac{n!}{s^{n+1}},
$$

$$
\mathcal L\{e^{at}\}=\frac1{s-a},\qquad
\mathcal L\{\sin bt\}=\frac b{s^2+b^2},\qquad
\mathcal L\{\cos bt\}=\frac s{s^2+b^2}.
$$

## 导数公式

分部积分得

$$
\mathcal L\{y'\}=sY-y(0),
$$

进一步

$$
\mathcal L\{y''\}
=s^2Y-sy(0)-y'(0),
$$

一般地

$$
\mathcal L\{y^{(n)}\}
=s^nY-s^{n-1}y(0)-\cdots-y^{(n-1)}(0).
$$

这就是初值问题转成代数方程的原因。

## 标准求解流程

对方程整体取变换，把 $Y(s)$ 的项收集到一侧：

$$
P(s)Y(s)=F(s)+\text{初值项}.
$$

然后：

1. 解出 $Y(s)$；
2. 因式分解分母；
3. 做部分分式或配方；
4. 查表逆变换；
5. 代回初值和原方程检查。

重根分母 $(s-a)^k$ 对应 $t^{k-1}e^{at}/(k-1)!$。不可约二次式先配成 $(s-a)^2+b^2$，再拆出余弦和正弦分子。

## 移位与阶跃函数

第一移位：

$$
\mathcal L\{e^{at}f(t)\}=F(s-a).
$$

Heaviside 函数 $u(t-a)$ 用于把输入在 $t=a$ 打开。第二移位：

$$
\mathcal L\{u(t-a)f(t-a)\}
=e^{-as}F(s).
$$

分段函数应先写成“原基线 + 每个跳变后的修正”，并让修正表示成 $f(t-a)$ 的形式。例如在 $a$ 后开启 $g(t)$，需要改写成 $u(t-a)h(t-a)$ 才能直接套表。

## 卷积

$$
(f*g)(t)=\int_0^t f(\tau)g(t-\tau)d\tau,
$$

满足

$$
\mathcal L\{f*g\}=F(s)G(s).
$$

若 $Y(s)$ 是两个已知变换的乘积但部分分式不好做，可在时间域写成卷积。线性系统中，输出常写为“冲激响应 * 输入”。

## 冲激函数

Dirac $\delta(t-a)$ 的变换为

$$
\mathcal L\{\delta(t-a)\}=e^{-as}.
$$

它表示在极短时间内施加有限冲量。含 $\delta$ 的方程可以在变换域直接处理；在时间域则常导致状态某阶导数发生跳变。

## 方程组的 Laplace 法

对

$$
\mathbf x'=A\mathbf x+\mathbf f(t),\qquad \mathbf x(0)=\mathbf x_0,
$$

变换后

$$
(sI-A)\mathbf X(s)=\mathbf x_0+\mathbf F(s),
$$

所以

$$
\mathbf X(s)=(sI-A)^{-1}[\mathbf x_0+\mathbf F(s)].
$$

小矩阵可直接求逆并逐分量逆变换；高维时矩阵指数或结构分解通常更清楚。

## 常见错误

- $\mathcal L\{y'\}$ 漏掉 $y(0)$；
- 分段函数没有改写为 $f(t-a)$，移位后自变量错位；
- 把 $e^{-as}F(s)$ 逆变换成 $u(t-a)f(t)$，少了 $t-a$；
- 部分分式系数算完不合并回去检查；
- 用变换法得到解后忘记它通常只描述 $t\ge0$。
