---
title: "第 5 讲：UMVUE、Rao–Blackwell 与 Cramér–Rao 下界"
description: "理解如何利用充分完备统计量改进无偏估计，以及信息量怎样限制估计方差。"
date: 2026-08-27
---

UMVUE 是“对每个参数值，都在所有无偏估计中方差最小”的估计量。直接把所有无偏估计列出来比较几乎不可能，课程里用两条路线解决：条件期望改进与方差下界。

## Rao–Blackwell：把无关波动平均掉

若 $U$ 是 $g(\theta)$ 的无偏估计，$T$ 是充分统计量，则

$$
U^*=E(U\mid T)
$$

仍然无偏，并且

$$
\operatorname{Var}(U^*)\le\operatorname{Var}(U).
$$

原因来自全方差公式：

$$
\operatorname{Var}(U)=
\operatorname{Var}(E[U\mid T])+E[\operatorname{Var}(U\mid T)].
$$

条件到 $T$ 上，相当于保留参数信息、平均掉样本中与参数无关的随机起伏。

## Lehmann–Scheffé：完备性保证它就是唯一答案

若 $T$ 同时充分且完备，那么任何仅由 $T$ 构成的无偏估计 $h(T)$ 都是 $g(\theta)$ 的唯一 UMVUE。

典型步骤：

1. 用因子分解定理找到充分统计量 $T$；
2. 证明或调用 $T$ 的完备性；
3. 构造 $h(T)$，使 $E[h(T)]=g(\theta)$；
4. 直接由定理宣布它是 UMVUE。

例如指数尺度模型中 $T=\sum X_i\sim\Gamma(n,\text{scale}=\theta)$ 是完备充分统计量，而 $T/n=\bar X$ 对 $\theta$ 无偏，所以 $\bar X$ 是 $\theta$ 的 UMVUE。

## Cramér–Rao 下界

在正则条件下，任何 $g(\theta)$ 的无偏估计 $U$ 满足

$$
\operatorname{Var}_\theta(U)
\ge \frac{[g'(\theta)]^2}{I_n(\theta)},
\qquad I_n(\theta)=nI_1(\theta).
$$

它说明数据包含的 Fisher 信息越大，允许的估计方差下界越小。若某无偏估计达到这个下界，它就是有效估计，也必为 UMVUE。

## 等号什么时候成立

下界推导使用 Cauchy–Schwarz 不等式。等号成立需要估计误差与得分函数线性相关：

$$
U-g(\theta)=a(\theta)
\frac{\partial}{\partial\theta}\log L(\theta;X).
$$

这个条件也能用来判断“下界虽然算出来了，但有没有估计量能达到”。

## 正则条件不能省略

通常需要支持集不依赖参数，并允许把微分移入积分号。$U(0,\theta)$ 的支持集依赖 $\theta$，直接套普通 Cramér–Rao 公式会得出错误结论。

## 三个概念怎样分工

- 充分性：是否保留了样本中关于参数的全部信息；
- 完备性：是否能排除多个不同的无偏函数；
- Fisher 信息：这份样本理论上能把参数估到多精确。

题目问“求 UMVUE”时，先找完备充分统计量通常比先算 Cramér–Rao 下界稳；题目问“验证有效性”时，下界更直接。
