---
title: "第 11 讲：其他分布的检验与似然比方法"
description: "处理比例、Poisson 参数和一般参数检验，并从约束最大似然理解似然比。"
date: 2026-08-27
---

没有现成 $z/t/\chi^2/F$ 枢轴量时，仍可以从似然出发。似然比检验统一了大量具体检验，也是课程中“从定义推导拒绝域”的主力。

## 比例检验

若 $X\sim\operatorname{Binomial}(n,p)$，检验 $H_0:p=p_0$。小样本可以直接用 Binomial 尾概率构造精确检验；大样本可用

$$
Z=\frac{\hat p-p_0}
{\sqrt{p_0(1-p_0)/n}}\approx N(0,1).
$$

检验标准误使用 $H_0$ 给定的 $p_0$，因为统计量的零假设分布要在 $H_0$ 下计算。

## Poisson 参数检验

若 $X_1,\ldots,X_n\sim\operatorname{Poisson}(\lambda)$，则

$$
T=\sum X_i\sim\operatorname{Poisson}(n\lambda).
$$

因此可以直接对 $T$ 做精确尾概率检验。大样本下也可利用 $\bar X$ 的正态近似。

## 广义似然比

设零假设参数空间为 $\Theta_0\subset\Theta$，

$$
\Lambda(x)=
\frac{\sup_{\theta\in\Theta_0}L(\theta;x)}
{\sup_{\theta\in\Theta}L(\theta;x)}.
$$

$0\le\Lambda\le1$。分母让参数自由选择，分子要求遵守 $H_0$；若两者相差很大，即 $\Lambda$ 很小，说明 $H_0$ 约束与数据冲突。

推导步骤：

1. 求不受约束的 MLE $\hat\theta$；
2. 在 $H_0$ 约束下求 MLE $\hat\theta_0$；
3. 计算 $\Lambda=L(\hat\theta_0)/L(\hat\theta)$；
4. 把“$\Lambda$ 小”化简为某个统计量落入尾部；
5. 由 $H_0$ 下分布选临界值。

## 例：正态方差的双侧检验

$X_i\sim N(\mu,\sigma^2)$，$\mu$ 未知，检验 $H_0:\sigma^2=\sigma_0^2$。不受约束的 MLE 为

$$
\hat\mu=\bar X,\qquad
\hat\sigma^2=\frac1n\sum(X_i-\bar X)^2.
$$

在 $H_0$ 下仍有 $\hat\mu_0=\bar X$。代入似然后，$\Lambda$ 只取决于离差平方和；小或大到异常都会让 $\Lambda$ 变小。最终可用

$$
\frac{(n-1)S^2}{\sigma_0^2}\sim\chi^2(n-1)
$$

给出双侧拒绝域。

## Wilks 渐近定理

正则条件下，若 $H_0$ 比完整模型少 $r$ 个自由参数，

$$
-2\log\Lambda\xrightarrow{d}\chi^2(r).
$$

这让复杂模型也能近似检验。但参数在边界、样本小、支持集依赖参数时，标准 $\chi^2$ 近似可能不成立。

## 似然比、Wald 与得分检验

三者大样本下常等价：

- 似然比比较约束与不约束模型拟合；
- Wald 看估计值离 $H_0$ 多远；
- 得分检验只在 $H_0$ 处看似然上升方向。

课程以似然比为主，答题时重点写清两个极大值分别在哪个参数空间求。
