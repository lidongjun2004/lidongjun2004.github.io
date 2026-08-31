---
title: "第二十七讲 · 从输入标准化到 BatchNorm、LayerNorm 与 GroupNorm"
description: "理解归一化为何稳定训练，比较 BatchNorm、LayerNorm、InstanceNorm 与 GroupNorm 的统计维度、训练推理差异和使用场景"
date: 2026-08-23
tags: ["AI"]
---

归一化不是把所有数“统一缩到 $0$ 到 $1$”这么简单。它真正关心的是：**在哪些元素上统计均值和方差，哪些维度分别保留，以及训练和推理是否使用同一套统计量**。

输入标准化改善数据尺度；网络内部的 BatchNorm、LayerNorm、InstanceNorm 和 GroupNorm 则选择不同元素集合来标准化激活。集合选错，模型语义也会变。

## 一、最基本的标准化

给定一组标量数据 $\{x_i\}_{i=1}^N$，标准化为

$$
\hat x_i=\frac{x_i-\mu}{\sqrt{\sigma^2+\varepsilon}},
$$

其中

$$
\mu=\frac1N\sum_i x_i,
\qquad
\sigma^2=\frac1N\sum_i(x_i-\mu)^2.
$$

减均值叫 centering，除尺度叫 scaling；二者合起来是 standardization。$\varepsilon$ 防止方差极小时除零。

“归一化”是更宽的总称，还包括把像素映射到固定范围、把向量除以范数、去相关和白化。看到 normalization 不能只凭名字判断具体公式。

## 二、为什么先标准化输入

### 距离模型不会自动忽略单位

KNN、核 SVM 等方法直接依赖距离或相似度。若一个特征范围为 $0$ 到 $10^5$，另一个只有 $0$ 到 $1$，欧氏距离几乎完全由前者控制，即使它并不更重要。

标准化让不同特征先处于可比较尺度，但也不能无脑使用：计数的零值、周期变量、类别编码和重尾分布可能需要专门变换。

### 参数模型的损失地形会变得更好走

线性回归目标写成

$$
L(w)=\frac1{2N}\lVert Xw-y\rVert_2^2.
$$

梯度和 Hessian 为

$$
\nabla L(w)=\frac1N X^{\mathsf T}(Xw-y),
\qquad
H=\frac1N X^{\mathsf T}X.
$$

课件把 $X^{\mathsf T}X/N$ 称为协方差矩阵；严格说，只有特征已经中心化时它才是通常意义的协方差，否则是二阶矩矩阵。

令 Hessian 特征分解为

$$
H=D\Lambda D^{\mathsf T},
$$

并把误差旋转到特征坐标 $v_t=D^{\mathsf T}(w_t-w^*)$。梯度下降在第 $j$ 个方向上满足

$$
v_{j,t}=(1-\eta\lambda_j)^t v_{j,0}.
$$

要对所有正曲率方向收敛，需要

$$
0<\eta<\frac{2}{\lambda_{\max}}.
$$

最大特征值限制学习率上限，最小非零特征值决定最慢方向。条件数

$$
\kappa=\frac{\lambda_{\max}}{\lambda_{\min}}
$$

越大，损失等高线越狭长，梯度下降越容易来回振荡。标准化和去相关通常能改善谱的尺度，使一个学习率更适合多个方向。

课件用 $1/\lambda_{\max}$ 作为简单稳定学习率。对严格正定二次型，最优固定步长更精确地是

$$
\eta^*=\frac{2}{\lambda_{\max}+\lambda_{\min}},
$$

而不是普遍等于 $1/\lambda_{\max}$；后者是便于理解的保守选择。

## 三、从标准化到白化

对向量 $x$：

- centering：$x-\mu$；
- scaling：每个坐标除以自己的标准差；
- decorrelating：旋转坐标，使不同维度不相关；
- whitening：中心化后乘协方差逆平方根。

设协方差

$$
\Sigma=D\Lambda D^{\mathsf T},
$$

白化可写成

