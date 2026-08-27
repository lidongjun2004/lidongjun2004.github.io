---
title: "第 10 讲 · 收敛、特征函数与极限定理"
description: "理解依概率与依分布收敛，掌握特征函数、大数定律和中心极限定理及其正态近似应用"
date: 2026-08-27
---

前面研究单个变量或有限多个变量，这一讲研究 $X_1,X_2,\ldots$ 组成的序列。大数定律解释平均为什么稳定，中心极限定理解释稳定值附近的误差为什么常近似正态。2021 版课件单列的特征函数，是连接“独立和”与“极限分布”的工具。

## 1. 依概率收敛

若对任意 $\varepsilon>0$，

$$
P(|X_n-X|\ge\varepsilon)\longrightarrow0,
$$

则称 $X_n$ 依概率收敛到 $X$，记作

$$
X_n\xrightarrow{P}X.
$$

它允许每个 $n$ 都有误差，只要求固定误差带外的概率趋于零。

若 $X_n\xrightarrow P a$、$Y_n\xrightarrow P b$，连续函数运算保持收敛：

$$
X_n+Y_n\xrightarrow P a+b,
$$

$$
X_nY_n\xrightarrow P ab,
$$

若 $b\ne0$，还有 $X_n/Y_n\xrightarrow P a/b$。

### 一个等价判据

令

$$
Z_n=\frac{|X_n-X|}{1+|X_n-X|}.
$$

则 $0\le Z_n<1$，并且

$$
X_n\xrightarrow P X
\quad\Longleftrightarrow\quad
E(Z_n)\to0.
$$

正向可用有界变量分段估计，反向可用 Markov 不等式。这一判据把概率收敛转成期望收敛。

## 2. 依分布收敛

若在极限分布函数 $F$ 的每个连续点 $x$ 上，

$$
F_{X_n}(x)\longrightarrow F_X(x),
$$

则称 $X_n$ 依分布收敛到 $X$，记作

$$
X_n\xrightarrow d X.
$$

依概率收敛推出依分布收敛。反向一般不成立，因为依分布只比较边际分布，不要求 $X_n$ 和 $X$ 在同一个样本点上接近。

特殊地，若极限是常数 $c$，则

$$
X_n\xrightarrow d c
\quad\Longleftrightarrow\quad
X_n\xrightarrow P c.
$$

## 3. 特征函数

随机变量 $X$ 的特征函数定义为

$$
\varphi_X(t)=E(e^{itX}),
\qquad t\in\mathbb R.
$$

由 Euler 公式 $e^{itX}=\cos(tX)+i\sin(tX)$。因为 $|e^{itX}|=1$，特征函数对任何分布都存在，这是它比矩生成函数更稳的地方。

离散型：

$$
\varphi_X(t)=\sum_kp_ke^{itx_k}.
$$

连续型：

$$
\varphi_X(t)=\int_{-\infty}^{\infty}
e^{itx}f_X(x)\,dx.
$$

### 基本性质

$$
\varphi_X(0)=1,
\qquad
|\varphi_X(t)|\le1,
$$

$$
\varphi_X(-t)=\overline{\varphi_X(t)},
$$

$$
\varphi_{aX+b}(t)=e^{ibt}\varphi_X(at).
$$

若 $X,Y$ 独立，

$$
\varphi_{X+Y}(t)=\varphi_X(t)\varphi_Y(t).
$$

卷积因此变成普通乘法。若 $E|X|^k<\infty$，

$$
\varphi_X^{(k)}(0)=i^kE(X^k).
$$

特征函数一致连续、正定，并且唯一决定概率分布。在适当可积条件下还能通过 Fourier 逆变换恢复密度：

$$
f_X(x)=\frac1{2\pi}
\int_{-\infty}^{\infty}e^{-itx}\varphi_X(t)\,dt.
$$

Lévy 连续性定理给出弱收敛判据：若 $\varphi_{X_n}(t)$ 逐点收敛到在 $0$ 处连续的某个特征函数 $\varphi_X(t)$，则 $X_n\xrightarrow d X$；反向也成立。

