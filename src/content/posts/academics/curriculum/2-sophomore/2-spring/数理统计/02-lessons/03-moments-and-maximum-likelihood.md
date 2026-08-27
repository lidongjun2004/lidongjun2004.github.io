---
title: "第 3 讲：矩估计与极大似然估计"
description: "用替换原理和似然原则构造点估计，并处理边界、支持集与不变性。"
date: 2026-08-27
---

点估计的任务是用样本算出一个数去猜未知参数。矩法关注“理论特征与样本特征匹配”，似然法关注“哪个参数最能解释已经发生的数据”。

## 矩估计的标准步骤

若有 $k$ 个未知参数，就选 $k$ 个总体矩方程

$$
E_\theta(X^j)=\mu_j(\theta_1,\ldots,\theta_k),
\quad j=1,\ldots,k,
$$

再以样本矩 $A_j=n^{-1}\sum X_i^j$ 替换总体矩并解方程。

例如 $U(a,b)$ 有

$$
E(X)=\frac{a+b}{2},\qquad
\operatorname{Var}(X)=\frac{(b-a)^2}{12}.
$$

用 $\bar X$ 和样本二阶中心矩 $S_n^2=n^{-1}\sum(X_i-\bar X)^2$ 替换，得到

$$
\hat a=\bar X-\sqrt{3}S_n,\qquad
\hat b=\bar X+\sqrt{3}S_n.
$$

矩估计通常容易算、对模型要求较低，但可能不唯一，也未必有效。

## 似然函数不是参数的概率

观察值 $x$ 固定后，

$$
L(\theta;x)=\prod_{i=1}^n f(x_i;\theta)
$$

被看作 $\theta$ 的函数。它比较不同参数对同一份数据的解释能力，不表示“参数取某值的概率”。

计算时通常取对数：

$$
\ell(\theta)=\log L(\theta)
=\sum_{i=1}^n\log f(x_i;\theta).
$$

乘积变求和，指数变线性，极值位置不变。

## 例：Poisson 参数

若 $X_i\sim\operatorname{Poisson}(\lambda)$，

$$
\ell(\lambda)=-n\lambda+\left(\sum x_i\right)\log\lambda-\sum\log(x_i!),
$$

令导数为零得 $\hat\lambda=\bar X$。二阶导数为负，确为最大值。

## 支持集含参数时要看边界

若 $X_i\sim U(0,\theta)$，则

$$
L(\theta)=\theta^{-n}I(\theta\ge X_{(n)}).
$$

在允许区域里它随 $\theta$ 递减，所以最大值在边界：

$$
\hat\theta_{\text{MLE}}=X_{(n)}.
$$

如果直接对 $-n\log\theta$ 求导，会找不到驻点；真正的信息藏在指示函数给出的约束里。

## 多参数与剖面似然

正态模型中同时未知 $\mu,\sigma^2$，先对 $\mu$ 求极值得 $\hat\mu=\bar X$，代回后再对 $\sigma^2$ 求极值：

$$
\hat\sigma^2_{\text{MLE}}=\frac1n\sum(X_i-\bar X)^2.
$$

注意 MLE 的分母是 $n$，它有偏；无偏样本方差分母才是 $n-1$。MLE 追求似然最大，不自动保证无偏。

## 不变性

若 $\hat\theta$ 是 $\theta$ 的 MLE，则在适当条件下，$g(\hat\theta)$ 是 $g(\theta)$ 的 MLE。比如指数率参数 $\lambda$ 的 MLE 为 $1/\bar X$，那么均值参数 $1/\lambda$ 的 MLE 就是 $\bar X$。

## 一套不漏项的检查

1. 写清参数空间和支持集；
2. 独立样本才可直接相乘；
3. 先取对数再求导；
4. 检查驻点、边界和不可导点；
5. 验证得到的是全局最大值；
6. 分清估计量（随机变量）与估计值（代入数据后的数）。
