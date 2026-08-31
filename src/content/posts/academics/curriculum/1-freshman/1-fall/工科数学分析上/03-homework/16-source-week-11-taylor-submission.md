---
title: "第 11 周主观作业提交 · 微分与 Taylor 公式"
description: "源文件《第十一周题.pdf》的手写提交转录，题面按教材习题 5.1 与 5.2 还原。"
date: 2026-08-27
tags: ["作业"]
---

源目录中的《第十一周题.pdf》只有两页手写作答，没有单独附题。下面根据手写稿中的章节号、题号和公式，与教材习题 5.1、5.2 逐项对应后还原题面；折叠内容只转录这份提交本身，不把它改写成标准答案。个别模糊或明显算错的地方也照实说明。

## 习题 5.1

### 习题 5.1 · 第 1 题（第 1、3、5、7、9、11 小题）

分别求一个函数，使其微分为：

1. $\dfrac{dx}{x}$；
2. $\dfrac{dx}{\sqrt x}$；
3. $(\cos x+\sin x)\,dx$；
4. $e^{-ax}\,dx$；
5. $\dfrac{dx}{x\ln x}$；
6. $\cos^2x\sin x\,dx$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中依次填写为

$$
\ln x,\qquad 2\sqrt x,\qquad \sin x-\cos x,\qquad
-\frac{e^{-ax}}a,\qquad \ln\ln x.
$$

第 11 小题旁写的是“不会”。

</details>

### 习题 5.1 · 第 2 题（第 1、3、5、7、9、11 小题）

求下列函数的一阶和二阶微分：

1. $y=x^4+5x$；
2. $y=x\ln x$；
3. $y=\dfrac{u+1}{u-1}$；
4. $y=\sqrt{x+\ln x}$；
5. $y=x^2e^{3x}$；
6. $y=\sin x^2$。

<details class="exam-answer">
<summary>查看手写提交</summary>

手写稿给出的可辨认部分为：

1. $dy=(4x^3+5)\,dx$，$d^2y=12x^2(dx)^2$；
2. $dy=(\ln x+1)\,dx$，$d^2y=\dfrac1x(dx)^2$；
3. $dy=-\dfrac2{(u-1)^2}\,du$，$d^2y=\dfrac4{(u-1)^3}(du)^2$；
4. $dy=\dfrac{x+1}{2x\sqrt{x+\ln x}}\,dx$；二阶微分的分子笔迹无法可靠辨清；
5. $dy=(3x^2+2x)e^{3x}\,dx$，$d^2y=(9x^2+12x+2)e^{3x}(dx)^2$；
6. $dy=2x\cos x^2\,dx$，$d^2y=(2\cos x^2-4x^2\sin x^2)(dx)^2$。

</details>

### 习题 5.1 · 第 3 题（第 2、4 小题）

利用微分近似计算：

1. $y=\sqrt{4+5x}$，$x=0$，$dx=0.004$ 时的 $dy$；
2. $y=\tan x$，$x=\dfrac\pi4$，$dx=-0.1$ 时的 $dy$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中写为

$$
dy=\frac{5\,dx}{2\sqrt{5x+4}}=0.0025,
\qquad
dy=\sec^2x\,dx=-0.2.
$$

其中第一项的代数式清楚，但稿上最后的数值就是 $0.0025$，这里未替它改正。

</details>

## 习题 5.2

### 习题 5.2 · 第 1 题

将多项式 $1+3x+5x^2-2x^3+x^4$ 按 $x-1$ 的幂展开。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中写出一个关于 $x-1$ 的四次展开式，但中间两个系数较模糊，末项记作 $-16$。由于原稿无法支持可靠的逐字符转录，这里不补造缺失系数。

</details>

### 习题 5.2 · 第 2、3、4 题

1. 写出 $e^{ax}$、$\ln(1-x)$ 与 $\dfrac{x^3+2x+1}{x+1}$ 的带 Peano 余项的 Maclaurin 公式；
2. 求 $\arcsin x$ 的带 Peano 余项的 Maclaurin 公式；
3. 分别展开 $\dfrac{x}{\sin x}$、$e^{x-x^2}$ 与 $\sqrt[3]{\sin x^3}$，达到教材指定的阶数。

<details class="exam-answer">
<summary>查看手写提交</summary>

手写稿中可可靠辨认的展开为

$$
e^{ax}=1+ax+\frac{a^2x^2}{2!}+\cdots+\frac{a^nx^n}{n!}+o(x^n),
$$

$$
\ln(1-x)=-x-\frac{x^2}{2}-\cdots-\frac{x^n}{n}+o(x^n),
$$

以及

$$
\arcsin x=
\sum_{k=0}^{n}
\frac{(2k-1)!!}{(2k+1)(2k)!!}x^{2k+1}
+o(x^{2n+2}).
$$

稿中还写出

$$
\frac{x}{\sin x}=1+\frac{x^2}{6}+\frac{13x^4}{360}+o(x^4),
$$

以及

$$
\sqrt[3]{\sin x^3}
=x-\frac{x^7}{18}-\frac{17x^{13}}{3240}+o(x^{13}).
$$

$e^{x-x^2}$ 和有理函数的展开式有多处涂改，无法在不猜测的情况下完整还原。

</details>

### 习题 5.2 · 第 6、7 题

1. 利用 Taylor 公式计算教材第 6 题的第 1、3、5 个极限；
2. 计算 $\displaystyle\lim_{n\to\infty}n^2\ln\left(n\sin\dfrac1n\right)$。

<details class="exam-answer">
<summary>查看手写提交</summary>

第 6 题三个结果在稿中依次记为

$$
\frac1{128},\qquad -\frac14,\qquad \frac16.
$$

第 7 题的推导末尾写成 $\dfrac16$；原稿中间有明显划改，这里保留其提交值，不另行校正。

稿末还写有三处“不会”，编号看起来是 9、11（也可能是 12）和 14；第二个编号笔迹不足以唯一判定。

</details>
