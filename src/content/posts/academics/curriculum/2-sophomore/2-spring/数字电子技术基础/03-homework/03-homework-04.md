---
title: "第 4 次作业：TTL 负载、OC 门与三态门"
description: "TTL 拉灌电流、悬空输入、OC 门上拉电阻和三态门测量题。"
date: 2026-08-27
tags: ["作业"]
---

本篇对应 `2025作业文件/作业4.docx`；我还合并了同题的 `作业4.pdf` 与两页带批改作答。PDF 补出了 DOCX 文本抽取时漏掉的 2.3 题号。

## 2.2 拉电流与灌电流

已知 TTL 门的低电平输入电流为 $I_{iL}=-1\text{ mA}$，高电平输入漏电流为 $I_{iH}=40\mu\text{A}$。判断 $A=B=1$ 与 $A=0$ 时，$G_1$ 承担的是拉电流还是灌电流，并求电流大小。

![题 2.2 电路](/images/academics/digital-electronics/homework/hw-04-figure-01.png)

## 2.3 TTL 输入端电压

用万用表测量图中 $B$、$C$ 两点的电压，分别讨论：$A$ 端悬空、接低电平、接高电平、接地。

## 2.6 OC 门上拉电阻

$G_1$～$G_3$ 为 74LS 系列 OC 门，$G_4$～$G_6$ 为 74LS 与非门。按题面给出的高、低电平漏电流、灌电流和门限，计算上拉电阻 $R_L$ 的范围。

![题 2.6 电路](/images/academics/digital-electronics/homework/hw-04-figure-02.png)

## 2.7 三态门测量

对三态门控制信号和开关 $S$ 的四种组合，填写 $U_{O1}$、$U_{O2}$；再讨论把 $G_2$ 的悬空输入改接 $0.3\text{ V}$ 后的变化。

![控制信号符号](/images/academics/digital-electronics/homework/hw-04-figure-03.png)

![题 2.7 电路](/images/academics/digital-electronics/homework/hw-04-figure-04.png)

<details class="exam-answer">
<summary>查看我当时的作答与批改结果</summary>

我当时对 2.2 的作答为：

- $A=B=1$ 时，$G_1$ 输出低电平，给两个后级低电平输入灌电流，共约 $2\text{ mA}$；
- $A=0$ 时，$G_1$ 输出高电平，给两个后级输入拉电流，共约 $80\mu\text{A}$。

我当时对 2.3 的作答记录为：

| $A$ 端状态 | $B$ 端 | $C$ 端 |
|---|---:|---:|
| 悬空 | $1.4\text{ V}$ | $0.3\text{ V}$ |
| 接低电平 | $0.3\text{ V}$ | $3.6\text{ V}$ |
| 接高电平 | $1.4\text{ V}$ | $0.3\text{ V}$ |
| 接地 | $0\text{ V}$ | $3.6\text{ V}$ |

2.6 的批改结果为

$$
680\Omega\le R_L\le5.26\text{ k}\Omega.
$$

下限由低电平时 OC 门允许灌入的最大电流决定，上限由高电平时漏电流和后级高电平输入电流共同决定。

2.7 中，后级输入悬空时的源表格为：

| 控制状态 | $S$ | $U_{O1}$ | $U_{O2}$ |
|---|---|---:|---:|
| 使能 | 通 | $1.4\text{ V}$ | $0.3\text{ V}$ |
| 使能 | 断 | $0\text{ V}$ | $0.3\text{ V}$ |
| 高阻 | 通 | $3.6\text{ V}$ | $0.3\text{ V}$ |
| 高阻 | 断 | $3.6\text{ V}$ | $0.3\text{ V}$ |

把 $G_2$ 的悬空输入改接 $0.3\text{ V}$ 后，$G_2$ 的输出改为高电平，我当时在四种情况下均记为约 $3.6\text{ V}$。

</details>
