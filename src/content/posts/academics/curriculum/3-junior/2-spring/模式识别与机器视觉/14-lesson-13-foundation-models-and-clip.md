---
title: "第十三讲 · 视觉大模型：对比学习、CLIP 与 PEFT"
description: "从无标注数据的对比学习出发，理解 InfoNCE 与 CLIP 图文对齐、zero-shot 分类，再掌握 Prompt Tuning、Adapter 和 LoRA"
date: 2026-08-22
tags: ["模式识别与机器视觉", "数学"]
---

传统监督视觉模型依赖人工类别标签，而互联网中的图像和文字远多于高质量标注。这一讲回答两个问题：**怎样从无标注数据中学习可迁移特征？模型变得很大以后，又怎样以较低成本适配新任务？**

## 一、对比学习从数据自身制造监督信号

同一张图经过随机裁剪、翻转、颜色抖动后，语义通常不变。因此可以把同图的两个增强视图当作正样本对，把其他图像当作负样本。

训练目标是：

- 正样本在嵌入空间中靠近；
- 负样本在嵌入空间中远离。

完整流程为：数据增强 → CNN/Transformer 特征提取 → 对比损失 → 下游任务微调。

## 二、InfoNCE 在做什么

一个常见形式为

$$
L_{InfoNCE}
=-\frac1N\sum_{i=1}^{N}
\log
\frac{\exp(\operatorname{sim}(q_i,k_i^+)/\tau)}
{\sum_{j=1}^{N}\exp(\operatorname{sim}(q_i,k_j)/\tau)}.
$$

其中 $q_i$ 是查询，$k_i^+$ 是对应正样本，其他 $k_j$ 充当负样本，$\tau$ 是温度系数。

它可以理解成一次 softmax 分类：对于每个查询，在所有候选中把真正的正样本识别出来。分子鼓励正样本相似度高，分母则让它与所有候选竞争。SimCLR 和 MoCo 都建立在这一思路上。

## 三、CLIP 把图像和文字放进同一空间

CLIP 不只对比“图像与图像”，而是使用约 4 亿组图文对，让图像编码器和文本编码器学习共享语义空间。

![CLIP 把图像和文本编码到同一个语义空间](/images/pattern-recognition-vision/clip-shared-space.png)

其结构是两个独立编码器：

- 图像编码器：ResNet 或 ViT；
- 文本编码器：Transformer；
- 两边经过投影并归一化，最后用向量相似度比较。

## 四、CLIP 的对比训练矩阵

一个 batch 有 $N$ 对图像和文字。分别编码后计算全部两两相似度，得到 $N\times N$ 矩阵：

- 对角线是原本配对的图文，属于正样本；
- 非对角线是不匹配组合，属于负样本。

![CLIP 用相似度矩阵拉高配对图文、压低错误组合](/images/pattern-recognition-vision/clip-contrastive-training.png)

训练同时进行 image-to-text 和 text-to-image 两个方向的交叉熵，使正确图文在一行和一列里都具有最高相似度。整个过程不需要人工整理固定类别标签，只需要自然出现的图文配对。

## 五、zero-shot 分类为什么成立

传统分类器的输出类别在训练完成后固定。CLIP 可以把任意类别名写成文本提示，例如：

```text
a photo of a dog
a photo of a cat
a photo of a plane
```

然后：

1. 文本编码器得到所有候选类别的文本向量；
2. 图像编码器得到输入图像向量；
3. 计算图像与各文本的余弦相似度；
4. 选择相似度最高的类别。

![CLIP 用文本提示构造开放词表分类器](/images/pattern-recognition-vision/clip-zero-shot.png)

分类器不再是一组固定学习到的类别权重，而是由自然语言动态构造，因此可以面对训练阶段没有专门定义过的类别。

## 六、CLIP 的能力边界

CLIP 的优势是开放词表、可迁移和对分布变化更稳健，但它不是万能视觉理解模型：

- 效果依赖提示词写法，通常需要 prompt engineering；
- 训练数据没有覆盖的分布仍可能表现差；
- 网络规模和数据利用效率代价很高；
- 图像和文字主要通过最终向量点积交互，缺乏 token 级深度融合；
- 互联网数据会把偏见和噪声带入模型。

## 七、为什么需要参数高效微调

模型规模变大后，为每个任务更新并保存一份完整参数副本，训练和存储都很昂贵。PEFT 的共同思想是：

> 冻结绝大多数预训练参数，只训练少量新增或低维参数。

## 八、Prompt Tuning

Hard Prompt 是人工编写、可读的自然语言；Prompt Tuning 学习的则是一组连续向量，也称 Soft Prompt。

这些向量拼接在输入 embedding 前，模型主体完全冻结，梯度只更新 Soft Prompt。不同任务只需保存不同提示向量，就能共享同一个大模型。

## 九、Adapter

Adapter 在 Transformer 层中插入一个小型瓶颈模块：

$$
h' = h + W_{up}\,\sigma(W_{down}h).
$$

$W_{down}$ 把高维表示压到很小的瓶颈维度，非线性变换后由 $W_{up}$ 恢复维度，再通过残差连接加回原表示。

训练时冻结原模型，只更新 Adapter。新任务可以换一组 Adapter，但由于模块位于前向路径中，推理会增加少量计算。

## 十、LoRA：只学习低秩权重增量

LoRA 假设微调所需的权重变化位于低维子空间。原权重 $W_0$ 冻结，只学习

$$
\Delta W=BA,
$$

其中

$$
B\in\mathbb{R}^{d\times r},
\qquad
A\in\mathbb{R}^{r\times k},
\qquad
r\ll\min(d,k).
$$

前向过程为

$$
h=W_0x+\frac{\alpha}{r}BAx.
$$

![LoRA 用两个低秩矩阵表示原权重的更新量](/images/pattern-recognition-vision/lora-low-rank-update.png)

若原矩阵需要 $dk$ 个可训练参数，LoRA 只需 $r(d+k)$ 个。推理前还可以把 $BA$ 合并进 $W_0$，因此不会像 Adapter 那样增加额外前向层。

## 十一、三种 PEFT 方法对比

| 方法 | 训练什么 | 插入位置 | 推理额外开销 |
|---|---|---|---|
| Prompt Tuning | 少量连续提示向量 | 输入端 | 增加少量 token |
| Adapter | 瓶颈网络参数 | Transformer 层内部 | 有少量额外模块 |
| LoRA | 低秩矩阵 $A,B$ | 线性层权重旁路 | 合并后近似为零 |

选择哪种方法取决于模型结构、任务数量、部署限制和效果要求，没有一种方案对所有场景都绝对最好。

## 本讲速记

- 对比学习利用数据增强构造正样本，在嵌入空间拉近正样本、推远负样本。
- InfoNCE 本质是在所有候选中识别正确配对。
- CLIP 使用图像与文本双编码器，对角线图文为正样本，非对角线为负样本。
- zero-shot：把类别写成文本提示，与图像向量比较相似度，形成开放词表分类。
- PEFT 冻结模型主体，只训练少量参数。
- Prompt Tuning 学输入向量，Adapter 插入瓶颈层，LoRA 学低秩增量 $BA$。
