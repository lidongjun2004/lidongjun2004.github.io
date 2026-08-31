---
title: "作业 2 · 自由变元与真值表程序"
description: "2024 年春季第 2 次作业，涵盖自由变元、量词辖域、真值表和等值判定程序"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业2.docx`。其中程序题的源答案只记录了课程代码库中的调用方式，我不补造未提交的完整程序。

## 一、选择题

在

$$
\forall x(P(x)\land\forall yQ(y))\to S(x)\lor R(y)
$$

中，变元 $y$ 是自由变元、约束变元，还是兼有两种出现？

<details class="exam-answer">
<summary>查看答案</summary>

$y$ 兼有约束出现和自由出现。$Q(y)$ 中的 $y$ 受 $\forall y$ 约束，而 $R(y)$ 中的 $y$ 不在该量词辖域内。

</details>

## 二、自由出现、约束出现与辖域

### 1. 分析两个公式

分析下列公式中各变元的自由出现、约束出现和量词辖域：

$$
\exists x(P(x)\land\forall yQ(y))
\to
\exists z(R(x,y,z)\land\neg S(z)),
$$

$$
\exists x\forall y\bigl(P(x)\land Q(y)\land R(x,y,z)
\land\forall z(S(z)\to T(x,z,y))\bigr).
$$

<details class="exam-answer">
<summary>查看答案</summary>

第一式中，前件 $P(x)$ 里的 $x$ 受 $\exists x$ 约束，后件 $R(x,y,z)$ 里的 $x,y$ 自由；$Q(y)$ 里的 $y$ 受 $\forall y$ 约束；后件中 $R$ 和 $S$ 里的 $z$ 都受 $\exists z$ 约束。

第二式中，$x,y$ 的各次出现分别受最外层 $\exists x,\forall y$ 约束；$R(x,y,z)$ 中的 $z$ 自由；$S(z)$ 和 $T(x,z,y)$ 中的 $z$ 受内层 $\forall z$ 约束。

</details>

### 2. 再分析一个公式

指出

$$
\forall x(P(x)\to(Q(x)\lor R(x,y)))
$$

中的自由变元、约束变元和量词辖域。

<details class="exam-answer">
<summary>查看答案</summary>

$y$ 自由，所有 $x$ 的出现都受 $\forall x$ 约束。$\forall x$ 的辖域是整个矩阵

$$
P(x)\to(Q(x)\lor R(x,y)).
$$

</details>

## 三、自然语言符号化

令 $p$ 表示“天气好”，$q$ 表示“我们去公园”。分别符号化：

1. 只要天气好，我们就去公园；
2. 只有天气好，我们才去公园；
3. 当且仅当天气好时，我们才去公园。

<details class="exam-answer">
<summary>查看答案</summary>

依次为

$$
p\to q,\qquad q\to p,\qquad p\leftrightarrow q.
$$

</details>

## 四、程序题

### 1. 输出真值表

用课程程序输出

$$
\neg(Q\land(\neg Q\lor R))\lor R
$$

的真值表。

<details class="exam-answer">
<summary>查看源提交</summary>

源提交先把公式存入变量 `s`，再调用 `l1.truthtable2(s)`。

</details>

### 2. 判定逻辑推论

用程序验证

$$
P,\quad\neg Q\lor(\neg P\lor R)\models\neg Q\lor R.
$$

<details class="exam-answer">
<summary>查看源提交</summary>

源提交把前提列表记为 `pre`、结论记为 `s`，调用 `l1.isargument3(pre,s)`；程序返回该推论成立。

</details>

### 3. 判定等值式

用程序验证分配律

$$
P\lor(Q\land R)\equiv(P\lor Q)\land(P\lor R).
$$

<details class="exam-answer">
<summary>查看源提交</summary>

源提交分别把两侧保存为 `e1,e2`，调用 `l1.isequation3(e1,e2)`；结果为等值。

</details>

### 4. 实现三变量等值判定

编写程序，穷举 $P,Q,R$ 的八种真值组合，判断两个三变量公式是否等值，并测试：

$$
\neg(P\land Q)\lor R
\quad\text{and}\quad
\neg P\lor(\neg Q\lor R),
$$

$$
\neg P\lor(Q\lor R)
\quad\text{and}\quad
\neg(Q\lor R)\lor P.
$$

<details class="exam-answer">
<summary>查看源提交结论</summary>

源程序逐行比较两个公式在八种赋值下的计算结果。第一组等值，第二组不等值。

</details>
