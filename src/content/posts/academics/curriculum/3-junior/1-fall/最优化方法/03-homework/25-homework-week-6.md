---
title: "第 6 周作业：对偶与互补松弛"
description: "整理多种符号约束下的 LP 对偶写法、互补松弛求解和对偶图解法"
date: 2026-08-24
tags: ["作业"]
---

本周源文件是我的手写作业。我根据扫描中可辨认的原式与作答过程还原题面，并用课程参考解逐项核对系数；重点不只是写出答案，还要说明每个对偶符号从哪里来。

## 题目（根据扫描还原）

本次作业共四题：为两类含混合约束和变量符号的线性规划写出对偶；根据对偶最优解和互补松弛反求原问题；通过二维对偶图解求原问题；分析右端参数变化和影子价格。各题可辨认的完整模型保留在折叠作答中。

<details class="exam-answer">
<summary>查看还原题面与解答</summary>

## 第 1 题：混合约束与变量符号

### （1）最大化问题

根据作答过程还原原问题：

$$
\begin{aligned}
\max\quad &4x_1-3x_2+5x_3\\
\text{s.t.}\quad
&3x_1+x_2+2x_3\le15,\\
&-x_1+2x_2-7x_3\ge3,\\
&2x_1+x_3=1,\\
&x_1,x_2,x_3\ge0.
\end{aligned}
$$

对最大化问题，三类约束依次对应 $w_1\ge0$、$w_2\le0$、$w_3$ 自由；三个原变量非负，因此三条对偶约束均为“$\ge$”：

$$
\begin{aligned}
\min\quad &15w_1+3w_2+w_3\\
\text{s.t.}\quad
&3w_1-w_2+2w_3\ge4,\\
&w_1+2w_2\ge-3,\\
&2w_1-7w_2+w_3\ge5,\\
&w_1\ge0,\quad w_2\le0,\quad w_3\text{ 自由}.
\end{aligned}
$$

检查某条对偶约束时，只需取原约束矩阵的对应一列。例如第一列是 $(3,-1,2)^T$，所以得到 $3w_1-w_2+2w_3\ge4$。

### （2）最小化问题

根据作答过程还原原问题：

$$
\begin{aligned}
\min\quad &-4x_1-5x_2-7x_3+x_4\\
\text{s.t.}\quad
&x_1+x_2+2x_3-x_4\ge1,\\
&2x_1-6x_2+3x_3+x_4\le-3,\\
&x_1+4x_2+3x_3+2x_4=-5,\\
&x_1,x_2,x_4\ge0,\quad x_3\text{ 自由}.
\end{aligned}
$$

第一、二、三条约束分别给 $w_1\ge0$、$w_2\le0$、$w_3$ 自由。最小化问题中的非负原变量给“$\le$”对偶约束，自由变量 $x_3$ 给等式：

$$
\begin{aligned}
\max\quad &w_1-3w_2-5w_3\\
\text{s.t.}\quad
&w_1+2w_2+w_3\le-4,\\
&w_1-6w_2+4w_3\le-5,\\
&2w_1+3w_2+3w_3=-7,\\
&-w_1+w_2+2w_3\le1,\\
&w_1\ge0,\quad w_2\le0,\quad w_3\text{ 自由}.
\end{aligned}
$$

这两小问最稳的做法是先由原约束方向确定 $w_i$ 的符号，再逐列写对偶约束；不要同时背两套大表。

## 第 2 题：由对偶最优解反求原解

根据作答过程还原原问题：

$$
\begin{aligned}
\min\quad &4x_1+3x_2+x_3\\
\text{s.t.}\quad
&x_1-x_2+x_3\ge1,\\
&x_1+2x_2-3x_3\ge2,\\
&x_1,x_2,x_3\ge0.
\end{aligned}
$$

其对偶为

$$
\begin{aligned}
\max\quad &w_1+2w_2\\
\text{s.t.}\quad
&w_1+w_2\le4,\\
&-w_1+2w_2\le3,\\
&w_1-3w_2\le1,\\
&w_1,w_2\ge0.
\end{aligned}
$$

