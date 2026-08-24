---
title: "第二十六讲 · 激活函数与权重初始化"
description: "解释 Sigmoid、Tanh、ReLU 系列与 GELU 的梯度性质，并从方差传播理解 Xavier、Kaiming 和正交初始化"
date: 2026-08-23
tags: ["机器学习", "AI"]
---

深层网络把“线性变换—非线性激活”重复很多次。如果每层把信号缩小一点，几十层后激活和梯度会消失；如果每层放大一点，则会爆炸。激活函数和初始化看似是两个超参数，实质上都在控制信号分布如何跨层传播。

## 一、为什么一定要有非线性

若所有层只有线性变换，任意深度都能合并成一层：

$$
W_2(W_1x+b_1)+b_2
=\widetilde Wx+\widetilde b.
$$

激活函数 $h=\phi(z)$ 让网络能够表达弯曲的决策边界。选择激活时主要看：

- 是否容易在常见输入范围内饱和；
- 导数是否让梯度顺利通过；
- 输出是否以零为中心；
- 计算是否便宜；
- 是否存在永久不再更新的区域。

## 二、Sigmoid 与 Tanh

### Sigmoid

$$
\sigma(x)=\frac1{1+e^{-x}},
\qquad
\sigma'(x)=\sigma(x)(1-\sigma(x)).
$$

它把输出压到 $(0,1)$，适合表示概率或 LSTM 门控中的“通过比例”。但当 $|x|$ 很大时，导数接近零，多层链式相乘会导致梯度消失。

Sigmoid 输出不以零为中心。若某层输入分量全为正，同一个神经元的权重梯度往往同时同号，更新只能在有限象限间曲折前进。输入标准化能缓解这个问题，却不能消除饱和。

### Tanh

$$
\tanh x=\frac{e^x-e^{-x}}{e^x+e^{-x}},
\qquad
\frac{d}{dx}\tanh x=1-\tanh^2x.
$$

Tanh 输出位于 $(-1,1)$ 且以零为中心，比 Sigmoid 更适合表示有符号状态；LSTM 的候选记忆就常使用 Tanh。但大幅输入下仍会饱和，不能根治梯度消失。

## 三、ReLU 家族

### ReLU

$$
\operatorname{ReLU}(x)=\max(0,x).
$$

正半轴导数为 $1$，计算只需比较，因而成为深度视觉网络的经典选择。负半轴导数为 $0$，会带来 dead ReLU：如果一个神经元对所有训练样本都落在负区间，它的输入权重再也收不到梯度。

在 $x=0$ 处数学上不可微，框架通常选一个次梯度约定，例如 $0$。这不会妨碍几乎处处可微的训练。

课件建议把 ReLU 偏置初始化成轻微正数，例如 $0.01$，以减少一开始就死亡的神经元。它是历史经验技巧，不是普遍必需；现代网络常配合规范初始化和归一化使用零偏置，正偏置也可能让过多单元同时激活。

### Leaky ReLU 与 PReLU

$$
\operatorname{LeakyReLU}(x)
=\begin{cases}
x,&x\ge0,\\
\alpha x,&x<0,
\end{cases}
$$

其中 $\alpha$ 是一个小正数。负半轴保留非零梯度，神经元不容易永久死亡。PReLU 进一步把 $\alpha$ 设为可学习参数，让反向传播决定负半轴斜率。

### ELU

$$
\operatorname{ELU}(x)
=\begin{cases}
x,&x\ge0,\\
\alpha(e^x-1),&x<0.
\end{cases}
$$

负区间平滑并趋近 $-\alpha$，输出均值可比 ReLU 更接近零；代价是指数运算更贵，而且输入很负时会趋于饱和。

### GELU

GELU 不做硬门控，而是按输入大小平滑缩放：

$$
\operatorname{GELU}(x)=x\Phi(x),
$$

$\Phi$ 是标准正态分布的累积分布函数。常见近似为

$$
\operatorname{GELU}(x)
\approx\frac{x}{2}
\left[1+\tanh\left(
\sqrt{\frac2\pi}
(x+0.044715x^3)
\right)\right].
$$

它允许小负值平滑通过，广泛用于 Transformer。GELU 不是 ReLU 的逐点“概率版随机采样”，推理时仍是确定函数。

## 四、激活函数对比

| 激活 | 输出范围 | 主要优点 | 主要风险 |
|---|---|---|---|
| Sigmoid | $(0,1)$ | 概率与门控含义清楚 | 两侧饱和，不以零为中心 |
| Tanh | $(-1,1)$ | 以零为中心、有符号 | 两侧饱和 |
| ReLU | $[0,\infty)$ | 正区间不饱和、便宜 | 负区间零梯度、可能死亡 |
| Leaky ReLU | $\mathbb R$ | 负区间仍有梯度 | 斜率需选择 |
| PReLU | $\mathbb R$ | 负斜率可学习 | 增加参数，需约束与验证 |
| ELU | $(-\alpha,\infty)$ | 平滑、均值更接近零 | 指数计算、负侧饱和 |
| GELU | $\mathbb R$ | 平滑门控，适合 Transformer | 计算比 ReLU 复杂 |

