---
title: "作业 1 · 命题、符号化与对偶"
description: "2024 年春季第 1 次作业，涵盖命题判断、联结词、量词顺序和对偶式"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业1.docx`。题面按原作业转写，答案保留源文件结论，并把 OCR 中容易混淆的联结词统一成课程记号。

## 一、判断题

给定命题公式 $P\to Q$，其真值与命题变量 $P,Q$ 的具体含义和真值都有关。

<details class="exam-answer">
<summary>查看答案</summary>

错误。形式语义只看 $P,Q$ 的真值，不看自然语言内容。只要 $P=0$，$P\to Q$ 就为真。

</details>

## 二、单项选择题

### 1. 判断命题

下列语句中是命题的是：

A. $3x-13=0$

B. 周树人是鲁迅吗？

C. 如果 $1+2>3$，则北航流量免费送 100G。

D. 希望早点放假。

<details class="exam-answer">
<summary>查看答案</summary>

选 C。它是具有确定真值的陈述句；其前件为假，所以整个蕴含式为真。A 含自由变量，B 是疑问句，D 是祈使或愿望句。

</details>

### 2. 省略括号

原作业给出一个由 $p,q,r,s$ 与多个联结词构成的全括号公式，问按照联结词优先级可省略多少对括号。

> 源文件中的公式在 DOCX 转 PDF 后部分联结词已经丢字，无法可靠恢复完整符号串；这里不擅自补写。

<details class="exam-answer">
<summary>查看源答案</summary>

选 5。源解析说明：只有从外向内第三层和最内层括号不能省略。

</details>

### 3. 必要条件

“上班保持全勤是获得奖金的必要条件。”记“上班保持全勤”为 $p$，“获得奖金”为 $q$，写出命题公式。

<details class="exam-answer">
<summary>查看答案</summary>

$$
q\to p.
$$

“$p$ 是 $q$ 的必要条件”意味着有 $q$ 就必须有 $p$。

</details>

### 4. 量词顺序

从原题四个量词公式及其自然语言解释中选出正确对应。

<details class="exam-answer">
<summary>查看答案</summary>

选 C：

$$
\forall x\exists y(x+y=1)
$$

表示“对任何 $x$，均存在 $y$ 使 $x+y=1$”。量词应从左向右读，交换量词次序通常会改变含义。

</details>

### 5. 学习与成绩

设 $R(x)$ 表示“$x$ 好好学习离散数学”，$Q(x)$ 表示“$x$ 取得好成绩”。符号化：

“每个认真学习离散数学的人都能取得好成绩，所以如果没有人取得好成绩，就是没有人好好学习离散数学。”

<details class="exam-answer">
<summary>查看答案</summary>

$$
\bigl(\forall x(R(x)\to Q(x))\bigr)
\to
\bigl(\neg\exists xQ(x)\to\neg\exists xR(x)\bigr).
$$

源答案特别提醒，$\forall x(R(x)\to Q(x))$ 与 $\forall xR(x)\to\forall xQ(x)$ 不等价。

</details>

## 三、综合题

### 1. 哪些是命题

判断下列语句是否为命题；若是，给出真值。

1. $2x-3=0$；
2. 前进！
3. 如果 $8+7>20$，则三角形有四条边；
4. 请勿吸烟！
5. 你喜欢鲁迅的作品吗？
6. 如果太阳从西方升起，你就可以长生不老；
7. 如果太阳从东方升起，你就可以长生不老。

<details class="exam-answer">
<summary>查看答案</summary>

第 1、2、4、5 句不是命题。第 3、6、7 句是命题，真值依次为 $1,1,0$。

</details>

### 2. 判断真假

1. 如果 2023 年属于 21 世纪，则 $9^2$ 是奇数；
2. 84 并非偶数；
3. $5>7$ 或者 $5>0$；
4. 如果 $x$ 为奇数，则 $x^2$ 为奇数；
5. 2023 年是闰年。

<details class="exam-answer">
<summary>查看答案</summary>

依次为真、假、真、真、假。

</details>

### 3. 合式公式

原题给出两个符号串，要求判断它们是否为指定命题逻辑语言中的合式公式。

> 第一个符号串可辨认；第二个符号串中的两个非标准符号在源答案中被指出不属于语言的联结词。由于转换后字符形状失真，这里保留判断边界，不重造符号串。

<details class="exam-answer">
<summary>查看答案</summary>

第一个是合式公式，第二个不是。源答案理由是第二式使用了该语言中未定义的两个联结词。

</details>

### 4. 写对偶式

求下列公式的对偶式：

$$
\neg(Q\lor R)\lor(\neg Q\land\neg R),
$$

$$
(P\land(Q\land R))\lor((P\land Q)\land R)\lor0.
$$

<details class="exam-answer">
<summary>查看答案</summary>

依次为

$$
\neg(Q\land R)\land(\neg Q\lor\neg R),
$$

$$
(P\lor(Q\lor R))\land((P\lor Q)\lor R)\land1.
$$

</details>

### 5. 再求一个对偶式

求

$$
(P\land Q)\lor\bigl(\neg P\lor(\neg P\lor1)\bigr)
$$

的对偶式。

<details class="exam-answer">
<summary>查看答案</summary>

$$
(P\lor Q)\land\bigl(\neg P\land(\neg P\land0)\bigr).
$$

</details>

### 6. 谓词逻辑符号化

不用代数表达式直接充当原子公式，符号化：“有些实数小于其平方，但并不是每个实数都小于其平方。”

<details class="exam-answer">
<summary>查看答案</summary>

令 $R(x)$ 表示“$x$ 是实数”，$L(x)$ 表示“$x$ 小于自身平方”，则可写为

$$
\exists x(R(x)\land L(x))
\land
\neg\forall x(R(x)\to L(x)).
$$

若个体域已经限定为实数，可简化为

$$
\exists xL(x)\land\neg\forall xL(x).
$$

</details>
