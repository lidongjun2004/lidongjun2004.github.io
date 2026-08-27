---
title: "第 12–13 周作业 · 定积分与微积分基本定理"
description: "教学日历第 12–13 周教材作业，合并源文件《第十四周题.pdf》中的手写提交。"
date: 2026-08-27
tags: ["作业"]
---

教学日历把习题 7.1、7.2 列为第 12 周作业，把习题 7.3 列为第 13 周作业；源提交文件名则是《第十四周题.pdf》，其中实际作答覆盖习题 7.2、7.3。这里保留两套周次并合并成一篇：教学日历中的全部原题都放在折叠外，手写提交放在对应题目之后；习题 7.1 没有可辨认的提交，只保留题面。折叠区只记录原提交，不把未完成或算错的部分改成标准答案。源文件第一页是无作业内容的背景图，末页也没有作答，均不作为题目展示。

## 习题 7.1

### 习题 7.1 · 第 1 题（第 2、3 小题）

利用定积分的定义计算下列积分：

1. $\displaystyle\int_0^1x\,dx$；
2. $\displaystyle\int_a^b\frac1{x^2}\,dx$，其中 $b>a>0$。

### 习题 7.1 · 第 2 题

利用定积分的几何意义，计算下列积分：

1. $\displaystyle\int_{-1}^1\sqrt{1-x^2}\,dx$；
2. $\displaystyle\int_a^b\left(x-\frac{a+b}{2}\right)dx$。

## 习题 7.2

### 习题 7.2 · 第 2 题

证明下列函数在给定区间上可积：

1. 设 $f(x)$ 是 $[a,b]$ 上的有界函数，其不连续点为 $x_n$（$n=1,2,\ldots$），且 $\lim_{n\to\infty}x_n=c$。证明 $f(x)$ 在 $[a,b]$ 上可积；
2. 证明函数

   $$
   f(x)=
   \begin{cases}
   0,&x=0,\\
   \dfrac1n,&\dfrac1{n+1}<x\leq\dfrac1n
   \end{cases}
   $$

   在 $[0,1]$ 上可积；
3. 证明 $\operatorname{sgn}\!\left(\sin\dfrac{\pi}{x}\right)$ 在 $[0,1]$ 上可积。

<details class="exam-answer">
<summary>查看手写提交</summary>

源稿只作答第 1 小题。稿中先取 $|f(x)|\leq M$，再令

$$
\delta=\min\{b-c,c-a,\varepsilon\}.
$$

它把 $[c-\delta,c+\delta]$ 上分割小区间的振幅和估计为

$$
\sum \omega_i\Delta x_i
\leq 2M\sum\Delta x_i
=4M\delta,
$$

并写明 $[a,c-\delta]$、$[c+\delta,b]$ 上只有有限个不连续点，因而可积，最后据此断言 $[a,b]$ 可积。原稿没有继续补齐 $\varepsilon$ 与 $\delta$ 的比例选择。

</details>

### 习题 7.2 · 第 4 题

设 $f(x)$ 在 $[a,b]$ 上连续且非负。证明：若

$$
\int_a^b f(x)\,dx=0,
$$

则 $f(x)\equiv0$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中使用反证法：假设存在 $x_0$ 使 $f(x_0)>0$，由连续性取 $x_0$ 的邻域，使邻域中 $f(x)>0$，于是该邻域上的积分严格大于 $0$，与全区间积分为 $0$ 矛盾，故写出 $f(x)\equiv0$。

</details>

### 习题 7.2 · 第 5 题（第 2、3 小题）

不直接计算积分值，比较：

1. $\displaystyle\int_0^{\pi/2}x\,dx$ 与 $\displaystyle\int_0^{\pi/2}\sin x\,dx$；
2. $\displaystyle\int_0^1e^{-x}\,dx$ 与 $\displaystyle\int_0^1e^{-x^2}\,dx$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中对第 2 小题写出：在 $[0,\pi/2]$ 上 $x\geq\sin x$，所以

$$
\int_0^{\pi/2}x\,dx
\geq
\int_0^{\pi/2}\sin x\,dx.
$$

对第 3 小题写出：在 $[0,1]$ 上 $x(1-x)\geq0$，故 $x^2\leq x$，进而 $e^{-x^2}\geq e^{-x}$，所以

$$
\int_0^1e^{-x^2}\,dx
\geq
\int_0^1e^{-x}\,dx.
$$

