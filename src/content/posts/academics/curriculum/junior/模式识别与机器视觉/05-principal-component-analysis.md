---
title: "主成分分析 PCA（含 LDA 对比）"
description: "最大方差与最小误差两个视角殊途同归、协方差特征值分解、计算步骤与数值例、PCA 与 LDA 的本质区别"
date: 2026-06-19
tags: ["模式识别", "PCA", "LDA", "课程笔记", "复习"]
---

PCA 是无监督降维的代表。本节核心结论一句话：**两个看似不同的目标（最大方差 / 最小误差），最后都归到协方差矩阵的特征值分解**。

## 一、动机

把高维相关数据压成低维，又尽量不丢信息。做法：找数据"铺得最开（方差最大）"的方向投影。方差大的方向区分度高、信息多；方差小的方向点挤成团，往往是噪声，可丢弃。

PCA 定义：把原有众多有相关性的指标，重新组合成一组**少量互相无关**的综合指标。两个等价目标：

1. **最大方差**：降维后样本方差尽可能大；
2. **最小均方误差**：降维后重建回原空间的误差尽可能小。

两个目标推到底结论相同——都取协方差矩阵**最大特征值**对应的特征向量。

## 二、最大方差视角

数据 $\{\mathbf{x}_n\}$（$n=1,\dots,N$），每点 $D$ 维，先降到 1 维，投影方向为单位向量 $\mathbf{u}_1$（$\mathbf{u}_1^{\mathsf{T}}\mathbf{u}_1 = 1$）。点投影后坐标为 $\mathbf{u}_1^{\mathsf{T}}\mathbf{x}_n$。

投影后样本方差可化简为：

$$\frac{1}{N}\sum_{n=1}^{N}\left(\mathbf{u}_1^{\mathsf{T}}\mathbf{x}_n - \mathbf{u}_1^{\mathsf{T}}\bar{\mathbf{x}}\right)^2 = \mathbf{u}_1^{\mathsf{T}} \mathbf{S}\, \mathbf{u}_1$$

其中 $\mathbf{S}$ 为原数据协方差矩阵：

$$\mathbf{S} = \frac{1}{N}\sum_{n=1}^{N}(\mathbf{x}_n - \bar{\mathbf{x}})(\mathbf{x}_n - \bar{\mathbf{x}})^{\mathsf{T}}$$

目标：在 $\mathbf{u}_1^{\mathsf{T}}\mathbf{u}_1 = 1$ 约束下最大化 $\mathbf{u}_1^{\mathsf{T}}\mathbf{S}\mathbf{u}_1$。用拉格朗日乘子法构造 $\mathbf{u}_1^{\mathsf{T}}\mathbf{S}\mathbf{u}_1 + \lambda_1(1 - \mathbf{u}_1^{\mathsf{T}}\mathbf{u}_1)$，对 $\mathbf{u}_1$ 求导置零得：

$$\mathbf{S}\, \mathbf{u}_1 = \lambda_1 \mathbf{u}_1$$

这正是**特征值方程**：最优投影方向是 $\mathbf{S}$ 的特征向量。代回得投影后方差 $\mathbf{u}_1^{\mathsf{T}}\mathbf{S}\mathbf{u}_1 = \lambda_1$，所以应取**最大特征值**对应的特征向量：

$$\mathbf{u}_1 = \mathbf{S}\ \text{最大特征值对应的特征向量} = \text{第一主成分}$$

降到 $M$ 维则取前 $M$ 大特征值对应的 $M$ 个特征向量。由于 $\mathbf{S}$ 对称、特征向量正交，各主成分天然**互不相关**。

## 三、最小均方误差视角

建一组标准正交基 $\{\mathbf{u}_i\}$（$\mathbf{u}_i^{\mathsf{T}}\mathbf{u}_j = \delta_{ij}$），点可精确展开 $\mathbf{x}_n = \sum_{i=1}^{D}\alpha_{ni}\mathbf{u}_i$，$\alpha_{ni} = \mathbf{x}_n^{\mathsf{T}}\mathbf{u}_i$。只保留前 $M$ 维、其余用共享常数近似，得重建 $\tilde{\mathbf{x}}_n$。

失真度（均方误差）：

$$J = \frac{1}{N}\sum_{n=1}^{N}\|\mathbf{x}_n - \tilde{\mathbf{x}}_n\|^2 = \sum_{i=M+1}^{D}\mathbf{u}_i^{\mathsf{T}}\mathbf{S}\mathbf{u}_i$$

