---
title: "作业 4 · 等值演算、推论与可满足性"
description: "2024 年春季第 4 次作业，涵盖对偶定理、永假式、语义推论和公式集可满足性"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业4.docx`，题目和解答均来自该文件。

## 1. 等值演算与对偶

先用等值演算证明下列等值式，再由对偶定理写出新等值式：

$$
\neg(\neg p\lor\neg q)\lor\neg(\neg p\lor q)\equiv p,
$$

$$
(p\lor\neg q)\land(p\lor q)\land(\neg p\lor\neg q)
\equiv\neg(\neg p\lor q).
$$

<details class="exam-answer">
<summary>查看答案</summary>

第一式：

$$
(p\land q)\lor(p\land\neg q)
\equiv p\land(q\lor\neg q)
\equiv p.
$$

其对偶式为

$$
\neg(\neg p\land\neg q)\land\neg(\neg p\land q)\equiv p.
$$

第二式：

$$
(p\lor(\neg q\land q))\land(\neg p\lor\neg q)
\equiv p\land(\neg p\lor\neg q)
\equiv p\land\neg q.
$$

而 $p\land\neg q\equiv\neg(\neg p\lor q)$。其对偶式为

$$
(p\land\neg q)\lor(p\land q)\lor(\neg p\land\neg q)
\equiv\neg(\neg p\land q).
$$

</details>

## 2. 证明永假式

用等值演算证明：

$$
(q\to p)\land(\neg p\to q)\land\neg p,
$$

$$
(p\to q)\land(q\to r)\land\neg(p\to r)
$$

都是永假式。

<details class="exam-answer">
<summary>查看答案</summary>

第一式等值于

$$
(\neg q\lor p)\land(p\lor q)\land\neg p
\equiv p\land\neg p\equiv0.
$$

第二式把蕴含消去后，由 $\neg(p\to r)\equiv p\land\neg r$ 得

$$
(\neg p\lor q)\land(\neg q\lor r)\land p\land\neg r
\equiv p\land q\land\neg q\land\neg r
\equiv0.
$$

</details>

## 3. 证明四个等值式

证明：

1. $p\to(q\to r)\equiv q\to(p\to r)$；
2. $(p\to q)\land(p\to r)\equiv p\to(q\land r)$；
3. $(p\to q)\lor(r\to q)\equiv(p\land r)\to q$；
4. $p\to(q\to p)\equiv\neg p\to(p\to q)$。

<details class="exam-answer">
<summary>查看答案</summary>

依次消去蕴含即可得到：

$$
\neg p\lor\neg q\lor r,
$$

$$
(\neg p\lor q)\land(\neg p\lor r)
\equiv\neg p\lor(q\land r),
$$

$$
\neg p\lor q\lor\neg r
\equiv\neg(p\land r)\lor q,
$$

以及两边都等值于 $1$。

</details>

## 4. 对偶公式的真假类型

设 $A$ 由 $0,1,\neg,\land,\lor$ 生成，$A^*$ 是 $A$ 的对偶式。证明：若 $A$ 是永真式，则 $A^*$ 是永假式；若 $A$ 是永假式，则 $A^*$ 是永真式。

<details class="exam-answer">
<summary>查看答案</summary>

对偶定理说明，对任一赋值 $v$，有

$$
v(A^*)=\neg\,\bar v(A),
$$

其中 $\bar v$ 把每个命题变量的真值反转。若 $A$ 对所有赋值恒为 $1$，则右侧恒为 $0$；反向同理。

> 源文件第二小问把“永假式”误写成“永真式”，但结论与对偶定理表明其意图如上。

</details>

## 5. 不可满足与推出矛盾

证明公式集 $\Gamma$ 不可满足，当且仅当 $\Gamma\models0$。

<details class="exam-answer">
<summary>查看答案</summary>

若 $\Gamma\not\models0$，就存在满足 $\Gamma$ 而不满足 $0$ 的赋值；由于 $0$ 在任何赋值下都为假，这等价于存在满足 $\Gamma$ 的赋值。故取否定即得

$$
\operatorname{Unsat}(\Gamma)\iff\Gamma\models0.
$$

</details>

## 6. 判断语义推论

判断下列关系是否成立：

1. $p\lor q,\neg p\models q$；
2. $p\lor q,p\to q,q\models p$；
3. $p_1\to q_1,p_2\to q_2,p_1\land p_2\models q_1\land q_2$；
4. $p\to q,q\to p\models p\lor q$；
5. $(p\land q)\to r,(p\lor q)\to\neg r\models p\land q\land r$。

<details class="exam-answer">
<summary>查看答案</summary>

第 1、3 项成立。第 2 项取 $p=0,q=1$；第 4 项取 $p=q=0$；第 5 项取 $p=0,q=1,r=0$，都能使前提真而结论假，因此不成立。

</details>

## 7. 判断公式集能否满足

判断以下公式集是否可满足：

1. $\{(p\lor q)\lor(s\land\neg r),\ \neg(s\land\neg r)\}$；
2. $\{p_1,\ \neg p_1\lor p_2,\ \neg p_1\lor\neg p_2\lor p_3,\ldots,\neg p_1\lor\cdots\lor\neg p_n\lor p_{n+1}\}$；
3. $\{p\lor q,\ \neg p\lor\neg q,\ p\to q\}$。

<details class="exam-answer">
<summary>查看答案</summary>

三组都可满足。源答案分别给出见证赋值：

1. $p=1,q=0,r=1,s=0$；
2. 对所有出现的 $p_i$ 取 $p_i=1$；
3. $p=0,q=1$。

</details>
