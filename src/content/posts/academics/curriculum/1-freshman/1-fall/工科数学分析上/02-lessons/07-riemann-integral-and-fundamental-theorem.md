---
title: "第 7 讲：定积分与微积分基本定理"
description: "Riemann 积分定义、Darboux 上下和、可积条件、积分性质和 Newton-Leibniz 公式。"
date: 2026-08-27
---

定积分把区间切成很多小段，用“小段上的函数值 × 小段长度”近似总量，再让分割无限细。微积分基本定理进一步说明：这种累计运算恰好是求导的逆运算。

## 从曲边梯形到 Riemann 和

在 $[a,b]$ 上取分割

$$
T:\quad a=x_0<x_1<\cdots<x_n=b,
$$

记

$$
\Delta x_i=x_i-x_{i-1},
$$

并在每个小区间 $[x_{i-1},x_i]$ 中任取
$\xi_i$。Riemann 和为

$$
\sum_{i=1}^{n}f(\xi_i)\Delta x_i.
$$

分割的细度定义为

$$
\|T\|=\max_i\Delta x_i.
$$

若当 $\|T\|\to0$ 时，不论怎样分割、怎样选取 $\xi_i$，Riemann 和总趋向同一个数 $I$，则
$f$ 在 $[a,b]$ 上可积，并记

$$
I=\int_a^b f(x)\,dx.
$$

“不论怎样取样”非常关键。若只有某一种特殊等分方式收敛，还不能直接说明 Riemann 可积。

## Darboux 上和与下和

在第 $i$ 个小区间上定义

$$
M_i=\sup f,\qquad m_i=\inf f.
$$

上和、下和为

$$
S(T)=\sum_{i=1}^nM_i\Delta x_i,\qquad
s(T)=\sum_{i=1}^nm_i\Delta x_i.
$$

任意 Riemann 和都被夹住：

$$
s(T)
\le\sum_{i=1}^nf(\xi_i)\Delta x_i
\le S(T).
$$

分割加细时，上和不增、下和不减。Darboux 判据：

$$
f\text{ 可积}
\iff
\forall\varepsilon>0,\ \exists T,\
S(T)-s(T)<\varepsilon.
$$

它表示小区间内部的总振荡可以压到任意小。

## 哪些函数可积

可积函数必须有界。无界函数不能作为通常意义下的 Riemann 可积函数；第九章会用广义积分重新定义某些无界情形。

常用充分条件：

- 连续函数在闭区间上可积；
- 单调函数在闭区间上可积；
- 只有有限个间断点的有界函数可积；
- 分段连续函数可积。

“有界”本身不够。Dirichlet 函数

$$
f(x)=
\begin{cases}
1,&x\in\mathbb Q,\\
0,&x\notin\mathbb Q
\end{cases}
$$

在任何小区间内的上确界为 $1$、下确界为 $0$，所以所有分割都满足

$$
S(T)-s(T)=b-a,
$$

因此不可积。

## 定积分的基本性质

线性：

$$
\int_a^b(\alpha f+\beta g)
=\alpha\int_a^bf+\beta\int_a^bg.
$$

区间可加：

$$
\int_a^bf
=\int_a^cf+\int_c^bf.
$$

交换上下限：

$$
\int_b^af=-\int_a^bf.
$$

保序性：

$$
f(x)\le g(x)
\quad\Longrightarrow\quad
\int_a^bf(x)\,dx\le\int_a^bg(x)\,dx.
$$

估计：

$$
\left|\int_a^bf(x)\,dx\right|
\le\int_a^b|f(x)|\,dx.
$$

若 $m\le f(x)\le M$，则

$$
m(b-a)\le\int_a^bf(x)\,dx\le M(b-a).
$$

## 积分中值定理

若 $f$ 在 $[a,b]$ 连续，则存在 $\xi\in[a,b]$ 使

$$
\int_a^bf(x)\,dx=f(\xi)(b-a).
$$

也就是说，函数在区间上的平均值

