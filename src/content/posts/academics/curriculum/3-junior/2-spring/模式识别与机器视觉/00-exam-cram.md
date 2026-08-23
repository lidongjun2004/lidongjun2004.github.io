---
title: "速成 · 模式识别与机器视觉"
description: "按课程上下两部分串起贝叶斯决策、MLE、SVM、PCA、K 均值，以及分类、分割、检测和视觉大模型"
date: 2026-08-22
updated: 2026-08-23
tags: ["模式识别与机器视觉", "数学"]
---

这门课正好分成上下两部分：上半段是传统模式识别，关心怎样从概率、间隔和投影中得到决策；下半段是机器视觉，关心怎样让网络从像素中学习表示，再完成分类、分割、检测和生成。

这篇按这个顺序压缩全课。上半段以模式识别复习课件为准，保留能直接用于计算的公式；下半段按韦星星的期末 PPT 展开。目录里的 2025 年前人回忆只用于提醒哪些计算容易遗漏，不把它当作原卷，也不据此推断考频。

使用时先读每节开头的主线，再遮住例子自己算一遍。卡在推导细节时，再回到对应讲次。

一套完整的模式识别系统通常按“信息获取 → 预处理 → 特征选择或提取 → 分类器训练 → 对新样本决策”运行。后面的贝叶斯、SVM、PCA 和 K 均值，分别落在分类、特征处理或无监督组织数据的环节。

## 一、贝叶斯决策

**贝叶斯公式**：

$$P(\omega_i \mid \mathbf{x}) = \frac{p(\mathbf{x} \mid \omega_i)P(\omega_i)}{p(\mathbf{x})}, \qquad p(\mathbf{x}) = \sum_j p(\mathbf{x}\mid\omega_j)P(\omega_j)$$

**最小错误率**：选后验最大的类。等价于选 $p(\mathbf{x}\mid\omega_i)P(\omega_i)$ 最大（分母相同可省）。

**最小错误率似然比阈值**（注意比值方向）：

$$l(\mathbf{x}) = \frac{p(\mathbf{x}\mid\omega_1)}{p(\mathbf{x}\mid\omega_2)} > \frac{P(\omega_2)}{P(\omega_1)} \implies \text{判 } \omega_1$$

记法：似然比是「1 比 2」，阈值先验是「2 比 1」，**上下颠倒**。

**最小风险三步法**：

1. 算后验 $P(\omega_j\mid\mathbf{x})$；
2. 算每个决策的条件风险 $R(\alpha_i\mid\mathbf{x}) = \sum_j \lambda_{ij}\,P(\omega_j\mid\mathbf{x})$；
3. 取风险最小的决策。

> 易错点：损失下标 $\lambda_{ij}$ = 真实为 $\omega_j$、却判成 $\alpha_i$ 的损失。算 $R(\alpha_1\mid\mathbf{x})$ 时用第一行 $\lambda_{11},\lambda_{12}$ 配后验。

**最小风险两类似然比阈值**（带损失因子，容易写错）：

$$\frac{p(\mathbf{x}\mid\omega_1)}{p(\mathbf{x}\mid\omega_2)} > \frac{P(\omega_2)}{P(\omega_1)}\cdot\frac{\lambda_{12}-\lambda_{22}}{\lambda_{21}-\lambda_{11}} \implies \text{判 } \omega_1$$

**两者关系**：0-1 损失（$\lambda_{ii}=0,\lambda_{ij}=1$）下，最小风险**退化为**最小错误率。即最小错误率是最小风险的特例。

一个很短的自测：若后验为 $(0.7,0.3)$，损失矩阵为

$$
\boldsymbol\lambda=
\begin{bmatrix}
0&4\\
1&0
\end{bmatrix},
$$

则 $R(\alpha_1\mid\mathbf{x})=1.2$，$R(\alpha_2\mid\mathbf{x})=0.7$。最小错误率会选第一类，最小风险却会选第二个决策；差别来自错误代价不对称。

## 二、最大似然估计（MLE）

一类 MLE 计算都按同一套顺序走：写联合似然 $L(\theta)$，取对数得到 $\ell(\theta)$，求导并令其为零，再检查参数范围和边界。独立样本让概率相乘，取对数后就变成求和。

常见结果如下：

