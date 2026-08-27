---
title: "第 2 讲：子群、元素的阶与循环群"
description: "用一个判据识别子群，并掌握循环群的生成元和全部子群。"
date: 2026-08-27
---

子群是沿用原群运算、自己也成群的子集。非空集合 $H\subseteq G$ 满足

$$
a,b\in H\Longrightarrow ab^{-1}\in H
$$

时，$H\le G$。这个判据一次同时完成封闭性与逆元检查；有限集合中也可只查乘法封闭。

为什么一个条件就够？先令 $a=b$，得到 $e=aa^{-1}\in H$；再令 $a=e$，得到 $b^{-1}\in H$；最后把判据中的 $b$ 换成 $b^{-1}$，就有 $ab\in H$。于是幺元、逆元和乘法封闭都齐了，结合律直接继承自 $G$。

若用加法记号，判据相应变成

$$
a,b\in H\Longrightarrow a-b\in H.
$$

例如 $m\mathbb Z$ 是 $(\mathbb Z,+)$ 的子群，因为两个 $m$ 的倍数之差仍是 $m$ 的倍数。

任意多个子群的交仍是子群；并通常不是。$2\mathbb Z\cup3\mathbb Z$ 同时含 $2,3$，却不含 $2+3=5$。包含子集 $A\subseteq G$ 的最小子群记为 $\langle A\rangle$，它等于所有包含 $A$ 的子群之交。

## 元素的阶

$a$ 生成的循环子群是 $\langle a\rangle=\{a^k:k\in\mathbb Z\}$。若最小正整数 $n$ 满足 $a^n=e$，则 $o(a)=n$；否则阶为无穷。若 $o(a)=n$，则

$$
o(a^k)=\frac{n}{\gcd(n,k)}.
$$

因此 $a^k$ 仍生成 $\langle a\rangle$，当且仅当 $\gcd(n,k)=1$。$n$ 阶循环群共有 $\varphi(n)$ 个生成元。

更一般地，若 $o(a)=n<\infty$，则

$$
a^r=a^s
\quad\Longleftrightarrow\quad
n\mid(r-s).
$$

这说明有限循环群中的指数计算，本质上就是模 $n$ 计算。以加法群 $\mathbb Z_{12}$ 为例，$[k]$ 的阶是

$$
o([k])=\frac{12}{\gcd(12,k)}.
$$

所以 $[4]$ 的阶为 $3$，而 $[5]$ 的阶为 $12$，是生成元。

若 $a,b$ 可交换且阶分别为有限数 $m,n$，总有

$$
o(ab)\mid\operatorname{lcm}(m,n).
$$

当 $\gcd(m,n)=1$ 时进一步有 $o(ab)=mn$。如果 $a,b$ 不交换，不能直接套这个结论。

## 循环群的子群

循环群的每个子群仍循环。若 $G=\langle a\rangle$ 且 $|G|=n$，则对每个 $d\mid n$，恰有一个 $d$ 阶子群：

$$
\left\langle a^{n/d}\right\rangle.
$$

这条唯一性特别有用：在任意群中，唯一的某阶子群必为正规子群；在循环群中所有子群都正规。

例如 $G=\langle a\rangle$、$|G|=12$。它的子群阶只能是 $1,2,3,4,6,12$，对应

$$
\langle a^{12}\rangle,
\langle a^6\rangle,
\langle a^4\rangle,
\langle a^3\rangle,
\langle a^2\rangle,
\langle a\rangle.
$$

这里 $\langle a^{12}\rangle=\{e\}$。若题目改问“阶为 $d$ 的元素有多少个”，答案不是一个，而是 $\varphi(d)$ 个；这些元素都在唯一的 $d$ 阶子群里。

## 常见错误

“$a^n=e$”只能说明 $o(a)\mid n$，不能直接断言 $o(a)=n$。证明一个元素的阶恰为 $n$，还要排除 $n$ 的所有真因子。

还要区分三句话：

- $|G|$ 是群中元素个数；
- $o(a)$ 是单个元素生成的循环子群大小；
- $[G:H]$ 是 $H$ 在 $G$ 中的指数。

有限群中由 Lagrange 定理有 $o(a)\mid|G|$，但“某个数整除 $|G|$”并不自动保证存在该阶元素。这个反向错误会在后面的陪集与 Sylow 题中反复出现。
