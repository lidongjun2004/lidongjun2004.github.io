---
title: "第 4 讲：连续时间傅里叶变换"
description: "从傅里叶级数过渡到连续频谱，掌握典型变换对、广义函数与时频性质。"
date: 2026-08-27
---

把非周期信号看成周期趋于无穷的周期信号，离散谱线间隔趋于零，就得到连续时间傅里叶变换（CTFT）。

## 变换对

本课程采用

$$
X(\omega)=\int_{-\infty}^{\infty}
x(t)e^{-j\omega t}\,dt,
$$

$$
x(t)=\frac1{2\pi}\int_{-\infty}^{\infty}
X(\omega)e^{j\omega t}\,d\omega.
$$

$X(\omega)$ 一般是复函数，可写成幅度谱与相位谱。绝对可积是傅里叶变换存在的充分条件，但阶跃、正弦等不绝对可积信号仍能在广义函数意义下变换。

## 典型变换对

$$
e^{-at}u(t)
\longleftrightarrow
\frac1{a+j\omega},\qquad a>0,
$$

$$
e^{-a|t|}
\longleftrightarrow
\frac{2a}{a^2+\omega^2},
$$

$$
\operatorname{rect}\left(\frac tT\right)
\longleftrightarrow
T\operatorname{sinc}\left(\frac{\omega T}{2}\right),
$$

$$
\delta(t)\longleftrightarrow1,\qquad
1\longleftrightarrow2\pi\delta(\omega).
$$

由频移和 Euler 公式，

$$
\cos(\omega_0t)
\longleftrightarrow
\pi[\delta(\omega-\omega_0)+\delta(\omega+\omega_0)].
$$

单位阶跃需要保留冲激项：

$$
u(t)\longleftrightarrow
\pi\delta(\omega)+\frac1{j\omega},
$$

其中 $1/(j\omega)$ 按主值分布理解。

## 性质是一套解题工具

若 $x(t)\leftrightarrow X(\omega)$：

$$
x(t-t_0)\leftrightarrow e^{-j\omega t_0}X(\omega),
$$

$$
x(at)\leftrightarrow\frac1{|a|}X\left(\frac\omega a\right),
$$

$$
e^{j\omega_0t}x(t)
\leftrightarrow X(\omega-\omega_0),
$$

$$
\frac{d^nx}{dt^n}
\leftrightarrow(j\omega)^nX(\omega),
$$

$$
t^nx(t)\leftrightarrow j^n\frac{d^nX}{d\omega^n}.
$$

时域积分会引入 $1/(j\omega)$，还需根据直流分量决定是否增加 $\delta(\omega)$，不能只做形式除法。

## 对偶、奇偶与共轭

若 $x(t)\leftrightarrow X(\omega)$，则

$$
X(t)\leftrightarrow2\pi x(-\omega).
$$

实信号满足共轭对称 $X(-\omega)=X^*(\omega)$，所以幅度谱为偶函数、相位谱为奇函数。实偶信号的频谱实偶，实奇信号的频谱纯虚奇。

这些性质既能省计算，也能检查答案：实偶时域信号若算出非零奇虚部，必然有错。

## 卷积与乘积

$$
x(t)*h(t)\leftrightarrow X(\omega)H(\omega),
$$

$$
x(t)h(t)
\leftrightarrow\frac1{2\pi}X(\omega)*H(\omega).
$$

LTI 系统的频率响应就是 $H(\omega)$。复指数是 LTI 系统的特征函数：

$$
e^{j\omega t}\longrightarrow
H(\omega)e^{j\omega t}.
$$

系统不创造新的频率，只改变已有频率分量的幅度和相位。

## 周期信号的 CTFT

若

$$
x(t)=\sum_kC_ke^{jk\omega_0t},
$$

则

$$
X(\omega)=2\pi\sum_k
C_k\delta(\omega-k\omega_0).
$$

这把傅里叶级数与傅里叶变换统一起来：周期信号仍有 CTFT，但频谱是由冲激表示的离散线谱。

## Parseval 关系

$$
\int_{-\infty}^{\infty}|x(t)|^2dt
=\frac1{2\pi}\int_{-\infty}^{\infty}|X(\omega)|^2d\omega.
$$

信号能量在时域和频域中相同，只是度量因变换规范带有 $1/(2\pi)$。
