---
title: "第二十五讲 · SGD、Momentum、AdamW 与学习率调度"
description: "从普通 SGD 出发推导 Momentum、AdaGrad、RMSProp、Adam 与 AdamW，并梳理预热、衰减和余弦学习率策略"
date: 2026-08-23
tags: ["AI"]
---

反向传播给出当前 mini-batch 的梯度，优化器决定如何利用当前和历史梯度更新参数。最朴素的 SGD 只看眼前方向；Momentum 记住方向；AdaGrad、RMSProp 和 Adam 还会根据每个参数近期梯度的尺度调整步长。

这些方法并没有绕过梯度下降，而是在构造一个更合适的更新方向和有效学习率。

## 一、统一记号

第 $t$ 步 mini-batch 梯度记为

$$
g_t=\nabla_\theta L_t(\theta_t).
$$

普通 SGD 更新为

$$
\theta_{t+1}=\theta_t-\eta_tg_t.
$$

$\eta_t$ 是全局学习率。若不同坐标的梯度尺度差异巨大，同一个 $\eta_t$ 会面临两难：对陡峭方向太大时振荡，对平坦方向合适时又前进太慢。

## 二、Momentum：给梯度加惯性

一种常见写法是梯度指数移动平均：

$$
m_t=\beta m_{t-1}+(1-\beta)g_t,
$$

$$
\theta_{t+1}=\theta_t-\eta_t m_t.
$$

$\beta$ 常接近 $1$。连续同向的梯度会在 $m_t$ 中积累，来回变号的方向则会相互抵消，于是狭长谷底中的横向振荡减弱、纵向前进加快。

另一种教材和框架常用

$$
v_t=\beta v_{t-1}-\eta_tg_t,
\qquad
\theta_{t+1}=\theta_t+v_t.
$$

两种写法的 $(1-\beta)$ 与学习率尺度不同，不能只抄同一个 $\beta,\eta$ 就认为完全等价。看实现时要先确认状态量到底存的是“平均梯度”还是“参数速度”。

### Nesterov Momentum

普通 Momentum 在当前位置算梯度；Nesterov 方法先按惯性向前看，再在预估位置纠偏：

$$
g_t=\nabla L(\theta_t+\beta v_{t-1}),
$$

$$
v_t=\beta v_{t-1}-\eta_tg_t,
\qquad
\theta_{t+1}=\theta_t+v_t.
$$

直觉上，它不是冲过头后再刹车，而是在将要到达的位置提前观察坡度。

## 三、AdaGrad：为每个参数累计平方梯度

AdaGrad 维护逐元素平方梯度和：

$$
s_t=s_{t-1}+g_t\odot g_t,
$$

$$
\theta_{t+1}
=\theta_t-
\eta\frac{g_t}{\sqrt{s_t}+\varepsilon}.
$$

$\odot$ 表示逐元素乘法。某坐标历史梯度一直很大，则分母变大、有效步长缩小；稀疏特征很少收到梯度，分母较小，偶尔更新时能走得更远。

问题是 $s_t$ 只增不减，训练很久后有效学习率可能衰减得过小，再也走不动。

## 四、RMSProp：只记近期的平方尺度

RMSProp 把全历史累加改成指数移动平均：

$$
s_t=\rho s_{t-1}+(1-\rho)g_t\odot g_t,
$$

$$
\theta_{t+1}
=\theta_t-
\eta\frac{g_t}{\sqrt{s_t}+\varepsilon}.
$$

近期梯度对 $s_t$ 影响更大，久远梯度逐渐遗忘。当某坐标近期梯度突然增大，分母跟着增大以抑制步长；梯度持续变小时，分母也会下降，允许有效步长恢复。

课件把 $\sigma_t$ 称为 root mean square。实现时应明确：状态通常保存的是平方均值 $s_t$，真正更新前再取 $\sqrt{s_t}$，并加入 $\varepsilon$ 防止除零。

## 五、Adam：Momentum 加 RMSProp

Adam 同时维护一阶矩和二阶矩：

$$
\begin{aligned}
m_t&=\beta_1m_{t-1}+(1-\beta_1)g_t,\\
v_t&=\beta_2v_{t-1}+(1-\beta_2)g_t\odot g_t.
\end{aligned}
$$

初始 $m_0=v_0=0$，早期移动平均会偏向零，因此要做偏差修正：

$$
\hat m_t=\frac{m_t}{1-\beta_1^t},
\qquad
\hat v_t=\frac{v_t}{1-\beta_2^t}.
$$

参数更新为