$$
\hat x
=D\Lambda^{-1/2}D^{\mathsf T}(x-\mu),
$$

理想情况下有

$$
\operatorname{Cov}(\hat x)=I.
$$

白化同时调整尺度和相关性，成本也更高；小特征值的求逆会放大噪声，实际需要加 $\varepsilon$ 或截断。

## 四、为什么还要规范化隐藏层激活

深层网络中，每层输入不仅由数据决定，还随前面所有参数更新而变化。若直接用全训练集估计每层激活的总体均值与协方差：

- 每次参数更新后统计量都可能过时；
- 对全部数据重算成本高；
- 采样误差会层层传递；
- 完整白化还需要矩阵分解。

早期工作尝试用总体统计量中心化、标准化或白化隐藏层。BatchNorm 的关键工程选择是：训练时直接使用当前 mini-batch 的局部统计量，让变换参与计算图并一起反向传播；推理时再使用训练过程中积累的总体估计。

## 五、Batch Normalization 的完整公式

对一个统计集合 $\mathcal S$，先算

$$
\mu_{\mathcal S}
=\frac1{|\mathcal S|}\sum_{i\in\mathcal S}x_i,
$$

$$
\sigma^2_{\mathcal S}
=\frac1{|\mathcal S|}
\sum_{i\in\mathcal S}(x_i-\mu_{\mathcal S})^2,
$$

再标准化并恢复可学习的尺度、平移：

$$
\hat x_i
=\frac{x_i-\mu_{\mathcal S}}
{\sqrt{\sigma^2_{\mathcal S}+\varepsilon}},
\qquad
y_i=\gamma\hat x_i+\beta.
$$

$\gamma,\beta$ 让层在需要时恢复原来的尺度或均值，所以 BatchNorm 不会把每层永久锁死成零均值、单位方差的表达。

### MLP 中统计哪些元素

对

$$
X\in\mathbb R^{N\times C},
$$

BatchNorm 对每个特征通道 $c$，跨 batch 维 $N$ 计算一套统计量。不同通道不混在一起。

### CNN 中统计哪些元素

对

$$
X\in\mathbb R^{N\times C\times H\times W},
$$

CNN BatchNorm 对每个通道，跨 $N,H,W$ 统计：

$$
\mu_c
=\frac1{NHW}
\sum_{n,h,w}X_{nchw}.
$$

同一通道的不同空间位置共享统计量，这与卷积特征“同一通道检测同一种模式”的含义相配。

## 六、训练与推理为什么不同

训练时，BatchNorm 使用当前 mini-batch 的均值和方差，并更新 running mean、running variance。推理时不能让一个样本的预测依赖同批次里恰好放了谁，因此使用运行统计量：

$$
y=\gamma
\frac{x-\mu_{\mathrm{running}}}
{\sqrt{\sigma^2_{\mathrm{running}}+\varepsilon}}
+\beta.
$$

所以切换 `train()` 与 `eval()` 不只是影响 Dropout，也会改变 BatchNorm 的统计来源。忘记 `eval()` 会让验证结果随 batch 组成和 batch size 波动。

运行方差的估计口径、动量参数含义在不同框架中可能不同；复现时应看框架文档，而不是只记一个 `momentum=0.1`。

## 七、BN、LN、IN、GN 到底沿哪些维度

仍以 CNN 张量 $N\times C\times H\times W$ 为例：

| 方法 | 每组统计覆盖的元素 | 是否依赖其他样本 | 常见场景 |
|---|---|---|---|
| BatchNorm | 固定通道，跨 $N,H,W$ | 是 | batch 足够大的 CNN |
| LayerNorm | 每个样本内指定的全部特征维 | 否 | Transformer、RNN、MLP |
| InstanceNorm | 固定样本与通道，跨 $H,W$ | 否 | 风格迁移、图像生成 |
| GroupNorm | 固定样本，把通道分组后跨组内 $C,H,W$ | 否 | 小 batch 检测、分割 |

### LayerNorm

