---
title: "2025 年春常微分方程自测"
description: "2024–2025 学年第二学期自测题与原提交作答核对；这不是正式期末真题"
date: 2026-08-27
tags: ["作业"]
---

这份材料的卷面标题明确写的是“常微分方程自测题”，因此放在作业而不冒充真题。下面保留题面，并把源提交的手写结果转成可检索公式；明显的笔误会单独指出。

## 一、填空题

### 1. 恰当方程

求 $e^y dx+(xe^y+y)dy=0$ 的通解。

<details class="exam-answer">
<summary>查看提交答案</summary>

$$
xe^y+\frac12y^2=C.
$$

</details>

### 2. 特征根与最低阶数

$1,i,2-i$ 是某实常系数线性齐次方程的特征根，阶数至少是多少？

<details class="exam-answer">
<summary>查看提交答案</summary>

实系数要求共轭根 $-i,2+i$ 也出现，因此至少有五个根，最低为五阶。

</details>

### 3. 一阶线性方程的极限

$y'+y=q(x)$，$q$ 是 $n$ 次多项式，求 $\lim_{x\to-\infty}e^{2x}y(x)$。

<details class="exam-answer">
<summary>查看提交答案</summary>

通解由一个多项式特解与 $Ce^{-x}$ 组成，乘 $e^{2x}$ 后两部分都趋于零，答案为 $0$。

</details>

### 4. 函数组的相关性

$x-e^x$、$2+\sin x$、$x\cos x$ 在 $\mathbb R$ 上是否线性相关？

<details class="exam-answer">
<summary>查看提交答案</summary>

不是。$e^x$ 的增长先迫使第一项系数为零，再由 $x\cos x$ 的无界振荡和 $2+\sin x$ 得其余系数也为零。

</details>

### 5. 待定系数形式

对 $y''-3y'+2y=\cos x+5x-8e^x$，写出一个特解的待定形式。

<details class="exam-answer">
<summary>查看提交答案</summary>

因为特征根为 $1,2$，$e^x$ 与齐次解共振，应取

$$
u=A\cos x+B\sin x+ax+b+Cxe^x.
$$

</details>

### 6. 用解的差构造通解

已知 $y=x$ 是对应齐次方程的解，而 $x^2+3$、$x^2+3+e^{-x}$ 是非齐次方程的两个特解，写出非齐次方程通解。

<details class="exam-answer">
<summary>查看提交答案</summary>

两个特解之差 $e^{-x}$ 也是齐次解，因此

$$
y=x^2+3+C_1x+C_2e^{-x}.
$$

</details>

### 7. 积分因子

为 $xdy+(2xy-e^{-2x})dx=0$ 写出一个积分因子。

<details class="exam-answer">
<summary>查看提交答案</summary>

$$
\mu(x)=\frac{e^{2x}}x.
$$

</details>

### 8. 曲线族的微分方程

写出曲线族 $y=Cx+C^3$ 所满足的微分方程。

<details class="exam-answer">
<summary>查看提交答案</summary>

令 $p=y'=C$，消去参数得

$$
y=xy'+(y')^3.
$$

</details>

## 二、解微分方程

### 1. $y'=2x(1+y^2)$

<details class="exam-answer">
<summary>查看提交答案</summary>

$$
\arctan y=x^2+C,\qquad y=\tan(x^2+C).
$$

原提交附了 $x\ne0$，但分离积分并不需要这个限制。

</details>

### 2. 路径无关的曲线积分

已知

$$
\int_L\left(\frac{3x^2}{2}+y\sin2x\right)dx
+[f'(x)+4f(x)]dy
$$

与路径无关，且 $f(0)=f'(0)=0$，求 $f$。

<details class="exam-answer">
<summary>查看提交答案</summary>

恰当条件给出 $f''+4f'=\sin2x$。代入两个初值可得

$$
f(x)=\frac18-\frac1{10}\cos2x-\frac1{20}\sin2x-\frac1{40}e^{-4x}.
$$

</details>

### 3. $x\sqrt{1-(y')^2}=y'$

<details class="exam-answer">
<summary>查看提交答案</summary>

符号条件决定

$$
y'=\frac{x}{\sqrt{1+x^2}},
$$

所以

$$
y=\sqrt{1+x^2}+C.
$$

</details>

### 4. $yy''-2(y')^2=0$

<details class="exam-answer">
<summary>查看提交答案</summary>

$y=0$ 是解。对 $y\ne0$，有

$$
\left(\frac{y'}{y^2}\right)'=0,
$$

从而

$$
y=-\frac1{C_1x+C_2}.
$$

</details>

### 5. $y'=-x+\sqrt{x^2+y}$

<details class="exam-answer">
<summary>查看提交答案</summary>

令 $p=y'$，平方前先保留 $x+p\ge0$ 的定义条件。方程化为 $y=2xp+p^2$，可得参数解

$$
x=\frac C{p^2}-\frac23p,\qquad
y=\frac{2C}{p}-\frac13p^2.
$$

参数式还需满足 $x+p\ge0$。推导时除掉了 $p$，因此另有 $p=0$ 对应的解支 $y\equiv0$，它只能取在 $x\ge0$ 的区间上。

</details>

## 三、唯一性的等价命题

证明 $y'=a(x)y+f(x)$、$y(x_0)=y_0$ 的解唯一，当且仅当 $v'=a(x)v$、$v(x_0)=0$ 的零解唯一。

<details class="exam-answer">
<summary>查看提交答案</summary>

两个非齐次解之差满足齐次零初值问题；反过来，若齐次零初值问题存在非零解，把它加到任一非齐次解上就会制造第二个非齐次解。两边分别使用这两个构造即可。

</details>

## 四、初值问题

求解

$$
y''-3y'+2y=xe^{2x},\qquad y(0)=0,\quad y'(0)=1.
$$

<details class="exam-answer">
<summary>查看提交答案</summary>

源提交得到

$$
y=\left(\frac12x^2-x+2\right)e^{2x}-2e^x.
$$

代入 $x=0$ 及求导后可核对两个初值都成立。

</details>
