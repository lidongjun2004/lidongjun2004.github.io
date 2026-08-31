---
title: "课程汇报 · PPO 近端策略优化"
description: "梳理 PPO 的提出背景、优势函数、概率比裁剪、策略损失、价值损失、熵正则及 Actor-Critic 训练流程"
date: 2026-08-23
tags: ["AI", "作业"]
---

PPO（Proximal Policy Optimization，近端策略优化）要解决一个强化学习中很现实的问题：**策略需要更新，但一步改得太猛，刚收集到的数据就会失效，性能甚至会突然崩掉**。PPO 不追求每次跨很远，而是让新策略在可信的小范围内反复利用同一批数据。

## 汇报任务边界

源目录只保留了 `PPO.pptx` 和配套讲稿，没有独立的教师题面。因此能客观确认的任务是：围绕 PPO 完成一次课程专题汇报。我在下面折叠保存现存汇报材料的整理，不补写没有事实材料支持的时长、页数或评分规则。

<details class="exam-answer">
<summary>查看汇报内容</summary>

## 从策略梯度说起

策略网络 $\pi_\theta(a\mid s)$ 输入状态 $s$，输出动作 $a$ 的概率。目标是最大化期望累计回报：

$$
J(\theta)=\mathbb E_{\tau\sim\pi_\theta}
\left[\sum_{t=0}^{T}\gamma^t r_t\right]
$$

REINFORCE 的策略梯度可写为：

$$
\nabla_\theta J(\theta)
=\mathbb E\left[
\nabla_\theta\log\pi_\theta(a_t\mid s_t)G_t
\right]
$$

$G_t$ 是从时刻 $t$ 开始的实际回报。直接使用它通常方差很大：一次偶然的好轨迹可能让参数发生剧烈变化。Actor-Critic 用价值网络 $V_\phi(s)$ 作为基线，把“这一步到底比通常情况好多少”写成优势函数：

$$
A_t=Q(s_t,a_t)-V(s_t)
$$

实践中常使用时序差分残差：

$$
\delta_t=r_t+\gamma V_\phi(s_{t+1})-V_\phi(s_t)
$$

或广义优势估计 GAE：

$$
\hat A_t=\sum_{l=0}^{T-t-1}(\gamma\lambda)^l\delta_{t+l}
$$

$\lambda$ 越小，估计偏差通常更大但方差更小；越接近 1，则更依赖较长的真实回报。

## 为什么旧数据不能直接反复训练

一批轨迹由旧策略 $\pi_{\theta_{\text{old}}}$ 采集。更新参数后，当前策略已经变成 $\pi_\theta$，样本分布不再完全匹配。重要性采样用概率比修正这种差别：

$$
r_t(\theta)=
\frac{\pi_\theta(a_t\mid s_t)}
{\pi_{\theta_{\text{old}}}(a_t\mid s_t)}
$$

于是代理目标为：

$$
L^{\text{PG}}(\theta)
=\mathbb E_t\left[r_t(\theta)\hat A_t\right]
$$

但如果 $r_t$ 偏离 1 很远，单个样本就可能主导更新。比如 $\hat A_t>0$ 表示该动作比预期好，优化器会持续增大它的概率；若没有限制，概率可能一次被推得过高。

## PPO-Clip 的核心

PPO 把概率比裁剪到 $[1-\epsilon,1+\epsilon]$，并取保守的那个目标：

$$
L^{\text{CLIP}}(\theta)=
\mathbb E_t\left[
\min\left(
r_t(\theta)\hat A_t,
\operatorname{clip}(r_t(\theta),1-\epsilon,1+\epsilon)\hat A_t
\right)
\right]
$$

理解这个式子要分两种情况：

- $\hat A_t>0$：这是个好动作，希望提高概率，但 $r_t$ 超过 $1+\epsilon$ 后不再给额外奖励；
- $\hat A_t<0$：这是个坏动作，希望降低概率，但 $r_t$ 低于 $1-\epsilon$ 后不再鼓励继续压低。

`min` 不是简单把所有概率比裁掉，而是选择对策略改进更悲观的下界。典型 $\epsilon$ 可取 0.1 或 0.2，但仍需按任务调节。

## 完整的 Actor-Critic 损失

![PPO 的 Actor-Critic 训练闭环](/images/machine-learning/30-35/ppo-actor-critic.svg)

除了更新策略的 Actor，还需要训练预测状态价值的 Critic。价值损失可写为：

