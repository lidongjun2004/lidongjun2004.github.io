---
title: "第 9 讲：广义积分"
description: "无穷积分与瑕积分、比较和 Cauchy 判别、绝对与条件收敛、Dirichlet/Abel 判别及 Gamma/Beta 函数。"
date: 2026-08-27
---

通常的定积分要求有限区间和有界被积函数。广义积分通过取极限，把“区间无限长”或“函数在某点无界”的情形纳入积分。

## 无穷区间上的积分

定义

$$
\int_a^\infty f(x)\,dx
=\lim_{A\to\infty}\int_a^Af(x)\,dx.
$$

右侧极限有限时称收敛，否则发散。

双向无穷区间必须选任意固定的 $c$ 拆开：

$$
\int_{-\infty}^{\infty}f(x)\,dx
=\int_{-\infty}^cf(x)\,dx
+\int_c^\infty f(x)\,dx.
$$

两边都收敛才算收敛。不能只算对称极限

$$
\lim_{A\to\infty}\int_{-A}^Af(x)\,dx,
$$

因为那得到的可能只是 Cauchy 主值。例如
$\int_{-\infty}^{\infty}x\,dx$ 的对称截断恒为 $0$，但两侧积分都发散。

## 瑕积分

若 $f$ 在 $a$ 附近无界：

$$
\int_a^bf(x)\,dx
=\lim_{\varepsilon\to0^+}
\int_{a+\varepsilon}^bf(x)\,dx.
$$

若内部点 $c\in(a,b)$ 是瑕点，则必须拆开：

$$
\int_a^bf
=\int_a^cf+\int_c^bf.
$$

两段极限独立存在才收敛，不能让两个发散量相互抵消。

## 两个 $p$ 型基准

无穷远：

$$
\int_1^\infty\frac{dx}{x^p}
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\le1.
\end{cases}
$$

零点附近：

$$
\int_0^1\frac{dx}{x^p}
\begin{cases}
\text{收敛},&p<1,\\
\text{发散},&p\ge1.
\end{cases}
$$

同一个 $p$ 在两个位置的临界方向相反。判断前先说清是在无穷远还是瑕点附近。

## 非负函数的比较判别

若充分大的 $x$ 上

$$
0\le f(x)\le g(x),
$$

则：

- $\int g$ 收敛可推出 $\int f$ 收敛；
- $\int f$ 发散可推出 $\int g$ 发散。

比较判别的极限形式：若 $f,g\ge0$ 且

$$
\lim_{x\to\infty}\frac{f(x)}{g(x)}=L,
\qquad 0<L<\infty,
$$

则二者同敛散。

若 $L=0$，只能在 $\int g$ 收敛时推出 $\int f$ 收敛；若
$L=\infty$，只能在 $\int g$ 发散时推出 $\int f$ 发散。不要把这两种情况也写成“同敛散”。

例如

$$
\frac1{x^2+1}\sim\frac1{x^2}
\qquad(x\to\infty),
$$

故

$$
\int_1^\infty\frac{dx}{x^2+1}
$$

收敛。

## Cauchy 收敛准则

无穷积分收敛，当且仅当对任意 $\varepsilon>0$，存在
$A$，使任意 $v>u>A$ 都有

$$
\left|\int_u^vf(x)\,dx\right|<\varepsilon.
$$

它表达“足够远处的尾积分可以任意小”，不需要提前知道积分值。

瑕积分也有对应的局部版本：充分靠近瑕点的任意小区间积分都应足够小。

## 绝对收敛与条件收敛

若

$$
\int_a^\infty|f(x)|\,dx
$$

收敛，则

$$
\int_a^\infty f(x)\,dx
$$

收敛，称绝对收敛。

若原积分收敛但绝对值积分发散，称条件收敛。经典例子：

$$
\int_1^\infty\frac{\sin x}{x}\,dx
$$

条件收敛。

判断变号函数时通常先看绝对值：

- 若绝对值积分收敛，问题结束；
- 若绝对值积分发散，原积分仍可能因振荡而条件收敛。

## Dirichlet 与 Abel 判别

积分版 Dirichlet 判别：若

$$
F(A)=\int_a^Af(x)\,dx
$$

有界，而 $g(x)$ 单调趋于 $0$，则

$$
\int_a^\infty f(x)g(x)\,dx
$$

收敛。

例如 $\int_a^A\sin x\,dx$ 有界，$1/x$ 单调趋零，所以

$$
\int_1^\infty\frac{\sin x}{x}\,dx
$$

收敛。

Abel 判别：若 $\int_a^\infty f(x)\,dx$ 收敛，$g$ 单调且有界，则

$$
\int_a^\infty f(x)g(x)\,dx
$$

收敛。

两者都可由分部积分理解：一个因子提供“累计有界”，另一个因子的变化总量可控。

## 瑕点附近的等价比较

若 $x\to a^+$ 时

$$
f(x)\sim\frac{C}{(x-a)^p},
\qquad C>0,
$$

则

$$
\int_a^bf(x)\,dx
$$

与 $p$ 型瑕积分同敛散：

- $p<1$ 收敛；
- $p\ge1$ 发散。

内部有多个瑕点时逐个检查，每个都通过才算整体收敛。

## Gamma 与 Beta 函数

Gamma 函数定义为

$$
\Gamma(s)
=\int_0^\infty x^{s-1}e^{-x}\,dx,
\qquad s>0.
$$

分部积分得到递推：

$$
\Gamma(s+1)=s\Gamma(s).
$$

特别地

$$
\Gamma(n+1)=n!,\qquad
\Gamma\left(\frac12\right)=\sqrt\pi.
$$

Beta 函数定义为

$$
B(p,q)
=\int_0^1x^{p-1}(1-x)^{q-1}\,dx,
\qquad p,q>0.
$$

它满足

$$
B(p,q)
=\frac{\Gamma(p)\Gamma(q)}
{\Gamma(p+q)}.
$$

课程中重点不是背特殊函数表，而是理解它们本身也是广义积分，参数范围来自两个端点的敛散条件。

## 易错点

- 先找所有无穷端点和瑕点，再分段定义。
- 广义积分的 Newton-Leibniz 计算最后必须写极限。
- 对称主值存在不等于广义积分收敛。
- 比较判别方向只对非负函数直接成立。
- 条件收敛不允许把绝对值随意移入移出。
- $p$ 型在无穷远与零点附近的临界方向相反。
