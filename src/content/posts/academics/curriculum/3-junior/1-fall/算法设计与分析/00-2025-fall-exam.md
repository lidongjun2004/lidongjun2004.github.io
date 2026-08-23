---
title: "期末真题与回忆题（2020—2025）"
description: "汇总算法设计与分析 2020—2025 往年卷和回忆题，附折叠解析、来源说明与题面勘误"
date: 2026-08-23
tags: ["算法设计与分析", "算法", "真题"]
---

本篇先放 2025 秋考后回忆题，再收录源目录中的 2020 补考、2022 有图论卷，以及两份无图论回忆或旧卷。2025 内容不是原卷扫描件；较早材料有正式卷，也有只剩题目概要的回忆文档。下面分别标出来源状态，不把“类似题”写成原题，也不补造文档里已经丢失的公式。

建议先限时独立完成，再展开每题解析。折叠内容是根据课件和通用算法结论整理的参考答案，不是课程组公布的标准答案。

## 一、填空题

**1.** 基于比较的排序算法在最坏情况下的时间复杂度下界是__________。

<details class="exam-answer">
<summary>查看第 1 题答案与解析</summary>

答案：$\Omega(n\log n)$。

决策树有至少 $n!$ 个叶结点，树高至少为

$$
\left\lceil\log_2(n!)\right\rceil=\Omega(n\log n).
$$

归并排序、堆排序能做到 $O(n\log n)$，所以上下界合起来是 $\Theta(n\log n)$。

</details>

**2.** 贪心算法具有__________性质。

<details class="exam-answer">
<summary>查看第 2 题答案与解析</summary>

答案：**贪心选择性质**。一个问题能被贪心正确求解，通常还要具备最优子结构；只写“最优子结构”并不能区分贪心和动态规划。

</details>

**3.** P 问题是指能在__________时间内解决的判定问题。

<details class="exam-answer">
<summary>查看第 3 题答案与解析</summary>

答案：**确定性多项式时间**。

</details>

**4.** 对递推式

$$
T(n)=aT(n/b)+f(n),
$$

当 $f(n)=O\bigl(n^{\log_ba-\varepsilon}\bigr)$ 时，$T(n)=$__________。

<details class="exam-answer">
<summary>查看第 4 题答案与解析</summary>

答案：

$$
T(n)=\Theta\bigl(n^{\log_ba}\bigr).
$$

这是主定理第一种情形：递归子问题的总代价占主导。

</details>

**5.** 当 $V=O(\sqrt n)$、$E=O(n)$ 时，Edmonds-Karp 算法的复杂度为__________。

<details class="exam-answer">
<summary>查看第 5 题答案与解析</summary>

Edmonds-Karp 的复杂度是 $O(VE^2)$，代入得到

$$
O\bigl(\sqrt n\cdot n^2\bigr)=O(n^{5/2}).
$$

</details>

## 二、复杂度分析

**1.** $T(n)=T(n-2)+n^2$。

<details class="exam-answer">
<summary>查看第 1 题答案与解析</summary>

每次把规模减少 2，共展开约 $n/2$ 层：

$$
T(n)=T(n-2k)+\sum_{i=0}^{k-1}(n-2i)^2.
$$

取 $k\approx n/2$，平方和为 $\Theta(n^3)$，故

$$
T(n)=\Theta(n^3).
$$

</details>

**2.** $T(n)=T(n/2)+T(n/4)+T(n/8)+n$。

<details class="exam-answer">
<summary>查看第 2 题答案与解析</summary>

递归树第一层所有子问题规模之和是

$$
n\left(\frac12+\frac14+\frac18\right)=\frac78n.
$$

以后每层继续乘 $7/8$，所以非递归代价形成几何级数：

$$
n+\frac78n+\left(\frac78\right)^2n+\cdots=\Theta(n).
$$

因此 $T(n)=\Theta(n)$。

</details>

**3.** $T(n)=2T(n/7)+n^3$。

<details class="exam-answer">
<summary>查看第 3 题答案与解析</summary>

$a=2$、$b=7$，而 $n^{\log_7 2}$ 的次数远小于 $n^3$。满足主定理第三种情形，故