### 常用特征函数

| 分布 | $\varphi_X(t)$ |
|---|---|
| $P(X=a)=1$ | $e^{iat}$ |
| Bernoulli$(p)$ | $1-p+pe^{it}$ |
| $B(n,p)$ | $(1-p+pe^{it})^n$ |
| $P(\lambda)$ | $\exp\{\lambda(e^{it}-1)\}$ |
| $U(a,b)$ | $(e^{ibt}-e^{iat})/[it(b-a)]$ |
| $N(\mu,\sigma^2)$ | $\exp(i\mu t-\sigma^2t^2/2)$ |
| $Exp(\lambda)$ | $(1-it/\lambda)^{-1}$ |
| $Ga(\alpha,\lambda)$ | $(1-it/\lambda)^{-\alpha}$ |
| $\chi^2(n)$ | $(1-2it)^{-n/2}$ |

例如独立 $X_i\sim P(\lambda)$ 时，

$$
\varphi_{\sum X_i}(t)
=\left[e^{\lambda(e^{it}-1)}\right]^n
=e^{n\lambda(e^{it}-1)},
$$

所以 $\sum X_i\sim P(n\lambda)$。

### 矩是否唯一决定分布

特征函数总能唯一决定分布，但一串矩未必。旧版课件列出若干充分条件，例如 Carleman 型条件

$$
\sum_{n=1}^{\infty}
\frac1{[E(X^{2n})]^{1/(2n)}}=\infty
$$

可保证矩唯一决定分布。正态分布满足相应增长条件。做初等题时通常只需知道：能用特征函数判定分布，不应在未检查条件时仅凭所有已算出的低阶矩判断同分布。

## 4. 大数定律说的是什么

设 $S_n=X_1+\cdots+X_n$。若

$$
\frac{S_n-E(S_n)}{n}\xrightarrow P0,
$$

就说这列变量服从大数定律。它关注的是平均的随机波动逐渐消失。

### Bernoulli 大数定律

在独立重复试验中，成功概率为 $p$，频率 $\nu_n/n$ 满足

$$
\frac{\nu_n}{n}\xrightarrow Pp.
$$

这严格说明了“频率稳定在概率附近”。

### Chebyshev 大数定律

若 $X_i$ 相互独立且方差一致有界，即存在 $C$ 使

$$
\operatorname{Var}(X_i)\le C,
$$

则

$$
\frac1n\sum_{i=1}^n[X_i-E(X_i)]
\xrightarrow P0.
$$

证明只需计算均值的方差：

$$
\operatorname{Var}\left(
\frac1n\sum_{i=1}^nX_i
\right)
=\frac1{n^2}\sum_{i=1}^n\operatorname{Var}(X_i)
\le\frac Cn,
$$

再用 Chebyshev 不等式。

### Markov 大数定律

独立并非唯一条件。只要

$$
\frac{\operatorname{Var}(S_n)}{n^2}\to0,
$$

Chebyshev 不等式同样推出

$$
\frac{S_n-E(S_n)}n\xrightarrow P0.
$$

这允许一定相关性，只要总和的方差增长慢于 $n^2$。

### Khinchin 大数定律

若 $X_i$ 独立同分布且 $E|X_1|<\infty$，则

$$
\bar X_n=\frac1n\sum_{i=1}^nX_i
\xrightarrow P E(X_1).
$$

它不要求方差存在，只要求一阶绝对矩有限。

## 5. 中心极限定理

大数定律只说 $\bar X_n$ 靠近 $\mu$，没有给误差的形状。若 $X_i$ 独立同分布，

$$
E(X_i)=\mu,
\qquad
\operatorname{Var}(X_i)=\sigma^2\in(0,\infty),
$$

Lindeberg–Lévy 中心极限定理给出

$$
\frac{S_n-n\mu}{\sigma\sqrt n}
\xrightarrow dN(0,1).
$$

等价地，大样本下

$$
S_n\approx N(n\mu,n\sigma^2),
$$

