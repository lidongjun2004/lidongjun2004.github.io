---
title: "作业 6 · 联结词完备性与谓词语义"
description: "2024 年春季第 6 次作业，涵盖完备联结词集、极小完备集和谓词公式分类"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业6.docx`，按源题的七个部分整理。

## 1. 不能只用蕴含定义等价

证明 $\leftrightarrow$ 不能由联结词集 $\{\to\}$ 定义。

<details class="exam-answer">
<summary>查看答案</summary>

只含 $\to$ 的公式有一个结构性质：若把公式最右侧出现的命题变量赋值为 $1$，整个公式为 $1$。这个性质可按公式结构归纳证明。

但 $p\leftrightarrow q$ 在 $p=0,q=1$ 时为 $0$，在 $p=1,q=0$ 时也为 $0$；无论哪一个变量作为最右变量，都违背上述性质。因此不能只用 $\to$ 表示。

</details>

## 2. 两组联结词不完备

证明 $\{\land,\lor,\to,\leftrightarrow\}$ 和 $\{\land,\lor,\oplus\}$ 都不是完全集。

<details class="exam-answer">
<summary>查看答案</summary>

第一组每个联结词都保持真值 $1$：所有输入为 $1$ 时输出仍为 $1$，所以任何由它们生成的公式也有此性质，无法定义 $\neg p$。

第二组每个联结词都保持真值 $0$：所有输入为 $0$ 时输出仍为 $0$，同样无法定义 $\neg p$。因此两组都不完备。

</details>

## 3. 证明极小完备性

证明下列联结词集都是极小完全集：

$$
\{0,\to\},\quad\{\oplus,\to\},\quad
\{\oplus,\land,\leftrightarrow\},\quad
\{\oplus,\lor,\leftrightarrow\}.
$$

<details class="exam-answer">
<summary>查看源答案思路</summary>

先从每组中定义出一个已知完全集。例如

$$
\neg p\equiv p\to0,\qquad
p\lor q\equiv(p\to q)\to q.
$$

对含 $\oplus$ 的几组，可借助 $p\oplus1\equiv\neg p$，并用 $p\leftrightarrow p$ 得到常元 $1$。再配合德摩根律得到 $\neg,\land$ 或 $\neg,\lor$。

极小性要逐个删去联结词验证：删除后所得集合会保持 $0$、保持 $1$，或只能得到仿射真值函数，因而不再完备。

</details>

## 4. 单个三元联结词

设三元联结词 $\Delta$ 的输出在输入 $000,001,110$ 时为 $1$，其余输入为 $0$。证明 $\{\Delta\}$ 是极小完全集。

<details class="exam-answer">
<summary>查看答案</summary>

按源答案直接核对真值表可得

$$
p\downarrow q\equiv\Delta(p,q,q),
$$

其中 $\downarrow$ 是 NOR。由于单独的 NOR 已完备，$\{\Delta\}$ 完备；单元素集合没有可继续删去而仍非空的真子集，所以它也是极小的。

</details>

## 5. NAND、NOR 与二元单联结词

证明：$\{\uparrow\}$ 与 $\{\downarrow\}$ 各自都是极小完全集；若一个二元联结词单独构成完全集，则它只能是 NAND 或 NOR。

<details class="exam-answer">
<summary>查看答案</summary>

对 NAND：

$$
\neg p=p\uparrow p,\qquad
p\land q=(p\uparrow q)\uparrow(p\uparrow q).
$$

对 NOR：

$$
\neg p=p\downarrow p,\qquad
p\lor q=(p\downarrow q)\downarrow(p\downarrow q).
$$

后二者均可得到已知完全集。反向结论按二元联结词的四行真值表分类：若保持 $0$、保持 $1$、单调、自对偶或仿射，就不可能完备；排除后只剩 NAND 和 NOR。

</details>

## 6. 量词交换的单向推论

证明

$$
\exists x\forall yQ(x,y)\to\forall y\exists xQ(x,y)
$$

普遍有效。

<details class="exam-answer">
<summary>查看答案</summary>

若前件真，存在同一个对象 $a$，使所有 $y$ 都满足 $Q(a,y)$。因此对任意给定的 $y$，选 $x=a$ 就能使 $Q(x,y)$ 成立，后件为真。

</details>

## 7. 谓词公式分类

判断下列公式是普遍有效、不可满足，还是仅可满足：

1. $\exists xP(x)\land\exists xQ(x)\to\exists x(P(x)\land Q(x))$；
2. $\forall x(P(x)\lor Q(x))\to(\forall xP(x)\lor\forall xQ(x))$；
3. $\forall xP(x,x)\to\forall x\forall yP(x,y)$；
4. $(\forall xP(x)\to\forall xQ(x))\to\forall x(P(x)\to Q(x))$。

<details class="exam-answer">
<summary>查看答案</summary>

四式都可满足，但都不是普遍有效式。反例都可在两元素论域中构造：让 $P,Q$ 分别只在不同对象上成立，可同时否定第 1、2、4 式；令二元关系 $P$ 只在对角线上成立，可否定第 3 式。

</details>
