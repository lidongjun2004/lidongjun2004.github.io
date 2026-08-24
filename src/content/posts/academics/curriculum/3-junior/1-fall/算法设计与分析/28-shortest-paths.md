---
title: "图中的最短路径"
description: "统一理解松弛操作，以及 BFS、Dijkstra、Bellman-Ford 和 Floyd-Warshall 的适用条件"
date: 2026-08-23
tags: ["算法设计与分析", "算法"]
---

最短路径算法看似很多，核心动作却相同：用一条新边尝试改进当前距离估计。不同算法的区别，在于按什么顺序松弛，以及对边权有什么假设。

## 1. 松弛

若已知到 $u$ 的估计距离 $d[u]$，边 $(u,v)$ 权重为 $w(u,v)$，则检查

$$
d[v]>d[u]+w(u,v).
$$

成立时更新

$$
d[v]\leftarrow d[u]+w(u,v),\qquad parent[v]\leftarrow u.
$$

初始化 $d[s]=0$，其余为 $\infty$。父指针可恢复具体路径。

## 2. 无权图：BFS

每条边权都相同，可按经过边数逐层扩展。BFS 时间为 $O(V+E)$，是这一条件下最简单的单源最短路。

## 3. 非负边权：Dijkstra

Dijkstra 维护尚未确定的顶点，每次选当前 $d$ 最小者 $u$，把它的距离永久确定，再松弛其所有出边。

```text
d[s] = 0
priorityQueue.push(0, s)
while queue is not empty:
    (distance, u) = extractMin()
    if distance != d[u]: continue
    for each edge (u, v, weight):
        relax(u, v)
```

非负边权保证：任何绕到尚未确定顶点再回来的路径都不可能让当前最小的 $d[u]$ 变小。二叉堆实现复杂度为

$$
O((V+E)\log V),
$$

常简写为 $O(E\log V)$。

出现负权边时，这个“确定后不再改变”的贪心性质失效，不能使用 Dijkstra。

## 4. 允许负边：Bellman–Ford

一条不含重复顶点的最短路至多有 $V-1$ 条边。Bellman–Ford 对所有边反复松弛 $V-1$ 轮，第 $i$ 轮后可保证所有至多含 $i$ 条边的最短路正确。

```text
repeat V - 1 times:
    for each edge (u, v, w):
        relax(u, v)
```

再做第 $V$ 轮：若源点可达区域仍有边能被松弛，则存在源点可达的负权环，最短距离没有有限下界。

复杂度为 $O(VE)$。某一轮完全无更新时可以提前结束。

## 5. 所有点对：Floyd–Warshall

令 $d^{(k)}[i][j]$ 表示中间顶点只允许来自 $\{1,\ldots,k\}$ 时，$i$ 到 $j$ 的最短距离。加入顶点 $k$ 后：

$$
d^{(k)}[i][j]=\min\left\{
d^{(k-1)}[i][j],
d^{(k-1)}[i][k]+d^{(k-1)}[k][j]
\right\}.
$$

可原地写成三重循环，但 $k$ 必须在最外层：

```text
for k = 1..V:
    for i = 1..V:
        for j = 1..V:
            d[i][j] = min(d[i][j], d[i][k] + d[k][j])
```

时间 $O(V^3)$、空间 $O(V^2)$。它允许负边，但不能让相关路径经过负环。结束后若存在 $d[i][i]<0$，说明有负环。

## 6. 算法选择表

| 场景 | 算法 | 复杂度 |
|---|---|---:|
| 无权或等权，单源 | BFS | $O(V+E)$ |
| 非负权，单源 | Dijkstra | $O((V+E)\log V)$ |
| 可有负边，单源 | Bellman–Ford | $O(VE)$ |
| 可有负边，所有点对 | Floyd–Warshall | $O(V^3)$ |

DAG 还可以按拓扑序松弛，$O(V+E)$ 完成，并允许负边，因为不会有环。

## 7. 无穷值与溢出

只有 $d[u]$ 有限时才计算 $d[u]+w$。工程实现中不能把语言最大整数直接当无穷再相加，否则可能溢出成负数。应先判断可达，或选留有加法余量的哨兵值。

## 8. 负环到底意味着什么

只有从源点可达、且能继续到目标的负环，才使对应源到目标最短路变成 $-\infty$。图上某个完全不相关的负环不影响当前源点。Bellman–Ford 检测的是**源点可达**的负环。
