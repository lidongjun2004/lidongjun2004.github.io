---
title: "堆排序与比较排序下界"
description: "从完全二叉树、维护堆性质到堆排序，并用决策树证明 Ω(n log n) 下界"
date: 2026-08-23
tags: ["算法设计与分析", "算法"]
---

堆是一种用数组存储的完全二叉树。它既能支持优先队列，也给出一个最坏 $O(n\log n)$、额外空间 $O(1)$ 的比较排序算法。

## 1. 数组如何表示完全二叉树

采用从 1 开始的下标：

$$
\operatorname{parent}(i)=\left\lfloor\frac i2\right\rfloor,
\quad
\operatorname{left}(i)=2i,
\quad
\operatorname{right}(i)=2i+1.
$$

完全二叉树除最后一层外全部填满，最后一层从左到右填，因此不需要保存指针。

## 2. 最大堆性质

最大堆要求每个非根结点满足

$$
A[\operatorname{parent}(i)]\ge A[i].
$$

它只保证父结点不小于孩子，不保证同层有序。根结点一定是全局最大值。

最小堆把不等号反过来，根结点是最小值。

## 3. Max-Heapify

如果结点 $i$ 的两棵子树已经是最大堆，但 $A[i]$ 可能破坏堆性质，就把它与较大的孩子交换并继续向下：

```text
MaxHeapify(A, i, heapSize):
    largest = i
    if left(i) <= heapSize and A[left(i)] > A[largest]:
        largest = left(i)
    if right(i) <= heapSize and A[right(i)] > A[largest]:
        largest = right(i)
    if largest != i:
        swap A[i], A[largest]
        MaxHeapify(A, largest, heapSize)
```

每次下降一层，复杂度 $O(\log n)$。

## 4. 建堆为何是 $O(n)$

从最后一个非叶结点 $\lfloor n/2\rfloor$ 开始，自底向上调用 Heapify：

```text
for i = floor(n / 2) down to 1:
    MaxHeapify(A, i, n)
```

粗略写成 $n$ 次 $O(\log n)$ 会得到 $O(n\log n)$，但这不紧。大多数结点靠近叶子，下降不了几层。

高度至少为 $h$ 的结点最多约 $n/2^{h+1}$ 个，因此

$$
\sum_{h=0}^{\log n}\frac{n}{2^{h+1}}O(h)=O(n).
$$

## 5. 堆排序

建好最大堆后：

1. 根是当前最大元素；
2. 把根与堆尾交换，最大元素就位；
3. 堆大小减 1；
4. 对新根调用 Max-Heapify。

```text
BuildMaxHeap(A)
for end = n down to 2:
    swap A[1], A[end]
    heapSize -= 1
    MaxHeapify(A, 1, heapSize)
```

建堆 $O(n)$，之后执行 $n-1$ 次 $O(\log n)$ 调整：

$$
T(n)=O(n)+O(n\log n)=O(n\log n).
$$

最好、平均、最坏均为 $\Theta(n\log n)$。

## 6. 优先队列操作

最大堆可支持：

- 查看最大值：$O(1)$；
- 删除最大值：$O(\log n)$；
- 插入：先放堆尾，再向上调整，$O(\log n)$；
- 增大关键字：向上调整，$O(\log n)$。

Dijkstra、Prim 等算法常使用最小堆版本。

## 7. 比较排序的决策树

任何只通过两两比较获得顺序信息的排序算法，都可以表示为一棵二叉决策树：

- 内部结点是一条比较；
- 两条分支对应比较结果；
- 叶结点对应一种最终排列。

对于互不相同的 $n$ 个元素，可能输入排列有 $n!$ 种。正确算法必须能区分它们，因此决策树至少有 $n!$ 个叶子。

高度为 $h$ 的二叉树最多有 $2^h$ 个叶子，所以

$$
2^h\ge n!,
\qquad
h\ge\log_2(n!).
$$

由 Stirling 公式或简单估计可得

$$
\log(n!)=\Theta(n\log n).
$$

因此任何比较排序最坏情况下都需要

$$
\Omega(n\log n)
$$

次比较。

## 8. 下界不适用于所有排序

计数排序、基数排序和桶排序利用了关键字取值范围或位结构，不只依赖比较，所以可以突破 $n\log n$。代价是额外假设和空间。

“排序下界是 $\Omega(n\log n)$”必须完整说成：**基于比较的通用排序，在最坏情况下的比较次数下界。**

## 9. 特性总结

- 最坏时间 $\Theta(n\log n)$；
- 建堆时间 $\Theta(n)$；
- 数组内原地排序，额外空间 $O(1)$；
- 通常不稳定；
- 缓存局部性通常不如快速排序。