拉格朗日求解同样得到 $\mathbf{S}\mathbf{u}_i = \lambda_i \mathbf{u}_i$，失真度变为**被丢弃方向的特征值之和**：

$$J = \sum_{i=M+1}^{D}\lambda_i$$

要 $J$ 最小，就丢掉最小的 $D-M$ 个特征值、保留最大的 $M$ 个。**与最大方差视角殊途同归**。

## 四、计算步骤

1. 计算样本均值 $\bar{\mathbf{x}}$ 和协方差矩阵 $\mathbf{S}$；
2. 计算 $\mathbf{S}$ 的特征值与特征向量；
3. 特征值从大到小排序，取前 $M$ 个特征值对应的特征向量构成投影矩阵；降维即数据乘投影矩阵。

数值例：4 个已中心化的点 $(2,0), (0,2), (-2,0), (0,-2)$。协方差 $\mathbf{S} = \dfrac{1}{4}\begin{pmatrix} 8 & 0 \\ 0 & 8 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$，特征值 $\lambda_1 = \lambda_2 = 2$（对称，无主次）。

若改为椭圆分布 $(4,0),(0,1),(-4,0),(0,-1)$，则 $\mathbf{S} = \begin{pmatrix} 8 & 0 \\ 0 & 0.5 \end{pmatrix}$，$\lambda_1 = 8 \gg \lambda_2 = 0.5$，第一主成分为 $(1,0)$。

> 考试常给 2×2 协方差矩阵，让你解特征值（$\det(\mathbf{S} - \lambda\mathbf{I}) = 0$）和特征向量。

## 五、应用与优缺点

应用直觉：特征值谱通常前几个大、后面骤降到接近 0（提示用前几维即可，小特征值方向多为噪声）；失真度随保留维度 $M$ 增大而减小。

**优点**：

1. 普适性高，最大程度保留原数据信息；
2. 可按主成分重要性排序，按需降维 / 压缩；
3. 小特征值方向多与噪声相关，可去噪；
4. 完全无参数，结果只由数据决定。

**局限**：

1. 假设关系是线性的；
2. 假设高信噪比（默认大方差为主成分，可能误删方差小但关键的方向）；
3. 假设数据近似指数型（高斯类）分布。

## 六、PCA vs LDA

LDA（Linear Discriminant Analysis，线性判别分析，又称 Fisher 判别）也是投影降维，但目标与 PCA **相反**：让投影后不同类离得最远、同类挤得最紧，专为"好分类"服务。

| 对比项 | PCA | LDA |
| --- | --- | --- |
| 目标 | 保留最多信息（投影方差最大） | 类别最易区分 |
| 标签 | 不用（无监督） | 用（有监督） |
| 可能问题 | 投影后不同类可能混在一起 | 专为分类，类间分得开 |

LDA 核心（够用即可）：类间散度 $S_b = (\mathbf{m}_1 - \mathbf{m}_2)(\mathbf{m}_1 - \mathbf{m}_2)^{\mathsf{T}}$（越大越好），类内散度 $S_w = S_1 + S_2$（越小越好）。Fisher 准则最大化类间 / 类内之比：

$$J_F(\mathbf{w}) = \frac{\mathbf{w}^{\mathsf{T}} S_b\, \mathbf{w}}{\mathbf{w}^{\mathsf{T}} S_w\, \mathbf{w}}$$

最优投影方向：

$$\mathbf{w}^* = S_w^{-1}(\mathbf{m}_1 - \mathbf{m}_2)$$

一句话：**PCA 求"信息保留最多"，LDA 求"类别分得最开"**。

## 本节考点清单

- 两个视角（最大方差 / 最小误差）都归到 $\mathbf{S}\mathbf{u} = \lambda\mathbf{u}$，取最大 / 丢最小特征值。
- 协方差矩阵公式、失真度 $J = \sum_{i=M+1}^{D}\lambda_i$。
- 2×2 协方差矩阵**手解特征值 + 特征向量**。
- PCA 优缺点（尤其三条线性 / 高信噪比 / 高斯假设的局限）。
- **PCA vs LDA**：无监督 vs 有监督、保信息 vs 分类别，Fisher 准则与最优方向 $\mathbf{w}^* = S_w^{-1}(\mathbf{m}_1 - \mathbf{m}_2)$。
