---
title: "第十讲 · 目标检测：R-CNN、Faster R-CNN 与 YOLO"
description: "从分类加定位出发，串联候选框、IoU、NMS、R-CNN 四代演进、检测指标，以及 YOLO v1 与 v2 的网格预测"
date: 2026-08-22
tags: ["模式识别与机器视觉", "数学"]
---

目标检测要在一张图里找到数量不定的多个对象，并为每个对象同时输出**类别和边界框**。它可以理解成：

$$
\text{目标检测}=\text{分类}+\text{定位}.
$$

## 一、为什么多目标检测困难

单个对象可以让 CNN 同时输出类别和 $(x,y,w,h)$。多个对象的数量不固定，位置、尺度和长宽比又任意变化，无法简单预留一个固定长度输出。

最朴素的方法是在整张图上滑动不同大小的窗口，每个窗口都做一次分类。但“位置 × 尺度 × 长宽比”的组合会爆炸。现代检测器的演进，本质上都在回答：**怎样用更少的计算找到值得检查的框？**

## 二、两阶段与一阶段

| 维度 | 两阶段检测器 | 一阶段检测器 |
|---|---|---|
| 第一步 | 生成可能含物体的候选区域 | 直接在特征图上预测 |
| 第二步 | 对候选框分类并精修位置 | 同一次前向完成类别与位置 |
| 优点 | 通常定位更精细、精度较高 | 速度快、结构直接 |
| 代表 | R-CNN、Fast/Faster R-CNN | YOLO、SSD |

## 三、R-CNN：先提区域，再逐个分类

![R-CNN 对每个候选区域单独提取 CNN 特征](/images/pattern-recognition-vision/r-cnn-pipeline.png)

R-CNN 的流程是：

1. Selective Search 生成约 2000 个候选框；
2. 每个候选框裁剪并缩放到 $227\times227$；
3. 每个框分别经过 AlexNet，提取 4096 维特征；
4. 每一类别使用独立 SVM 分类；
5. 边界框回归器修正位置。

Selective Search 从小区域开始，根据颜色、纹理、大小和形状相似性不断合并，收集过程中出现的区域作为候选框。它比穷举滑窗聪明，但仍是缓慢且不可训练的传统算法。

R-CNN 的主要问题是：同一张图的约 2000 个框要分别跑 CNN，产生大量重复计算；强行 resize 还可能让对象变形；CNN、SVM 和回归器也不是一次联合训练。

## 四、IoU 与 NMS

### 1. IoU 衡量两个框有多重合

$$
\operatorname{IoU}(A,B)=\frac{|A\cap B|}{|A\cup B|}.
$$

IoU 取值为 $[0,1]$。训练时它可用于判断 anchor 是正样本还是负样本；评测时用于判断预测框是否匹配真值；后处理时则用于识别高度重复的框。

### 2. NMS 只保留同一目标的最高分框

检测器常在一个对象周围预测许多相似框。非极大值抑制 NMS 的执行过程是：

1. 按置信度从高到低排序；
2. 保留最高分框；
3. 删除与它 IoU 超过阈值的同类框；
4. 在剩余框里继续重复。

![NMS 从大量重叠框中留下少数高置信度框](/images/pattern-recognition-vision/non-maximum-suppression.png)

NMS 必须按类别分别执行，否则一个高分“狗”框可能错误压掉同位置的“人”框。

## 五、SPP-Net 与 ROI 操作

SPP-Net 把最耗时的顺序反过来：**整张图只跑一次 CNN，再从共享特征图中取出不同候选区域的特征。**

候选区域大小不同，而全连接层要求固定长度。空间金字塔池化把区域分别切成固定数量的多尺度网格，每格池化后拼起来，于是任意尺寸区域都能产生固定长度向量。

ROI Pooling 延续了这个思想，但把原图坐标映射到特征图时需要取整，可能产生量化误差。ROI Align 保留小数坐标，使用双线性插值获得精确特征，对小物体和实例分割尤其重要。

## 六、Fast R-CNN：共享特征并联合训练

Fast R-CNN 的改进包括：

- 整张图只提取一次卷积特征；
- 用 ROI Pooling 把每个候选区域转成固定大小特征；
- 用 Softmax 分类损失与 Smooth L1 边界框回归损失联合训练。

它消除了每个候选框单独卷积和独立 SVM 的瓶颈，但候选框仍来自 Selective Search，因此系统还没有完全端到端。

## 七、Faster R-CNN：让网络自己提出候选框

Faster R-CNN 用 Region Proposal Network（RPN）取代 Selective Search。

