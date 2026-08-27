---
title: "第 10 讲 · 命题归结法与反驳"
description: "把语义推论化为不可满足性，掌握子句、归结子句、空子句和命题归结反驳"
date: 2026-08-27
---

归结法把证明统一成一个目标：从前提与否定结论构成的子句集中推出空子句。

## 为什么要否定结论

$$
\Gamma\models R
$$

成立，当且仅当

$$
\Gamma\cup\{\neg R\}
$$

不可满足。若假设前提全真而结论为假会导致矛盾，原推论就成立。

## 文字、子句和空子句

原子公式或其否定叫文字。文字的析取叫子句：

$$
p\lor\neg q\lor r.
$$

空子句记为

$$
\square.
$$

它没有任何文字，因此不可能被任何赋值满足，相当于“假”。

## 归结规则

若两个子句分别含互补文字 $q$ 与 $\neg q$：

$$
C_1=q\lor P,
$$

$$
C_2=\neg q\lor Q,
$$

则可推出归结子句

$$
P\lor Q.
$$

直觉是：若 $q=0$，第一子句必须靠 $P$ 为真；若 $q=1$，第二子句必须靠 $Q$ 为真，因此无论哪种情况，$P\lor Q$ 都真。

归结子句是父子句的逻辑推论。

## 标准解题流程

证明

$$
\Gamma\models R
$$

时：

1. 写出 $\Gamma\land\neg R$；
2. 消去 $\to,\leftrightarrow$；
3. 推进否定并化为 CNF；
4. 把每个简单析取式放入子句集；
5. 连续归结，直到得到 $\square$。

若推不出空子句，不代表推论一定不成立；可能只是归结路线没选好。但命题归结法是完备的：不可满足子句集一定存在某个归结反驳。

## 完整算例

证明

$$
P\to(Q\land R)
\models
(P\to Q)\land(P\to R).
$$

加入否定结论：

$$
(P\to(Q\land R))
\land
\neg\bigl((P\to Q)\land(P\to R)\bigr).
$$

前提化为

$$
(\neg P\lor Q)\land(\neg P\lor R).
$$

否定结论：

$$
\neg(P\to Q)\lor\neg(P\to R)
\equiv
(P\land\neg Q)\lor(P\land\neg R).
$$

分配整理后，可按分支理解；也可以直接证明两个结论分别成立。对子句反驳的一条路线是选择否定合取后的 CNF 表达，得到等价子句并归结。

更直观地分两种可能：

- 若 $\neg(P\to Q)$，则有 $P$ 与 $\neg Q$；
- 若 $\neg(P\to R)$，则有 $P$ 与 $\neg R$。

第一种与 $\neg P\lor Q$ 归结出矛盾；第二种与 $\neg P\lor R$ 归结出矛盾。因此否定结论的每个分支都不可满足，原结论成立。

再看一个直接的子句序列。证明

$$
P\land Q\to R
\models
(P\to R)\lor(Q\to R).
$$

前提是子句

$$
\neg P\lor\neg Q\lor R.
$$

否定结论：

$$
\neg\bigl((\neg P\lor R)\lor(\neg Q\lor R)\bigr)
\equiv
P\land Q\land\neg R.
$$

子句集为

$$
\Omega=
\{\neg P\lor\neg Q\lor R,\ P,\ Q,\ \neg R\}.
$$

归结：

$$
\neg P\lor\neg Q\lor R,\ P
\Longrightarrow
\neg Q\lor R,
$$

$$
\neg Q\lor R,\ Q
\Longrightarrow
R,
$$

$$
R,\ \neg R
\Longrightarrow
\square.
$$

## 常见错误

### 没有先化成子句

$P\land Q$ 不是一个子句，应拆成两个子句 $P$ 与 $Q$。

### 一次消掉多个互补对

归结规则一次选一对互补文字。若两个父子句含多对互补文字，随意全部消去可能得到并非逻辑推论的式子。

### 忘了否定结论

直接把结论塞进子句集，推出空子句只说明“前提加结论”矛盾，方向完全反了。

### 把公式等值与子句推出混用

化 CNF 时用等值变换；进入子句集后，每一步应写归结父子句与所得子句。两种阶段的规则不同。