| 分布 | MLE | 备注 |
|---|---|---|
| 高斯 $\mu$ | $\hat\mu = \frac{1}{N}\sum x_i$ | 样本均值 |
| 高斯 $\sigma^2$ | $\hat\sigma^2 = \frac{1}{N}\sum(x_i-\hat\mu)^2$ | **分母 $N$，有偏偏小** |
| 伯努利 | $\hat p = k/N$ | 频率 |
| 指数 $\lambda e^{-\lambda x}$ | $\hat\lambda = 1/\bar x$ | 均值倒数 |
| 泊松 | $\hat\lambda = \bar x$ | 就是均值 |
| 均匀 $U(0,\theta)$ | $\hat\theta = \max_i x_i$ | 驻点法无解，最优值在约束边界 |

**均匀分布的约束**：似然 $\theta^{-N}$ 求导无零点。因为 $\theta^{-N}$ 递减，而参数又必须满足 $\theta\ge\max x_i$，所以 $\hat\theta=\max_i x_i$。

**有偏与无偏**：

- 高斯方差 MLE **有偏、偏小**，$E[\hat\sigma^2] = \frac{N-1}{N}\sigma^2$；
- 无偏修正用 $N-1$：$s^2 = \frac{1}{N-1}\sum(x_i-\bar x)^2$；
- 用 $\bar x$ 代替真实均值 $\mu$ 会消耗 1 个自由度。

**多维高斯**：$\hat{\boldsymbol\mu}$ = 样本均值；$\hat{\boldsymbol\Sigma} = \frac{1}{N}\sum(\mathbf{x}_k-\hat{\boldsymbol\mu})(\mathbf{x}_k-\hat{\boldsymbol\mu})^{\mathsf T}$。$\hat{\boldsymbol\mu}$ 与 $\Sigma$ 是否已知无关。

最小计算量的自测是样本 $\{1,2,3\}$：高斯均值 MLE 为 $2$，方差 MLE 为

$$
\frac{(1-2)^2+(2-2)^2+(3-2)^2}{3}=\frac{2}{3}.
$$

如果误写成除以 $N-1$，算到的是无偏样本方差，不是方差的 MLE。

## 三、SVM

令标签 $t_n\in\{+1,-1\}$，判别函数为 $f(\mathbf{x})=\mathbf{w}^{\mathsf T}\mathbf{x}+b$。符号 $t_nf(\mathbf{x}_n)$ 同时表示分类方向和离边界的程度：大于 0 表示分对，大于等于 1 表示还满足间隔要求。

线性可分时，硬间隔原问题是

$$
\min_{\mathbf{w},b}\frac{1}{2}\|\mathbf{w}\|^2
\quad \text{s.t.}\quad
t_n f(\mathbf{x}_n)\ge 1.
$$

两条间隔边界间的宽度为 $2/\|\mathbf{w}\|$，单侧几何间隔为 $1/\|\mathbf{w}\|$。因此最大化间隔等价于最小化 $\frac12\|\mathbf{w}\|^2$。

对偶问题为

$$
\max_{\mathbf{a}}
\sum_n a_n-
\frac{1}{2}\sum_n\sum_m
a_na_m t_nt_m\mathbf{x}_n^{\mathsf T}\mathbf{x}_m,
$$

约束为 $a_n\ge0$ 与 $\sum_n a_nt_n=0$。由驻点条件得到

$$\mathbf{w} = \sum_n a_n t_n \mathbf{x}_n, \qquad \sum_n a_n t_n = 0$$

硬间隔的互补松弛条件是

$$a_n\big(t_n f(\mathbf{x}_n)-1\big)=0$$

- $a_n=0$：通常位于间隔之外，不影响最终超平面；
- $a_n>0$：约束必须取等号，点位于间隔边界，是支持向量。

少量样本的手算可以按四步完成：

1. 用 $\sum_n a_n t_n=0$ 减少未知数；
2. 写 $\mathbf{w}=\sum_n a_n t_n\mathbf{x}_n$；
3. 对每个支持向量列 $t_n(\mathbf{w}^{\mathsf T}\mathbf{x}_n+b)=1$；
4. 解方程组得 $a,\mathbf{w},b$；$b$ 可由支持向量反解（多个取平均）。

线性不可分时引入松弛变量：

