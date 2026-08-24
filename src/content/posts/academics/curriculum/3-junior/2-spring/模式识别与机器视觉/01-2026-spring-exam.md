---
title: "2026 年春真题（回忆版）"
description: "模式识别与机器视觉 2026 年春季期末考试回忆题与可折叠参考解析，包含选择、填空与解答题"
date: 2026-08-22
updated: 2026-08-23
tags: ["数学", "真题"]
---

这份试卷来自考后回忆，不是原卷扫描件。题型和考点可以确认，部分题干措辞以及选择题选项已经记不清，因此这里只保留能够可靠复原的内容，不补造选项。

题型结构为：**选择题 10 题、填空题 10 空、解答题 5 题**。建议限时完成，每道题作答后再手动展开下方解析。

折叠内容不是课程提供的官方标准答案，而是根据考后回忆和现有课件整理的参考解析。回忆难免有偏差，不能把题干措辞当作原卷逐字转写。

## 一、选择题

原题均为四选一，选项未能完整回忆。

**1.** 一维正态分布的两类类条件密度在原判别点处相等。当先验概率由 $P(\omega_1)=P(\omega_2)$ 变为 $P(\omega_1)>P(\omega_2)$ 时，最小错误率决策面向哪个方向移动？

<details class="exam-answer">
<summary>查看第 1 题答案与解析</summary>

参考答案：朝**先验较小的类别 $\omega_2$ 一侧**移动，使 $\omega_1$ 的判决区域扩大。由似然比规则 $l(x)=\frac{p(x\mid\omega_1)}{p(x\mid\omega_2)}\gtrless\frac{P(\omega_2)}{P(\omega_1)}$：先验相等时阈值为 1，边界落在两密度交点；$P(\omega_1)>P(\omega_2)$ 时阈值 $<1$，更容易判 $\omega_1$，边界向 $\omega_2$ 的均值方向推。一句话：**先验大的类"吃掉"更多地盘**。

</details>

**2.** 关于最大似然估计中未知参数 $\theta$ 的含义以及求解方法，哪项表述正确？

<details class="exam-answer">
<summary>查看第 2 题答案与解析</summary>

参考答案：MLE 把待估参数 $\theta$ 看作**未知的确定常数**（不是随机变量），通过最大化似然函数 $L(\theta)=\prod_i p(x_i\mid\theta)$ 求 $\hat\theta$，**不引入参数先验**。这是与贝叶斯估计（把 $\theta$ 当随机变量、需要先验）的根本区别。

</details>

**3.** Fisher 线性判别中，最优投影方向 $\mathbf{w}$ 满足什么关系？

<details class="exam-answer">
<summary>查看第 3 题答案与解析</summary>

参考答案：$\mathbf{w}^*\propto S_w^{-1}(\mathbf{m}_1-\mathbf{m}_2)$，即最大化 Rayleigh 商 $J_F(\mathbf{w})=\frac{\mathbf{w}^{\mathsf T}S_b\mathbf{w}}{\mathbf{w}^{\mathsf T}S_w\mathbf{w}}$（类间散度 / 类内散度）的方向。

</details>

**4.** SVM 引入核函数的主要目的是什么？

<details class="exam-answer">
<summary>查看第 4 题答案与解析</summary>

参考答案：把原空间线性不可分的样本**隐式映射到高维特征空间**使其线性可分，并用核技巧 $K(\mathbf{x},\mathbf{z})=\phi(\mathbf{x})^{\mathsf T}\phi(\mathbf{z})$ 直接在低维算高维内积，**避免显式高维映射**带来的维度灾难。

</details>

**5.** PCA 选择主成分方向时优化的目标是什么？

<details class="exam-answer">
<summary>查看第 5 题答案与解析</summary>

参考答案：寻找一组正交主成分方向，使数据投影后**方差最大**（等价于**重构误差最小**），实现降维与去相关。主成分 = 协方差矩阵最大特征值对应的特征向量。

</details>

**6.** 目标检测任务与图像分类任务的主要区别是什么？

<details class="exam-answer">
<summary>查看第 6 题答案与解析</summary>

参考答案：在图像中找出**所有感兴趣目标的位置（边界框）并判定其类别**，即"定位 + 分类"。区别于图像分类（只输出类别）与语义分割（像素级标注）。

</details>

**7.** Faster R-CNN 中 RPN 的作用是什么？

<details class="exam-answer">
<summary>查看第 7 题答案与解析</summary>