$$
L^{V}(\phi)=
\mathbb E_t\left[
\left(V_\phi(s_t)-\hat R_t\right)^2
\right]
$$

策略若过早变得近乎确定，就可能停止探索，因此还常加入策略分布的熵：

$$
H(\pi_\theta)=-\sum_a\pi_\theta(a\mid s)
\log\pi_\theta(a\mid s)
$$

若用梯度下降最小化，总损失的一种常见写法是：

$$
L(\theta,\phi)
=-L^{\text{CLIP}}(\theta)
+c_1L^V(\phi)
-c_2\mathbb E_t[H(\pi_\theta)]
$$

符号容易混淆：论文常写“最大化的目标”，代码常写“最小化的 loss”。只要策略项、价值项和熵项的优化方向一致即可。

## 一轮 PPO 训练发生了什么

1. 固定当前策略为 $\pi_{\theta_{\text{old}}}$，与环境交互若干步；
2. 保存状态、动作、奖励、终止标记和旧动作对数概率；
3. 用价值网络计算回报 $\hat R_t$ 与优势 $\hat A_t$；
4. 通常将整批优势标准化，减小尺度波动；
5. 把轨迹打乱成多个 mini-batch；
6. 对同一批数据训练多个 epoch，重新计算新旧概率比；
7. 用裁剪策略损失、价值损失与熵奖励共同更新网络；
8. 丢弃这批轨迹，用更新后的策略重新采样。

旧动作概率必须在采样时保存并固定。如果每次优化都把“旧策略”同步成当前策略，概率比就会重新接近 1，裁剪机制等于失效。

## PPO 与 TRPO 的关系

TRPO（Trust Region Policy Optimization）显式限制新旧策略之间的 KL 散度，并用二阶近似求解约束优化，理论动机清楚，但实现复杂、计算代价较高。PPO 延续“可信区域”的思想，用一阶优化和裁剪代理目标近似限制步幅：

- 实现更简单，可直接配合 SGD/Adam；
- 同一批 on-policy 数据可以做若干轮小批量更新；
- 在许多控制任务上稳定且调参相对直接；
- 但裁剪并不严格保证 KL 一定受限，步幅仍需监控。

工程上经常记录 approximate KL、clip fraction、策略熵、value loss 与 explained variance。若 KL 突然变大或大量样本被裁剪，通常意味着学习率、训练 epoch 数或 $\epsilon$ 过大。

## 提出背景与应用

PPO 由 OpenAI 的 John Schulman 等人在 2017 年论文 *Proximal Policy Optimization Algorithms* 中提出。课件列出的典型应用包括机器人连续控制和游戏 AI：前者需要策略在高维动作空间中稳定更新，后者则要从大量交互轨迹中不断改进决策。PPO 的价值不在于只适合某一种环境，而在于用相对简单的一阶优化获得较稳定的策略更新，因此常被作为强化学习实验的强基线。

## 一个符号级例子

设某动作在旧策略下概率为 0.4，新策略下为 0.52，则：

$$
r_t=\frac{0.52}{0.4}=1.3
$$

取 $\epsilon=0.2$：

- 若 $\hat A_t=2$，未裁剪目标为 $1.3\times2=2.6$，裁剪目标为 $1.2\times2=2.4$，最终取 2.4；
- 若 $\hat A_t=-2$，两者分别为 $-2.6$ 与 $-2.4$，`min` 取 $-2.6$，会推动优化器纠正这次错误方向。

这说明 PPO 不是无条件把梯度截断，而是只取消“沿有利方向走得过远”所带来的额外收益。

## 常见误区

- **PPO 不是 off-policy 算法**：能复用一批数据几个 epoch，不等于能长期使用任意旧经验回放；
- **clip 不是梯度裁剪**：它裁剪的是新旧策略的动作概率比；
- **Critic 不是环境奖励**：它只预测状态价值，帮助降低策略梯度方差；
- **熵越大不一定越好**：熵奖励过大会让策略迟迟无法收敛；
- **只看总 reward 不够**：还要检查 KL、裁剪比例、价值拟合和熵，才能判断训练是否健康。

## 一页复习

- Actor 决定动作，Critic 估计价值；
- 优势函数衡量动作相对基线有多好；
- 概率比修正旧策略采样与新策略评估的差别；
- PPO-Clip 把策略改动的收益限制在可信范围；
- 总损失由策略、价值和熵三部分组成；
- 训练节奏是“采样一批—多轮小步更新—重新采样”。

</details>
