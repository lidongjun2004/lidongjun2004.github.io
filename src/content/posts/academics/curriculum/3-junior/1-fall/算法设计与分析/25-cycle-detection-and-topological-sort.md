---
title: "有向环检测与拓扑排序"
description: "从后向边与完成时间理解 DAG，掌握 DFS 和 Kahn 两种拓扑排序方法"
date: 2026-08-23
---

有向无环图（DAG）常用来表示先修关系、任务依赖和计算图。拓扑排序把所有顶点排成线性顺序，使每条边都从前指向后。

## 1. 拓扑序何时存在

图 $G=(V,E)$ 的拓扑序是一个排列，使得对每条 $(u,v)\in E$，$u$ 都排在 $v$ 前面。

有向图存在拓扑序，当且仅当它无环：

- 若有环，环中每个点都必须排在下一个点之前，最终要求某点排在自己之前，矛盾；
- DAG 一定有入度为 0 的顶点，反复删除即可构造序列。

## 2. DFS 方法

DFS 中，顶点只有在所有后继都完成后才完成。因此把顶点按完成时间从大到小排列，所有边都会从前指向后。

```text
result = empty list
for each unvisited vertex u:
    DFSVisit(u)

DFSVisit(u):
    mark u gray
    for each v in Adj[u]:
        if v is gray: report cycle
        if v is white: DFSVisit(v)
    mark u black
    prepend u to result
```

把顶点在退出递归时压栈，最后弹栈，就是完成时间逆序。

必须同时检测灰色边；否则有环图也会输出一个序列，但它不是合法拓扑序。

## 3. Kahn 算法

另一种方法不断取入度为 0 的顶点：

```text
compute indegree of every vertex
put all zero-indegree vertices into a queue
while queue is not empty:
    u = pop()
    append u to result
    for each edge (u, v):
        indegree[v]--
        if indegree[v] == 0:
            push(v)
```

若最终输出顶点数小于 $|V|$，剩下部分存在有向环。

## 4. 两种方法怎样选

- DFS 与强连通分量、其他递归处理自然衔接；
- Kahn 直接展示“当前可执行任务”，也易于检测唯一性；
- 两者用邻接表都是 $O(V+E)$ 时间、$O(V)$ 空间。

## 5. 拓扑序可能不唯一

Kahn 算法某一步若同时有多个入度 0 顶点，任选一个都可能得到合法拓扑序。若每一步都恰有一个选择，拓扑序唯一。

要求字典序最小拓扑序时，把普通队列换成小根堆；这会把复杂度提高到 $O((V+E)\log V)$ 的量级。

## 6. 为什么 DAG 必有入度 0 顶点

反设每个顶点入度至少为 1。从任意顶点不断沿入边向前走，有限顶点中必然重复某点，从而形成有向环，与 DAG 矛盾。出度 0 顶点同理一定存在。

## 7. 动态规划与拓扑序

DAG 上的依赖关系按拓扑序展开后，状态转移不会回头。例如 DAG 最短路可按拓扑序依次松弛出边，即使边权为负也正确，因为每个前驱都会先于后继完成。

## 8. 常见建模错误

- 把“课程依赖课程”边方向写反；
- Kahn 中修改原入度后又复用，未重新初始化；
- 只输出序列，不核对是否包含全部顶点；
- 无向图上谈拓扑排序；
- 把拓扑序误认为按编号、权重或层数排序。
