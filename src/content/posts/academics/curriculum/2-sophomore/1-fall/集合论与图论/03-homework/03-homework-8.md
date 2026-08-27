---
title: "第八次作业 · 最短通路"
description: "在带权有向图中计算从 u₁ 到 u₈ 的最短通路"
date: 2026-08-27
tags: ["作业"]
---

图 10.5 给出了一个带权有向图，试求从顶点 $u_1$ 到 $u_8$ 的最短通路。

![第八次作业中的带权有向图](/images/academics/set-and-graph/shortest-path-graph.svg)

<details class="exam-answer">
<summary>展开查看作答</summary>

从 $u_1$ 开始做 Dijkstra 松弛：

| 已确定顶点 | 新得到或改进的暂定距离 |
|---|---|
| $u_1:0$ | $d(u_2)=5, d(u_3)=2, d(u_4)=3$ |
| $u_3:2$ | $d(u_5)=9, d(u_6)=5, d(u_7)=3$ |
| $u_4:3$ | $d(u_7)$ 仍为 3 |
| $u_7:3$ | $d(u_8)=14$，$d(u_6)$ 仍为 5 |
| $u_2:5$ | $d(u_5)$ 仍为 9 |
| $u_6:5$ | $d(u_5)=6, d(u_8)$ 仍为 14 |
| $u_5:6$ | $d(u_8)=11$ |

沿前驱回溯得到：

$$
u_1\to u_3\to u_6\to u_5\to u_8,
$$

总权重为：

$$
2+3+1+5=11.
$$

</details>
