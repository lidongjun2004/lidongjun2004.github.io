---
title: "第四讲 · 贝叶斯学习"
description: "梳理先验、似然、后验、MAP 与最大似然估计，并展开朴素贝叶斯、参数估计、EM 与混合模型"
date: 2026-08-23
tags: ["AI"]
---

某项疾病检测呈阳性，而且检测对患者的检出率高达 $98\%$。受检者患病的概率是不是也接近 $98\%$？

不是。还必须考虑疾病本来有多罕见，以及健康人被误报为阳性的概率。贝叶斯学习的核心，就是把**观察数据带来的证据**与**观察之前已有的知识**合在一起，得到观察之后应当相信什么。

课件先介绍了 Thomas Bayes（1702—1761）：他把归纳推理引入概率论基础研究，相关著作包括 1758 年的《机会的学说概论》，以及身后于 1763 年发表的《论机会学说问题的求解》。今天以他命名的公式，正是在形式化“证据怎样改变信念”。

## 一、贝叶斯公式中的四个角色

给定假设 $h$ 和数据 $D$，贝叶斯公式为

$$
P(h\mid D)
=\frac{P(D\mid h)P(h)}{P(D)}.
$$

四个量各有明确职责：

| 名称 | 记号 | 含义 |
|---|---|---|
| 先验概率 | $P(h)$ | 看数据之前，对假设 $h$ 的相信程度 |
| 似然 | $P(D\mid h)$ | 若 $h$ 为真，观察到当前数据的可能性 |
| 证据 | $P(D)$ | 数据本身出现的总概率，用于归一化 |
| 后验概率 | $P(h\mid D)$ | 看过数据后，对 $h$ 的更新认识 |

一句话记忆就是

$$
\text{后验}
\propto
\text{似然}\times\text{先验}.
$$

先验也体现了一种归纳偏置：有限数据通常不足以唯一决定模型，学习器必须借助某种偏好在多个解释之间选择。

## 二、阳性不等于大概率患病

课件给出如下疾病检测数据：

$$
P(\text{cancer})=0.008,
\qquad
P(\neg\text{cancer})=0.992,
$$

$$
P(+\mid\text{cancer})=0.98,
\qquad
P(-\mid\text{cancer})=0.02,
$$

$$
P(+\mid\neg\text{cancer})=0.03,
\qquad
P(-\mid\neg\text{cancer})=0.97.
$$

现在观察到阳性。先计算两条产生阳性的路径：

$$
P(+\mid\text{cancer})P(\text{cancer})
=0.98\times0.008
=0.00784,
$$

$$
P(+\mid\neg\text{cancer})P(\neg\text{cancer})
=0.03\times0.992
=0.02976.
$$

于是

$$
\begin{aligned}
P(\text{cancer}\mid+)
&=\frac{0.00784}{0.00784+0.02976}\\
&\approx0.2085,
\end{aligned}
$$

而

$$
P(\neg\text{cancer}\mid+)\approx0.7915.
$$

直觉检查也很简单：在十万人中，约 $800$ 人患病，其中约 $784$ 人检测阳性；约 $99\,200$ 人不患病，其中约 $2\,976$ 人会被误报为阳性。阳性人群中真正患者的比例为

$$
\frac{784}{784+2976}\approx20.85\%.
$$

检测本身并不差，真正改变结论的是很低的基础患病率。这就是不能把 $P(+\mid\text{cancer})$ 与 $P(\text{cancer}\mid+)$ 混为一谈的原因。

## 三、MAP 与 ML

机器学习中常把候选模型写成假设空间 $H$。观察训练数据 $D$ 后，最大后验假设是

$$
\begin{aligned}
h_{\mathrm{MAP}}
&=\arg\max_{h\in H}P(h\mid D)\\
&=\arg\max_{h\in H}
\frac{P(D\mid h)P(h)}{P(D)}\\
&=\arg\max_{h\in H}P(D\mid h)P(h).
\end{aligned}
$$

$P(D)$ 对所有候选 $h$ 相同，所以求最优假设时可以省略。

若不知道先验，或假设各候选模型先验相同，即

$$
P(h_i)=P(h_j),
$$

那么 MAP 退化为最大似然：

