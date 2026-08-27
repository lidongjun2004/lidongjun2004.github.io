---
title: "第 14 讲：非齐次线性方程组与常数变易"
description: "由基解矩阵推导非齐次系统的常数变易公式，并分清通解、特解和初值响应。"
date: 2026-08-27
---

对非齐次系统

$$
\mathbf x'=A(t)\mathbf x+\mathbf f(t),
$$

齐次解中的常向量 $\mathbf c$ 不再固定，而是随时间变化。这就是常数变易法。

## 推导

设 $\Phi$ 是齐次系统的基解矩阵，令

$$
\mathbf x(t)=\Phi(t)\mathbf c(t).
$$

求导：

$$
\mathbf x'
=\Phi'\mathbf c+\Phi\mathbf c'
=A\Phi\mathbf c+\Phi\mathbf c'.
$$

与原方程比较，齐次部分抵消，得到

$$
\Phi\mathbf c'=\mathbf f,\qquad
\mathbf c'=\Phi^{-1}\mathbf f.
$$

所以

$$
\mathbf c(t)=\mathbf c_0+\int\Phi^{-1}(t)\mathbf f(t)\,dt,
$$

通解为

$$
\mathbf x(t)=\Phi(t)
\left[
\mathbf c_0+\int\Phi^{-1}(t)\mathbf f(t)\,dt
\right].
$$

不定积分中的常向量可以吸收进 $\mathbf c_0$。

## 初值形式

若用标准状态转移矩阵 $\Phi(t,t_0)$，初值问题的解写成

$$
\mathbf x(t)=
\Phi(t,t_0)\mathbf x_0
+\int_{t_0}^{t}
\Phi(t,\tau)\mathbf f(\tau)\,d\tau.
$$

第一项是初态的自由响应；第二项是从每个时刻 $\tau$ 注入的外力，经系统传播到 $t$ 的累积响应。

若用单参数基解矩阵 $X(t)$，则

$$
\Phi(t,\tau)=X(t)X^{-1}(\tau).
$$

因此同一公式也可写成

$$
\mathbf x(t)=X(t)X^{-1}(t_0)\mathbf x_0
+X(t)\int_{t_0}^{t}X^{-1}(\tau)\mathbf f(\tau)\,d\tau.
$$

## 找一个特解

不关心初值时，可取

$$
\mathbf x_p(t)=\Phi(t)\int\Phi^{-1}(t)\mathbf f(t)\,dt.
$$

再加齐次通解 $\Phi(t)\mathbf c$。积分常数不要在特解中重复保留，否则会和齐次常数重复。

## 常系数系统

若 $A$ 为常矩阵，标准状态转移矩阵为

$$
e^{A(t-t_0)}.
$$

初值解变成 Duhamel 公式：

$$
\mathbf x(t)
=e^{A(t-t_0)}\mathbf x_0
+\int_{t_0}^{t}e^{A(t-\tau)}\mathbf f(\tau)d\tau.
$$

这就是矩阵版卷积。若 $\mathbf f$ 为常向量且 $A$ 可逆，也可先找平衡特解

$$
\mathbf x_p=-A^{-1}\mathbf f,
$$

再令 $\mathbf z=\mathbf x-\mathbf x_p$ 化为齐次系统。

## 直接待定形式

常系数系统且外力为多项式、指数或正弦余弦时，也可猜同类向量函数的特解，代入求向量系数。若对应频率使矩阵 $\lambda I-A$ 不可逆，就发生共振，需要乘 $t$ 或用 Jordan 结构处理。

常数变易法始终适用，待定形式只是计算捷径。

## 常见错误

- $\Phi^{-1}\mathbf f$ 的矩阵乘法顺序写反；
- 用不定积分后又额外保留重复常数；
- 初值形式中把 $\Phi(t,\tau)$ 写成 $\Phi(\tau,t)$；
- 时变系统直接写 $e^{\int A}$；
- 算出一个特解后忘记加齐次通解；
- 只做形式积分，没有检查 $\Phi$ 在区间上可逆。

最稳的验证是直接对最终公式求导：积分上限产生的 $\mathbf f(t)$ 正好补回非齐次项。
