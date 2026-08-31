---
title: "第 2 次作业：正态抽样分布与 t、F 统计量"
description: "week3 作业原题整理：正态样本均值、F 对称性、t 构造、卡方概率与学生化残差。"
date: 2026-08-27
tags: ["作业"]
---

题目按源文件 week3.pdf 顺序整理。源文件第 6 题的“最小常数”与不等式方向不相容，解答中如实指出，并给出有实际意义的边界值。

## 题 1：两个正态样本均值

从 $N(100,4)$ 总体分别独立抽取容量为 $15$ 和 $20$ 的样本，样本均值为 $\bar X,\bar Y$。求

$$
P(|\bar X-\bar Y|\ge0.2).
$$

<details class="exam-answer">
<summary>展开解答</summary>

$$
\bar X-\bar Y\sim
N\left(0,\frac4{15}+\frac4{20}\right)
=N\left(0,\frac7{15}\right).
$$

所以

$$
P(|\bar X-\bar Y|\ge0.2)
=2\left[
1-\Phi\left(\frac{0.2}{\sqrt{7/15}}\right)
\right].
$$

因标准化值约为 $0.293$，概率约为

$$
\boxed{0.770}.
$$

</details>

## 题 2：关于常数 $c$ 的概率界

设 $X_1,\ldots,X_n$ 来自 $N(\mu,1)$。确定最小的常数 $c$，使对任意 $\mu\ge0$，有

$$
P(|\bar X|<c)\le\alpha.
$$

<details class="exam-answer">
<summary>展开解答</summary>

对 $c>0$，

$$
g(\mu)=P_\mu(|\bar X|<c)
=\Phi(\sqrt n(c-\mu))
-\Phi(\sqrt n(-c-\mu)).
$$

在 $\mu\ge0$ 上，$g(\mu)$ 的最大值出现在 $\mu=0$，所以条件等价于

$$
2\Phi(\sqrt n\,c)-1\le\alpha.
$$

即

$$
0<c\le
\frac{\Phi^{-1}((1+\alpha)/2)}{\sqrt n}.
$$

因此原题若坚持问“最小的正数”，并不存在最小值，只有下确界 $0$；若本意是问**最大的允许值**，则

$$
\boxed{
c_{\max}=
\frac{\Phi^{-1}((1+\alpha)/2)}{\sqrt n}
}.
$$

我当时的手写作答也得到 $c\le\cdots$，这印证了题面文字存在问题。

</details>

## 题 3：$F(n,n)$ 在 1 两侧的概率

设随机变量 $X\sim F(n,n)$，证明 $P(X<1)=0.5$。

<details class="exam-answer">
<summary>展开解答</summary>

可写

$$
X=\frac{U/n}{V/n}=\frac UV,
$$

其中 $U,V$ 独立且同服从 $\chi^2(n)$。交换 $U,V$ 不改变联合分布，因此

$$
\frac1X=\frac VU\overset d=X.
$$

于是

$$
P(X<1)=P(1/X<1)=P(X>1).
$$

$F$ 分布连续，$P(X=1)=0$，故

$$
\boxed{P(X<1)=P(X>1)=\frac12}.
$$

</details>

## 题 4：两个正态线性组合的比值

$X_1,X_2$ 来自 $N(0,\sigma^2)$，求

$$
Y=\left(\frac{X_1+X_2}{X_1-X_2}\right)^2
$$

的分布。

<details class="exam-answer">
<summary>展开解答</summary>

令

$$
U=\frac{X_1+X_2}{\sqrt2\sigma},\qquad
V=\frac{X_1-X_2}{\sqrt2\sigma}.
$$

二者均为标准正态，且协方差为零。由于联合正态，所以 $U,V$ 独立。因此

$$
Y=\frac{U^2}{V^2}
=\frac{\chi^2(1)/1}{\chi^2(1)/1}
\sim\boxed{F(1,1)}.
$$

</details>

## 题 5：求临界常数 $k$

$X_1,X_2$ 来自 $N(0,1)$。求 $k$，使

$$
P\left\{
\frac{(X_1+X_2)^2}
{(X_1-X_2)^2+(X_1+X_2)^2}>k
\right\}=0.05.
$$

<details class="exam-answer">
<summary>展开解答</summary>

令 $U=(X_1+X_2)/\sqrt2$、$V=(X_1-X_2)/\sqrt2$，则 $U,V$ 独立标准正态。题中随机变量为

$$
W=\frac{U^2}{U^2+V^2}
\sim\operatorname{Beta}\left(\frac12,\frac12\right).
$$

也可令 $F=U^2/V^2\sim F(1,1)$，则 $W=F/(1+F)$。要求 $P(W>k)=0.05$，所以

$$
k=\frac{F_{0.95}(1,1)}
{1+F_{0.95}(1,1)}
\approx\boxed{0.9938}.
$$

</details>

## 题 6：任意线性组合构造 t 统计量