$$
h_{\mathrm{ML}}
=\arg\max_{h\in H}P(D\mid h).
$$

二者的差别不在优化技巧，而在如何理解参数：

- ML 把参数视为确定但未知的量，只寻找最能解释数据的参数；
- 贝叶斯方法把参数视为随机变量，用先验描述观察数据前的不确定性；
- MAP 仍输出一个点估计，但这个点同时受数据与先验影响。

## 四、最大似然为何要取对数

设样本集

$$
K=\{x_1,x_2,\ldots,x_N\}
$$

由密度 $p(x\mid\boldsymbol\theta)$ 独立产生。似然函数为

$$
L(\boldsymbol\theta)
=p(K\mid\boldsymbol\theta)
=\prod_{k=1}^{N}p(x_k\mid\boldsymbol\theta).
$$

连乘既难求导，又容易出现数值下溢。因为对数函数严格单调，最大化 $L$ 等价于最大化对数似然：

$$
\ell(\boldsymbol\theta)
=\log L(\boldsymbol\theta)
=\sum_{k=1}^{N}\log p(x_k\mid\boldsymbol\theta).
$$

因此

$$
\hat{\boldsymbol\theta}_{\mathrm{ML}}
=\arg\max_{\boldsymbol\theta}
\sum_{k=1}^{N}\log p(x_k\mid\boldsymbol\theta).
$$

若最优点位于可微函数内部，通常令梯度为零：

$$
\left.
\nabla_{\boldsymbol\theta}
\ell(\boldsymbol\theta)
\right|_{\hat{\boldsymbol\theta}_{\mathrm{ML}}}
=\boldsymbol0.
$$

“乘法变加法”是对数似然如此常用的直接原因。

## 五、正态分布参数的最大似然估计

设一元正态分布参数为

$$
\theta_1=\mu,
\qquad
\theta_2=\sigma^2,
$$

概率密度为

$$
p(x_k\mid\mu,\sigma^2)
=\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left(
-\frac{(x_k-\mu)^2}{2\sigma^2}
\right).
$$

单样本对数密度是

$$
\log p(x_k\mid\mu,\sigma^2)
=-\frac12\log(2\pi\sigma^2)
-\frac{(x_k-\mu)^2}{2\sigma^2}.
$$

### 均值估计

对 $\mu$ 求导并令所有样本的导数和为零：

$$
\sum_{k=1}^{N}\frac{x_k-\mu}{\sigma^2}=0.
$$

得到

$$
\hat\mu_{\mathrm{ML}}
=\frac{1}{N}\sum_{k=1}^{N}x_k.
$$

正态总体均值的最大似然估计就是样本均值。

### 方差估计

继续对 $\sigma^2$ 求导，可得

$$
\hat\sigma^2_{\mathrm{ML}}
=\frac{1}{N}
\sum_{k=1}^{N}
(x_k-\hat\mu_{\mathrm{ML}})^2.
$$

这里分母是 $N$，因为它是最大似然估计。统计学中为了得到无偏样本方差，常把分母改成 $N-1$：

$$
s^2
=\frac{1}{N-1}
\sum_{k=1}^{N}(x_k-\bar x)^2.
$$

两者目标不同，不能只凭熟悉程度替换。

### 多元正态分布

对多元样本 $\boldsymbol x_k$，最大似然均值和协方差分别为

$$
\hat{\boldsymbol\mu}_{\mathrm{ML}}
=\frac{1}{N}\sum_{k=1}^{N}\boldsymbol x_k,
$$

$$
\hat\Sigma_{\mathrm{ML}}
=\frac{1}{N}
\sum_{k=1}^{N}
(\boldsymbol x_k-\hat{\boldsymbol\mu})
(\boldsymbol x_k-\hat{\boldsymbol\mu})^\top.
$$

相应的无偏样本协方差则使用 $1/(N-1)$。

## 六、MAP 如何加入先验

把未知参数记为随机变量 $\boldsymbol\theta$，先验为 $p(\boldsymbol\theta)$。给定样本集 $K$ 后，MAP 估计为

$$
\begin{aligned}
\hat{\boldsymbol\theta}_{\mathrm{MAP}}
&=\arg\max_{\boldsymbol\theta}
p(\boldsymbol\theta\mid K)\\
&=\arg\max_{\boldsymbol\theta}
p(K\mid\boldsymbol\theta)
p(\boldsymbol\theta).
\end{aligned}
$$

