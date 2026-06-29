---
title: "K 均值聚类（附全章公式速查表）"
description: "聚类准则、交替优化的 EM 思想、算法步骤、与 GMM 的硬软分配关系、肘部法则；文末附上半部分全公式速查"
date: 2026-06-18
tags: ["模式识别", "K均值", "聚类", "课程笔记", "复习"]
---

K 均值是无监督聚类的代表算法。本节讲清"准则 → 两步交替 → 收敛"，并辨析它与 GMM/EM 的关系。文末附**上半部分全公式速查表**，考前急救用。

## 一、监督 vs 非监督

监督学习数据带标签（学"特征 → 标签"映射，如贝叶斯、SVM）；非监督学习数据无标签，需自行发现结构。**聚类是非监督的典型任务**——把无标签的点按相似度自动分组。K 均值是最经典的聚类算法。

## 二、问题与准则函数

给定 $D$ 维空间上的数据 $\{\mathbf{x}_1, \dots, \mathbf{x}_N\}$，不知类别，目标分成 $K$ 类。做法：给每类设代表点（中心）$\boldsymbol{\mu}_k$，每个样本归到离它最近的中心。

定义聚类标注 $r_{nk}$：若样本 $\mathbf{x}_n$ 属于第 $k$ 类则 $r_{nk} = 1$，否则 0（**硬分配**，每个样本只归一类）。

准则函数（每个点到所属中心的距离平方和）：

$$J = \sum_{n=1}^{N}\sum_{k=1}^{K} r_{nk}\|\mathbf{x}_n - \boldsymbol{\mu}_k\|^2$$

$J$ 越小聚类越紧凑。目标是调整分组 $r_{nk}$ 和中心 $\boldsymbol{\mu}_k$ 使 $J$ 最小。

## 三、两步走（交替优化，EM 思想）

难点：$r_{nk}$ 与 $\boldsymbol{\mu}_k$ 互相依赖，无法同时解。办法是**固定一个、优化另一个，交替进行**。

**第一步（固定中心，优化分组，对应 E 步）**：每点归到最近中心。

$$r_{nk} = \begin{cases} 1 & k = \arg\min_j \|\mathbf{x}_n - \boldsymbol{\mu}_j\|^2 \\ 0 & \text{其他} \end{cases}$$

**第二步（固定分组，优化中心，对应 M 步）**：对 $J$ 关于 $\boldsymbol{\mu}_k$ 求导置零，$2\sum_n r_{nk}(\mathbf{x}_n - \boldsymbol{\mu}_k) = 0$，解得：

$$\boldsymbol{\mu}_k = \frac{\sum_n r_{nk}\mathbf{x}_n}{\sum_n r_{nk}}$$

即中心 = 该类所有点的均值（重心）。"**K 均值**"之名由此而来。

## 四、算法步骤

1. 初始化 $K$ 个中心 $\boldsymbol{\mu}_k$；
2. **分配**：每个样本归到最近中心（算 $r_{nk}$）；
3. **更新**：每个中心移到所属类的均值处（更新 $\boldsymbol{\mu}_k$）；
4. 循环第 2、3 步直到中心不再变化（收敛）。

## 五、与 EM 的关系

两步分别对应 EM 的 E 步（分配责任）与 M 步（更新参数）。区别：**K 均值是硬分配**（$r_{nk}$ 只取 0/1），**GMM + EM 是软分配**（一个点按概率部分属于各类）。故 K 均值是 GMM（用 EM 求解）的硬分配特例。这是高频考点。

## 六、如何确定 K：肘部法则

K 越大 $J$ 越小（极端时每点自成一类、$J=0$），但收益递减。把不同 $K$ 对应的最小 $J$ 画成曲线，曲线由陡降转平缓的拐点（形如手肘）对应较合理的 $K$。

## 本节考点清单

- 准则函数 $J$、硬分配 $r_{nk}$ 的定义。
- 两步交替优化、E/M 对应，中心更新为类均值的推导。
- **K 均值 = GMM 的硬分配特例**（与 EM 的软硬分配区别，必考）。
- 肘部法则定 $K$。

---

## 附录：上半部分核心公式速查表

考前急救用，覆盖整个模式识别部分。

### 贝叶斯决策

