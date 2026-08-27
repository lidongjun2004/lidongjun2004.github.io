---
title: "第八讲 · 线性判别函数"
description: "建立线性判别函数与决策边界，梳理感知器准则、最小平方误差、梯度更新及多类线性分类"
date: 2026-08-23
tags: ["AI"]
---

贝叶斯分类器从概率分布出发：先估计每一类怎样生成数据，再计算后验概率。现实中，准确估计高维概率密度往往很难。另一条路线是：**先规定决策边界的形式，再直接从样本中学习边界参数。**

线性判别函数是这条路线最基本的模型。它计算便宜、几何意义清楚，也是感知机、神经网络、支持向量机等方法的起点；AdaBoost 可以线性组合弱分类器，核方法则尝试在映射后的空间中恢复线性可分结构。

## 一、从一个分数到一个分类面

对 $d$ 维样本 $\mathbf x$，两类线性判别函数写成

$$
g(\mathbf x)=\mathbf w^{\mathsf T}\mathbf x+b.
$$

- $\mathbf w=(w_1,\ldots,w_d)^{\mathsf T}$ 是权向量；
- $b$ 是偏置，也可看作阈值；
- $g(\mathbf x)$ 是样本的判别分数。

分类规则为

$$
\begin{cases}
g(\mathbf x)>0,&\mathbf x\in\omega_1,\\
g(\mathbf x)<0,&\mathbf x\in\omega_2,\\
g(\mathbf x)=0,&\text{位于边界，可任意判定或拒绝。}
\end{cases}
$$

决策边界是

$$
H:\ \mathbf w^{\mathsf T}\mathbf x+b=0,
$$

在二维是直线，在三维是平面，在更高维是超平面。

## 二、几何意义：投影、法向量与距离

若边界上有两点 $\mathbf s_1,\mathbf s_2$，则

$$
\mathbf w^{\mathsf T}\mathbf s_1+b=0,\qquad
\mathbf w^{\mathsf T}\mathbf s_2+b=0.
$$

两式相减得到

$$
\mathbf w^{\mathsf T}(\mathbf s_1-\mathbf s_2)=0.
$$

边界内任意方向 $\mathbf s_1-\mathbf s_2$ 都与 $\mathbf w$ 正交，所以 $\mathbf w$ 是边界的法向量。分类器实际上先把 $\mathbf x$ 投影到 $\mathbf w$ 的方向，再用阈值切开这条数轴。

点 $\mathbf x$ 到边界的带符号距离为

$$
r=\frac{\mathbf w^{\mathsf T}\mathbf x+b}{\|\mathbf w\|}.
$$

因此 $g(\mathbf x)$ 本身不是几何距离，除非 $\|\mathbf w\|=1$；但它的符号决定区域，绝对值在固定 $\mathbf w$ 下反映离边界多远。

例如

$$
g(\mathbf x)=-2x_1+1
$$

的边界是 $x_1=0.5$。点 $(0,0),(0,1)$ 得正分，点 $(1,0),(1,1)$ 得负分，正好把两类分开。

## 三、齐次化与“广义线性”

把常数 1 附加到样本末尾：

$$
\mathbf y=
\begin{bmatrix}
\mathbf x\\1
\end{bmatrix},\qquad
\mathbf a=
\begin{bmatrix}
\mathbf w\\b
\end{bmatrix},
$$

就有

$$
g(\mathbf x)=\mathbf a^{\mathsf T}\mathbf y.
$$

这样所有参数都进入同一个点积，原空间中不一定过原点的超平面，变成增广空间中过原点的齐次超平面。

“线性”还可以是**对变换后的特征线性**。例如三次函数

$$
g(x)=x^3+2x^2+3x+4
$$

令

$$
\mathbf y=(1,x,x^2,x^3)^{\mathsf T},\qquad
\mathbf a=(4,3,2,1)^{\mathsf T},
$$

便有 $g(x)=\mathbf a^{\mathsf T}\mathbf y$。它在原始 $x$ 空间中是非线性的，在多项式特征空间中却仍是线性判别。

三维空间的一般二次曲面需要

$$
\mathbf y=(x_1^2,x_2^2,x_3^2,x_1x_2,x_1x_3,x_2x_3,x_1,x_2,x_3,1)^{\mathsf T},
$$

共 10 维。这个思想解释了许多非线性方法的共同结构：先映射特征，再在线性空间里学习参数。

## 四、线性分类器设计的共同框架

给定训练集 $K=\{\mathbf x_1,\ldots,\mathbf x_N\}$，设计过程可以统一成三步：

1. 假定模型形式，例如 $g(\mathbf x)=\mathbf w^{\mathsf T}\mathbf x+b$；
2. 选准则函数 $J(K,\mathbf w,b)$，把“什么叫分得好”写成数学目标；
3. 用解析法或迭代优化寻找目标最优的参数。

不同方法真正的区别，往往不在判别函数形式，而在“好边界”的定义：Fisher 希望类间远、类内紧；感知机只惩罚错分样本；最小平方误差希望输出接近预设目标值。

