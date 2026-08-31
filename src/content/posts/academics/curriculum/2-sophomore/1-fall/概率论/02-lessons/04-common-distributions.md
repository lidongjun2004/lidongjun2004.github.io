---
title: "第 5 讲 · 常用离散与连续分布"
description: "从随机机制辨认二项、Poisson、几何、超几何、正态、指数、Gamma、Beta 等常用分布"
date: 2026-08-27
---

背分布不应只背一行概率公式。更可靠的记法是：**这个随机变量数的是什么，试验是否独立，次数是固定的还是等到某件事发生才停止。**

我在这里统一约定 $Exp(\lambda)$ 与 $Ga(\alpha,\lambda)$ 中 $\lambda$ 是**率参数**。

## 1. Bernoulli 与二项分布

一次试验成功记 1、失败记 0，成功概率为 $p$：

$$
P(X=x)=p^x(1-p)^{1-x},
\qquad x=0,1.
$$

若做 $n$ 次独立同分布 Bernoulli 试验，成功总次数

$$
S_n=X_1+\cdots+X_n\sim B(n,p),
$$

$$
P(S_n=k)=\binom nkp^k(1-p)^{n-k}.
$$

期望和方差：

$$
E(S_n)=np,
\qquad
\operatorname{Var}(S_n)=np(1-p).
$$

### 什么时候不是二项

- 每次成功概率变化；
- 各次不独立；
- 不是固定做 $n$ 次；
- 不放回抽样且总体不够大。

这时不能只因题目出现“成功次数”就套二项分布。

## 2. Poisson 分布与稀有事件近似

若 $X$ 表示固定时间或空间内事件发生次数，平均次数为 $\lambda$，常用

$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},
\qquad k=0,1,\ldots.
$$

记作 $X\sim P(\lambda)$，并且

$$
E(X)=\operatorname{Var}(X)=\lambda.
$$

若 $X_n\sim B(n,p_n)$，$n$ 很大、$p_n$ 很小且 $np_n\to\lambda$，则

$$
P(X_n=k)\approx e^{-\lambda}\frac{\lambda^k}{k!}.
$$

这是二项分布的 Poisson 近似。实务上应同时检查“单次概率小”和“平均次数 $np$ 不太大”。

独立 Poisson 变量具有可加性：

$$
X\sim P(\lambda_1),\quad Y\sim P(\lambda_2)
\Longrightarrow
X+Y\sim P(\lambda_1+\lambda_2).
$$

若每个事件以概率 $p$ 被保留，Poisson 稀疏化后计数为 $P(\lambda p)$。

## 3. 超几何分布

$N$ 件物品中有 $M$ 件目标物，不放回抽取 $n$ 件，目标物数 $X$ 满足

$$
P(X=k)=
\frac{\binom Mk\binom{N-M}{n-k}}
{\binom Nn}.
$$

可取 $k$ 的范围必须同时满足各组合数有意义：

$$
\max(0,n-N+M)\le k\le\min(n,M).
$$

其期望与方差为

$$
E(X)=n\frac MN,
$$

$$
\operatorname{Var}(X)
=n\frac MN\left(1-\frac MN\right)
\frac{N-n}{N-1}.
$$

最后的有限总体修正因子 $(N-n)/(N-1)$ 体现了不放回造成的负相关。若 $n/N$ 很小，超几何可近似为 $B(n,M/N)$。

## 4. 几何与负二项分布

独立 Bernoulli 试验中，直到第一次成功所需次数 $X$ 服从几何分布：

$$
P(X=k)=(1-p)^{k-1}p,
\qquad k=1,2,\ldots.
$$

$$
E(X)=\frac1p,
\qquad
\operatorname{Var}(X)=\frac{1-p}{p^2}.
$$

我在这里采用“试验次数从 1 开始”的约定，有些教材把失败次数作为几何变量并从 0 开始，套公式前务必确认。

几何分布具有无记忆性：

$$
P(X>m+n\mid X>m)=P(X>n).
$$

直到第 $r$ 次成功所需总试验次数 $T$ 服从负二项分布：

$$
P(T=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r},
\qquad k=r,r+1,\ldots.
$$

它也可看成 $r$ 个独立几何变量之和。

## 5. 均匀分布

$X\sim U(a,b)$ 的密度为

$$
f_X(x)=
\begin{cases}
\dfrac1{b-a},&a<x<b,\\
0,&\text{其他}.
\end{cases}
$$

$$
E(X)=\frac{a+b}{2},
\qquad
\operatorname{Var}(X)=\frac{(b-a)^2}{12}.
$$

区间内等长子区间概率相同。不要把“密度常数”误说成“每个点等概率”；连续变量每个单点概率都为 0。