</details>

### 习题 7.2 · 第 7 题（第 1、2、4 小题）

求下列极限：

1. $\displaystyle\lim_{n\to\infty}\int_0^1\frac{x^n}{1+x}\,dx$；
2. $\displaystyle\lim_{n\to\infty}\int_0^{\pi/2}\sin^n x\,dx$；
3. $\displaystyle\lim_{n\to\infty}\int_n^{n+1}\frac{\cos x}{x}\,dx$。

<details class="exam-answer">
<summary>查看手写提交</summary>

第 1 小题用

$$
0\leq\int_0^1\frac{x^n}{1+x}\,dx
\leq\int_0^1x^n\,dx
=\frac1{n+1}
$$

夹出极限为 $0$。第 2、4 小题在稿中均只写了“不会”。

</details>

### 习题 7.2 · 第 8 题（第 1、3 小题）

证明：

1. $\displaystyle\frac\pi2<\int_0^{\pi/2}\frac{dx}{\sqrt{1-\frac12\sin^2x}}<\frac\pi{\sqrt2}$；
2. $\displaystyle\frac2\pi<\int_0^1\frac{\sin x}{x}\,dx<1$，其中 $x=0$ 处按极限补为 $1$。

<details class="exam-answer">
<summary>查看手写提交</summary>

第 1 小题先写

$$
\sqrt{1-\frac12\sin^2x}\in\left[\frac{\sqrt2}{2},1\right],
$$

再对倒数积分，得到端点为 $\pi/2$ 与 $\pi/\sqrt2$ 的夹估计。第 3 小题写出

$$
\frac2\pi\leq\frac{\sin x}{x}\leq1
$$

并在 $[0,1]$ 上积分。稿中写的是非严格不等号，没有进一步说明为何两端实际取不到等号。

</details>

### 习题 7.2 · 第 9 题

设 $f(x)$ 在 $[0,1]$ 上连续且单调递减。证明对任意 $\beta\in[0,1]$，都有

$$
\int_0^\beta f(x)\,dx
\geq
\beta\int_0^1f(x)\,dx.
$$

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中试图用单调性比较 $[0,\beta]$ 与 $[\beta,1]$ 上的函数值，并写出了一个二重积分形式，但不等式起点和分割后的推导均不完整，无法可靠转录为闭合证明。

</details>

### 习题 7.2 · 第 10 题

设 $f(x),g(x)$ 在 $[a,b]$ 上可积，且两者仅在有限个点处不相等。证明

$$
\int_a^b f(x)\,dx=\int_a^b g(x)\,dx.
$$

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中令 $F(x)=f(x)-g(x)$，把有限个非零点依次记为

$$
a\leq\beta_1\leq\beta_2\leq\cdots\leq\beta_n\leq b,
$$

随后直接写出两积分相等。原稿没有把这些点分别罩在总长度可任意小的区间内，也没有补出相应估计。

</details>

### 习题 7.2 · 第 11 题

证明：

1. $\displaystyle\left(\int_a^bf(x)\sin x\,dx\right)^2+\left(\int_a^bf(x)\cos x\,dx\right)^2\leq(b-a)\int_a^bf^2(x)\,dx$；
2. 当 $f(x)\geq0$ 时，$\displaystyle\left(\int_a^bf(x)\sin nx\,dx\right)^2+\left(\int_a^bf(x)\cos nx\,dx\right)^2\leq\left(\int_a^bf(x)\,dx\right)^2$。

<details class="exam-answer">
<summary>查看手写提交</summary>

第 1 小题分别对 $f(x)\sin x$ 和 $f(x)\cos x$ 使用 Cauchy--Schwarz 不等式，再相加得到

$$
\left(\int_a^bf\sin x\,dx\right)^2+
\left(\int_a^bf\cos x\,dx\right)^2
\leq
\int_a^bf^2(x)\,dx\int_a^b1\,dx.
$$

第 2 小题只写“同理”，没有展开后续步骤。

</details>

## 习题 7.3

### 习题 7.3 · 第 1 题（第 1、3 小题）

利用定积分求极限：

1. $\displaystyle\lim_{n\to\infty}\frac1{n^4}\left(1+2^3+\cdots+n^3\right)$；
2. $\displaystyle\lim_{n\to\infty}\sum_{k=1}^n\frac{\sin\frac{k\pi}{n}}{n+\frac{k}{n}}$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中把两式识别为 Riemann 和，结果依次写为

