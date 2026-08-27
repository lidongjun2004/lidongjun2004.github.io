---
title: "第三次作业 · 函数"
description: "判断关系能否构成函数，并练习函数交、复合与迭代"
date: 2026-08-27
tags: ["作业"]
---

源文件保留了本次作业的 4 道题及手写作答。下面先按原题整理题面，再把作答誊清到折叠块中。

## 第 2 题

试问下列关系中哪个能构成函数：

1. $\{(x_1,x_2)\mid x_1,x_2\in\mathbb N, x_1+x_2<10\}$；
2. $\{(x,y)\mid x,y\in\mathbb R, y=x^2\}$；
3. $\{(x,y)\mid x,y\in\mathbb R, y^2=x\}$。

<details class="exam-answer">
<summary>展开查看作答</summary>

只有第 2 个关系能构成从 $\mathbb R$ 到 $\mathbb R$ 的函数。

- 第 1 个关系中，同一个 $x_1$ 可以对应多个 $x_2$，而 $x_1\geq10$ 时又没有满足条件的输出；
- 第 2 个关系中，每个实数 $x$ 都唯一对应 $y=x^2$；
- 第 3 个关系中，$x>0$ 时通常对应 $y=\pm\sqrt x$ 两个值，$x<0$ 时没有实数输出。

</details>

## 第 5 题

设 $f,g$ 都是函数，证明 $f\cap g$ 是函数。

<details class="exam-answer">
<summary>展开查看作答</summary>

把函数视为有序偶的集合。若 $x\in\operatorname{dom}(f\cap g)$，则至少存在一个 $y$ 使 $(x,y)\in f\cap g$。

若同时有 $(x,y_1),(x,y_2)\in f\cap g$，那么二者都属于函数 $f$。由 $f$ 的单值性，$y_1=y_2$。因此 $f\cap g$ 在自己的定义域上对每个输入恰有一个输出，是函数。

注意：它的定义域只包含 $f(x)=g(x)$ 的输入，不一定等于 $f$ 或 $g$ 原来的整个定义域。

</details>

## 第 8 题

设 $f,g,h$ 是从 $\mathbb N$ 到 $\mathbb N$ 的函数：

$$
f(n)=n+1,\qquad g(n)=2n,\qquad
h(n)=
\begin{cases}
0,&n\text{ 是偶数},\\
1,&n\text{ 是奇数}.
\end{cases}
$$

试确定 $f\circ f$、$f\circ g$、$g\circ h$、$h\circ g$ 及 $(f\circ g)\circ h$。

<details class="exam-answer">
<summary>展开查看作答</summary>

按 $(f\circ g)(n)=f(g(n))$ 计算：

$$
(f\circ f)(n)=n+2,\qquad(f\circ g)(n)=2n+1.
$$

$$
(g\circ h)(n)=
\begin{cases}
0,&n\text{ 是偶数},\\
2,&n\text{ 是奇数},
\end{cases}
$$

因为 $g(n)=2n$ 永远是偶数：

$$
(h\circ g)(n)=0.
$$

最后：

$$
((f\circ g)\circ h)(n)=
\begin{cases}
1,&n\text{ 是偶数},\\
3,&n\text{ 是奇数}.
\end{cases}
$$

</details>

## 第 10 题

设 $f$ 是从 $A$ 到 $A$ 的函数，证明：对任意 $m,n\in\mathbb N$，都有：

$$
f^m\circ f^n=f^{m+n}.
$$

<details class="exam-answer">
<summary>展开查看作答</summary>

对任意 $x\in A$：

$$
(f^m\circ f^n)(x)=f^m(f^n(x)).
$$

$f^n$ 表示连续应用 $n$ 次 $f$，外面再应用 $m$ 次，一共应用 $m+n$ 次，所以：

$$
f^m(f^n(x))=f^{m+n}(x).
$$

两个函数在任意输入上的值都相同，故 $f^m\circ f^n=f^{m+n}$。

</details>
