---
title: "第 6 次作业：组合逻辑与译码器设计"
description: "组合电路分析、保密锁、74LS138 函数实现和七段显示消隐。"
date: 2026-08-27
tags: ["作业"]
---

本篇对应 `2025作业文件/作业6.docx`，源文件只有题面。

## 3.1 分析组合电路

写出输出表达式、真值表并说明逻辑功能。

![题 3.1 电路](/images/academics/digital-electronics/homework/hw-06-figure-01.png)

## 3.3 三按钮保密锁

按钮为 $A,B,C$。无按钮按下或仅按 $A$ 时，既不开锁也不报警；$ABC$、$AB$ 或 $AC$ 同时按下时开锁；其他状态报警。写出真值表、开锁与报警表达式，并用基本门实现。

## 3.12 分析 74LS138 电路

写出 $P_1$、$P_2$，列真值表并说明逻辑功能。

![题 3.12 电路](/images/academics/digital-electronics/homework/hw-06-figure-02.png)

## 3.13 用 74LS138 与 74LS00 实现函数

在只允许一片最小项译码器和一片四路二输入与非门的条件下，实现下列两个函数：

![P1](/images/academics/digital-electronics/homework/hw-06-figure-03.png)

![P2](/images/academics/digital-electronics/homework/hw-06-figure-04.png)

## 3.14 数字电压表的前导零消隐

量程为 $0$～$300.00\text{ V}$，小数点后保留两位。整数个位的 0 必须显示，个位以前的无效 0 不显示，小数部分的 0 必须显示。使用 74LS48 设计七段显示驱动和级联消隐逻辑。