$$
\bar X_n\approx N\left(\mu,\frac{\sigma^2}{n}\right).
$$

这不是说每个 $X_i$ 必须正态，而是标准化后的大样本和趋近正态。

## 6. de Moivre–Laplace 与连续性修正

若 $X\sim B(n,p)$ 且 $np$、$n(1-p)$ 足够大，

$$
\frac{X-np}{\sqrt{np(1-p)}}
\approx N(0,1).
$$

由于 $X$ 是整数而正态变量连续，应作连续性修正：

$$
P(a\le X\le b)
\approx
\Phi\left(\frac{b+0.5-np}{\sqrt{np(1-p)}}\right)
-\Phi\left(\frac{a-0.5-np}{\sqrt{np(1-p)}}\right).
$$

对应关系：

- $P(X\le k)$ 用边界 $k+0.5$；
- $P(X\ge k)$ 用边界 $k-0.5$；
- $P(X=k)$ 用区间 $(k-0.5,k+0.5)$。

### 例：收入超过阈值

单件售价 $X$ 取 $1,1.2,1.5$，概率分别为 $0.3,0.2,0.5$。先算

$$
E(X)=1.29,
$$

$$
E(X^2)=1.713,
$$

$$
\operatorname{Var}(X)=1.713-1.29^2=0.0489.
$$

300 件总收入 $S$ 近似

$$
S\sim N(387,14.67).
$$

因此

$$
P(S\ge400)
\approx1-\Phi\left(
\frac{400-387}{\sqrt{14.67}}
\right)
\approx1-\Phi(3.39).
$$

这里单件收入本身不是计数，阈值不需要二项式的 $0.5$ 连续性修正。

## 7. 独立但不同分布的中心极限定理

设独立变量 $X_i$ 的均值为 $\mu_i$、方差为 $\sigma_i^2$，记

$$
B_n^2=\sum_{i=1}^n\sigma_i^2.
$$

Lindeberg 条件要求对每个 $\varepsilon>0$，

$$
\frac1{B_n^2}
\sum_{i=1}^n
E\left[
(X_i-\mu_i)^2
\mathbf1_{\{|X_i-\mu_i|>\varepsilon B_n\}}
\right]
\to0.
$$

直觉是：超过总标准差尺度的单项贡献可以忽略。

更易验证的 Lyapunov 条件是存在 $\delta>0$ 使

$$
\frac1{B_n^{2+\delta}}
\sum_{i=1}^nE|X_i-\mu_i|^{2+\delta}
\to0.
$$

满足这些条件时，

$$
\frac{\sum_{i=1}^n(X_i-\mu_i)}{B_n}
\xrightarrow dN(0,1).
$$

Lyapunov 条件推出 Lindeberg 条件；两者都在排除某个变量单独主宰总和。

## 8. 大数定律和中心极限定理别混

| 问题 | 大数定律 | 中心极限定理 |
|---|---|---|
| 研究对象 | 样本均值是否靠近真均值 | 标准化误差的分布 |
| 典型结论 | $\bar X_n\xrightarrow P\mu$ | $\sqrt n(\bar X_n-\mu)/\sigma\xrightarrow dN(0,1)$ |
| 能否算近似概率 | 通常不能给精细近似 | 可以用 $\Phi$ 近似 |
| 误差尺度 | 只说趋于 0 | 明确为 $1/\sqrt n$ 量级 |

## 9. 检查清单

- 依概率收敛比依分布收敛强；极限为常数时二者等价。
- 特征函数中的 $i$ 是虚数单位，导数求矩时别漏 $i^k$。
- 独立和的特征函数才能直接相乘。
- 大数定律关心平均稳定，中心极限定理关心标准化误差形状。
- 标准化分母是标准差 $\sigma\sqrt n$，不是方差 $n\sigma^2$。
- 二项正态近似要看连续性修正；一般连续收入之和不需要机械加减 $0.5$。
- 非同分布中心极限定理的条件在防止“大项支配”，不是只检查变量个数很多。
