---
title: "第二讲 · 不等式、PAC 学习与 VC 维"
description: "以 Markov、Chebyshev、Hoeffding、Cauchy-Schwarz 和 Jensen 不等式为基础，建立 PAC 学习、样本复杂度、打散与 VC 维的完整逻辑"
date: 2026-08-23
tags: ["AI"]
---

训练集上的错误率很低，能不能说明模型遇到新数据时也可靠？如果暂时不能，我们还需要多少样本，才能以足够大的把握相信它？

统计学习理论研究的正是这条从**有限样本**到**未知总体**的桥梁。我在这一讲先准备几件概率论工具，再沿着

$$
\text{概率不等式}
\longrightarrow
\text{PAC 保证}
\longrightarrow
\text{有限假设空间的样本复杂度}
\longrightarrow
\text{VC 维}
$$

逐步回答“什么叫学会了”和“需要多少数据”。

## 一、为什么先学概率不等式

设随机变量 $X$ 表示某个不确定量，例如一次预测的损失。完整地求出 $X$ 的分布当然最好，但现实中往往只知道期望、方差，或者知道它被限制在某个区间内。

概率不等式允许我们在信息不完整时仍然给出保证：

> 即使不知道分布的每个细节，也能限制“随机变量偏得太远”的概率。

这与机器学习高度契合。经验错误率是随机抽样得到的，真实错误率不可直接观察；要论证二者接近，就必须控制抽样带来的偏差。

### 选择工具时先看已知条件

| 已知条件 | 常用不等式 | 能控制什么 |
|---|---|---|
| $X\ge 0$，已知 $\mathbb E[X]$ | Markov | $X$ 取很大值的概率 |
| 已知均值和方差 | Chebyshev | $X$ 偏离均值的概率 |
| 多个独立且有界的随机变量 | Hoeffding | 样本均值偏离总体均值的概率 |
| 两个二阶矩有限的随机变量 | Cauchy-Schwarz | 乘积期望、协方差和相关系数 |
| 凸函数或凹函数 | Jensen | “先算函数再平均”与“先平均再算函数”的关系 |

条件越强，通常可以得到越紧的界。不能只背公式，还要确认随机变量是否非负、是否独立、是否有界。

## 二、Markov 不等式

若 $X$ 是非负随机变量且 $\mathbb E[X]$ 存在，那么对任意 $t>0$，

$$
\Pr(X>t)\le \frac{\mathbb E[X]}{t}.
$$

它的直觉非常朴素：若 $X$ 经常远大于 $t$，平均值就不可能仍然很小。

### 一个不依赖具体分布的证明

连续型随机变量可以写成

$$
\begin{aligned}
\mathbb E[X]
&=\int_0^t xf(x)\,\mathrm dx+\int_t^\infty xf(x)\,\mathrm dx\\
&\ge \int_t^\infty xf(x)\,\mathrm dx\\
&\ge t\int_t^\infty f(x)\,\mathrm dx\\
&=t\Pr(X>t).
\end{aligned}
$$

移项便得到 Markov 不等式。证明只用了非负性；也正因为条件很少，它给出的界往往比较松。

### 直觉算例

若某个非负损失的期望为 $2$，那么

$$
\Pr(X>10)\le \frac{2}{10}=0.2.
$$

这不代表实际概率等于 $0.2$，只表示在现有信息下，它不可能超过这个上界。

## 三、Chebyshev 不等式

设

$$
\mu=\mathbb E[X],\qquad \sigma^2=\operatorname{Var}(X).
$$

对任意 $t>0$，Chebyshev 不等式给出

$$
\Pr(|X-\mu|\ge t)\le \frac{\sigma^2}{t^2}.
$$

令标准化变量 $Z=(X-\mu)/\sigma$，并取 $t=k\sigma$，可得更容易记忆的形式：

$$
\Pr(|Z|\ge k)
=\Pr(|X-\mu|\ge k\sigma)
\le \frac{1}{k^2}.
$$

因此，不论 $X$ 服从什么分布，落在均值两个标准差之外的概率都不超过 $1/4$，落在三个标准差之外的概率都不超过 $1/9$。这个结论对分布形状没有要求，所以会比知道具体分布时得到的界松。

### 它其实是 Markov 的直接应用

因为 $(X-\mu)^2$ 非负，对它使用 Markov 不等式：

$$
\begin{aligned}
\Pr(|X-\mu|\ge t)
&=\Pr\bigl((X-\mu)^2\ge t^2\bigr)\\
&\le \frac{\mathbb E[(X-\mu)^2]}{t^2}\\
&=\frac{\sigma^2}{t^2}.
\end{aligned}
$$

