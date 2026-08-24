---
title: "第三讲 · 线性回归、最小二乘与梯度下降"
description: "从平方误差、伪逆解和正则化推导线性回归，并串联梯度下降、感知机、反向传播及从传统模型到大模型的演进"
date: 2026-08-23
tags: ["机器学习", "AI"]
---

给定房屋的位置、面积、房间数和朝向，怎样预测价格？最直接的想法是给每个特征分配一个权重，再把它们加起来：

$$
\hat y=w_0+w_1x_1+\cdots+w_dx_d.
$$

这就是线性回归。它看起来简单，却把机器学习中几乎所有基本组件都摆到了桌面上：模型如何表示、误差怎样定义、参数如何求解、数据太多时怎样迭代，以及如何防止模型把训练数据记得太死。

## 一、最小二乘在解决什么问题

课件从谷神星的故事引入最小二乘。1801 年，天文学家朱塞普·皮亚齐观测谷神星约 40 天后，它运行到太阳背后而失去踪迹。高斯根据带误差的观测估计其轨道，后来天文学家依据预测重新发现了谷神星。高斯使用的最小二乘方法于 1809 年发表。

故事背后的困难具有普遍性：现实观测带有噪声，一条曲线通常不可能精确穿过所有数据点。我们只能寻找一组参数，让全部残差在某种意义下尽量小。

### 用矩阵统一表示样本

设共有 $N$ 个样本，每个样本已经扩充常数特征 $1$。把样本行向量堆成设计矩阵

$$
Y=
\begin{bmatrix}
\boldsymbol y_1^\top\\
\boldsymbol y_2^\top\\
\vdots\\
\boldsymbol y_N^\top
\end{bmatrix},
$$

目标值组成

$$
\boldsymbol b=(b_1,\ldots,b_N)^\top,
$$

参数为 $\boldsymbol w$。预测向量、残差向量分别是

$$
\hat{\boldsymbol b}=Y\boldsymbol w,
\qquad
\boldsymbol e=Y\boldsymbol w-\boldsymbol b.
$$

平方误差准则为

$$
\begin{aligned}
J(\boldsymbol w)
&=\|\boldsymbol e\|_2^2\\
&=\|Y\boldsymbol w-\boldsymbol b\|_2^2\\
&=\sum_{i=1}^{N}
(\boldsymbol w^\top\boldsymbol y_i-b_i)^2.
\end{aligned}
$$

最小二乘解就是

$$
\boldsymbol w^*
=\arg\min_{\boldsymbol w}J(\boldsymbol w).
$$

这里平方不是随意选择：正负残差不会互相抵消，大残差会受到更重的惩罚，而且目标函数可微并具有方便的矩阵形式。

## 二、正规方程与解析解

对目标函数求梯度：

$$
\nabla J(\boldsymbol w)
=2Y^\top(Y\boldsymbol w-\boldsymbol b).
$$

在极小值处令梯度为零：

$$
Y^\top Y\boldsymbol w^*=Y^\top\boldsymbol b.
$$

这就是正规方程。如果 $Y^\top Y$ 可逆，则

$$
\boldsymbol w^*
=(Y^\top Y)^{-1}Y^\top\boldsymbol b.
$$

令

$$
Y^+=(Y^\top Y)^{-1}Y^\top,
$$

便可写成

$$
\boldsymbol w^*=Y^+\boldsymbol b.
$$

$Y^+$ 是这个满列秩情形下的 Moore-Penrose 伪逆表达。更一般的秩亏情形仍然可以用伪逆求最小二乘解。

### 超定与欠定不要混在一起

设 $Y\in\mathbb R^{N\times d}$。

- **超定问题**：$N>d$，方程多于未知数。带噪数据通常没有精确解，最小二乘寻找残差平方和最小的近似解。
- **欠定问题**：$N<d$，未知数多于方程。若方程相容，往往存在无穷多个精确解；伪逆可以选出其中一个规范解，额外约束还可以表达我们偏好的解。
- **秩亏问题**：即使 $N\ge d$，特征线性相关也会使 $Y^\top Y$ 不可逆。

因此，“直接求逆”不是万能做法。伪逆与正则化的意义，正是在解不唯一或数值不稳定时仍然给出可用结果。

## 三、完整算例：拟合一条直线

用三组带噪观测

$$
(x,b)=(0,1),(1,2),(2,5)
$$

拟合

$$
\hat b=w_0+w_1x.
$$

设计矩阵与目标向量为

$$
Y=
\begin{bmatrix}
1&0\\
1&1\\
1&2
\end{bmatrix},
\qquad
\boldsymbol b=
\begin{bmatrix}
1\\2\\5
\end{bmatrix}.
$$

先计算