| 名称 | 公式 |
| --- | --- |
| 贝叶斯公式 | $P(\omega_i \mid \mathbf{x}) = \dfrac{p(\mathbf{x} \mid \omega_i)P(\omega_i)}{p(\mathbf{x})}$ |
| 最小错误率 | 选 $P(\omega_i \mid \mathbf{x})$ 最大的类 |
| 似然比规则 | $l(\mathbf{x}) = \dfrac{p(\mathbf{x} \mid \omega_1)}{p(\mathbf{x} \mid \omega_2)} \gtrless \dfrac{P(\omega_2)}{P(\omega_1)}$ |
| 条件风险 | $R(\alpha_i \mid \mathbf{x}) = \sum_j \lambda(\alpha_i \mid \omega_j)P(\omega_j \mid \mathbf{x})$ |
| 最小风险 | 选 $R(\alpha_i \mid \mathbf{x})$ 最小的决策 |
| 0-1 损失 | $R(\alpha_i \mid \mathbf{x}) = 1 - P(\omega_i \mid \mathbf{x})$，退化为最小错误率 |

### 最大似然估计

| 分布 | MLE 结果 |
| --- | --- |
| 高斯 $\mu$ | $\hat{\mu} = \dfrac{1}{N}\sum_i x_i$（样本均值） |
| 高斯 $\sigma^2$ | $\hat{\sigma}^2 = \dfrac{1}{N}\sum_i (x_i - \hat{\mu})^2$（分母 $N$，有偏） |
| 无偏方差 | $s^2 = \dfrac{1}{N-1}\sum_i (x_i - \bar{x})^2$ |
| 伯努利 | $\hat{p} = k/N$ |
| 指数 | $\hat{\lambda} = 1/\bar{x}$ |
| 泊松 | $\hat{\lambda} = \bar{x}$ |
| 均匀 $U(0,\theta)$ | $\hat{\theta} = \max_i x_i$（不能求导） |

### SVM

| 名称 | 公式 |
| --- | --- |
| 基本型 | $\min \dfrac{1}{2}\|\mathbf{w}\|^2$ s.t. $t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) \ge 1$ |
| 权向量 | $\mathbf{w} = \sum_n a_n t_n \mathbf{x}_n$ |
| 对偶约束 | 硬 $a_n \ge 0$；软 $0 \le a_n \le C$；都要 $\sum_n a_n t_n = 0$ |
| KKT 互补 | $a_n(t_n y(\mathbf{x}_n) - 1) = 0$ |
| 支持向量 | $a_n > 0$ 的点 |
| 软间隔目标 | $\min \dfrac{1}{2}\|\mathbf{w}\|^2 + C\sum_n \xi_n$ |

### PCA / LDA

| 名称 | 公式 |
| --- | --- |
| 协方差矩阵 | $\mathbf{S} = \dfrac{1}{N}\sum_n (\mathbf{x}_n - \bar{\mathbf{x}})(\mathbf{x}_n - \bar{\mathbf{x}})^{\mathsf{T}}$ |
| 主成分 | $\mathbf{S}\mathbf{u}_1 = \lambda_1 \mathbf{u}_1$，取最大特征值对应特征向量 |
| 失真度 | $J = \sum_{i=M+1}^{D} \lambda_i$ |
| LDA 准则 | $J_F(\mathbf{w}) = \dfrac{\mathbf{w}^{\mathsf{T}} S_b \mathbf{w}}{\mathbf{w}^{\mathsf{T}} S_w \mathbf{w}}$ |
| LDA 投影方向 | $\mathbf{w}^* = S_w^{-1}(\mathbf{m}_1 - \mathbf{m}_2)$ |

### K 均值

| 名称 | 公式 |
| --- | --- |
| 准则函数 | $J = \sum_n \sum_k r_{nk}\|\mathbf{x}_n - \boldsymbol{\mu}_k\|^2$ |
| 分配（E 步） | $r_{nk} = 1$ 当 $k = \arg\min_j \|\mathbf{x}_n - \boldsymbol{\mu}_j\|^2$ |
| 更新（M 步） | $\boldsymbol{\mu}_k = \dfrac{\sum_n r_{nk}\mathbf{x}_n}{\sum_n r_{nk}}$ |
