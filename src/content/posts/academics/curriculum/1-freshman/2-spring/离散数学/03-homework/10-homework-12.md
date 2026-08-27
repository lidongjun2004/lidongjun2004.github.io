---
title: "作业 12 · 谓词公理系统与元性质"
description: "2024 年春季第 12 次作业，涵盖一致性、可靠性、完备性、演绎定理和谓词公理证明"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业12.docx`。源目录中没有“作业 11”，所以编号从 10 直接跳到 12。

## 一、判断题

1. 如果对每个公式 $Q$ 都有 $\Gamma\vdash Q$，则称 $\Gamma$ 协调；
2. 命题逻辑公理系统具有一致性；
3. 存在含二元谓词的一阶谓词演算系统是可判定的；
4. 谓词逻辑完全性定理是 $\Gamma\vdash Q\Rightarrow\Gamma\models Q$；
5. 一个系统证明的定理都为真，说明系统可靠；
6. 所有语义上为真的公式都可证，说明系统完全；
7. 若某永真式 $P$ 满足 $T\vdash P$，则 $T$ 协调；
8. 若 $T\vdash0$，则所用公理系统不可靠。

<details class="exam-answer">
<summary>查看答案</summary>

依次为错误、正确、错误、错误、正确、正确、错误、错误。

- 能推出每个公式恰恰是不协调；
- 至少含一个二元谓词的一阶系统一般不可判定；
- 第 4 句写的是可靠性方向，完全性方向是 $\Gamma\models Q\Rightarrow\Gamma\vdash Q$；
- 不协调的 $T$ 也能推出永真式；
- $T\vdash0$ 可能是前提集自身矛盾，不能据此责怪公理系统。

</details>

## 二、综合证明

### 1. 全称量词保持蕴含

已知 $\Gamma\vdash A\to B$，且 $x_i$ 不在 $\Gamma$ 中自由出现，证明

$$
\Gamma\vdash\forall x_iA\to\forall x_iB.
$$

<details class="exam-answer">
<summary>查看源证明思路</summary>

由已知式对 $x_i$ 使用 UG 得 $\Gamma\vdash\forall x_i(A\to B)$，再用谓词公理五

$$
\forall x_i(A\to B)\to(\forall x_iA\to\forall x_iB)
$$

和 MP 即得结论。

</details>

### 2. 存在量词保持蕴含

在同样条件下证明

$$
\Gamma\vdash\exists x_iA\to\exists x_iB.
$$

<details class="exam-answer">
<summary>查看源证明思路</summary>

由 $A\to B$ 的换位定理得 $\neg B\to\neg A$，再用上一题推出

$$
\forall x_i\neg B\to\forall x_i\neg A.
$$

将 $\exists xC$ 视为 $\neg\forall x\neg C$，再作一次换位，得到目标式。

</details>

### 3. 存在量词消去

若 $\Gamma\vdash A\to B$，且 $x_i$ 不在 $B,\Gamma$ 中自由出现，证明

$$
\Gamma\vdash\exists x_iA\to B.
$$

<details class="exam-answer">
<summary>查看源证明思路</summary>

由换位得 $\neg B\to\neg A$。因为 $x_i$ 不在 $\neg B$ 中自由出现，可把量词放到后件，得到

$$
\neg B\to\forall x_i\neg A.
$$

再换位，并用 $\exists x_iA\equiv\neg\forall x_i\neg A$，即得结论。

</details>

### 4. 全称量词保持等价

若 $\Gamma\vdash A\leftrightarrow B$，且 $x_i$ 不在 $\Gamma$ 中自由出现，证明

$$
\Gamma\vdash\forall x_iA\leftrightarrow\forall x_iB.
$$

<details class="exam-answer">
<summary>查看答案</summary>

把 $A\leftrightarrow B$ 展开为 $A\to B$ 与 $B\to A$ 的合取，分别应用第 1 题，再合取得到两个量化公式的等价。

</details>

### 5. 存在量词引入

若项 $t$ 对 $A$ 中的 $x_i$ 可代入，证明

$$
\vdash A_t^{x_i}\to\exists x_iA.
$$

<details class="exam-answer">
<summary>查看答案</summary>

谓词公理四给出

$$
\forall x_i\neg A\to(\neg A)_t^{x_i}.
$$

换位后得到

$$
\neg(\neg A)_t^{x_i}\to\neg\forall x_i\neg A,
$$

即 $A_t^{x_i}\to\exists x_iA$。

</details>

### 6. 存在量词分配到合取的单向式

证明

$$
\vdash\exists x_i(A\land B)\to(\exists x_iA\land\exists x_iB).
$$

<details class="exam-answer">
<summary>查看答案</summary>

由命题定理 $A\land B\to A$ 和 $A\land B\to B$，分别应用第 2 题：

$$
\exists x_i(A\land B)\to\exists x_iA,
$$

$$
\exists x_i(A\land B)\to\exists x_iB.
$$

再用合取引入得到结论。

</details>

### 7. 不使用演绎定理的公理证明

只用公理、MP 和已允许定理证明

$$
\vdash(\neg Q\to Q)\to Q.
$$

<details class="exam-answer">
<summary>查看源答案</summary>

源文件给出五个公式组成的 Hilbert 推导，核心是把公理三

$$
(\neg A\to\neg B)\to(B\to A)
$$

作适当代入，并与 $Q\to Q$ 配合两次 MP。原 DOCX 的变量在这一页严重错位，但目标式和“不得用演绎定理”的要求清晰，本文保留此作答边界。

</details>

### 8. 用归纳法证明演绎定理

按证明长度归纳，证明

$$
\Gamma,A\vdash B\Longrightarrow\Gamma\vdash A\to B.
$$

<details class="exam-answer">
<summary>查看答案</summary>

对证明序列最后一步分类：

1. 若 $B$ 是公理或 $\Gamma$ 中前提，则先有 $\Gamma\vdash B$，再由 A1 得 $\Gamma\vdash A\to B$；
2. 若 $B=A$，使用定理 $\vdash A\to A$；
3. 若 $B$ 由 $Q$ 与 $Q\to B$ 经 MP 得到，归纳假设给出 $A\to Q$ 和 $A\to(Q\to B)$，再用 A2 与两次 MP 得 $A\to B$。

四种末步情形都成立，归纳完成。

</details>

### 9. 十个命题定理

使用命题逻辑公理系统证明：

1. $(Q\to R)\to((P\to Q)\to(P\to R))$；
2. $(P\to(Q\to R))\to(Q\to(P\to R))$；
3. $\neg\neg Q\to Q$；
4. $Q\to\neg\neg Q$；
5. $(Q\to R)\to(\neg R\to\neg Q)$；
6. $Q\to(\neg R\to\neg(Q\to R))$；
7. $Q\to R\lor Q$；
8. $Q\to Q\lor R$；
9. $Q\land R\to Q$；
10. $Q\land R\to R$。

<details class="exam-answer">
<summary>查看源答案边界</summary>

源文件只写“见 PPT 或教材 4.5 节”，没有逐式提交证明。因此这里只保留题目，不补造为源答案。

</details>

### 10. 一个谓词公理证明

证明

$$
\vdash\forall x(P(x)\to Q(x))
\to(\forall xP(x)\to\forall xQ(x)).
$$

<details class="exam-answer">
<summary>查看源证明结构</summary>

源答案先用公理四实例化全称前提，再借 A2 得

$$
\forall x(P(x)\to Q(x))\to(\forall xP(x)\to Q(x)).
$$

随后对自由的 $x$ 使用 UG，并以公理五把全称量词从后件提升，最终得到目标式。共八步。

</details>
