---
title: "2019—2020 学年期末真题（2018 级）"
description: "覆盖对偶、参数二次规划、单纯形法、局部最优性和既约梯度证明"
date: 2026-08-24
tags: ["最优化方法", "真题"]
---

试卷封面写“2020 年 6 月 20 日”，正文注意事项写“2020 年 6 月 16 日 9:00—12:00”，两处日期不一致。这里据正文课程名与学年，将其记为 2019—2020 学年期末卷。

## 一、线性规划对偶（20 分）

$$
\begin{aligned}
\min\quad &8x_1+6x_2+3x_3+6x_4\\
\text{s.t.}\quad &x_1+2x_2+x_4\ge3,\\
&3x_1+x_2+x_3+x_4\ge6,\\
&x_3+x_4\ge2,\\
&x_1+x_3\ge2,\\
&x_1,x_2,x_3,x_4\ge0.
\end{aligned}
$$

1. 写出对偶问题。
2. 已知原问题最优解 $x^*=(1,1,2,0)^T$，用互补松弛求对偶最优解。

<details class="exam-answer">
<summary>查看解析</summary>

对偶为

$$
\begin{aligned}
\max\quad &3y_1+6y_2+2y_3+2y_4\\
\text{s.t.}\quad &y_1+3y_2+y_4\le8,\\
&2y_1+y_2\le6,\\
&y_2+y_3+y_4\le3,\\
&y_1+y_2+y_3\le6,\\
&y_1,y_2,y_3,y_4\ge0.
\end{aligned}
$$

第四条原约束在 $x^*$ 处有严格松弛，故 $y_4=0$。$x_1,x_2,x_3>0$，前三个相应对偶约束取等号：

$$
y_1+3y_2=8,\qquad 2y_1+y_2=6,\qquad y_2+y_3=3.
$$

解得

$$
\boxed{y^*=(2,2,1,0)^T}.
$$

原、对偶目标值均为 $20$。

</details>

## 二、参数二次规划（20 分）

$$
\begin{aligned}
\min\quad &\frac12x_1^2+\frac12x_2^2-x_1-2x_2\\
\text{s.t.}\quad &x_1+x_2-\kappa\ge0,\\
&x_1,x_2\ge0,
\end{aligned}
$$

其中 $\kappa\in\mathbb R$。

1. 证明 $\kappa=4$ 时 $(1.5,2.5)^T$ 最优。
2. 求最优解位于可行域内点时的 $\kappa$ 范围、解和最优值。
3. 求最优解位于边界时的 $\kappa$ 范围、解和最优值。
4. 取 $D=\{x\mid x_1,x_2\ge0\}$，写出对偶问题。

<details class="exam-answer">
<summary>查看解析</summary>

无主约束时，目标的唯一极小点为 $(1,2)^T$，目标值 $-5/2$。因此：

- $\kappa<3$ 时它是可行域内点；
- $\kappa=3$ 时它恰在主约束边界；
- $\kappa>3$ 时主约束必须活动。

边界情形令乘子 $\lambda\ge0$，

$$
L=f-\lambda(x_1+x_2-\kappa).
$$

驻点给出 $x_1=1+\lambda,x_2=2+\lambda$，再用 $x_1+x_2=\kappa$：

$$
\lambda=\frac{\kappa-3}{2},\qquad
x^*=\left(\frac{\kappa-1}{2},\frac{\kappa+1}{2}\right)^T.
$$

最优值为

$$
f^*=\frac{\kappa^2-6\kappa-1}{4}.
$$

$\kappa=4$ 时即得 $(3/2,5/2)^T$，且问题为严格凸规划，KKT 点就是唯一全局最优解。

在集约束 $D$ 上的对偶函数为

$$
q(\lambda)=\lambda\kappa-\frac{(1+\lambda)^2}{2}
-\frac{(2+\lambda)^2}{2},\qquad\lambda\ge0,
$$

对偶问题是 $\max_{\lambda\ge0}q(\lambda)$。

</details>

## 三、单纯形法与右端变化（20 分）