参考答案：RPN（Region Proposal Network，区域候选网络）在共享特征图上滑窗，基于 anchor 同时输出"前景 / 背景"二分类得分与边界框回归量，**生成高质量候选区域**，取代 Selective Search，使候选框生成与检测网络共享特征、端到端且高效。

</details>

**8.** 转置卷积通常用于什么场景？

<details class="exam-answer">
<summary>查看第 8 题答案与解析</summary>

参考答案：需要**上采样、放大特征图分辨率**时使用，如语义分割解码器（FCN / U-Net 恢复到原图尺寸）、生成模型解码器（GAN / 自编码器从低维特征生成高分辨率图像）、超分辨率等。

</details>

**9.** self-attention 在计算两个 token 的匹配程度时使用哪两个量？

<details class="exam-answer">
<summary>查看第 9 题答案与解析</summary>

参考答案：**Query（查询）与 Key（键）**。注意力权重由 Query 与 Key 的点积相似度经 softmax 得到，再对 Value 加权求和。

</details>

**10.** CLIP 实现 zero-shot 分类的依据是什么？

<details class="exam-answer">
<summary>查看第 10 题答案与解析</summary>

参考答案：CLIP 通过图文对比学习把图像与文本嵌入**同一向量空间**。zero-shot 分类时把类别名写成文本提示（如 "a photo of a {class}"）编码为文本向量，与图像向量算**余弦相似度**，取最相似者——依据就是**图像-文本在共享嵌入空间的相似度对齐**。

</details>

## 二、填空题

**1.** 训练样本带有标签的学习称为______；训练样本没有标签、需要自行发现结构的学习称为______。

<details class="exam-answer">
<summary>查看第 1 题答案与解析</summary>

- 监督学习：训练样本**带标签** $(\mathbf{x}, y)$，学习从输入到输出 / 类别的映射；
- 无监督学习：训练样本**无标签**，仅由 $\mathbf{x}$ 自身的结构发现规律（如聚类、降维）。

</details>

**2.** 感知机准则函数的作用是______。

<details class="exam-answer">
<summary>查看第 2 题答案与解析</summary>

（考场没复习到，这里补全）

- 感知机准则函数 $J_p(\mathbf{w})=\sum_{\mathbf{x}\in\mathcal{M}}(-\mathbf{w}^{\mathsf T}\mathbf{x})$，$\mathcal{M}$ 为当前被错分的样本集；
- 用处：作为**优化目标度量误分类程度**，对错分样本用 $\mathbf{w}\leftarrow\mathbf{w}+\rho\,\mathbf{x}$ 迭代修正权向量，线性可分时算法收敛，最终得到线性判别函数。

</details>

**3.** 已知指数分布

$$
p(x;\lambda)=\lambda e^{-\lambda x},\qquad x\ge 0,
$$

根据样本 $x_1,\dots,x_N$ 求参数 $\lambda$ 的最大似然估计：$\hat\lambda=$______。

<details class="exam-answer">
<summary>查看第 3 题答案与解析</summary>

- 对数似然 $\ell(\lambda)=N\ln\lambda-\lambda\sum_i x_i$，求导置零 $\frac{N}{\lambda}-\sum_i x_i=0$；
- 解得 $\hat\lambda=\dfrac{N}{\sum_i x_i}=\dfrac{1}{\bar x}$（样本均值的倒数）。

</details>

**4.** K-means 每轮重新计算的“汇聚点”称为______，其值等于______。

<details class="exam-answer">
<summary>查看第 4 题答案与解析</summary>

- 即**聚类中心（簇质心，centroid）** $\boldsymbol\mu_k$，每轮更新为该簇所有样本的均值。

</details>

**5.** PCA 的目标是______；LDA 的目标是______。（回忆中的题面可能误写成了 LCA。）

<details class="exam-answer">
<summary>查看第 5 题答案与解析</summary>

- PCA：**最大化投影方差 / 保留主要信息**，无监督；
- LDA：**最大化类间距离、最小化类内距离**（使类别可分），有监督。

</details>

**6.** CNN 中常用的两种下采样方法是______和______。

<details class="exam-answer">
<summary>查看第 6 题答案与解析</summary>

- **最大池化（max pooling）** 与 **平均池化（average pooling）**（广义上步长卷积 strided convolution 也可下采样）。

</details>

**7.** R-CNN 系列属于______阶段检测器，YOLO 属于______阶段检测器。

<details class="exam-answer">
<summary>查看第 7 题答案与解析</summary>

