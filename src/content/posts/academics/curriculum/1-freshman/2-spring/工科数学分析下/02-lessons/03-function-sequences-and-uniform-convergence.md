---
title: "第 3 讲：函数列、函数项级数与一致收敛"
description: "分清逐点收敛与一致收敛，掌握上确界、Cauchy、Weierstrass、Dirichlet 和 Abel 判别。"
date: 2026-08-27
---

函数列 $f_n(x)$ 有两个变化来源：$n$ 在变，$x$ 也在变。逐点收敛只要求对每个固定 $x$ 能收敛；一致收敛则要求整个区间用同一个阶段进入误差带。

## 两个量词的次序

逐点收敛到 $f$：

$$
\forall x\in I, \forall\varepsilon>0,
\ \exists N=N(x,\varepsilon),
\ n>N\Rightarrow |f_n(x)-f(x)|<\varepsilon.
$$

一致收敛到 $f$：

$$
\forall\varepsilon>0, \exists N=N(\varepsilon),
\ \forall x\in I, n>N
\Rightarrow |f_n(x)-f(x)|<\varepsilon.
$$

差别只在 $N$ 能不能依赖 $x$，但后果很大。等价地，

$$
f_n\rightrightarrows f\text{ on }I
\iff
\sup_{x\in I}|f_n(x)-f(x)|\to0.
$$

![函数列 x 的 n 次方在闭区间上逐点收敛但不一致收敛](/images/academics/math-analysis-2/uniform-convergence.svg)

例如 $f_n(x)=x^n$ 在 $[0,1]$ 上逐点收敛到

$$
f(x)=\begin{cases}
0,&0\le x<1,\\
1,&x=1.
\end{cases}
$$

但极限函数不连续，而每个 $f_n$ 连续，所以不可能一致收敛。也可取 $x_n=1-1/n$，此时 $x_n^n\to e^{-1}$，误差没有趋零。

## 函数项级数转化为部分和函数列

对

$$
\sum_{n=1}^{\infty}u_n(x),\qquad
S_n(x)=\sum_{k=1}^{n}u_k(x),
$$

所谓逐点或一致收敛，指的都是 $S_n$ 的相应收敛。先求“收敛域”是在每个固定 $x$ 上做数项级数判别；再问“一致收敛区间”才需要全区间共同控制。

一致 Cauchy 原理是：对任意 $\varepsilon>0$，存在与 $x$ 无关的 $N$，使 $m>n>N$ 时

$$
\sup_{x\in I}
\left|\sum_{k=n+1}^{m}u_k(x)\right|<\varepsilon.
$$

它不需要提前知道和函数，是证明判别法的基础。

## 三类常用判别

### Weierstrass 判别

若存在与 $x$ 无关的正数 $M_n$，使

$$
|u_n(x)|\le M_n\quad(x\in I),
$$

且 $\sum M_n$ 收敛，则 $\sum u_n(x)$ 在 $I$ 上一致且绝对收敛。

关键不是随手放大，而是求出或估计

$$
M_n=\sup_{x\in I}|u_n(x)|.
$$

若这个上确界组成的级数发散，只说明 Weierstrass 判别失败，不代表原级数不一致收敛。

### 一致 Dirichlet 判别

若 $\sum_{k=1}^n a_k(x)$ 在 $I$ 上一致有界，而 $b_n(x)$ 对 $n$ 单调并一致趋于 $0$，则 $\sum a_n(x)b_n(x)$ 一致收敛。

它适合三角振荡级数：远离使分母退化的端点后，$\sum_{k=1}^n\sin kx$ 或 $\cos kx$ 的部分和可一致控制。

### 一致 Abel 判别

若 $\sum a_n(x)$ 在 $I$ 上一致收敛，且 $b_n(x)$ 对 $n$ 单调并在 $I$ 上一致有界，则乘积级数一致收敛。

## 一致收敛保存什么

若每个 $f_n$ 在区间上连续，且 $f_n\rightrightarrows f$，则 $f$ 连续。对函数项级数，这意味着连续通项的一致收敛和仍连续。

在闭区间上，一致收敛还允许交换极限与积分：

$$
\lim_{n\to\infty}\int_a^b f_n(x)\,dx
=\int_a^b\lim_{n\to\infty}f_n(x)\,dx.
$$

逐项求导更严格。常用充分条件是：每个 $f_n$ 可导，导函数列 $f_n'$ 一致收敛，并且 $f_n$ 在至少一个点收敛；这时 $f_n$ 一致收敛到某个可导函数且

$$
f'=\lim_{n\to\infty}f_n'.
$$

不能因为原函数列一致收敛就自动逐项求导。

## 怎样证明“不一致”

最实用的三种方法：

1. 计算 $\sup_{x\in I}|f_n(x)-f(x)|$，证明不趋零；
2. 构造随 $n$ 变化的 $x_n$，使误差保持在固定正数以上；
3. 利用性质反推：连续函数列若一致收敛，极限必须连续；若极限不连续，立即否定。

对级数还有一个必要条件：若 $\sum u_n(x)$ 一致收敛，则 $u_n(x)$ 必一致趋于 $0$。因此只要找到 $x_n$ 使 $|u_n(x_n)|\not\to0$，就能快速排除。

做题时应先写清区间。一个级数可能在每个 $[0,r]$、$r<1$ 上一致收敛，却在整个 $[0,1)$ 上不一致收敛；“局部一致”不能偷换成“全域一致”。
