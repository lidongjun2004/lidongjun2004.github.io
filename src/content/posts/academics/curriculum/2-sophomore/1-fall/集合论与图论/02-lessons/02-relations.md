---
title: "第 2 讲 · 关系"
description: "从有序偶集合理解关系、闭包、等价类与偏序结构"
date: 2026-08-27
---

关系把“有关联”变成一个集合。设 $X,Y$ 是集合，只要 $R\subseteq X\times Y$，就称 $R$ 是从 $X$ 到 $Y$ 的关系；$(x,y)\in R$ 也写成 $xRy$。

## 关系本身就是有序偶的集合

关系的定义域和值域分别收集有序偶的第一、第二分量：

$$
\operatorname{dom}(R)=\{x\mid \exists y,(x,y)\in R\},
$$

$$
\operatorname{ran}(R)=\{y\mid \exists x,(x,y)\in R\}.
$$

在集合 $X$ 上，空关系是 $\varnothing$，恒等关系是 $I_X=\{(x,x)\mid x\in X\}$，全域关系是 $X\times X$。

## 复合、逆和幂都在追踪多步关系

若 $R\subseteq X\times Y$、$S\subseteq Y\times Z$，则复合关系满足：

$$
x(S\circ R)z
\iff \exists y\in Y, xRy\land ySz.
$$

要注意阅读方向：先走 $R$，再走 $S$。逆关系把每个有序偶翻转，$R^{-1}=\{(y,x)\mid(x,y)\in R\}$。在同一集合上的关系还可以定义 $R^0=I_X$、$R^{n+1}=R^n\circ R$，表示恰好经过 $n$ 步。

## 五种性质不要靠名字猜

| 性质 | 量化条件 | 直觉 |
|---|---|---|
| 自反 | $\forall x,xRx$ | 每个点有自环 |
| 反自反 | $\forall x,\neg xRx$ | 没有自环 |
| 对称 | $xRy\Rightarrow yRx$ | 每条边双向 |
| 反对称 | $xRy\land yRx\Rightarrow x=y$ | 不同点不能双向 |
| 传递 | $xRy\land yRz\Rightarrow xRz$ | 两步关系必须补成一步 |

由集合运算可得到方便的判据：

$$
R\text{ 对称}\iff R^{-1}=R,
$$

$$
R\text{ 反对称}\iff R\cap R^{-1}\subseteq I_X,
$$

$$
R\text{ 传递}\iff R\circ R\subseteq R.
$$

## 闭包是“最少补边”

闭包不是任意找一个具有目标性质的超关系，而是包含原关系的**最小**目标关系：

$$
r(R)=R\cup I_X,
$$

$$
s(R)=R\cup R^{-1},
$$

$$
t(R)=\bigcup_{n\geq1}R^n.
$$

若 $X$ 只有 $m$ 个元素，传递闭包只需考虑到 $R^m$。图上理解更直接：传递闭包把所有“可以经过若干步到达”的顶点对都补成关系。

## 等价关系等价于划分

自反、对称、传递的关系称为等价关系。元素 $x$ 的等价类为：

$$
[x]_R=\{y\in X\mid yRx\}.
$$

任意两个等价类要么相等，要么不相交；所有等价类合起来覆盖 $X$，因此构成划分。反过来，给定一个划分，也可以规定“两个元素落在同一块中”来构造等价关系。

## 偏序表达层次，不保证任意两点可比

自反、反对称、传递的关系称为偏序。集合包含、自然数整除都是典型例子。若 $x\preceq y$ 或 $y\preceq x$，二者可比；所有元素两两可比时才是全序。

还要区分四个概念：极小元上方没有更小的不同元素，但可能有多个；最小元小于等于所有元素，因此至多一个。极大元和最大元同理。良序则要求每个非空子集都有最小元，比全序更强。
