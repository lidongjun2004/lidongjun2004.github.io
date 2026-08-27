---
title: "第 2 讲：数列极限与实数完备性"
description: "数列极限的定义、运算、单调有界原理、Cauchy 准则、Stolz 定理和上下极限。"
date: 2026-08-27
---

数列是定义在正整数上的函数。极限研究的不是前几项，而是当下标不断增大时，后面的所有项能否稳定靠近同一个数。

## $\varepsilon$-$N$ 定义到底在说什么

$$
\lim_{n\to\infty}a_n=A
$$

的严格含义是

$$
\forall\varepsilon>0,\ \exists N\in\mathbb N^*,\
n>N\Rightarrow |a_n-A|<\varepsilon.
$$

$\varepsilon$ 是任意给定的精度，$N$ 是达到这个精度需要等到的阶段。$N$ 可以依赖 $\varepsilon$，但不能依赖之后再选的 $n$。

例如证明 $a_n=1/n\to0$。给定 $\varepsilon>0$，只要取
$N>1/\varepsilon$，则 $n>N$ 时

$$
\left|\frac1n-0\right|<\frac1N<\varepsilon.
$$

否定“$a_n\to A$”时，量词要全部反转：

$$
\exists\varepsilon_0>0,\ \forall N,\ \exists n>N,\
|a_n-A|\ge\varepsilon_0.
$$

这比“偶尔有一项离得远”强：无论走多远，后面仍能找到偏离至少
$\varepsilon_0$ 的项。

## 收敛数列的性质

若 $a_n\to A$，则：

- 极限唯一；
- 数列有界；
- 若 $A>0$，则充分靠后的项为正；
- 每个子列都收敛到 $A$。

反过来，数列有界并不保证收敛。例如 $(-1)^n$ 有界但振荡。

四则运算：

$$
a_n\to A,\quad b_n\to B
$$

时，

$$
a_n\pm b_n\to A\pm B,\qquad
a_nb_n\to AB,
$$

若 $B\ne0$，则

$$
\frac{a_n}{b_n}\to\frac AB.
$$

分母极限不为零是必要条件。仅有每一项 $b_n\ne0$ 不够。

夹逼定理的形式是

$$
a_n\le b_n\le c_n,\qquad
a_n\to L,\ c_n\to L
\quad\Longrightarrow\quad b_n\to L.
$$

## 无穷小、无穷大和阶

趋于 $0$ 的数列叫无穷小。若 $a_n\to A$，等价于

$$
a_n=A+\alpha_n,\qquad \alpha_n\to0.
$$

若对任意 $M>0$，充分大的 $n$ 都有 $a_n>M$，写作
$a_n\to+\infty$。趋于无穷并不是普通的实数极限，不能直接套所有四则运算。

比较两个无穷小常看比值：

$$
\frac{\alpha_n}{\beta_n}\to
\begin{cases}
0,&\alpha_n=o(\beta_n),\\
c\ne0,&\alpha_n\text{ 与 }\beta_n\text{ 同阶},\\
1,&\alpha_n\sim\beta_n.
\end{cases}
$$

## Stolz 定理：离散版 L'Hospital

典型形式：设 $y_n$ 严格递增且 $y_n\to+\infty$，若

$$
\lim_{n\to\infty}
\frac{x_{n+1}-x_n}{y_{n+1}-y_n}=L,
$$

则在相应条件下

$$
\lim_{n\to\infty}\frac{x_n}{y_n}=L.
$$

它特别适合处理“累加量除以增长尺度”。例如

$$
\lim_{n\to\infty}
\frac{1+2+\cdots+n}{n^2}.
$$

令 $x_n=\sum_{k=1}^n k$，$y_n=n^2$，则

$$
\frac{x_{n+1}-x_n}{y_{n+1}-y_n}
=\frac{n+1}{2n+1}\to\frac12.
$$

所以原极限为 $1/2$。

