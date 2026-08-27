---
title: "第 1 讲 · 集合"
description: "理解集合的表示、运算与关系，并掌握计数、幂集和笛卡尔积"
date: 2026-08-27
---

集合把一批能够明确区分的对象视为整体。它的价值不只是写大括号，而是把“且、或、非”和计数问题变成可运算的对象。

## 从属于关系开始

$x\in A$ 表示对象 $x$ 是集合 $A$ 的元素。集合可以用两种方式定义：

- **外延法**枚举所有元素，例如 $A=\{1,2,3\}$；
- **内涵法**给出判定性质，例如 $A=\{x\in\mathbb Z\mid x^2<10\}$。

内涵法中的性质必须明确它在哪个论域里判断。直接把“所有不属于自身的集合”收成一个集合会产生罗素悖论，说明并非任意描述都能无条件定义集合。

两个集合相等，当且仅当它们包含相同元素。$A\subseteq B$ 表示 $A$ 的每个元素都在 $B$ 中；若还满足 $A\ne B$，则 $A$ 是 $B$ 的真子集。

## 集合运算就是逻辑运算

对任意对象 $x$：

$$
\begin{aligned}
x\in A\cup B &\iff x\in A\lor x\in B,\\
x\in A\cap B &\iff x\in A\land x\in B,\\
x\in A-B &\iff x\in A\land x\notin B,\\
x\in A\triangle B &\iff (x\in A)\oplus(x\in B).
\end{aligned}
$$

若全集为 $U$，补集 $\overline A=U-A$。德摩根律就是把命题逻辑中的否定推进括号：

$$
\overline{A\cup B}=\overline A\cap\overline B,
\qquad
\overline{A\cap B}=\overline A\cup\overline B.
$$

交换律、结合律、分配律和吸收律都可以用“任取 $x$，比较两边成员条件”证明。例如：

$$
x\in A\cup(A\cap B)
\iff (x\in A)\lor[(x\in A)\land(x\in B)]
\iff x\in A.
$$

因此 $A\cup(A\cap B)=A$。

## 计数时先减去重复部分

有限集合的基数记为 $|A|$。两个集合相加时，交集被算了两次，所以：

$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$

三个集合继续使用包含—排斥：先加单集合，减去两两交集，再把被多减的三者交集加回来。

## 空集、全集与幂集

空集 $\varnothing$ 不含元素，却是每个集合的子集。幂集 $\mathcal P(A)$ 收集 $A$ 的所有子集。

若 $|A|=n$，每个元素都有“选入/不选入”两种独立选择，因此：

$$
|\mathcal P(A)|=2^n.
$$

可以把子集编码成 $n$ 位二进制串。例如 $A=\{a,b,c\}$，编码 $101$ 表示子集 $\{a,c\}$。这同时给出了生成幂集的算法。

## 笛卡尔积把对象组成有序对

$$
A\times B=\{(a,b)\mid a\in A,b\in B\}.
$$

若 $A,B$ 有限，则 $|A\times B|=|A||B|$。有序对看顺序，所以通常 $A\times B\ne B\times A$。后面的关系就是笛卡尔积的子集，函数又是关系中满足额外条件的一类；这就是本章和后续内容的接口。
