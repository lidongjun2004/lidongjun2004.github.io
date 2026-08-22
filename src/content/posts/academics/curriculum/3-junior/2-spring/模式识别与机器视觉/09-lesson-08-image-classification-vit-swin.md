---
title: "第八讲 · 图像分类：ViT 与 Swin Transformer"
description: "理解像素到语义的鸿沟，掌握 ViT 的 patch 序列、位置编码和分类 token，以及 Swin 的分层结构、窗口注意力与移位窗口"
date: 2026-08-22
tags: ["模式识别与机器视觉", "数学"]
---

图像分类的输入是一张图，输出是预先定义类别集合中的一个标签。它看似只是“猫还是狗”，真正的困难却是：人看见的是物体和语义，机器最初看见的只是像素数组。

## 一、为什么不能靠硬编码规则

同一类别可能出现视角、尺度、姿态、背景、光照和遮挡变化，不同类别又可能拥有相似纹理。给“猫”手写一组像素规则，很快就会被现实中的变化击穿。

监督学习的做法是提供大量图像及其标签，让模型自己学会从像素到语义的映射。

## 二、CNN 带着哪些归纳偏置

CNN 对图像预先作了两种很强的假设：

- **局部性**：邻近像素之间更可能相关；
- **平移等变性**：同一个卷积核在不同位置寻找同一种特征。

这些归纳偏置减少了搜索空间，因此 CNN 在数据不算特别多时也能学得很好。ViT 的探索则是：如果减少这些先验，直接让注意力从数据中学习图像区域之间的关系，会发生什么？

## 三、ViT：把图像变成句子

ViT 的关键不是“把 Transformer 画到图像旁边”，而是把二维图像转换成一维 token 序列。

![图像被切成 patch 后形成 token 序列](/images/pattern-recognition-vision/vit-patch-sequence.png)

设图像大小为 $H\times W\times C$，patch 大小为 $P\times P$，则 patch 数量为

$$
N=\frac{HW}{P^2}.
$$

每个 patch 展平为长度 $P^2C$ 的向量，再经过线性投影变成 $D$ 维 token：

$$
z_0=[x_{class};x_p^1E;x_p^2E;\dots;x_p^NE]+E_{pos}.
$$

这里包含三个关键部件：

1. **Patch Embedding**：把每块图像映射成 token；
2. **位置编码** $E_{pos}$：告诉模型每块原来位于图像哪里；
3. **[CLS] token**：作为全图信息的汇聚位置，最后送入分类头。

然后整条序列经过若干 Transformer Encoder Block：

$$
z'_{\ell}=\operatorname{MSA}(\operatorname{LN}(z_{\ell-1}))+z_{\ell-1},
$$

$$
z_{\ell}=\operatorname{MLP}(\operatorname{LN}(z'_{\ell}))+z'_{\ell}.
$$

最后读取 [CLS] token 的输出完成分类。

## 四、ViT 的优势与代价

标准自注意力能让每个 patch 直接观察其他所有 patch，因此模型很早就具有全局感知能力。它在大规模数据预训练后表现很强，对遮挡、分布偏移和 patch 重排也显示出不同于 CNN 的鲁棒性。

代价是 ViT 缺少 CNN 的局部先验：

- 中等规模数据上可能不如 CNN；
- token 数量一多，注意力复杂度 $O(N^2)$ 很高；
- 单一尺度 token 不天然适合检测、分割等密集预测任务。

课件还提到两个后续方向：

- **DeiT**：加入蒸馏 token，从教师模型获得监督，提高小数据训练效率；
- **MAE**：遮住大量图像 patch，再让模型重建，进行可扩展的自监督预训练。

## 五、Swin Transformer 要解决什么

图像不像句子：分辨率可能很高，物体尺度变化也很大。Swin Transformer 通过两个设计让 Transformer 更像一个通用视觉骨干网络：

1. 建立逐层降低空间分辨率的**分层特征金字塔**；
2. 只在局部窗口内计算注意力，把复杂度降下来。

![Swin Transformer 的分层结构](/images/pattern-recognition-vision/swin-transformer-architecture.png)

## 六、Patch Merging：分辨率减半、通道增加

在阶段之间，Swin 把相邻 $2\times2$ patch 合并。四组 patch 在通道方向拼接，再线性变换：

- 高和宽分别减半；
- token 数量变为原来的四分之一；
- 通道数通常增加。

这与 CNN 的层次结构相似：浅层保留细节，高层拥有更大感受野和更强语义。

## 七、W-MSA 与 SW-MSA

若全图所有 token 一起做注意力，计算量会随分辨率平方增长。Swin 先把特征图切成互不重叠的窗口，只在窗口内计算 W-MSA。

但固定窗口会把不同窗口隔开。下一层于是把窗口整体平移半个窗口大小，再计算 SW-MSA。这样原先分属不同窗口的 token 就能发生交互。

连续两个 Block 可以记成：

$$
\text{固定窗口注意力}
\rightarrow
\text{移位窗口注意力}.
$$

Swin 还把相对位置偏置直接加入注意力分数，比单纯使用绝对位置编码更适合窗口内部的二维关系。

## 八、ViT 与 Swin 的选择

| 维度 | ViT | Swin Transformer |
|---|---|---|
| token 组织 | 单一尺度 | 分层、多尺度 |
| 注意力范围 | 全局 | 局部窗口 + 移位连接 |
| 复杂度 | 随 token 数平方增长 | 对图像大小近似线性增长 |
| 擅长任务 | 以图像分类为起点 | 分类、检测、分割通用骨干 |

课件目录还保留了 AlexNet、VGG、Inception、ResNet、SENet 和 CBAM 的标题，但当前文件没有对应的正式讲解页；因此本讲不凭标题补造内容。VGG 的完整材料单独放在本系列的大作业篇。

## 本讲速记

- ViT：切 patch、线性投影、加位置编码和 [CLS]，送进标准 Transformer。
- ViT 全局建模强，但数据需求和 $O(N^2)$ 计算量较大。
- Swin：分层结构 + Patch Merging + 窗口注意力 + 移位窗口。
- 固定窗口省计算，移位窗口负责跨窗口通信。
- ViT 从分类出发，Swin 更适合作为检测和分割的通用 backbone。
