---
title: "第 4 讲：估计量的评价、均方误差与渐近性质"
description: "比较无偏性、方差、均方误差、相合性和渐近正态性，避免把不同标准混为一谈。"
date: 2026-08-27
---

同一个参数往往有很多估计量。“能算出来”只是第一步，还要问它在重复抽样中偏不偏、抖得大不大，以及样本增多后会不会靠近真值。

## 偏差与无偏性

估计量 $\hat\theta$ 的偏差为

$$
\operatorname{Bias}_\theta(\hat\theta)=E_\theta(\hat\theta)-\theta.
$$

对所有 $\theta$ 偏差为零才叫无偏。无偏是长期平均意义，不代表某一次估计就接近真值。

例如 $U(0,\theta)$ 的最大值满足

$$
E[X_{(n)}]=\frac{n}{n+1}\theta,
$$

因此 MLE $X_{(n)}$ 有偏，但乘以 $(n+1)/n$ 后无偏。

## 均方误差统一了“偏”和“抖”

$$
\operatorname{MSE}(\hat\theta)
=E[(\hat\theta-\theta)^2]
=\operatorname{Var}(\hat\theta)+\operatorname{Bias}^2(\hat\theta).
$$

一个略有偏但方差显著更小的估计，MSE 可能优于无偏估计。因此“无偏一定最好”是错的。平方损失下，MSE 就是风险函数。

## 有效性只在可比范围内说

对两个无偏估计 $\hat\theta_1,\hat\theta_2$，若

$$
\operatorname{Var}(\hat\theta_1)\le
\operatorname{Var}(\hat\theta_2)
$$

对所有参数都成立，就说前者至少同样有效。若方差曲线在不同参数处交叉，则不能给出全局排名。

## 相合性看 $n\to\infty$

弱相合要求

$$
\hat\theta_n\xrightarrow{P}\theta,
$$

即任意 $\varepsilon>0$ 下，$P(|\hat\theta_n-\theta|>\varepsilon)\to0$。常用证明方法：先证偏差趋零、方差趋零，再用 Chebyshev 不等式。

相合不等于无偏。一个估计量在有限样本时可有偏，但偏差随 $n$ 消失，仍然相合。

## 渐近正态性给出大样本误差刻度

许多估计量满足

$$
\sqrt n(\hat\theta_n-\theta)\xrightarrow{d}N(0,V(\theta)).
$$

这告诉我们估计误差通常是 $1/\sqrt n$ 量级，也为大样本置信区间和 Wald 检验提供依据。

正则条件下，MLE 常满足

$$
\sqrt n(\hat\theta_{\text{MLE}}-\theta)
\xrightarrow{d}N\left(0,I_1(\theta)^{-1}\right),
$$

其中单个观测的 Fisher 信息

$$
I_1(\theta)=E_\theta\left[
\left(\frac{\partial}{\partial\theta}\log f(X;\theta)\right)^2
\right].
$$

但支持集依赖参数、边界参数或模型不可识别时，标准渐近结论可能失效，不能机械套用。

## 判断题里最常见的混淆

- 无偏是期望性质，相合是极限性质；
- 方差小不代表 MSE 小，除非偏差相同；
- MLE 不保证无偏，却常有相合和渐近有效性；
- 渐近正态是近似，不是有限样本下的精确分布；
- 样本量翻四倍，标准误通常才减半。