$$
T(n)=\Theta(n^3).
$$

</details>

**4.** $T(n)=T(\sqrt n)+\log n$。

<details class="exam-answer">
<summary>查看第 4 题答案与解析</summary>

第 $i$ 层的非递归代价为

$$
\log\left(n^{1/2^i}\right)=\frac{\log n}{2^i}.
$$

递归深度是 $\Theta(\log\log n)$，但各层代价是几何级数：

$$
\log n+\frac12\log n+\frac14\log n+\cdots=\Theta(\log n).
$$

因此 $T(n)=\Theta(\log n)$。

</details>

**5.** $T(n)=2T(n/2)+n\log n$。

<details class="exam-answer">
<summary>查看第 5 题答案与解析</summary>

这里 $n^{\log_2 2}=n$，而 $f(n)=\Theta(n\log n)$，是主定理的扩展临界情形：

$$
T(n)=\Theta(n\log^2 n).
$$

从递归树看也一样：第 $i$ 层总成本是 $n(\log n-i)$，共 $\log n$ 层，求和得到 $\Theta(n\log^2 n)$。

</details>

## 三、简答题

### 1. BFS 的原理与应用

<details class="exam-answer">
<summary>查看答案与解析</summary>

BFS 从源点开始，用队列按“距离层”扩展：先访问所有距离为 1 的点，再访问距离为 2 的点，以此类推。顶点第一次入队时即被标记，并记录距离和前驱，避免重复搜索。

在无权图中，BFS 首次到达某个顶点时走过的边数最少，因此可以求**无权最短路**。典型应用还包括网格迷宫最短路、社交网络的最少关系层数、二分图染色等。邻接表实现的复杂度为 $O(V+E)$。

</details>

### 2. 0-1 背包与分数背包

<details class="exam-answer">
<summary>查看答案与解析</summary>

- 0-1 背包中每件物品只能完整地取或不取，决策是离散的，通常用动态规划，复杂度 $O(nW)$。
- 分数背包允许只取物品的一部分，可按单位重量价值 $v_i/w_i$ 从高到低贪心，复杂度由排序决定，为 $O(n\log n)$。

分数背包中，若方案先拿了较低单位价值的重量，就能用同样重量的更高单位价值物品替换而不变差，因此交换论证成立。0-1 背包不能随意切分物品，这种局部替换可能受剩余容量限制，最高单位价值的物品未必属于全局最优解。

</details>

### 3. P、NP、NPC 与 NPC 证明套路

<details class="exam-answer">
<summary>查看答案与解析</summary>

- **P**：能由确定性算法在多项式时间内解决的判定问题。
- **NP**：给定一个候选证书后，能在多项式时间内验证其正确性的判定问题。
- **NP-hard**：所有 NP 问题都能在多项式时间内归约到它的问题。
- **NPC**：既属于 NP，又是 NP-hard 的问题。

证明新问题 $B$ 是 NPC，通常分两步：

1. 证明 $B\in NP$：给出证书以及多项式时间验证器。
2. 选择已知 NPC 问题 $A$，构造多项式时间归约 $A\le_p B$。

归约方向不能写反。要证明 $B$ 至少和 $A$ 一样难，应把 $A$ 的实例变成 $B$ 的实例。

</details>

## 四、Dijkstra 流程题

题目给出的参考图如下，要求填写每轮暂定距离与所选结点。

![Dijkstra 流程题中的有向带权图](/images/algorithm-design/2025-exam-dijkstra.png)

<details class="exam-answer">
<summary>查看完整流程</summary>

从结点 0 出发。每轮选择尚未确定且暂定距离最小的结点，再松弛它的出边。

| 轮次 | 选中结点 | $d(0)$ | $d(1)$ | $d(2)$ | $d(3)$ | $d(4)$ | $d(5)$ | $d(6)$ |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0 | 0 | 5 | 2 | $\infty$ | $\infty$ | $\infty$ | $\infty$ |
| 2 | 2 | 0 | 5 | 2 | 8 | $\infty$ | 10 | $\infty$ |
| 3 | 1 | 0 | 5 | 2 | 6 | 11 | 10 | $\infty$ |
| 4 | 3 | 0 | 5 | 2 | 6 | 7 | 8 | $\infty$ |
| 5 | 4 | 0 | 5 | 2 | 6 | 7 | 8 | 14 |
| 6 | 5 | 0 | 5 | 2 | 6 | 7 | 8 | 11 |
| 7 | 6 | 0 | 5 | 2 | 6 | 7 | 8 | 11 |

