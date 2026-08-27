---
title: "实验 1：TTL 和 CMOS 门电路"
description: "测试 74LS00 参数，观察 TTL 与 CMOS 互连，并用 CD4007 实现逻辑门。"
date: 2026-08-27
tags: ["作业"]
---

本篇整理自 `实验1` 中的实验要求和我当时提交的《TTL 和 CMOS 门电路》报告。

## 实验任务

1. 测试 TTL 与非门 74LS00 带载和不带载时的输出高电平 $U_{OH}$ 与输出低电平 $U_{OL}$；
2. 分别搭接 CMOS 驱动 TTL、TTL 驱动 CMOS 的互连电路，输入 $100\text{ kHz}$ 方波，用示波器观察 $U_{O1}$、$U_{O2}$ 并测量上升时间；
3. 用 CD4007 实现 $Y=\overline{ADI}$ 和 $Y=\overline{A+D+I}$，画出接线图并验证真值表。

两种互连实验的源线路如下。

![CMOS 驱动 TTL](/images/academics/digital-electronics/experiments/experiment-01-figure-09.png)

![TTL 驱动 CMOS](/images/academics/digital-electronics/experiments/experiment-01-figure-10.png)

<details class="exam-answer">
<summary>查看提交内容与实验结果</summary>

### 74LS00 静态参数

报告记录的测量结果为：

- 空载时 $U_{OH}=4.463\text{ V}$，$U_{OL}=0.1631\text{ V}$；
- 接入 $5100\Omega$ 上拉电阻时，$U_{OH}=3.1918\text{ V}$；
- 接入 $500\Omega$ 电阻时，$U_{OH}=0.3741\text{ V}$。

![TTL 与 CMOS 电平参数对照](/images/academics/digital-electronics/experiments/experiment-01-figure-07.png)

### TTL 与 CMOS 互连

TTL 驱动 CMOS 时，报告测得 $U_{O1}$ 上升时间为 $18.20\text{ ns}$，$U_{O2}$ 上升时间为 $128.8\text{ ns}$。

![TTL 驱动 CMOS 的 UO1](/images/academics/digital-electronics/experiments/experiment-01-figure-13.png)

![TTL 驱动 CMOS 的 UO2](/images/academics/digital-electronics/experiments/experiment-01-figure-14.png)

CMOS 驱动 TTL 时，报告测得 $U_{O1}$ 上升时间为 $156.2\text{ ns}$，$U_{O2}$ 上升时间为 $22.0\text{ ns}$。

![CMOS 驱动 TTL 的 UO1](/images/academics/digital-electronics/experiments/experiment-01-figure-15.png)

![CMOS 驱动 TTL 的 UO2](/images/academics/digital-electronics/experiments/experiment-01-figure-16.png)

### CD4007 逻辑门

第一组电路实现三输入与非，仅当 $A=D=I=1$ 时输出为 0；第二组电路实现三输入或非，仅当 $A=D=I=0$ 时输出为 1。

![CD4007 三输入与非电路](/images/academics/digital-electronics/experiments/experiment-01-figure-17.png)

![CD4007 三输入或非电路](/images/academics/digital-electronics/experiments/experiment-01-figure-18.png)

报告最后用完整波形作了对照，并据此总结：本次条件下 TTL 电路的传输延迟比 CMOS 电路短。

![第一组完整波形](/images/academics/digital-electronics/experiments/experiment-01-figure-19.png)

![第二组完整波形](/images/academics/digital-electronics/experiments/experiment-01-figure-20.png)

</details>
