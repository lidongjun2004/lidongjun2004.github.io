---
title: "第 7 次作业：DFT、DTFT 与频域抽样"
description: "2024–2025 学年第七次作业，含 DFT 计算、循环移位、频域抽样与 IDFT 可逆性。"
date: 2026-08-27
tags: ["作业"]
---

我按 `7信号与系统第七次作业.pdf` 整理。原文件的小题编号有跳号，下面按实际三道大题重排，不改变题目内容。

## 1. 求 DFT

求下列有限长信号的 DFT：

1. $x[n]=\sin(2\pi n/5)+\cos(4\pi n/5)$，$N=5$；
2. $x[n]=\delta[n]+\delta[n-1]-\delta[n-2]-\delta[n-3]$，$N=4$；
3. 同一序列按 $N=5$ 作 DFT。

<details class="exam-answer">
<summary>展开解析</summary>

第一题的正弦落在第 1、4 个频点，余弦落在第 2、3 个频点：

$$
X[k]=[0,-\tfrac52j,\tfrac52,\tfrac52,\tfrac52j].
$$

第二题：

$$
X[k]=[0,2-2j,0,2+2j].
$$

第三题可保留为精确表达式

$$
X[k]=1+e^{-j2\pi k/5}-e^{-j4\pi k/5}-e^{-j6\pi k/5},
\quad k=0,\ldots,4.
$$

</details>

## 2. 移位、DTFT 与稀疏频域抽样

设

$$
x[n]=\delta[n]+\delta[n-1]-\delta[n-2]-\delta[n-3],
\qquad N=4.
$$

1. 求循环移位 $x[n-1]$、$x[n-2]$ 的 DFT；
2. 求 $x[n]$ 的 DTFT；
3. 在一个 $2\pi$ 周期内只等间隔抽两个 DTFT 样本，构造对应时域序列 $x_p[n]$；
4. 能否仅由这个 $x_p[n]$ 恢复原 $x[n]$？

<details class="exam-answer">
<summary>展开解析</summary>

原序列 DFT 为 $X=[0,2-2j,0,2+2j]$。循环延时 $m$ 点对应乘 $e^{-j2\pi km/N}$，因此

$$
\operatorname{DFT}\{x[n-1]\}
=[0,-2-2j,0,-2+2j],
$$

$$
\operatorname{DFT}\{x[n-2]\}
=[0,-2+2j,0,-2-2j].
$$

DTFT 为

$$
X(e^{j\Omega})=1+e^{-j\Omega}-e^{-j2\Omega}-e^{-j3\Omega}.
$$

若只取 $\Omega=0,\pi$ 两个等间隔样本，它们都为 0，所以一种合法的重构结果是全零序列 $x_p[n]=0$。它显然不能恢复原序列，说明少于 $N$ 个频域样本时一般会丢失信息。

</details>

## 3. N 点频域样本能否恢复 N 点序列

证明：对长度为 $N$ 的离散序列 $x[n]$，在一个 $2\pi$ 周期内等间隔抽取 $N$ 个 DTFT 样本，可以恢复原序列。

<details class="exam-answer">
<summary>展开解析</summary>

在 $\Omega_k=2\pi k/N$ 处抽样：

$$
X[k]=X(e^{j\Omega_k})
=\sum_{n=0}^{N-1}x[n]e^{-j2\pi kn/N},
$$

这正是 $N$ 点 DFT。利用复指数正交性

$$
\sum_{k=0}^{N-1}e^{j2\pi k(n-m)/N}
=N\delta[n-m],
$$

可得 IDFT：

$$
x[n]=\frac1N\sum_{k=0}^{N-1}
X[k]e^{j2\pi kn/N},\qquad 0\le n<N.
$$

所以“$N$ 个样本”与上一题“只取两个样本”的差别不在形式，而在是否拥有足够的独立频域信息。

</details>