## 五、Fisher 线性判别：投影后远而且紧

只让两类均值投影得足够远还不够。如果同一类投影后铺得很散，两类仍可能严重重叠。Fisher 准则同时要求：

- 两类投影均值尽量远；
- 每类投影内部尽量紧凑。

设两类样本集合为 $K_1,K_2$，均值向量为

$$
\mathbf m_i=\frac{1}{N_i}\sum_{\mathbf x\in K_i}\mathbf x.
$$

类内离散矩阵为

$$
S_i=\sum_{\mathbf x\in K_i}
(\mathbf x-\mathbf m_i)(\mathbf x-\mathbf m_i)^{\mathsf T},
$$

总类内离散矩阵与类间离散矩阵为

$$
S_W=S_1+S_2,\qquad
S_B=(\mathbf m_1-\mathbf m_2)(\mathbf m_1-\mathbf m_2)^{\mathsf T}.
$$

投影 $y=\mathbf w^{\mathsf T}\mathbf x$ 后，两类均值差的平方为 $\mathbf w^{\mathsf T}S_B\mathbf w$，类内总离散度为 $\mathbf w^{\mathsf T}S_W\mathbf w$。Fisher 准则是 Rayleigh 商：

$$
J_F(\mathbf w)=
\frac{\mathbf w^{\mathsf T}S_B\mathbf w}
{\mathbf w^{\mathsf T}S_W\mathbf w}.
$$

用拉格朗日乘子求极值，可得最佳方向与

$$
\mathbf w^*=S_W^{-1}(\mathbf m_1-\mathbf m_2)
$$

同方向。若 $S_W$ 不可逆，可使用正则化 $S_W+\lambda I$ 或伪逆。

这个式子很好理解：$\mathbf m_1-\mathbf m_2$ 指向两类中心连线；$S_W^{-1}$ 再根据类内分散形状重新缩放方向，避免投到噪声特别大的轴上。

方向确定后还要选阈值。若类别规模与代价相当，可以用投影均值中点：

$$
b=-\frac{1}{2}\mathbf w^{\mathsf T}(\mathbf m_1+\mathbf m_2).
$$

若两类先验概率、样本数或错误代价不同，阈值还应相应移动；Fisher 方向解决的是“往哪里投影”，阈值解决的是“在投影轴哪里切开”，二者不要混成一步。

### Fisher 算例

课件给出

$$
\mathbf m_1=(2,0)^{\mathsf T},\qquad
\mathbf m_2=(2,2)^{\mathsf T},
$$

$$
S_1=
\begin{bmatrix}1&1/2\\1/2&1\end{bmatrix},\qquad
S_2=
\begin{bmatrix}1&-1/2\\-1/2&1\end{bmatrix}.
$$

于是

$$
S_W=
\begin{bmatrix}2&0\\0&2\end{bmatrix},\qquad
\mathbf w^*=S_W^{-1}(\mathbf m_1-\mathbf m_2)
=(0,-1)^{\mathsf T}.
$$

投影均值的中点给出 $b=1$，所以

$$
g(\mathbf x)=-x_2+1,\qquad H:x_2=1.
$$

把两类均值代入，$g(2,0)=1>0$、$g(2,2)=-1<0$，方向与类别约定一致。

## 六、感知器准则：只修正分错的样本

先把第二类增广样本取反，得到规范化样本

$$
\mathbf y'_i=
\begin{cases}
\mathbf y_i,&\mathbf x_i\in\omega_1,\\
-\mathbf y_i,&\mathbf x_i\in\omega_2.
\end{cases}
$$

这样，无论原类别是什么，正确分类都统一写成

$$
\mathbf a^{\mathsf T}\mathbf y'_i>0.
$$

记当前被错分或落在边界上的规范化样本集合为 $Y_k$。感知器准则为

$$
J_P(\mathbf a)=
\sum_{\mathbf y\in Y_k}
(-\mathbf a^{\mathsf T}\mathbf y).
$$

它只累加错分样本的负分数。梯度为

$$
\nabla J_P(\mathbf a)=-\sum_{\mathbf y\in Y_k}\mathbf y,
$$

所以批量更新是

$$
\mathbf a_{k+1}
=\mathbf a_k+\eta_k\sum_{\mathbf y\in Y_k}\mathbf y.
$$

也可以每遇到一个错分样本就立即更新：

$$
\mathbf a\leftarrow\mathbf a+\eta\mathbf y.
$$

为什么这会改善当前样本？更新后

$$
(\mathbf a+\eta\mathbf y)^{\mathsf T}\mathbf y
=\mathbf a^{\mathsf T}\mathbf y+\eta\|\mathbf y\|^2,
$$

分数一定向正方向移动。

对课件中的四个点，增广并规范化后为

$$
(0,0,1),\ (0,1,1),\ (-1,0,-1),\ (-1,-1,-1).
$$

参数

$$
\mathbf a=(-2,0,1)^{\mathsf T}
$$