图解或枚举顶点得到

$$
w^*=\left(\frac53,\frac73\right)^T,
\qquad b^Tw^*=\frac{19}{3}.
$$

前两条对偶约束取等号，第三条严格松弛：

$$
\frac53-3\cdot\frac73=-\frac{16}{3}<1.
$$

由互补松弛，$x_3=0$。又因为 $w_1,w_2>0$，两条原约束都取等号：

$$
x_1-x_2=1,\qquad x_1+2x_2=2.
$$

因此

$$
\boxed{x^*=\left(\frac43,\frac13,0\right)^T},
\qquad
\boxed{f^*=\frac{19}{3}}.
$$

原、对偶目标值相同，也顺手完成了最优性核验。

## 第 3 题：先解二维对偶

根据作答过程还原原问题：

$$
\begin{aligned}
\max\quad &10x_1+7x_2+30x_3+2x_4\\
\text{s.t.}\quad
&x_1-6x_3+x_4\le-2,\\
&x_1+x_2+5x_3-x_4\le-7,\\
&x_1\text{ 自由},\quad x_2,x_3,x_4\le0.
\end{aligned}
$$

对偶是

$$
\begin{aligned}
\min\quad &-2w_1-7w_2\\
\text{s.t.}\quad
&w_1+w_2=10,\\
&w_2\le7,\\
&-6w_1+5w_2\le30,\\
&w_1-w_2\le2,\\
&w_1,w_2\ge0.
\end{aligned}
$$

由 $w_1+w_2=10$ 和其余不等式可得最优点

$$
\boxed{w^*=(3,7)^T},\qquad b^Tw^*=-55.
$$

此时 $x_3,x_4$ 对应的对偶约束严格松弛，所以 $x_3=x_4=0$；又因 $w_1,w_2>0$，两条原约束均活动：

$$
x_1=-2,\qquad x_1+x_2=-7.
$$

故

$$
\boxed{x^*=(-2,-5,0,0)^T},\qquad
\boxed{f^*=-55}.
$$

注意 $x_2$ 对应的对偶约束 $w_2\le7$ 恰好取等号，不能把它误说成严格松弛。

## 第 4 题：参数右端与影子价格

根据作答过程还原原问题：

$$
\begin{aligned}
\min\quad &5x_1+21x_3\\
\text{s.t.}\quad
&x_1-x_2+6x_3\ge b,\\
&x_1+x_2+2x_3\ge1,\\
&x_1,x_2,x_3\ge0.
\end{aligned}
$$

其对偶为

$$
\begin{aligned}
\max\quad &bw_1+w_2\\
\text{s.t.}\quad
&w_1+w_2\le5,\\
&-w_1+w_2\le0,\\
&6w_1+2w_2\le21,\\
&w_1,w_2\ge0.
\end{aligned}
$$

已知原最优解

$$
x^*=\left(\frac12,0,\frac14\right)^T.
$$

因为 $x_1,x_3>0$，第一、三条对偶约束取等号：

$$
w_1+w_2=5,\qquad 6w_1+2w_2=21.
$$

解得

$$
\boxed{w^*=\left(\frac{11}{4},\frac94\right)^T}.
$$

两个对偶变量都为正，所以两条原约束均活动。第二条已经满足

$$
\frac12+2\cdot\frac14=1;
$$

第一条给

$$
\boxed{b=\frac12+6\cdot\frac14=2}.
$$

最后核对强对偶：

$$
5\cdot\frac12+21\cdot\frac14
=\frac{31}{4}
=2\cdot\frac{11}{4}+\frac94.
$$

## 作业自检

- 约束方向决定对偶变量符号，原变量符号决定对偶约束方向。
- 互补松弛要双向使用：“原变量正 $\Rightarrow$ 对偶约束紧”，“对偶变量正 $\Rightarrow$ 原约束紧”。
- 解出变量后必须同时核对原可行、对偶可行和原对偶目标值相等。

</details>
