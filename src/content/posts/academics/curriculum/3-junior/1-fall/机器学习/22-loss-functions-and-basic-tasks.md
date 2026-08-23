---
title: "第二十二讲 · 损失函数与分类、回归任务"
description: "从经验风险最小化出发，梳理回归与分类的输出设计、常见损失函数、概率解释及选择原则"
date: 2026-08-23
tags: ["机器学习", "AI"]
---

模型输出什么、标签长什么样、损失函数怎么写，三者必须是一套匹配的设计。分类模型输出类别概率，回归模型输出连续数值；如果把输出层和损失函数接错，即使代码能运行，模型学到的目标也可能完全不对。

本讲先把课件中的 Softmax 分类和平方误差回归讲清，再补齐训练时最常见的选择原则。

## 一、损失函数在训练链路中的位置

给定训练集

$$
\mathcal D=\{(x_i,\hat y_i)\}_{i=1}^N,
$$

模型 $f(x;\theta)$ 产生预测 $y_i$，单样本损失 $\ell(y_i,\hat y_i)$ 衡量预测与目标的差异。经验风险通常写成

$$
J(\theta)=\frac1N\sum_{i=1}^N
\ell\bigl(f(x_i;\theta),\hat y_i\bigr).
$$

训练就是通过优化器寻找使 $J(\theta)$ 较小的参数。这里要分清：

- **损失函数**规定“错成什么样要罚多少”；
- **模型结构**规定“可以表达哪些预测函数”；
- **优化器**规定“如何根据梯度移动参数”。

损失下降说明训练目标被优化，不自动保证测试集表现更好；泛化还取决于数据、模型容量与正则化。

## 二、多分类：Softmax 加负对数似然

设模型对 $C$ 个类别输出 logits

$$
s=f(x;\theta)=(s_1,\ldots,s_C).
$$

logit 是未归一化分数，可以为任意实数。Softmax 把它变成概率：

$$
p_k=P(Y=k\mid x)
=\frac{e^{s_k}}{\sum_{j=1}^C e^{s_j}}.
$$

若真实类别是 $t$，负对数似然（Negative Log-Likelihood，NLL）为

$$
L=-\log p_t
=-s_t+\log\sum_{j=1}^C e^{s_j}.
$$

它也就是 one-hot 标签下的交叉熵：

$$
L=-\sum_{k=1}^C \hat y_k\log p_k.
$$

预测给真实类别的概率越接近 $1$，损失越接近 $0$；若对真实类别极不自信，$-\log p_t$ 会迅速增大。

### 一个三分类算例

取 logits

$$
s=(2,1,0),
$$

Softmax 概率约为

$$
p=(0.6652,0.2447,0.0900).
$$

若真实类别是第 1 类，则

$$
L=-\log0.6652\approx0.4076.
$$

Softmax 与交叉熵组合后，对每个 logit 的梯度格外简洁：

$$
\frac{\partial L}{\partial s_k}=p_k-\hat y_k.
$$

本例梯度约为

$$
(-0.3348,0.2447,0.0900).
$$

梯度下降会提高真实类别的 logit，同时压低另外两类的 logit。

### 数值稳定性

直接计算 $e^{s_k}$ 可能溢出。利用 Softmax 对所有 logits 同减一个常数不变，实际实现会先减最大值：

$$
p_k
=\frac{e^{s_k-s_{\max}}}
{\sum_j e^{s_j-s_{\max}}}.
$$

PyTorch 的 `CrossEntropyLoss` 输入应是原始 logits，它内部完成稳定的 `log_softmax` 与 NLL。若先手工 Softmax 再送进去，相当于把概率当 logits 再归一化一次。

## 三、二分类：一个 logit 就够了

二分类可令模型输出标量 logit $s$，再用 Sigmoid 得到

$$
p=\sigma(s)=\frac1{1+e^{-s}}.
$$

二元交叉熵为

$$
L=-\hat y\log p-(1-\hat y)\log(1-p).
$$

它的 logit 梯度同样是

$$
\frac{\partial L}{\partial s}=p-\hat y.
$$

工程上应优先使用直接接收 logits 的稳定实现，例如 `BCEWithLogitsLoss`，避免先 Sigmoid 后取对数导致上溢或下溢。

若每个样本可以同时拥有多个标签，应对每个标签分别做 Sigmoid 与二元交叉熵；这和“多个类别只能选一个”的 Softmax 多分类不是同一任务。

