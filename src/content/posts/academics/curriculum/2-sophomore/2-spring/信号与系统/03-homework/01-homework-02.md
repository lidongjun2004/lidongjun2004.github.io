---
title: "第 2 次作业：傅里叶级数与傅里叶变换"
description: "2024–2025 学年第二次作业，含周期波展开、对称性、变换性质与三角脉冲。"
date: 2026-08-27
tags: ["作业"]
---

我按 `2信号与系统第二次作业.pdf` 整理。图形题用等价的分段函数与对称条件表述，避免整页截图。

## 1. 两个周期信号的傅里叶级数

周期均为 $T$，$\omega_0=2\pi/T$。

1. 三角波在一个周期 $(-T/2,T/2)$ 内为

   $$
   f(t)=\begin{cases}
   \dfrac{2E}{T}t+E,&-\dfrac T2<t<0,\\
   -\dfrac{2E}{T}t+E,&0<t<\dfrac T2.
   \end{cases}
   $$

2. 矩形波在一个周期内为

   $$
   f(t)=\begin{cases}
   E/2,&-T/2<t<0,\\
   -E/2,&0<t<T/2.
   \end{cases}
   $$

求二者的三角形式傅里叶级数。

<details class="exam-answer">
<summary>展开解析</summary>

三角波为偶函数，$a_0=E$，且

$$
a_n=\frac{2E}{n^2\pi^2}[1-(-1)^n]
=\begin{cases}
0,&n\text{ 为偶数},\\
\dfrac{4E}{n^2\pi^2},&n\text{ 为奇数}.
\end{cases}
$$

所以

$$
f(t)=\frac E2+\sum_{m=0}^{\infty}
\frac{4E}{(2m+1)^2\pi^2}
\cos[(2m+1)\omega_0t].
$$

矩形波为奇函数，只有正弦项：

$$
b_n=\frac{E}{n\pi}[(-1)^n-1]
=\begin{cases}
0,&n\text{ 为偶数},\\
-\dfrac{2E}{n\pi},&n\text{ 为奇数}.
\end{cases}
$$

因此

$$
f(t)=-\sum_{m=0}^{\infty}
\frac{2E}{(2m+1)\pi}\sin[(2m+1)\omega_0t].
$$

</details>

## 2. 从波形判断谐波组成

原卷给出三幅周期波。等价的图形特征如下：

1. 关于 $t=0$ 偶对称，并且每隔 $T/2$ 重复；
2. 关于 $t=0$ 偶对称，且满足 $f(t+T/2)=-f(t)$；
3. 关于 $t=0$ 奇对称，且满足 $f(t+T/2)=-f(t)$。

分别判断傅里叶级数包含哪些分量。

<details class="exam-answer">
<summary>展开解析</summary>

1. 偶函数只含余弦；$T/2$ 周期只留下偶次谐波，同时可以有直流分量。
2. 偶函数只含余弦；半波反对称只留下奇次谐波。
3. 奇函数只含正弦；半波反对称只留下奇次谐波。

因此依次为：**直流与偶次余弦；奇次余弦；奇次正弦**。

</details>

## 3. 用对称条件补全一个周期

已知 $f(t)$ 在 $0\le t\le T/4$ 上的一段波形，记为 $q(t)$。分别按下列条件补全一个周期：

1. $f$ 是奇函数，且只含偶次谐波；
2. $f$ 是偶函数，同时含偶次与奇次谐波。

<details class="exam-answer">
<summary>展开解析</summary>

第一种情况同时满足

$$
f(-t)=-f(t),\qquad f(t+T/2)=f(t).
$$

所以先用奇对称把 $q$ 延拓到 $[-T/4,0]$，再以 $T/2$ 为周期复制，就唯一补全了一个 $T$ 周期。

第二种情况只由偶对称确定

$$
f(-t)=f(t),
$$

但“同时有奇、偶次谐波”不提供半波对称关系。因此 $[T/4,T/2]$ 可任选一段不额外制造半波对称的波形，再关于 $T/2$ 镜像到 $[T/2,3T/4]$，最后利用周期性补齐。答案不唯一。

</details>

## 4. 利用性质求傅里叶变换

已知 $\mathcal F[f(t)]=F(\omega)$，求：

1. $(5-3t)f(-3t)$；
2. $f(5-3t)$；
3. $f(-3t)\cos5t$；
4. $t\,df(t)/dt$。

<details class="exam-answer">
<summary>展开解析</summary>

令 $g(t)=f(-3t)$，则 $G(\omega)=\frac13F(-\omega/3)$，且

$$
\mathcal F\{tg(t)\}=jG'(\omega)
=-\frac j9F'\left(-\frac\omega3\right).
$$

于是

$$
\mathcal F\{(5-3t)f(-3t)\}
=\frac53F\left(-\frac\omega3\right)
+\frac j3F'\left(-\frac\omega3\right),
$$

$$
\mathcal F\{f(5-3t)\}
=\frac13F\left(-\frac\omega3\right)e^{-j5\omega/3},
$$

$$
\mathcal F\{f(-3t)\cos5t\}
=\frac16F\left(\frac{-\omega+5}{3}\right)
+\frac16F\left(\frac{-\omega-5}{3}\right),
$$

$$
\mathcal F\left\{t\frac{df}{dt}\right\}
=-F(\omega)-\omega F'(\omega).
$$

</details>

## 5. 求傅里叶反变换

求：

$$
\pi[u(\omega+\omega_0)-u(\omega-\omega_0)],
$$

$$
2\pi\delta(\omega-\pi)+4\pi\delta(\omega)
+6\pi\delta(\omega+\pi)
$$

的傅里叶反变换。

<details class="exam-answer">
<summary>展开解析</summary>

第一个频谱是在 $[-\omega_0,\omega_0]$ 上高度为 $\pi$ 的矩形：

$$
x(t)=\frac1{2\pi}\int_{-\omega_0}^{\omega_0}
\pi e^{j\omega t}\,d\omega
=\frac{\sin(\omega_0t)}t
=\omega_0\operatorname{Sa}(\omega_0t).
$$

第二个直接用 $2\pi\delta(\omega-\omega_c)\leftrightarrow e^{j\omega_ct}$：

$$
x(t)=e^{j\pi t}+2+3e^{-j\pi t}.
$$

</details>

## 6. 三角脉冲

三角脉冲

$$
f_1(t)=\begin{cases}
E-\dfrac{2E}{\tau}|t|,&|t|\le\tau/2,\\
0,&\text{其他}
\end{cases}
$$

满足 $F_1(\omega)=\dfrac{E\tau}{2}\operatorname{Sa}^2(\omega\tau/4)$。请由定义证明，并求

$$
f_2(t)=f_1(t-\tau/2)\cos(\omega_0t)
$$

的傅里叶变换。

<details class="exam-answer">
<summary>展开解析</summary>

利用偶对称：

$$
F_1(\omega)=2E\int_0^{\tau/2}
\left(1-\frac{2t}{\tau}\right)\cos\omega t\,dt
=\frac{E\tau}{2}\operatorname{Sa}^2\left(\frac{\omega\tau}{4}\right).
$$

先时移，再乘余弦：

$$
F_2(\omega)=\frac12\left[
F_1(\omega-\omega_0)e^{-j(\omega-\omega_0)\tau/2}
+F_1(\omega+\omega_0)e^{-j(\omega+\omega_0)\tau/2}
\right].
$$

把 $F_1$ 代入即可得到源文件中的完整表达式。

</details>
