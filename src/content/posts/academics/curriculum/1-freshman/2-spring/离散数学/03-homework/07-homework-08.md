---
title: "作业 8 · 前束范式与 Skolem 化"
description: "2024 年春季第 8 次作业，涵盖量词推论、前束范式和 Skolem 标准形"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业8.docx`。变量改名只在避免捕获时进行，和源答案等价。

## 一、判断题

判断公式

$$
\forall xP(x,y)\leftrightarrow\neg\forall yQ(x,y)
$$

是否有如下前束范式：

$$
\exists z\exists u\forall y\forall w
\bigl((\neg P(z,y)\lor\neg Q(x,u))
\land(Q(x,y)\lor P(w,y))\bigr).
$$

<details class="exam-answer">
<summary>查看答案</summary>

正确。先把等价消成两个蕴含的合取，再把各分支中的约束变量换成互不冲突的新名字，最后依次前移量词。

</details>

## 二、单项选择题

### 1. 不成立的量词推论

从四个候选项中选出不成立者。

<details class="exam-answer">
<summary>查看答案</summary>

选 D：

$$
\exists x\exists yQ(x,y)\not\models\exists xQ(x,x).
$$

关系中可以存在一个非对角有序对，而所有对角对都不在关系中。

</details>

### 2. 错误的元逻辑说法

原题从四个有关 $\models$、可满足性和否定的陈述中选错误项。

<details class="exam-answer">
<summary>查看答案</summary>

选 B。$Q,\neg R\models1$ 永远成立，因为 $1$ 在任何解释下都真，不能据此推出 $Q\models R$。用于推出 $Q\models R$ 的不可满足条件应是 $Q,\neg R\models0$。

</details>

### 3. 错误的量词等值式

设 $x$ 不在 $R$ 中自由出现，找出错误等值式。

<details class="exam-answer">
<summary>查看答案</summary>

选 A。一般不成立的是

$$
\forall xQ(x)\to R
\equiv
\forall x(Q(x)\to R).
$$

左侧正确移入时要把 $\forall$ 换成 $\exists$。

</details>

## 三、综合题

### 1. 量词交换推论

证明

$$
\exists x\forall yQ(x,y)\models\forall y\exists xQ(x,y).
$$

<details class="exam-answer">
<summary>查看答案</summary>

前件给出同一个见证 $a$，使任意 $y$ 都满足 $Q(a,y)$；后件针对每个 $y$ 都可选 $x=a$。

</details>

### 2. 判断三个公式是否普遍有效

$$
\exists xP(x)\lor\exists xQ(x)\to\exists x(P(x)\lor Q(x)),
$$

$$
(\exists xP(x)\to\forall xQ(x))\to\forall x(P(x)\to Q(x)),
$$

$$
\forall x(P(x)\to Q(x))\to(\exists xP(x)\to\exists xQ(x)).
$$

<details class="exam-answer">
<summary>查看答案</summary>

三式均普遍有效。第一式把前件任一存在见证沿用到后件；第二式分“存在 $P$”与“不存在 $P$”两种情况；第三式把 $P$ 的存在见证代入全称前提即可得到 $Q$ 的存在见证。

</details>

### 3. 全称量词保持蕴含

证明

$$
\forall x(P(x)\to Q(x))\to(\forall xP(x)\to\forall xQ(x))
$$

普遍有效。

<details class="exam-answer">
<summary>查看答案</summary>

若两个前提都真，则每个对象都满足 $P$，且每个满足 $P$ 的对象满足 $Q$，因此每个对象都满足 $Q$。

</details>

### 4. 逆方向是否成立

判断

$$
(\forall xP(x)\to\forall xQ(x))\to\forall x(P(x)\to Q(x))
$$

的真假类型。

<details class="exam-answer">
<summary>查看答案</summary>

它可满足但不普遍有效。取二元素论域，让 $P$ 只在一个对象上真、$Q$ 只在另一个对象上真，则 $\forall xP(x)$ 为假，外层前件为真；但有对象满足 $P$ 而不满足 $Q$，后件为假。

</details>

### 5. 化为前束范式

把

$$
\neg\forall x\left(
\exists yA(x,y)\to
\exists u\forall r\bigl(B(u,r)\land\forall z(A(z,u)\to B(u,z))\bigr)
\right)
$$

化为前束范式。

<details class="exam-answer">
<summary>查看源答案</summary>

源答案在先改名约束变元后得到：

$$
\exists x\exists y\forall u\exists r\exists z
\bigl(A(x,y)\land(\neg B(u,r)\lor\neg(A(z,u)\to B(u,z)))\bigr).
$$

</details>

### 6. 一个较短的前束范式

把

$$
\forall xF(x)\lor\neg\exists xG(x,y)
$$

化为前束范式。

<details class="exam-answer">
<summary>查看答案</summary>

先把第二个约束变量改名为 $z$：

$$
\forall x\forall z(F(x)\lor\neg G(z,y)).
$$

</details>

### 7. Skolem 标准形

分别 Skolem 化：

$$
\forall x\exists y\forall u\exists v(P(x,y)\to Q(u,v)),
$$

$$
\exists y\forall x\exists v\forall u(P(x,y)\to Q(u,v)).
$$

<details class="exam-answer">
<summary>查看答案</summary>

第一式的两个存在变元分别依赖此前的全称变元：

$$
\forall x\forall u(P(x,f(x))\to Q(u,g(x,u))).
$$

第二式最外层存在量词用新常元 $a$ 代替，$v$ 只依赖此前的 $x$：

$$
\forall x\forall u(P(x,a)\to Q(u,g(x))).
$$

</details>
