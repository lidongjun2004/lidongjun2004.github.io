---
title: "第 4 讲 · 完全集、主范式与逻辑推论"
description: "从真值表构造公式，掌握联结词完全集、主合取与主析取范式以及语义推论的判断"
date: 2026-08-27
---

这一讲把三块看似分散的内容串起来：真值表能构造公式，所以可以证明联结词集合是完备的；构造时得到的就是主析取范式；而判断推论又可以化成永真式或不可满足性问题。

## 什么是联结词完全集

若每个真值函数都能由联结词集合 $S$ 中的联结词定义，则称 $S$ 为完全集。

最常用的完全集包括：

$$
\{\neg,\land,\lor\},\qquad
\{\neg,\land\},\qquad
\{\neg,\lor\},\qquad
\{\neg,\to\}.
$$

以 $\{\neg,\land,\lor\}$ 为例，给定任意真值函数：

1. 为每个输出为 $1$ 的真值行写一个极小项；
2. 把这些极小项析取起来。

所得公式只使用 $\neg,\land,\lor$，并且与原真值函数完全相同，因此该集合完备。

若一个完全集删掉任何一个联结词后都不再完备，就叫极小完全集。“极小”是对包含关系而言，不是说联结词数量一定最少。

### 与非和或非

与非、或非定义为

$$
p\uparrow q=\neg(p\land q),
$$

$$
p\downarrow q=\neg(p\lor q).
$$

单独一个与非就能定义否定和合取：

$$
\neg p=p\uparrow p,
$$

$$
p\land q=(p\uparrow q)\uparrow(p\uparrow q).
$$

所以 $\{\uparrow\}$ 是完全集。同理 $\{\downarrow\}$ 也是完全集。这正是数字电路里 NAND、NOR 通用性的逻辑基础。

## 范式的层次

命题变元或其否定叫文字。

- 文字的析取叫简单析取式；
- 文字的合取叫简单合取式；
- 简单析取式的合取叫合取范式 CNF；
- 简单合取式的析取叫析取范式 DNF。

一个公式可能同时是 CNF 和 DNF。例如 $p\land q$：

- 它是一个简单合取式，所以也是只有一项的 DNF；
- 把 $p,q$ 各看成只有一个文字的简单析取式，它又是 CNF。

## 主范式

关于 $p_1,\ldots,p_n$ 的极小项必须让每个变量恰好出现一次，形式是文字的合取；极大项则是每个变量恰好出现一次的文字析取。

构造规则：

- 真值行中变量为 $1$，极小项取变量本身；为 $0$，取否定；
- 真值行中变量为 $0$，极大项取变量本身；为 $1$，取否定。

这保证极小项只在对应行取 $1$，极大项只在对应行取 $0$。

### 完整算例

求

$$
A=(p\to q)\land(p\to r)
$$

的主范式。先化简：

$$
A=(\neg p\lor q)\land(\neg p\lor r).
$$

当 $p=0$ 时公式恒真；当 $p=1$ 时要求 $q=r=1$。所以真值为 $1$ 的行是

$$
000,\ 001,\ 010,\ 011,\ 111.
$$

主析取范式为

$$
\begin{aligned}
&(\neg p\land\neg q\land\neg r)
\lor(\neg p\land\neg q\land r)\\
&\lor(\neg p\land q\land\neg r)
\lor(\neg p\land q\land r)
\lor(p\land q\land r).
\end{aligned}
$$

其余三行 $100,101,110$ 为假，主合取范式为

$$
(\neg p\lor q\lor r)
\land(\neg p\lor q\lor\neg r)
\land(\neg p\lor\neg q\lor r).
$$

## 逻辑推论

若每个满足 $\Gamma$ 中全部公式的赋值也满足 $B$，记为

$$
\Gamma\models B.
$$

三条高频定理是：

$$
A_1,\ldots,A_n\models B
\quad\Longleftrightarrow\quad
\models(A_1\land\cdots\land A_n)\to B,
$$

$$
A\equiv B
\quad\Longleftrightarrow\quad
A\models B\ \text{and}\ B\models A,
$$

$$
\Gamma\models B
\quad\Longleftrightarrow\quad
\operatorname{Unsat}(\Gamma\cup\{\neg B\}).
$$

### 证明与反例

判断

$$
p\lor q,\ \neg p\models q.
$$

若前提全真，则 $p\lor q=1$ 且 $p=0$，只能有 $q=1$，所以推论成立。

判断

$$
p\lor q,\ p\to q,\ q\models p.
$$

取 $p=0,q=1$，三个前提全真而结论为假，因此推论不成立。

## 数字电路只是主范式的应用

真值表每个输出列都是一个真值函数。把输出为 $1$ 的行写成极小项并析取，就得到电路的主析取范式。

三输入全加器的和位为

$$
S=A\oplus B\oplus C_{\mathrm{in}},
$$

进位位为

$$
C_{\mathrm{out}}
=(A\land B)\lor(A\land C_{\mathrm{in}})
\lor(B\land C_{\mathrm{in}}).
$$

译码器、多路选择器和加法器题本质相同：不要先猜化简式，先严格按真值行写主范式，再按需要化简。
