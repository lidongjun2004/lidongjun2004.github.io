---
title: "作业 13 · 期末复习"
description: "2024 年春季第 13 次作业，综合复习命题逻辑、谓词逻辑和公理系统"
date: 2026-08-27
tags: ["作业"]
---

来源为 `2024作业/作业13.docx`。这是一份复习汇编，其中若干题从题库复制后在 DOCX 中已经缺行；我只转写能够由题面和解答核对的部分。

## 一、判断题

判断下列说法：

1. 若 $P$ 不含自由变元，则 $\forall x(Q(x)\to P)\equiv(\exists xQ(x)\to P)$；
2. 源题所给 $\exists x\exists y\forall z(P(x,y)\lor\neg Q(z)\lor R(x))$ 是相应公式的一个前束范式；
3. 一个公式不能同时是矛盾式与可满足式，也不能同时是重言式与可满足式；
4. 命题逻辑公理系统具有一致性；
5. 足够表达自然数算术的形式系统存在不可判定命题。

<details class="exam-answer">
<summary>查看答案</summary>

依次为正确、正确、错误、正确、正确。第 3 句前半正确、后半错误：重言式当然可满足。源文件在第 1 页和第 2 页之间还残留一道推论反例，但题面已经缺失，只能确认源答案用二元素模型说明该推论不成立。

</details>

## 二、单项选择与概念辨析

### 1. 对偶与替换

从四个有关替换、子公式和对偶的说法中选择错误项。

<details class="exam-answer">
<summary>查看答案</summary>

选 C：“公式与其对偶在同一赋值下真值总相反”。对偶定理需要同时反转赋值，原赋值下两者可以同真、同假或相反。

</details>

### 2. 量词否定推导改错

从 $\forall z(G(z)\lor H(z))$ 出发的六步推导中，问哪一步开始错误。

<details class="exam-answer">
<summary>查看答案</summary>

第 3 步到第 4 步错误，原因是错误地把带否定的合取拆成分别量化的合取。

</details>

### 3. 元逻辑错误项

设 $Q,R$ 是谓词公式，从演绎定理、反证法和语义等值的四个描述中选择错误项。

<details class="exam-answer">
<summary>查看答案</summary>

选 B。$Q,\neg R\models1$ 不能推出 $Q\models R$；正确的矛盾判据应让前提推出 $0$。

</details>

### 4. 表示特殊二进制串集合

集合由六位串组成，每个串只有一段连续的 $0$ 和一段连续的 $1$，包括

$$
111111,011111,\ldots,000001
$$

及

$$
000000,100000,\ldots,111110.
$$

用 $b_i$ 表示第 $i$ 位为 $1$，选出表示该集合的公式。

<details class="exam-answer">
<summary>查看源答案思路</summary>

源答案引入分界点 $p$：一类在分界点前全为 $0$、之后全为 $1$；另一类相反。最终公式是“存在一个分界点，使两种模式至少一种成立”。候选公式在源 DOCX 中下标与大联结符丢失，无法客观逐字转写。

</details>

### 5. 哪个公式不是定理

<details class="exam-answer">
<summary>查看答案</summary>

选 D：

$$
(A\to B)\to(B\to C).
$$

它不是重言式。其余候选是课程已证定理或可由演绎定理得到。

</details>

### 6. 自由变元与前束范式

从四个谓词逻辑基本概念中找错误项。

<details class="exam-answer">
<summary>查看答案</summary>

选 B：“一个变量在公式中只能是自由或约束之一”。同一变量符号可以在不同位置兼有自由出现和约束出现。

</details>

### 7. 可判定性

判断下列对象的可判定性：命题推演；含至少一个二元谓词的一阶系统；一般谓词推演；可判定前提集的演绎结果；只含一个一元谓词变元的公式类。

<details class="exam-answer">
<summary>查看答案</summary>

源答案结论：命题推演可判定；含二元谓词的一般一阶系统不可判定；一般谓词推演半可判定；递归前提集的演绎结果集半可判定；只含一个一元谓词变元的给定公式类可判定。

</details>

### 8. 公理系统性质

关于完全性、不协调、独立性和一致性的四个描述中，找错误项。

<details class="exam-answer">
<summary>查看答案</summary>

选 C：“所有公理系统都是独立的”。独立性不是公理系统的必然属性；有的公理系统含可由其他公理推出的冗余公理。

</details>

## 三、综合题

### 1. 自然语言符号化

1. 李华是我们班学习成绩最好的学生。论域为全体学生；$S(x)$ 表示“$x$ 是本班学生”，$G(x,y)$ 表示“$x$ 比 $y$ 学习好”，$D(x,y)$ 表示“二者是同一学生”，常元 $a$ 表示李华。
2. 存在唯一的素偶数。论域为正整数，$E(x)$ 表示偶数，$P(x)$ 表示素数。

<details class="exam-answer">
<summary>查看补充推导</summary>

源文件在两个“解：”后没有内容。按题面可分别写为

$$
S(a)\land\forall x\bigl(S(x)\to(G(a,x)\lor D(a,x))\bigr),
$$

$$
\exists x\left(E(x)\land P(x)\land
\forall y((E(y)\land P(y))\to y=x)\right).
$$

