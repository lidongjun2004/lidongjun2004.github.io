---
title: "第 14 讲 · 强化学习"
description: "从 MDP、Bellman 方程走到动态规划、蒙特卡洛、TD、SARSA、Q-learning 与 DQN。"
date: 2026-08-27
---

监督学习每个样本都有答案，强化学习却只有奖励。智能体选动作后，环境进入新状态；新状态又决定下一次看到的数据。奖励还可能延迟：棋局中某步的好坏，要到很久以后才知道。

![强化学习中智能体与环境的交互闭环](/images/academics/freshman-ai-intro/rl-loop.svg)

## 先区分规划和强化学习

规划知道环境转移和奖励规则，可以在内部模型里搜索或计算；强化学习通常不知道完整模型，要从实际或模拟交互中估计。二者都在选择行动序列，但信息条件不同。

强化学习的基本对象：状态 $s$、动作 $a$、奖励 $r$、策略 $\pi(a\mid s)$、价值函数，以及可选的环境模型。

## Markov 性、MRP 与 MDP

Markov 性表示：给定当前状态，未来与更早历史条件独立。它不要求世界真的没有历史，而要求“状态”已经包含预测未来所需的信息。

Markov Reward Process 可写成 $(S,P,R,\gamma)$。从时刻 $t$ 开始的折扣回报：

$$
G_t=R_{t+1}+\gamma R_{t+2}+\gamma^2R_{t+3}+\cdots
$$

$0\le\gamma<1$ 让远期奖励权重逐步降低，并使无限和稳定。状态价值是预期回报：

$$
V(s)=\mathbb E[G_t\mid S_t=s]
$$

利用 $G_t=R_{t+1}+\gamma G_{t+1}$，得到 Bellman 方程：

$$
V(s)=\mathbb E[R_{t+1}+\gamma V(S_{t+1})\mid S_t=s]
$$

MDP 再加入动作，写作 $(S,A,P,R,\gamma)$。给定策略 $\pi$：

$$
V_\pi(s)=\sum_a\pi(a\mid s)Q_\pi(s,a)
$$

$$
Q_\pi(s,a)=\sum_{s',r}p(s',r\mid s,a)
[r+\gamma V_\pi(s')]
$$

最优动作价值满足 Bellman 最优方程：

$$
Q_*(s,a)=\sum_{s',r}p(s',r\mid s,a)
\left[r+\gamma\max_{a'}Q_*(s',a')\right]
$$

## 已知模型：动态规划

若 $p(s',r\mid s,a)$ 已知，可以反复做完整期望备份。

**策略迭代**：

1. 策略评估：计算当前 $V_\pi$；
2. 策略改进：每个状态改选使一步回报加后继价值最大的动作；
3. 重复直到策略稳定。

**价值迭代**把评估和改进压进一次最优备份：

$$
V_{k+1}(s)=\max_a\sum_{s',r}p(s',r\mid s,a)
[r+\gamma V_k(s')]
$$

价值估计和策略相互促进的思想称为广义策略迭代。

## 不知道模型：蒙特卡洛

蒙特卡洛方法跑完一条完整 episode，再用实际回报 $G_t$ 更新访问过的状态或状态—动作对。

- first-visit MC：每个 episode 只用某状态第一次访问后的回报；
- every-visit MC：每次访问都计入平均。

它不需要环境模型，也不自举，但必须等回合结束，回报方差可能很大。为了学习所有动作，需要探索起点，或使用 $\varepsilon$-soft 策略：大部分时间选当前最佳动作，小概率随机探索。

## TD：走一步就学一步

TD(0) 使用一步奖励和下一状态的当前估计：

$$
V(S_t)\leftarrow V(S_t)+\alpha\delta_t
$$

$$
\delta_t=R_{t+1}+\gamma V(S_{t+1})-V(S_t)
$$

$\delta_t$ 是 TD error。TD 不等 episode 结束，并通过已有估计更新已有估计，这叫 bootstrapping。

| 方法 | 需要模型 | 等完整回合 | 自举 |
|---|---|---|---|
| 动态规划 | 是 | 否 | 是 |
| 蒙特卡洛 | 否 | 是 | 否 |
| TD | 否 | 否 | 是 |

## SARSA 与 Q-learning

SARSA 的名字来自更新使用的五元组 $(S_t,A_t,R_{t+1},S_{t+1},A_{t+1})$：

$$
Q(S_t,A_t)\leftarrow Q(S_t,A_t)+\alpha[
R_{t+1}+\gamma Q(S_{t+1},A_{t+1})-Q(S_t,A_t)]
$$

它按当前行为策略实际选出的下一动作更新，是 on-policy。若 $\varepsilon$-greedy 还会探索危险动作，这个风险也会进入价值估计。

Q-learning 改用下一状态中的最大值：

$$
Q(S_t,A_t)\leftarrow Q(S_t,A_t)+\alpha[
R_{t+1}+\gamma\max_a Q(S_{t+1},a)-Q(S_t,A_t)]
$$

行为可以继续探索，更新目标却假设下一步采取贪心动作，因此是 off-policy。表格型例子会为每个“网格位置—动作”存一个 $Q$ 值，再通过交互逐步传播终点奖励。

## 从 Q 表到 DQN

状态很多或连续时，Q 表存不下。DQN 用神经网络 $Q(s,a;\theta)$ 近似所有动作价值，并让当前预测靠近 TD 目标：

$$
y=r+\gamma\max_{a'}Q(s',a';\theta^-)
$$

$$
L(\theta)=[y-Q(s,a;\theta)]^2
$$

课件重点是“用网络代替表格”和“构造目标值”。实践中通常让目标参数 $\theta^-$ 暂时固定，以减少目标随着当前网络同时移动造成的不稳定；这里只保留课件涉及的基本思路，不扩展完整工程算法族。

## 一条贯穿全讲的理解线

价值函数做的是**信用分配**：把后面得到的奖励逐步传回较早状态和动作。动态规划用已知模型做期望，MC 用完整实际回报，TD 混合一步真实奖励和后继估计；SARSA 与 Q-learning 再把状态价值扩展为动作价值。

到这里，课程的三条路线闭环：知识图谱显式存知识，机器学习从样本拟合函数，搜索和强化学习则把函数用于一连串行动。