最终最短距离为 $(0,5,2,6,7,8,11)$。例如到 6 的最短路是 $0\to1\to3\to5\to6$，长度为 $5+1+2+3=11$。

</details>

## 五、算法设计题

### 1. 最少糖果

每个同学至少得到一颗糖；相邻同学中，分数更高者必须得到更多糖。求最少糖果总数。

<details class="exam-answer">
<summary>查看算法、伪代码与复杂度</summary>

只从左向右扫描只能满足“比左邻居分高”的约束，只从右向左扫描只能满足另一侧。分别计算两种最低要求，再逐点取最大值即可。

```text
left[1..n] = 1
right[1..n] = 1

for i = 2 .. n:
    if r[i] > r[i - 1]:
        left[i] = left[i - 1] + 1

for i = n - 1 .. 1:
    if r[i] > r[i + 1]:
        right[i] = right[i + 1] + 1

answer = sum(max(left[i], right[i]))
```

$\max(left_i,right_i)$ 同时满足左右两侧的下界，而且任何合法方案都不能低于这两个下界，因此所得方案最小。时间复杂度 $O(n)$，空间复杂度 $O(n)$；还可复用一个数组把额外空间降到 $O(n)$ 或进一步优化。

</details>

### 2. 在递增矩阵中寻找 $A_{ij}=i+j$

矩阵每行向下、每列向右严格递增，元素互不相同，并保证存在满足 $A_{ij}=i+j$ 的位置。

<details class="exam-answer">
<summary>查看算法、成立条件与复杂度</summary>

若题目默认 $A_{ij}$ 是**整数**，可令

$$
B_{ij}=A_{ij}-i-j.
$$

因为严格递增的整数相邻至少增加 1，所以 $B$ 沿行、列均不减。此时可以像搜索有序矩阵一样从右上角开始：

```text
i = 1, j = n
while i <= n and j >= 1:
    value = A[i][j] - i - j
    if value == 0: return (i, j)
    if value > 0:  j -= 1
    else:          i += 1
```

每一步删除一行或一列，时间复杂度 $O(n)$，空间复杂度 $O(1)$。

需要注意：回忆版题干没有明确写“整数矩阵”。若允许任意实数，$A$ 严格递增并不能保证 $A_{ij}-i-j$ 单调，上面的 $O(n)$ 算法不再有证明；此时题面条件不足以推出该快速算法。这是回忆题中应保留的不确定点。

</details>

### 3. 带障碍网格上的路径

#### 3.1 单个起点到终点的最短路

<details class="exam-answer">
<summary>查看算法与复杂度</summary>

把每个可通行单元格看作顶点，与上下左右相邻的可通行格连无权边，从 $S$ 做 BFS。第一次到达 $T$ 时的层数就是最短路径长度；若队列清空仍未到达，则返回 $-1$。

网格有 $nm$ 个单元格，每格最多检查四条边，所以时间复杂度 $O(nm)$，空间复杂度 $O(nm)$。

</details>

#### 3.2 $k$ 个起点与 $k$ 个终点的互不相交路径

勘误后的题意是：起点和终点可以任意配对，但每个端点恰好使用一次，路径之间不能共享单元格。

<details class="exam-answer">
<summary>查看网络流建模</summary>

这是**顶点容量为 1 的最大流**：

1. 每个可通行格 $v$ 拆成 $v_{in}\to v_{out}$，容量为 1，保证一个格子最多被一条路径使用。
2. 对相邻格子 $u,v$，连 $u_{out}\to v_{in}$，容量为 1。
3. 超级源点向每个起点的 $v_{in}$ 连容量 1 的边。
4. 每个终点的 $v_{out}$ 向超级汇点连容量 1 的边。
5. 若最大流等于 $k$，流分解给出 $k$ 条互不相交路径；否则不存在。