- R-CNN 系列是**两阶段**（先出候选区域，再分类 + 回归）；YOLO 是**单阶段**（直接回归框与类别）。

</details>

**8.** GAN 由______和______两个网络组成。

<details class="exam-answer">
<summary>查看第 8 题答案与解析</summary>

- **生成器（Generator）** 与 **判别器（Discriminator）**，二者对抗训练。

</details>

**9.** Diffusion 的基本过程是先______，再______。

<details class="exam-answer">
<summary>查看第 9 题答案与解析</summary>

- 先**前向扩散（逐步加噪）** 把数据加噪成近似高斯噪声，后**反向去噪（逐步采样）** 由网络从噪声还原 / 生成数据。

</details>

**10.** 在大规模预训练模型基础上，使用下游任务数据继续训练以适配任务的过程称为______。

<details class="exam-answer">
<summary>查看第 10 题答案与解析</summary>

（考场没复习到，这里补全）

- 在**大规模预训练模型**基础上，用下游任务数据**继续训练、调整参数**以适配该任务；可全参微调，也可只调部分层或用参数高效微调（LoRA / Adapter / prompt tuning 等）降低成本。

</details>

## 三、解答题

### 第 1 题：贝叶斯决策

1. 给定先验概率和类条件概率密度，写出后验概率的计算公式，并说明最小错误率判决规则。
2. 比较最小错误率原则与最小风险原则。
3. 当两类误判代价不对称时，说明决策边界会如何变化；结合“漏诊代价远高于误诊代价”的情形解释方向。

<details class="exam-answer">
<summary>查看第 1 题答案与解析</summary>

（a）给定先验与类条件概率，用贝叶斯公式算后验——最基础的一类计算：

$$P(\omega_i\mid\mathbf{x})=\frac{p(\mathbf{x}\mid\omega_i)P(\omega_i)}{\sum_j p(\mathbf{x}\mid\omega_j)P(\omega_j)}$$

取后验最大的类即最小错误率判决。

（b）辨析最小错误率原则 vs 最小风险（最小代价）原则的结果差异、分界线左移还是右移：

- 0-1 损失下两者**完全等价**（最小错误率是最小风险的特例）；
- 代价不对称时，最小风险会朝"**减少高代价错误**"的方向移动分界线；
- 例：漏诊（真患病却判健康）代价远高于误诊，则要**扩大判"患病"的判决区域**，分界线朝"健康类"一侧推——把更多边界样本判成患病。方向口诀：**哪类漏判更贵，就把分界线往另一侧推、扩大该类的判决域**；
- 详见贝叶斯决策章笔记的白血病例子（最小错误率判健康、最小风险判患病的"结论反转"）。

</details>

### 第 2 题：支持向量机

1. 写出线性可分 SVM 的基本优化问题。
2. 写出软间隔约束中的松弛变量，并解释正则参数 $C$ 的作用。
3. 什么是支持向量？删除所有非支持向量后，最优分类面是否改变？说明原因。

<details class="exam-answer">
<summary>查看第 2 题答案与解析</summary>

- 定义：在样本线性可分的前提下，寻找使**分类间隔最大**的超平面的判别式方法；
- 优化目标（基本型）：

$$\min_{\mathbf{w},b}\ \tfrac12\|\mathbf{w}\|^2\quad\text{s.t.}\quad t_n(\mathbf{w}^{\mathsf T}\mathbf{x}_n+b)\ge 1$$

- 软间隔的那个字母：**松弛变量 $\xi_n\ge 0$**，约束放松为 $t_n(\mathbf{w}^{\mathsf T}\mathbf{x}_n+b)\ge 1-\xi_n$，目标加惩罚项 $C\sum_n\xi_n$；
- $C$：正则参数，权衡准确性与泛化——$C$ 大则重罚违规、间隔窄、易过拟合；$C$ 小则容忍违规、间隔宽、泛化好；
- 支持向量的定义：满足 $a_n>0$ 的样本（恰落在间隔边界 $t_n y(\mathbf{x}_n)=1$ 上，软间隔下也包括越界点）；
- **删掉所有非支持向量，分割面不变**：因为 $\mathbf{w}=\sum_n a_n t_n\mathbf{x}_n$ 中非支持向量的 $a_n=0$，对 $\mathbf{w}, b$ 零贡献——这正是 SVM 得名的原因。

</details>

### 第 3 题：目标检测

1. 比较单阶段与两阶段目标检测器的流程、速度与精度特点。
2. 写出 IoU 的定义。
3. 说明非极大值抑制 NMS 的完整执行过程。