这展示了一个常见技巧：想控制某个事件时，先构造一个合适的非负随机变量，再调用 Markov。

### 预测错误率算例

在 $n$ 个独立测试样本上测试分类器。令

$$
X_i=
\begin{cases}
1,&\text{第 }i\text{ 个样本预测错误},\\
0,&\text{预测正确},
\end{cases}
$$

且真实错误率为 $p$。那么 $X_i\sim\operatorname{Bernoulli}(p)$，观察到的测试错误率为

$$
\bar X_n=\frac{1}{n}\sum_{i=1}^nX_i,
$$

并且

$$
\operatorname{Var}(\bar X_n)=\frac{p(1-p)}{n}\le \frac{1}{4n}.
$$

因此

$$
\Pr(|\bar X_n-p|\ge\varepsilon)
\le \frac{1}{4n\varepsilon^2}.
$$

当 $n=100$、$\varepsilon=0.2$ 时，上界为

$$
\frac{1}{4\times100\times0.2^2}=0.0625.
$$

这个例子已经在连接样本错误率与真实错误率，但独立且有界这个额外条件还能带来更紧的结果。

## 四、Hoeffding 不等式

设 $Y_1,\ldots,Y_n$ 相互独立，$\mathbb E[Y_i]=0$，且

$$
a_i\le Y_i\le b_i.
$$

对任意 $t>0$，课件从指数型 Markov 界出发：

$$
\Pr\left(\sum_{i=1}^nY_i\ge\varepsilon\right)
\le
e^{-t\varepsilon}
\prod_{i=1}^n
e^{t^2(b_i-a_i)^2/8}.
$$

对 $t$ 取最优值，可以得到常见的一侧 Hoeffding 界：

$$
\Pr\left(\sum_{i=1}^nY_i\ge\varepsilon\right)
\le
\exp\left(
-\frac{2\varepsilon^2}{\sum_{i=1}^n(b_i-a_i)^2}
\right).
$$

证明思路可以压缩成四步：

1. 对 $e^{t\sum_iY_i}$ 使用 Markov 不等式；
2. 利用独立性，把联合期望拆成 $\prod_i\mathbb E[e^{tY_i}]$；
3. 利用指数函数的凸性和 $Y_i$ 的区间限制，控制每个矩母函数；
4. 选择让上界最小的 $t$。

对独立 Bernoulli 变量，样本均值满足双侧界

$$
\Pr(|\bar X_n-p|>\varepsilon)
\le 2e^{-2n\varepsilon^2}.
$$

仍取 $n=100$、$\varepsilon=0.2$：

$$
2e^{-2\times100\times0.2^2}
=2e^{-8}
\approx0.00067.
$$

与 Chebyshev 的 $0.0625$ 相比，它小了近两个数量级。代价是我们使用了更强的“独立且有界”假设。

## 五、Cauchy-Schwarz 与 Jensen

这两条不等式不直接给尾概率，却会反复出现在概率推导、损失函数和优化中。

### Cauchy-Schwarz 不等式

若 $X,Y$ 的二阶矩有限，则

$$
|\mathbb E[XY]|
\le
\sqrt{\mathbb E[X^2]\mathbb E[Y^2]}.
$$

把 $X,Y$ 换成各自的中心化变量，立即得到

$$
|\operatorname{Cov}(X,Y)|
\le \sigma_X\sigma_Y.
$$

所以相关系数

$$
\rho=
\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}
$$

一定满足

$$
-1\le\rho\le1.
$$

### 凸函数与 Jensen 不等式

若对任意 $x,y$ 和 $0<\lambda<1$，函数 $g$ 满足

$$
g(\lambda x+(1-\lambda)y)
\le
\lambda g(x)+(1-\lambda)g(y),
$$

则 $g$ 是凸函数。几何上，连接曲线上两点的弦位于曲线之上；若函数可微，任一点的切线位于曲线下方。

Jensen 不等式说：若 $g$ 为凸函数，则

$$
\mathbb E[g(X)]\ge g(\mathbb E[X]);
$$

若 $g$ 为凹函数，不等号反向。

课件给出的几个立即可用的例子是

$$
\mathbb E[X^2]\ge(\mathbb E[X])^2,
$$

$$
\mathbb E\left[\frac{1}{X}\right]
\ge\frac{1}{\mathbb E[X]},
\qquad X>0,
$$

以及因为 $\log x$ 为凹函数，

$$
\mathbb E[\log X]
\le\log\mathbb E[X].
$$

最后一条在最大似然、变分推断和 EM 中都会再次出现。

## 六、从经验错误到真实错误

现在进入 PAC 框架。设