拆点后顶点和边仍是 $O(nm)$。若用 Dinic，通用最坏界可写成 $O(V^2E)$；实际单位容量网格通常远快于这个保守上界。

</details>

### 4. 背包及相邻物品限制

#### 4.1 标准 0-1 背包

<details class="exam-answer">
<summary>查看状态转移</summary>

令 $dp[i][c]$ 表示只考虑前 $i$ 件物品、容量为 $c$ 时的最大价值：

$$
dp[i][c]=\max\left(dp[i-1][c],\ dp[i-1][c-w_i]+v_i\right),
$$

第二项仅在 $c\ge w_i$ 时可选。答案为 $dp[n][W]$，时间复杂度 $O(nW)$。若压缩成一维数组，容量必须从大到小枚举，防止同一物品被重复使用。

</details>

#### 4.2 相邻物品不能同时选择

<details class="exam-answer">
<summary>查看状态转移</summary>

若不选第 $i$ 件，来自 $dp[i-1][c]$；若选第 $i$ 件，则第 $i-1$ 件必须不选，只能从前 $i-2$ 件转移：

$$
dp[i][c]=\max\left(dp[i-1][c],\ dp[i-2][c-w_i]+v_i\right).
$$

边界可设 $dp[0][c]=0$，并把 $dp[-1][c]$ 视为 0。时间复杂度 $O(nW)$，空间可用滚动数组降到 $O(W)$。

</details>

## 最后检查：这张卷子真正考什么

- 复杂度题不只是套主定理，还要会递归树和变量变换。
- 分治、贪心、动态规划、图搜索和网络流都可能出算法设计题。
- 遇到题面条件不足时，应先写清额外假设，再给算法和证明；不要把缺失条件偷偷补进题目。

## 2020—2021 第一学期补考试卷（有图论）

这一部分来自 2021 年 3 月 8 日补考原卷及一页课程答案。选择、判断题有原答案；算法题没有随卷答案，下面给出推导。

### 一、复杂度选择题

1. 求 $\sum_{i=100}^{n}n/i$ 的渐近阶。
2. 求 $T(n)=T(n/2)+n,T(1)=1$ 的渐近阶。
3. 输入两个正整数 $n>m$ 求最大公约数，输入字符数的渐近阶是什么？
4. $n$ 个顶点的无向图最多有多少条边？

<details class="exam-answer">
<summary>查看选择题答案与解析</summary>

- 第 1 题：$\Theta(n\log n)$。因为

$$
\sum_{i=100}^{n}\frac ni
=n(H_n-H_{99})
=\Theta(n\log n).
$$

- 第 2 题：$\Theta(n)$。递归树代价是 $n+n/2+n/4+\cdots$。
- 第 3 题：$\Theta(\log n)$；更完整地写是 $\Theta(\log n+\log m)$，而 $m<n$ 时可用 $\Theta(\log n)$ 表示。
- 第 4 题：最多 $n(n-1)/2=\Theta(n^2)$ 条边。

这与随卷答案的选项 `(d)、(c)、(b)、(e)` 一致。

</details>

### 二、复杂度类别判断题

1. $P\subseteq NP$。
2. 若 $X\in NP$ 且 $X\le_p3SAT$，则 $X$ 无法在多项式时间解决。
3. 若 TSP 不能在多项式时间解决，则 3SAT 也不能在多项式时间解决。
4. 判断图中是否有大小为 10 的团不能在多项式时间解决。

<details class="exam-answer">
<summary>查看判断题答案与解析</summary>

1. **正确**。能在多项式时间求解，自然也能在多项式时间验证。
2. **错误**。$X\le_p3SAT$ 只说明 3SAT 至少和 $X$ 一样难；许多 P 问题也能规约到 3SAT。
3. **正确**，这里把 TSP 理解为经典 NP 完全判定问题。若 3SAT 在 P 中，则所有 NP 问题、包括 TSP 都在 P 中；取逆否命题即可。
4. **错误**。10 是固定常数，可枚举所有 10 个顶点的组合并检查，时间 $O(n^{10})$，仍是多项式。

</details>

### 三、BFS 运行实例

从顶点 6 开始遍历下图中的树，并求到各点距离。