取负对数，就得到

$$
\hat{\boldsymbol\theta}_{\mathrm{MAP}}
=\arg\min_{\boldsymbol\theta}
\left[
-\log p(K\mid\boldsymbol\theta)
-\log p(\boldsymbol\theta)
\right].
$$

因此可以把先验理解成附加在数据损失上的偏好。似然负责“解释当前数据”，先验负责“在多个解释都说得通时，更偏向哪些参数”。

## 七、朴素贝叶斯分类器

设输入样例由 $n$ 个属性组成：

$$
\boldsymbol x=(a_1,a_2,\ldots,a_n),
$$

类别集合为 $V=\{v_1,\ldots,v_K\}$。最大后验分类首先写成

$$
\begin{aligned}
v_{\mathrm{MAP}}
&=\arg\max_{v_j\in V}
P(v_j\mid a_1,\ldots,a_n)\\
&=\arg\max_{v_j\in V}
P(a_1,\ldots,a_n\mid v_j)P(v_j).
\end{aligned}
$$

困难在于联合条件概率 $P(a_1,\ldots,a_n\mid v_j)$ 参数太多。朴素贝叶斯作出一个很强的假设：**给定类别后，各属性条件独立**。

于是

$$
P(a_1,\ldots,a_n\mid v_j)
=\prod_{i=1}^{n}P(a_i\mid v_j),
$$

分类规则变为

$$
v_{\mathrm{NB}}
=\arg\max_{v_j\in V}
P(v_j)
\prod_{i=1}^{n}P(a_i\mid v_j).
$$

训练只需从样本频数估计类别先验 $P(v_j)$ 和各属性的类条件概率 $P(a_i\mid v_j)$。分类时也不必把每个分数归一化成真正的后验概率；各类别共用的分母不会改变最大值位置。

课件列出的典型应用包括故障诊断和文本分类，适合处理中等或大规模数据。代价是条件独立假设往往并不严格成立。

## 八、完整算例：今天要不要打网球

课件使用 14 条 PlayTennis 样本。类别为 Yes 的样本有 9 条，No 有 5 条。现在要预测

$$
\langle
\text{Sunny},
\text{Cool},
\text{High},
\text{Strong}
\rangle.
$$

### 计算 Yes 的未归一化分数

从表中计数：

$$
P(\text{Yes})=\frac{9}{14},
$$

$$
P(\text{Sunny}\mid\text{Yes})=\frac{2}{9},
\quad
P(\text{Cool}\mid\text{Yes})=\frac{3}{9},
$$

$$
P(\text{High}\mid\text{Yes})=\frac{3}{9},
\quad
P(\text{Strong}\mid\text{Yes})=\frac{3}{9}.
$$

所以

$$
\begin{aligned}
s_{\text{Yes}}
&=\frac{9}{14}
\times\frac{2}{9}
\times\frac{3}{9}
\times\frac{3}{9}
\times\frac{3}{9}\\
&\approx0.0053.
\end{aligned}
$$

### 计算 No 的未归一化分数

同理，

$$
P(\text{No})=\frac{5}{14},
$$

$$
P(\text{Sunny}\mid\text{No})=\frac{3}{5},
\quad
P(\text{Cool}\mid\text{No})=\frac{1}{5},
$$

$$
P(\text{High}\mid\text{No})=\frac{4}{5},
\quad
P(\text{Strong}\mid\text{No})=\frac{3}{5}.
$$

因此

$$
\begin{aligned}
s_{\text{No}}
&=\frac{5}{14}
\times\frac{3}{5}
\times\frac{1}{5}
\times\frac{4}{5}
\times\frac{3}{5}\\
&\approx0.0206.
\end{aligned}
$$

因为

$$
s_{\text{No}}>s_{\text{Yes}},
$$

朴素贝叶斯预测为 No。课件把两个分数四舍五入写成约 $0.021$ 与 $0.005$，结论一致。

## 九、看不见类别归属时怎么办

前面的最大似然估计默认每条样本的来源都清楚。现实中常常只能观察到一部分变量：