- $X$ 是实例空间；
- $c:X\to\{0,1\}$ 是未知目标概念；
- $H$ 是学习器可以选择的假设空间；
- $S=\{x_1,\ldots,x_m\}$ 是从分布 $D$ 独立抽取的训练集。

假设 $h$ 在训练集上的经验错误为

$$
\operatorname{error}_S(h)
=\frac{1}{m}
\sum_{x\in S}
\mathbf 1[c(x)\ne h(x)],
$$

真实错误为

$$
\operatorname{error}_D(h)
=\Pr_{x\sim D}[c(x)\ne h(x)].
$$

二者最关键的差别是：$\operatorname{error}_S(h)$ 可以计算，$\operatorname{error}_D(h)$ 通常不可直接观察。更微妙的是，$h$ 本身也是根据训练集选出来的，不能把它当作一个与训练集无关的固定对象。

## 七、PAC 到底保证了什么

PAC 是 Probably Approximately Correct，即“以高概率近似正确”。它用两个参数放松“永远完全正确”这个不现实的目标：

- **近似正确**：真实错误不超过 $\varepsilon$；
- **很可能**：学习失败的概率不超过 $\delta$。

因此希望学习器输出的 $h$ 满足

$$
\Pr\bigl(\operatorname{error}_D(h)\le\varepsilon\bigr)
\ge1-\delta.
$$

其中概率来自训练集的随机抽取，而不是在说同一个 $h$ 会随机变对或变错。

形式化地说，若对任意目标概念 $c\in C$、任意数据分布 $D$，以及合适的 $\varepsilon,\delta$，学习器都能以至少 $1-\delta$ 的概率输出真实错误不超过 $\varepsilon$ 的假设，并且运行时间关于 $1/\varepsilon$、$1/\delta$、实例描述长度与目标概念编码长度都是多项式的，就称概念类 $C$ 是 PAC 可学习的。

## 八、有限假设空间需要多少样本

先考虑有限的 $H$，并假设学习器是**一致学习器**：只要可能，它就输出一个能把全部训练样本分对的假设。

把所有与训练集一致的假设组成版本空间

$$
\operatorname{VS}_{H,S}
=\{h\in H:\operatorname{error}_S(h)=0\}.
$$

若版本空间中的每个假设都满足 $\operatorname{error}_D(h)<\varepsilon$，就称版本空间被 $\varepsilon$-耗尽。

### 核心推导

考虑一个真实错误至少为 $\varepsilon$ 的坏假设 $h$。一条随机样本恰好没揭穿它的概率至多为 $1-\varepsilon$，连续 $m$ 条独立样本都没揭穿它的概率至多为

$$
(1-\varepsilon)^m\le e^{-\varepsilon m}.
$$

假设空间里至多有 $|H|$ 个坏假设。用并集界控制“至少一个坏假设幸存”：

$$
\Pr(\operatorname{VS}_{H,S}\text{ 未被 }\varepsilon\text{-耗尽})
\le |H|e^{-\varepsilon m}.
$$

要求这个失败概率不超过 $\delta$，解得

$$
m\ge
\frac{1}{\varepsilon}
\left(
\ln|H|+\ln\frac{1}{\delta}
\right).
$$

这条式子的含义很清楚：要求误差更小，样本数大致按 $1/\varepsilon$ 增长；要求把握更高，只需按 $\ln(1/\delta)$ 增长；假设空间即使很大，也只通过 $\ln|H|$ 进入。

### 布尔合取式算例

设有 $n$ 个布尔变量，每个变量在合取式中可以取三种状态：使用 $x_i$、使用 $\neg x_i$，或者忽略它。因此

$$
|H|=3^n.
$$

样本复杂度变为

$$
m\ge
\frac{1}{\varepsilon}
\left(
n\ln3+\ln\frac{1}{\delta}
\right).
$$

取 $n=10$、$\varepsilon=0.1$、$\delta=0.05$：

$$
m\ge
\frac{10\ln3+\ln20}{0.1}
\approx139.82.
$$

样本数必须取整数，所以至少需要 $140$ 条。课件进一步指出，FIND-S 可以逐个处理正样本，对每个样本只保留当前假设与样本共有的文字，每次处理的时间关于 $n$ 是线性的。因此这里不仅样本数是多项式的，计算也可在多项式时间内完成。

但这个漂亮结论建立在纯合取式和无噪声训练数据上。真实概念不一定属于这个假设类，标注也不一定完全可靠；样本界不能脱离假设使用。

有限空间定理本身也有两个局限：它要求 $H$ 有限，而且 $|H|e^{-\varepsilon m}$ 只是上界；样本太少或 $H$ 太大时，上界甚至可能超过 $1$，这时只能使用概率不超过 $1$ 的平凡结论，并不能说明失败概率真的很大。