$$
Y^\top Y=
\begin{bmatrix}
3&3\\
3&5
\end{bmatrix},
\qquad
Y^\top\boldsymbol b=
\begin{bmatrix}
8\\12
\end{bmatrix}.
$$

解正规方程得到

$$
\boldsymbol w^*=
\begin{bmatrix}
2/3\\2
\end{bmatrix},
$$

所以拟合直线为

$$
\hat b=\frac{2}{3}+2x.
$$

三个预测值依次为 $2/3,8/3,14/3$，残差为

$$
-\frac13,\quad \frac23,\quad -\frac13,
$$

残差平方和为

$$
J(\boldsymbol w^*)
=\frac19+\frac49+\frac19
=\frac23.
$$

还有一个便于自检的性质：最优残差与设计矩阵每一列都正交，即

$$
Y^\top(Y\boldsymbol w^*-\boldsymbol b)=\boldsymbol0.
$$

这正是正规方程，说明梯度确实已经为零。

## 四、为什么还需要梯度下降

解析解很干净，但计算 $(Y^\top Y)^{-1}$ 在特征维度很高时开销大，而且神经网络一类非线性模型通常根本没有闭式解。因此实际训练常改用迭代法。

通用梯度下降更新为

$$
\boldsymbol w^{(t+1)}
=\boldsymbol w^{(t)}
-\eta\nabla J(\boldsymbol w^{(t)}),
$$

其中 $\eta>0$ 是学习率。梯度指向函数上升最快的方向，所以沿负梯度移动。

对最小二乘目标，批量梯度为

$$
\nabla J(\boldsymbol w)
=2Y^\top(Y\boldsymbol w-\boldsymbol b).
$$

把常数 $2$ 吸收到步长 $r_t$ 中，课件给出的批量更新可写为

$$
\boldsymbol w^{(t+1)}
=\boldsymbol w^{(t)}
-r_tY^\top(Y\boldsymbol w^{(t)}-\boldsymbol b).
$$

### 单样本 LMS 更新

每次只使用第 $k$ 个样本时，更新为

$$
\boldsymbol w^{(t+1)}
=\boldsymbol w^{(t)}
+r_t
\left(
b_k-(\boldsymbol w^{(t)})^\top\boldsymbol y_k
\right)
\boldsymbol y_k.
$$

括号里是“真实值减预测值”。预测偏小，它为正，参数就沿样本特征方向增加；预测偏大，则沿反方向修正。

例如，从 $\boldsymbol w=(0,0)^\top$ 出发，用样本 $\boldsymbol y=(1,1)^\top$、$b=3$ 和步长 $r=0.1$ 更新一次：

$$
\boldsymbol w_{\text{new}}
=
\begin{bmatrix}0\\0\end{bmatrix}
+0.1(3-0)
\begin{bmatrix}1\\1\end{bmatrix}
=
\begin{bmatrix}0.3\\0.3\end{bmatrix}.
$$

更新前预测为 $0$，更新后变为 $0.6$，确实朝目标值 $3$ 靠近。

## 五、Batch、SGD 与 Mini-batch

课件把梯度下降按每步使用的数据量分成三种：

| 方法 | 每次更新使用的数据 | 特点 |
|---|---|---|
| Batch Gradient Descent | 全部训练集 | 梯度准确，但单步计算和内存开销大 |
| Stochastic Gradient Descent | 一个样本 | 更新便宜、噪声大，轨迹会抖动 |
| Mini-batch Gradient Descent | 一小批样本 | 在计算效率与梯度稳定性之间折中 |

统一写成

$$
\boldsymbol\theta
\leftarrow
\boldsymbol\theta
-\alpha\nabla_{\boldsymbol\theta}
J_{\mathcal B}(\boldsymbol\theta),
$$

其中 $\mathcal B$ 可以是全数据、单个样本或一个小批次。现代深度学习通常使用 mini-batch，因为它既能利用并行硬件，也保留一定随机性。

## 六、二范数正则化

当特征很多、样本较少，或者特征彼此高度相关时，单纯追求训练误差最小可能产生很大的权重。课件在目标函数中加入二范数惩罚：

$$
J_\lambda(\boldsymbol w)
=\|Y\boldsymbol w-\boldsymbol b\|_2^2
+\lambda\|\boldsymbol w\|_2^2,
\qquad \lambda\ge0.
$$

第一项要求拟合数据，第二项要求权重不要过大。这里的设计矩阵 $Y$ 第一列全为 $1$，所以 $\boldsymbol w$ 的第一个分量是截距；上面的简式使用单位矩阵，实际上会把截距也一起惩罚。

常见实现不惩罚截距。这时令

$$
P=\operatorname{diag}(0,1,\ldots,1),
$$

