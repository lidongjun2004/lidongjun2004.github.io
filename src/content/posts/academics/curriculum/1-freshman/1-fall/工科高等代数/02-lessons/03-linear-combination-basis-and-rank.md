---
title: "第 3 讲 · 线性组合、基、坐标与秩"
description: "从张成空间理解线性相关，并把基、坐标变换与秩连成一条主线。"
date: 2026-08-27
---

解方程组告诉我们「系数能不能配出目标」，线性相关则把同一件事换成向量语言。基、坐标、秩都是从这个问题长出来的。

## 线性组合和张成空间

给定向量 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s$，形如

$$
k_1\boldsymbol\alpha_1+\cdots+k_s\boldsymbol\alpha_s
$$

的向量叫它们的线性组合。所有线性组合组成的集合记为

$$
\operatorname{span}\{\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s\}.
$$

它表示这组向量所能「覆盖」的全部方向。在 $\mathbb R^3$ 中，一个非零向量张成过原点的直线；两个不共线向量张成过原点的平面；三个不共面向量张成整个 $\mathbb R^3$。

## 线性相关到底在说什么

向量组线性相关，是指存在不全为零的系数，使

$$
k_1\boldsymbol\alpha_1+\cdots+k_s\boldsymbol\alpha_s=\boldsymbol0.
$$

等价地说，其中至少有一个向量可以由其余向量线性表出。「相关」就意味着有冗余信息；「无关」则意味着每个向量都带来一个新方向。

把向量排成列矩阵 $A=(\boldsymbol\alpha_1\ \cdots\ \boldsymbol\alpha_s)$，则

$$
\{\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s\}\text{ 线性无关}
\Longleftrightarrow
A\boldsymbol x=\boldsymbol0\text{ 只有零解}.
$$

这就把线性相关判定还原成了上一讲的高斯消元。

## 基是「没有冗余的完整生成集」

空间 $V$ 的一组基必须同时满足：

- 线性无关：没有冗余；
- 张成 $V$：没有遗漏。

一组基含有的向量个数叫空间的维数。有限维空间的所有基都有相同的向量个数，所以「维数」是空间本身的属性，不依赖选了哪组基。

实战中常用两种方法找基：

1. **从生成集里删冗余**：把向量做成列矩阵，行化简后取原矩阵中对应主元列的向量。
2. **把无关组扩充成基**：不断加入不在当前张成空间内的向量，直到数量达到维数。

注意：对列向量组求基时，不能直接把化简后的非零行当作原向量组的基。行变换保持列之间的相关关系，但改变了列向量本身；应用化简后的主元位置回原矩阵选列。

## 坐标是向量在一组基下的「配方」

若 $\mathcal B=(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_n)$ 是 $V$ 的基，每个 $\boldsymbol v\in V$ 都能唯一写成

$$
\boldsymbol v=x_1\boldsymbol\alpha_1+\cdots+x_n\boldsymbol\alpha_n.
$$

系数列向量 $[\boldsymbol v]_{\mathcal B}=(x_1,\ldots,x_n)^T$ 就是 $\boldsymbol v$ 在基 $\mathcal B$ 下的坐标。向量没变，变的只是描述它的语言。

设另一组基为 $\mathcal C=(\boldsymbol\beta_1,\ldots,\boldsymbol\beta_n)$，并有

$$
(\boldsymbol\beta_1\ \cdots\ \boldsymbol\beta_n)
=(\boldsymbol\alpha_1\ \cdots\ \boldsymbol\alpha_n)P.
$$

$P$ 的第 $j$ 列是 $\boldsymbol\beta_j$ 在基 $\mathcal B$ 下的坐标。对同一个向量，

$$
[\boldsymbol v]_{\mathcal B}=P[\boldsymbol v]_{\mathcal C},
\qquad
[\boldsymbol v]_{\mathcal C}=P^{-1}[\boldsymbol v]_{\mathcal B}.
$$

容易记反的原因，是把「新基用旧基表示」和「坐标从旧基换到新基」当成同一方向。只要回到上面两个基矩阵的等式，就不必死记。

## 秩：真正有效的方向数

向量组的秩是它的极大线性无关组所含向量的个数，也是它张成空间的维数。矩阵的列秩、行秩和阶梯形中非零行数相等，统称为 $\operatorname{rank}(A)$。

秩有三种互相等价的理解：

- 从列看：列向量真正提供了多少个独立方向；
- 从行看：方程组中真正有效的独立约束有多少个；
- 从线性映射看：输出空间实际有多少维。

一些常用不等式是

$$
\operatorname{rank}(A+B)\le \operatorname{rank}(A)+\operatorname{rank}(B),
$$

$$
\operatorname{rank}(AB)\le
\min\{\operatorname{rank}(A),\operatorname{rank}(B)\}.
$$

第二条的直觉是：$B$ 先把输入压到至多 $\operatorname{rank}(B)$ 维，$A$ 再处理时不可能把已丢失的方向凭空变回来。

## 完整算例：从生成集取基

设

$$
\boldsymbol a_1=\begin{pmatrix}1\\2\\1\end{pmatrix},
\quad
\boldsymbol a_2=\begin{pmatrix}2\\4\\2\end{pmatrix},
\quad
\boldsymbol a_3=\begin{pmatrix}1\\1\\0\end{pmatrix},
\quad
\boldsymbol a_4=\begin{pmatrix}3\\5\\2\end{pmatrix}.
$$

以它们为列组成矩阵，行化简可得主元列是第 $1,3$ 列。于是向量组的秩为 $2$，原向量中 $\boldsymbol a_1,\boldsymbol a_3$ 构成它张成空间的一组基。事实上

$$
\boldsymbol a_2=2\boldsymbol a_1,
\qquad
\boldsymbol a_4=2\boldsymbol a_1+\boldsymbol a_3,
$$

正好显示第 $2,4$ 列是冗余的。

## 易错点

- 「向量数量多于空间维数」一定相关；少于或等于维数时则不能仅凭数量判定。
- 线性相关时，可以保证「某个」向量能由其余向量表出，但不一定是题目指定的最后一个。
- 等价向量组只要张成相同空间，所含向量个数可以不同；若两组都是基，数量才必然相同。
- 线性无关组的任意子组仍无关；线性相关组再添向量仍相关。
