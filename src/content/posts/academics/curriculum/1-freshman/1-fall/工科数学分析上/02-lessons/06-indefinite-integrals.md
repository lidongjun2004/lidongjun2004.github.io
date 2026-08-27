---
title: "第 6 讲：不定积分"
description: "原函数与不定积分、换元和分部积分，以及有理式、三角有理式和简单无理式积分。"
date: 2026-08-27
---

不定积分是“已知导数，寻找原函数”。它没有万能算法，关键是识别被积函数的结构，把它变成基本积分公式。

## 原函数和不定积分

若在区间 $I$ 上

$$
F'(x)=f(x),
$$

则 $F$ 是 $f$ 在 $I$ 上的一个原函数。

同一区间内所有原函数只差常数：

$$
\int f(x)\,dx=F(x)+C.
$$

常数 $C$ 不能省。因为求导会丢掉常数，不定积分必须把这族函数补回来。

不定积分是一个函数族，不是一个数；因此一般不能写上下限。

## 基本积分公式

$$
\int x^\alpha\,dx
=\frac{x^{\alpha+1}}{\alpha+1}+C
\qquad(\alpha\ne-1),
$$

$$
\int\frac{dx}{x}=\ln|x|+C,
$$

$$
\int e^x\,dx=e^x+C,
$$

$$
\int\sin x\,dx=-\cos x+C,\qquad
\int\cos x\,dx=\sin x+C,
$$

$$
\int\sec^2x\,dx=\tan x+C,
$$

$$
\int\frac{dx}{1+x^2}=\arctan x+C,
$$

$$
\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C.
$$

线性性质：

$$
\int\bigl(af(x)+bg(x)\bigr)\,dx
=a\int f(x)\,dx+b\int g(x)\,dx.
$$

## 第一类换元：识别复合函数

若 $u=\varphi(x)$，则

$$
\int f(\varphi(x))\varphi'(x)\,dx
=\int f(u)\,du.
$$

核心信号是“内层函数”和“它的导数”同时出现。

例如

$$
\int\frac{2x}{1+x^2}\,dx.
$$

令 $u=1+x^2$，$du=2x\,dx$，得

$$
\int\frac{du}{u}
=\ln|u|+C
=\ln(1+x^2)+C.
$$

常见模板：

$$
\int\frac{f'(x)}{f(x)}\,dx=\ln|f(x)|+C,
$$

$$
\int f'(x)e^{f(x)}\,dx=e^{f(x)}+C,
$$

$$
\int f'(x)\cos f(x)\,dx=\sin f(x)+C.
$$

换元后要把所有 $x$ 和 $dx$ 都替换掉，不能新旧变量混写。

## 第二类换元：主动把变量参数化

有时直接设 $x=\varphi(t)$ 更方便：

$$
\int f(x)\,dx
=\int f(\varphi(t))\varphi'(t)\,dt.
$$

常见根式代换：

$$
\sqrt{a^2-x^2}:\quad x=a\sin t,
$$

$$
\sqrt{a^2+x^2}:\quad x=a\tan t
\ \text{或}\ x=a\sinh t,
$$

$$
\sqrt{x^2-a^2}:\quad x=a\sec t.
$$

例如

$$
\int\sqrt{a^2-x^2}\,dx.
$$

令 $x=a\sin t$，则

$$
dx=a\cos t\,dt,\qquad
\sqrt{a^2-x^2}=a\cos t
$$

（选取对应区间保证余弦符号），问题化为
$a^2\int\cos^2t\,dt$。

三角代换中必须同时说明参数范围，否则从
$\sqrt{\cos^2t}$ 写成 $\cos t$ 可能丢掉绝对值。

## 分部积分

由乘积求导

$$
d(uv)=u\,dv+v\,du
$$

得到

$$
\int u\,dv=uv-\int v\,du.
$$

选取 $u$ 的原则是：求导后更简单；选 $dv$ 的原则是：容易积分。

例如

$$
\int xe^x\,dx.
$$

取 $u=x$、$dv=e^x\,dx$，则

$$
\int xe^x\,dx
=xe^x-\int e^x\,dx
=(x-1)e^x+C.
$$

对数、反三角函数常作为 $u$：

$$
\int\ln x\,dx
=x\ln x-x+C.
$$

循环分部积分中，原积分可能重新出现。此时把它移到等式一边求解，而不是继续无限分部。

## 有理函数积分

有理函数是

$$
\frac{P(x)}{Q(x)}.
$$

先做两步：

1. 若 $\deg P\ge\deg Q$，先多项式除法；
2. 将真分式按 $Q$ 的实因式分解成部分分式。

线性因子：

$$
\frac{A}{x-a}.
$$

不可约二次因子：

$$
\frac{Bx+C}{x^2+px+q}.
$$

例如

$$
\frac1{x^2-1}
=\frac12\left(\frac1{x-1}-\frac1{x+1}\right),
$$

因此

$$
\int\frac{dx}{x^2-1}
=\frac12\ln\left|\frac{x-1}{x+1}\right|+C.
$$

二次因式的分子要拆成“分母导数的倍数 + 常数”，前者产生对数，后者配方后产生反正切。

## 三角函数有理式

对于 $\sin x,\cos x$ 的有理式：

- $\sin x$ 的奇次幂出现：留一个 $\sin x\,dx$，其余用
  $1-\cos^2x$，令 $u=\cos x$；
- $\cos x$ 的奇次幂出现：类似令 $u=\sin x$；
- 两者均为偶次幂：用降幂公式；
- 一般情形可用万能代换

  $$
  t=\tan\frac x2,
  $$

  此时

  $$
  \sin x=\frac{2t}{1+t^2},\quad
  \cos x=\frac{1-t^2}{1+t^2},\quad
  dx=\frac{2\,dt}{1+t^2}.
  $$

万能代换能把问题化为有理函数，但不一定是最短路线，先检查奇偶性通常更快。

## 简单无理式积分

含

$$
\sqrt[n]{\frac{ax+b}{cx+d}}
$$

的表达式，可令该根式为新变量，把 $x$ 解成新变量的有理函数。

含多个分数次幂时，可取各分母的最小公倍数作为代换指数。例如

$$
x^{1/2},\ x^{1/3}
$$

同时出现，可令 $x=t^6$。

## 怎样检查结果

对所得原函数求导，是最可靠的验算。特别检查：

- 对数是否写了绝对值；
- 换元后是否全部换回原变量；
- 分部积分符号是否正确；
- 根式代换的参数区间是否保证符号；
- 最后是否补上 $+C$。

不定积分的不同答案可能形式不同。只要二者求导相同，它们在同一连通区间内至多相差常数。
