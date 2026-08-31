---
title: "第 2 次作业：反演、对偶与逻辑函数化简"
description: "布尔代数中的反演定理、对偶式、自对偶函数与公式化简。"
date: 2026-08-27
tags: ["作业"]
---

本篇对应 `2025作业文件/√作业2.docx`。原文里的上划线层级容易在纯文本中丢失，因此公式直接使用源文档中的局部图，不重新猜写。

## 1.7 用反演定理求反函数

![1.7 原式](/images/academics/digital-electronics/homework/hw-02-figure-01.png)

## 1.8 写出对偶式

![1.8 原式](/images/academics/digital-electronics/homework/hw-02-figure-02.png)

## 1.9 证明自对偶

![1.9 原式](/images/academics/digital-electronics/homework/hw-02-figure-03.png)

## 1.11 化为最简与或式

![1.11 原式](/images/academics/digital-electronics/homework/hw-02-figure-04.png)

<details class="exam-answer">
<summary>查看我当时作答中的可核对部分</summary>

源目录保留了我当时一页带批改痕迹的手写作答。可清楚核对的 1.7 结果是：若

$$
F=A\overline B+B\overline C+C(\overline A+D),
$$

则

$$
\overline F=(\overline A+B)(\overline B+C)
(\overline C+A\overline D).
$$

这里不是“看到上划线就逐个取反”，而是每进入一层取反，都同时交换与、或运算。

我当时在 1.9 中采用定义验证：把全部变量取反并对函数整体取反，整理后仍回到原函数，因此它是自对偶函数。

1.8 与 1.11 的手写层叠上划线无法从扫描件中无歧义转写；我保留精确题面，不把不确定的横线层级补成另一个公式。

</details>
