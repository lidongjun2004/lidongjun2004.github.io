---
title: 第 5 次作业 · 树与哈夫曼编码
description: 第五次作业的树客观题，以及遍历、表达式树、词频和哈夫曼提交。
date: 2026-08-27
tags: ["作业"]
---

## 选择题

### 1. 度为 4 的树中，度为 4、3、2、1 的结点数分别为 20、10、1、10，叶结点有多少？

<details class="exam-answer"><summary>展开答案</summary>

82，对应 B。由边数等于各结点度数之和，又等于结点总数减一，可解得叶结点数。

</details>

### 2. 满二叉树有 $m$ 条树枝、$n$ 个结点、深度为 $h$，三者关系是什么？

<details class="exam-answer"><summary>展开答案</summary>

$m=n-1$，$n=2^h-1$。源答案对应 D。

</details>

### 3. 二叉树前序与后序序列次序恰好相反，这棵树有什么特点？

<details class="exam-answer"><summary>展开答案</summary>

每个分支结点的度都为 1，对应 D。

</details>

### 4. 二叉搜索树的查找效率主要与什么有关？

<details class="exam-answer"><summary>展开答案</summary>

树的深度，对应 A。

</details>

### 5. 森林 $F$ 转为二叉树 $T$ 后，$F$ 的叶结点数等于 $T$ 中哪类结点数？

<details class="exam-answer"><summary>展开答案</summary>

左孩子指针为空的结点数，对应 C。

</details>

### 6. 一棵普通二叉树按层次存入 `A[1..n]`，第 $i$ 个结点的左孩子位置能否由 $2i$ 确定？

<details class="exam-answer"><summary>展开答案</summary>

无法确定，对应 D。只有完全二叉树按层存储时才直接使用 $2i$。

</details>

### 7. 中缀表达式 `A+B*C-D/E` 的前缀形式是什么？

<details class="exam-answer"><summary>展开答案</summary>

`- + A * B C / D E`，对应 D。

</details>

### 8. 题给五个字符编码方案中，哪组不是前缀编码？

<details class="exam-answer"><summary>展开答案</summary>

`11,10,001,101,0001`，对应 B；`10` 是 `101` 的前缀。

</details>

### 9. 权值为 `3,9,6,2,5` 的哈夫曼树，带权路径长度是多少？

<details class="exam-answer"><summary>展开答案</summary>

55，对应 B。

</details>

### 10. 有 11 个叶结点的哈夫曼树共有多少个结点？

<details class="exam-answer"><summary>展开答案</summary>

21，对应 B。严格二叉树满足总结点数为 $2n_0-1$。

</details>

## 填空题

### 1. 完全二叉树按层编号，结点 $i$ 的双亲、左右孩子编号是什么？

<details class="exam-answer"><summary>展开答案</summary>

$\lfloor i/2\rfloor$、$2i$、$2i+1$，编号存在时成立。

</details>

### 2. 度为 $k$ 的树，第 $i$ 层最多有多少个结点？

<details class="exam-answer"><summary>展开答案</summary>

$k^{i-1}$。

</details>

### 3. 含 2047 个结点的满二叉树有多少叶结点？

<details class="exam-answer"><summary>展开答案</summary>

1024。

</details>

### 4. 完全二叉树按层存为 `A,B,C,D,E,F,G,H,I,J`，后序遍历是什么？

<details class="exam-answer"><summary>展开答案</summary>

`HIDJEBFGCA`。

</details>

### 5. 含 $n$ 个结点的二叉链表有多少指针域、有效孩子链接和空指针？

<details class="exam-answer"><summary>展开答案</summary>

共 $2n$ 个指针域，其中 $n-1$ 个链接孩子，$n+1$ 个为空。

</details>

### 6. 前序为 `ABDCEFG`、中序为 `DBCAFEG`，后序是什么？

<details class="exam-answer"><summary>展开答案</summary>

`DCBFGEA`。

</details>

### 7. 顺序存储二叉树中，编号 $i$、$j$ 结点在同层的条件是什么？

<details class="exam-answer"><summary>展开答案</summary>

$\lfloor\log_2 i\rfloor=\lfloor\log_2 j\rfloor$。

</details>

### 8. $A,B,C,D$ 分别为 2、3、4、5，两个题给前缀表达式的值是多少？

<details class="exam-answer"><summary>展开答案</summary>

`+-*ABCD` 的值为 7；`-*A+BCD` 的值为 9。

</details>

### 9. 依次插入 `54,28,16,34,73,62,95,60,26,43` 建 BST，查找 62 比较几次？

<details class="exam-answer"><summary>展开答案</summary>

3 次：依次比较 54、73、62。

</details>

### 10. 叶权 `4,5,6,7,8` 构造哈夫曼树，带权路径长度是多少？

<details class="exam-answer"><summary>展开答案</summary>

69。

</details>

## 编程题提交

### 树叶结点遍历（树-基础题）

<details class="exam-answer"><summary>查看提交实现</summary>

提交建立二叉树并递归遍历；遇到左右孩子都为空的结点时输出，从而只访问叶结点。

</details>

### 计算器（表达式树实现）

<details class="exam-answer"><summary>查看提交实现</summary>

提交把操作数放在叶结点、运算符放在分支结点，递归求左右子表达式并在根处计算。它与上次后缀栈版本解决同一类问题，但保存的是表达式结构。

</details>

### 词频统计（树实现）

<details class="exam-answer"><summary>查看提交实现</summary>

提交以单词为关键字建立二叉搜索树；相同单词增加计数，小于当前结点进入左子树，大于则进入右子树。中序遍历可按字典序输出。

</details>

### 哈夫曼实验

<details class="exam-answer"><summary>查看提交实现</summary>

`lab_tree2` 保存 `huffman2student.c`、输入和输出。提交统计字符频率、构造哈夫曼树并生成编码。源目录只有学生版实现，不另称为教师标准答案。

</details>

### 服务优化

<details class="exam-answer"><summary>查看提交实现</summary>

提交用树形或优先关系组织服务数据并计算优化结果。独立题面未保存，无法确认全部业务约束，故不从代码反推原题。

</details>
