---
title: "第 6 讲 · 解释、模型与谓词语义"
description: "用结构和赋值计算项与公式的语义，区分模型中为真、可满足、有效和重言式"
date: 2026-08-27
---

命题逻辑只需给命题变元赋 $0$ 或 $1$。谓词逻辑中的 $P(x)$、$f(x)$、常元 $c$ 都没有固定含义，所以必须先给出解释。

## 从结构到模型

给定一阶语言 $L$：

1. 选一个非空论域 $D$；
2. 每个常元 $c$ 指派为 $D$ 中对象 $c^I$；
3. 每个 $n$ 元函词 $f$ 指派为函数
   $f^I:D^n\to D$；
4. 每个 $n$ 元谓词 $P$ 指派为关系
   $P^I\subseteq D^n$。

论域与解释组成结构

$$
\mathcal S=\langle D,I\rangle.
$$

再给自由变元一个赋值

$$
\sigma:V\to D,
$$

便得到求值所需的模型

$$
\mathcal M=\langle\mathcal S,\sigma\rangle.
$$

## 项的语义

项最终指向论域中的一个对象：

$$
\llbracket c\rrbracket_{\mathcal M}=c^I,
$$

$$
\llbracket x\rrbracket_{\mathcal M}=\sigma(x),
$$

$$
\llbracket f(t_1,\ldots,t_n)\rrbracket_{\mathcal M}
=f^I(
\llbracket t_1\rrbracket_{\mathcal M},
\ldots,
\llbracket t_n\rrbracket_{\mathcal M}
).
$$

例如 $D=\mathbb N$，$c^I=1$，$f^I(a,b)=a+b$，且
$\sigma(x)=2$，则

$$
\llbracket f(x,c)\rrbracket_{\mathcal M}=2+1=3.
$$

## 原子公式与量词怎样取值

原子公式

$$
P(t_1,\ldots,t_n)
$$

为真，当且仅当项的取值组成的元组属于关系 $P^I$。

全称量词为真要求改动 $x$ 的每一种赋值都为真：

$$
\mathcal M\models\forall xA
\quad\Longleftrightarrow\quad
\mathcal M[x\mapsto d]\models A\ \text{for every }d\in D.
$$

存在量词只需一个见证：

$$
\mathcal M\models\exists xA
\quad\Longleftrightarrow\quad
\mathcal M[x\mapsto d]\models A\ \text{for some }d\in D.
$$

### 二元素模型算例

令

$$
D=\{a,b\},
$$

并规定

$$
P^I=\{a\},\qquad Q^I=\{b\}.
$$

则

$$
\exists xP(x)\land\exists xQ(x)
$$

为真，因为 $a$ 见证前者，$b$ 见证后者；但

$$
\exists x(P(x)\land Q(x))
$$

为假，因为没有同一个对象同时属于两个关系。

这个模型直接说明

$$
\exists xP(x)\land\exists xQ(x)
\not\equiv
\exists x(P(x)\land Q(x)).
$$

## 四个语义概念

- 在某个模型为真：只谈当前模型；
- 可满足：至少存在一个模型使公式为真；
- 有效或永真：每个模型都使公式为真；
- 永假或不可满足：没有模型使公式为真。

“在一个模型中为真”远弱于“有效”。例如 $\exists xP(x)$ 在 $P^I=D$ 的模型中为真，但在 $P^I=\varnothing$ 的模型中为假。

课件还区分**重言式**：若一个公式的永真性只来自命题联结词结构，把原子谓词整体当命题变元后仍是命题永真式，它就是重言式。所有重言式都有效，但有效式不一定是重言式。例如在非空论域约定下

$$
\forall xP(x)\to\exists xP(x)
$$

有效，其正确性还用到了量词和论域非空，并非只靠联结词。

## 谓词等值与逻辑推论

若每个模型中 $A,B$ 真值都相同，记

$$
A\equiv B.
$$

若每个满足前提集 $\Gamma$ 的模型都满足 $A$，记

$$
\Gamma\models A.
$$

与命题逻辑一样：

$$
\Gamma\models A
\quad\Longleftrightarrow\quad
\operatorname{Unsat}(\Gamma\cup\{\neg A\}).
$$

但谓词逻辑一般没有有限真值表可穷举所有模型。证明成立时要用语义定义、等值变换或后面的公理与归结法；证明不成立时，构造一个小反模型往往最省事。

## 高频量词等值式

$$
\neg\forall xA\equiv\exists x\neg A,
\qquad
\neg\exists xA\equiv\forall x\neg A.
$$

若 $x$ 不在 $B$ 中自由出现，则

$$
\forall x(A\land B)\equiv(\forall xA)\land B,
$$

$$
\exists x(A\lor B)\equiv(\exists xA)\lor B.
$$

而下面只有单向蕴涵，不能写成等值：

$$
\exists x(A\land B)
\models
(\exists xA)\land(\exists xB),
$$

$$
(\forall xA)\lor(\forall xB)
\models
\forall x(A\lor B).
$$

方向判断的关键始终是：量词两边是否必须使用同一个见证。
