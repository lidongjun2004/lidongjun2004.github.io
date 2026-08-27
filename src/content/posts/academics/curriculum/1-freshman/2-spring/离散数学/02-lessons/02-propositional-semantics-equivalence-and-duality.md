---
title: "第 3 讲 · 命题语义、等值演算与对偶"
description: "理解真值赋值、公式分类、等值演算、代换定理和对偶定理，并能用它们完成证明"
date: 2026-08-27
---

命题公式的语法只回答“是不是合法公式”，语义才回答“值是多少”。

## 真值赋值递归地解释公式

真值赋值 $v$ 先给每个命题变元指定 $0$ 或 $1$，然后按联结词真值函数递归扩展：

$$
v(\neg A)=\neg v(A),
$$

$$
v(A\land B)=v(A)\land v(B),
$$

其他联结词同理。

只要两个赋值在公式出现的全部命题变元上相同，它们对该公式的取值就相同。公式不关心没有出现的变量。

### 完整算例

判断

$$
A=p\to(q\to r)
$$

何时为假。蕴涵为假要求

$$
p=1,\qquad q\to r=0.
$$

第二个条件又要求 $q=1,r=0$，所以 $A$ 只有在

$$
(p,q,r)=(1,1,0)
$$

时为假，其余赋值均为真。无需写八行真值表也能得到结论。

## 可满足、永真和永假

给定公式 $A$：

- 若存在 $v$ 使 $v(A)=1$，则 $A$ 可满足；
- 若每个 $v$ 都使 $v(A)=1$，则 $A$ 永真；
- 若每个 $v$ 都使 $v(A)=0$，则 $A$ 永假。

永真式是可满足式的特殊情况。永假式才与可满足式互斥。

要证明永真，必须覆盖所有赋值；要证明不是永真，只需一个使其为假的赋值。要证明可满足，也只需一个使其为真的赋值。

## 等值不是同一个公式

若对每个赋值都有

$$
v(A)=v(B),
$$

记为

$$
A\equiv B.
$$

$A\equiv B$ 是对两个公式关系的陈述；$A\leftrightarrow B$ 是一个新的公式。二者关系是：

$$
A\equiv B
\quad\Longleftrightarrow\quad
\models A\leftrightarrow B.
$$

### 常用等值模式

除交换、结合、分配、吸收律外，至少要熟记：

$$
\neg\neg A\equiv A,
$$

$$
A\to B\equiv\neg A\lor B,
$$

$$
\neg(A\land B)\equiv\neg A\lor\neg B,
$$

$$
\neg(A\lor B)\equiv\neg A\land\neg B,
$$

$$
A\leftrightarrow B
\equiv(A\to B)\land(B\to A).
$$

例如：

$$
\begin{aligned}
(p\to r)\land(q\to r)
&\equiv(\neg p\lor r)\land(\neg q\lor r)\\
&\equiv(\neg p\land\neg q)\lor r\\
&\equiv\neg(p\lor q)\lor r\\
&\equiv(p\lor q)\to r.
\end{aligned}
$$

每一步都替换了一个已知等值子公式，因此整体等值。

## 代换定理告诉我们模式可以复用

若 $A(p_1,\ldots,p_n)$ 是永真式，把其中命题变元同时代换为任意公式，所得代换实例仍是永真式。

例如

$$
p\to(q\to p)
$$

永真，因此把 $p$ 换成 $R\land S$、把 $q$ 换成 $T\lor U$ 后，

$$
(R\land S)\to((T\lor U)\to(R\land S))
$$

仍永真。

这也是“公理模式”而非“单个公理”的直觉来源。

## 对偶式怎样构造

对由

$$
\{0,1,\neg,\land,\lor\}
$$

生成的公式，交换

$$
0\leftrightarrow1,\qquad
\land\leftrightarrow\lor,
$$

保持命题变元和否定不变，得到对偶式 $A^*$。

例如

$$
A=(p\lor\neg q\lor0)\land r\land1
$$

的对偶式为

$$
A^*=(p\land\neg q\land1)\lor r\lor0.
$$

对偶两次回到原式：

$$
(A^*)^*=A.
$$

### 对偶定理

若

$$
A\equiv B,
$$

则

$$
A^*\equiv B^*.
$$

例如从分配律

$$
p\lor(q\land r)
\equiv
(p\lor q)\land(p\lor r)
$$

立即得到其对偶：

$$
p\land(q\lor r)
\equiv
(p\land q)\lor(p\land r).
$$

注意：一般不能说 $A$ 与 $A^*$ 的真值总相反。对偶性质需要配合“相反赋值”，或用于把一个等值式整体转换成另一个等值式。
