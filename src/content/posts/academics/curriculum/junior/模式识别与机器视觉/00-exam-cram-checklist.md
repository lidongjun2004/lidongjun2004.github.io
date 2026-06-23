---
title: "考前速成必会清单"
description: "考前最后一晚必背：推不出来、做题却要用的硬结论、固定阈值、易错方向与套路口诀"
date: 2026-06-24
tags: ["模式识别", "考前速成", "复习", "课程笔记"]
---

> 这篇只收**临场推不出来、做题却要用**的东西：要背的结论、固定公式、容易记反的方向、解题套路。能现场推的过程（完整对偶推导、各分布 MLE 求导）不在这里——那些靠理解，这些靠记。考前过一遍，进考场。

## 一、贝叶斯决策

**贝叶斯公式**（闭眼能写）：

$$P(\omega_i \mid \mathbf{x}) = \frac{p(\mathbf{x} \mid \omega_i)P(\omega_i)}{p(\mathbf{x})}, \qquad p(\mathbf{x}) = \sum_j p(\mathbf{x}\mid\omega_j)P(\omega_j)$$

**最小错误率**：选后验最大的类。等价于选 $p(\mathbf{x}\mid\omega_i)P(\omega_i)$ 最大（分母相同可省）。

**最小错误率似然比阈值**（要背，方向别反）：

$$l(\mathbf{x}) = \frac{p(\mathbf{x}\mid\omega_1)}{p(\mathbf{x}\mid\omega_2)} > \frac{P(\omega_2)}{P(\omega_1)} \implies \text{判 } \omega_1$$

记法：似然比是「1 比 2」，阈值先验是「2 比 1」，**上下颠倒**。

**最小风险——三步法**（做题主流程）：

1. 算后验 $P(\omega_j\mid\mathbf{x})$；
2. 算每个决策的条件风险 $R(\alpha_i\mid\mathbf{x}) = \sum_j \lambda_{ij}\,P(\omega_j\mid\mathbf{x})$；
3. 取风险**最小**的决策（是 min，不是 max！）。

> 易错点：损失下标 $\lambda_{ij}$ = 真实为 $\omega_j$、却判成 $\alpha_i$ 的损失。算 $R(\alpha_1\mid\mathbf{x})$ 时用第一行 $\lambda_{11},\lambda_{12}$ 配后验。

**最小风险两类似然比阈值**（带损失因子，容易写错）：

$$\frac{p(\mathbf{x}\mid\omega_1)}{p(\mathbf{x}\mid\omega_2)} > \frac{P(\omega_2)}{P(\omega_1)}\cdot\frac{\lambda_{12}-\lambda_{22}}{\lambda_{21}-\lambda_{11}} \implies \text{判 } \omega_1$$

**两者关系（必考简答）**：0-1 损失（$\lambda_{ii}=0,\lambda_{ij}=1$）下，最小风险**退化为**最小错误率。即最小错误率是最小风险的特例。

**结论会反转**：同一题，最小错误率判 A、最小风险可能判 B——因为代价不对称（漏诊比误诊贵）。记住"宁可误诊不可漏诊"这个方向。

## 二、最大似然估计（MLE）

**直接背结果**（做题不必每次推）：

| 分布 | MLE | 备注 |
|---|---|---|
| 高斯 $\mu$ | $\hat\mu = \frac{1}{N}\sum x_i$ | 样本均值 |
| 高斯 $\sigma^2$ | $\hat\sigma^2 = \frac{1}{N}\sum(x_i-\hat\mu)^2$ | **分母 $N$，有偏偏小** |
| 伯努利 | $\hat p = k/N$ | 频率 |
| 指数 $\lambda e^{-\lambda x}$ | $\hat\lambda = 1/\bar x$ | 均值倒数 |
| 泊松 | $\hat\lambda = \bar x$ | 就是均值 |
| 均匀 $U(0,\theta)$ | $\hat\theta = \max_i x_i$ | **不能求导！** |

**均匀分布陷阱**（高频）：似然 $\theta^{-N}$ 求导无零点。理由背熟：$\theta^{-N}$ 递减想要 $\theta$ 小，约束 $\theta\ge\max x_i$，夹逼得 $\hat\theta=\max_i x_i$。

**有偏无偏（必考结论）**：

- 高斯方差 MLE **有偏、偏小**，$E[\hat\sigma^2] = \frac{N-1}{N}\sigma^2$；
- 无偏修正用 $N-1$：$s^2 = \frac{1}{N-1}\sum(x_i-\bar x)^2$；
- 原因一句话：用 $\bar x$ 顶替真 $\mu$，消耗 1 个自由度。

**多维高斯**：$\hat{\boldsymbol\mu}$ = 样本均值；$\hat{\boldsymbol\Sigma} = \frac{1}{N}\sum(\mathbf{x}_k-\hat{\boldsymbol\mu})(\mathbf{x}_k-\hat{\boldsymbol\mu})^{\mathsf T}$。$\hat{\boldsymbol\mu}$ 与 $\Sigma$ 是否已知无关。

## 三、SVM

**±1 标签**：$t_n\in\{+1,-1\}$，正确分类 $\iff t_n y(\mathbf{x}_n)>0$。

**基本型**（背）：

$$\min \tfrac{1}{2}\|\mathbf{w}\|^2 \quad \text{s.t.}\quad t_n(\mathbf{w}^{\mathsf T}\mathbf{x}_n+b)\ge 1$$

