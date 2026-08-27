---
title: "第 1 周作业：一维流的精确解"
description: "整理第 1 周正弦一维流的分离变量、初值代入和长期行为"
date: 2026-08-24
tags: ["作业"]
---

源作业为教材练习 2.1.4，要求从隐式积分解出 $\dot x=\sin x$，并处理指定初值与一般初值。

## 题目

已知

$$
\dot x=\sin x
$$

的隐式解可写为

$$
t=\ln\left|
\frac{\csc x_0+\cot x_0}{\csc x+\cot x}
\right|,
$$

其中 $x(0)=x_0$。

1. 当 $x_0=\pi/4$ 时，证明

$$
x(t)=2\arctan\frac{e^t}{1+\sqrt2},
$$

并推出 $t\to\infty$ 时 $x(t)\to\pi$；
2. 对一般初值 $x_0$ 写出解。

## 解答

<details class="exam-answer">
<summary>查看解答</summary>

利用恒等式

$$
\csc x+\cot x
=\frac{1+\cos x}{\sin x}
=\cot\frac x2,
$$

隐式解化为

$$
\cot\frac x2
=e^{-t}\cot\frac{x_0}{2}.
$$

等价地

$$
\tan\frac x2
=e^t\tan\frac{x_0}{2}.
$$

因此在不跨越相邻不动点的连续分支上，

$$
x(t)=2\arctan\left(e^t\tan\frac{x_0}{2}\right).
$$

对 $x_0=\pi/4$，

$$
\tan\frac\pi8=\sqrt2-1=\frac1{1+\sqrt2},
$$

于是得到题目中的表达式。$t\to\infty$ 时反正切的自变量趋于 $+\infty$，所以 $x(t)\to\pi$。

## 分支与特殊初值

$x=k\pi$ 都是不动点，不能套入除以 $\sin x$ 后的公式；若 $x_0=k\pi$，解就是常数 $x(t)=k\pi$。

一般初值应先判断它位于哪个区间 $(k\pi,(k+1)\pi)$，再选择反正切分支。相线表明：

- $(2k\pi,(2k+1)\pi)$ 内 $\sin x>0$，轨道向右趋于 $(2k+1)\pi$；
- $((2k-1)\pi,2k\pi)$ 内 $\sin x<0$，轨道向左趋于 $(2k-1)\pi$。

这也说明偶数倍 $\pi$ 不稳定，奇数倍 $\pi$ 稳定。

</details>