$$
\int_0^1x^3\,dx=\frac14,
\qquad
\int_0^1\sin(\pi x)\,dx=\frac2\pi.
$$

</details>

### 习题 7.3 · 第 2 题

求：

1. $\displaystyle\lim_{x\to0}\frac1x\int_0^x\cos t^2\,dt$；
2. $\displaystyle\lim_{x\to+\infty}\frac{\left(\int_0^xe^{t^2}\,dt\right)^2}{\int_0^xe^{2t^2}\,dt}$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中两次使用 L'Hospital 法则，所得结果依次为 $1$ 与 $0$。第 2 小题只保留了化成指数比值后的末步，没有写出全部求导过程。

</details>

### 习题 7.3 · 第 3 题（偶数小题）

计算：

1. $\displaystyle\int_{1/4}^{1/2}\frac{\arcsin\sqrt x}{\sqrt{x(1-x)}}\,dx$；
2. $\displaystyle\int_0^{\pi/2}\frac{\cos x}{\sin x+\cos x}\,dx$；
3. $\displaystyle\int_0^ax^2\sqrt{a^2-x^2}\,dx$；
4. $\displaystyle\int_{-2}^{-1}\frac{dx}{x\sqrt{x^2-1}}$；
5. $\displaystyle\int_0^2\frac{1+x^2}{1+x^4}\,dx$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中第 2、4、6、8 小题的结果依次写为

$$
\frac{5\pi^2}{144},\qquad
\frac\pi4,\qquad
\frac{\pi a^4}{16},\qquad
-\frac\pi3.
$$

其中第 2 小题令 $u=\arcsin\sqrt x$；第 6 小题令 $x=a\sin t$；第 8 小题写成反三角函数的端点差。第 10 小题只写“不会”。

</details>

### 习题 7.3 · 第 4 题（第 1、5、7、9 小题）

计算：

1. $\displaystyle\int_0^2\max\{x^2,x\}\,dx$；
2. $\displaystyle\int_0^2(2x+1)\sqrt{2x-x^2}\,dx$；
3. $\displaystyle\int_0^1\frac{\ln(1+x)}{1+x^2}\,dx$；
4. $\displaystyle\int_0^1x^2\sqrt{1-x^2}\,dx$。

<details class="exam-answer">
<summary>查看手写提交</summary>

第 1 小题按 $x=1$ 分段，写成

$$
\int_0^1x\,dx+\int_1^2x^2\,dx=\frac{17}{6}.
$$

第 5、7 小题均只写“不会”。第 9 小题尝试令 $t=\sqrt{1-x^2}$，但换元后的式子停在中途，没有给出结果。

</details>

### 习题 7.3 · 第 5 题

设 $f(x)$ 在 $[0,+\infty)$ 上连续，且 $\lim_{x\to+\infty}f(x)=a$。证明

$$
\lim_{x\to+\infty}\frac1x\int_0^xf(t)\,dt=a.
$$

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中直接写出

$$
\lim_{x\to+\infty}\frac{\int_0^xf(t)\,dt}{x}
=\lim_{x\to+\infty}f(x)=a,
$$

即使用 L'Hospital 法则，没有另行讨论使用条件。

</details>

### 习题 7.3 · 第 6 题

设 $f(x)$ 在 $[0,1]$ 上连续且 $f(x)>0$。将

$$
\lim_{n\to\infty}\sqrt[n]{f\!\left(\frac1n\right)f\!\left(\frac2n\right)\cdots f\!\left(\frac{n-1}{n}\right)f(1)}
$$

表示为积分形式。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中先取对数，把乘积化为 $\ln f$ 的 Riemann 和，最后写成

$$
\exp\left(\int_0^1\ln f(x)\,dx\right).
$$

</details>

### 习题 7.3 · 第 7、9 题

1. 设 $f(x)$ 在 $[a,b]$ 上连续且单调递增。证明 $\displaystyle\int_a^bxf(x)\,dx\geq\frac{a+b}{2}\int_a^bf(x)\,dx$；
2. 证明 $\displaystyle\int_0^{\pi/2}(\sin\theta-\cos\theta)\ln(\sin\theta+\cos\theta)\,d\theta=0$。

<details class="exam-answer">
<summary>查看手写提交</summary>

源稿最后一页只写“7、9 不会”，没有提交解答。

</details>
