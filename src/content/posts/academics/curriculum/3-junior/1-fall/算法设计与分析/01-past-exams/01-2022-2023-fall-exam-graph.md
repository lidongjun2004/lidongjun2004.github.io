---
title: "2022—2023 学年第一学期期末 A 卷（有图论）"
description: "覆盖强连通分量、Dijkstra、区间覆盖、二分搜索、生成树和分糖果动态规划，附折叠解析"
date: 2026-08-24
tags: ["真题"]
---


## 一、复杂度填空题

1. $\sum_{i=2022}^n n/i$ 的渐近阶；
2. $T(n)=3T(n/2)+\log n$ 的渐近阶；
3. 在包含 $2^{10}$ 个元素的数组上运行快速排序，填写运行时间；
4. $n$ 顶点无向完全图的最小生成树有多少条边。

<details class="exam-answer">
<summary>查看填空答案与题面说明</summary>

1. $\Theta(n\log n)$。
2. $\Theta(n^{\log_23})$。主定理中递归项占主导。
3. 现有原卷没有说明枢轴策略，也没说问最好、平均还是最坏时间，因此无法唯一作答。若按课程常用平均时间，则对 $N=2^{10}$ 个元素为 $\Theta(N\log N)$；最坏情况仍可为 $\Theta(N^2)$。不应把缺失条件偷偷补上。
4. 恰有 $n-1$ 条边，渐近为 $\Theta(n)$。

</details>

## 二、判断题

1. 任何 NPC 问题和任何 NP-hard 问题都是 NP 问题。
2. $P\cap NPC=\varnothing$。
3. 若能在 $O(n^9)$ 求最大独立集，则所有 NPC 问题都能在多项式时间解决。
4. 判断图中是否有大小为 5 的团无法在多项式时间解决。

<details class="exam-answer">
<summary>查看判断题答案</summary>

1. **错误**。NPC 一定属于 NP；NP-hard 问题不一定属于 NP，甚至不一定是判定问题。
2. **无法判断**。若 $P\ne NP$，交集为空；若 $P=NP$，NPC 问题也在 P 中。
3. **正确**。最大独立集的判定版本 NP 完全；若它有多项式算法，则所有 NP 问题经规约都有多项式算法。
4. **错误**。5 是固定常数，枚举所有五元顶点组需要 $O(n^5)$，仍为多项式时间。

</details>

## 三、强连通分量运行实例

![2022 期末 SCC 题](/images/algorithm-design/2022-exam-scc.png)

从顶点 $a$ 开始模拟强连通分量算法：

1. 在反向图 $G^R$ 上执行 DFS，按完成时刻从早到晚写出顶点顺序；
2. 再按该顺序的逆序在原图 $G$ 上执行 DFS，写出各顶点的发现时间、完成时间和每个强连通分量的顶点集合。

<details class="exam-answer">
<summary>查看强连通分量与一种合法 DFS 过程</summary>

图的强连通分量为

$$
\{a,b,c,e\},\qquad\{d,f\},\qquad\{g,h,i\}.
$$

若每个邻接表按字母顺序访问，在反向图 $G^R$ 从 $a$ 开始，一种从早到晚的完成顺序是

```text
h, i, g, f, d, c, e, b, a
```

再按完成时间逆序在原图启动 DFS，依次得到上述三个分量。题面没有规定同一顶点多条出边的访问顺序，因此发现/完成时间并非唯一；答案应与自己声明的邻接顺序一致，但 SCC 集合不变。

继续采用“邻接表按字母顺序访问”，并令计时器从 0 开始、每次发现或完成一个顶点时先加 1。第二遍 DFS 的发现/完成时间为：

| 顶点 | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ | $g$ | $h$ | $i$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 发现时间 | 1 | 2 | 4 | 9 | 5 | 10 | 13 | 14 | 15 |
| 完成时间 | 8 | 3 | 7 | 12 | 6 | 11 | 18 | 17 | 16 |

