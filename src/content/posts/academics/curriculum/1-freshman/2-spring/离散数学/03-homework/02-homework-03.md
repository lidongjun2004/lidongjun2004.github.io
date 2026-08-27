---
title: "作业 3 · 重言式、等值式与替换"
description: "2024 年春季第 3 次作业，涵盖语义推论、公式分类、等值验证和替换程序"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业3.docx`。答案来自同一文件中的作答。

## 一、单项选择题

### 1. 哪个推论不成立

A. $P\lor Q,\ P\to R,\ Q\to S\models R\lor S$

B. $P\to Q,\ Q\to R\models P\to R$

C. $\neg R,\ Q\to R\models\neg Q$

D. $P,\ Q\to(R\to P)\models R\to Q$

<details class="exam-answer">
<summary>查看答案</summary>

选 D。取 $P=1,Q=0,R=1$，两个前提都真，而 $R\to Q$ 为假。

</details>

### 2. 哪个等值式不成立

A. $\neg(Q\land R)\equiv\neg Q\lor\neg R$

B. $(Q\to R)\land\neg R\equiv\neg Q$

C. 命题逻辑分配律

D. $((P\to Q)\land P)\to Q\equiv1$

<details class="exam-answer">
<summary>查看答案</summary>

选 B。取 $Q=0,R=1$，左侧为假，右侧为真。

</details>

### 3. 选择重言式

原题给出四个候选公式，选择重言式。

<details class="exam-answer">
<summary>查看答案</summary>

选 B：

$$
(\neg p\lor q)\lor p.
$$

它等值于 $(\neg p\lor p)\lor q=1$。

</details>

## 二、综合题

### 1. 公式分类

判断下列公式是重言式、矛盾式还是可满足但非重言式：

1. $(p\to r)\to((q\to r)\to((p\lor q)\to r))$；
2. $(p\to\neg p)\to\neg p$；
3. $(p\to q)\to((p\to\neg q)\to p)$；
4. $(p\to(q\to r))\to((p\to q)\to(p\to r))$；
5. $((p\land q)\land(p\to r)\land(q\to r))\to r$；
6. $\neg p\land\neg(p\to q)$；
7. $(p\to q)\to((p\to\neg q)\to\neg p)$。

<details class="exam-answer">
<summary>查看答案</summary>

第 1、2、4、5、7 式是重言式；第 6 式是矛盾式；第 3 式是可满足式但不是重言式。

</details>

### 2. 用真值表验证等值式

验证：

$$
p\land(q\oplus r)\equiv(p\land q)\oplus(p\land r),
$$

$$
p\oplus1\equiv\neg p,
$$

$$
p\lor(p\land q)\equiv p,
$$

$$
p\oplus q\equiv\neg(p\leftrightarrow q).
$$

<details class="exam-answer">
<summary>查看答案</summary>

源答案逐行列出真值表，四组公式的左右两列都完全相同，因此四个等值式均成立。

</details>

### 3. 证明重言式

用赋值分类证明

$$
(P\to Q)\to(P\to(P\land Q))
$$

是重言式。

<details class="exam-answer">
<summary>查看答案</summary>

若 $P\to Q=0$，整个外层蕴含式为真。若 $P\to Q=1$：当 $P=0$ 时，$P\to(P\land Q)=1$；当 $P=1$ 时必有 $Q=1$，于是 $P\land Q=1$，后件仍为真。因此任何赋值下公式都为真。

</details>

### 4. 程序输出真值表

输出

$$
Q\to(R\to(Q\land R))
$$

的真值表。

<details class="exam-answer">
<summary>查看源提交</summary>

源提交把公式存入 `s`，调用 `l1.truthtable2(s)`。

</details>

### 5. 用程序验证替换

取

$$
s=Q\to(R\to R),\quad r_1=R\to R,\quad r_2=R\to(Q\to R),
$$

用程序验证相应替换关系。

<details class="exam-answer">
<summary>查看源提交</summary>

源提交调用 `l1.issubstitution2(s,r1,r2)`，返回替换关系成立。

</details>