![2020 补考 BFS 题](/images/algorithm-design/2020-makeup-exam-bfs.png)

<details class="exam-answer">
<summary>查看 BFS 过程与距离</summary>

按图中从左到右的邻接顺序，一种 BFS 出队顺序为

```text
6, 4, 2, 7, 1, 5, 9, 10, 3, 8, 11
```

各层与距离：

- 距离 0：$6$；
- 距离 1：$4$；
- 距离 2：$2,7$；
- 距离 3：$1,5,9,10$；
- 距离 4：$3,8$；
- 距离 5：$11$。

邻接顺序改变时同层顶点的先后可变，但距离不变。

</details>

### 四、Prim 运行实例

从 $A$ 开始，逐边构造最小生成树。

![2020 补考 Prim 题](/images/algorithm-design/2020-makeup-exam-prim.png)

<details class="exam-answer">
<summary>查看选边过程</summary>

一种没有同权歧义的选边顺序是：

$$
AB(5),\ BH(6),\ HI(1),\ IJ(2),\ HE(8),\ EC(3),\ CD(11),\ DG(4),\ GF(12).
$$

每一步都选跨越“已入树顶点与树外顶点”这个割的最轻边。九条边连接十个顶点，总权重为

$$
5+6+1+2+8+3+11+4+12=52.
$$

</details>

### 五、波浪序列最小值

数组从 0 严格上升到最大值，再严格下降到负的最小值，最后严格上升到 0。要求 $O(\log n)$ 找最小值。

<details class="exam-answer">
<summary>查看二分算法</summary>

对中点 `mid`：

- 若 $A[mid]\ge0$，最小值一定在右侧；
- 若 $A[mid]<0$ 且 $A[mid]>A[mid+1]$，仍在下降，最小值在右侧；
- 若 $A[mid]<0$ 且 $A[mid]<A[mid+1]$，已在谷底右坡，最小值在左侧或就是当前点。

```text
left = 1
right = n - 1
while left < right:
    mid = floor((left + right) / 2)
    if A[mid] >= 0 or A[mid] > A[mid + 1]:
        left = mid + 1
    else:
        right = mid
return A[left]
```

每轮把区间减半，时间 $O(\log n)$、空间 $O(1)$。该算法依赖题面所述严格三段形状和最小值为负。

</details>

### 六、子序列判定

判断长度 $m$ 的序列 $X$ 是否为长度 $n$ 的序列 $Y$ 的子序列，$m\le n$。

<details class="exam-answer">
<summary>查看双指针算法</summary>

用指针 $i$ 指向 $X$ 下一个待匹配元素，扫描 $Y$：

```text
i = 1
for j = 1..n:
    if i <= m and X[i] == Y[j]:
        i++
return i == m + 1
```

扫描过程中总是用当前最早可用位置匹配，不会损失后续可能。时间 $O(n)$、额外空间 $O(1)$。

</details>

### 七、插入加号使表达式最小

在 $n$ 个数字之间插入 $m$ 个加号，使得到的 $m+1$ 个十进制整数之和最小。

<details class="exam-answer">
<summary>查看动态规划</summary>

令

$$
dp[i][k]
$$

表示前 $i$ 个数字插入 $k$ 个加号后的最小和。最后一段若从 $p+1$ 到 $i$，则

$$
dp[i][k]=\min_{k\le p<i}
\left\{dp[p][k-1]+number(p+1,i)\right\}.
$$

边界为 $dp[i][0]=number(1,i)$，答案 $dp[n][m]$。状态 $O(nm)$，每个枚举 $O(n)$ 个分割点，总时间 $O(n^2m)$。

若 `number(i,j)` 直接解析需 $O(j-i+1)$，先预处理所有子串数字：

$$
number(i,j)=10\,number(i,j-1)+A[j].
$$

预处理 $O(n^2)$，DP 仍为 $O(n^2m)$。实际实现还要考虑长整数溢出。

</details>

## 2022—2023 第一学期期末 A 卷（有图论）

### 一、复杂度填空题

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

### 二、判断题

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

### 三、强连通分量运行实例

![2022 期末 SCC 题](/images/algorithm-design/2022-exam-scc.png)

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

</details>

### 四、Dijkstra 运行实例

