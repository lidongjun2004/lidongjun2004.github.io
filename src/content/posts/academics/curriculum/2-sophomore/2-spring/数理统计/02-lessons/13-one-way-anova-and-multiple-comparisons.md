---
title: "第 13 讲：单因子方差分析、多重比较与方差齐性"
description: "从平方和分解推导 ANOVA 的 F 检验，并理解多重比较、Hartley 与 Bartlett 检验。"
date: 2026-08-27
---

有三组以上均值要比较时，不能对每两组反复做 $t$ 检验：比较次数越多，至少错拒一次的概率越高。方差分析先用一个总体检验回答“是否至少有一组不同”。

## 统计模型

有 $r$ 个水平，每个水平重复 $m$ 次：

$$
X_{ij}=\mu+\alpha_i+\varepsilon_{ij},
\quad i=1,\ldots,r,\ j=1,\ldots,m,
$$

$$
\varepsilon_{ij}\overset{\text{i.i.d.}}\sim N(0,\sigma^2),
\qquad \sum_{i=1}^r\alpha_i=0.
$$

检验

$$
H_0:\alpha_1=\cdots=\alpha_r=0
$$

对备择“至少一个 $\alpha_i\ne0$”。

## 平方和分解

记组均值 $\bar X_{i\cdot}$、总均值 $\bar X_{\cdot\cdot}$。对每个观测，

$$
X_{ij}-\bar X_{\cdot\cdot}
=(\bar X_{i\cdot}-\bar X_{\cdot\cdot})
+(X_{ij}-\bar X_{i\cdot}).
$$

平方求和后交叉项为零，得到

$$
SS_T=SS_A+SS_E,
$$

其中

$$
SS_A=m\sum_{i=1}^r
(\bar X_{i\cdot}-\bar X_{\cdot\cdot})^2,
$$

$$
SS_E=\sum_{i=1}^r\sum_{j=1}^m
(X_{ij}-\bar X_{i\cdot})^2.
$$

自由度也相加：

$$
rm-1=(r-1)+r(m-1).
$$

## F 检验

$$
MS_A=\frac{SS_A}{r-1},\qquad
MS_E=\frac{SS_E}{r(m-1)}.
$$

在 $H_0$ 下二者都估计 $\sigma^2$，且

$$
F=\frac{MS_A}{MS_E}\sim F(r-1,r(m-1)).
$$

若组间波动相对组内噪声过大，就拒绝 $H_0$。

重复次数不相等时，$SS_A$ 改为 $\sum_i n_i(\bar X_{i\cdot}-\bar X_{\cdot\cdot})^2$，误差自由度为 $N-r$，思想不变。

## 多重比较

ANOVA 显著后才回答“哪些组不同”。课件涉及均值的多重比较，核心是把同时比较带来的家族错误率纳入临界值。常见方法包括 Bonferroni、Tukey 与最小显著差异法；不同方法的保守程度和适用设计不同。

不应在总体检验不显著后仍随意挑某一对宣称显著，也不应只报告显著的比较而隐藏全部比较数。

## 方差齐性

ANOVA 假设各组共享同一方差。课件给出两种检验：

- Hartley 检验在各组样本量相等时使用

$$
H=\frac{\max_i S_i^2}{\min_i S_i^2}.
$$

它比较最极端的两组方差，统计量显然至少为 1。

- Bartlett 检验把合并方差与各组方差的对数差异组合起来，在正态前提下近似服从 $\chi^2(r-1)$。

Bartlett 对非正态很敏感。画残差图、检查异常值和方差随均值变化同样重要。

## ANOVA 的三个前提

1. 各观测独立；
2. 各组误差近似正态；
3. 各组方差相等。

这些都是误差项的前提，不要求所有组混在一起呈同一个正态分布。