$X_1,\ldots,X_n$ 来自 $N(\mu_1,\sigma^2)$，$Y_1,\ldots,Y_m$ 来自 $N(\mu_2,\sigma^2)$，两样本独立。$c,d$ 是任意两个不全为零的常数。证明

$$
t=
\frac{c(\bar X-\mu_1)+d(\bar Y-\mu_2)}
{S_w\sqrt{c^2/n+d^2/m}}
\sim t(n+m-2),
$$

其中

$$
S_w^2=
\frac{(n-1)S_X^2+(m-1)S_Y^2}
{n+m-2}.
$$

<details class="exam-answer">
<summary>展开解答</summary>

由独立正态样本，

$$
Z=
\frac{c(\bar X-\mu_1)+d(\bar Y-\mu_2)}
{\sigma\sqrt{c^2/n+d^2/m}}
\sim N(0,1).
$$

又

$$
\frac{(n-1)S_X^2}{\sigma^2}\sim\chi^2(n-1),
\qquad
\frac{(m-1)S_Y^2}{\sigma^2}\sim\chi^2(m-1),
$$

二者独立，因此

$$
\frac{(n+m-2)S_w^2}{\sigma^2}
\sim\chi^2(n+m-2).
$$

正态样本中均值与样本方差独立，所以 $Z$ 与 $S_w^2$ 独立。按 $t$ 分布定义，

$$
\frac{Z}
{\sqrt{[(n+m-2)S_w^2/\sigma^2]/(n+m-2)}}
\sim t(n+m-2),
$$

化简即得证。

</details>

## 题 7：成对和的离差平方和

$X_1,\ldots,X_{2n}$ 来自 $N(\mu,\sigma^2)$，$\bar X$ 是全部 $2n$ 个观测的样本均值。令

$$
\Gamma=
\sum_{i=1}^n
(X_i+X_{n+i}-2\bar X)^2.
$$

求 $E(\Gamma)$。

<details class="exam-answer">
<summary>展开解答</summary>

令 $A_i=X_i+X_{n+i}$，则

$$
A_i\overset{\text{i.i.d.}}\sim N(2\mu,2\sigma^2),
\qquad
\bar A=2\bar X.
$$

所以

$$
\Gamma=\sum_{i=1}^n(A_i-\bar A)^2
=(n-1)S_A^2.
$$

由样本方差无偏，

$$
\boxed{E(\Gamma)=2(n-1)\sigma^2}.
$$

</details>

## 题 8：用样本方差控制概率

$X_1,\ldots,X_n$ 来自正态总体 $N(\mu,\sigma^2)$。求最小 $n$，使

$$
P\left(\frac{S^2}{\sigma^2}\le1.5\right)\ge0.95.
$$

<details class="exam-answer">
<summary>展开解答</summary>

由

$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1),
$$

条件等价于

$$
P\{\chi^2(n-1)\le1.5(n-1)\}\ge0.95.
$$

逐个自由度查分布函数：

$$
\begin{aligned}
n=26:&\quad
P\{\chi^2(25)\le37.5\}\approx0.9483<0.95,\\
n=27:&\quad
P\{\chi^2(26)\le39\}\approx0.9512\ge0.95.
\end{aligned}
$$

所以

$$
\boxed{n_{\min}=27}.
$$

</details>

## 题 9：内部学生化残差与 t 分布

$X_1,\ldots,X_n$ 独立同分布于 $N(\mu,\sigma^2)$，令

$$
\bar X=\frac1n\sum X_i,\qquad
S^2=\frac1{n-1}\sum(X_i-\bar X)^2,
$$

$$
\xi=\frac{X_1-\bar X}{S}.
$$

找出 $\xi$ 与 $t$ 分布的联系。

<details class="exam-answer">
<summary>展开解答</summary>

按题目提示作正交变换，取

$$
Y_1=\sqrt n\,\bar X,\qquad
Y_2=\sqrt{\frac n{n-1}}(X_1-\bar X),
$$

再补齐正交坐标 $Y_3,\ldots,Y_n$。正态向量经正交变换后各坐标独立，且

$$
\frac{Y_2}{\sigma}\sim N(0,1),\qquad
\frac1{\sigma^2}\sum_{i=3}^nY_i^2\sim\chi^2(n-2).
$$

因此

$$
T=
\frac{Y_2/\sigma}
{\sqrt{\sum_{i=3}^nY_i^2/[(n-2)\sigma^2]}}
\sim t(n-2).
$$

另一方面，

$$
(n-1)S^2=Y_2^2+\sum_{i=3}^nY_i^2.
$$

消元得

$$
\boxed{
\xi=
\frac{(n-1)T}
{\sqrt{n(n-2+T^2)}},
\qquad T\sim t(n-2)
}.
$$

因此 $|\xi|<(n-1)/\sqrt n$。$\xi$ 不是普通的 $t$ 变量，因为分母 $S$ 包含了 $X_1$ 自己造成的残差。

</details>
