---
title: "第 8 次作业：采样定理与频谱混叠"
description: "2024–2025 学年第八次作业，含 Nyquist 条件、欠采样混叠与组合信号带宽。"
date: 2026-08-27
tags: ["作业"]
---

我按 `8信号与系统第八次作业.pdf` 整理。第一题源答案自己标注了题设问题，下面把“原答案”与严格结论分开说明。

## 1. 带限信号采样

最高频率为 800 Hz 的带限信号 $f(t)$ 经均匀采样后，希望通过理想低通滤波器完全恢复：

1. 抽样间隔 $T$ 应满足什么条件？
2. 若 $T=2\text{ ms}$，理想低通截止频率 $f_c$ 应满足什么条件？

<details class="exam-answer">
<summary>展开解析</summary>

Nyquist 条件要求

$$
f_s=\frac1T\ge2\times800=1600\text{ Hz},
$$

即

$$
T\le0.625\text{ ms}.
$$

当 $T=2\text{ ms}$ 时，$f_s=500\text{ Hz}$，远低于 1600 Hz，频谱已经混叠。**对任意原始 800 Hz 带限信号，不存在一个理想低通截止频率能保证完全恢复。**

源文件写了“$f_c\le250\text{ Hz}$”，随后也注明“本题出得有一点问题”。这个数只说明采样后主值区间的上界 $f_s/2=250\text{ Hz}$，不能消除已经发生的混叠。若采样率本来满足定理，恢复滤波器才应在“原信号带宽以上、第一幅频谱副本开始之前”选择截止频率。

</details>

## 2. 欠采样后的混叠频率

对

$$
x(t)=\cos(\omega_0t)
$$

以 $T=2\pi/\omega_s$ 采样，其中 $\omega_0<\omega_s<2\omega_0$。

1. 说明采样后频谱；
2. 按此采样频率恢复 $x_r(t)$，判断它与 $x(t)$ 是否一致；
3. 证明 $x_r(nT)=x(nT)$。

<details class="exam-answer">
<summary>展开解析</summary>

采样使原来位于 $\pm\omega_0$ 的冲激谱以 $\omega_s$ 为间隔重复。由于 $\omega_s<2\omega_0$，副本重叠，基带中看到的等效频率是 $|\omega_0-\omega_s|$。

因此一种低通重构为

$$
x_r(t)=\cos[(\omega_0-\omega_s)t],
$$

它通常不等于原信号。但在采样点上

$$
x_r(nT)=\cos(\omega_0nT-\omega_snT)
=\cos(\omega_0nT-2\pi n)
=x(nT).
$$

这正是混叠：不同连续信号产生完全相同的样本。

</details>

## 3. 组合信号的最大采样间隔

已知 $f(t)$ 的最高角频率为 $\omega_m$，求下列信号不混叠时的最大采样间隔：

1. $f(t/2)+f(t/3)$；
2. $f(t/2)f(t/3)$。

<details class="exam-answer">
<summary>展开解析</summary>

时间伸缩 $f(at)$ 的带宽变为 $|a|\omega_m$。

第一题两个带宽为 $\omega_m/2$ 与 $\omega_m/3$，相加后取较大者：

$$
\omega_{\max}=\frac{\omega_m}{2},
\qquad
T_{\max}=\frac{\pi}{\omega_{\max}}
=\frac{2\pi}{\omega_m}.
$$

第二题时域相乘对应频域卷积，带宽相加：

$$
\omega_{\max}=\frac{\omega_m}{2}+\frac{\omega_m}{3}
=\frac{5\omega_m}{6},
$$

$$
T_{\max}=\frac{\pi}{\omega_{\max}}
=\frac{6\pi}{5\omega_m}.
$$

可记住：时域相加时带宽取最大值，时域相乘时频域卷积、带宽相加，时域卷积时频域相乘、公共支撑往往取较小者。

</details>
