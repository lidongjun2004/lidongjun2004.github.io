---
title: "2022 年期末真题"
description: "覆盖共轭方向、线性规划、灵敏度分析、KKT 与凸优化证明"
date: 2026-08-24
tags: ["真题"]
---

考试时间为 2022 年 12 月 26 日 10:20—12:20。我在下面按试卷逐题转写；原答案扫描较淡，因此我依据题面重新计算了解析。

## 一、填空题（48 分）

### 1. $A$-共轭方向

设

$$
A=\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix},
\quad d_1=(1,1,1)^T,
\quad d_2=(-2,1,0)^T.
$$

求与 $d_1,d_2$ 关于 $A$ 共轭的非零向量。

<details class="exam-answer">
<summary>查看解析</summary>

先检查题面给出的两向量：

$$
d_1^TAd_2=(1,1,1)\cdot(-2,2,0)=0,
$$

所以二者确实 $A$-共轭。设 $d_3=(a,b,c)^T$，要求

$$
d_1^TAd_3=a+2b+3c=0,
$$

$$
d_2^TAd_3=-2a+2b=0.
$$

第二式给出 $b=a$，代入第一式得 $3a+3c=0$，故 $c=-a$。取 $a=1$，可填

$$
\boxed{d_3=(1,1,-1)^T}.
$$

任意非零倍数都正确。

</details>

### 2. 可行方向、下降方向与对偶

已知

$$
\begin{aligned}
\min\quad &f(x)=x_1^2+x_2^2-x_1-2x_2\\
\text{s.t.}\quad &x_1+x_2\ge1,\\
&x_1,x_2\ge0.
\end{aligned}
$$

在 $(1,0)^T$ 处写出活动约束和一个下降方向，在 $(0,1)^T$ 处写出一个可行方向，并在集约束

$$
D=\{(x_1,x_2)^T\mid x_1\ge0,x_2\ge0\}
$$

下写出 Lagrange 对偶问题。

<details class="exam-answer">
<summary>查看解析</summary>

在 $(1,0)^T$，$x_1+x_2=1$ 与 $x_2=0$ 都取等号，因此这两条约束活动。

梯度为

$$
\nabla f(1,0)=(1,-2)^T.
$$

取 $d=(-1,0)^T$，有 $\nabla f(1,0)^Td=-1<0$，所以它是 $(1,0)^T$ 处的下降方向。这里题目只问下降，不要求该方向同时可行。

在 $(0,1)^T$ 处，取 $d=(1,0)^T$。对任意充分小的 $t>0$，

$$
(0,1)^T+td=(t,1)^T
$$

仍满足 $x_1+x_2\ge1$ 及非负约束，因此 $d$ 是该点的可行方向。两个点对应的问题不能混在一起回答。

对约束 $x_1+x_2-1\ge0$ 引入 $\lambda\ge0$：

$$
L(x,\lambda)=f(x)-\lambda(x_1+x_2-1).
$$

在 $D$ 上取下确界。由于 $\lambda\ge0$ 时两个一元二次函数的极小点都非负，

$$
q(\lambda)=\lambda-
\frac{(1+\lambda)^2}{4}-
\frac{(2+\lambda)^2}{4}.
$$

故对偶为

$$
\boxed{\max_{\lambda\ge0}
\left[\lambda-\frac{(1+\lambda)^2+(2+\lambda)^2}{4}\right]}.
$$

</details>

### 3. LP 对偶与参数

设 $b>0$，考虑

$$
\begin{aligned}
\min\quad &5x_1+14x_3\\
\text{s.t.}\quad &x_1-x_2+3x_3\ge b,\\
&x_1+x_2+2x_3\ge4,\\
&x_1,x_2,x_3\ge0.
\end{aligned}
$$

若 $(2,0,1)^T$ 是最优解，求 $b$、对偶问题及其最优解。

<details class="exam-answer">
<summary>查看解析</summary>

对偶为

$$
\begin{aligned}
\max\quad &by_1+4y_2\\
\text{s.t.}\quad &y_1+y_2\le5,\\
&-y_1+y_2\le0,\\
&3y_1+2y_2\le14,\\
&y_1,y_2\ge0.
\end{aligned}
$$

因为 $x_1=2>0,x_3=1>0$，对应两个对偶约束取等号：

$$
y_1+y_2=5,\qquad 3y_1+2y_2=14.
$$