$$
\frac1{b-a}\int_a^bf(x)\,dx
$$

能被函数在某一点真正取到。

更一般地，若 $f$ 连续，$g$ 可积且不变号，则存在 $\xi$ 使

$$
\int_a^bf(x)g(x)\,dx
=f(\xi)\int_a^bg(x)\,dx.
$$

$g$ 不变号是把加权平均控制在 $f$ 的最小值和最大值之间的关键。

## 积分上限函数

![变上限积分把从 a 到 x0 的曲线下面积累积成函数](/images/academics/freshman-math-analysis-1/lessons/variable-upper-limit-area.png)

令

$$
F(x)=\int_a^x f(t)\,dt.
$$

若 $f$ 可积，则 $F$ 连续；若 $f$ 在 $x$ 连续，则

$$
F'(x)=f(x).
$$

直观上，

$$
F(x+h)-F(x)=\int_x^{x+h}f(t)\,dt
\approx f(x)h.
$$

若上限是复合函数 $g(x)$：

$$
\frac{d}{dx}\int_a^{g(x)}f(t)\,dt
=f(g(x))g'(x).
$$

上下限都变化时：

$$
\frac{d}{dx}\int_{u(x)}^{v(x)}f(t)\,dt
=f(v(x))v'(x)-f(u(x))u'(x).
$$

## Newton-Leibniz 公式

若 $f$ 在 $[a,b]$ 连续，$F$ 是 $f$ 的任一原函数，则

$$
\int_a^bf(x)\,dx=F(b)-F(a).
$$

逻辑链是：

1. 积分上限函数 $\Phi(x)=\int_a^xf(t)\,dt$ 满足
   $\Phi'=f$；
2. $\Phi$ 与任一原函数 $F$ 的导数相同，因此只差常数；
3. 代入 $x=a,b$ 得到公式。

定积分的值与原函数中常数 $C$ 无关，所以计算时不写 $+C$。

## 定积分换元与分部积分

若 $x=\varphi(t)$ 将 $[\alpha,\beta]$ 对应到 $[a,b]$，则

$$
\int_a^bf(x)\,dx
=\int_\alpha^\beta
f(\varphi(t))\varphi'(t)\,dt.
$$

换元后必须同时更换上下限。若 $\varphi$ 不是一一对应，要检查它在参数区间上的实际取值路径，必要时分段。

分部积分：

$$
\int_a^bu\,dv
=\left.uv\right|_a^b-\int_a^bv\,du.
$$

和不定积分相比，边界项必须完整代入。

## 对称性

在对称区间 $[-a,a]$：

- 奇函数积分为 $0$；
- 偶函数积分为两倍半区间积分。

$$
f(-x)=-f(x)
\Rightarrow
\int_{-a}^af(x)\,dx=0,
$$

$$
f(-x)=f(x)
\Rightarrow
\int_{-a}^af(x)\,dx=2\int_0^af(x)\,dx.
$$

周期函数若周期为 $T$，则长度为一个周期的积分与起点无关：

$$
\int_a^{a+T}f(x)\,dx=\int_0^Tf(x)\,dx.
$$

## 用定积分定义识别数列极限

若和式可以写成

$$
\sum_{k=1}^n
f\left(\frac{k}{n}\right)\frac1n,
$$

则它是 $[0,1]$ 上右端点 Riemann 和：

$$
\lim_{n\to\infty}
\frac1n\sum_{k=1}^n
f\left(\frac{k}{n}\right)
=\int_0^1f(x)\,dx.
$$

若采样点、区间长度不同，先识别
$\Delta x$ 和采样位置，再确定积分区间，不能机械套 $[0,1]$。

## 易错点

- 定积分存在首先要求通常意义下的有界性。
- Riemann 和中的 $\Delta x_i$ 不能漏。
- 换元后上下限和变量必须成套改变。
- 积分上限函数的积分变量应使用 $t$ 等哑变量，不能和外部变量混淆。
- 积分中值定理给出的 $\xi$ 一般无法显式求出，结论是存在性。
