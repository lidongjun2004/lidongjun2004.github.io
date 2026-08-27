---
title: "第 11 讲：采样与离散时间傅里叶变换"
description: "从冲激采样推导频谱周期复制，理解 Nyquist 条件、混叠以及 DTFT 的定义与性质。"
date: 2026-08-27
---

离散序列既可独立研究，也常来自连续信号采样。采样把连续时间离散化，同时让频谱发生周期复制；DTFT 则描述所得序列的连续、周期频谱。

## 冲激采样模型

采样周期 $T_s$、采样角频率 $\omega_s=2\pi/T_s$。冲激串

$$
p(t)=\sum_{n=-\infty}^{\infty}
\delta(t-nT_s)
$$

与连续信号相乘：

$$
x_s(t)=x_c(t)p(t)
=\sum_nx_c(nT_s)\delta(t-nT_s).
$$

冲激串的频谱也是冲激串：

$$
P(\omega)=\frac{2\pi}{T_s}
\sum_k\delta(\omega-k\omega_s).
$$

时域相乘对应频域卷积，因此

$$
X_s(\omega)=\frac1{T_s}
\sum_{k=-\infty}^{\infty}
X_c(\omega-k\omega_s).
$$

即原频谱以 $\omega_s$ 为间隔复制。

## Nyquist–Shannon 条件

若 $X_c(\omega)=0$ 对 $|\omega|>\omega_m$，频谱副本不重叠需要

$$
\omega_s>2\omega_m.
$$

此时可用理想低通滤波器取出中央副本，等价于 sinc 插值：

$$
x_c(t)=\sum_nx_c(nT_s)
\operatorname{sinc}\left(
\frac{\pi(t-nT_s)}{T_s}\right)
$$

在相应 sinc 规范下成立。

若采样率不足，副本重叠，不同连续频率映射到同一离散频率，产生混叠。提高采样后的数字处理无法恢复已经混叠的信息；必须在采样前限带。

## 离散频率的折叠

连续复指数采样后

$$
e^{j\omega_0nT_s}=e^{j\Omega_0n},
\qquad \Omega_0=\omega_0T_s.
$$

$\Omega$ 与 $\Omega+2\pi k$ 产生同一序列，所以所有连续频率会按 $2\pi$ 折叠到一个基本区间。常选 $[-\pi,\pi)$。

## DTFT 变换对

$$
X(e^{j\Omega})=
\sum_{n=-\infty}^{\infty}
x[n]e^{-j\Omega n},
$$

$$
x[n]=\frac1{2\pi}
\int_{-\pi}^{\pi}
X(e^{j\Omega})e^{j\Omega n}\,d\Omega.
$$

DTFT 对 $\Omega$ 必为 $2\pi$ 周期。它的频率变量连续，而时间变量离散。

## 与 z 变换的关系

$$
X(z)=\sum_nx[n]z^{-n}.
$$

若 z 变换 ROC 包含单位圆，则在 $z=e^{j\Omega}$ 上取值得

$$
X(e^{j\Omega})=X(z)\big|_{z=e^{j\Omega}}.
$$

因此 DTFT 存在性与单位圆是否落在 ROC 内直接相关。

## 常见变换对与性质

$$
\delta[n]\longleftrightarrow1,
$$

$$
a^n u[n]\longleftrightarrow
\frac1{1-ae^{-j\Omega}},
\qquad |a|<1.
$$

若 $x[n]\leftrightarrow X(e^{j\Omega})$：

$$
x[n-n_0]\leftrightarrow
e^{-j\Omega n_0}X(e^{j\Omega}),
$$

$$
e^{j\Omega_0n}x[n]\leftrightarrow
X(e^{j(\Omega-\Omega_0)}),
$$

$$
x*h\leftrightarrow XH,
$$

$$
nx[n]\leftrightarrow
j\frac{dX}{d\Omega}.
$$

实序列满足共轭对称，幅度谱偶、相位谱奇。Parseval 关系为

$$
\sum_n|x[n]|^2
=\frac1{2\pi}\int_{-\pi}^{\pi}
|X(e^{j\Omega})|^2d\Omega.
$$

## DTFT、DFT 不要混

DTFT：无限或有限序列都可定义，频率连续且周期。

DFT：只处理一段 $N$ 点数据，时间和频率索引都离散。DFT 是有限序列 DTFT 的等间隔采样，但同时隐含对该段序列作周期延拓。
