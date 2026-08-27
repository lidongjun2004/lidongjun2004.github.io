---
title: "第 8 次作业：加法器与数码比较器"
description: "全加器网络、BCD 码转换与五位数码比较器设计。"
date: 2026-08-27
tags: ["作业"]
---

本篇对应 `2025作业文件/作业8.docx`，源文件只有题面。

## 3.7 三个全加器构成的电路

图示电路由三个全加器构成。写出关于输入 $X,Y,Z$ 的输出 $F_1$、$F_2$、$F_3$、$F_4$ 的表达式。

![题 3.7 全加器电路](/images/academics/digital-electronics/homework/hw-08-figure-01.png)

## 3.8 74LS283 构成的码制转换电路

输入 $DCBA$ 是 BCD 8421 码。写出 $B_2$、$B_1$ 的表达式，并列表说明输出 $D'C'B'A'$ 是哪一种编码。

![题 3.8 码制转换电路](/images/academics/digital-electronics/homework/hw-08-figure-02.png)

## 3.9 从 BCD 8421 码转换到 BCD 5421 码

使用四位全加器 74LS283 和二输入与非门，实现 BCD 8421 码到 BCD 5421 码的转换。

## 3.21 数码比较器

1. 分析图中电路，写出 $L$、$Q$、$G$ 的表达式，列真值表并说明其逻辑功能；
2. 使用该电路与集成四位数码比较器 74LS85 构成一个五位数码比较器。

![题 3.21 比较器电路与 74LS85](/images/academics/digital-electronics/homework/hw-08-figure-03.png)
