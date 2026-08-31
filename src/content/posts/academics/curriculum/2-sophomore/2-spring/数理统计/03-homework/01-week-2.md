---
title: "第 1 次作业：样本、统计量与抽样分布"
description: "week2 作业原题整理：总体与样本、合并样本方差、样本均值和方差、次序统计量。"
date: 2026-08-27
tags: ["作业"]
---

题目按源文件 week2.pdf 的顺序转写。源文件包含我当时的手写作答与批改痕迹；下方解答保留我原来的思路，并把被批改指出的概念或计算问题改正。

## 题 1：盒装产品抽样

某厂大量生产某种产品，其不合格品率 $p$ 未知，每 $m$ 件产品包装为一盒。为了检查产品质量，任意抽取 $n$ 盒，查其中的不合格品数。说明什么是总体、什么是样本，并指出样本的分布。

<details class="exam-answer">
<summary>展开解答</summary>

把“一盒中不合格品的件数”记为 $X$。总体是随机变量 $X$ 的分布。若同一盒内每件产品独立且不合格概率均为 $p$，则

$$
X\sim\operatorname{Binomial}(m,p).
$$

抽出的 $n$ 盒对应样本 $X_1,\ldots,X_n$。在随机抽盒并近似独立的条件下，

$$
X_1,\ldots,X_n\overset{\text{i.i.d.}}\sim
\operatorname{Binomial}(m,p).
$$

联合概率质量函数为

$$
\prod_{i=1}^n
\binom m{x_i}p^{x_i}(1-p)^{m-x_i},
\qquad x_i=0,1,\ldots,m.
$$

</details>

## 题 2：标志重捕法估计鱼数

第一次从鱼塘中捕捞一网，共有 $n$ 条鱼，涂上不会被水冲掉的红漆后放回。一天后再次捕捞一网，共有 $m$ 条鱼，其中有红漆的鱼为 $k$ 条。估计鱼塘中大概有多少条鱼，并说明总体和样本。

<details class="exam-answer">
<summary>展开解答</summary>

设鱼塘中共有 $N$ 条鱼。总体是这 $N$ 条鱼在第二次捕捞时的“已标记/未标记”状态；第二次捕到的 $m$ 条鱼构成不放回样本，统计量 $K$ 是其中已标记鱼数。

若标记不影响存活和被捕概率、总体数量不变、标记鱼已充分混合，则

$$
K\sim\operatorname{Hypergeometric}(N,n,m),
\qquad E(K)=m\frac nN.
$$

以观察值 $k$ 替代期望，得到经典估计

$$
\boxed{\hat N=\frac{mn}{k}}.
$$

若 $k=0$，这个估计失效，只能说明样本太小或混合假设有问题。

</details>

## 题 3：电容器寿命

某厂生产的电容器寿命服从指数分布。为了了解其平均寿命，从中抽出 $n$ 件产品测其实寿命。说明什么是总体、什么是样本，并指出样本的分布。

<details class="exam-answer">
<summary>展开解答</summary>

总体是该型号电容器寿命随机变量 $X$ 的指数分布。若以率参数 $\lambda$ 表示，

$$
f(x;\lambda)=\lambda e^{-\lambda x}I(x>0).
$$

测得的 $n$ 个寿命 $X_1,\ldots,X_n$ 构成样本。在独立抽取且生产条件稳定时，

$$
X_1,\ldots,X_n\overset{\text{i.i.d.}}\sim
\operatorname{Exp}(\lambda),
$$

联合密度为

$$
\lambda^n e^{-\lambda\sum_i x_i}
\prod_{i=1}^n I(x_i>0).
$$

</details>

## 题 4：两批同总体样本合并

从同一总体先后抽取容量分别为 $n,m$ 的两个独立样本，样本均值为 $\bar X_1,\bar X_2$，样本方差为 $S_1^2,S_2^2$。证明合并后的均值和方差为

$$
\bar X=\frac{n\bar X_1+m\bar X_2}{n+m},
$$

$$
S^2=
\frac{(n-1)S_1^2+(m-1)S_2^2}{n+m-1}
+\frac{nm(\bar X_1-\bar X_2)^2}
{(n+m)(n+m-1)}.
$$

<details class="exam-answer">
<summary>展开解答</summary>

合并样本总和是两批样本和之和，故均值公式成立。对离差平方和使用组内—组间分解：

$$
(n+m-1)S^2
=(n-1)S_1^2+(m-1)S_2^2
+n(\bar X_1-\bar X)^2+m(\bar X_2-\bar X)^2.
$$

由合并均值，

$$
\bar X_1-\bar X=\frac{m}{n+m}(\bar X_1-\bar X_2),
$$

$$
\bar X_2-\bar X=-\frac{n}{n+m}(\bar X_1-\bar X_2).
$$

代入后，两个组间项之和为

$$
\frac{nm}{n+m}(\bar X_1-\bar X_2)^2.
$$