![2022 期末 Dijkstra 题](/images/algorithm-design/2022-exam-dijkstra.png)

<details class="exam-answer">
<summary>查看距离更新与负边问题</summary>

从 $a$ 出发，一种确定顶点顺序为

```text
a, b, e, c, g, h, f, d
```

最终最短距离：

| 顶点 | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ | $g$ | $h$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 距离 | 0 | 2 | 7 | 13 | 5 | 11 | 8 | 10 |

若把 $c\to e$ 改成 $-12$，不能继续使用 Dijkstra，因为已确定顶点的距离可能被后来负边再次降低。可改用 Bellman–Ford；该图若确认无环，也可按拓扑序松弛。

</details>

### 五、定长闭区间覆盖点集

<details class="exam-answer">
<summary>查看贪心算法</summary>

先把点坐标升序排序。取最左边尚未覆盖的点 $x_i$，放置区间

$$
[x_i,x_i+l],
$$

并跳过其中所有点，重复直到结束。

任何可行解都必须用某个区间覆盖当前最左点。把该区间右移到左端恰为 $x_i$ 不会丢失右侧覆盖能力，因此存在最优解包含贪心选择。排序 $O(n\log n)$，扫描 $O(n)$。

</details>

### 六、在 $0\cdots01\cdots1$ 中找第一个 1

<details class="exam-answer">
<summary>查看 $O(\log n)$ 与 $O(\log m)$ 算法</summary>

标准方法对单调谓词 `A[i] == 1` 二分，找第一个为真的位置，时间 $O(\log n)$。

若 1 的个数 $m\ll n$，从数组末尾向左做指数搜索：依次检查距离末尾 $1,2,4,8,\ldots$ 的位置，直到看到 0 或越过数组。第一个 1 位于最后两个检查位置之间，再二分该区间。指数搜索只走到 $O(m)$ 的后缀，时间 $O(\log m)$。

</details>

### 七、最大汇聚度生成树

<details class="exam-answer">
<summary>查看线性算法与证明</summary>

先扫描所有边，找原图中度数最大的顶点 $v$，其度为 $\Delta(G)$。把 $v$ 的所有关联边加入生成树候选，此时形成一棵以 $v$ 为中心的星形局部树，不会成环。

再从已连接顶点出发做 BFS/DFS，每遇到一个尚未进入树的顶点就加入发现它的边，直到覆盖全图。原图连通，所以一定能扩展成生成树。

所得树中 $\deg_T(v)=\Delta(G)$。任何生成树都是原图子图，任何顶点在树中的度都不可能超过它在原图中的度，因此这已经达到全局上界。时间 $O(V+E)$。

</details>

### 八、整袋糖果均分

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

## 2022 回忆版（无图论班）

这份文档只有题目概要，没有正式题面和标准答案。

### 一、连续 1 后接连续 0

<details class="exam-answer">
<summary>查看两种复杂度要求</summary>

字符串形如 $11\cdots1100\cdots0$，和就是 1 的数量，也就是第一个 0 的位置减 1。

- 在全长上二分第一个 0，时间 $O(\log n)$；
- 若 1 的个数为 $k\ll n$，从左端按位置 $1,2,4,8,\ldots$ 指数搜索到第一个 0，再在括住边界的区间二分，时间 $O(\log k)$。

</details>

### 二、安排牛的送走顺序

第 $i$ 头牛每天吃 $d_i$ 斤草，处理并送走需要 $t_i$ 天，要求总耗草最少。

<details class="exam-answer">
<summary>查看贪心顺序与交换论证</summary>

比较相邻两头牛 $i,j$。若先送 $i$，$j$ 在这 $t_i$ 天额外吃 $d_jt_i$；反序则 $i$ 额外吃 $d_it_j$。应让 $i$ 在前，当且仅当

$$
d_jt_i\le d_it_j,
$$

即

$$
\frac{d_i}{t_i}\ge\frac{d_j}{t_j}.
$$

所以按 $d_i/t_i$ 降序排列。用交叉乘积比较可避免浮点误差，排序时间 $O(n\log n)$。

</details>

### 三、按轻重关系排列哑铃

