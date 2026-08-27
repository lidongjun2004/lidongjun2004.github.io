---
title: "第 2 讲 · 线性方程组与高斯消元"
description: "用增广矩阵、初等行变换和秩判定唯一解、无穷多解与无解。"
date: 2026-08-27
---

线性代数的第一条主线，是把「解一堆方程」变成「对一张数表做规则化操作」。这张数表就是增广矩阵，这套操作就是高斯消元。

## 从方程到增广矩阵

方程组

$$
\begin{cases}
a_{11}x_1+\cdots+a_{1n}x_n=b_1,\\
\qquad\vdots\\
a_{m1}x_1+\cdots+a_{mn}x_n=b_m
\end{cases}
$$

可写成 $A\boldsymbol x=\boldsymbol b$，并用增广矩阵 $[A\mid\boldsymbol b]$ 保存全部信息。对方程做以下三种操作不改变解集：

1. 交换两个方程；
2. 一个方程乘以非零数；
3. 把一个方程的倍数加到另一个方程。

在矩阵上，它们就是三种初等行变换。只做行变换的原因也在这里：每一行对应一个方程，行操作有明确的同解保证。

## 行阶梯形在告诉我们什么

通过消元把增广矩阵化成行阶梯形：每个非零行的首个非零元比上一行更靠右，零行全在最下面。首个非零元所在的列是主元列，对应变量叫主元变量；剩下的是自由变量。

化完后只有三种情况：

| 阶梯形特征 | 解的情况 |
|---|---|
| 出现 $[0\ \cdots\ 0\mid c]$ 且 $c\ne0$ | 无解 |
| 无矛盾行，且每个未知量列都有主元 | 唯一解 |
| 无矛盾行，且至少有一个自由变量 | 无穷多解 |

这又可用秩语言统一表达。设 $A$ 有 $n$ 列：

$$
\begin{aligned}
\operatorname{rank}(A)&<\operatorname{rank}([A\mid\boldsymbol b]) &&\Longrightarrow \text{无解},\\
\operatorname{rank}(A)&=\operatorname{rank}([A\mid\boldsymbol b])=n &&\Longrightarrow \text{唯一解},\\
\operatorname{rank}(A)&=\operatorname{rank}([A\mid\boldsymbol b])<n &&\Longrightarrow \text{无穷多解}.
\end{aligned}
$$

## 完整算例

解

$$
\begin{cases}
x+2y-z=1,\\
2x+5y+z=4,\\
x+3y+2z=3.
\end{cases}
$$

对增广矩阵做行变换：

$$
\left[
\begin{array}{ccc|c}
1&2&-1&1\\
2&5&1&4\\
1&3&2&3
\end{array}
\right]
\xrightarrow{R_2-2R_1,\ R_3-R_1}
\left[
\begin{array}{ccc|c}
1&2&-1&1\\
0&1&3&2\\
0&1&3&2
\end{array}
\right]
\xrightarrow{R_3-R_2}
\left[
\begin{array}{ccc|c}
1&2&-1&1\\
0&1&3&2\\
0&0&0&0
\end{array}
\right].
$$

没有矛盾行，但只有两个主元，所以取 $z=t$ 为自由变量。第二行给出 $y=2-3t$，第一行给出 $x=-3+5t$。通解是

$$
\begin{pmatrix}x\\y\\z\end{pmatrix}
=
\begin{pmatrix}-3\\2\\0\end{pmatrix}
+t\begin{pmatrix}5\\-3\\1\end{pmatrix},
\qquad t\in\mathbb R.
$$

这个形式已经暗示了后面的「解集结构」：非齐次方程的全部解等于一个特解，加上对应齐次方程的全部解。

## 带参数方程组的做法

带参数时，不要过早用含参数的量去除一行，因为它可能为 $0$。更稳定的流程是：

1. 优先使用常数主元消元；
2. 把最后几行写成「参数因子×未知量 = 参数常数」；
3. 以这些因子是否为 $0$ 分情况；
4. 每一种情况重新检查系数秩和增广秩。

「行列式为零」只能说明方阵不可逆，不能直接断言非齐次方程无解或有无穷多解；这两种情况必须看增广秩。

## 齐次方程的特别之处

$A\boldsymbol x=\boldsymbol0$ 总有零解，所以只会是「仅零解」或「有非零解」：

$$
A\boldsymbol x=\boldsymbol0\text{ 有非零解}
\Longleftrightarrow
\operatorname{rank}(A)<n.
$$

当 $A$ 是 $n$ 阶方阵时，这还等价于 $\det A=0$。但当 $A$ 是矩形矩阵时，行列式根本没有定义，必须回到秩判定。

## 易错点

- 对增广矩阵做行变换时，等号右边的增广列也必须一起变。
- 「未知量个数多于方程个数」能保证齐次方程有非零解，但不能保证任意非齐次方程有解。
- 基础解系中向量的个数是 $n-\operatorname{rank}(A)$，不是方程个数减秩。
- 行初等变换保持齐次方程的解集；列变换会改变变量的含义，不能在求原方程解时随意做。