解得 $y^*=(4,1)^T$。又因 $y_1>0$，第一条原约束必须紧：

$$
b=2-0+3=5.
$$

此时原、对偶目标值均为 $24$，验证了最优性。

</details>

### 4. 最速下降、Newton 方向与一维搜索

设

$$
f(x)=-2x_1^2-2x_2^2-2x_1x_2+4x_1+6x_2.
$$

求 $(1,1)^T$ 处最速下降方向、Newton 方向，判断 Newton 方向是否为下降方向；再从 $x^{(1)}=(0,0)^T$ 出发，沿 $d^{(1)}=(-1,1)^T$ 作精确一维搜索，讨论步长。

<details class="exam-answer">
<summary>查看解析</summary>

$$
\nabla f(1,1)=(-2,0)^T,
$$

故最速下降方向为

$$
\boxed{(2,0)^T}.
$$

Hessian 为

$$
H=\begin{bmatrix}-4&-2\\-2&-4\end{bmatrix}.
$$

Newton 方向满足 $Hd=-\nabla f=(2,0)^T$，得到

$$
d_N=(-2/3,1/3)^T.
$$

但

$$
\nabla f(1,1)^Td_N=4/3>0,
$$

所以它不是下降方向。这正说明 Hessian 非正定时不能机械使用 Newton 方向。

沿 $(-1,1)^T$ 有

$$
\phi(\lambda)=f(-\lambda,\lambda)=-2\lambda^2+2\lambda.
$$

它在 $\lambda\to\infty$ 时趋于 $-\infty$，因此若精确搜索指 $\min_{\lambda\ge0}\phi(\lambda)$，则**不存在有限最优步长**。$\phi'(\lambda)=0$ 得到的 $1/2$ 是极大点，不是极小点。原题这一空若预期填写 $1/2$，忽略了二阶符号；严谨答案应指出一维子问题无界。

</details>

## 二、线性规划（18 分）

$$
\begin{aligned}
\min\quad &x_1+3x_2-2x_3\\
\text{s.t.}\quad &x_1-x_2+x_3=2,\\
&x_2+2x_3\le7,\\
&5x_2+2x_3\ge1,\\
&x_1,x_2,x_3\ge0.
\end{aligned}
$$

1. 用单纯形法求最优解。
2. 用互补松弛求对偶最优解。
3. 当对偶的价格向量 $(2,7,1)^T$ 变为 $(5,4,1)^T$ 时，判断原问题最优解是否变化；若变化，求新最优解。

<details class="exam-answer">
<summary>查看解析</summary>

先由等式消去 $x_1=2+x_2-x_3$。非负性给出 $x_3\le2+x_2$，目标化为

$$
f=2+4x_2-3x_3.
$$

对给定 $x_2$ 应尽量增大 $x_3$。约束给出

$$
x_3\le\frac{7-x_2}{2},\qquad
x_3\ge\frac{1-5x_2}{2},\qquad
x_3\le2+x_2.
$$

两条上界在 $2+x_2=(7-x_2)/2$ 即 $x_2=1$ 处相交。分段考察：当 $0\le x_2\le1$ 时，取 $x_3=2+x_2$，目标为 $-4+x_2$；当 $x_2\ge1$ 时，取 $x_3=(7-x_2)/2$，目标为 $(-17+11x_2)/2$。两段都在各自左端取最小值，比较可得

$$
\boxed{x^*=(0,0,2)^T},\qquad
\boxed{f^*=-4}.
$$

为避免不同标准形造成符号混乱，可直接为等式乘子 $y_1\in\mathbb R$、第二条 $\le$ 约束乘子 $y_2\le0$、第三条 $\ge$ 约束乘子 $y_3\ge0$。对偶为

$$
\begin{aligned}
\max\quad &2y_1+7y_2+y_3\\
\text{s.t.}\quad &y_1\le1,\\
&-y_1+y_2+5y_3\le3,\\
&y_1+2y_2+2y_3\le-2.
\end{aligned}
$$

原最优点中只有 $x_3>0$，故第三个对偶约束取等号；原问题第二、三条不等式都有严格松弛，故 $y_2=y_3=0$。于是

$$
y_1=-2,\qquad y_2=0,\qquad y_3=0,
$$

即

$$
\boxed{y^*=(-2,0,0)^T},\qquad \boxed{2y_1+7y_2+y_3=-4},
$$

与原问题最优值一致。

