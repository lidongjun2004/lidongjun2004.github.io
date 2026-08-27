---
title: 第 7 次作业 · 图
description: 第七次作业的图客观题，以及遍历、布线、路径和北京地铁查询提交。
date: 2026-08-27
tags: ["作业"]
---

本页把源截图中必须依赖图形的题改写为等价边表，避免把整张答题页面当作图片贴上来；顶点、边和权值均来自原图。

## 选择题

### 1. 含 $n$ 条边的无向图，其邻接表中共有多少个边结点？

<details class="exam-answer"><summary>展开答案</summary>

$2n$，对应 B。

</details>

### 2. $n$ 个顶点的无向图采用邻接矩阵，其矩阵具有什么性质？

<details class="exam-answer"><summary>展开答案</summary>

对称矩阵，对应 B。

</details>

### 3. 8 个顶点的简单无向图最多有多少条边？

<details class="exam-answer"><summary>展开答案</summary>

$8\times7/2=28$，对应 B。

</details>

### 4. 图中所有顶点度数之和是边数的多少倍？

<details class="exam-answer"><summary>展开答案</summary>

2 倍，对应 C。

</details>

### 5. 图的深度优先遍历类似二叉树的哪种遍历？

<details class="exam-answer"><summary>展开答案</summary>

前序遍历，对应 A。

</details>

### 6. 一个无向连通图有多少棵最小生成树？

<details class="exam-answer"><summary>展开答案</summary>

可能一棵，也可能多棵，对应 B。

</details>

### 7. 邻接表上的广度优先遍历通常借助什么结构？

<details class="exam-answer"><summary>展开答案</summary>

队列，对应 B。

</details>

### 8. 计算 AOE 网关键路径长度与活动 $a_6$ 的松弛时间

活动边为：$v_1\to v_2(a_1=3)$、$v_1\to v_4(a_2=6)$、$v_1\to v_3(a_3=2)$、$v_2\to v_5(a_4=4)$、$v_2\to v_4(a_5=2)$、$v_3\to v_4(a_6=1)$、$v_3\to v_6(a_7=3)$、$v_4\to v_5(a_8=1)$、$v_5\to v_7(a_9=3)$、$v_6\to v_7(a_{10}=4)$。

<details class="exam-answer"><summary>展开答案</summary>

关键路径长度为 10，对应 C；$a_6$ 的松弛时间为 3，对应 A。

</details>

### 9. 含 $n$ 个顶点、$e$ 条边的无向连通图，用 Kruskal 算法生成最小生成树，复杂度是什么？

<details class="exam-answer"><summary>展开答案</summary>

$O(e\log_2 e)$，对应 A，主要代价是边排序。

</details>

### 10. 关于 AOE 网，哪项叙述错误？

<details class="exam-answer"><summary>展开答案</summary>

“任一关键活动提前完成都会使整个工程提前完成”错误，对应 D；可能还有另一条同长度关键路径。

</details>

## 填空题

### 1. 邻接表中每个顶点的边结点数，对无向图和有向图分别表示什么？

<details class="exam-answer"><summary>展开答案</summary>

无向图为该顶点的度，有向图为出度。

</details>

### 2. 有向图邻接矩阵第 $i$ 行非无穷大元素数等于什么？

<details class="exam-answer"><summary>展开答案</summary>

顶点 $i$ 的出度。

</details>

### 3. 稀疏图用邻接矩阵还是邻接表更省空间？

<details class="exam-answer"><summary>展开答案</summary>

邻接表。

</details>

### 4. $n$ 个顶点构成一个环，它有多少棵生成树？

<details class="exam-answer"><summary>展开答案</summary>

$n$ 棵；删去环上任一条边都得到一棵生成树。

</details>

### 5. Prim 算法最后加入边的权值

题图的无向边为：$v_1v_2:16$、$v_1v_3:10$、$v_1v_4:9$、$v_2v_3:11$、$v_2v_5:6$、$v_2v_6:5$、$v_3v_4:2$、$v_3v_5:14$、$v_4v_5:18$、$v_5v_6:1$。从 $v_1$ 开始执行 Prim。

<details class="exam-answer"><summary>展开答案</summary>

最后一条加入的边权为 1。

</details>

### 6. Kruskal 算法最后加入边的权值

仍使用上一题的无向图。

<details class="exam-answer"><summary>展开答案</summary>

最后选入边的权值为 11。

</details>

### 7. 一个非连通无向图最多有 28 条边，至少有多少个顶点？

<details class="exam-answer"><summary>展开答案</summary>

9 个。

</details>

### 8. 求有向图的一组拓扑序

$V=\{v_1,v_2,v_3,v_4,v_5,v_6\}$，$E=\{\langle v_1,v_2\rangle,\langle v_1,v_4\rangle,\langle v_2,v_6\rangle,\langle v_3,v_1\rangle,\langle v_3,v_4\rangle,\langle v_4,v_5\rangle,\langle v_5,v_2\rangle,\langle v_5,v_6\rangle\}$。

<details class="exam-answer"><summary>展开答案</summary>

`v3v1v4v5v2v6`。

</details>

### 9. 用 Dijkstra 算法求 A 到 G 的最短路径

题图有向边为：$A\to B:3$、$A\to C:2$、$A\to D:3$、$B\to C:3$、$B\to E:1$、$C\to E:3$、$F\to C:1$、$D\to F:3$、$E\to G:1$、$F\to G:5$。

<details class="exam-answer"><summary>展开答案</summary>

`ABEG`，总权值为 5。

</details>

### 10. 求题给 AOE 网的关键路径

题图活动边为：$v_1\to v_2(a_1=3)$、$v_1\to v_3(a_2=4)$、$v_2\to v_4(a_3=2)$、$v_2\to v_5(a_4=1)$、$v_3\to v_5(a_5=3)$、$v_3\to v_6(a_6=5)$、$v_4\to v_7(a_7=6)$、$v_5\to v_7(a_8=8)$、$v_5\to v_8(a_9=4)$、$v_6\to v_9(a_{10}=2)$、$v_7\to v_{11}(a_{11}=7)$、$v_8\to v_{10}(a_{12}=4)$、$v_8\to v_9(a_{13}=10)$、$v_9\to v_{10}(a_{14}=1)$、$v_{10}\to v_{11}(a_{15}=6)$。

<details class="exam-answer"><summary>展开答案</summary>

`a2a5a9a13a14a15`。

</details>

## 编程题提交

### 图遍历（图-基本题）

<details class="exam-answer"><summary>查看提交实现</summary>

提交建立图的邻接关系并按题目要求遍历。访问标记避免环导致重复访问；源中只保留本人代码，未保存题目对邻接点次序的完整约定。

</details>

### 最少布线（图）

<details class="exam-answer"><summary>查看提交实现</summary>

提交在带权无向图上选择连接全部顶点的低代价边，属于最小生成树问题。实现按源代码维护候选边和已连通顶点。

</details>

### 独立路径数计算

<details class="exam-answer"><summary>查看提交实现</summary>

提交遍历图并统计符合题设条件的路径数。独立题面缺失，无法确认“独立路径”的精确定义和是否允许重复顶点，因此不据代码补造定义。

</details>

### 北京地铁乘坐线路查询（202205）

<details class="exam-answer"><summary>查看提交实现</summary>

源目录保存站点数据 `bgstations.txt`。提交把站点建成图，读取起点和终点，计算路径并按线路变化输出乘车方案。代码使用图搜索与前驱数组恢复路径。

</details>
