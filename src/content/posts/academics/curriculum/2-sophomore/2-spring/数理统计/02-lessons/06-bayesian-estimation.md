---
title: "第 6 讲：Bayes 估计与共轭先验"
description: "从先验、似然和损失函数推导后验决策，并理解共轭先验只是计算工具。"
date: 2026-08-27
---

经典统计把参数看作固定但未知的常数；Bayes 方法把不确定性用参数的先验分布表示。样本到来后，用 Bayes 公式更新为后验，再按损失函数作决策。

## 后验分布

$$
\pi(\theta\mid x)
=\frac{L(\theta;x)\pi(\theta)}
{\int L(u;x)\pi(u)\,du}
\propto L(\theta;x)\pi(\theta).
$$

实际计算先认出“核”的分布族，最后再补归一化常数。

## Bayes 估计取决于损失函数

给定观测 $x$，选择动作 $a$ 的后验风险是

$$
\rho(a\mid x)=E[L(\theta,a)\mid x].
$$

最小化后验风险得到 Bayes 估计：

- 平方损失 $(a-\theta)^2$：后验均值；
- 绝对损失 $|a-\theta|$：后验中位数；
- $0$-$1$ 型损失：后验众数（MAP）。

所以“Bayes 估计等于后验均值”只有在平方损失下才成立。

## Beta–Binomial 例子

若 $X\mid p\sim\operatorname{Binomial}(n,p)$，先验 $p\sim\operatorname{Beta}(a,b)$，则

$$
\pi(p\mid x)\propto
p^{a+x-1}(1-p)^{b+n-x-1},
$$

即

$$
p\mid x\sim\operatorname{Beta}(a+x,b+n-x).
$$

平方损失下

$$
\hat p_B=\frac{a+x}{a+b+n}
=\frac{a+b}{a+b+n}\frac{a}{a+b}
+\frac{n}{a+b+n}\frac{x}{n}.
$$

它是“先验均值”和“样本比例”的加权平均。$a+b$ 可理解为先验的等效样本量，展示了 Bayes 估计的收缩效应。

## 逆 Gamma–指数尺度模型

若 $X_i\mid\theta$ 的密度为

$$
f(x;\theta)=\theta^{-1}e^{-x/\theta}I(x>0),
$$

先验取

$$
\pi(\theta)\propto
\theta^{-(\alpha+1)}e^{-\lambda/\theta},
$$

则

$$
\theta\mid x\sim
IG\left(\alpha+n,\lambda+\sum x_i\right).
$$

若形状参数大于 1，平方损失下的后验均值为

$$
\hat\theta_B=\frac{\lambda+\sum x_i}{\alpha+n-1}.
$$

这正是课程真题中的标准计算。

## 共轭与非信息先验

共轭先验让先验、后验属于同一分布族，方便手算和顺序更新，但它不是“客观正确”的先验。先验超参数仍要解释，并应考察结论对先验选择是否敏感。

不恰当先验可能不积分为 1；只有当后验仍可正规化时才可使用。考题通常会给定先验族，先把指数和幂次合并，再识别更新后的参数。