以上是依据原题补充的推导，不是源提交。

</details>

### 2. 数字电路主范式

原题给出 $X,Y,Z$ 到输出 $A,B$ 的真值表，要求分别写主析取范式和主合取范式。

<details class="exam-answer">
<summary>查看源答案</summary>

源答案中可完整核对的 $A$ 主析取范式为

$$
(\neg X\land\neg Y\land\neg Z)
\lor(X\land\neg Y\land\neg Z)
\lor(X\land Y\land Z).
$$

$A$ 的主合取范式由其余五行对应的极大项组成。$B$ 的答案在页边被截断，源文件只完整保留了主合取范式的一部分，因此这里不补全。

</details>

### 3. 自由出现、约束出现与辖域

分析：

$$
\exists x(P(x)\land\forall yQ(y))\to\exists z(R(x,y,z)\land\neg S(z)),
$$

$$
\exists x\forall y(P(x)\land Q(y)\land R(x,y,z)\land\forall z(S(z)\to T(x,z,y))).
$$

<details class="exam-answer">
<summary>查看答案</summary>

第一式中，前件的 $x,y$ 分别受 $\exists x,\forall y$ 约束，后件 $R$ 中的 $x,y$ 自由，后件的两个 $z$ 受 $\exists z$ 约束。

第二式中，$x,y$ 的所有出现受外层量词约束；$R$ 中的 $z$ 自由，内层 $S,T$ 中的 $z$ 受 $\forall z$ 约束。各量词辖域就是紧随其后的完整子公式。

</details>

### 4. 举出可靠、完备且协调的系统

<details class="exam-answer">
<summary>查看答案</summary>

源答案举卢卡西维茨命题系统：

$$
A\to(B\to A),
$$

$$
(A\to(B\to C))\to((A\to B)\to(A\to C)),
$$

$$
(\neg A\to\neg B)\to(B\to A),
$$

推理规则为 MP。

</details>

### 5. 超算队伍选择

条件同第 7 次作业：甲去则乙去；丁、戊至少一人去；乙、丙恰有一人去；丙、丁同去同不去；戊去则甲、乙去。求方案。

<details class="exam-answer">
<summary>查看答案</summary>

两种方案：甲、乙、戊；或丙、丁。

</details>

### 6. 两组公式的可满足性

原题要求判断两组含项、全称量词和二元关系的公式集是否可满足。

<details class="exam-answer">
<summary>查看源答案与边界</summary>

两组均可满足。第一组用论域 $\{1,2\}$，令所有常元、函数项和值都解释为 $1$，并令 $P(1)=0,P(2)=1$；第二组以自然数为论域，把二元谓词解释为小于关系。原题集合的大括号内容在 DOCX 中丢失，无法唯一恢复，故只保留模型证据。

</details>

### 7. 判断公式集独立性

原题列出四个公式集，判断是否独立；若不独立，指出可由其他公式推出的成员。

<details class="exam-answer">
<summary>查看源答案与边界</summary>

源答案结论：第 1、3 组独立，第 2、4 组不独立。第 2 组中 $Q\to R$ 可由其余公式推出；第 4 组中 $\forall xP(x)\to\exists xP(x)$ 可由另一公式推出。四组题面在源 DOCX 中多处丢字符，因此不重写残缺集合。

</details>

### 8. 足球队推理

四队比赛：若 A 队第一，则 B 或 C 获亚军；若 C 获亚军，则 A 不能第一；若 D 获亚军，则 B 不能获亚军；A 队第一。证明 D 不是亚军。

<details class="exam-answer">
<summary>查看答案</summary>

令 $A,B,C,D$ 分别表示相应名次事实。由 $A$ 与 $A\to(B\lor C)$ 得 $B\lor C$；由 $C\to\neg A$ 和 $A$ 得 $\neg C$；于是由析取三段论得 $B$。再由 $D\to\neg B$ 换位得 $B\to\neg D$，故 $\neg D$。

</details>

### 9. 命题公理证明

利用源题允许的定理，不使用演绎定理，证明

$$
\neg((Q\to R)\to R)\to\neg Q.
$$

<details class="exam-answer">
<summary>查看源证明思路</summary>

源答案先由公理与传递律得到

$$
Q\to((Q\to R)\to R),
$$

再用换位定理推出

$$
\neg((Q\to R)\to R)\to\neg Q.
$$

源文件列出九个中间式。

</details>

### 10. 谓词公理证明

源题给出前提

$$
\forall x(Q(x)\to\neg R(x)),\qquad
\forall x(Q(x)\lor P(x)),\qquad
\forall xR(x),
$$

要求在公理系统中推出 $\neg\forall xP(x)$。

<details class="exam-answer">
<summary>查看源答案</summary>

源答案逐一实例化三个全称前提：由 $R(x)$ 与 $Q(x)\to\neg R(x)$ 得 $\neg Q(x)$；再由 $Q(x)\lor P(x)$ 得 $P(x)$。不过该推导导向的是 $\forall xP(x)$，与 OCR 可辨认的结论否定号冲突。

因此这道题的现存题面与 15 步源证明无法同时成立，我不替源文件猜测应删哪一个否定号。

</details>
