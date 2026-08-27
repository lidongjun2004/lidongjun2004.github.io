---
title: "第 6 讲：正规子群、商群与同态定理"
description: "解释为什么只有正规子群能取商，并用核与像识别同构。"
date: 2026-08-27
---

若想在陪集上规定 $(gN)(hN)=ghN$，更换代表元后结果必须不变。这恰好要求

$$
gNg^{-1}=N\quad(\forall g\in G),
$$

即 $N\trianglelefteq G$。此时所有陪集组成商群 $G/N$，自然投影 $\pi(g)=gN$ 是满同态，核为 $N$。

正规性有多种等价写法：

$$
N\trianglelefteq G
\quad\Longleftrightarrow\quad
gN=Ng\quad(\forall g\in G)
$$

$$
\Longleftrightarrow
gNg^{-1}=N\quad(\forall g\in G).
$$

做题时可按信息选最省力的一条。交换群中左右陪集天然相同，所以所有子群都正规；任意指数为 $2$ 的子群也正规，因为左右两边都只有“子群本身”和“另一个陪集”两块。

正规不等于“群内交换”。$A_3\trianglelefteq S_3$，但 $S_3$ 不是交换群。正规表达的是子群在共轭下整体不变，并不要求其中每个元素固定不动。

## 为什么非正规子群不能取商

若把代表元 $g,h$ 分别换成 $gn_1,hn_2$，乘积变成

$$
(gn_1)(hn_2)=gh(h^{-1}n_1h)n_2.
$$

要使它仍落在 $ghN$ 中，必须保证 $h^{-1}n_1h\in N$。这正是共轭不变条件。商群存在不是记号上的约定，而是陪集乘法良定义后的结果。

两个基本例子是

$$
\mathbb Z/n\mathbb Z\cong\mathbb Z_n
$$

以及由符号同态得到的

$$
S_n/A_n\cong\{1,-1\}\cong\mathbb Z_2.
$$

## 同态的核与像

群同态 $\varphi:G\to H$ 满足 $\varphi(ab)=\varphi(a)\varphi(b)$。它自动保持幺元、逆元和整数次幂。核 $\ker\varphi$ 是 $G$ 的正规子群，像 $\operatorname{Im}\varphi$ 是 $H$ 的子群。

几个判断可以直接读核与像：

$$
\varphi\text{ 单射}
\Longleftrightarrow
\ker\varphi=\{e\},
$$

$$
\varphi\text{ 满射}
\Longleftrightarrow
\operatorname{Im}\varphi=H.
$$

例如行列式

$$
\det:GL_n(\mathbb R)\to\mathbb R^\times
$$

是满同态，核为 $SL_n(\mathbb R)$，于是

$$
GL_n(\mathbb R)/SL_n(\mathbb R)
\cong\mathbb R^\times.
$$

同态基本定理给出

$$
G/\ker\varphi\cong\operatorname{Im}\varphi.
$$

证明两个群同构的常见路线因此是：构造一个容易理解的满同态，核正好是希望除掉的冗余。

这一定理背后的映射是

$$
\bar\varphi:G/\ker\varphi
\longrightarrow\operatorname{Im}\varphi,
\qquad
g\ker\varphi\longmapsto\varphi(g).
$$

若两个代表元相差一个核元素，它们的像相同，所以映射良定义；反过来，像相同又说明二者相差核元素，所以它还是单射。

还常用两条同构定理：若 $H\le G,K\trianglelefteq G$，则

$$
HK/K\cong H/(H\cap K);
$$

若 $N\trianglelefteq G$、$K\trianglelefteq G$ 且 $N\le K$，则

$$
(G/N)/(K/N)\cong G/K.
$$

每次写商群之前，都要明确分母正规于谁；这不是形式要求，而是运算良定义的条件。

第一条可由乘积同态理解。定义

$$
\psi:H\to HK/K,
\qquad h\mapsto hK,
$$

则 $\ker\psi=H\cap K$，像为 $HK/K$。第二条则说明：先除掉 $N$，再除掉 $K/N$，等价于一次除掉 $K$。

解题时不要从结论硬猜同构。先回答三件事通常就够了：自然映射是什么、核是什么、像是什么。
