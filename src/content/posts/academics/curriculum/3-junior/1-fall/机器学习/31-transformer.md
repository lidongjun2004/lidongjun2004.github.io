---
title: "第二十九讲 · Transformer、BERT 与 Vision Transformer"
description: "从注意力和位置编码出发拆解 Transformer 编码器与解码器，并理解 BERT 预训练和 Vision Transformer 的图像序列化"
date: 2026-08-23
tags: ["机器学习", "AI"]
---

RNN 按时间步依次传递状态，长距离信息要穿过很长的链。Transformer 改用注意力，让任意两个 token 在一层内直接交换信息，并把同一层所有位置并行计算。

它并没有消除序列结构：token 顺序通过位置编码加入，解码时的因果关系通过 mask 保证。理解 Transformer 的关键，是始终追踪每个张量的形状和信息来源。

## 一、从序列到序列任务开始

机器翻译输入长度为 $N$ 的源语言序列，输出长度为 $M$ 的目标语言序列，$N$ 与 $M$ 不必相同。同一抽象还可覆盖摘要、阅读理解式生成和语音识别：

$$
(x_1,\ldots,x_N)
\longrightarrow
(y_1,\ldots,y_M).
$$

经典 RNN encoder-decoder 把源序列逐步压进隐藏状态，再逐步生成目标。Transformer 仍保留“编码器理解输入、解码器生成输出”的分工，但把循环计算换成注意力和逐位置前馈网络。

## 二、输入先变成向量

词表大小为 $V$ 时，一个 token 可表示为 one-hot 向量 $e_i\in\mathbb R^V$。嵌入矩阵

$$
E\in\mathbb R^{V\times d_{\mathrm{model}}}
$$

把它映射为稠密向量

$$
x_i=e_i^{\mathsf T}E.
$$

由于 one-hot 只有一个位置为 $1$，这个乘法实际就是查表取出 $E$ 的第 $i$ 行。

解码器最后把隐藏向量投影回 $V$ 个 logits，再做 Softmax。输入嵌入矩阵与输出投影矩阵可以共享权重，常称 weight tying，但它是设计选择，不是 Transformer 必须条件。

## 三、自注意力从 Q、K、V 开始

输入矩阵记为

$$
X\in\mathbb R^{n\times d_{\mathrm{model}}}.
$$

通过三组可学习矩阵得到

$$
Q=XW_Q,
\qquad
K=XW_K,
\qquad
V=XW_V.
$$

对第 $i$ 个 token：

- query $q_i$ 表示“我在找什么”；
- key $k_j$ 表示“我能用什么条件被匹配”；
- value $v_j$ 表示“匹配后实际取走的信息”。

缩放点积注意力为

$$
\operatorname{Attention}(Q,K,V)
=\operatorname{softmax}
\left(\frac{QK^{\mathsf T}}{\sqrt{d_k}}\right)V.
$$

$QK^{\mathsf T}$ 的形状为 $n\times n$，第 $i$ 行给出 token $i$ 对所有 token 的相关分数。Softmax 按行进行，使每个 query 的权重和为 $1$。

### 为什么除以 $\sqrt{d_k}$

若 $q,k$ 各分量方差相近，点积的方差会随维数 $d_k$ 增长。分数过大时 Softmax 接近 one-hot，梯度很小。除以 $\sqrt{d_k}$ 可把分数量级拉回稳定范围。

## 四、一个两 token 算例

假设 token 1 对两个 key 的缩放分数为

$$
(2,0).
$$

Softmax 权重为

$$
(0.881,0.119).
$$

若

$$
v_1=(1,0),
\qquad
v_2=(0,2),
$$

则 token 1 的新表示为

$$
z_1=0.881v_1+0.119v_2
=(0.881,0.238).
$$

注意力输出不是“选中一个词”，而是按相关度对 value 加权求和。课件示意的 $0.88v_1+0.12v_2$ 就是这个过程。

## 五、多头注意力

一个注意力头只能在一套投影空间中计算相似度。多头注意力让 $h$ 个头各自学习不同的 $W_Q,W_K,W_V$：

