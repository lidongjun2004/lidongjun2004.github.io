---
title: "第 9 周作业 · 微分与 Taylor 公式"
description: "教学日历第 9 周教材作业，合并源文件《第十一周题.pdf》中的手写提交。"
date: 2026-08-27
tags: ["作业"]
---

教学日历把这次教材作业列为第 9 周，源提交文件名则是《第十一周题.pdf》。两套周次来自不同材料，实际都对应习题 5.1、5.2，因此合并为这一篇，不再把题面和提交拆开。题目按教学日历完整转录；折叠内容只记录手写提交，不把它改写成标准答案。个别模糊、漏答或明显算错的地方也照实说明。

## 习题 5.1

### 习题 5.1 · 第 1 题（第 1、3、5、7、9、11 小题）

填空：

1. $\displaystyle d(\quad)=\frac{dx}{x}$；
2. $\displaystyle d(\quad)=\frac{dx}{\sqrt x}$；
3. $d(\quad)=(\cos x+\sin x)\,dx$；
4. $d(\quad)=e^{-ax}\,dx$；
5. $\displaystyle d(\quad)=\frac{dx}{x\ln x}$；
6. $d(\quad)=\cos^2x\sin x\,dx$。

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

根据题目中给出的 $x$ 和 $dx$，求微分 $dy$：

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

### 习题 5.2 · 第 2 题（第 1、3、5 小题）

写出下列函数带 Peano 余项的 Maclaurin 公式：

1. $e^{ax}$，其中 $a\neq0$；
2. $\ln(1-x)$；
3. $\dfrac{x^3+2x+1}{x+1}$。

### 习题 5.2 · 第 3 题

求出 $\arcsin x$ 的带 Peano 余项的 Maclaurin 公式。

### 习题 5.2 · 第 4 题（第 2、4、6 小题）

按指定要求写出下列函数带 Peano 余项的 Maclaurin 公式：

1. $\dfrac{x}{\sin x}$，写到含 $o(x^4)$ 的项；
2. $e^{x-x^2}$，写到含 $o(x^5)$ 的项；
3. $\sqrt[3]{\sin x^3}$，写到含 $x^{13}$ 的项。

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

### 习题 5.2 · 第 5 题（第 2 小题）

写出函数 $f(x)=\sin x$ 在 $x_0=1$ 处带 Peano 余项的 Taylor 公式。源提交中没有可辨认的对应作答。

### 习题 5.2 · 第 6 题（第 1、3、5 小题）

利用 Taylor 公式求下列极限：

1. $\displaystyle\lim_{x\to0}\frac{e^{x^3}-1-x^3}{\sin^62x}$；
2. $\displaystyle\lim_{x\to+\infty}x^{3/2}\left(\sqrt{x+1}+\sqrt{x-1}-2\sqrt x\right)$；
3. $\displaystyle\lim_{x\to0}\frac{\sqrt{1+2\sin x}-e^x+x^2}{x^3}$。

### 习题 5.2 · 第 7 题（第 1 小题）

利用 Taylor 公式求数列极限

$$
\lim_{n\to\infty}n^2\ln\left(n\sin\frac1n\right).
$$

<details class="exam-answer">
<summary>查看手写提交</summary>

第 6 题三个结果在稿中依次记为

$$
\frac1{128},\qquad -\frac14,\qquad \frac16.
$$

第 7 题的推导末尾写成 $\dfrac16$；原稿中间有明显划改，这里保留其提交值，不另行校正。

</details>

### 习题 5.2 · 第 9 题

利用 Taylor 公式证明：对任意 $x>0$，有

$$
x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots-\frac{x^{2n}}{2n}
<\ln(1+x)
<x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots+\frac{x^{2n-1}}{2n-1}.
$$

### 习题 5.2 · 第 12 题

设 $f(x)$ 在 $\mathbb R$ 上二次可微，且对任意 $x\in\mathbb R$ 有

$$
|f(x)|\leqslant M_0,
\qquad
|f''(x)|\leqslant M_2.
$$

1. 写出 $f(x+h)$、$f(x-h)$ 关于 $h$ 的带 Lagrange 余项的 Taylor 公式；
2. 证明：对任意 $h>0$，有

   $$
   |f'(x)|\leqslant\frac{M_0}{h}+\frac h2M_2;
   $$

3. 证明 $|f'(x)|\leqslant\sqrt{2M_0M_2}$。

### 习题 5.2 · 第 14 题

设函数 $f(x)$ 在 $[a,b]$ 上有一阶连续导数，在 $(a,b)$ 上二阶可导，且 $f(a)=f(b)=0$。证明：任取 $x\in(a,b)$，存在 $\xi\in(a,b)$，使得

$$
f(x)=\frac{f''(\xi)}2(x-a)(x-b).
$$

<details class="exam-answer">
<summary>查看手写提交</summary>

稿末写有三处“不会”，编号看起来是 9、11（也可能是 12）和 14。教学日历指定的是第 9、12、14 题，但第二个手写编号不足以唯一判定，因此这里只保留这处不确定性，不把它强行归到第 12 题。

</details>