三棵 DFS 树的根依次为 $a,d,g$，它们分别给出集合 `{a,b,c,e}`、`{d,f}` 和 `{g,h,i}`。

</details>

## 四、Dijkstra 运行实例

![2022 期末 Dijkstra 题](/images/algorithm-design/2022-exam-dijkstra.png)

1. 从顶点 $a$ 出发模拟 Dijkstra 算法，填写每轮确定的顶点和各顶点暂定距离；
2. 若把边 $c\to e$ 的权重改为 $-12$，判断能否继续使用 Dijkstra；若不能，写出一种可行算法。

<details class="exam-answer">
<summary>查看距离更新与负边问题</summary>

从 $a$ 出发，一种确定顶点顺序为

```text
a, b, e, c, g, h, f, d
```

下表把每一行定义为“选定该行顶点，并完成它的出边松弛之后”的暂定距离；初始行还没有选定顶点：

| 本轮确定 | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ | $g$ | $h$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 初始 | 0 | $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ |
| $a$ | 0 | 2 | 7 | $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ |
| $b$ | 0 | 2 | 7 | $+\infty$ | 5 | $+\infty$ | 8 | $+\infty$ |
| $e$ | 0 | 2 | 7 | 15 | 5 | $+\infty$ | 8 | 12 |
| $c$ | 0 | 2 | 7 | 15 | 5 | $+\infty$ | 8 | 12 |
| $g$ | 0 | 2 | 7 | 15 | 5 | $+\infty$ | 8 | 10 |
| $h$ | 0 | 2 | 7 | 15 | 5 | 11 | 8 | 10 |
| $f$ | 0 | 2 | 7 | 13 | 5 | 11 | 8 | 10 |
| $d$ | 0 | 2 | 7 | 13 | 5 | 11 | 8 | 10 |

因此最终最短距离为：

| 顶点 | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ | $g$ | $h$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 距离 | 0 | 2 | 7 | 13 | 5 | 11 | 8 | 10 |

若把 $c\to e$ 改成 $-12$，不能继续使用 Dijkstra，因为已确定顶点的距离可能被后来负边再次降低。可改用 Bellman–Ford；该图若确认无环，也可按拓扑序松弛。

</details>

## 五、定长闭区间覆盖点集

数轴上有 $n$ 个不同点 $\{x_1,x_2,\ldots,x_n\}$。使用若干个长度为 $l$ 的闭区间覆盖全部点，求最少区间数和每个区间的范围。要求给出伪代码和复杂度，$O(n\log n)$ 可得满分。

<details class="exam-answer">
<summary>查看贪心算法</summary>

先把点坐标升序排序。取最左边尚未覆盖的点 $x_i$，放置区间

$$
[x_i,x_i+l],
$$

并跳过其中所有点，重复直到结束。

任何可行解都必须用某个区间覆盖当前最左点。把该区间右移到左端恰为 $x_i$ 不会丢失右侧覆盖能力，因此存在最优解包含贪心选择。排序 $O(n\log n)$，扫描 $O(n)$。

```text
sort(x[1..n])
intervals = empty list
i = 1
while i <= n:
    left = x[i]
    right = left + l
    append [left, right] to intervals
    i = i + 1
    while i <= n and x[i] <= right:
        i = i + 1
return intervals
```

</details>

## 六、在 $0\cdots01\cdots1$ 中找第一个 1

数组 $A[1..n]$ 由连续的若干个 0 和连续的若干个 1 构成，并保证两种数字都出现：

1. 在 $O(\log n)$ 时间找到第一个 1 的位置；
2. 若 1 的个数 $m\ll n$，在 $O(\log m)$ 时间找到第一个 1，并给出伪代码。

<details class="exam-answer">
<summary>查看 $O(\log n)$ 与 $O(\log m)$ 算法</summary>

标准方法对单调谓词 `A[i] == 1` 二分，找第一个为真的位置，时间 $O(\log n)$。