$$
\operatorname{head}_r
=\operatorname{Attention}
(Q_r,K_r,V_r),
$$

$$
\operatorname{MHA}(X)
=\operatorname{Concat}
(\operatorname{head}_1,\ldots,\operatorname{head}_h)W_O.
$$

不同头可以关注不同位置关系或表示子空间。若总 hidden size 固定，通常每头维度约为 $d_{\mathrm{model}}/h$；头数增加不代表总表示维度无限增加。

## 六、编码器块

一个经典 Transformer 编码器块包含：

1. multi-head self-attention；
2. residual connection 与 LayerNorm；
3. 对每个 token 独立应用的前馈网络（FFN）；
4. 另一组 residual connection 与 LayerNorm。

FFN 为

$$
\operatorname{FFN}(x)
=W_2\phi(W_1x+b_1)+b_2.
$$

它对所有 token 使用同一组参数，但不同 token 之间在 FFN 中不交流，因此可以并行。token 间通信发生在 self-attention 中。

原始 Transformer 使用子层后做 LayerNorm 的 post-norm 结构；许多现代大模型改用子层前做 LayerNorm 的 pre-norm，以改善深层训练。两者不能只凭“Add & Norm”四个字混为一谈。

堆叠多个编码器块时，各层结构相同但参数不同；“重复六层”不代表六层共享一套权重。

## 七、解码器为什么需要两种注意力

解码器块包含：

1. masked self-attention，只看已生成的目标 token；
2. encoder-decoder cross-attention，读取源序列；
3. token-wise FFN。

在 cross-attention 中：

$$
Q\text{ 来自解码器},
\qquad
K,V\text{ 来自编码器输出}.
$$

所以解码器用“当前生成状态”作为 query，去源句表示中查找相关信息。

## 八、因果 mask：不能偷看未来答案

训练时目标序列全部已知，可以一次并行送入解码器。但预测第 $t$ 个 token 时，只允许看到 $1$ 到 $t$ 的位置，不能看到未来真值。

在注意力 logits 上加上上三角 mask：

$$
M_{ij}=
\begin{cases}
0,&j\le i,\\
-\infty,&j>i.
\end{cases}
$$

$$
A=\operatorname{softmax}
\left(\frac{QK^{\mathsf T}}{\sqrt{d_k}}+M\right).
$$

被加上 $-\infty$ 的未来位置经过 Softmax 后权重为 $0$。实际实现使用足够小的有限数或布尔 mask，以适配浮点精度。

训练时通常把目标序列右移一位：输入 $\langle\mathrm{BOS}\rangle,y_1,\ldots,y_{M-1}$，监督目标为 $y_1,\ldots,y_M$。推理时没有后续真值，只能自回归地一步步生成。

## 九、没有循环后，位置从哪里来

纯 self-attention 对 token 排列具有置换等变性：若同时打乱输入行，输出也只会跟着打乱，本身不知道谁在第一个位置。必须加入位置表示。

原始 Transformer 使用固定正弦位置编码：

$$
\operatorname{PE}(pos,2i)
=\sin\left(
\frac{pos}{10000^{2i/d_{\mathrm{model}}}}
\right),
$$

$$
\operatorname{PE}(pos,2i+1)
=\cos\left(
\frac{pos}{10000^{2i/d_{\mathrm{model}}}}
\right).
$$

把它与 token embedding 相加：

$$
h_i=x_i+\operatorname{PE}(i).
$$

不同维度使用不同频率，使模型能由组合模式区分位置和相对距离。课件写“这些向量遵循模型学习的特定模式”容易产生歧义：原论文的正弦位置编码是固定公式，不由训练学习；可学习位置嵌入是另一种同样常见的方案。

## 十、训练目标

对目标位置 $t$，模型输出词表概率

$$
p(y_t\mid y_{<t},x).
$$

教师强制训练的交叉熵为

$$
L=-\sum_{t=1}^{M}
\log p(\hat y_t\mid \hat y_{<t},x).
$$

