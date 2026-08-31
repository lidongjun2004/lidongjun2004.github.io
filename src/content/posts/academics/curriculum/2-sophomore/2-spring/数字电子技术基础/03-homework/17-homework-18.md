---
title: "第 18 次作业：D/A 与 A/D 转换"
description: "峰值采样、双积分型 A/D 和逐次逼近型 A/D 的分析计算。"
date: 2026-08-27
tags: ["作业"]
---

本篇对应 `2025作业文件/作业18.doc`。`第十八章 作业.pdf` 是同一份题目的批注版，折叠处保留我当时的作答。

## 7.2 数字式峰值采样

图示峰值采样电路由四位二进制加法计数器、D/A 转换器、电压比较器和控制门构成。被测信号为三角波。说明电路的工作原理；测量前先在清零端加负脉冲，使计数器清零。

![题 7.2 数字式峰值采样电路](/images/academics/digital-electronics/homework/hw-18-figure-01.png)

<details class="exam-answer">
<summary>查看我当时的作答与整理</summary>

源批注给出的工作过程是：清零脉冲先令计数器输出为 0，D/A 输出也回到 0。只要输入 $u_i$ 高于当前 D/A 保持的电平，比较器就允许时钟脉冲通过，计数器继续加一，D/A 输出随之逐级上升。当 D/A 输出追到三角波峰值附近，比较器关闭控制门，计数停止，D/A 输出便保持峰值对应的量化电平。

</details>

## 7.3 双积分型 A/D 转换器

根据图示双积分型 A/D 转换器，简述其工作原理，并回答：

1. 被测电压最大值 $u_{i,\max}=2\text{ V}$，要求能分辨的最小电压为 $0.1\text{ mV}$，二进制计数器容量应大于多少，需要多少位；
2. 时钟频率 $f_{CP}=200\text{ kHz}$，求采样时间 $T_1$；
3. 在 $f_{CP}=200\text{ kHz}$、$u_i<E_R=2\text{ V}$ 的条件下，希望积分器最大输出为 $5\text{ V}$，求积分时间常数 $RC$。

![题 7.3 双积分型 A/D 转换器](/images/academics/digital-electronics/homework/hw-18-figure-02.png)

<details class="exam-answer">
<summary>查看我当时的作答与核算</summary>

我当时先按满量程与分辨率求所需计数容量：

$$
\frac{2\text{ V}}{0.1\text{ mV}}=20000.
$$

因此容量应大于 20000；因为 $2^{14}<20000<2^{15}$，应选 15 位二进制计数器。

固定积分阶段取满计数时长，我当时的作答为

$$
T_1=\frac{2^{15}}{200\text{ kHz}}=163.84\text{ ms}.
$$

由积分关系 $u_O=u_iT_1/(RC)$，取最大输入 $2\text{ V}$、最大输出 $5\text{ V}$，得到

$$
RC=\frac{2\text{ V}\times163.84\text{ ms}}{5\text{ V}}=65.536\text{ ms}.
$$

</details>

## 7.6 逐次逼近型 A/D 转换器

10 位 D/A 转换器的最大输出 $U_{o,\max}=12.276\text{ V}$，时钟频率 $f_{CP}=500\text{ kHz}$。

1. 当输入 $u_i=4.32\text{ V}$ 时，求转换后的输出状态 $D=Q_9Q_8$…$Q_0$；
2. 求完成这次转换所需的时间 $t$。

<details class="exam-answer">
<summary>查看我当时的作答与核算</summary>

我当时先求量化间隔：

$$
\Delta=\frac{12.276}{2^{10}-1}=0.012\text{ V}.
$$

因此输入对应的十进制码为

$$
\frac{4.32}{0.012}=360,
$$

写成 10 位二进制数即

$$
D=0101101000.
$$

源批注按本题采用的 12 个时钟周期计算：

$$
t=\frac{12}{500\text{ kHz}}=24\mu\text{s}.
$$

</details>
