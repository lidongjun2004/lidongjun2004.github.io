---
title: "第二十一讲 · 自动微分"
description: "从计算图出发理解前向模式与反向模式自动微分、Jacobian-vector product、vector-Jacobian product 和反向传播的实现逻辑"
date: 2026-08-23
tags: ["AI"]
---

训练神经网络时，我们真正需要的不是一个漂亮的导函数表达式，而是损失函数对数百万个参数的数值梯度。自动微分（Automatic Differentiation，AD）做的事，就是把程序拆成一连串基本运算，再沿计算图精确应用链式法则。

它既不是“把公式交给计算机化简”，也不是“把输入轻微扰动后猜梯度”。理解这一点，反向传播就不再是一条额外发明的算法，而是**反向模式自动微分在神经网络上的具体应用**。

## 一、四种求导方式先分清

设标量函数 $f:\mathbb R^n\to\mathbb R$，常见求导方式有四种。

| 方法 | 核心做法 | 优点 | 主要问题 |
|---|---|---|---|
| 手工微分 | 人手推导公式并写实现 | 小函数直观 | 易写错，模型一改就要重推 |
| 数值微分 | 用有限差分近似导数 | 实现简单，适合验梯度 | 有截断误差与舍入误差，计算昂贵 |
| 符号微分 | 操作代数表达式，生成导函数 | 得到显式公式 | 容易出现表达式膨胀 |
| 自动微分 | 在基本运算组成的计算图上应用链式法则 | 机器精度、可复用、适合大程序 | 需要保存计算依赖或传播切向量 |

### 数值微分为什么只适合检查

前向有限差分为

$$
\frac{\partial f}{\partial x_i}
\approx
\frac{f(x+h e_i)-f(x)}{h}.
$$

$h$ 不能随便取：过大时泰勒展开的高阶项不可忽略，过小时浮点数相减会丢失有效数字。更关键的是，求完整梯度至少要对 $n$ 个坐标分别扰动，约需 $O(n)$ 次前向计算。它适合用来抽查自动微分结果，不适合承担日常训练。

中心差分

$$
\frac{f(x+h e_i)-f(x-h e_i)}{2h}
$$

通常比前向差分精确，但每个坐标要计算两次，仍没有解决成本问题。

### 符号微分为什么不是自动微分

符号微分会把 $f$ 当作表达式，试图得到一个新的表达式 $f'$。重复出现的子表达式可能被反复展开，造成 expression swell。自动微分则保留中间变量，只在当前计算图上计算数值和局部导数，本质更接近带缓存的动态规划。

## 二、把函数拆成计算图

课件用下面的函数贯穿前向与反向模式：

$$
f(x_1,x_2)
=\left(\frac{x_1}{x_2}-e^{x_2}\right)
\left[\sin\left(\frac{x_1}{x_2}\right)
+\frac{x_1}{x_2}-e^{x_2}\right].
$$

把它拆成只含一个基本运算的节点：

$$
\begin{aligned}
v_1&=x_1/x_2,\\
v_2&=\sin v_1,\\
v_3&=e^{x_2},\\
v_4&=v_1-v_3,\\
v_5&=v_2+v_4,\\
v_6&=v_4v_5=f.
\end{aligned}
$$

在 $(x_1,x_2)=(1.5,0.5)$ 处，前向值约为

$$
(v_1,v_2,v_3,v_4,v_5,v_6)
=(3,0.1411,1.6487,1.3513,1.4924,2.0167).
$$

自动微分只需要知道每种基本运算的局部规则，例如乘法、除法、正弦和指数的导数。复杂函数的梯度由这些局部规则拼起来。

## 三、前向模式：值和切向量一起走

前向模式把每个中间变量扩展成二元组

$$
v_i\longmapsto(v_i,\dot v_i),
$$

其中 $\dot v_i$ 表示沿指定输入方向 $r$ 的方向导数。若要求 $\partial f/\partial x_1$，就给输入种下

$$
\dot x_1=1,\qquad \dot x_2=0.
$$

再跟着前向计算逐步传播：

$$
\begin{aligned}
\dot v_1&=\frac{x_2\dot x_1-x_1\dot x_2}{x_2^2}=2,\\
\dot v_2&=\cos(v_1)\dot v_1\approx-1.9800,\\
\dot v_3&=e^{x_2}\dot x_2=0,\\
\dot v_4&=\dot v_1-\dot v_3=2,\\
\dot v_5&=\dot v_2+\dot v_4\approx0.0200,\\
\dot v_6&=\dot v_4v_5+v_4\dot v_5\approx3.012.
\end{aligned}
$$

所以 $\partial f/\partial x_1\approx3.012$。这里没有生成庞大的导函数，也没有用近似差分；每一步都是基本运算的精确链式法则。

### JVP 是什么