<details class="exam-answer">
<summary>查看拓扑排序建模</summary>

关系 $(a_i,b_i)$ 表示 $a_i$ 比 $b_i$ 轻，建立有向边 $a_i\to b_i$。对该 DAG 做拓扑排序，输出任一拓扑序即可；无法比较的哑铃会自然以任意合法顺序出现。

若最终不能输出全部顶点，说明关系中存在矛盾环。时间 $O(n+m)$。

</details>

### 四、戳气球

<details class="exam-answer">
<summary>查看区间动态规划</summary>

在原数组两端保留边界。令

$$
dp[l][r]
$$

表示已经戳完开区间 $(l,r)$ 内所有气球能得的最高分。枚举区间内**最后一个**被戳的气球 $k$，此时它的相邻气球必是 $l,r$：

$$
dp[l][r]=\max_{l<k<r}
\left\{dp[l][k]+dp[k][r]+a_la_ka_r\right\}.
$$

按区间长度递增计算，时间 $O(n^3)$、空间 $O(n^2)$。选择“最后一个”而不是“第一个”，才能让左右子问题互相独立。

</details>

## 2021 年旧卷（无图论）

这份 DOCX 中部分数学公式已丢失，只保留了文字。无法恢复的函数组不补造；其余三类算法题如下。

### 一、函数渐近阶排序

原文要求把两组函数按渐近增长率排序，但函数公式在 DOCX 中已经缺失，因此无法给出诚实的具体顺序。做法是比较比值极限：若

$$
\lim_{n\to\infty}\frac{f(n)}{g(n)}=0,
$$

则 $f=o(g)$；极限为正常数则二者同属 $\Theta$。

### 二、小球与筐子的匹配

只能用跨类型比较函数 `Test(ball, basket)` 判断球太大、太小或正合适。

<details class="exam-answer">
<summary>查看快速排序式匹配</summary>

任取一个球作为枢轴，用它把所有筐分成太小、正合适、太大三组并找到匹配筐；再用这个筐把所有球作同样划分。两边对应子问题规模一致，递归匹配。

随机选择枢轴时，递推与随机快速排序相同，期望时间 $O(n\log n)$，最坏可到 $O(n^2)$。原 DOCX 中第一问要求的具体复杂度公式已经丢失；若要求确定性最坏 $O(n\log n)$，需要用线性时间选择保证平衡的枢轴，而不是普通随机枢轴。

</details>

### 三、按价格增长率购买零件

<details class="exam-answer">
<summary>查看贪心策略</summary>

每推迟一个月，增长率高的零件损失更大，因此应按增长率从高到低购买。

对相邻两件 $i,j$ 做交换比较。若增长因子 $r_i>r_j>1$，让 $i$ 等待更久造成的乘数增长大于让 $j$ 等待，因此任何存在“小增长率排在大增长率前”的方案都可通过交换而不增加总花费。不断消除逆序，得到降序方案。

一个反例足以否定“最低增长率优先”：两件初价相同、增长因子分别为 2 和 10。低增长率优先的第二月总价为 $100+1000$；高增长率优先为 $100+200$。

排序时间 $O(n\log n)$。

</details>

### 四、带相邻交换的文件 diff

<details class="exam-answer">
<summary>查看动态规划递推</summary>

令 $dp[i][j]$ 表示把 $A$ 的前 $i$ 行变成 $B$ 的前 $j$ 行的最小代价。设插入、删除、交换代价分别为 $c_i,c_d,c_s$。

基本转移：

$$
dp[i][j]=\min\begin{cases}
dp[i-1][j]+c_d,\\
dp[i][j-1]+c_i,\\
dp[i-1][j-1],&A_i=B_j.
\end{cases}
$$

若

$$
A_{i-1}=B_j,qquad A_i=B_{j-1},
$$

还可做一次相邻交换：

$$
dp[i][j]\leftarrow
\min\{dp[i][j],dp[i-2][j-2]+c_s\}.
$$

边界为 $dp[i][0]=ic_d$、$dp[0][j]=jc_i$。状态数 $O(n^2)$，每状态常数转移，时间和空间均为 $O(n^2)$。从 $(n,n)$ 回溯可恢复具体编辑操作。

</details>