- 混合分布中，不知道每个样本来自哪个分量；
- 贝叶斯网络中，某些节点没有观测；
- 隐马尔可夫模型中，状态序列不可见。

EM（Expectation-Maximization）就是处理隐变量的通用迭代方法。它交替做两件事：

1. **E 步**：在当前参数下，估计隐变量的后验分布；
2. **M 步**：把隐变量的软估计当作权重，重新求最大似然参数。

然后重复，直到参数或似然基本不再变化。

## 十、高斯混合模型中的 EM

考虑 $k$ 个一元高斯分量。课件先采用一个简化情形：各分量先验相同、方差同为 $\sigma^2$，只估计均值

$$
h=\langle\mu_1,\ldots,\mu_k\rangle.
$$

设隐变量 $z_{ij}$ 表示样本 $x_i$ 是否由第 $j$ 个高斯产生。若来源已知，第 $j$ 个分量的均值直接是属于它的样本均值；现在来源未知，就用其后验期望作为软权重。

### E 步：计算责任度

在相同先验和相同方差下，

$$
\gamma_{ij}
=\mathbb E[z_{ij}]
=\frac{
\exp\left[-\dfrac{(x_i-\mu_j)^2}{2\sigma^2}\right]
}{
\displaystyle
\sum_{n=1}^{k}
\exp\left[-\dfrac{(x_i-\mu_n)^2}{2\sigma^2}\right]
}.
$$

$\gamma_{ij}$ 可以理解为“当前模型认为样本 $x_i$ 由分量 $j$ 产生的概率”，并且对每个样本都有

$$
\sum_{j=1}^{k}\gamma_{ij}=1.
$$

### M 步：更新均值

使用责任度作权重：

$$
\mu_j
\leftarrow
\frac{
\sum_{i=1}^{m}\gamma_{ij}x_i
}{
\sum_{i=1}^{m}\gamma_{ij}
}.
$$

分子是分量 $j$ 对所有样本的加权和，分母是它承担的“有效样本数”。

课件进一步把 M 步写成最大化辅助函数 $Q(h'\mid h)$。去掉与均值无关的常数后，等价于最小化

$$
\sum_{i=1}^{m}
\sum_{j=1}^{k}
\gamma_{ij}(x_i-\mu_j')^2,
$$

对 $\mu_j'$ 求导，就得到上面的加权均值更新。

### 一轮数值算例

取数据

$$
D=\{0,3,7,10\},
$$

两个高斯分量的初始均值为 $\mu_1=2$、$\mu_2=8$，并取 $\sigma=2$。E 步得到第一个分量的大致责任度

$$
(0.9994,\ 0.9526,\ 0.0474,\ 0.0006).
$$

它们之和约为 $2$。M 步更新第一个均值：

$$
\mu_1'
\approx
\frac{
0\times0.9994
+3\times0.9526
+7\times0.0474
+10\times0.0006
}{2}
\approx1.60.
$$

第二个均值对称地更新到约 $8.40$。这一轮让左侧分量向左侧两点靠拢，右侧分量向右侧两点靠拢。

课件把最后几页标题写成“K 均值算法的推导”，但页内实际使用的是高斯密度与连续责任度，这是高斯混合模型的软 EM 更新。若把每个样本的责任度硬化成只有最近中心为 $1$、其余为 $0$，均值更新才会变成常见的 K-means 形式。

## 十一、贝叶斯方法提供了什么

课件把贝叶斯方法的作用分成两类。

一类是实用算法：朴素贝叶斯、EM、HMM、贝叶斯网络学习都从概率建模出发。另一类是统一的概念框架：它为学习器给出一个概率意义下的比较基准，课件把它称为评估其他算法的“黄金标准”。

$$
\text{先验知识}
+\text{数据证据}
\longrightarrow
\text{后验认识}.
$$

最后可以用三个问题检查自己是否真正分清了概念：

1. $P(D\mid h)$ 与 $P(h\mid D)$ 的条件方向是否写反；
2. 求 MAP 时为什么可以删掉 $P(D)$，但不能随意删掉 $P(h)$；
3. EM 的 E 步是在当前参数下估计隐变量，M 步才是在这些软分配下更新参数。

只要这三个方向没有混乱，贝叶斯学习的主干就已经建立起来了。
