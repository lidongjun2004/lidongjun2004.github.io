---
title: "2020—2021 学年第一学期补考试卷（有图论）"
description: "覆盖复杂度、P 与 NP、BFS、Prim、二分、子序列和动态规划，题目均附折叠解析"
date: 2026-08-24
tags: ["真题"]
---


这一部分来自 2021 年 3 月 8 日补考原卷及一页课程答案。选择、判断题有原答案；算法题没有随卷答案，下面给出推导。

## 一、复杂度选择题

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

## 二、复杂度类别判断题

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

## 三、BFS 运行实例

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

## 四、Prim 运行实例

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

## 五、波浪序列最小值

给定数组 $A[1..n]$，其中 $A[1]=A[n]=0$。序列从 0 递增到最大值，随后递减到最小值，最后重新递增到 0，例如

```text
[0, 2, 5, 8, 4, 3, 1, -3, -5, -2, 0]
```

请设计算法求出最小值并分析时间复杂度。$O(\log n)$ 的算法可得满分，复杂度更高的算法也可得分。

<details class="exam-answer">
<summary>查看二分算法</summary>

原卷只写了“递增—递减—递增”，没有说明相邻元素能否相等，也没有另行声明内部最小值必为负。下面的 $O(\log n)$ 算法按示例所表达的意图，作如下解释：**以下按严格单调理解**，并假设内部谷值小于 0。若允许中途出现平台，仅靠当前元素与相邻元素的大小关系可能无法判断谷底在哪一侧；缺少进一步条件时，可线性扫描求最小值，时间 $O(n)$。

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

每轮把区间减半，时间 $O(\log n)$、空间 $O(1)$。这里的严格单调和负谷值是解法采用的解释，不是原卷明写的额外条件。

</details>

## 六、子序列判定

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

## 七、插入加号使表达式最小

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
