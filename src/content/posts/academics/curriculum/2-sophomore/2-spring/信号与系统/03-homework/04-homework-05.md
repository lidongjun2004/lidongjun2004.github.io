---
title: "第 5 次作业：离散系统响应与卷积"
description: "2024–2025 学年第五次作业，含差分方程响应、单位样值响应、离散卷积与逆系统。"
date: 2026-08-27
tags: ["作业"]
---

本篇按 `5信号与系统第五次作业.pdf` 整理。除题面要求外，源文件还提醒思考：自由—受迫分解与零输入—零状态分解分别在分什么，初值又该取在哪一侧。

## 1. 系统性质

判断下列离散系统是否因果、线性、时不变：

1. $y[n]=\tanh(x[n])$；
2. $y[n]=23n\,x[n]+4n^2x[n+1]$；
3. $y[n]=\min(x[n],x^2[n])$；
4. $y[n]=\sum_{k=0}^{\infty}2^{-n}x[n-k]$。

<details class="exam-answer">
<summary>展开解析</summary>

1. 因果、非线性、时不变；
2. 非因果、线性、时变；
3. 因果、非线性、时不变；
4. 因果、线性、时变。

第 2 个系统读取未来样值 $x[n+1]$，所以非因果；第 4 个系统虽然只读取当前与过去输入，但系数 $2^{-n}$ 显式依赖当前时刻，故时变。

</details>

## 2. 差分方程的四种响应

求每个系统的自由响应、受迫响应、零输入响应、零状态响应，并用两种组合得到通解。答案默认讨论 $n\ge0$。

1. $y[n]+2y[n-1]+y[n-2]=x[n]$，$x[n]=3^n u[n]$，$y[-2]=y[-1]=0$；
2. 同一方程与输入，但给 $y[0]=y[1]=0$；
3. $y[n]-3y[n-1]-4y[n-2]=x[n]-x[n-1]$，$x[n]=n^2u[n]$，$y[0]=y[1]=0$。

<details class="exam-answer">
<summary>展开解析</summary>

第一题：

$$
y_f[n]=\left(\frac14n+\frac7{16}\right)(-1)^n,
\qquad
y_p[n]=\frac9{16}3^n,
$$

$$
y_{zi}[n]=0,
\qquad
y_{zs}[n]=\left(\frac14n+\frac7{16}\right)(-1)^n
+\frac9{16}3^n.
$$

第二题的 $y[0],y[1]$ 是“起始后的条件”，求零输入响应前要先由差分方程倒推 $y[-1]=3,y[-2]=-5$：

$$
y_f[n]=\left(\frac94n-\frac9{16}\right)(-1)^n,
\qquad y_p[n]=\frac9{16}3^n,
$$

$$
y_{zi}[n]=(2n-1)(-1)^n,
$$

$$
y_{zs}[n]=\left(\frac14n+\frac7{16}\right)(-1)^n
+\frac9{16}3^n.
$$

第三题：

$$
y_f[n]=\frac{11}{45}4^n+\frac15(-1)^n,
\qquad y_p[n]=-\frac13n-\frac49,
$$

$$
y_{zi}[n]=-\frac15 4^n+\frac15(-1)^n,
$$

$$
y_{zs}[n]=\frac19 4^{n+1}-\frac13n-\frac49.
$$

每题都满足

$$
y=y_f+y_p=y_{zi}+y_{zs}.
$$

</details>

## 3. 单位样值响应

求：

1. $y[n]+2y[n-1]+y[n-2]=x[n]$；
2. $y[n]-3y[n-1]-4y[n-2]=x[n]-x[n-1]$

的因果单位样值响应。附加：分别与 $3^n u[n]$、$n^2u[n]$ 卷积以求零状态响应。

<details class="exam-answer">
<summary>展开解析</summary>

第一题在 $n>0$ 满足二重根 $-1$ 的齐次方程，再由 $h[-1]=h[-2]=0$ 迭代出 $h[0]=1,h[1]=-2$：

$$
h_1[n]=(n+1)(-1)^n u[n].
$$

与 $3^n u[n]$ 卷积可化成

$$
y_{zs}[n]=\left(\frac14n+\frac7{16}\right)(-1)^n
+\frac9{16}3^n.
$$

第二题的系统函数为

$$
H(z)=\frac{1-z^{-1}}{(1-4z^{-1})(1+z^{-1})},
$$

所以

$$
h_2[n]=\left[\frac35 4^n+\frac25(-1)^n\right]u[n].
$$

</details>

## 4. 四组离散卷积

计算：

1. $x_1=2\delta[n]+3\delta[n-1]+4\delta[n-2]+2\delta[n-3]$，$x_2=11\delta[n+1]+77\delta[n]$；
2. 将第一式中 $3\delta[n-1]$ 改为 $k\delta[n-1]$，$k\in\mathbb N^*$；
3. $x_1=2\delta[n+10]+2\delta[n-10]$，$x_2=3\delta[n+5]+3\delta[n-5]$；
4. $x_1=(-1/2)^n u[n]$，$x_2=\delta[n]+\delta[n-1]$。

<details class="exam-answer">
<summary>展开解析</summary>

1.

   $$
   x_1*x_2=22\delta[n+1]+187\delta[n]+275\delta[n-1]
   +330\delta[n-2]+154\delta[n-3].
   $$

1.

   $$
   x_1*x_2=22\delta[n+1]+(154+11k)\delta[n]
   +(77k+44)\delta[n-1]+330\delta[n-2]+154\delta[n-3].
   $$

1.

   $$
   x_1*x_2=6[\delta[n+15]+\delta[n+5]+\delta[n-5]+\delta[n-15]].
   $$

1.

   $$
   x_1*x_2=\begin{cases}
   1,&n=0,\\
   -(-1/2)^n,&n\ge1,\\
   0,&n<0.
   \end{cases}
   $$

</details>

## 5. 由冲激响应求阶跃响应

某 LTI 系统的单位样值响应为

$$
h[n]=n\alpha^n u[n],\qquad 0<\alpha<1.
$$

求单位阶跃响应。

<details class="exam-answer">
<summary>展开解析</summary>

$$
r[n]=h[n]*u[n]=\sum_{k=0}^{n}k\alpha^k.
$$

对有限几何级数求导可得

$$
r[n]=\frac{\alpha-(n+1)\alpha^{n+1}+n\alpha^{n+2}}
{(1-\alpha)^2}u[n].
$$

当 $n\to\infty$ 时，因 $0<\alpha<1$，阶跃响应趋于 $\alpha/(1-\alpha)^2$。

</details>

## 6. 构造延时系统的逆系统

已知 FIR 延时系统

$$
y[n]=a_0x[n]+a_1x[n-1]+\cdots+a_kx[n-k].
$$

对某未知输入 $x_u$ 已知输出 $y_u$，构造只含已知系数的 $g_u[n]$，使 $x_u=y_u*g_u$。

<details class="exam-answer">
<summary>展开解析</summary>

系统冲激响应是

$$
h[n]=\sum_{i=0}^{k}a_i\delta[n-i].
$$

需要找卷积逆 $g$ 使 $h*g=\delta$。设

$$
g[n]=\sum_{m=0}^{\infty}b_m\delta[n-m],
$$

比较每个时刻的系数，得到递推：

$$
b_0=\frac1{a_0},
$$

$$
b_n=-\frac1{a_0}
\sum_{i=1}^{\min(k,n)}a_i b_{n-i},\qquad n\ge1.
$$

因此 $g_u=g$，并且 $y_u*g=h*x_u*g=x_u$。这一构造要求 $a_0\ne0$。

</details>
