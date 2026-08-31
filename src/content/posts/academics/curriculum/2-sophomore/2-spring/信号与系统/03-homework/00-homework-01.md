---
title: "第 1 次作业：信号表示、冲激与正交分解"
description: "2024–2025 学年第一次作业，含信号分类、波形变换、冲激运算与均方误差分解。"
date: 2026-08-27
tags: ["作业"]
---

我按 `1信号与系统第一次作业.pdf` 整理。题目在外，源文件所附解答经核算、补足理由后折叠在每题下方。

## 1. 判断正误

判断下列说法，错误时给出原因：

1. $x[n]=\cos n$ 为数字信号；
2. 周期信号之和是周期信号；
3. 非周期信号之和是非周期信号；
4. 能量信号一定是非周期信号。

<details class="exam-answer">
<summary>展开解析</summary>

四项都不严谨或错误。

1. 自变量虽离散，$\cos n$ 的幅值仍连续取值，所以它是离散时间信号，不是幅值也量化的数字信号。
2. 只有两个周期之比为有理数时，其和才仍是周期信号。例如 $\sin t+\sin(\pi t)$ 没有公共正周期。
3. 两个非周期信号可能相加成周期信号，例如 $(\sin t+t)+(\sin t-t)=2\sin t$。
4. 零信号既是能量信号，也可以视为任意周期的周期信号；非零能量信号才不能是周期信号。

</details>

## 2. 证明冲激恒等式

证明（$a\ne0$）：

$$
\int_{-\infty}^{\infty}f(t)\delta(at+b)\,dt
=\int_{-\infty}^{\infty}\frac{f(t)}{|a|}
\delta\left(t+\frac ba\right)\,dt,
$$

$$
\int_{-\infty}^{\infty}f(t)\delta'(t)\,dt=-f'(0).
$$

<details class="exam-answer">
<summary>展开解析</summary>

第一个式子来自冲激的尺度性质：

$$
\delta(at+b)=\delta\left(a\left(t+\frac ba\right)\right)
=\frac1{|a|}\delta\left(t+\frac ba\right).
$$

第二个式子可看作分布意义下的分部积分。边界项为零，因而

$$
\int f(t)\delta'(t)\,dt
=-\int f'(t)\delta(t)\,dt=-f'(0).
$$

</details>

## 3. 周期性判断

判断下列信号是否为周期信号；若是，给出最小正周期：

1. $\cos(\cos t)$；
2. $e^{j2025t}$；
3. 正半轴上的

   $$
   f(t)=\sum_{n=0}^{\infty}(-1)^n
   [u(t-nT)-u(t-nT-T)].
   $$

<details class="exam-answer">
<summary>展开解析</summary>

1. $\cos(\cos(t+\pi))=\cos(-\cos t)=\cos(\cos t)$，最小正周期为 $\pi$。
2. 角频率为 2025，最小正周期为 $2\pi/2025$。
3. 第 $n$ 项只在 $nT\le t<(n+1)T$ 取值 $(-1)^n$，相邻区间符号交替，所以基本周期是 $2T$。

</details>

## 4. 波形变换

原信号为

$$
f(t)=\begin{cases}
1,&-2\le t<0,\\
1-t,&0\le t\le1,\\
0,&\text{其他}.
\end{cases}
$$

请至少用两种运算顺序求 $f(-3t-2)$ 的波形。

<details class="exam-answer">
<summary>展开解析</summary>

可以“先压缩、再反褶、最后左移 $2/3$”，也可以“先右移 2、再反褶、最后压缩 3 倍”。无论顺序如何，最终结果都是

$$
f(-3t-2)=\begin{cases}
3t+3,&-1\le t<-\frac23,\\
1,&-\frac23\le t\le0,\\
0,&\text{其他}.
\end{cases}
$$

检查端点最稳：原来的 $t=1,0,-2$ 依次映到新坐标 $-1,-2/3,0$。

</details>

## 5. 冲激抽样计算

计算：

1. $\sin t\,\delta(t)$；
2. $\int_{-\infty}^{\infty}f(t_0-t)\delta(t)\,dt$；
3. $\int_{-\infty}^{\infty}(e^{-t}+t)\delta(t+2)\,dt$；
4. $\int_{-\infty}^{\infty}e^{-j\omega t}[\delta(t)-\delta(t-t_0)]\,dt$。

<details class="exam-answer">
<summary>展开解析</summary>

依次为

$$
0,\qquad f(t_0),\qquad e^2-2,\qquad 1-e^{-j\omega t_0}.
$$

