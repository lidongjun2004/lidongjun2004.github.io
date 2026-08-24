---
title: "第十六讲 · 梯度下降与反向传播"
description: "从损失和经验风险出发，推导梯度下降、计算图、局部梯度、链式法则及前馈网络的完整反向传播训练算法"
date: 2026-08-23
tags: ["机器学习", "AI"]
---

前向传播回答“当前参数会预测什么”，训练还要回答“每个参数该往哪边改、改多少”。梯度下降负责用梯度更新参数，反向传播负责高效算出这组梯度。

## 一、损失函数与学习目标

对预测 $y=f(x;W)$ 和真实目标 $\hat y$，损失函数 $\ell(y,\hat y)$ 衡量单个样本的错误。课件用三分类 one-hot 目标 $(1,0,0)^{\mathsf T}$ 和均方误差举例：

$$
\ell(y,\hat y)=\lVert y-\hat y\rVert_2^2
=(1-y_1)^2+y_2^2+y_3^2.
$$

理想目标是最小化数据分布上的期望损失

$$
\min_W\ \mathbb E_{(x,\hat y)\sim P}
\bigl[\ell(f(x;W),\hat y)\bigr].
$$

真实分布未知，训练中使用有限数据的平均损失近似它。神经网络含大量复合非线性，通常无法像线性最小二乘那样令 $\partial L/\partial W=0$ 后直接解方程，只能迭代下降。

## 二、梯度给出最陡上升方向

对参数向量 $W=(w_1,\ldots,w_d)$，梯度为

$$
\nabla_W L
=\left(
\frac{\partial L}{\partial w_1},
\ldots,
\frac{\partial L}{\partial w_d}
\right).
$$

一阶 Taylor 展开说明，小步长 $\Delta W$ 下

$$
L(W+\Delta W)
\approx L(W)+\nabla_WL^{\mathsf T}\Delta W.
$$

令 $\Delta W=-\eta\nabla_WL$，便得到梯度下降更新：

$$
W^{(k+1)}=W^{(k)}-\eta\nabla_W L(W^{(k)}),
$$

其中 $\eta>0$ 是学习率。负号不可少，因为梯度指向上升最快方向。

## 三、计算图与链式法则

把复杂函数拆成加法、乘法、指数、倒数、激活函数等基本节点，就得到计算图。每个节点只需知道两件事：

1. 前向时怎样由输入算输出；
2. 反向时怎样把上游梯度乘以本节点的局部导数。

若 $q=q(x)$、$f=f(q)$，链式法则为

$$
\frac{\partial f}{\partial x}
=\frac{\partial f}{\partial q}
\frac{\partial q}{\partial x}.
$$

常用局部导数包括

$$
\frac{\partial(x+y)}{\partial x}=1,
\qquad
\frac{\partial(xy)}{\partial x}=y,
$$

$$
\frac{d e^x}{dx}=e^x,
\qquad
\frac{d(1/x)}{dx}=-\frac1{x^2},
$$

$$
\sigma'(x)=\sigma(x)(1-\sigma(x)).
$$

若一条变量分叉影响损失的多条路径，各路径传回的梯度要**相加**，不能只取一条。

## 四、课件标量计算图例子

课件计算

$$
f(w,x)=\frac1{1+e^{-(w_0x_0+w_1x_1+w_2)}}
$$

并取

$$
w_0=2,\quad x_0=-1,\quad
w_1=-3,\quad x_1=-2,\quad w_2=-3.
$$

先算线性部分：

$$
z=2(-1)+(-3)(-2)-3=1,
$$

所以

$$
f=\sigma(1)\approx0.731.
$$

反向从输出梯度 $\partial f/\partial f=1$ 开始：

$$
\frac{\partial f}{\partial z}
=f(1-f)
\approx0.731\times0.269
\approx0.197.
$$

再乘局部导数：

$$
\frac{\partial f}{\partial w_0}
=\frac{\partial f}{\partial z}x_0
\approx-0.197,
$$

$$
\frac{\partial f}{\partial x_0}
=\frac{\partial f}{\partial z}w_0
\approx0.393.
$$

同理可得

$$
\frac{\partial f}{\partial w_1}\approx-0.393,
\quad
\frac{\partial f}{\partial x_1}\approx-0.590,
\quad
\frac{\partial f}{\partial w_2}\approx0.197.
$$

