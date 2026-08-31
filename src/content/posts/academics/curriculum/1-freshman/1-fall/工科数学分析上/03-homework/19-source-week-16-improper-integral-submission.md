---
title: "第 16 周主观作业提交 · 广义积分"
description: "源文件《第十六周题.pdf》的手写提交与教师批注转录，题面按教材习题 9.1、9.2 与 9.4 还原。"
date: 2026-08-27
tags: ["作业"]
---

源目录中的《第十六周题.pdf》没有独立题面，正文是带红色批改痕迹的手写作答。下面按题号与教材对应，保留可辨认的提交值和教师批注，不把被批错的推导替换成标准答案。首尾空白页不作为题目展示。

## 习题 9.1

### 习题 9.1 · 第 1 题（第 3、5、7、10 小题）

计算：

1. $\displaystyle\int_0^{+\infty}\frac{dx}{x^4+a^4}$；
2. $\displaystyle\int_0^{+\infty}\frac{x\ln x}{(1+x^2)^2}\,dx$；
3. $\displaystyle\int_0^{+\infty}\frac{dx}{1+x^3}$；
4. $\displaystyle\int_0^{+\infty}e^{-ax}\sin bx\,dx$，其中 $a>0$，$b\neq0$。

<details class="exam-answer">
<summary>查看手写提交与批注</summary>

第 3 小题令 $x=a\tan t$，最后写成 $\pi/(4a^3)$；该行被红笔划出，未写教师改正值。

第 5 小题令 $t=1/x$，把积分化为自身的相反数，得到

$$
I=-I,
\qquad I=0,
$$

旁有红色对勾。

第 7 小题先做部分分式分解，提交结果为

$$
\frac{2\pi}{3\sqrt3},
$$

旁有红色对勾。

第 10 小题使用分部积分，并把 $e^{-ax}\sin bx$ 合并成带相位的指数衰减形式，最后提交

$$
I=\frac{b}{a^2+b^2}.
$$

中间一段推导被红笔划改，但末值保留。

</details>

### 习题 9.1 · 第 3 题

求 $c$，使

$$
\int_0^{+\infty}\left(\frac{2x}{x^2+1}-\frac{c}{2x+1}\right)dx
$$

收敛，并求积分值。

<details class="exam-answer">
<summary>查看手写提交与批注</summary>

稿中合并对数后比较无穷远处的发散项，分别讨论 $c<4$、$c>4$ 和 $c=4$，最后提交

$$
c=4,
\qquad
I=-2\ln2.
$$

旁有红色对勾。

</details>

### 习题 9.1 · 第 6 题

设 $f(x)$ 在 $[a,+\infty)$ 上连续，且 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛。证明存在数列 $x_n\to+\infty$，使 $f(x_n)\to0$。

<details class="exam-answer">
<summary>查看手写提交与批注</summary>

提交从“假设 $\lim_{x\to+\infty}f(x)=A\neq0$”开始，用积分尾部与常数比较来制造矛盾，最后断言 $A=0$，再称由极限定义可取所需数列。

教师在这一页用红字指出：“函数极限不一定存在。”因此原稿的起点并不由题设保证，这份证明被判为无效。

</details>

## 习题 9.2

### 习题 9.2 · 第 1 题（第 1、3、7 小题）

判断：

1. $\displaystyle\int_1^{+\infty}\frac{x}{1+x^2}\,dx$；
2. $\displaystyle\int_1^{+\infty}\frac{dx}{1+x|\sin x|}$；
3. $\displaystyle\int_0^{+\infty}\frac{\arctan x}{1+x^p}\,dx$。

<details class="exam-answer">
<summary>查看手写提交</summary>

第 1 小题写出被积函数与 $1/x$ 的极限比较，结论为发散。

第 3 小题用

$$
\frac1{1+x|\sin x|}\geq\frac1{1+x}
$$

比较，结论为发散。

第 7 小题在 $x=1$ 处分段。稿中根据 $\arctan x\sim x$（$x\to0^+$）与 $\arctan x\sim\pi/2$（$x\to+\infty$）写出：当 $p>1$ 时收敛，当 $0<p\leq1$ 时发散。源题未限定 $p$ 的范围，稿中也没有讨论 $p\leq0$。

</details>

### 习题 9.2 · 第 2 题

设 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛。是否一定有 $\lim_{x\to+\infty}f(x)=0$？证明：如果极限存在且等于实数 $b$，则 $b=0$。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中分别假设 $b>0$ 与 $b<0$。以 $b>0$ 为例，取足够大的 $M$，使 $x>M$ 时 $f(x)>b/2$，于是尾积分下界随上限趋向无穷，与收敛矛盾；$b<0$ 同理。最后写出 $b=0$。

</details>

### 习题 9.2 · 第 4 题

设 $g(x)\leq f(x)\leq h(x)$，且 $\displaystyle\int_a^{+\infty}g(x)\,dx$、$\displaystyle\int_a^{+\infty}h(x)\,dx$ 都收敛。证明 $\displaystyle\int_a^{+\infty}f(x)\,dx$ 收敛。

<details class="exam-answer">
<summary>查看手写提交</summary>

稿中由

$$
0\leq f(x)-g(x)\leq h(x)-g(x)
$$

先写出 $\int_a^{+\infty}[h(x)-g(x)]\,dx$ 收敛，再用比较判别得到 $\int_a^{+\infty}[f(x)-g(x)]\,dx$ 收敛，最后加回 $g$，得到 $\int_a^{+\infty}f(x)\,dx$ 收敛。

</details>

## 习题 9.4

### 习题 9.4 · 第 1 题（第 1、4、6 小题）

计算：

1. $\displaystyle\int_0^a\frac{dx}{\sqrt{a-x}}$；
2. $\displaystyle\int_{-1}^1\frac{|x|}{(2-x^2)\sqrt{1-x^2}}\,dx$；
3. $\displaystyle\int_0^1x^m\ln^n x\,dx$。

<details class="exam-answer">
<summary>查看手写提交与批注</summary>

第 1 小题提交为

$$
2\sqrt a,
$$

旁有红色对勾。

第 4 小题利用偶函数对称性，再令 $t=\sqrt{1-x^2}$，提交结果为

$$
\frac\pi2.
$$

换元中间一步被红笔改写，末值保留。

第 6 小题连续分部积分，提交为

$$
\frac{(-1)^n n!}{(m+1)^{n+1}},
$$

旁有红色对勾。稿中没有另写参数取值条件。

</details>