再除以 $n+m-1$ 即得题中公式。

</details>

## 题 5：样本均值与样本方差的协方差

设总体 $X$ 的三阶中心矩存在，

$$
\nu_3=E[X-E(X)]^3.
$$

证明

$$
\operatorname{Cov}(\bar X,S^2)=\frac{\nu_3}{n}.
$$

<details class="exam-answer">
<summary>展开解答</summary>

令 $Y_i=X_i-\mu$、$\bar Y=\bar X-\mu$。因 $E\bar Y=0$，

$$
\operatorname{Cov}(\bar X,S^2)=E(\bar YS^2).
$$

又

$$
S^2=\frac1{n-1}
\left(\sum_{i=1}^nY_i^2-n\bar Y^2\right).
$$

独立性与 $E(Y_i)=0$ 给出

$$
E\left(\bar Y\sum_iY_i^2\right)=\nu_3.
$$

同时 $E[(\sum_iY_i)^3]=n\nu_3$，所以

$$
E(\bar Y^3)=\frac{\nu_3}{n^2}.
$$

于是

$$
E(\bar YS^2)
=\frac1{n-1}\left(\nu_3-n\frac{\nu_3}{n^2}\right)
=\boxed{\frac{\nu_3}{n}}.
$$

若总体关于均值对称，则二者不相关；只有正态总体还能进一步推出独立。

</details>

## 题 6：两个样本均值之差

$\bar X_1,\bar X_2$ 是从同一正态总体 $N(\mu,\sigma^2)$ 独立抽取、容量均为 $n$ 的两个样本均值。确定最小样本容量 $n$，使两样本均值的差超过 $\sigma$ 的概率不超过 $0.01$。

<details class="exam-answer">
<summary>展开解答</summary>

$$
\bar X_1-\bar X_2\sim
N\left(0,\frac{2\sigma^2}{n}\right).
$$

因此

$$
P(|\bar X_1-\bar X_2|>\sigma)
=2\left[1-\Phi\left(\sqrt{\frac n2}\right)\right].
$$

要求该概率不超过 $0.01$，即

$$
\sqrt{\frac n2}\ge z_{0.995}\approx2.576.
$$

由此 $n\ge13.27$，所以

$$
\boxed{n_{\min}=14}.
$$

</details>

## 题 7：指数总体样本均值的近似分布

从指数总体 $\operatorname{Exp}(1/\theta)$ 抽取 $40$ 个样品，求 $\bar X$ 的渐近分布。

<details class="exam-answer">
<summary>展开解答</summary>

题中以率 $1/\theta$ 参数化，所以

$$
E(X)=\theta,\qquad \operatorname{Var}(X)=\theta^2.
$$

由中心极限定理，

$$
\frac{\sqrt{40}(\bar X-\theta)}{\theta}
\approx N(0,1),
$$

即

$$
\boxed{\bar X\approx N\left(\theta,\frac{\theta^2}{40}\right)}.
$$

</details>

## 题 8：Weibull 样本的最小值

设 $X_1,\ldots,X_n$ 来自 Weibull 总体，密度

$$
f(x)=\frac{m x^{m-1}}{\eta^m}
\exp\left[-\left(\frac{x}{\eta}\right)^m\right],
\qquad x>0.
$$

证明 $X_{(1)}$ 仍服从 Weibull 分布，并给出参数。

<details class="exam-answer">
<summary>展开解答</summary>

单个变量的生存函数为

$$
P(X>x)=\exp\left[-\left(\frac{x}{\eta}\right)^m\right].
$$

故

$$
P(X_{(1)}>x)
=\left[P(X>x)\right]^n
=\exp\left[-n\left(\frac{x}{\eta}\right)^m\right]
=\exp\left[-\left(
\frac{x}{\eta/n^{1/m}}\right)^m\right].
$$

因此

$$
\boxed{X_{(1)}\sim
\operatorname{Weibull}\left(m,\frac{\eta}{n^{1/m}}\right)}.
$$

</details>

## 题 9：几何总体的极值

设 $P(X=k)=pq^{k-1}$，$k=1,2,\ldots$，其中 $q=1-p$。$X_1,\ldots,X_n$ 为样本，求 $X_{(n)}$ 与 $X_{(1)}$ 的概率分布。

<details class="exam-answer">
<summary>展开解答</summary>

总体分布函数为 $P(X\le k)=1-q^k$，所以

$$
P(X_{(n)}\le k)=(1-q^k)^n,
$$

$$
\boxed{
P(X_{(n)}=k)
=(1-q^k)^n-(1-q^{k-1})^n
}.
$$

另一方面，

$$
P(X_{(1)}\ge k)=P(X\ge k)^n=q^{n(k-1)}.
$$

作相邻尾概率之差：

$$
\boxed{
P(X_{(1)}=k)
=(1-q^n)q^{n(k-1)}
}.
$$

最小值仍为从 1 开始的几何分布，成功概率为 $1-q^n$。

</details>
