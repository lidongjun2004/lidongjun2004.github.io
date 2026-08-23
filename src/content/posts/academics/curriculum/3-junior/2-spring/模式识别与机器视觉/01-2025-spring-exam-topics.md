---
title: "2025 年春期末考点（前人回忆）"
description: "根据前人回忆整理的模式识别与机器视觉期末复习范围，只记录可确认考点，不复原题干、分值或答案"
date: 2026-08-22
tags: ["模式识别与机器视觉", "数学"]
---

这是一位前人对 **2025 年春季期末考试考点**的简短回忆，不是原卷，也没有完整题干、分值、参数或官方答案。下面只在原始信息允许的范围内补全概念和复习边界，不把“考过哪些知识”硬编成“原题具体怎么问”。

## 一、原始回忆

> **模式识别：** SVM 比较全面的描述（可能有 KKT？软间隔？不记得了），贝叶斯决策（最小风险），最大似然估计计算题。
>
> **计算机视觉：** 严格按照韦星星的期末 PPT 出题；有非极大值抑制、卷积基本计算、IoU 交并比的计算、FAST-CNN 等系列网络的区别和结构、ViT 的想法。

其中“FAST-CNN”按课程目标检测课件中的标准名称，应理解为 **Fast R-CNN**；“等系列网络”至少应连同 R-CNN、Faster R-CNN 一起复习。

## 二、模式识别部分

### SVM：需要形成一条完整叙述

可以确认的是，SVM 考得比较全面；至于 KKT、软间隔是否真的出现在原题里，回忆者本人也不确定。稳妥的复习边界是：

1. 从线性分类面解释为什么要追求最大间隔；
2. 写出硬间隔 SVM 的原问题；
3. 用拉格朗日乘子得到对偶问题；
4. 说明 KKT 条件如何识别支持向量；
5. 说明线性不可分时为什么引入松弛变量和软间隔，以及参数 $C$ 控制什么；
6. 知道核函数如何把内积替换成 $K(\mathbf{x}_i,\mathbf{x}_j)$。

这六项是完整回答 SVM 描述题所需的知识链，不代表六项都能被确认为 2025 年原题内容。推导与答题主线见[第四讲 · 支持向量机 SVM](/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/05-lesson-04-support-vector-machine/)。

### 贝叶斯决策：重点是最小风险

给定观测 $\mathbf{x}$ 后，采取决策 $\alpha_i$ 的条件风险为：

$$
R(\alpha_i\mid\mathbf{x})
=\sum_j \lambda_{ij}P(\omega_j\mid\mathbf{x})
$$

计算每个决策的条件风险，选择风险最小者：

$$
\alpha^*(\mathbf{x})=\arg\min_{\alpha_i}R(\alpha_i\mid\mathbf{x})
$$

复习时要能读懂损失矩阵 $\lambda_{ij}$，用贝叶斯公式计算后验概率，再逐项计算风险；同时说明最小错误率只是最小风险在 0-1 损失下的特例。完整算例见[第二讲 · 贝叶斯决策论](/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/03-lesson-02-bayesian-decision-theory/)。

### 最大似然估计：按计算流程练习

这部分明确回忆为计算题，但没有留下分布类型和具体数据。不要押某个数字，应该熟练掌握统一流程：

1. 根据独立同分布样本写似然函数 $L(\theta)$；
2. 取对数得到 $\ell(\theta)=\ln L(\theta)$；
3. 对未知参数求导并令导数为零；
4. 解出参数估计量；
5. 检查参数定义域和极大值条件。

课程中常见分布的推导见[第三讲 · 最大似然估计](/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/04-lesson-03-maximum-likelihood-estimation/)。

## 三、计算机视觉部分

前人的总体判断是“严格按照韦星星的期末 PPT 出题”。这能说明课件是复习主线，但不能据此复原题型、题量或措辞。已明确留下的考点如下。

### 非极大值抑制 NMS

要能口述并手算整个流程：按置信度降序排列候选框，保留最高分框，计算它与其余框的 IoU，删除超过阈值的高度重叠框，再对剩余候选框重复操作。

### 卷积基本计算

计算时让卷积核在输入的局部窗口上滑动，将对应元素相乘后求和。还应会根据输入尺寸 $H\times W$、卷积核大小 $K$、步长 $S$ 和填充 $P$ 计算输出尺寸：

$$
H_{\mathrm{out}}
=\left\lfloor\frac{H+2P-K}{S}\right\rfloor+1,
\qquad
W_{\mathrm{out}}
=\left\lfloor\frac{W+2P-K}{S}\right\rfloor+1
$$

### IoU 交并比

两个框 $A$、$B$ 的 IoU 为交集面积除以并集面积：

$$
\operatorname{IoU}(A,B)
=\frac{|A\cap B|}{|A\cup B|}
=\frac{|A\cap B|}{|A|+|B|-|A\cap B|}
$$

手算时先由坐标求交集矩形的宽和高，再求交集、并集与比值；两个框没有重叠时 IoU 为 0。

### R-CNN 系列的区别和结构

| 模型 | 候选区域 | 特征计算 | 核心变化 |
|---|---|---|---|
| R-CNN | Selective Search | 每个候选区域分别过 CNN | 把 CNN 引入候选区域检测，计算重复、流程分离 |
| Fast R-CNN | Selective Search | 整图只过一次 CNN，再做 RoI Pooling | 共享卷积特征，联合完成分类与边界框回归 |
| Faster R-CNN | RPN | 与检测头共享卷积特征 | 用可学习的 RPN 替代 Selective Search，形成端到端两阶段检测器 |

复习时不要只背“越来越快”，而要能画出数据流，并指出 **Fast R-CNN 仍依赖外部候选区域，Faster R-CNN 才由 RPN 生成候选区域**。NMS、IoU 和三代 R-CNN 的课件结构见[第十讲 · 目标检测](/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/11-lesson-10-object-detection/)。

### ViT 的核心想法

ViT 把图像切成固定大小的 patch，将每个 patch 展平并线性映射成 token；在序列前加入分类用的 `[CLS]` token，再加入位置编码，送入 Transformer Encoder，最后用 `[CLS]` 的表示完成分类。

一句话概括：**把二维图像改写成 patch token 序列，再用原本处理文本序列的 Transformer 建模全局关系。** 课程中的完整流程见[第八讲 · 图像分类、ViT 与 Swin Transformer](/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/09-lesson-08-image-classification-vit-swin/)。

## 四、信息边界

- **可以确认：** 上面列出的考点名称来自前人回忆。
- **适合作为复习范围：** SVM 的完整知识链、R-CNN 系列的标准结构，以及各计算题的通用做法。
- **仍不确定：** KKT 和软间隔是否实际出题、每个考点的题型与分值、计算题参数、题干措辞及官方答案。

因此，这篇文章只能叫“期末考点（前人回忆）”，不能当作一份真题。复习时先按这份清单抓重点，再用[考前速成清单](/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/15-exam-cram-checklist/)串起全课。