把正则项改成 $\lambda\boldsymbol w^\top P\boldsymbol w$，解析解相应变为

$$
\boldsymbol w^*
=(Y^\top Y+\lambda P)^{-1}Y^\top\boldsymbol b.
$$

下面继续推导课件所用、连截距一起惩罚的简式。求梯度：

$$
\nabla J_\lambda(\boldsymbol w)
=2Y^\top(Y\boldsymbol w-\boldsymbol b)
+2\lambda\boldsymbol w.
$$

令其为零：

$$
(Y^\top Y+\lambda I)\boldsymbol w^*
=Y^\top\boldsymbol b,
$$

所以

$$
\boldsymbol w^*
=(Y^\top Y+\lambda I)^{-1}Y^\top\boldsymbol b.
$$

这个解就是岭回归的解析形式。

### 两个极端值自检

- 当 $\lambda=0$ 时，退化为普通最小二乘；
- 当 $\lambda\to\infty$ 时，惩罚项主导，$\boldsymbol w^*$ 趋向零。

$\lambda$ 不是越大越好。太小不能有效抑制高方差，太大又会把真正有用的权重一起压小，造成欠拟合。

## 七、从线性回归到感知机和神经网络

线性回归输出加权和。感知机再接一个非线性函数：

$$
y=f\left(
\sum_{i=0}^{n-1}w_ix_i-\theta
\right).
$$

这一步把连续预测扩展到线性分类。若把许多神经元按层连接，就得到前馈神经网络：输入经过隐藏层逐级变换，最后产生输出。

训练多层网络时，仍然先定义误差 $E$，再计算参数对误差的梯度。反向传播并不是另一套优化目标，而是一种高效应用链式法则、把输出误差逐层传回去的方法；参数最终仍由梯度下降类算法更新。

因此从线性回归到深层网络，最稳定的主线没有变：

$$
\text{参数化模型}
\longrightarrow
\text{损失函数}
\longrightarrow
\text{计算梯度}
\longrightarrow
\text{更新参数}.
$$

## 八、不同数据结构催生不同网络

课件随后用几类结构展示“模型设计”如何随任务变化。这部分是后续深度学习课件的路线预告。

### 卷积神经网络

图像具有局部结构。卷积层让一个小滤波器在图像上滑动，用局部点积提取模式；最大池化缩小空间尺寸并保留显著响应。典型流程可以写成

$$
\text{图像}
\to
\text{卷积}
\to
\text{池化}
\to\cdots\to
\text{展平}
\to
\text{全连接输出}.
$$

课件用一个 $6\times6$ 二值图像和 $3\times3$ 滤波器演示局部点积：滤波器会在与自身模式相似的局部位置产生较大响应。与普通全连接层相比，卷积复用同一组权重，更贴合图像中的平移结构。

### 循环神经网络

RNN 面向序列数据。课件从 Jeffrey L. Elman 1990 年的工作引入隐藏状态：当前计算不仅使用当前输入，还使用上一步保存的上下文。

典型应用包括自然语言处理、时间序列预测、语音识别和视频分析。它的局限也很直接：长距离依赖难学，时间步之间顺序依赖而难以完全并行，并可能出现梯度消失或爆炸。

### Transformer

Transformer 由 2017 年的《Attention Is All You Need》引入。自注意力把序列元素映射为 Query、Key、Value，并计算每个元素与其他元素的关联，从而直接聚合全局上下文。

课件以“我想吃酸菜鱼”为例：每个词先转成词向量，再分别生成 Query、Key、Value；某个词的 Query 与所有词的 Key 计算注意力分数，归一化后对 Value 加权求和，得到已经融合整句上下文的新表示。“吃”不再只依赖相邻位置，而可以直接关注“酸菜鱼”。

相较只沿时间逐步传递状态的 RNN，自注意力更容易捕捉远距离关系，也更适合并行计算。单一注意力可能只看到一种关系，多头注意力则让模型在多个子空间中提取不同依赖。

## 九、线性回归提供的机器学习骨架

课件最后用线性回归总结五个贯穿全课的问题：

1. **模型设计**：假设函数长什么样，如何利用数据自身的结构；
2. **可学习性**：有限样本能否支撑对未知数据的可靠预测；
3. **目标函数**：用什么量衡量模型好坏；
4. **优化方法**：闭式解、批量梯度、随机梯度还是小批量更新；
5. **正则化**：如何在拟合训练数据与控制模型复杂度之间平衡。

最小二乘之所以值得从头推导，不只是因为它能拟合一条直线，而是因为后面的感知机、神经网络、CNN、RNN 和 Transformer 都会重复这副骨架，只是模型和损失越来越复杂，求解从解析式变成大规模迭代。
