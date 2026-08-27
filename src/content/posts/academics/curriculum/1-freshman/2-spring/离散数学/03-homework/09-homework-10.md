---
title: "作业 10 · 公理证明与前束范式"
description: "2024 年春季第 10 次作业，涵盖命题公理系统、演绎证明和复杂公式前束化"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业10.docx`。证明步骤遵循课程使用的 $\neg,\to$ Hilbert 系统。

## 一、判断题

1. 若 $\Gamma\vdash R$，则 $\Gamma\vdash Q\to R$；
2. 合法证明序列的每一步都必须是前提、某个公理实例，或由前面公式按规则推出；
3. 若 $\Gamma_1\subseteq\Gamma_2$ 且 $\Gamma_1\vdash A$，则 $\Gamma_2\vdash A$；
4. 公理化推理依赖公式在自然语言中的具体意义；
5. 双重否定定理可以直接由“换位律”一步得到。

<details class="exam-answer">
<summary>查看答案</summary>

依次为正确、正确、正确、错误、错误。形式证明只看符号规则；引用一个定理时必须满足它的准确公式形式，不能只凭自然语言名称。

</details>

## 二、单项选择题

### 1. 哪个不是公理

<details class="exam-answer">
<summary>查看答案</summary>

选 B：$Q,Q\to R\vdash R$ 是 MP 推理规则，不是公理公式。

</details>

### 2. 哪个不是定理

<details class="exam-answer">
<summary>查看答案</summary>

选 D：

$$
(A\to B)\to(B\to C)
$$

不是重言式，因此不可能是可靠命题系统的定理。

</details>

### 3. 哪个说法错误

<details class="exam-answer">
<summary>查看答案</summary>

选 C：“命题逻辑语言包含量词”。量词属于谓词逻辑语言。

</details>

## 三、综合题

### 1. 定义命题逻辑公理系统

写出命题逻辑公理系统的组成。

<details class="exam-answer">
<summary>查看源答案边界</summary>

源文件只写“解析略”，没有提交答案。课程使用的系统由合式公式语言、三条公理模式和 MP 规则组成，具体模式见课程“逻辑公理系统”讲义；这里不补写成源提交。

</details>

### 2. 证明恒等定理

证明

$$
\vdash A\to A.
$$

<details class="exam-answer">
<summary>查看源证明</summary>

使用 A1、A2 和 MP：

1. $A\to((A\to A)\to A)$；
2. $A\to(A\to A)$；
3. $(A\to((A\to A)\to A))\to((A\to(A\to A))\to(A\to A))$；
4. $(A\to(A\to A))\to(A\to A)$；
5. $A\to A$。

</details>

### 3. 证明蕴含的合成形式

证明

$$
\vdash(B\to C)\to((A\to B)\to(A\to C)).
$$

<details class="exam-answer">
<summary>查看源证明思路</summary>

在临时前提 $B\to C$ 与 $A\to B$ 下，由 A1 把二者都提升到前件 $A$，再用 A2 得到 $A\to C$。连续两次应用演绎定理，依次消去 $A\to B$ 和 $B\to C$，就得到目标公式。源文件给出同一过程的七步 Hilbert 推导。

</details>

### 4. 证明前提增强

若 $\Gamma\vdash R$，证明 $\Gamma\vdash Q\to R$。

<details class="exam-answer">
<summary>查看答案</summary>

由 A1 有 $\vdash R\to(Q\to R)$。已知 $\Gamma\vdash R$，应用一次 MP 得 $\Gamma\vdash Q\to R$。

</details>

### 5. 化为前束范式

把下列公式化为前束范式：

1. $\neg\exists xF(x)\to\forall yG(x,y)$；
2. $\neg(\forall xF(x,y)\lor\exists yG(x,y))$；
3. $\forall x\forall y(\exists zP(x,y,z)\land(\exists uQ(x,u)\to\exists vQ(y,v)))$；
4. $\forall x(F(x)\to G(x))\to(\exists xF(x)\to\exists xG(x))$；
5. $\forall x\forall y(\exists z(P(x,z)\land P(y,z))\to\exists uQ(x,y,u))$；
6. $\exists xP(x)\to(Q(y)\to\neg(\exists yR(y)\to\forall xS(x)))$。

<details class="exam-answer">
<summary>查看源答案</summary>

先对约束变元作必要改名，一组源答案为：

$$
\exists z\forall y(F(z)\lor G(x,y)),
$$

$$
\exists z\forall w(\neg F(z,y)\land\neg G(x,w)),
$$

$$
\forall x\forall y\exists z\forall u\exists v
\bigl(P(x,y,z)\land(Q(x,u)\to Q(y,v))\bigr),
$$

$$
\exists x\forall y(F(x)\lor G(x)\lor\neg F(y)),
$$

$$
\forall x\forall y\forall z\exists u
(\neg P(x,z)\lor\neg P(y,z)\lor Q(x,y,u)),
$$

$$
\forall x\exists z\exists u
(\neg P(x)\lor\neg Q(y)\lor(R(z)\land\neg S(u))).
$$

前束范式不唯一，但移出量词前必须先避免变量捕获。

</details>
