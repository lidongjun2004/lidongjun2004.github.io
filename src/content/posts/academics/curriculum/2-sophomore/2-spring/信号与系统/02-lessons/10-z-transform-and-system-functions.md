---
title: "第 10 讲：z 变换、收敛域与系统函数"
description: "用 z 变换代数化差分方程，掌握 ROC、逆变换、零极点、因果稳定性与系统函数。"
date: 2026-08-27
---

z 变换是离散序列的复频域表示，与连续系统的拉普拉斯变换平行：

$$
X(z)=\sum_{n=-\infty}^{\infty}x[n]z^{-n}.
$$

令 $z=re^{j\Omega}$，则 $z^{-n}=r^{-n}e^{-j\Omega n}$。半径 $r$ 控制指数加权，角度 $\Omega$ 控制振荡。

## 基本变换与 ROC

右边指数：

$$
a^n u[n]\longleftrightarrow
\frac1{1-az^{-1}}=\frac z{z-a},
\qquad |z|>|a|.
$$

左边指数：

$$
-a^n u[-n-1]\longleftrightarrow
\frac1{1-az^{-1}},
\qquad |z|<|a|.
$$

同一个代数式因 ROC 不同对应不同序列。ROC 是以原点为中心的圆环，不包含极点。

有限长右边序列的 ROC 通常是除 $z=0$ 外整个平面；有限长左边序列可能排除无穷。双边有理序列的 ROC 位于两组极点之间。

## 性质

若 $x[n]\leftrightarrow X(z)$：

$$
x[n-n_0]\leftrightarrow z^{-n_0}X(z),
$$

$$
a^nx[n]\leftrightarrow X(z/a),
$$

$$
nx[n]\leftrightarrow-z\frac{dX}{dz},
$$

$$
x*h\leftrightarrow X(z)H(z).
$$

时间反转满足

$$
x[-n]\leftrightarrow X(z^{-1}),
$$

ROC 的内外也相应翻转。

## 逆 z 变换

常用四种办法：

1. 对照基本变换对并结合 ROC；
2. 幂级数长除法，直接读 $z^{-n}$ 系数；
3. 部分分式展开；
4. 复积分留数。

有理式做部分分式后，必须逐项根据整个 ROC 决定右边或左边。只把每个极点都写成因果项，会悄悄假定 ROC 在最外极点之外。

## 单边 z 变换

单边变换

$$
X^+(z)=\sum_{n=0}^{\infty}x[n]z^{-n}
$$

适合带初始条件的差分方程。例如

$$
\mathcal Z_+\{x[n-1]\}
=z^{-1}X^+(z)+x[-1].
$$

不同移位方向会带入不同初始样本，使用前应从求和定义推一次，避免机械背错符号。

## 系统函数

零初始状态下

$$
H(z)=\frac{Y(z)}{X(z)}
=\mathcal Z\{h[n]\}.
$$

若差分方程为

$$
\sum_{k=0}^{N}a_ky[n-k]
=\sum_{m=0}^{M}b_mx[n-m],
$$

则

$$
H(z)=
\frac{\sum_{m=0}^{M}b_mz^{-m}}
{\sum_{k=0}^{N}a_kz^{-k}}.
$$

分子根是零点，分母根是极点。极点对应系统自然模式；单位圆上 $z=e^{j\Omega}$ 的取值若存在，就是频率响应

$$
H(e^{j\Omega}).
$$

## 因果与稳定

对有理 LTI 系统：

- 因果：$h[n]$ 为右边序列，ROC 在最外极点之外；
- 稳定：$\sum|h[n]|<\infty$，等价于 ROC 包含单位圆；
- 因果且稳定：所有极点严格在单位圆内。

最后一条不能反过来脱离 ROC 使用。若系统非因果，极点在单位圆外也可能通过内侧 ROC 得到稳定的左边响应。

## 初值与终值

在条件满足时，

$$
x[0]=\lim_{z\to\infty}X(z),
$$

$$
\lim_{n\to\infty}x[n]
=\lim_{z\to1}(1-z^{-1})X(z).
$$

终值定理要求 $(1-z^{-1})X(z)$ 的极点都严格在单位圆内；若有单位圆上的持续振荡，形式极限没有意义。
