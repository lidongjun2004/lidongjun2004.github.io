---
title: "作业 1 · 同或与异或门电路草图"
description: "根据手绘图恢复的逻辑门组合作业，并用真值表检查两个电路"
date: 2026-08-27
tags: ["作业"]
---

源目录仅保留了一张 2024 年 3 月 20 日附近的手绘图，没有独立题面。图中要用 OR、AND 和 NOT 组合出同或与异或逻辑。

## 手绘图中的同或结构

- 上支路：$A,B$ 先 OR，再 NOT；
- 下支路：$A,B$ 进入 AND；
- 两支路最后 OR。

## 手绘图中的异或结构

- 上支路：$A,B$ 进入 OR；
- 下支路：$A,B$ 先 AND，再 NOT；
- 两支路最后 OR。

<details class="exam-answer">
<summary>查看检查与修正</summary>

同或部分的表达式为

$$
Y_1=\lnot(A\lor B)\lor(A\land B),
$$

输入相同时为 1，符合 XNOR。

异或部分按手绘连法得到

$$
Y_2=(A\lor B)\lor\lnot(A\land B).
$$

它对四种输入都等于 1，所以不是 XOR。应将最后一级 OR 改成 AND：

$$
A\oplus B=(A\lor B)\land\lnot(A\land B).
$$

| $A$ | $B$ | XNOR | XOR |
|---:|---:|---:|---:|
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

</details>