Stolz 定理不是看到两个数列相除就能用。要先核对分母数列的单调性、发散性以及定理所要求的形式。

## 单调有界定理

若数列单调递增且有上界，或单调递减且有下界，则数列收敛。

证明递推数列收敛的标准流程：

1. 用归纳法证明始终落在某区间内；
2. 比较 $a_{n+1}-a_n$ 证明单调；
3. 由单调有界定理得到极限存在；
4. 设极限为 $L$，代回递推关系；
5. 用数列所在区间筛掉不合适的根。

例如

$$
a_1=\sqrt2,\qquad a_{n+1}=\sqrt{2+a_n}.
$$

可证明 $0<a_n<2$ 且单调递增，所以收敛。设极限为 $L$，则

$$
L=\sqrt{2+L},
$$

即 $L=2$ 或 $L=-1$。由 $a_n>0$ 排除 $-1$，故
$L=2$。

不能先写 $L=\sqrt{2+L}$ 再宣称收敛；代极限之前必须先证明极限存在。

## 实数完备性的六种面孔

课件集中介绍了彼此等价的完备性定理：

1. 确界存在定理；
2. 单调有界定理；
3. 闭区间套定理；
4. Bolzano-Weierstrass 列紧性定理；
5. Cauchy 收敛定理；
6. Heine-Borel 有限覆盖定理。

它们不是六个互不相干的技巧，而是在表达同一件事：实数轴没有“本应存在却缺失”的极限点。

### 闭区间套

若

$$
I_n=[a_n,b_n],\qquad
I_1\supseteq I_2\supseteq\cdots,
$$

且 $b_n-a_n\to0$，则存在唯一

$$
\xi\in\bigcap_{n=1}^{\infty}I_n.
$$

闭区间和长度趋零都不能删。开区间套可能交集为空；长度不趋零时交集可能不唯一。

### 列紧性

每个有界数列都有收敛子列。它不保证原数列收敛，例如
$(-1)^n$ 有两个常值子列，分别趋于 $1$ 和 $-1$。

### Cauchy 收敛准则

数列收敛当且仅当

$$
\forall\varepsilon>0,\ \exists N,\ m,n>N
\Rightarrow |a_m-a_n|<\varepsilon.
$$

它不需要预先知道极限是多少，只检查尾部各项是否彼此靠近。

若数列是部分和

$$
s_n=\sum_{k=1}^n u_k,
$$

则

$$
|s_{n+p}-s_n|
=\left|\sum_{k=n+1}^{n+p}u_k\right|.
$$

把尾和一致压到任意小，是常见证明路线。

## 上极限与下极限

对有界数列，定义尾部上、下确界：

$$
\overline a_n=\sup_{k\ge n}a_k,\qquad
\underline a_n=\inf_{k\ge n}a_k.
$$

$\overline a_n$ 单调递减，$\underline a_n$ 单调递增，因此极限存在：

$$
\limsup_{n\to\infty}a_n
=\lim_{n\to\infty}\overline a_n,
$$

$$
\liminf_{n\to\infty}a_n
=\lim_{n\to\infty}\underline a_n.
$$

它们分别是最大的子列极限和最小的子列极限。数列收敛的充要条件是

$$
\limsup a_n=\liminf a_n,
$$

此时公共值就是数列极限。

例如 $a_n=(-1)^n+1/n$，偶数子列趋于 $1$，奇数子列趋于
$-1$，所以

$$
\limsup a_n=1,\qquad \liminf a_n=-1.
$$

## 易错点

- “从第 $N$ 项起”必须控制所有后续项，不只是某一项。
- 有界不推出收敛；单调不推出有限极限，必须配合适当的界。
- 递推式代极限只能在已经证明收敛后使用。
- Cauchy 条件中的 $m,n$ 要能同时任意选取。
- 上极限不是逐项最大值，下极限也不是逐项最小值；它们来自每个尾部的确界。