$$
\min_{\mathbf{w},b,\boldsymbol\xi}
\frac12\|\mathbf{w}\|^2+C\sum_n\xi_n,
\quad
\text{s.t.}\quad
t_nf(\mathbf{x}_n)\ge1-\xi_n,
\quad \xi_n\ge0.
$$

软间隔的 KKT 条件除了可行性和驻点条件，还包括

$$
a_n\big[t_nf(\mathbf{x}_n)-1+\xi_n\big]=0,
\qquad
(C-a_n)\xi_n=0,
\qquad
0\le a_n\le C.
$$

- $C$ 大时对违规惩罚更重、正则化更弱；$C$ 小时允许更多违规、正则化更强。
- $a_n=0$：通常在间隔外；
- $0<a_n<C$：$\xi_n=0$ 且 $t_nf(\mathbf{x}_n)=1$，恰在间隔边界；
- $a_n=C$：位于间隔内或被错分，也可能退化地落在边界上，不能只凭 $a_n=C$ 判断是否错分。

核方法只替换内积，不必显式构造高维映射：

$$
f(\mathbf{x})=
\sum_{n\in SV}a_nt_nK(\mathbf{x}_n,\mathbf{x})+b.
$$

常见的 RBF 核为 $K(\mathbf{x},\mathbf{z})=\exp(-\gamma\|\mathbf{x}-\mathbf{z}\|^2)$。核函数决定相似度，$C$ 控制间隔与训练误差的权衡，二者不要混在一起解释。

## 四、PCA / LDA

**协方差矩阵**：$\mathbf{S} = \frac{1}{N}\sum(\mathbf{x}_n-\bar{\mathbf{x}})(\mathbf{x}_n-\bar{\mathbf{x}})^{\mathsf T}$。

**主成分的选择**：主成分 = $\mathbf{S}$ 的**最大特征值**对应的特征向量；投影后方差 = 该特征值 $\lambda$。降到 $M$ 维取前 $M$ 大。

**失真度**（最小误差视角）：$J = \sum_{i=M+1}^{D}\lambda_i$ = 丢掉的特征值之和。

**2×2 特征值计算步骤**：解 $\det(\mathbf{S}-\lambda\mathbf{I})=0$ → 得 $\lambda$ → 回代 $(\mathbf{S}-\lambda\mathbf{I})\mathbf{u}=0$ 求特征向量。

**PCA 的局限**：只能寻找线性投影；把大方差方向当作主要信息，在低信噪比数据上可能选中噪声；只利用协方差等二阶统计量，可能忽略非线性或高阶结构。PCA 本身不要求数据服从高斯分布。

**PCA vs LDA**：

| | PCA | LDA |
|---|---|---|
| 目标 | 方差最大、保信息 | 类别分得最开 |
| 标签 | **无监督** | **有监督** |

- LDA = Fisher 判别；准则 $J_F(\mathbf{w}) = \dfrac{\mathbf{w}^{\mathsf T}S_b\mathbf{w}}{\mathbf{w}^{\mathsf T}S_w\mathbf{w}}$（类间/类内）；
- 最优方向背：$\mathbf{w}^* = S_w^{-1}(\mathbf{m}_1-\mathbf{m}_2)$；
- $S_b=(\mathbf{m}_1-\mathbf{m}_2)(\mathbf{m}_1-\mathbf{m}_2)^{\mathsf T}$，$S_w=S_1+S_2$。

## 五、K 均值

**准则函数**：$J = \sum_n\sum_k r_{nk}\|\mathbf{x}_n-\boldsymbol\mu_k\|^2$（硬分配 $r_{nk}\in\{0,1\}$）。

**两步交替（对应 E/M）**：

- E 步（分配）：每点归最近中心，$r_{nk}=1$ 当 $k=\arg\min_j\|\mathbf{x}_n-\boldsymbol\mu_j\|^2$；
- M 步（更新）：$\boldsymbol\mu_k = \dfrac{\sum_n r_{nk}\mathbf{x}_n}{\sum_n r_{nk}}$ = 该类均值。

**与 GMM/EM 的关系**：K 均值是**硬分配**；GMM+EM 通常是**软分配**。各高斯分量具有相同球形协方差和相同混合权重时，取硬分配会得到 K 均值式更新；也可以从共同协方差趋近于零的小方差极限理解两者关系。

**肘部法则**：$J$-$K$ 曲线由陡变缓的拐点定 $K$。