```text
left = 1
right = n
while left < right:
    mid = floor((left + right) / 2)
    if A[mid] == 1:
        right = mid
    else:
        left = mid + 1
return left
```

若 1 的个数 $m\ll n$，从数组末尾向左做指数搜索：依次检查距离末尾 $1,2,4,8,\ldots$ 的位置，直到看到 0 或越过数组。第一个 1 位于最后两个检查位置之间，再二分该区间。指数搜索只走到 $O(m)$ 的后缀，时间 $O(\log m)$。

```text
knownOne = n
step = 1
while n - step >= 1 and A[n - step] == 1:
    knownOne = n - step
    step = 2 * step

knownZero = max(1, n - step)
left = knownZero + 1
right = knownOne
while left < right:
    mid = floor((left + right) / 2)
    if A[mid] == 1:
        right = mid
    else:
        left = mid + 1
return left
```

题目保证 0 和 1 都出现，所以当指数搜索越过数组左端时，位置 1 一定可以作为 `knownZero`。指数阶段和二分阶段处理的范围都只有 $O(m)$。

</details>

## 七、最大汇聚度生成树

定义树 $T$ 的汇聚度为其最大顶点度数

$$
D(T)=\max_{v\in V_T}\deg_T(v).
$$

给定连通无向图 $G=(V,E)$，构造一棵汇聚度最大的生成树，写出伪代码并分析复杂度；$O(|V|+|E|)$ 可得满分。

<details class="exam-answer">
<summary>查看线性算法与证明</summary>

先扫描所有边，找原图中度数最大的顶点 $v$，其度为 $\Delta(G)$。把 $v$ 的所有关联边加入生成树候选，此时形成一棵以 $v$ 为中心的星形局部树，不会成环。

再从已连接顶点出发做 BFS/DFS，每遇到一个尚未进入树的顶点就加入发现它的边，直到覆盖全图。原图连通，所以一定能扩展成生成树。

```text
v = a vertex with maximum length(Adj[v])
T = empty edge set
visited[u] = false for every u in V
Q = empty queue

visited[v] = true
enqueue(Q, v)
for each w in Adj[v]:
    if not visited[w]:
        visited[w] = true
        add edge (v, w) to T
        enqueue(Q, w)

while Q is not empty:
    u = dequeue(Q)
    for each w in Adj[u]:
        if not visited[w]:
            visited[w] = true
            add edge (u, w) to T
            enqueue(Q, w)
return T
```

所得树中 $\deg_T(v)=\Delta(G)$。任何生成树都是原图子图，任何顶点在树中的度都不可能超过它在原图中的度，因此这已经达到全局上界。时间 $O(V+E)$。

</details>

## 八、整袋糖果均分

老师有 $n$ 袋不能拆开的糖果，第 $i$ 袋有 $a_i$ 颗，且 $\sum_i a_i=m$：

1. 当 $m$ 是 2 的倍数时，判断能否均分给两人；若可以，输出分配方案，目标复杂度 $O(nm)$；
2. 当 $m$ 是 3 的倍数时，判断能否均分给三人，目标复杂度 $O(nm^2)$。

<details class="exam-answer">
<summary>查看两人和三人的动态规划</summary>

两人均分时目标为 $S=m/2$。做 0-1 子集和：

$$
dp[i][s]=dp[i-1][s]\lor dp[i-1][s-a_i].
$$

保留前驱即可恢复第一人的袋子，剩余袋子给第二人。时间 $O(nm)$、空间 $O(nm)$；只判断可压为 $O(m)$。

三人均分时目标 $S=m/3$，只显式记录前两人的和：

$$
dp[i][x][y]=\text{前 }i\text{ 袋能否让前两人分别得到 }x,y.
$$

第 $i$ 袋可给第一人、第二人或第三人。若 $dp[n][S][S]$ 为真，剩余总和也恰为 $S$。时间 $O(nm^2)$、空间可滚动为 $O(m^2)$。

</details>