$$
\theta_{t+1}
=\theta_t-
\eta_t\frac{\hat m_t}{\sqrt{\hat v_t}+\varepsilon}.
$$

$\hat m_t$ 提供平滑方向，$\hat v_t$ 按坐标缩放步长。Adam 往往在早期训练和梯度尺度差异大的问题上容易使用，但“自适应”不等于不需要调学习率，也不保证泛化一定优于精心调好的 SGD。

### 一个尺度直觉

假设第一次梯度为

$$
g_1=(100,0.01).
$$

普通 SGD 两坐标的更新量相差 $10^4$ 倍。忽略 $\varepsilon$ 时，自适应方法第一次用 $|g_1|$ 归一化，两个方向的更新量都接近 $\eta$。这说明它能缓和尺度不一致，也说明梯度绝对大小的信息被部分消除了；接近零的噪声坐标若 $\varepsilon$ 太小，也可能被放大。

## 六、L2 正则与 weight decay 不是处处等价

把 L2 正则加进损失：

$$
L_{\mathrm{reg}}(\theta)
=L(\theta)+\frac\lambda2\lVert\theta\rVert_2^2
$$

会使梯度多出 $\lambda\theta_t$。普通 SGD 更新为

$$
\theta_{t+1}
=(1-\eta_t\lambda)\theta_t-\eta_t g_t,
$$

看起来就是每步先把权重缩小一点，因此 L2 正则与 weight decay 在普通 SGD 下可对应。

对 Adam 而言，若把 $\lambda\theta$ 混入梯度，它也会被逐坐标的二阶矩缩放，不再是统一比例衰减。AdamW 将权重衰减从梯度适配中解耦：

$$
\theta_{t+1}
=(1-\eta_t\lambda)\theta_t
-\eta_t\frac{\hat m_t}{\sqrt{\hat v_t}+\varepsilon}.
$$

这就是 decoupled weight decay 的核心。工程中通常不会对偏置和归一化层的缩放、平移参数使用与主权重完全相同的衰减策略，需要显式检查参数分组。

## 七、学习率调度

优化器公式中的 $\eta_t$ 不一定恒定。训练前期离目标远，可以走得快；后期接近较好区域，需要小步精修。

### 阶梯或指数衰减

阶梯衰减在指定里程碑把学习率乘一个系数：

$$
\eta_t=\eta_0\gamma^{k(t)},
$$

$k(t)$ 是已经经过的里程碑数。指数衰减则让 $k(t)$ 随训练步连续增长。

### 余弦衰减

在总调度长度 $T$ 内，余弦策略可写为

$$
\eta_t
=\eta_{\min}
+\frac12(\eta_{\max}-\eta_{\min})
\left(1+\cos\frac{\pi t}{T}\right).
$$

它从最大值平滑下降到最小值，末期变化较缓。若使用 cosine restart，则每个周期重新升高学习率；没有 restart 的普通余弦退火不会自动反弹。

### Warmup

预热在最初 $T_w$ 步把学习率从很小的值逐渐升到目标值，线性形式为

$$
\eta_t=\eta_{\max}\frac{t}{T_w},
\qquad 0\le t\le T_w.
$$

课件从自适应方法早期二阶矩估计方差较大解释 warmup。更一般地，大模型、大 batch、残差网络或混合精度训练的早期激活与梯度尚不稳定，直接使用峰值学习率容易发散。预热后通常还要接衰减，而不是一直保持峰值。

## 八、如何选择

- 先用 AdamW 获得稳健基线，尤其适合 Transformer 和稀疏、尺度不均的梯度。
- CNN 分类等成熟配方中，SGD 加 Momentum 仍可能得到很强泛化，但通常需要更仔细的学习率与训练时长调节。
- AdaGrad 适合稀疏特征，却可能过早衰减；RMSProp 通过遗忘历史缓解这一点。
- 优化器比较必须连同学习率、调度、weight decay、batch size 和训练步数一起比较。

## 九、复习与常见误区

- Momentum 关注历史方向，自适应二阶矩关注历史幅度，两者解决的问题不同。
- 不同资料对 Momentum 状态量的缩放约定不同，公式参数不能盲目照搬。
- AdaGrad 的分母单调累积，RMSProp 用指数平均遗忘旧梯度。
- Adam 的偏差修正针对从零初始化的一、二阶矩，不能漏掉。
- AdamW 的关键是把 weight decay 与自适应梯度更新解耦。
- warmup 是先升后降调度的前半段，不是单独把训练永久变慢。
- 学习率调度按 step 还是 epoch 触发必须说清；二者混用会让衰减时刻相差一个 epoch 的 batch 数。