## 六、其他概念

- **三大流派**：① 类条件密度（参数法 / 非参数法）② 判别函数（感知机/Fisher/SVM）③ 相似度。
- **非参数估计三件套**：直方图、$k$ 近邻、Parzen（核）窗。
- **监督 vs 非监督**：有没有标签 $y$。聚类是非监督。
- **生成式 vs 判别式**：生成式建模 $p(\mathbf{x}\mid\omega)$（贝叶斯）；判别式直接学边界（SVM、Logistic）。
- **一致最优 / 贝叶斯错误率**：贝叶斯决策逐点条件错误率 $P(e\mid\mathbf{x})=1-\max_i P(\omega_i\mid\mathbf{x})$ 最小，是错误率理论下界。

## 七、CNN、图像描述与 Transformer

CNN 利用三条图像先验：局部连接减少参数，权重共享让同一特征可以出现在不同位置，下采样逐步降低空间分辨率。卷积层学习局部特征，堆叠后感受野逐渐覆盖整个物体。

对输入 $X$ 和卷积核 $K$，深度学习框架通常计算不翻转卷积核的互相关：

$$
Y(i,j)=\sum_m\sum_nX(i+m,j+n)K(m,n).
$$

例如

$$
X=
\begin{bmatrix}
1&2&0\\
0&1&3\\
2&1&1
\end{bmatrix},
\qquad
K=
\begin{bmatrix}
1&0\\
0&-1
\end{bmatrix}.
$$

在步长 1、无填充时，左上角输出是 $1\times1+2\times0+0\times0+1\times(-1)=0$，完整输出为

$$
Y=
\begin{bmatrix}
0&-1\\
-1&0
\end{bmatrix}.
$$

尺寸题分别计算高和宽：

$$
H_{out}=\left\lfloor\frac{H+2P-K_h}{S}\right\rfloor+1,
\qquad
W_{out}=\left\lfloor\frac{W+2P-K_w}{S}\right\rfloor+1.
$$

若有 $C_{in}$ 个输入通道和 $C_{out}$ 个卷积核，带偏置的参数量为

$$
(K_hK_wC_{in}+1)C_{out}.
$$

最大池化保留窗口最大值；转置卷积用于上采样；空洞卷积通过拉开采样位置扩大感受野。

课件用图像描述任务把 CNN、RNN 和 Attention 连成一条线：

$$
\text{图像}
\longrightarrow
\text{CNN 空间特征 }z_1,\ldots,z_L
\longrightarrow
\text{Attention 上下文 }c_t
\longrightarrow
\text{RNN 逐词生成}.
$$

没有 Attention 时，CNN 特征常被压成固定初始状态，后续各词都依赖这份摘要。加入 Attention 后，每生成一个词都会重新选择图像区域：

$$
e_{t,i}=f_{att}(h_{t-1},z_i),
\qquad
\alpha_{t,i}=\frac{\exp(e_{t,i})}{\sum_j\exp(e_{t,j})},
\qquad
c_t=\sum_i\alpha_{t,i}z_i.
$$

因此生成“人”和“帽子”时可以查看不同区域。这里要说清的不是网络名字，而是 Attention 让每个时间步获得不同的上下文。

Self-Attention 把同一序列同时映射成 Query、Key 和 Value：

$$
Q=XW_Q,\qquad K=XW_K,\qquad V=XW_V,
$$

$$
\operatorname{Attention}(Q,K,V)
=\operatorname{softmax}\left(\frac{QK^{\mathsf T}}{\sqrt{d_k}}\right)V.
$$

- Query 与 Key 计算匹配程度，得到的权重再对 Value 求和；
- $\sqrt{d_k}$ 防止点积随维度变大而让 softmax 过早饱和；
- 多头注意力在不同表示子空间中并行建模关系；
- Self-Attention 本身没有顺序概念，需要位置编码；
- RNN 必须按时间步顺序计算，Transformer 可以并行并直接连接远距离位置。

## 八、ViT、Swin 与 SAM

ViT 把图像切成互不重叠的 patch，展平后线性投影成 token，再加入位置编码与 `[CLS]` token，送入 Transformer Encoder，最后用 `[CLS]` 表示分类。

Patch 数量：

$$
N=\frac{H}{P}\frac{W}{P}.
$$