间隔 = $\dfrac{1}{\|\mathbf{w}\|}$；最大化间隔 = 最小化 $\frac12\|\mathbf{w}\|^2$。

**两个必背关系**（对偶求导结果，做题直接用）：

$$\mathbf{w} = \sum_n a_n t_n \mathbf{x}_n, \qquad \sum_n a_n t_n = 0$$

**KKT 互补松弛**（支持向量的判据）：

$$a_n\big(t_n y(\mathbf{x}_n)-1\big)=0$$

- $a_n=0$ → 非支持向量（间隔外，没用）；
- $a_n>0$ → **支持向量**，恰在间隔边界 $t_n y(\mathbf{x}_n)=1$。

**手算套路**（两三个点的题，照走）：

1. 用 $\sum_n a_n t_n=0$ 减少未知数；
2. 写 $\mathbf{w}=\sum_n a_n t_n\mathbf{x}_n$；
3. 对每个支持向量列 $t_n(\mathbf{w}^{\mathsf T}\mathbf{x}_n+b)=1$；
4. 解方程组得 $a,\mathbf{w},b$；$b$ 可由支持向量反解（多个取平均）。

**软间隔**：约束放成 $t_n y(\mathbf{x}_n)\ge 1-\xi_n$，目标加 $C\sum\xi_n$。

- 对偶唯一变化：$0\le a_n\le C$（外加 $\sum_n a_n t_n=0$）；
- **$C$ 方向别记反**：$C$ 大 → 重罚违规、间隔窄、易过拟合；$C$ 小 → 容忍违规、间隔宽、泛化好；
- 口诀：**只有 $a_n=C$ 的点才越界**（$0<a_n<C$ 恰在边界）。

## 四、PCA / LDA

**协方差矩阵**：$\mathbf{S} = \frac{1}{N}\sum(\mathbf{x}_n-\bar{\mathbf{x}})(\mathbf{x}_n-\bar{\mathbf{x}})^{\mathsf T}$。

**核心结论**：主成分 = $\mathbf{S}$ 的**最大特征值**对应的特征向量；投影后方差 = 该特征值 $\lambda$。降到 $M$ 维取前 $M$ 大。

**失真度**（最小误差视角）：$J = \sum_{i=M+1}^{D}\lambda_i$ = 丢掉的特征值之和。

**2×2 求特征值套路**（计算题必用）：解 $\det(\mathbf{S}-\lambda\mathbf{I})=0$ → 得 $\lambda$ → 回代 $(\mathbf{S}-\lambda\mathbf{I})\mathbf{u}=0$ 求特征向量。

**PCA 三条局限（简答）**：假设线性、假设大方差=主成分（高信噪比）、假设近高斯分布。

**PCA vs LDA（高频对比）**：

| | PCA | LDA |
|---|---|---|
| 目标 | 方差最大、保信息 | 类别分得最开 |
| 标签 | **无监督** | **有监督** |

- LDA = Fisher 判别；准则 $J_F(\mathbf{w}) = \dfrac{\mathbf{w}^{\mathsf T}S_b\mathbf{w}}{\mathbf{w}^{\mathsf T}S_w\mathbf{w}}$（类间/类内）；
- 最优方向背：$\mathbf{w}^* = S_w^{-1}(\mathbf{m}_1-\mathbf{m}_2)$；
- $S_b=(\mathbf{m}_1-\mathbf{m}_2)(\mathbf{m}_1-\mathbf{m}_2)^{\mathsf T}$，$S_w=S_1+S_2$。

## 五、K 均值

**准则函数**：$J = \sum_n\sum_k r_{nk}\|\mathbf{x}_n-\boldsymbol\mu_k\|^2$（硬分配 $r_{nk}\in\{0,1\}$）。

**两步（E/M 对应，必考）**：

- E 步（分配）：每点归最近中心，$r_{nk}=1$ 当 $k=\arg\min_j\|\mathbf{x}_n-\boldsymbol\mu_j\|^2$；
- M 步（更新）：$\boldsymbol\mu_k = \dfrac{\sum_n r_{nk}\mathbf{x}_n}{\sum_n r_{nk}}$ = 该类均值。

**与 GMM/EM 关系（高频简答）**：K 均值 = **硬分配**；GMM+EM = **软分配**（按概率部分归属）。K 均值是 GMM 的硬分配特例。

**肘部法则**：$J$-$K$ 曲线由陡变缓的拐点定 $K$。

## 六、零散硬记点（容易问、推不出）

- **三大流派**：① 类条件密度（参数法 / 非参数法）② 判别函数（感知机/Fisher/SVM）③ 相似度。
- **非参数估计三件套**：直方图、$k$ 近邻、Parzen（核）窗。
- **监督 vs 非监督**：有没有标签 $y$。聚类是非监督。
- **生成式 vs 判别式**：生成式建模 $p(\mathbf{x}\mid\omega)$（贝叶斯）；判别式直接学边界（SVM、Logistic）。
- **一致最优 / 贝叶斯错误率**：贝叶斯决策逐点条件错误率 $P(e\mid\mathbf{x})=1-\max_i P(\omega_i\mid\mathbf{x})$ 最小，是错误率理论下界。

---

**进考场前默背三件最易错**：① 似然比阈值上下别反（似然 1/2，先验 2/1）；② 最小风险取 **min**、高斯方差 MLE 分母 **$N$** 且偏小（无偏才 $N-1$）；③ SVM 软间隔 $C$ 大=窄间隔易过拟合、$a_n=C$ 才越界。加油，稳住！
