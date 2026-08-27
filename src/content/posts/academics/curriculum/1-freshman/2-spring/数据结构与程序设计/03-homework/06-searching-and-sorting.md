---
title: 第 6 次作业 · 查找与排序
description: 第六次作业的查找排序客观题，以及查词、排座位和整数排序提交。
date: 2026-08-27
tags: ["作业"]
---

## 选择题

### 1. 对 $N$ 个元素等概率顺序查找，平均查找长度是多少？

<details class="exam-answer"><summary>展开答案</summary>

$(N+1)/2$，对应 B。

</details>

### 2. 长度 16 的有序顺序表中，折半查找一个不存在元素，最多比较几次？

<details class="exam-answer"><summary>展开答案</summary>

5 次，对应 C。

</details>

### 3. 长度 9 的有序表中等概率成功折半查找，ASL 是多少？

<details class="exam-answer"><summary>展开答案</summary>

$25/9$，对应 C。

</details>

### 4. 数组依次存 `2,4,...,20`，折半查找 12 时比较的下标次序是什么？

<details class="exam-answer"><summary>展开答案</summary>

按源题下标约定为 `4,7,5`，对应 C。

</details>

### 5. 关于 $m$ 阶 B-树，哪些说法正确？

<details class="exam-answer"><summary>展开答案</summary>

②每个结点至多有 $m-1$ 个关键字；③所有叶结点在同一层，对应 B。

</details>

### 6. 题给关键字按 $H(key)=key\bmod13$ 链地址散列，地址 1 的链有几个记录？

<details class="exam-answer"><summary>展开答案</summary>

4 个，对应 D。

</details>

### 7. 大顶堆 `25,13,10,12,9` 末尾插入 18，向上调整比较几次？

<details class="exam-answer"><summary>展开答案</summary>

2 次，对应 B。

</details>

### 8. 哪种排序一趟结束后不一定把某个元素放到最终位置？

<details class="exam-answer"><summary>展开答案</summary>

归并排序，对应 C。

</details>

### 9. `84,47,25,15,21` 的过程依次变为 `15,47,25,84,21`、`15,21,25,84,47`、最终有序，采用什么排序？

<details class="exam-answer"><summary>展开答案</summary>

选择排序，对应 A。

</details>

### 10. `11,12,13,7,8,9,23,4,5` 是第二趟后的结果，只可能是哪种排序？

<details class="exam-answer"><summary>展开答案</summary>

插入排序，对应 B。

</details>

### 11. 对 `49,38,65,97,76,13,27,50` 排序，哪个序列是选择排序第一趟结果？

<details class="exam-answer"><summary>展开答案</summary>

`13,38,65,97,76,49,27,50`，对应 A。

</details>

### 12. 快速排序宜采用什么存储方式？

<details class="exam-answer"><summary>展开答案</summary>

顺序存储，对应 A。

</details>

### 13. 快速排序平均和最坏时间复杂度分别是什么？

<details class="exam-answer"><summary>展开答案</summary>

平均 $O(n\log n)$，最坏 $O(n^2)$。

</details>

### 14. 题给序列以首元素 12 为枢轴，按教材算法第一趟划分后的结果是什么？

<details class="exam-answer"><summary>展开答案</summary>

`4,2,6,10,8,12,28,30,20,16,18`，对应 C。

</details>

### 15. 哪个序列不可能是快速排序两次确定分界元素后的结果？

<details class="exam-answer"><summary>展开答案</summary>

`3,2,5,4,7,6,9`，对应 C。

</details>

## 填空题

### 1. 折半插入排序把第 7 个元素 47 插入已排序前缀，确定位置需比较几次？

<details class="exam-answer"><summary>展开答案</summary>

3 次。

</details>

### 2. 有序表 `k1..k99` 分别查找全部 99 个元素，至少哪个元素会被比较 99 次？

<details class="exam-answer"><summary>展开答案</summary>

`k50`，它是第一次比较的中间元素。

</details>

### 3. 长度 12 的折半查找判定树，根的右孩子位置是什么？

<details class="exam-answer"><summary>展开答案</summary>

源答案接受 8 或 9，取决于偶数区间中点采用向下还是向上取整的约定。

</details>

### 4. `K=(18,25,63,50,42,32,9,45)`，$H(k)=k\bmod9$，与 18 冲突的元素有几个？

<details class="exam-answer"><summary>展开答案</summary>

3 个。

</details>

### 5. $n$ 个元素初始已递增，直接插入排序共比较多少次？

<details class="exam-answer"><summary>展开答案</summary>

$n-1$ 次。

</details>

## 编程题提交

### 单词查找（查找-基本题）

<details class="exam-answer"><summary>查看提交实现</summary>

源目录保存 `dictionary3000.txt`。提交读取词典并按题设关键字查找；其核心是把查找结果与未找到情况区分开。

</details>

### 排座位（简）

<details class="exam-answer"><summary>查看提交实现</summary>

提交读取座位相关记录，按比较规则排序并安排输出。独立题面没有保存，不能确认全部冲突和优先级约束。

</details>

### 整数排序（排序-基本题）

<details class="exam-answer"><summary>查看提交实现</summary>

提交读取整数序列，完成递增排序并输出。它是排序算法基本实现题，源中只保存本人代码。

</details>
