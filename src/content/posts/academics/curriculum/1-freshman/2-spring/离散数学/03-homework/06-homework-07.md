---
title: "作业 7 · 量词等价、推论与应用"
description: "2024 年春季第 7 次作业，涵盖量词等价、命题演算、语义推论和应用建模"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业7.docx`。该文件有多处公式在导出时丢失量词或联结词，能由题面与作答双向核对的内容按原题转写；不能唯一恢复的选择项明确保留边界。

## 一、选择与改错

### 1. 量词移入公式

设 $x$ 不是 $R$ 的自由变元，从四个量词移入等值式中选出错误项。

<details class="exam-answer">
<summary>查看源答案</summary>

选 A。源答案给出二元素论域反例，说明

$$
\forall xQ(x)\to R
$$

不能等价改写成 $\forall x(Q(x)\to R)$；正确的移入形式涉及 $\exists xQ(x)\to R$。

</details>

### 2. 重言式与永真式

原题要求从四个谓词公式中找出“重言式”，并区分“仅因量词语义而普遍有效”和“由命题联结词结构保证为真”。

<details class="exam-answer">
<summary>查看源答案</summary>

选 C。源解析指出，C 去掉谓词内部结构后仍具有命题重言式 $R\land Q\to Q\land R$ 的骨架；其余候选即使普遍有效，也不是此处定义下的重言式。

</details>

### 3. 哪些公式永真

原题列出四个带量词的候选公式，问哪些是永真式。

<details class="exam-answer">
<summary>查看源答案与边界</summary>

源文件结论为第 1、2、3 式均为永真式。候选公式在 DOCX 导出后多个量词符号丢失，无法从现存文件唯一还原，因此不在这里重造公式。

</details>

### 4. 等值演算从哪一步出错

对

$$
\forall x(A(x)\to B(x))
$$

逐步使用消去蕴含、德摩根律和量词否定，判断从哪一步开始错误。

<details class="exam-answer">
<summary>查看答案</summary>

第 4 步开始错误。不能把

$$
\neg\exists x(A(x)\land\neg B(x))
$$

直接分配成两个分别量化的公式合取；量词通常不对含同一变元的合取、析取任意分配。

</details>

### 5. 否定量词推导改错

原题从 $\forall x(G(x)\lor H(x))$ 出发，连续加否定并做量词变形，问哪一步开始错误。

<details class="exam-answer">
<summary>查看答案</summary>

从第 3 步到第 4 步错误。$\neg(A\land B)$ 应变为 $\neg A\lor\neg B$，不能把未否定的合取拆成分别量化的合取后再整体取反。

</details>

## 二、综合题

### 1. 等值演算

证明

$$
\neg(P\lor(\neg P\land Q))\equiv\neg P\land\neg Q.
$$

<details class="exam-answer">
<summary>查看答案</summary>

$$
\begin{aligned}
\neg(P\lor(\neg P\land Q))
&\equiv\neg P\land\neg(\neg P\land Q)\\
&\equiv\neg P\land(P\lor\neg Q)\\
&\equiv(\neg P\land P)\lor(\neg P\land\neg Q)\\
&\equiv\neg P\land\neg Q.
\end{aligned}
$$

</details>

### 2. 范式存在性

证明任何命题公式都等值于某个析取范式，也等值于某个合取范式。

<details class="exam-answer">
<summary>查看答案</summary>

先消去 $\to,\leftrightarrow$，只保留 $\neg,\land,\lor$；再用双重否定和德摩根律把否定号推到命题变量前；最后反复用分配律，分别得到“合取项的析取”与“析取项的合取”。每步都保持逻辑等值，且公式有限，所以过程终止。

</details>

### 3. 语义推论

证明

$$
A\to B,\quad C\to D,\quad A\lor C\models B\lor D.
$$

<details class="exam-answer">
<summary>查看答案</summary>

任取使三个前提为真的赋值。$A\lor C$ 为真，所以 $A,C$ 至少一个真。若 $A$ 真，由 $A\to B$ 得 $B$ 真；若 $C$ 真，由 $C\to D$ 得 $D$ 真。两种情况都使 $B\lor D$ 真。

</details>

### 4. 超算队伍选择

甲、乙、丙、丁、戊五人组队，条件是：甲去则乙去；丁、戊至少一人去；乙、丙恰有一人去；丙、丁同去或同不去；戊去则甲、乙都去。求全部方案。

<details class="exam-answer">
<summary>查看答案</summary>

令 $P,Q,R,S,T$ 分别表示五人入选。五个条件合取后化简为两个极小项：

$$
(\neg P\land\neg Q\land R\land S\land\neg T)
\lor
(P\land Q\land\neg R\land\neg S\land T).
$$

所以只有两种方案：丙、丁；或甲、乙、戊。

</details>

### 5. 主范式

求源题所给三变量公式的主析取范式和主合取范式。

> 原 DOCX 中连接两大子式的联结词已丢失，源作答推导也与可辨认题面不完全一致，无法确认唯一原式。

<details class="exam-answer">
<summary>查看源作答边界</summary>

源文件最终写出的主析取范式为

$$
(P\land Q\land R)\lor(\neg P\land\neg Q\land\neg R),
$$

并给出由其余六个赋值对应极大项组成的主合取范式。由于题面损坏，这里只保留源结果，不把它冒充可独立核验的答案。

</details>

### 6. 判断推论

判断

$$
(P\land Q)\to R,\quad\neg S,\quad\neg R\lor S
\models\neg P\lor\neg Q.
$$

<details class="exam-answer">
<summary>查看答案</summary>

成立。$\neg S$ 与 $\neg R\lor S$ 同真时必有 $R=0$。又因 $(P\land Q)\to R$ 为真，只能有 $P\land Q=0$，即 $\neg P\lor\neg Q=1$。

</details>

### 7. 六组量词等值或推论

原题列出六组量词公式，要求分别判断是否成立并给反例或证明。

<details class="exam-answer">
<summary>查看源答案与边界</summary>

源答案结论为：第 4 组成立，其余各组不成立，并分别使用二元素论域构造反例。由于第 1、2、3、5、6 组在导出文件中量词和联结词多处缺失，不能客观恢复题面，本文不补造。

</details>

### 8. 再证一个等值式

证明

$$
((A\land B)\to C)\land(B\to(D\lor C))
\equiv
(B\land(D\to A))\to C.
$$

<details class="exam-answer">
<summary>查看答案</summary>

左边消去蕴含并分配：

$$
(\neg A\lor\neg B\lor C)\land(\neg B\lor D\lor C)
\equiv
\neg B\lor(\neg A\land D)\lor C.
$$

右边为

$$
\neg(B\land(\neg D\lor A))\lor C
\equiv\neg B\lor(D\land\neg A)\lor C.
$$

</details>

### 9. 公式真假类型

原题列出若干谓词公式，要求判断“普遍有效、不可满足或可满足”。其中可清晰辨认的六式为：

1. $\exists xP(x)\to P(y)$；
2. $\forall x(P(x)\land Q(x))\to(\forall xP(x)\land\forall xQ(x))$；
3. $\exists xP(x)$；
4. $\forall x(P(x)\land P(x))$；
5. $\exists x(P(x)\to Q(x))$；
6. $\exists x(P(x)\lor P(x))$。

<details class="exam-answer">
<summary>查看源答案与核对</summary>

第 2 式普遍有效；第 3、4、6 式通常只是可满足。源答案把第 1 式标成“不可满足”旁又批注“可满足式？”，并把第 5 式标成“普遍有效”旁又批注“可满足？”。按标准非空论域语义，第 1、5 式都可满足但非普遍有效。本文把源结论冲突完整标明，不静默改写为“官方答案”。

</details>

### 10. 不可满足判据

证明 $\Gamma\models A$ 当且仅当 $\Gamma\cup\{\neg A\}$ 不可满足。

<details class="exam-answer">
<summary>查看答案</summary>

$\Gamma\not\models A$ 的定义正是：存在一个解释和赋值，使 $\Gamma$ 中所有公式为真而 $A$ 为假，也就是使 $\Gamma\cup\{\neg A\}$ 可满足。两边同时取否定即得结论。

</details>