对一般函数 $f:\mathbb R^n\to\mathbb R^m$，Jacobian 为

$$
J_f(x)\in\mathbb R^{m\times n}.
$$

前向模式一次计算的是

$$
J_f(x)r,
$$

称为 Jacobian-vector product（JVP）。若 $r=e_i$，结果就是 Jacobian 的第 $i$ 列。一次前向传播可以同时得到所有输出对一个输入方向的变化，因此它适合输入维度 $n$ 很小、输出维度 $m$ 很大的场景。

若想得到完整 Jacobian，通常要换 $n$ 个不同的种子方向，做 $n$ 次传播。

## 四、反向模式：从输出收集贡献

反向模式先做一次普通前向计算，保存中间值和依赖关系；随后从输出向输入传播伴随量

$$
\bar v_i=\frac{\partial f}{\partial v_i}.
$$

标量输出从 $\bar v_6=1$ 开始。一个节点若流向多个后继，它收到的梯度必须相加：

$$
\bar v_i
=\sum_{j:\,v_i\to v_j}
\bar v_j\frac{\partial v_j}{\partial v_i}.
$$

对上面的计算图：

$$
\begin{aligned}
\bar v_5&=v_4\bar v_6,\\
\bar v_4&=v_5\bar v_6+\bar v_5,\\
\bar v_3&=-\bar v_4,\\
\bar v_2&=\bar v_5,\\
\bar v_1&=\bar v_2\cos v_1+\bar v_4.
\end{aligned}
$$

继续穿过 $v_1=x_1/x_2$ 和 $v_3=e^{x_2}$，可得

$$
\frac{\partial f}{\partial x_1}\approx3.012,
\qquad
\frac{\partial f}{\partial x_2}\approx-13.724.
$$

结果和前向模式一致，但这次只用一次反向传播，就得到标量输出对全部输入的梯度。

### VJP 为什么适合机器学习

反向模式一般计算

$$
u^{\mathsf T}J_f(x),
$$

称为 vector-Jacobian product（VJP）。取 $u=e_k$ 时得到 Jacobian 的第 $k$ 行，所以完整 Jacobian 需要按输出方向做 $m$ 次反向传播。

神经网络训练通常是

$$
\theta\in\mathbb R^n
\longrightarrow
L(\theta)\in\mathbb R,
$$

也就是参数极多而损失只有一个标量，$m=1\ll n$。反向模式一次就能求出 $\nabla_\theta L$，这正是反向传播高效的根本原因。

## 五、反向传播其实是动态规划

若某个中间节点被后面多条路径复用，直接展开链式法则会重复计算相同子问题。反向传播保存前向值，并在每个节点把来自所有后继的梯度累加后只处理一次。

因此一次标量输出的反向传播，其运算量通常与前向计算同阶；代价是要保存激活值、运算类型和依赖关系。训练显存远高于纯推理显存，原因之一就在这里。梯度检查点则用“反向时重算部分前向值”换取更少的保存空间。

## 六、在 PyTorch 里对应什么

对由 PyTorch 张量运算组成的模型，只需写前向过程；框架在运行时构建计算图，并自动执行反向模式：

```python
import torch

x = torch.tensor([1.5, 0.5], requires_grad=True)
v1 = x[0] / x[1]
v2 = torch.sin(v1)
v3 = torch.exp(x[1])
v4 = v1 - v3
loss = v4 * (v2 + v4)
loss.backward()

print(loss.item())
print(x.grad)
```

`nn.Module` 负责组织参数和前向结构；只要前向由框架已知的可微运算组成，就不必手写反向。若要定义一种框架不知道其导数的新运算，应继承 `torch.autograd.Function` 并实现 `forward`、`backward`，而不是仅仅继承 `nn.Module`。这是对课件“扩展 module”部分更精确的表述。

每轮训练一般是

```python
optimizer.zero_grad()
prediction = model(input_batch)
loss = loss_function(prediction, target_batch)
loss.backward()
optimizer.step()
```

PyTorch 默认把多次 `backward` 得到的梯度累加到叶子张量的 `.grad` 中，所以不清零会把不同批次的梯度混在一起。

## 七、复习与常见误区

- 自动微分计算的是链式法则给出的导数，不是有限差分近似。
- 前向模式一次给出 $Jr$，适合输入少、输出多；反向模式一次给出 $u^{\mathsf T}J$，适合输出少、输入多。
- 标量损失对大量参数求梯度，是反向模式最占优势的形状。
- 分支节点的反向梯度要相加，不能任选一条路径。
- `backward()` 依赖前向保存的计算图；随意原地修改中间张量可能破坏反向所需的值。
- 数值微分仍然有价值，但角色是 gradient check，而不是替代训练中的反向传播。
- `nn.Module` 管模型结构，`autograd.Function` 才是自定义局部前向与反向规则的接口。