标准全局注意力对 token 数 $N$ 的主要复杂度是 $O(N^2)$。Swin 用分层结构、Patch Merging、窗口注意力 W-MSA 和移位窗口 SW-MSA 解决高分辨率图像的计算问题：固定窗口限制计算范围，下一层平移窗口，让原本分属不同窗口的 token 交换信息。

分割先要区分三种输出：

- 语义分割：像素分类，不区分同类实例；
- 实例分割：每个对象单独掩码；
- 全景分割：覆盖整图并区分实例。

常见分割网络采用编码器—解码器结构：编码器提取语义并降采样，解码器恢复空间分辨率，跳跃连接补回边缘和定位细节。

课件中的演进线是：FCN 把分类网络改成像素预测，U-Net 用对称解码器和跳跃连接恢复细节，PSPNet / DeepLab 汇集多尺度上下文，Mask R-CNN 在检测框上增加掩码分支，SETR、Swin-UNet 和 Segmenter 再把 Transformer 引入分割。

SAM 由 image encoder、prompt encoder 和 mask decoder 组成。前者提取 ViT 图像特征，中间部分编码点、框、文字或已有掩码等提示，轻量解码器融合二者并输出掩码。一个点可能同时指向局部、对象或更大区域，因此模型会给出多个候选掩码及质量分数。

**SAM 数据引擎**：模型辅助手动 → 半自动 → 全自动；SA-1B 约 1100 万图、11 亿掩码。

## 九、目标检测

**两类检测器**：两阶段方法先生成候选框，再分类和精修；一阶段方法一次前向直接预测。它们的速度与精度差异还取决于具体架构和训练方法。

IoU 只看几何重叠：

$$
\operatorname{IoU}=\frac{\text{交集面积}}{\text{并集面积}}.
$$

例如 $A=(0,0,4,4)$、$B=(2,1,5,5)$，两框面积分别为 16 和 12，交集面积为 $2\times3=6$，因此

$$
\operatorname{IoU}(A,B)=\frac{6}{16+12-6}=\frac{3}{11}.
$$

NMS 在每个类别内按置信度排序，保留最高分框，删除与它 IoU 超过阈值的其余框，再从剩余框中重复。若阈值为 $0.5$，三个框分数为 $0.9,0.8,0.7$，且最高分框与后两框的 IoU 分别为 $0.65,0.20$，则第二个框被抑制，第三个框保留。IoU 是算重叠，NMS 是用重叠做筛选，两步不要混写。

R-CNN 系列的变化可以放在同一张表里看：

| 模型 | 候选框从哪里来 | CNN 怎样运行 | 主要变化 |
|---|---|---|---|
| R-CNN | Selective Search | 每个候选框单独跑 CNN | 流程分段，重复卷积很多 |
| SPP-Net | Selective Search | 整图只卷一次 | SPP 把任意区域变成定长表示 |
| Fast R-CNN | Selective Search | 共享整图特征 | ROI Pooling 后联合做分类与框回归 |
| Faster R-CNN | RPN | 共享整图特征 | Anchor + RPN 也由网络生成候选框 |

RPN 在共享特征图的每个位置放置多种尺度和长宽比的 anchor，对每个 anchor 做前景/背景二分类和粗回归；检测头再做具体类别分类和细回归。Fast R-CNN 与 Faster R-CNN 的关键差别就在于候选框仍由 Selective Search 给出，还是改由 RPN 学出来。

**指标**：

$$
\operatorname{Precision}=\frac{TP}{TP+FP},
\qquad
\operatorname{Recall}=\frac{TP}{TP+FN}.
$$

Precision 看误检，Recall 看漏检；AP 针对单类，mAP 对所有类别求平均。

**YOLO v1**：$7\times7$ 网格，每格 2 框、20 类：

$$
7\times7\times(2\times5+20)=7\times7\times30.
$$

物体中心落在哪格，哪格负责；confidence $=P(\text{Object})\times\operatorname{IoU}$。

YOLO 属于一阶段检测器，不先生成一批 proposal。课件中的 YOLO v2 改进包括 Batch Normalization、高分辨率分类器、Anchor Boxes、用 K 均值选择框尺寸、直接位置预测、passthrough 细粒度特征和多尺度训练；主干网络采用 Darknet-19。

## 十、GAN 与 Diffusion

