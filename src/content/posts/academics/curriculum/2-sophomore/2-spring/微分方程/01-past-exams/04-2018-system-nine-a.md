---
title: "2018 年 9 系 A 卷真题"
description: "常微分方程 A 卷：Bernoulli 方程、奇解、隐式方程、高阶方程与线性系统唯一性"
date: 2026-08-27
tags: ["真题"]
---

正式性与年份来自源文件名“2018 年 9 系常微分 A 卷”；卷面本身未写具体学期。源文件没有官方答案，以下解析按题面推导。

## 一、填空题

### 1. 方程阶数与线性

$$
x\frac{d^5y}{dx^5}+y\frac{d^3y}{dx^3}+3x\frac{dy}{dx}=x^3y^2-1
$$

是几阶、是否线性？

<details class="exam-answer">
<summary>查看答案</summary>

五阶非线性方程。$y\,y^{(3)}$ 和 $y^2$ 都破坏了线性。

</details>

### 2. $e^{-t}\cos2t$ 的 Laplace 变换

<details class="exam-answer">
<summary>查看答案</summary>

$$
\frac{s+1}{(s+1)^2+4}.
$$

</details>

### 3. 标准基解矩阵

$$
\binom{x}{y}'=
\begin{pmatrix}1&-2\\2&1\end{pmatrix}\binom{x}{y}.
$$

<details class="exam-answer">
<summary>查看答案</summary>

$$
\Phi(t)=e^t
\begin{pmatrix}
\cos2t&-\sin2t\\
\sin2t&\cos2t
\end{pmatrix}.
$$

</details>

### 4. Bernoulli 方程

求 $y'=y\tan x-y^2\cos x$ 的通解。

<details class="exam-answer">
<summary>查看答案</summary>

$y=0$ 是解。令 $z=1/y$，得到 $z'+z\tan x=\cos x$，故

$$
y=\frac{\sec x}{x+C}.
$$

</details>

### 5. 奇解

求 $y=xy'+4+(y')^2$ 的奇解。

<details class="exam-answer">
<summary>查看答案</summary>

这是 Clairaut 方程。令 $p=y'$，由 $x+2p=0$ 消参得

$$
y=4-\frac{x^2}{4}.
$$

</details>

## 二、解方程

### 1. $y'+e^{y^2+3x}/y=0$

<details class="exam-answer">
<summary>查看答案</summary>

乘以 $ye^{-y^2}$ 后可识别 $e^{-y^2}$ 的导数，得到

$$
e^{-y^2}=\frac23e^{3x}+C.
$$

</details>

### 2. $(x-y\cos(y/x))dx+x\cos(y/x)dy=0$

<details class="exam-answer">
<summary>查看答案</summary>

令 $u=y/x$，则 $dy=u\,dx+x\,du$，交叉项消掉，得到

$$
\frac{dx}{x}+\cos u\,du=0.
$$

所以

$$
\ln|x|+\sin\frac yx=C.
$$

</details>

### 3. $x\sqrt{1-(y')^2}=2y'$

<details class="exam-answer">
<summary>查看答案</summary>

$$
y'=\frac{x}{\sqrt{x^2+4}},\qquad
y=\sqrt{x^2+4}+C.
$$

</details>

### 4. $(x-1)y''+2xy'+(x+1)y=0$

<details class="exam-answer">
<summary>查看答案</summary>

令 $y=e^{-x}u$，方程降为

$$
(x-1)u''+2u'=0.
$$

故

$$
y=e^{-x}\left(C_1+\frac{C_2}{x-1}\right).
$$

</details>

### 5. $xy'''-y''=x^2e^x$

<details class="exam-answer">
<summary>查看答案</summary>

令 $v=y''$，则 $(v/x)'=e^x$。连续积分可得

$$
y=(x-2)e^x+C_1x^3+C_2x+C_3,
$$

其中 $C_1$ 已吸收原式中的 $1/6$。

</details>

## 三、高阶常系数方程

求

$$
y'''-y''-4y'+4y=\sin x+e^x.
$$

<details class="exam-answer">
<summary>查看答案</summary>

特征多项式为 $(r-1)(r-2)(r+2)$。因此

$$
\begin{aligned}
y={}&C_1e^x+C_2e^{2x}+C_3e^{-2x}
-\frac13xe^x\\
&+\frac1{10}(\sin x+\cos x).
\end{aligned}
$$

</details>

## 四、线性方程组

求 $x'=x-3y,\ y'=2x-4y$。

<details class="exam-answer">
<summary>查看答案</summary>

特征值为 $-1,-2$，相应特征向量可取 $(3,2)^\mathsf T$、$(1,1)^\mathsf T$：

$$
\binom{x}{y}
=C_1e^{-t}\binom32+C_2e^{-2t}\binom11.
$$

</details>

## 五、唯一性的等价命题

证明

$$
\boldsymbol Y'=A(x)\boldsymbol Y+\boldsymbol F(x),
\quad \boldsymbol Y(x_0)=\boldsymbol Y_0
$$

解唯一，当且仅当对应齐次零初值问题的零解唯一。

<details class="exam-answer">
<summary>查看答案</summary>

两个非齐次解之差满足齐次零初值问题；反过来，把任一非零齐次零初值解加到某个非齐次解上，就会得到第二个非齐次解。两个方向分别用这两个构造即可。

</details>
