---
title: "作业 9 · Skolem 范式与模型"
description: "2024 年春季第 9 次作业，涵盖前束范式、Skolem 标准形、模型判定和可判定性"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业9.docx`。源文件中的公式按题面与作答交叉核对后转写。

## 一、判断题

判断下列说法：

1. 每个谓词公式都等值于某个前束范式；
2. 矩阵是合取范式且前缀不含存在量词的公式一定是 Skolem 标准形；
3. 在二元素论域上，若二元关系 $Q$ 对称，则模型满足 $\forall x\forall y(Q(x,y)\to Q(y,x))$；
4. $\forall x\forall y(P(x)\to Q(x,y))$ 是 $\forall xP(x)\to\exists yQ(x,y)$ 的前束范式；
5. $\exists x\exists y\forall z(P(x,y)\lor\neg Q(z)\lor R(x))$ 是源题给定公式的一个前束范式。

<details class="exam-answer">
<summary>查看答案</summary>

依次为正确、错误、正确、错误、正确。

第 2 句还缺少“由原公式经标准 Skolem 化得到”等条件；第 4 句错误的关键是量词极性和依赖关系在移入时发生了改变。

</details>

## 二、单项选择题

### 1. 识别前束范式

从四个候选式中选出前束范式。

<details class="exam-answer">
<summary>查看答案</summary>

选 A。判据是所有量词都集中在公式最前面，后面的矩阵不再含量词。

</details>

### 2. 自由与约束变元

下列说法中错误的是哪一项？

<details class="exam-answer">
<summary>查看答案</summary>

选 B：“一个变元只能是自由变元或约束变元”。同一个变元符号在同一公式的不同位置可以既有自由出现，也有约束出现。

</details>

### 3. 哪个候选不是前束范式

围绕公式 $\exists xF(y,x)\to\forall zG(z)$，从候选改写中找出不是其前束范式者。

<details class="exam-answer">
<summary>查看答案</summary>

选 C。源解析按量词移入时的极性变化逐项核对。

</details>

### 4. 模型判定

论域 $D=\{a,b\}$，二元谓词 $P$ 只在 $(a,a),(b,b)$ 上为真。下列哪个句子在该模型中为假？

<details class="exam-answer">
<summary>查看答案</summary>

选 B：

$$
\exists x\forall yP(x,y).
$$

无论选 $a$ 还是 $b$，都不能与论域中两个 $y$ 同时构成对角有序对。

</details>

### 5. 再识别一个前束范式

从候选中选出前束范式。

<details class="exam-answer">
<summary>查看答案</summary>

选 A：

$$
\forall x\forall y\exists z(B(x,y)\to A(z)).
$$

</details>

### 6. 选择普遍有效式

原题列出四个带存在量词的候选式。

<details class="exam-answer">
<summary>查看源答案</summary>

选 A。源答案对应的有效模式是：只要 $P$ 或 $Q$ 至少一方有见证，就能得到 $P\lor Q$ 的存在见证。

</details>

### 7. 元逻辑说法

从关于一致性、前提集与语义推论的说法中找出错误项。

<details class="exam-answer">
<summary>查看答案</summary>

选 A：把空前提集说成“不一致”。空集有模型，因此是一致、可满足的。

</details>

## 三、综合题

### 1. 化为 Skolem 标准形

分别处理下列四式：

1. $\neg\forall x\bigl((P(x)\to\forall y(P(y)\to P(f(x,y))))\land\neg\forall y(Q(x,y)\to P(y))\bigr)$；
2. $\forall x\exists y(P(x,y)\to Q(y,x))\land(Q(y,x)\to R(x,y))$；
3. $\forall xP(x,y)\to(Q(x)\to\neg\exists xR(y,x))$；
4. $\forall xP(x,y)\oplus\exists yQ(x,y)$。

<details class="exam-answer">
<summary>查看源答案</summary>

源答案给出的一组 Skolem 形式为：

$$
\forall z\bigl(P(a)\land(P(b)\lor\neg Q(a,z)\lor P(z))
\land(\neg P(f(a,b))\lor\neg Q(a,z)\lor P(z))\bigr),
$$

$$
\forall z\bigl((\neg P(z,f(z))\lor Q(f(z),z))
\land(\neg Q(y,x)\lor R(x,y))\bigr),
$$

$$
\forall u(\neg P(a,y)\lor\neg Q(x)\lor\neg R(y,u)),
$$

$$
\forall z\forall w
\bigl((P(z,y)\lor Q(x,f(z)))
\land(\neg P(g(z),y)\lor\neg Q(x,w))\bigr).
$$

Skolem 形式不唯一：约束变量名、新常元和新函数名可以不同，但依赖的全称变元不能错。

</details>

### 2. 去掉存在量词后保持永真性

设 $A'$ 是前束公式 $A$ 的一个只剩全称量词的 Skolem 形式。证明 $A$ 永真当且仅当 $A'$ 永真。

<details class="exam-answer">
<summary>查看源答案思路</summary>

源答案通过否定把永真性转成不可满足性，再使用 Skolem 化保持可满足性的定理。即

$$
\operatorname{Valid}(A)
\iff\operatorname{Unsat}(\neg A)
\iff\operatorname{Unsat}(\operatorname{Sk}(\neg A)).
$$

最后再取否定，得到相应只含全称量词形式的永真性。

</details>

### 3. 在给定模型中求真值

论域 $D=\{a,b\}$，$P(x,y)$ 在且仅在 $x\ne y$ 时为真。求

$$
\forall x\exists yP(x,y),\qquad
\exists y\forall xP(x,y)
$$

的真值。

<details class="exam-answer">
<summary>查看答案</summary>

第一式为真：对 $a$ 选 $b$，对 $b$ 选 $a$。第二式为假：任何固定 $y$ 都会在 $x=y$ 时使 $P(x,y)$ 为假。

</details>
