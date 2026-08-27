---
title: "第 9 讲：环、子环、环同态与理想"
description: "区分子环和理想，并理解理想为何是取商时真正需要的结构。"
date: 2026-08-27
---

验证 $S\subseteq R$ 是子环，通常检查非空、对减法和乘法封闭。理想 $I$ 除了是加法子群，还要求能吸收整个环的乘法：

$$
r\in R, a\in I\Longrightarrow ra,ar\in I.
$$

因此理想一定是子环，但子环通常不是理想。例如 $\mathbb Z\subset\mathbb Q$ 是子环，却不是 $\mathbb Q$ 的理想，因为 $(1/2)\cdot1\notin\mathbb Z$。

子环只要求“内部运算不跑出去”；理想则要求即使拿**整个大环**的元素从外面来乘，也仍留在其中。这一额外吸收性，正是商环乘法能良定义的原因。

在非交换环中要区分左理想、右理想和双边理想：

$$
rI\subseteq I,
\qquad Ir\subseteq I.
$$

课程写 $I\trianglelefteq R$ 时通常指双边理想。交换环里两边没有区别。

## $\mathbb Z$ 的理想

任取非零理想 $I\subseteq\mathbb Z$，设其中最小正整数为 $n$。对任意 $a\in I$ 做带余除法 $a=qn+r$，其中 $0\le r<n$。因为 $r=a-qn\in I$，最小性迫使 $r=0$，故 $a$ 都是 $n$ 的倍数。于是

$$
I=n\mathbb Z=(n).
$$

所以 $\mathbb Z$ 的全部理想恰是 $(0),(1),(2),\ldots$。

## 同态与商环

环同态保持加法和乘法；课程约定含幺环同态还保持 $1$。它的核是理想，像是子环。若 $I\trianglelefteq R$，商集 $R/I$ 以

$$
(a+I)+(b+I)=a+b+I,\qquad
(a+I)(b+I)=ab+I
$$

成为环。同态基本定理为

$$
R/\ker\varphi\cong\operatorname{Im}\varphi.
$$

最常见的理想来自评价同态。例如连续函数环 $C[0,1]$ 中，$\operatorname{ev}_c(f)=f(c)$ 的核是所有在 $c$ 处为零的函数。因为评价同态满射到 $\mathbb R$，这个核的商环同构于 $\mathbb R$，故它是极大理想。

多项式评价同样重要。固定 $a\in F$，映射

$$
\operatorname{ev}_a:F[x]\to F,
\qquad f(x)\mapsto f(a)
$$

的核为 $(x-a)$。同态基本定理给出

$$
F[x]/(x-a)\cong F.
$$

这个结论把“模 $x-a$ 取余”与“代入 $a$”统一起来，因为余式定理本来就说余数是 $f(a)$。

## 主理想

交换环中由 $a$ 生成的主理想为 $(a)=\{ra:r\in R\}$。在 $\mathbb Z$ 中每个理想都是 $(n)$；在域 $F$ 上的多项式环 $F[x]$ 中每个理想也是主理想。一般环则未必。

多个元素生成的理想记为

$$
(a_1,\ldots,a_k)
=\left\{r_1a_1+\cdots+r_ka_k:r_i\in R\right\}.
$$

在 $\mathbb Z$ 中，$(m,n)=(\gcd(m,n))$；例如 $(6,15)=(3)$。这正是 Bézout 等式的理想写法。

## 理想的运算

若 $I,J\trianglelefteq R$，则

$$
I+J=\{a+b:a\in I,b\in J\},
$$

交 $I\cap J$ 仍是理想，而积 $IJ$ 是所有有限和 $\sum a_ib_i$ 组成的理想。一般有

$$
IJ\subseteq I\cap J,
$$

当 $I+J=R$ 时二者相等，这会在中国剩余定理中使用。

### 一个商环算例

在 $\mathbb Z_{12}$ 中，理想

$$
([4])=\{[0],[4],[8]\}
$$

是模 $4$ 映射 $\mathbb Z_{12}\to\mathbb Z_4$ 的核，所以

$$
\mathbb Z_{12}/([4])\cong\mathbb Z_4.
$$

商环元素是四个陪集，而不是理想中的三个元素。计算商结构大小时，先数陪集，不要把分母的大小直接当答案。
