---
title: "第 8 讲：常系数齐次方程与 Euler 方程"
description: "用特征根系统生成常系数齐次方程的基解，并把 Euler 方程化为常系数方程。"
date: 2026-08-27
---

常系数线性齐次方程之所以能用代数求解，是因为指数函数求导后只差一个常数倍。代入 $e^{rx}$ 后，微分算子就变成关于 $r$ 的多项式。

## 特征方程

对

$$
a_0y^{(n)}+a_1y^{(n-1)}+\cdots+a_ny=0,
\qquad a_0\ne0,
$$

试 $y=e^{rx}$，得到

$$
P(r)=a_0r^n+a_1r^{n-1}+\cdots+a_n=0.
$$

每个特征根按照类型生成基解。

### 不同实根

根 $r_1,\dots,r_n$ 不同时，

$$
y=C_1e^{r_1x}+\cdots+C_ne^{r_nx}.
$$

### 实重根

若 $r$ 是 $m$ 重根，对应

$$
e^{rx},xe^{rx},\dots,x^{m-1}e^{rx}.
$$

乘 $x^k$ 是为了补出线性无关的解，不能只把同一个指数项重复写 $m$ 次。

### 复根

若 $\alpha\pm i\beta$ 是一对复根，对应两个实解

$$
e^{\alpha x}\cos\beta x,\qquad
e^{\alpha x}\sin\beta x.
$$

若这对复根重数为 $m$，还要依次乘 $1,x,\dots,x^{m-1}$。

## 用算子因式分解理解

令 $D=d/dx$，方程写作

$$
P(D)y=0.
$$

若 $P(r)=(r-r_1)^{m_1}\cdots(r-r_k)^{m_k}$，则

$$
P(D)=(D-r_1)^{m_1}\cdots(D-r_k)^{m_k}.
$$

这个表示也解释了为什么重根产生 $x^ke^{rx}$，并为非齐次方程中的共振规则做准备。

## Euler–Cauchy 方程

典型形式

$$
x^2y''+axy'+by=0,\qquad x\ne0.
$$

可以试幂函数 $y=x^m$，得到指标方程

$$
m(m-1)+am+b=0.
$$

在 $x>0$ 上也可令

$$
t=\ln x,\qquad Y(t)=y(e^t).
$$

利用

$$
xy'=Y',\qquad x^2y''=Y''-Y',
$$

把 Euler 方程变成常系数方程。对 $x<0$ 可用 $t=\ln|x|$ 分区间处理，不能让解跨过奇点 $x=0$。

若指标根为重根 $m$，基解为

$$
x^m,\qquad x^m\ln|x|.
$$

复根 $\alpha\pm i\beta$ 对应

$$
|x|^\alpha\cos(\beta\ln|x|),\qquad
|x|^\alpha\sin(\beta\ln|x|).
$$

## 边值问题与特征值

例如

$$
y''+\lambda y=0,\qquad y(0)=y(L)=0
$$

并非任意 $\lambda$ 都有非零解。根据 $\lambda$ 的正、零、负三种情形分别写通解，边界条件会筛出离散的特征值

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,\qquad n=1,2,\dots
$$

及对应特征函数 $\sin(n\pi x/L)$。这说明边值条件不是简单“解两个常数”，有时会决定参数本身。

## 快速检查

- 特征多项式次数应等于方程阶数；
- 根的代数重数总和应为 $n$；
- 每个实根贡献其重数个解，每对复根贡献两倍重数个实解；
- Euler 方程的解区间不能跨 $x=0$；
- 写完通解后数一遍独立常数，并代回低阶示例检查符号。