每一项都只需把冲激的零点代入它前面的普通函数；第一项还用了 $g(t)\delta(t)=g(0)\delta(t)$。

</details>

## 6. 正交函数集

判断下列函数集是否在指定区间内正交：

1. $\{1,x,x^2,\ldots\}$，区间 $(0,2)$；
2. $\{1,\cos t,\cos2t,\ldots\}$，区间 $(0,2\pi)$；
3. $\{\cos t,\cos2t,\ldots\}$，区间 $(0,\pi/2)$。

<details class="exam-answer">
<summary>展开解析</summary>

1. 不正交，例如 $\int_0^2 1\cdot x\,dx=2\ne0$。
2. 正交。不同整数频率的余弦在完整 $2\pi$ 区间内内积为 0，常数与各余弦也正交。
3. 不正交，例如

   $$
   \int_0^{\pi/2}\cos t\cos2t\,dt=\frac13\ne0.
   $$

</details>

## 7. 奇偶分解

对 $(t+1)e^{-t^2}$ 作奇偶分解，并写出任意信号 $f(t)$ 的奇偶分解公式。

<details class="exam-answer">
<summary>展开解析</summary>

任意信号都有

$$
f_{\mathrm e}(t)=\frac{f(t)+f(-t)}2,
\qquad
f_{\mathrm o}(t)=\frac{f(t)-f(-t)}2.
$$

由于 $e^{-t^2}$ 为偶函数，

$$
(t+1)e^{-t^2}=te^{-t^2}+e^{-t^2},
$$

其中 $te^{-t^2}$ 是奇分量，$e^{-t^2}$ 是偶分量。

</details>

## 8. 直流—交流分解

对信号 $e^{-t}$ 在区间 $(0,3)$ 作直流—交流分解。

<details class="exam-answer">
<summary>展开解析</summary>

直流分量是区间平均值：

$$
x_{\mathrm{DC}}=\frac13\int_0^3e^{-t}\,dt
=\frac{1-e^{-3}}3.
$$

交流分量为去均值后的信号：

$$
x_{\mathrm{AC}}(t)=e^{-t}-\frac{1-e^{-3}}3.
$$

</details>

## 9. 均方误差下的二次近似

在 $(-1,1)$ 上用 $f(t)=at^2+bt+c$（$a\ne0$）按均方误差准则近似 $g(t)=te^t$。与 $g(t)$ 在 0 处的二阶 Taylor 展开比较。

<details class="exam-answer">
<summary>展开解析</summary>

最小化

$$
\bar\varepsilon^2=\frac12\int_{-1}^{1}
[te^t-at^2-bt-c]^2\,dt
$$

等价于让残差分别与 $1,t,t^2$ 正交。解正规方程得到

$$
a=\frac{45}{4}\left(\frac{23}{3}e^{-1}-e\right),
$$

$$
b=\frac32(e-5e^{-1}),
\qquad
c=\frac{15}{4}e-\frac{111}{4}e^{-1}.
$$

所以最优二次近似为

$$
f(t)=\left(\frac{345}{4}e^{-1}-\frac{45}{4}e\right)t^2
+\frac32(e-5e^{-1})t
+\frac{15}{4}e-\frac{111}{4}e^{-1}.
$$

Taylor 展开关注 $t=0$ 附近的局部导数匹配；均方误差近似则让整个区间上的平方误差积分最小。前者“局部准”，后者“全区间平均更准”。

</details>

## 10. 锯齿波正交分解

给定

$$
f(t)=\begin{cases}
t+2\pi,&-2\pi\le t<0,\\
t,&0\le t<2\pi,
\end{cases}
$$

在 $(-2\pi,2\pi)$ 上用 $\{1,\sin t,\sin2t,\ldots\}$ 作正交展开，并求截断到 $n=2$ 时的均方误差。

<details class="exam-answer">
<summary>展开解析</summary>

投影系数为

$$
c_0=\pi,\qquad c_n=-\frac2n\quad(n\ge1).
$$

因此

$$
f(t)\sim \pi-\sum_{n=1}^{\infty}\frac2n\sin(nt).
$$

截断到 $n=2$：

$$
f_2(t)=\pi-2\sin t-\sin2t.
$$

源文件按

$$
\bar\varepsilon^2=\frac1{4\pi}
\int_{-2\pi}^{2\pi}[f(t)-f_2(t)]^2\,dt
$$

计算，得到

$$
\bar\varepsilon^2=\frac{\pi^2}{3}-\frac52.
$$

</details>