## 四、回归：平方误差及其概率解释

回归预测连续向量 $y=f(x;\theta)$。课件使用平方误差

$$
L=\lVert y-\hat y\rVert_2^2.
$$

其预测梯度为

$$
\frac{\partial L}{\partial y}=2(y-\hat y).
$$

有些实现使用均方误差

$$
L_{\mathrm{MSE}}
=\frac1d\sum_{j=1}^d(y_j-\hat y_j)^2,
$$

或再乘 $1/2$ 来消掉导数中的 $2$。这些常数不会改变最优解，但会改变梯度尺度，因此学习率不能完全照搬。

### 为什么平方误差如此常见

若假设标签由

$$
\hat y=f(x;\theta)+\varepsilon,
\qquad
\varepsilon\sim\mathcal N(0,\sigma^2I)
$$

生成，那么最大化高斯似然等价于最小化平方误差。也就是说，MSE 隐含了“误差近似高斯、各方向尺度相近”的建模假设。

### 对异常值更稳健的选择

绝对误差

$$
L_{\mathrm{MAE}}=|y-\hat y|
$$

对应拉普拉斯噪声假设，对极端误差不会像平方项那样放大，但在零点不可微且梯度大小恒定。Huber 损失在小误差区使用平方项，在大误差区切换为线性项，是二者之间的折中。

## 五、输出设计必须跟任务一起看

| 任务 | 模型输出 | 常见损失 | 关键含义 |
|---|---|---|---|
| 单标签多分类 | $C$ 个 logits | Softmax 交叉熵 | 类别互斥，概率和为 1 |
| 二分类 | 1 个 logit | Sigmoid 二元交叉熵 | 预测正类概率 |
| 多标签分类 | 每个标签 1 个 logit | 各标签二元交叉熵 | 标签可同时成立 |
| 实数回归 | 1 个或多个实数 | MSE、MAE、Huber | 预测连续目标 |
| 类别分布学习 | $C$ 个 logits | 软标签交叉熵、KL 散度 | 目标本身是概率分布 |

输出层不是为了“让数字看起来合理”而随便加的。例如回归目标可为任意实数时，最后一层通常保持线性；若强行接 Sigmoid，预测会被限制在 $(0,1)$。

## 六、总损失往往不止一项

多任务模型可把若干目标加权：

$$
L_{\mathrm{total}}
=\lambda_{\mathrm{cls}}L_{\mathrm{cls}}
+\lambda_{\mathrm{reg}}L_{\mathrm{reg}}
+\lambda_{\mathrm{aux}}L_{\mathrm{aux}}.
$$

例如下一讲的分类加定位模型，要同时预测类别和边界框。各项的数值尺度可能差很多，权重 $\lambda$ 决定了共享参数主要听谁的梯度。简单相加并不保证任务同等重要。

正则项也可写进优化目标：

$$
J(\theta)
=\frac1N\sum_i\ell_i+\lambda\lVert\theta\rVert_2^2.
$$

它不属于数据拟合误差，而是对参数复杂度施加偏好。

## 七、损失的 reduction 口径

一个 mini-batch 内的样本损失可求和，也可取平均：

$$
L_{\mathrm{sum}}=\sum_{i=1}^B\ell_i,
\qquad
L_{\mathrm{mean}}=\frac1B\sum_{i=1}^B\ell_i.
$$

若使用求和，batch size 翻倍时梯度通常也近似翻倍；若使用平均，梯度尺度对 batch size 更稳定。比较实验或复现公式时，要先确认 reduction 是 `sum`、`mean` 还是逐元素不聚合。

类别不平衡时还可给不同类别或样本加权，但权重会改变目标分布，不能只看训练损失是否变小。

## 八、复习与常见误区

- logits 不是概率；Softmax 后才满足非负且总和为 $1$。
- Softmax 分母必须对全部类别求和，课件中的 $\sum_j$ 不能漏掉类别范围。
- `CrossEntropyLoss` 通常直接接 logits，不要在模型末尾重复加 Softmax。
- MSE 对异常值敏感不是实现缺陷，而是平方惩罚的数学结果。
- 损失乘常数不改变最优点，但会改变梯度尺度和合适的学习率。
- 多任务损失的权重不是装饰，它直接控制每个任务对共享参数的影响。
- 训练损失下降只说明经验风险在下降，不能据此断言测试误差也下降。