“某激活收敛快若干倍”只能对应特定数据、架构和训练配方。课件引用的图像实验用于说明 ReLU 的历史突破，不能当作跨任务固定倍数。

## 五、初始化的目标：让方差跨层稳定

考虑一层线性变换

$$
z_k=\sum_{j=1}^{d_{\mathrm{in}}}W_{kj}h_j.
$$

若权重独立、均值为零，并忽略交叉项，则

$$
\operatorname{Var}(z_k)
\approx
d_{\mathrm{in}}
\operatorname{Var}(W_{kj})
\operatorname{Var}(h_j).
$$

若想让前向方差不随层数系统放大或缩小，应让

$$
d_{\mathrm{in}}\operatorname{Var}(W)\approx1.
$$

反向传播还受到输出连接数 $d_{\mathrm{out}}$ 影响，因此初始化需要在前向稳定与反向稳定之间权衡。

## 六、LeCun、Xavier 与 Kaiming 初始化

记

$$
\operatorname{fan\_in}=d_{\mathrm{in}},
\qquad
\operatorname{fan\_out}=d_{\mathrm{out}}.
$$

### LeCun 初始化

对近似线性的激活，前向方差条件给出

$$
\operatorname{Var}(W)=\frac1{\operatorname{fan\_in}}.
$$

正态版本可取

$$
W_{ij}\sim\mathcal N
\left(0,\frac1{\operatorname{fan\_in}}\right).
$$

### Xavier 初始化

Xavier/Glorot 在前向 fan-in 与反向 fan-out 之间折中：

$$
\operatorname{Var}(W)
=\frac{2}{\operatorname{fan\_in}+\operatorname{fan\_out}}.
$$

相应均匀分布常写为

$$
W_{ij}\sim U
\left[-\sqrt{\frac6{\operatorname{fan\_in}+\operatorname{fan\_out}}},
\sqrt{\frac6{\operatorname{fan\_in}+\operatorname{fan\_out}}}\right].
$$

它适合 Tanh 或近似线性的激活。课件先分别得到前向稳定所需的 $1/\operatorname{fan\_in}$ 和反向稳定所需的 $1/\operatorname{fan\_out}$，再用上式的 $2/(\operatorname{fan\_in}+\operatorname{fan\_out})$ 折中。

### Kaiming 初始化

若 $z$ 关于零近似对称，ReLU 会把约一半负值置零，使二阶矩约减半。为补偿这一步，Kaiming/He 初始化取

$$
\operatorname{Var}(W)
=\frac{2}{\operatorname{fan\_in}}.
$$

正态版本为

$$
W_{ij}\sim\mathcal N
\left(0,\frac2{\operatorname{fan\_in}}\right).
$$

对 Leaky ReLU，负斜率为 $a$ 时可进一步使用增益

$$
\operatorname{gain}=\sqrt{\frac2{1+a^2}}.
$$

初始化要与激活配套：不能只记“Xavier 好”或“Kaiming 好”。

## 七、一个方差算例

假设一层有 $100$ 个独立输入，每个输入均值 $0$、方差 $1$。

- 若权重方差取 $1$，输出方差约为 $100$，层层相乘会爆炸；
- 若取 LeCun 方差 $1/100$，线性输出方差约保持为 $1$；
- 若后接 ReLU，约一半信号被截断，取 Kaiming 方差 $2/100$ 才能补回二阶矩。

这只是理想化推导：真实激活不完全独立，均值也可能不为零，残差连接和归一化都会改变传播规律。但它解释了初始化公式中 fan-in 与系数 $2$ 的来源。

## 八、正交初始化

若方阵 $W$ 满足

$$
W^{\mathsf T}W=I,
$$

则

$$
\lVert Wx\rVert_2=\lVert x\rVert_2.
$$

在线性网络中，正交矩阵既能保持前向向量范数，也能保持反向梯度范数。矩形权重只能让行或列正交，不能同时在所有维度严格保范数；非线性激活也会改变这一性质，因此实际常再乘一个与激活匹配的 gain。

## 九、从预训练权重开始

除随机初始化外，还可以使用预训练模型：

1. 下载在大数据集上训练的权重；
2. 小数据集可冻结骨干，只重训末端分类头；
3. 中等规模数据可把预训练权重当初始化，微调高层或全网络。

微调时通常给新分类头更大的学习率，给预训练层更小的学习率，并根据数据量决定冻结范围。预训练不是“无需初始化”，而是用其他任务已经学到的参数作为更有信息的起点。

## 十、复习与常见误区

- Sigmoid 与 Tanh 都会饱和；Tanh 以零为中心不代表没有梯度消失。
- ReLU 的负半轴梯度为零，Leaky ReLU/PReLU 用非零斜率缓解死亡问题。
- 在 $x=0$ 不可微不妨碍框架选定次梯度并训练。
- Xavier 主要平衡 fan-in 与 fan-out，Kaiming 还补偿 ReLU 截断带来的方差损失。
- 方差公式描述的是随机初始化时的统计尺度，不保证每一层每一个样本都严格等方差。
- 正交初始化在线性层中保范数，接上非线性后不能直接宣称整个网络等距。
- 激活、初始化、归一化和残差结构共同决定信号传播，不能把其中一项孤立成万能解法。
