---
title: "实验 3：集成定时电路 555 的应用"
description: "五秒单稳态定时、1 kHz 多谐振荡和简易电容测量。"
date: 2026-08-27
tags: ["作业"]
---

我根据实验 3 的课件要求和自己当时提交的 PDF、Markdown 与实验图片，整理了这篇作业。

## 实验任务

1. 设计并搭接五秒单稳态定时电路，选取 $R$、$C$，用示波器观察并调到约五秒；
2. 搭接频率 $f=1\text{ kHz}$、占空比可调的多谐振荡器，观察最大和最小占空比波形并分别计算；
3. 搭接简易电容测量电路，测量 $0.1\mu\text{F}$、$0.01\mu\text{F}$、$0.001\mu\text{F}$ 及对应的两个同值电容并联情况，根据高电平时间计算电容并列表；
4. 555 的供电电压控制在 $5$～$10\text{ V}$。

<details class="exam-answer">
<summary>查看我当时的提交与实验结果</summary>

### 五秒单稳态定时

我在报告中采用单稳态近似公式

$$
t_w\approx1.1RC,
$$

并据此选择参数、搭接电路和观察输出。

![555 单稳态原理电路](/images/academics/digital-electronics/experiments/experiment-03-figure-02.png)

![五秒定时实验线路](/images/academics/digital-electronics/experiments/experiment-03-figure-05.png)

![五秒定时输出波形](/images/academics/digital-electronics/experiments/experiment-03-result-scope.jpg)

### 多谐振荡器

我在报告中使用的周期近似关系为

$$
T\approx0.7(R_1+2R_2)C,
$$

占空比按高电平时间与周期之比计算。

![555 多谐振荡器原理电路](/images/academics/digital-electronics/experiments/experiment-03-figure-03.png)

![1 kHz 可调占空比实验线路](/images/academics/digital-electronics/experiments/experiment-03-figure-06.png)

### 简易电容测量

我在报告中以单稳态脉宽反推被测电容。选取 $R=1\text{ k}\Omega$、标称电容约 $0.1\mu\text{F}$ 的一次记录中，反算结果与标称值接近。

![简易电容测量原理电路](/images/academics/digital-electronics/experiments/experiment-03-figure-04.png)

![电容测量数据表](/images/academics/digital-electronics/experiments/experiment-03-capacitance-table.png)

</details>
