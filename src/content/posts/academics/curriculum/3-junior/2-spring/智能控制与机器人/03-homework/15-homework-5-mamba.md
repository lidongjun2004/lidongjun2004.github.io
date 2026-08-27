---
title: "作业五 · 从状态空间法到 Mamba"
description: "沿 HiPPO、S4 与 Mamba 的发展脉络理解规律嵌入和状态空间模型"
date: 2026-08-23
tags: ["数学", "作业"]
---

## 题目

阅读 Mamba 及其相关论文，沿 HiPPO、S4、Mamba 的发展脉络，分析“**规律嵌入**”的人工智能方法，并结合自动控制中的状态空间法谈谈理解。

核心阅读材料为：

1. A. Gu, K. Goel, C. Ré. *Efficiently Modeling Long Sequences with Structured State Spaces*. ICLR 2022；
2. A. Gu, T. Dao. *Mamba: Linear-Time Sequence Modeling with Selective State Spaces*. 2023；
3. A. Gu et al. *HiPPO: Recurrent Memory with Optimal Polynomial Projections*. NeurIPS 2020；
4. R. E. Kalman. *A New Approach to Linear Filtering and Prediction Problems*. 1960。

<details class="exam-answer">
<summary>查看参考解答</summary>

### 1. 什么是规律嵌入

全连接网络和 Transformer 主要依靠数据与梯度下降学习规律，通用性强，但数据需求大，模型内部结构与真实动力学之间没有必然联系。

“规律嵌入”是把已经掌握的数学结构、物理定律或系统约束直接写进模型，作为归纳偏置，而不是让网络从零重新发现。模型仍然可以从数据中学习参数，同时继承先验带来的效率、稳定性或可解释性。

典型例子包括：

- PINN 把偏微分方程写进损失函数；
- Neural ODE 用神经网络参数化连续动力学；
- S4 和 Mamba 把控制论的状态空间模型写进序列网络结构。

### 2. 状态空间模型提供记忆骨架

线性时不变系统可写成

$$\dot x(t)=Ax(t)+Bu(t),$$

$$y(t)=Cx(t)+Du(t).$$

机器学习中的状态空间模型使用相同思想：

$$h'(t)=Ah(t)+Bx(t),$$

$$y(t)=Ch(t).$$

隐状态 $h$ 把此前的输入历史压缩为固定维度记忆，再映射成输出。把这套成熟的动态系统结构作为序列模型骨架，就是第一层规律嵌入。

### 3. 连续模型的离散化

数字计算机处理的是离散序列。S4/Mamba 用步长 $\Delta$ 和零阶保持把连续参数离散化：

$$\bar A=\exp(\Delta A),$$

$$\bar B=(\Delta A)^{-1}\left(\exp(\Delta A)-I\right)\Delta B.$$

离散后得到类似 RNN 的递推：

$$h_k=\bar Ah_{k-1}+\bar Bx_k,$$

$$y_k=Ch_k.$$

这一步把连续系统离散化的信号处理规律也嵌入了模型。

### 4. S4：长程记忆和卷积并行

朴素状态空间模型不容易稳定地保存很长的历史。S4 采用 HiPPO 理论推导的特殊状态矩阵，让隐状态用正交多项式更有效地压缩历史，并为 $A$ 施加结构化约束，使计算可行。

由于 S4 仍是线性时不变系统，递推可以展开为卷积核：

$$\bar K=\left(C\bar B,C\bar A\bar B,\ldots,C\bar A^k\bar B,\ldots\right),$$

$$y=x*\bar K.$$

因此训练时可以像 CNN 一样并行卷积，推理时则像 RNN 一样只保留上一步状态。

### 5. Mamba：选择性状态空间模型

S4 的 $A,B,C$ 对所有 token 固定，难以根据内容选择性地记住或遗忘信息。Mamba 的 Selective SSM 让 $\Delta,B,C$ 由当前输入动态生成，$\bar A=\exp(\Delta A)$ 也因此间接随输入变化。

模型于是能根据内容决定：

- 什么信息写进状态；
- 什么历史继续保留；
- 当前从状态中读出什么。

参数随输入变化后，系统不再是线性时不变系统，不能直接化成统一卷积。Mamba 通过并行扫描、CUDA 核融合和反向重计算恢复效率，使序列长度方向的复杂度保持近似 $O(L)$。

演化主线可以概括为：

```text
状态空间模型 → HiPPO/LSSL → S4 → S5/H3 → Selective SSM → Mamba
```

### 6. 规律嵌入带来的价值

Mamba 没有放弃神经网络的学习能力，而是加入三类先验：

1. 控制论的状态空间动力学；
2. HiPPO 的长程历史压缩规律；
3. 连续系统离散化和扫描计算规律。

这使模型在长序列上获得更低的计算与显存成本，也让结构和控制理论之间存在清晰联系。

对智能控制而言，这种方法说明“模型驱动”和“数据驱动”并非只能二选一。可以把被控对象动力学、稳定性条件、能量守恒等先验嵌入学习控制器，再用数据学习未知部分。例如用 PINN 做系统辨识、Neural ODE 学连续动力学、SSM 做传感器时序建模，都属于相同思路。

### 7. 局限

- Mamba 的选择性扫描原生适合一维因果序列，迁移到图像和点云需要多方向扫描；
- 大规模训练仍可能面对梯度与数值稳定性问题；
- 固定维度隐状态压缩历史时仍可能损失信息；
- 理论先验选错时，归纳偏置也可能限制模型表达能力。

结论是：规律嵌入不是用理论完全取代数据，而是用可靠先验限制学习空间，让模型把数据和算力集中在真正未知的部分。

</details>
