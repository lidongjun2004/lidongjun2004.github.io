---
title: "第 8 讲 · 命题逻辑公理系统与形式证明"
description: "理解 Hilbert 公理系统、推演序列、MP 规则、演绎定理和反证方法，并能写出逐行证明"
date: 2026-08-27
---

语义证明问“为什么每个赋值下都成立”，公理证明问“能否只靠规定的符号规则把结论写出来”。公理证明故意不看命题的具体含义。

## 形式系统的组成

一个形式系统包含：

1. 初始符号；
2. 公式形成规则；
3. 公理或公理模式；
4. 推理规则。

命题逻辑 Hilbert 系统只使用 $\neg,\to$。其他联结词是缩写，例如

$$
P\lor Q:=\neg P\to Q,
$$

$$
P\land Q:=\neg(P\to\neg Q).
$$

## 三个公理模式和 MP

$$
\mathrm{A1}\quad R\to(Q\to R),
$$

$$
\mathrm{A2}\quad
(P\to(Q\to R))\to((P\to Q)\to(P\to R)),
$$

$$
\mathrm{A3}\quad
(\neg Q\to\neg R)\to(R\to Q).
$$

$P,Q,R$ 表示任意公式，所以每个模式代表无限多个公理实例。

分离规则 MP 是：

$$
Q,\quad Q\to R\quad\Longrightarrow\quad R.
$$

## 什么叫从前提集的推演

公式序列

$$
A_1,A_2,\ldots,A_n
$$

若每一项满足以下条件之一：

- 是公理实例；
- 属于前提集 $\Gamma$；
- 由前面两项通过 MP 得到；

并且 $A_n=Q$，就记

$$
\Gamma\vdash Q.
$$

证据必须逐行可检查。把“显然”“同理”当成推理规则是不合格的。

## 完整证明示例

从

$$
P,\qquad Q\to(P\to R)
$$

证明 $Q\to R$。

1. $P$，前提；
2. $P\to(Q\to P)$，A1；
3. $Q\to P$，由 1、2 MP；
4. $Q\to(P\to R)$，前提；
5.
   $$
   (Q\to(P\to R))\to((Q\to P)\to(Q\to R)),
   $$
   A2；
6. $(Q\to P)\to(Q\to R)$，由 4、5 MP；
7. $Q\to R$，由 3、6 MP。

这份证明不需要知道 $P,Q,R$ 各代表什么。

## 演绎定理

命题系统中

$$
\Gamma\cup\{A\}\vdash B
\quad\Longleftrightarrow\quad
\Gamma\vdash A\to B.
$$

它把一个临时前提移进结论的蕴涵前件。

例如要证

$$
\vdash(P\to(Q\to R))\to(Q\to(P\to R)),
$$

可以临时把 $P\to(Q\to R)$、$Q$、$P$ 当作前提，通过 MP 得到 $R$，再连续使用演绎定理把三个前提从后往前移入公式。

但考试若明确要求“只能用公理系统的公理和规则”，使用演绎定理可能被扣分；此时应展开成正式序列。

## 常用派生定理

这些公式在课件证明题中反复出现：

$$
\vdash Q\to Q,
$$

$$
\vdash(Q\to R)\to((P\to Q)\to(P\to R)),
$$

$$
\vdash(Q\to R)\to(\neg R\to\neg Q),
$$

$$
\vdash\neg\neg Q\to Q,
\qquad
\vdash Q\to\neg\neg Q.
$$

若题目允许引用已证定理，就应把复杂证明拆成这些模块。

例如从

$$
R\to\neg Q,\qquad P\to Q
$$

证明 $R\to\neg P$：

1. 由反置定理与 $P\to Q$ 得 $\neg Q\to\neg P$；
2. 再与 $R\to\neg Q$ 使用传递定理。

## 反证律与归谬律

若从 $\Gamma\cup\{\neg Q\}$ 能同时推出 $R$ 和 $\neg R$，则可推出 $Q$。若从 $\Gamma\cup\{Q\}$ 推出矛盾，则可推出 $\neg Q$。

这里“推出矛盾”仍要展示两个互相否定的公式怎样进入证明序列，不能只说“与常识矛盾”。

## 怎样检查一份公理证明

逐行问：

1. 若说是 A1、A2、A3，能否给出本行对应的 $P,Q,R$？
2. 若说由 MP 得到，前面是否真的同时出现 $A$ 和 $A\to B$？
3. 是否偷用了未证明的等值式？
4. 是否把语义符号 $\models$ 混进语法证明？

形式证明最怕“看着像对”。把证据写完整，机械检查反而比自然语言证明更稳。
