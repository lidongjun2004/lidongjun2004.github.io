---
title: "第 15 周主观作业提交 · 定积分的应用"
description: "源文件《第十五周题.pdf》的手写提交转录，题面按教材习题 8.1、8.2 与 8.3 还原。"
date: 2026-08-27
tags: ["作业"]
---

源目录中的《第十五周题.pdf》只有手写作答，没有独立题面。下面按稿中的题号与教材对应，题目放在折叠外，提交内容放在折叠内。原稿中的遗漏、笔误和未完成项照实记录，不以标准答案覆盖；第一页是空白笔记封面，不作为题目展示。

## 习题 8.1

### 习题 8.1 · 第 3 题

已知 $y^2=2px$ 和 $x^2+y^2=2Rx$ 交于 $O,A,B$ 三点。求 $p$，使由 $y^2=2px$ 与弦 $\overline{AB}$ 所围图形的面积达到最大，并求其最大值。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中先由交点关系写出

$$
x_A=x_B=2(R-p),
\qquad
y_A=-y_B=2\sqrt{p(R-p)},
$$

再把面积写成关于 $p$ 的积分并求导。求导后的分式和最后的 $p$、$S_{\max}$ 笔迹互相叠压，无法在不猜测的情况下可靠转录，因此这里只保留可辨认的建模步骤。

</details>

### 习题 8.1 · 第 5 题

计算星形线

$$
x^{2/3}+y^{2/3}=a^{2/3}
$$

所围图形的面积。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中取参数方程 $x=a\cos^3t$、$y=a\sin^3t$，利用四象限对称性积分，最后写为

$$
S=\frac{3\pi a^2}{8}.
$$

</details>

### 习题 8.1 · 第 7 题

求双纽线 $r^2=a^2\cos2\theta$ 所围图形的面积。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中利用四瓣对称写成极坐标面积积分，结果为

$$
S=a^2.
$$

</details>

## 习题 8.2

### 习题 8.2 · 第 1 题

求由曲线 $y=x$ 和 $y=x^2$ 所围图形绕 $x$ 轴旋转一周所得旋转体的体积。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中写为

$$
V=\pi\int_0^1(x^2-x^4)\,dx=\frac{2\pi}{15}.
$$

</details>

### 习题 8.2 · 第 3 题

求旋轮线

$$
\begin{cases}
x=a(t-\sin t),\\
y=a(1-\cos t),
\end{cases}
\qquad0\leq t\leq2\pi
$$

与 $x$ 轴所围图形绕 $x$ 轴旋转所得旋转体的体积。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中写出

$$
V=\pi a^3\int_0^{2\pi}(1-\cos t)^3\,dt,
$$

并把结果记为 $5\pi^2a^3$。

</details>

### 习题 8.2 · 第 5 题

求由 $(x-2)^2+y^2=1$ 所围图形绕 $y$ 轴旋转所得旋转体的体积。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中把左右边界写成 $x=2\pm\sqrt{1-y^2}$，用圆环法得到

$$
V=8\pi\int_{-1}^1\sqrt{1-y^2}\,dy=4\pi^2.
$$

</details>

### 习题 8.2 · 第 7 题

过原点作 $y=\ln x$ 的切线。该切线与 $y=\ln x$、$x$ 轴围成区域 $D$，求 $D$ 绕 $x$ 轴旋转一周所得旋转体的体积。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中求得切线 $y=x/e$，并分别写出

$$
V_1=\pi\int_0^e\left(\frac xe\right)^2dx=\frac{\pi e}{3},
$$

$$
V_2=\pi\int_1^e(\ln x)^2dx=(e-2)\pi.
$$

最后提交值为

$$
V=V_1-V_2=2\pi-\frac{2\pi e}{3}.
$$

</details>

### 习题 8.2 · 第 10 题（第 2、4 小题）

求下列曲线绕指定轴旋转一周所得旋转曲面的面积：

1. $y=\sqrt{3-x^2}$，$-1\leq x\leq1$，绕 $x$ 轴；
2. $x^2=4y$，$0\leq x\leq2$，绕 $y$ 轴。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中标为“10.(2)”的第一段实际写成

$$
2\pi\int_0^\pi\sin x\sqrt{1+\cos^2x}\,dx
=2\sqrt2\pi+2\pi\ln(\sqrt2+1),
$$

这与题面第 2 小题不对应，而是习题 8.2 第 10 题第 1 小题 $y=\sin x$ 绕 $x$ 轴的计算。这里保留这处错题号，不替提交改题。

第 4 小题的结果写为

$$
S=\frac{8\pi}{3}(2\sqrt2-1).
$$

</details>

### 习题 8.2 · 第 12 题

求旋轮线的一拱

$$
\begin{cases}
x=a(t-\sin t),\\
y=a(1-\cos t),
\end{cases}
\qquad0\leq t\leq2\pi
$$

绕 $x$ 轴旋转一周所得旋转曲面的面积。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中按参数曲线的旋转曲面公式积分，提交结果为

$$
S=\frac{64\pi a^2}{3}.
$$

</details>

## 习题 8.3

### 习题 8.3 · 第 1 题（第 1、3 小题）

求下列曲线的弧长：

1. 旋轮线 $x=a(t-\sin t)$、$y=a(1-\cos t)$，$0\leq t\leq2\pi$；
2. $y=\ln\cos x$，$0\leq x\leq\pi/3$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中第 1、3 小题的结果依次为

$$
L=8a,
\qquad
L=\ln(2+\sqrt3).
$$

</details>

### 习题 8.3 · 第 2 题

求下列曲线在指定点的曲率：

1. $xy=1$，点 $(1,1)$；
2. 摆线 $x=a(t-\sin t)$、$y=a(1-\cos t)$ 在 $t=\pi/2$ 对应的点。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中第 1 小题结果写为

$$
k=\frac{\sqrt2}{2}.
$$

第 2 小题列出 $x'(t)=a-a\cos t$、$y'(t)=a\sin t$、$x''(t)=a\sin t$、$y''(t)=a\cos t$，并在 $t=\pi/2$ 处写出

$$
k=\frac1{2\sqrt2a}.
$$

</details>

### 习题 8.3 · 第 3 题（第 1、3 小题）

求下列曲线的曲率与曲率半径：

1. 抛物线 $x^2=2py$，$p>0$；
2. 双纽线 $(x^2+y^2)^2=a^2(x^2-y^2)$，$a>0$。

<details class="exam-answer">
<summary>查看手写提交</summary>

第 1 小题提交为

$$
k=\frac{p^2}{(p^2+x^2)^{3/2}},
\qquad
\rho=\frac{(p^2+x^2)^{3/2}}{p^2}.
$$

第 3 小题只写“不会”。

</details>