GAN 由生成器 $G$ 和判别器 $D$ 组成。$G$ 把随机噪声变成样本，$D$ 判断输入来自真实数据还是生成器：

$$
\min_G\max_D
\mathbb{E}_{x\sim p_{data}}[\log D(x)]
+\mathbb{E}_{z\sim p_z}[\log(1-D(G(z)))].
$$

固定 $G$ 时，最优判别器为

$$
D^*(x)=\frac{p_{data}(x)}{p_{data}(x)+p_g(x)}.
$$

理想收敛时 $p_g=p_{data}$、$D^*(x)=1/2$。训练时交替更新两方；为缓解原始生成器目标在早期的梯度问题，常把生成器损失改成 $-\log D(G(z))$。模式崩溃指不同噪声被映射到少数相似样本。

**Diffusion**：前向固定加噪，反向网络去噪。

$$
x_t=\sqrt{1-\beta_t}x_{t-1}+\sqrt{\beta_t}\epsilon,
$$

$$
x_t=\sqrt{\bar\alpha_t}x_0+\sqrt{1-\bar\alpha_t}\epsilon.
$$

训练时随机抽 $t$，给 $x_0$ 加到对应强度的噪声，再让 UNet 预测这次加入的 $\epsilon$：

$$
\mathcal{L}=\mathbb{E}\left[\|\epsilon-\epsilon_\theta(x_t,t)\|^2\right].
$$

训练可以随机选单个时间步，生成却要从噪声出发按时间反复去噪。课件中的对比可以概括为：GAN 一次前向即可生成，但对抗训练容易失衡；Diffusion 的训练目标更直接，代价是多步采样较慢。

## 十一、对比学习、CLIP 与 PEFT

对比学习把同一对象的两种视图作为正样本，把其他对象作为负样本，在表示空间中拉近正对、推远负对。InfoNCE 可以理解为：给定一个表示，在一批候选中识别与它正确配对的另一个表示。

CLIP 用图像编码器和文本编码器得到两个共享空间中的向量。在 batch 内构造 $N\times N$ 图文相似度矩阵，对角线是配对图文，非对角线是负样本，并同时计算图找文、文找图两个方向的分类损失。

**CLIP zero-shot**：类别套入 `a photo of a {class}` → 编码成文本向量 → 与图像向量算相似度 → 取最大类别。

**PEFT**：冻结大模型主体，只训练少量参数。

- Prompt Tuning：训练输入端连续 Soft Prompt；
- Adapter：每层插入下采样—激活—上采样的瓶颈模块；
- LoRA：冻结 $W_0$，只学低秩增量 $\Delta W=BA$，推理前可合并回原权重。

## 十二、合上文章后的自测

按下面的顺序口述或手算一遍，哪里停住就回看对应讲次：

1. 给出先验、类条件密度和损失矩阵，先算后验，再比较两个条件风险。
2. 对一组高斯样本算 $\hat\mu$ 和方差 MLE，并解释为什么分母是 $N$。
3. 从硬间隔原问题写出 $\mathbf{w}=\sum a_nt_n\mathbf{x}_n$，再按 $a_n=0$、$0<a_n<C$、$a_n=C$ 解释样本位置。
4. 给一个 $2\times2$ 协方差矩阵，求最大特征值对应方向；再说清 PCA 与 LDA 是否使用标签。
5. 给定初始聚类中心，完成一次“分配—更新”，并计算新的类中心。
6. 手算一次二维卷积，同时根据 $H,W,K,P,S$ 算输出尺寸。
7. 从 CNN 空间特征开始，讲清 RNN + Attention 怎样生成一条图像描述。
8. 从 patch token 讲到 ViT，再说明 Swin 为什么需要窗口和移位窗口。
9. 区分语义、实例和全景分割，并说出 SAM 的三个组件。
10. 手算两个框的 IoU，再执行一轮 NMS；对比 R-CNN、Fast R-CNN、Faster R-CNN 与 YOLO 的数据流。
11. 分别用一句话说明 GAN 的对抗目标与 Diffusion 的加噪—去噪过程。
12. 画出 CLIP 的 $N\times N$ 相似度矩阵，并比较 Prompt Tuning、Adapter 和 LoRA 改了模型的哪一部分。

完成这十二项自测后，再回到对应讲次补完整推导和具体算例。
