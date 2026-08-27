---
title: "第 7 讲 · 前束范式、Skolem 化与逻辑表达"
description: "按安全换名、量词外提和 Skolem 化的完整流程改写谓词公式，并理解其在数学与数据库中的表达"
date: 2026-08-27
---

前束范式的目标不是把量词“看起来整齐”，而是把量词依赖关系显式排成一个序列，为公理证明和归结法做准备。

## 前束范式

形如

$$
Q_1x_1Q_2x_2\cdots Q_nx_n\,M
$$

的公式叫前束范式，其中 $Q_i\in\{\forall,\exists\}$，而母式 $M$ 不含量词。

任意一阶公式都与某个前束范式逻辑等值，但前束范式通常不唯一。

## 变换的安全顺序

### 第一步：消去复杂联结词

$$
A\to B\equiv\neg A\lor B,
$$

$$
A\leftrightarrow B
\equiv
(A\to B)\land(B\to A).
$$

### 第二步：把否定推进原子公式

用 De Morgan 律和量词否定律：

$$
\neg\forall xA\equiv\exists x\neg A,
$$

$$
\neg\exists xA\equiv\forall x\neg A.
$$

### 第三步：标准换名

不同量词不要重复绑定同一个字母，也不要与自由变元重名。

例如

$$
\forall xP(x)\lor\exists xQ(x,y)
$$

先改为

$$
\forall uP(u)\lor\exists vQ(v,y).
$$

换名只改受该量词约束的出现。

### 第四步：量词外提

若 $x$ 不在 $B$ 中自由出现，则可以使用：

$$
(\forall xA)\lor B
\equiv
\forall x(A\lor B),
$$

$$
(\exists xA)\land B
\equiv
\exists x(A\land B).
$$

变量自由出现条件不能省。若 $x$ 在 $B$ 中自由出现，外提会改变原来自由变量的含义。

## 完整算例

把

$$
\forall x\left(
A(x)\to
\bigl(\exists zB(z)\to\exists yC(x,y)\bigr)
\right)
$$

化为前束范式。

先消蕴涵：

$$
\forall x\left(
\neg A(x)\lor
\neg\exists zB(z)\lor
\exists yC(x,y)
\right).
$$

推进否定：

$$
\forall x\left(
\neg A(x)\lor
\forall z\neg B(z)\lor
\exists yC(x,y)
\right).
$$

$z,y$ 不在其他部分自由出现，可以外提：

$$
\forall x\forall z\exists y\,
\bigl(
\neg A(x)\lor\neg B(z)\lor C(x,y)
\bigr).
$$

量词次序来自原公式的依赖关系，不能为了美观随意交换 $\forall z$ 与 $\exists y$。

## 无存在前束范式与 Skolem 范式

对前束范式，从左到右消去存在量词。

### 不依赖前面的全称变量

$$
\exists y\forall x\,P(x,y)
$$

用新常元 $c$ 替换 $y$：

$$
\forall xP(x,c).
$$

### 依赖前面的全称变量

$$
\forall x\exists y\,P(x,y)
$$

$y$ 可以随 $x$ 改变，所以要用新函数 $f(x)$：

$$
\forall xP(x,f(x)).
$$

若前面是 $\forall x\forall z$，则新函数必须允许依赖二者：

$$
y=f(x,z).
$$

Skolem 化保持可满足性，而非一般的逻辑等值。新常元或新函数扩展了语言，因此不要写

$$
A\equiv A_{\mathrm{Skolem}}.
$$

正确说法是：

$$
\operatorname{Sat}(A)
\quad\Longleftrightarrow\quad
\operatorname{Sat}(A_{\mathrm{Skolem}}).
$$

## 数学定义怎样写成谓词公式

序列 $x_n$ 收敛到 $b$：

$$
\forall\varepsilon\left(
\varepsilon>0\to
\exists N\left(
N>0\land
\forall n(n>N\to|x_n-b|<\varepsilon)
\right)
\right).
$$

连续、极限和可导的表达都遵循同一顺序：

1. “任意精度”对应 $\forall\varepsilon$；
2. “可以找到控制量”对应 $\exists\delta$ 或 $\exists N$；
3. “此后所有输入都满足误差界”对应内部的 $\forall$。

把 $\forall\varepsilon$ 与 $\exists\delta$ 交换，就从“每个精度可选不同控制量”变成“存在一个控制量对所有精度都有效”，含义完全不同。

## 关系数据库中的逻辑

关系模式中的函数依赖

$$
X\to Y
$$

不是命题联结词蕴涵，而是在说：任意两条元组只要在属性集 $X$ 上相等，就必须在 $Y$ 上相等。

可写为

$$
\forall t_1\forall t_2
\bigl(
t_1[X]=t_2[X]\to t_1[Y]=t_2[Y]
\bigr).
$$

这说明数据库依赖只是谓词逻辑能表达的一类特殊约束。理解量词和关系后，键、依赖和一致性约束就不再只是数据库里的孤立规则。