这正是课件图中红色梯度值的来源：每经过一个节点，就用“上游梯度 × 局部梯度”继续向前传。

## 五、一层网络的矩阵反向传播

设

$$
a=Wx+b,
\qquad
y=\sigma(a),
\qquad
L=\lVert y-\hat y\rVert_2^2.
$$

先对输出求导：

$$
\frac{\partial L}{\partial y}=2(y-\hat y).
$$

定义预激活梯度

$$
\delta
=\frac{\partial L}{\partial a}
=2(y-\hat y)\odot\sigma(a)\odot(1-\sigma(a)),
$$

其中 $\odot$ 表示逐元素乘法。则

$$
\frac{\partial L}{\partial W}=\delta x^{\mathsf T},
\qquad
\frac{\partial L}{\partial b}=\delta,
\qquad
\frac{\partial L}{\partial x}=W^{\mathsf T}\delta.
$$

形状检查很有用：若 $W\in\mathbb R^{d_{out}\times d_{in}}$，则 $\delta x^{\mathsf T}$ 也必须是 $d_{out}\times d_{in}$。

## 六、两层网络的完整推导

前向传播为

$$
\begin{aligned}
a^{(1)}&=W^{(1)}x+b^{(1)},\\
h^{(1)}&=\sigma(a^{(1)}),\\
a^{(2)}&=W^{(2)}h^{(1)}+b^{(2)},\\
y&=\sigma(a^{(2)}).
\end{aligned}
$$

从输出层往回：

$$
\delta^{(2)}
=\frac{\partial L}{\partial a^{(2)}}
=2(y-\hat y)\odot\sigma'(a^{(2)}),
$$

$$
\frac{\partial L}{\partial W^{(2)}}
=\delta^{(2)}(h^{(1)})^{\mathsf T},
\qquad
\frac{\partial L}{\partial b^{(2)}}=\delta^{(2)}.
$$

隐藏层收到的梯度为

$$
\frac{\partial L}{\partial h^{(1)}}
=(W^{(2)})^{\mathsf T}\delta^{(2)},
$$

再穿过激活函数：

$$
\delta^{(1)}
=\frac{\partial L}{\partial a^{(1)}}
=(W^{(2)})^{\mathsf T}\delta^{(2)}
\odot\sigma'(a^{(1)}).
$$

最后

$$
\frac{\partial L}{\partial W^{(1)}}
=\delta^{(1)}x^{\mathsf T},
\qquad
\frac{\partial L}{\partial b^{(1)}}=\delta^{(1)}.
$$

更深网络只是不断重复“乘下一层权重的转置 → 乘本层激活导数 → 与本层输入做外积”。反向传播复用已经算出的中间梯度，具有动态规划的思想，避免为每个参数重复展开整条链。

## 七、完整训练循环

一次梯度更新可以概括为：

1. 初始化或读取当前参数；
2. 前向传播，保存各层 $a^{(l)},h^{(l)}$；
3. 计算预测与目标之间的损失；
4. 从损失开始反向传播，得到每层参数梯度；
5. 用 $W\leftarrow W-\eta\partial L/\partial W$ 更新；
6. 在许多小批量上重复，直到验证性能不再提升。

前向时保存中间激活会占显存；反向时正是靠这些值计算局部导数。只记公式而忽略这一生命周期，很难理解深度学习训练为什么比单次推理更耗内存。

## 八、输入梯度与对抗样例

反向传播不只能算参数梯度，也能算 $\partial L/\partial x$。若沿着让损失增加的方向给输入一个很小扰动，例如

$$
\Delta x=\varepsilon\operatorname{sign}
\left(\frac{\partial L}{\partial x}\right),
$$

就可能在肉眼几乎看不出变化时改变预测，这就是课件最后展示的对抗样例。它也说明模型学到的局部决策边界可能与人的感知边界不同。

## 九、常见误区与 sanity check

- 梯度下降要减梯度；梯度上升才加梯度。
- 反向传播是求导算法，不是优化器；真正更新参数的是 SGD、Adam 等优化算法。
- 分叉节点的梯度要相加，共享参数在不同样本或时间步产生的梯度也要累加。
- 用有限差分
  $[L(w+\epsilon)-L(w-\epsilon)]/(2\epsilon)$
  抽查少量参数，可验证手写反向传播。
- 若学习率极小但一次更新后损失反而大幅上升，应先检查梯度符号、矩阵转置和广播形状。