## 6. 指数分布

$X\sim Exp(\lambda)$ 的密度和 CDF 为

$$
f_X(x)=\lambda e^{-\lambda x},\quad x>0,
$$

$$
F_X(x)=1-e^{-\lambda x},\quad x>0.
$$

$$
E(X)=\frac1\lambda,
\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}.
$$

它常描述寿命、等待时间，并具有连续型无记忆性：

$$
P(X>s+t\mid X>s)=P(X>t).
$$

若 Poisson 过程在长度 $t$ 的区间内计数服从 $P(\lambda t)$，相邻事件等待时间就服从 $Exp(\lambda)$。

## 7. Gamma 与卡方分布

$X\sim Ga(\alpha,\lambda)$ 的密度为

$$
f_X(x)=
\frac{\lambda^\alpha}{\Gamma(\alpha)}
x^{\alpha-1}e^{-\lambda x},
\qquad x>0,
$$

其中

$$
\Gamma(\alpha)=\int_0^\infty x^{\alpha-1}e^{-x}\,dx.
$$

$$
E(X)=\frac\alpha\lambda,
\qquad
\operatorname{Var}(X)=\frac\alpha{\lambda^2}.
$$

$Ga(1,\lambda)=Exp(\lambda)$。Poisson 过程中等到第 $n$ 次事件的时间服从 $Ga(n,\lambda)$。

相同率参数下 Gamma 分布可加：独立的 $X\sim Ga(\alpha_1,\lambda)$、$Y\sim Ga(\alpha_2,\lambda)$ 满足

$$
X+Y\sim Ga(\alpha_1+\alpha_2,\lambda).
$$

若 $Z_1,\ldots,Z_n$ 独立且服从 $N(0,1)$，则

$$
\sum_{i=1}^nZ_i^2\sim\chi^2(n),
$$

而 $\chi^2(n)=Ga(n/2,1/2)$，这里仍是率参数。

## 8. Beta 分布

$X\sim Be(a,b)$ 的密度为

$$
f_X(x)=\frac{x^{a-1}(1-x)^{b-1}}{B(a,b)},
\qquad 0<x<1,
$$

$$
B(a,b)=\int_0^1x^{a-1}(1-x)^{b-1}\,dx.
$$

$$
E(X)=\frac{a}{a+b},
\qquad
\operatorname{Var}(X)=
\frac{ab}{(a+b)^2(a+b+1)}.
$$

它的支持集固定为 $(0,1)$，适合描述比例或概率参数。

## 9. 正态分布

$X\sim N(\mu,\sigma^2)$ 的密度为

$$
f_X(x)=\frac1{\sqrt{2\pi}\sigma}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right].
$$

它关于 $\mu$ 对称，在 $\mu$ 处达到最大值，期望为 $\mu$、方差为 $\sigma^2$。标准化后

![正态分布中均值改变峰的位置、标准差改变曲线宽窄](/images/academics/probability/lessons/normal-location-scale.webp)

$$
Z=\frac{X-\mu}{\sigma}\sim N(0,1).
$$

若标准正态 CDF 记为 $\Phi$，则

$$
P(a<X<b)=
\Phi\left(\frac{b-\mu}{\sigma}\right)
-\Phi\left(\frac{a-\mu}{\sigma}\right).
$$

利用对称性：

$$
\Phi(-x)=1-\Phi(x).
$$

正态分布的 $3\sigma$ 原则为

$$
P(|X-\mu|<\sigma)\approx0.6827,
$$

$$
P(|X-\mu|<2\sigma)\approx0.9545,
$$

$$
P(|X-\mu|<3\sigma)\approx0.9973.
$$

独立正态变量的线性组合仍为正态。若 $X_i\sim N(\mu_i,\sigma_i^2)$ 独立，则

$$
\sum_i a_iX_i
\sim N\left(\sum_i a_i\mu_i,\sum_i a_i^2\sigma_i^2\right).
$$

## 10. 一眼选模型

| 题目措辞 | 优先模型 |
|---|---|
| 固定 $n$ 次独立试验中的成功次数 | 二项 |
| 大量小概率事件的计数 | Poisson |
| 有限总体不放回抽样中的目标数 | 超几何 |
| 等到第一次成功的试验次数 | 几何 |
| 等到第 $r$ 次成功的总次数 | 负二项 |
| 区间内等位置随机 | 均匀 |
| 无记忆的等待时间 | 指数 |
| 等到第若干次 Poisson 事件的时间 | Gamma |
| 比例、概率参数 | Beta |
| 许多小扰动相加、测量误差 | 正态 |

选出候选模型后仍要核对支持集、独立性和参数化，不能只凭关键词套公式。