每个位置都可并行计算损失，但因果 mask 保证其隐藏表示没有使用未来 token。Padding 位置不是真实目标，应在 loss 中屏蔽。

推理时可用贪心选择、beam search 或采样；训练交叉熵最低不意味着某种解码策略下的整句指标一定最佳。

## 十一、完整 Transformer 的信息流

把课件结构串起来：

1. 源 token 经 embedding 与位置编码进入编码器；
2. 编码器的 self-attention 让源序列内部交流；
3. 目标前缀经 embedding 与位置编码进入解码器；
4. masked self-attention 建模目标前缀；
5. cross-attention 从编码器输出取信息；
6. 输出投影与 Softmax 产生下一个 token 分布；
7. 交叉熵把目标 token 的误差反传到整套网络。

每个子层都有残差连接与归一化。少掉位置编码，模型不知道顺序；少掉 mask，训练会偷看未来；少掉 cross-attention，解码器不会读取源句。

## 十二、BERT：只保留编码器做双向理解

BERT 使用 Transformer encoder 堆叠，不做自回归解码。普通 encoder self-attention 没有因果 mask，所以一个 token 可以同时关注左、右上下文，适合语言理解与表示学习。

原始 BERT 预训练包含：

- Masked Language Modeling（MLM）：遮住一部分 token，根据双向上下文恢复；
- Next Sentence Prediction（NSP）：判断两个片段是否连续。

输入还会加入 token、position 和 segment embeddings，并使用 `[CLS]` 汇总分类表示、`[SEP]` 分隔片段。预训练后只需接任务头并微调，即可用于分类、序列标注和问答。

NSP 是原始 BERT 的组成，不是所有后续 BERT 变体的必需目标；不少改进模型改变或删除了它。

## 十三、Vision Transformer：把图像切成 token

对图像

$$
X\in\mathbb R^{H\times W\times C},
$$

ViT 把它切成 $P\times P$ 的不重叠 patch，patch 数为

$$
N=\frac{HW}{P^2}.
$$

每个 patch 展平为长度 $P^2C$ 的向量，再线性投影到 $d_{\mathrm{model}}$，于是图像变成 token 序列。加入可学习位置嵌入和分类 token `[CLS]` 后，送入 Transformer encoder；最终用分类 token 表示做图像分类。

论文题目中的 “16x16 Words” 指典型 patch 大小 $16\times16$。patch 越小，序列越长、细节越多，但 self-attention 的 $N\times N$ 矩阵也更昂贵。

ViT 与 CNN 的关键差别在归纳偏置：CNN 天然具有局部连接和平移共享，ViT 更依赖数据从注意力中学出空间关系。两者并非互斥，现代视觉模型常混合卷积、局部注意力和层级下采样。

## 十四、复杂度与适用边界

全局 self-attention 的注意力矩阵为 $n\times n$，时间和显存中与序列交互相关的部分约为 $O(n^2)$。它换来了任意 token 一层直接通信和训练时高度并行。

RNN 的序列依赖使时间步难并行，但单步只维护局部状态；Transformer 训练并行度高，长序列二次开销却很突出。不能只说“Transformer 一定更快”，要结合序列长度、hidden size、硬件和推理方式判断。自回归解码仍需逐 token 生成，并通过 KV cache 避免重复计算历史 key/value。

## 十五、复习与常见误区

- $QK^{\mathsf T}$ 决定权重，$V$ 才是被加权汇总的内容。
- Softmax 对每个 query 的 key 维进行，不能把整个注意力矩阵一起归一化。
- 除以 $\sqrt{d_k}$ 是控制点积分数方差，不是随意缩放。
- encoder self-attention 可看全部输入；decoder self-attention 必须有因果 mask。
- cross-attention 的 $Q$ 来自解码器，$K,V$ 来自编码器。
- 原始正弦位置编码是固定的，可学习位置嵌入是另一种方案。
- BERT 是双向 encoder 预训练模型，不是完整 encoder-decoder Transformer。
- ViT 的 patch 是 token 化方式；patch 越小，注意力序列和二次成本越大。
- 训练可并行不等于自回归推理也能一次生成整句。