![Faster R-CNN 共享特征，并由 RPN 生成候选区域](/images/pattern-recognition-vision/faster-r-cnn.png)

### 1. Anchor 把任意框变成分类与微调

在特征图每个位置预设若干不同尺度和长宽比的参考框。课件示例为 3 种尺度乘 3 种比例，因此每个位置有 9 个 anchor。

网络不再从零预测所有可能的框，而是对每个 anchor 回答两个问题：

- 这里是否存在物体；
- 参考框应该怎样平移和缩放。

### 2. RPN 的两条支路

RPN 在共享特征图上滑动，输出：

- 前景/背景二分类分数；
- 边界框回归偏移量。

经过裁剪、过滤和 NMS 后形成 Proposals。随后检测头再判断具体类别，并进行第二次、更精细的边界框回归。

因此 Faster R-CNN 可以记成：

$$
\text{共享 CNN}
\rightarrow
\text{RPN 粗筛与粗回归}
\rightarrow
\text{ROI Pooling}
\rightarrow
\text{检测头分类与细回归}.
$$

## 八、两阶段检测器的演进主线

| 模型 | 核心变化 | 解决的问题 |
|---|---|---|
| R-CNN | 候选框 + CNN 特征 + SVM | 用学习特征取代手工特征 |
| SPP-Net | 整图卷积一次 + 金字塔池化 | 避免每个框重复卷积 |
| Fast R-CNN | ROI Pooling + 多任务联合训练 | 合并分类与回归训练流程 |
| Faster R-CNN | RPN + Anchor | 取代缓慢的 Selective Search |

## 九、检测指标

先定义四种结果：TP 是正确检测，FP 是误检，FN 是漏检，TN 在目标检测中通常不是重点。

$$
\operatorname{Precision}=\frac{TP}{TP+FP},
\qquad
\operatorname{Recall}=\frac{TP}{TP+FN}.
$$

- Precision 关心报出来的结果有多“准”；
- Recall 关心真实对象找回了多“全”。

改变置信度阈值可以得到 PR 曲线。AP 综合一个类别在不同 Recall 下的 Precision，mAP 再对所有类别的 AP 求平均。

`mAP@50` 表示以 IoU $0.5$ 作为匹配阈值，`mAP@95` 则要求 IoU 达到 $0.95$。后者定位要求更严格，因此通常更低。

## 十、YOLO v1：把检测变成一次回归

YOLO 不先生成候选区域，而是把图像划成 $S\times S$ 网格。**物体中心落在哪个网格，哪个网格就负责预测它。**

每格预测 $B$ 个框，每框给出

$$
(x,y,w,h,\text{confidence}),
$$

并共享一组 $C$ 类条件概率。YOLO v1 使用 $S=7$、$B=2$、$C=20$，因此每格输出

$$
B\times5+C=2\times5+20=30,
$$

整张图输出 $7\times7\times30$。

置信度同时表达“是否有物体”和“框得准不准”：

$$
\text{confidence}=P(\text{Object})\times\operatorname{IoU}_{pred}^{truth}.
$$

![YOLO v1 用一个网络直接输出网格上的框和类别](/images/pattern-recognition-vision/yolo-v1-architecture.png)

YOLO v1 的损失由定位、置信度和分类三部分组成。每个含物体的网格只让与真值 IoU 最高的预测框负责该对象。

它非常快，但 $7\times7$ 网格较粗：两个对象中心落入同一格时容易漏检，小目标和少见长宽比也较困难。

## 十一、YOLO v2 的三项主要改进

课件重点列出：

1. **高分辨率分类器**：先让分类网络适应 $448\times448$ 输入；
2. **Darknet-19 与 passthrough 特征融合**：结合浅层细节和深层语义，改善小目标；
3. **多尺度训练**：每隔若干 batch 改变输入分辨率，让一个模型适应速度与精度不同的运行点。

高分辨率分类器发生在预训练适配阶段，多尺度训练发生在检测训练过程中，两者不要混淆。

## 本讲速记

- 两阶段：先候选区域，再分类与回归；一阶段：一次前向直接预测。
- IoU 是交集除以并集；NMS 是留最高分、删高重叠框，并按类别执行。
- R-CNN 慢在每个框都跑 CNN；Fast 共享特征；Faster 再用 RPN 取代 Selective Search。
- RPN 对 anchor 做前景/背景分类和粗回归，检测头再做具体分类与细回归。
- Precision 看误检，Recall 看漏检；AP 对单类，mAP 对所有类。
- YOLO v1 用 $7\times7$ 网格直接输出 $7\times7\times30$，快但小目标和拥挤场景较弱。
