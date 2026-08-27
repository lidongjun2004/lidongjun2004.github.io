---
title: "第 13 周作业：用 Laplace 变换解方程组"
description: "三组初值问题的 Laplace 变换解法；题面按手写提交还原"
date: 2026-08-27
tags: ["作业"]
---

源文件只有手写作答。下面按作答中清晰可辨的第 1、3、5 题还原题面。

## 第 1 题

$$
\begin{cases}
x'+x-y=e^t,\\
y'+3x-2y=2e^t,\\
x(0)=y(0)=1.
\end{cases}
$$

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

令 $X(s)=\mathcal L[x]$、$Y(s)=\mathcal L[y]$。代入初值后解二元代数方程组，得到

$$
X(s)=Y(s)=\frac1{s-1}.
$$

所以

$$
x(t)=y(t)=e^t.
$$

</details>

## 第 3 题

$$
\begin{cases}
(2x''-x'+9x)-(y''+y'+3y)=0,\\
(2x''+x'+7x)-(y''-y'+5y)=0,\\
x(0)=x'(0)=1,\\
y(0)=y'(0)=0.
\end{cases}
$$

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

两式相加、相减，可化为

$$
2x''+8x=y''+4y,\qquad x'-x=-y'+y.
$$

第二式说明 $x+y=e^t$。代入第一式后解出

$$
\begin{aligned}
x(t)&=\frac13\sin2t+\frac23\cos2t+\frac13e^t,\\
y(t)&=\frac23e^t-\frac23\cos2t-\frac13\sin2t.
\end{aligned}
$$

</details>

## 第 5 题

$$
\begin{cases}
x'=y,\\
y'=z,\\
z'=-6x-11y-6z+e^t,\\
x(0)=y(0)=z(0)=0.
\end{cases}
$$

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

消元得

$$
x'''+6x''+11x'+6x=e^t.
$$

作 Laplace 变换并部分分式分解，提交中的结果可整理为

$$
x=-\frac18e^{-3t}+\frac13e^{-2t}-\frac14e^{-t}+\frac1{24}e^t.
$$

其余分量由 $y=x'$、$z=x''$ 直接得到。

</details>