对序列张量 $N\times T\times C$，LayerNorm 通常对每个 token 的 $C$ 个特征统计，所以不同 batch、不同 token 互不依赖。它适合序列长度变化和小 batch 场景。

“LayerNorm 总是对所有非 batch 维统计”并不准确；具体统计维由 `normalized_shape` 指定。在 CNN 中可对 $C,H,W$，在 Transformer 中通常只对最后的 hidden dimension。

### InstanceNorm

InstanceNorm 对每张图每个通道分别标准化空间位置，强烈消除单样本的对比度和风格统计，因此适合风格迁移，却可能丢掉分类所需的全局强度信息。

### GroupNorm

GroupNorm 把 $C$ 个通道分成 $G$ 组，每个样本内对一组通道及空间位置统计。$G=1$ 时接近对整个样本特征做 LayerNorm；$G=C$ 时接近 InstanceNorm。它不依赖 batch，因而在高分辨率检测、分割导致 batch 很小时更稳定。

## 八、BatchNorm 为什么能帮助训练

课件总结了几类作用：

- 改善条件，使网络可承受更大学习率；
- 对归一化层前权重的整体缩放不敏感；
- mini-batch 统计带来随机扰动，可能产生正则化效果；
- 训练和推理统计不同，也会形成 train-test discrepancy。

BatchNorm 最初以“减少 internal covariate shift”解释。后续研究表明，它的收益不能只归因于内部协变量偏移；损失地形平滑、尺度不变性和优化稳定性都是更可靠的理解角度。因此不应把“每层分布完全不再变化”当作 BN 成功的必要条件。

## 九、尺度不变性与有效学习率

若归一化使某组权重满足

$$
f(\lambda w)=f(w),
$$

则有

$$
\nabla f(\lambda w)
=\frac1\lambda\nabla f(w),
\qquad
\langle w,\nabla f(w)\rangle=0.
$$

也就是说，整体放大权重不改变前向函数，却会缩小相对于新权重尺度的梯度。梯度方向还与权重正交。用正确的梯度下降符号

$$
w_{t+1}=w_t-\eta\nabla f(w_t),
$$

可得

$$
\lVert w_{t+1}\rVert_2^2
=\lVert w_t\rVert_2^2
+\eta^2\lVert\nabla f(w_t)\rVert_2^2.
$$

课件该页把更新写成了加号，且范数展开容易漏掉 $\eta^2$；我按梯度下降的定义做了校正。权重尺度增长会降低有效角度步长，表现出某种自动调节；weight decay 则把权重向内拉，二者可形成动态平衡。

## 十、何时容易出问题

- batch 太小：BN 均值、方差噪声大，极端情况下方差几乎为零；
- 数据混合多个域：一个 batch 的共享统计量可能把不同域错误耦合；
- RNN 不同时间步：是否共享统计量会引入额外设计问题；
- 训练与推理分布不同：running statistics 无法代表线上数据；
- 梯度累积：它扩大有效优化 batch，却不会自动让每次前向的 BN 看到更大 batch。

遇到这些情况，可考虑 SyncBatchNorm、冻结 BN 统计量、LayerNorm 或 GroupNorm，但选择仍要看模型轴的语义。

## 十一、复习与常见误区

- 标准化、归一化、白化不是同义词；白化还要处理维度相关性。
- 输入未中心化时，$X^{\mathsf T}X/N$ 是二阶矩，不应直接叫协方差。
- 二次目标梯度下降的稳定范围是 $0<\eta<2/\lambda_{\max}$。
- CNN BatchNorm 对每个通道跨 $N,H,W$ 统计，不是把全部通道混成一组。
- BatchNorm 训练用 batch 统计，推理用运行统计；LayerNorm、GroupNorm 不依赖其他样本。
- `eval()` 不会关闭可学习的 $\gamma,\beta$，只会改变统计量来源。
- BN 的作用不应只解释为消除 internal covariate shift。
- 选择归一化层前，先写清张量每个轴代表什么，再决定哪些轴共同统计。