$$
\begin{aligned}
\min\quad &x_1+x_2-3x_3\\
\text{s.t.}\quad &x_1-2x_2+x_3\le11,\\
&2x_1+x_2-4x_3\ge3,\\
&x_1-2x_3=1,\\
&x_1,x_2,x_3\ge0.
\end{aligned}
$$

1. 用单纯形法求最优解。
2. 若右端向量从 $(11,3,1)^T$ 变为 $(-2,3,1)^T$，求新最优解。

<details class="exam-answer">
<summary>查看解析</summary>

原问题用大 $M$ 法建立初始基，依次换入能改善目标的变量。最终基变量为 $x_3,x_2,x_1$，读得

$$
\boxed{x^*=(9,1,4)^T},\qquad
\boxed{f^*=-2}.
$$

代回三条约束分别得到 $11,3,1$，全部可行。

右端变化后，原最优表的检验数不变，但基本变量值中出现负数，适合从原表继续用对偶单纯形法。一次换基后得到

$$
\boxed{x'=(1,3/2,0)^T},\qquad
\boxed{f'=5/2}.
$$

代回新约束：第一条为 $1-3=-2$，第二条为 $2+3/2\ge3$，等式为 $1$，所以新解可行。

</details>

## 四、参数与局部最优（20 分）

$$
\begin{aligned}
\min\quad &(x_1-1)^2+x_2^2\\
\text{s.t.}\quad &x_1-\frac{x_2^2}{\beta}=0,
\end{aligned}
$$

其中 $\beta>0$。讨论 $(0,0)^T$ 是否为局部最优解。

<details class="exam-answer">
<summary>查看解析</summary>

沿约束消去 $x_1=x_2^2/\beta$。令 $t=x_2^2\ge0$，目标成为

$$
\phi(t)=\left(\frac t\beta-1\right)^2+t
=1+\left(1-\frac2\beta\right)t+\frac{t^2}{\beta^2}.
$$

$t=0$ 是单侧局部极小点，当且仅当一次项系数非负：

$$
1-\frac2\beta\ge0.
$$

所以

$$
\boxed{\beta\ge2\text{ 时 }(0,0)^T\text{ 是局部最优解；}}
$$

$$
\boxed{0<\beta<2\text{ 时不是。}}
$$

$\beta=2$ 时一次项消失，但二次项为正，仍为严格局部最小。

</details>

## 五、既约梯度（20 分）

考虑

$$
\min f(x),\qquad Ax=b.
$$

令 $A=(B,N)$，$B$ 可逆，$x=(x_B,x_N)^T$，并定义

$$
r_N=\nabla_Nf-(B^{-1}N)^T\nabla_Bf,
$$

$$
d_N=-r_N,\qquad d_B=-B^{-1}Nd_N.
$$

证明：若 $d\ne0$，则 $d$ 是下降可行方向；且 $d=0$ 当且仅当 $x$ 是等式约束问题的 KKT 点。

<details class="exam-answer">
<summary>查看证明</summary>

可行性来自

$$
Ad=Bd_B+Nd_N
=-BB^{-1}Nd_N+Nd_N=0.
$$

所以 $x+\alpha d$ 对任意充分小 $\alpha$ 仍满足等式约束。

再计算方向导数：

$$
\begin{aligned}
\nabla f^Td
&=\nabla_Bf^Td_B+\nabla_Nf^Td_N\\
&=\left[\nabla_Nf-(B^{-1}N)^T\nabla_Bf\right]^Td_N\\
&=r_N^T(-r_N)=-\lVert r_N\rVert^2.
\end{aligned}
$$

若 $d\ne0$，则 $r_N\ne0$，方向导数严格为负，故 $d$ 是下降可行方向。

若 $d=0$，则 $r_N=0$。令

$$
\lambda=-B^{-T}\nabla_Bf,
$$

便有 $\nabla_Bf+B^T\lambda=0$；$r_N=0$ 又给出 $\nabla_Nf+N^T\lambda=0$，合起来即

$$
\nabla f+A^T\lambda=0,\qquad Ax=b,
$$

所以 $x$ 是 KKT 点。

反过来，若存在 $\lambda$ 满足上述 KKT 条件，则从基变量部分得 $\lambda=-B^{-T}\nabla_Bf$，代入非基变量部分正好得到 $r_N=0$，进而 $d=0$。

</details>
