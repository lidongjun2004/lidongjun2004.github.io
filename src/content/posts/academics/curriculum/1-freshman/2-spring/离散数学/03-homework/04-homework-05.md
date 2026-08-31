---
title: "作业 5 · 主范式与语义证明"
description: "2024 年春季第 5 次作业，涵盖析取范式、合取范式、主范式和语义推论"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业5.docx`，答案按源文件整理。

## 一、判断题

1. $p\land q$ 既是析取范式，又是合取范式。
2. 重言式的主合取范式包含全部极大项。

<details class="exam-answer">
<summary>查看答案</summary>

第 1 题正确；第 2 题错误。重言式没有使公式为假的赋值，所以它的主合取范式不含极大项，通常直接记为 $1$。

</details>

## 二、基本范式

### 1. 同时是主析取范式和主合取范式

给出一个既是主析取范式又是主合取范式的公式。

<details class="exam-answer">
<summary>查看答案</summary>

以唯一命题变量 $p$ 为变元时，公式 $p$ 同时满足两种要求。

</details>

### 2. 判断范式类型

判断 $p$、$p\lor q$、$(p\lor q)\land r$、$p\land\neg r$、$p\lor\neg p$ 是析取范式、合取范式，还是兼具两者。

<details class="exam-answer">
<summary>查看答案</summary>

- 析取范式：$p$、$p\lor q$、$p\land\neg r$、$p\lor\neg p$；
- 合取范式：五个公式全部都是。

其中“一个简单合取式”也可视为只有一项的析取范式，“一个简单析取式”也可视为只有一项的合取范式。

</details>

## 三、求主范式并分类

分别求下列公式的主析取范式、主合取范式，并判断真假类型：

1. $\neg p\land q\to r$；
2. $(p\to q)\to r$；
3. $\neg p\lor\neg q\to(p\leftrightarrow\neg q)$；
4. $p\lor(p\to(q\lor(\neg q\to r)))$；
5. $(p\to(q\land r))\land(\neg p\to(\neg q\land\neg r))$；
6. $p\land q\land(\neg p\lor\neg q)$。

<details class="exam-answer">
<summary>查看源答案要点</summary>

1. 主合取范式为 $p\lor\neg q\lor r$，是可满足但非重言式；
2. 主合取范式为

   $$
   (p\lor q\lor r)\land(p\lor\neg q\lor r)
   \land(\neg p\lor\neg q\lor r),
   $$

   是可满足但非重言式；
3. 源答案化简为 $p\lor q$，是可满足但非重言式；
4. 化简为 $1$，是重言式；
5. 主析取范式为

   $$
   (\neg p\land\neg q\land\neg r)\lor(p\land q\land r),
   $$

   是可满足但非重言式；
6. 化简为 $0$，是矛盾式。其主合取范式包含 $p,q$ 的全部四个极大项。

源提交没有把每一题的另一种主范式完整誊清；我不补充冒充源答案。

</details>

## 四、识别主范式

判断下列公式是否为主析取范式或主合取范式：

$$
p\lor q\lor r,\qquad p\land\neg q\land r,
$$

$$
(p\lor q\lor\neg r)\land(p\lor q\lor\neg r),
$$

$$
p\lor(q\land r),\qquad
(p\lor\neg p\lor q)\land(p\lor q\lor r).
$$

<details class="exam-answer">
<summary>查看答案</summary>

$p\land\neg q\land r$ 是主析取范式中的一个极小项，$p\lor q\lor r$ 是主合取范式中的一个极大项。其余公式含重复项、混合层次或同一项中正负文字不合要求，不是规范的主范式。

</details>

## 五、析取前提的语义推论

证明

$$
A\lor B\models C
$$

当且仅当 $A\models C$ 且 $B\models C$。

<details class="exam-answer">
<summary>查看答案</summary>

若 $A\lor B\models C$，任何满足 $A$ 的赋值也满足 $A\lor B$，故满足 $C$；所以 $A\models C$。对 $B$ 同理。

反过来，若 $A\models C$ 且 $B\models C$，任何满足 $A\lor B$ 的赋值至少满足 $A,B$ 之一，因而都满足 $C$。

</details>

## 六、一组条件推出双向关系

设

$$
\Gamma=\{p_i\to q_i\mid1\le i\le n\}
\cup\{p_1\lor\cdots\lor p_n\}
\cup\{\neg(q_i\land q_j)\mid1\le i<j\le n\}.
$$

证明

$$
\Gamma\models(q_1\to p_1)\land\cdots\land(q_n\to p_n).
$$

<details class="exam-answer">
<summary>查看答案</summary>

任取满足 $\Gamma$ 的赋值。至少一个 $p_i$ 为真，由 $p_i\to q_i$ 得对应 $q_i$ 为真；而两两互斥条件保证其他 $q_j$ 都为假。

于是对任意 $j$：若 $q_j$ 真，它就是被选中的那个指标，对应 $p_j$ 真；若 $q_j$ 假，$q_j\to p_j$ 自动为真。故所有 $q_j\to p_j$ 的合取为真。

</details>