<details class="exam-answer">
<summary>查看第 3 题答案与解析</summary>

- 单阶段 vs 两阶段：
  - **两阶段**（R-CNN / Fast / Faster R-CNN）：先生成候选区域（RPN 或 Selective Search），再对候选框分类 + 边界框回归；准确率高、速度慢；
  - **单阶段**（YOLO / SSD）：在特征图上**密集地直接回归**框与类别，无显式候选阶段；速度快、适合实时，精度（尤其小目标）略逊。
- IoU（交并比）：

$$\text{IoU}=\frac{\text{两框交集面积}}{\text{两框并集面积}}$$

取值 $[0,1]$，衡量预测框与真值框的重叠程度，常以 0.5 为正样本阈值。

- 非极大值抑制（NMS）原则：同一目标常被预测出多个重叠框，**按置信度从高到低排序，选最高分框保留，删除与它 IoU 超过阈值的其余框，对剩下的框重复该过程**，直到无框可删——即"**每个目标只保留得分最高的框，抑制与之高度重叠的冗余框**"。

</details>

### 第 4 题：Transformer 与 ViT

1. 写出由输入 $\mathbf{X}$ 计算 $\mathbf{Q}$、$\mathbf{K}$、$\mathbf{V}$ 的公式。
2. 写出缩放点积注意力公式，并解释缩放因子 $\sqrt{d_k}$ 的作用。
3. 说明 ViT 如何把一张图像转换成 Transformer 可以处理的序列，并完成图像分类。

<details class="exam-answer">
<summary>查看第 4 题答案与解析</summary>

- 给定输入 $\mathbf{X}$，三组可学习投影得到 Query / Key / Value：

$$\mathbf{Q}=\mathbf{X}\mathbf{W}_Q,\quad \mathbf{K}=\mathbf{X}\mathbf{W}_K,\quad \mathbf{V}=\mathbf{X}\mathbf{W}_V$$

- 缩放点积注意力：

$$\text{Attention}(\mathbf{Q},\mathbf{K},\mathbf{V})=\text{softmax}\!\left(\frac{\mathbf{Q}\mathbf{K}^{\mathsf T}}{\sqrt{d_k}}\right)\mathbf{V}$$

其中除以 $\sqrt{d_k}$ 是缩放因子，防止点积过大把 softmax 推到梯度极小的区域。

- ViT 原理：把图像切成固定大小的 **patch**，每个 patch 展平后线性投影成 token 嵌入，加上**位置编码**和一个 **[CLS] 分类 token**，整体送入标准 Transformer 编码器；最后取 [CLS] 的输出经 MLP 头做分类。核心思想：**把图像当作 patch 序列，用纯注意力机制替代卷积**来建模全局依赖。

</details>

### 第 5 题：GAN 与 Diffusion

从生成机制、训练稳定性、采样速度、生成质量与多样性几个角度，比较 GAN 与 Diffusion 的相同点和不同点。

<details class="exam-answer">
<summary>查看第 5 题答案与解析</summary>

| 维度 | GAN | Diffusion |
|---|---|---|
| 机制 | 生成器 vs 判别器**对抗**，一步生成 | **前向加噪 + 反向去噪**，多步迭代 |
| 训练 | 不稳定，易**模式崩溃** | 稳定，目标简单（预测噪声） |
| 采样 | **快**（单次前向） | **慢**（需多步去噪） |
| 质量 / 多样性 | 图像锐利但多样性偏弱 | 质量高、覆盖分布全、多样性好 |

- 相同点：都是**生成模型**，本质都是从随机噪声生成逼真样本；
- GAN：优势是采样快、细节锐利；短板是训练不稳定、易模式崩溃、多样性不足；
- Diffusion：优势是训练稳定、质量与多样性俱佳；短板是采样慢、算力开销大（后续有 DDIM、模型蒸馏等加速手段）。

</details>

---

这份回忆卷最值得注意的不是某一道题，而是考试结构：上半部分偏公式、推导和计算，下半部分偏模型机制、流程比较和概念解释。

> 以上凭记忆整理，题干与选项可能有偏差，参考答案对照各章笔记与考前速成清单复习即可。本卷考查重心很清楚：**模式识别上半部分仍是计算主力（贝叶斯、MLE、SVM、PCA/LDA、k-means），机器视觉下半部分以概念与定义为主（目标检测、Transformer/ViT、GAN/Diffusion、CLIP）**。