与四个规范化样本的点积都等于 1，因此是一个解；对应边界仍是 $-2x_1+1=0$。

感知器收敛定理有一个关键前提：训练集线性可分。若类别重叠，错分集合永远不可能清空，原始算法会持续振荡；这时必须接受软错误、换损失函数或引入非线性特征。

## 七、最小平方误差：让判别输出接近目标

把所有规范化增广样本作为矩阵的行：

$$
Y=
\begin{bmatrix}
(\mathbf y'_1)^{\mathsf T}\\
\vdots\\
(\mathbf y'_N)^{\mathsf T}
\end{bmatrix}.
$$

理想情况下希望 $Y\mathbf a>0$。MSE 方法进一步指定一个各分量都为正的目标向量 $\mathbf b$，希望

$$
Y\mathbf a\approx\mathbf b.
$$

平方误差准则为

$$
J_S(\mathbf a)=\|Y\mathbf a-\mathbf b\|_2^2.
$$

令梯度为零：

$$
\nabla J_S(\mathbf a)
=2Y^{\mathsf T}(Y\mathbf a-\mathbf b)=0.
$$

若 $Y^{\mathsf T}Y$ 可逆，解析解为

$$
\mathbf a^*=(Y^{\mathsf T}Y)^{-1}Y^{\mathsf T}\mathbf b
=Y^+\mathbf b,
$$

其中 $Y^+$ 是 Moore-Penrose 伪逆。更一般时直接用伪逆表达仍成立。

数据很大时不必显式求逆，可以做批量梯度下降：

$$
\mathbf a_{k+1}
=\mathbf a_k-\eta_kY^{\mathsf T}(Y\mathbf a_k-\mathbf b),
$$

或对单个样本做更新：

$$
\mathbf a_{k+1}
=\mathbf a_k+\eta_k
(b_k-\mathbf a_k^{\mathsf T}\mathbf y'_k)\mathbf y'_k.
$$

MSE 与感知器的区别是：感知器只关心符号是否正确，MSE 还要求分数靠近指定数值。课件给出的等价构造是：第一类的 $N_1$ 个目标值都取 $N/N_1$，规范化后的第二类 $N_2$ 个目标值都取 $N/N_2$。在这一特定选择下，二类 MSE 解可以与 Fisher 方向等价；但一般情况下，两者优化目标并不相同。

## 八、多类别怎样推广

常见方案有三种：

### 多个判别函数直接竞争

为每类学习一个

$$
g_i(\mathbf x)=\mathbf w_i^{\mathsf T}\mathbf x+b_i,
$$

预测时取

$$
\widehat y=\arg\max_i g_i(\mathbf x).
$$

### 一对其余

为每一类训练“$\omega_i$ 对所有非 $\omega_i$”的二分类器，共需 $C$ 个分类器。各分类器输出再通过分数或规则合并。

### 一对一

每两类训练一个分类器，共需

$$
\frac{C(C-1)}{2}
$$

个，预测时通常投票或比较成对分数。

课件还介绍最小距离分类器：用每类均值 $\mathbf m_i$ 作为原型，把样本判给欧氏距离最近的均值。两类之间的边界是均值连线的垂直平分面，因此它同样可以写成线性判别函数

$$
g_i(\mathbf x)=
\mathbf m_i^{\mathsf T}\mathbf x
-\frac{1}{2}\mathbf m_i^{\mathsf T}\mathbf m_i.
$$

多个局部线性区域组合起来，还能形成分段线性边界，表达比单个超平面更复杂的分类面。

## 九、把几种方法放在一起

| 方法 | “分得好”的定义 | 求解 | 关键限制 |
|---|---|---|---|
| Fisher | 类间投影远、类内投影紧 | $S_W^{-1}(\mathbf m_1-\mathbf m_2)$ | 要估计离散矩阵 |
| 感知器 | 所有规范化样本分数为正 | 对错分样本迭代更新 | 只保证在线性可分时收敛 |
| MSE | 判别输出接近正目标向量 | 伪逆或梯度下降 | 小平方误差不等于最小分类错误 |
| 最小距离 | 距离本类原型最近 | 比较到各均值距离 | 难表达复杂类形状 |

同一个线性函数可以搭配不同准则；准则最优也不一定等于分类错误率最小。设计分类器时要同时说明模型形式、训练目标与优化方法，不能只说“用了线性分类器”。

## 本讲速记

- $\mathbf w$ 是决策面的法向量，$g(\mathbf x)/\|\mathbf w\|$ 是带符号距离。
- 加一维常数特征可以把偏置并入权向量；非线性特征映射后仍可使用线性判别。
- Fisher 的核心是“类间远 / 类内紧”，方向为 $S_W^{-1}(\mathbf m_1-\mathbf m_2)$。
- 感知器只修正错分样本，线性可分时有限步收敛；MSE 则拟合预设的判别输出。
- 多类别可以使用多个分数直接竞争、一对其余或一对一；多个线性区域还能组合成更复杂边界。