第三问等价于把三条约束的右端改为 $(5,4,1)^T$。消元 $x_1=5+x_2-x_3$ 后目标为 $5+4x_2-3x_3$，约束给出 $x_3\le(4-x_2)/2$ 且 $x_3\le5+x_2$。取 $x_2=0,x_3=2$ 可行并使目标最小，故

$$
\boxed{x'=(3,0,2)^T},\qquad \boxed{f'=-1}.
$$

原最优解发生变化。

</details>

## 三、KKT 条件（14 分）

求下列问题的所有 KKT 点，并判断哪些是局部最优解：

$$
\min f(x)=x_1x_2,
\qquad
x_1^2+x_2^2-1=0.
$$

<details class="exam-answer">
<summary>查看解析</summary>

Lagrange 函数

$$
L=x_1x_2+\lambda(x_1^2+x_2^2-1).
$$

驻点条件为

$$
x_2+2\lambda x_1=0,\qquad
x_1+2\lambda x_2=0.
$$

消去可得 $x_1^2=x_2^2$，结合单位圆：

$$
(x_1,x_2)=
\left(\pm\frac1{\sqrt2},\pm\frac1{\sqrt2}\right).
$$

同号两点目标值为 $1/2$，是约束圆上的局部最大点；异号两点目标值为 $-1/2$，是局部也是全局最小点：

$$
\boxed{\left(\frac1{\sqrt2},-\frac1{\sqrt2}\right),
\left(-\frac1{\sqrt2},\frac1{\sqrt2}\right)}.
$$

</details>

## 四、凸函数的线段刻画（10 分）

设 $D$ 是 $n$ 维欧氏空间中的凸集。证明：$f$ 在 $D$ 上是凸函数，当且仅当对任意不同的 $x,y\in D$，函数

$$
\varphi(\alpha)=f(\alpha x+(1-\alpha)y),\qquad 0\le\alpha\le1
$$

是凸函数。

<details class="exam-answer">
<summary>查看证明</summary>

若 $f$ 凸，取任意 $\alpha_1,\alpha_2,t\in[0,1]$，令 $z_i=\alpha_i x+(1-\alpha_i)y$。由 $D$ 凸，$z_i\in D$，于是

$$
\begin{aligned}
\varphi(t\alpha_1+(1-t)\alpha_2)
&=f(tz_1+(1-t)z_2)\\
&\le t f(z_1)+(1-t)f(z_2)\\
&=t\varphi(\alpha_1)+(1-t)\varphi(\alpha_2).
\end{aligned}
$$

故 $\varphi$ 凸。

反之，对任意 $x,y\in D$，由对应的 $\varphi$ 凸，取端点 $1,0$，对任意 $t\in[0,1]$ 有

$$
f(tx+(1-t)y)=\varphi(t)
\le t\varphi(1)+(1-t)\varphi(0)
=tf(x)+(1-t)f(y).
$$

这正是 $f$ 的凸性定义。

</details>

## 五、凸规划的全局最优条件（10 分）

考虑

$$
\min f(x),\qquad g_i(x)\le0, i=1,\ldots,m,
$$

其中 $f,g_i$ 均为一阶连续可微凸函数。证明：可行点 $x^*$ 是全局最优解的充分必要条件是存在 $\mu_i\ge0$，使

$$
f(x^*)=\min_x\left\{f(x)+\sum_{i=1}^m\mu_i g_i(x)\right\},
\qquad
\mu_i g_i(x^*)=0.
$$

<details class="exam-answer">
<summary>查看证明</summary>

充分性最直接。任意可行 $x$ 满足 $g_i(x)\le0$，故

$$
f(x)\ge f(x)+\sum_i\mu_i g_i(x)
\ge f(x^*)+\sum_i\mu_i g_i(x^*)=f(x^*).
$$

因此 $x^*$ 全局最优。

必要性需要相应约束资格，例如存在严格可行点的 Slater 条件。在凸性与约束资格下，KKT 条件对最优解必要：存在 $\mu_i\ge0$ 使

$$
\nabla f(x^*)+\sum_i\mu_i\nabla g_i(x^*)=0,\qquad
\mu_i g_i(x^*)=0.
$$

Lagrange 函数关于 $x$ 是凸函数，梯度为零意味着 $x^*$ 是它的全局最小点，于是得到题设等式。

题面若完全不补充约束资格，必要性并非对所有退化凸约束都自动成立；答题时应把这一前提写清楚。

</details>