## 九、无限假设空间为什么需要 VC 维

若 $H$ 无限，$\ln|H|$ 已经不能使用。关键不是机械地数假设，而是问：**这些假设在有限数据上究竟能实现多少种不同标记？**

### 增长函数

对大小为 $m$ 的示例集

$$
S=\{x_1,\ldots,x_m\},
$$

一个假设在 $S$ 上的标记结果可写成

$$
h|_S=(h(x_1),\ldots,h(x_m)).
$$

增长函数 $\Pi_H(m)$ 是 $H$ 在任意 $m$ 个点上能够实现的最大不同标记数。二分类的标记总数至多为 $2^m$，所以

$$
\Pi_H(m)\le2^m.
$$

增长函数越大，假设空间在有限数据上的表达能力越强。

### 打散

若存在一个大小为 $m$ 的固定点集，使 $H$ 能实现它的全部 $2^m$ 种二分标记，就称 $H$ **打散**了这个点集。

这里有两个容易混淆的量词：

- 只需**存在一组**大小为 $m$ 的点能被打散；
- 但对这组固定点，必须实现**所有**二分标记。

### VC 维

假设空间 $H$ 的 VC 维，是它能打散的最大有限点集大小：

$$
\operatorname{VC}(H)
=\max\{|S|:H\text{ 能打散 }S\}.
$$

若任意大的有限点集都能被打散，则 $\operatorname{VC}(H)=\infty$。

几个课件中的典型结论是：

- 实数轴上的开区间假设空间 VC 维为 $2$；
- 二维平面中的直线分类器 VC 维为 $3$；
- $n$ 维空间中的线性决策面 VC 维为 $n+1$。

以二维直线为例，存在一组不共线的三个点，可以对它们的八种标记分别找到一条直线；但某些四点标记无法由一条直线分开，所以 VC 维为 $3$。

VC 维描述的是模型与假设空间本身的容量。它不由某个具体学习算法、某批数据的实际分布或某个目标函数单独决定；这些因素会影响最终学到什么，但不会改变给定假设空间能否打散某个点集。

## 十、VC 维、样本复杂度与过拟合

课件给出一条由 VC 维控制版本空间的充分样本界：

$$
m\ge
\frac{1}{\varepsilon}
\left(
4\log_2\frac{2}{\delta}
+8\operatorname{VC}(H)
\log_2\frac{13}{\varepsilon}
\right).
$$

常数和具体形式可以随定理版本变化，但结构不会变：

$$
\text{所需样本数}
\quad\text{随}\quad
\frac{1}{\varepsilon},\ \log\frac{1}{\delta},\ \operatorname{VC}(H)
\quad\text{增长}
$$

这也解释了过拟合。把模型做得越来越复杂，经验风险 $R_{\mathrm{emp}}$ 确实可以一路下降，甚至到零；但假设空间的容量和 VC 维也随之增加，有限训练集对真实风险 $R$ 的约束会变弱。

所以正确目标不是“训练误差越小越好”，而是平衡两部分：

1. 模型必须足够丰富，避免欠拟合；
2. 模型不能相对样本数过于复杂，否则训练误差不足以代表真实误差。

课件还列出一类由 $s$ 个、每个有 $r$ 个输入的感知器组成的有向无环网络，其容量上界可写为

$$
\operatorname{VC}(H)
\le2(r+1)s\log(es).
$$

由此可以代入样本复杂度公式。不过课件同时强调，这个结果不能直接套用到使用 sigmoid 单元并通过反向传播训练的网络：模型单元和训练过程都已经改变。

课件还把 **Mistake Bound Model** 列为计算学习理论的另一条问题线：它不再先问“多少随机样本足够”，而是问在线学习器在成功前最多会犯多少次错误。这组课件只列出这一方向，没有继续展开具体界和算法。

## 十一、把整条逻辑串起来

前面的各部分不是五条孤立公式和两个定义，而是一条完整推理链：

1. 经验错误率是随机变量，需要控制它偏离真实错误率的概率；
2. Markov、Chebyshev、Hoeffding 提供不同条件下的概率界；
3. PAC 用 $\varepsilon$ 描述“多准确”，用 $\delta$ 描述“多有把握”；
4. 有限 $H$ 可以通过“坏假设是否被样本排除”得到样本复杂度；
5. 无限 $H$ 改用增长函数、打散与 VC 维描述有效容量；
6. 容量越大，能拟合的标记越多，但要支撑泛化也需要更多数据。

最后做一个量纲式自检：若要求更小的 $\varepsilon$、更小的 $\delta$，或允许更大的 VC 维，样本下界都不应下降。任何推导若违反这三个方向，通常都在取对数、移项或理解概率对象时出了问题。
