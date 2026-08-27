---
title: "第 8 讲：域、特征与单代数扩张"
description: "理解素域、最小多项式和商环如何构造域扩张。"
date: 2026-08-27
---

域 $F$ 的特征是使 $n\cdot1=0$ 的最小正整数；若不存在则为 0。域的特征只能是 0 或素数。特征 0 的域包含一份 $\mathbb Q$，特征 $p$ 的域包含一份 $\mathbb F_p$，它们是素域。

这里

$$
n\cdot1=\underbrace{1+\cdots+1}_{n\text{ 次}}.
$$

若最小的正整数 $n$ 合成，比如 $n=ab$ 且 $1<a,b<n$，则

$$
(a\cdot1)(b\cdot1)=n\cdot1=0,
$$

而两个因子都非零，这与域没有零因子矛盾。因此正特征一定是素数。

## 从整环构造分式域

整数嵌在有理数里，多项式环 $F[x]$ 嵌在有理函数域 $F(x)$ 里。课件把这两件事统一成“给整环补上除法”。

设 $R$ 是整环。先取所有分子、分母对

$$
R\times(R\setminus\{0\}),
$$

并规定

$$
(a,b)\sim(c,d)
\quad\Longleftrightarrow\quad
ad=bc.
$$

这正是通常判断 $a/b=c/d$ 的交叉相乘。等价类记作 $a/b$，再定义

$$
\frac ab+\frac cd=\frac{ad+bc}{bd},
\qquad
\frac ab\cdot\frac cd=\frac{ac}{bd}.
$$

若换用同一等价类的另一组代表元，结果仍落在同一个等价类中，所以运算是良定义的。这里必须要求 $R$ 没有零因子；证明等价关系的传递性和约分时，都要用到消去律。

零元和单位元分别是 $0/1$、$1/1$。当 $a\neq0$ 时，

$$
\left(\frac ab\right)^{-1}=\frac ba,
$$

因此这些等价类确实构成一个域，称为 $R$ 的分式域，记作 $\operatorname{Frac}(R)$。映射

$$
R\longrightarrow\operatorname{Frac}(R),
\qquad a\longmapsto\frac a1
$$

是单射，于是可以把 $R$ 直接看作这个域的子环。

这个构造在“保持 $R$ 不动”的意义下是唯一的：若某个域 $E$ 含有 $R$，并且 $E$ 的每个元素都能写成 $ab^{-1}$，那么

$$
\frac ab\longmapsto ab^{-1}
$$

给出 $\operatorname{Frac}(R)$ 到 $E$ 的同构。典型例子是

$$
\operatorname{Frac}(\mathbb Z)=\mathbb Q,
\qquad
\operatorname{Frac}(F[x])=F(x).
$$

$F(x)$ 的元素不是某一个固定多项式，而是有理函数 $p(x)/q(x)$，其中 $q(x)\neq0$；两组表示相等仍按 $p_1q_2=p_2q_1$ 判断。

域 $E$ 含有子域 $F$ 时，称 $E/F$ 为域扩张。$E$ 同时是 $F$ 上的线性空间，其维数记为

$$
[E:F]=\dim_F E,
$$

称为扩张次数。

## 添入一个代数元

若扩域 $E/F$ 中的 $\alpha$ 满足某个非零 $F$ 系数多项式，称 $\alpha$ 在 $F$ 上代数。在所有以 $\alpha$ 为根的非零 $F$ 系数多项式中，次数最低的首一多项式称为最小多项式 $m_\alpha(x)$。

若没有这样的非零多项式，$\alpha$ 就在 $F$ 上超越。$\sqrt2$ 在 $\mathbb Q$ 上代数，而 $\pi$ 在 $\mathbb Q$ 上超越。

最小多项式为什么必然不可约？若它能写成 $m_\alpha=gh$，代入 $\alpha$ 得 $g(\alpha)h(\alpha)=0$。域没有零因子，所以至少一个次数更低的因子也以 $\alpha$ 为根，这与次数最低矛盾。

代入同态

$$
F[x]\to E,\qquad f(x)\mapsto f(\alpha)
$$

的核是 $(m_\alpha)$，所以

$$
F(\alpha)\cong F[x]/(m_\alpha).
$$

若 $\deg m_\alpha=n$，则 $1,\alpha,\ldots,\alpha^{n-1}$ 是一组 $F$-基。所有高次幂都可用 $m_\alpha(\alpha)=0$ 降次。

### 例：$\mathbb Q(\sqrt2)$

$\sqrt2$ 在 $\mathbb Q$ 上的最小多项式是 $x^2-2$，所以

$$
\mathbb Q(\sqrt2)
=\{a+b\sqrt2:a,b\in\mathbb Q\},
$$

且 $[\mathbb Q(\sqrt2):\mathbb Q]=2$。乘法时只需用 $(\sqrt2)^2=2$ 降次：

$$
(a+b\sqrt2)(c+d\sqrt2)
=(ac+2bd)+(ad+bc)\sqrt2.
$$

非零元的逆可通过共轭直接写出：

$$
(a+b\sqrt2)^{-1}
=\frac{a-b\sqrt2}{a^2-2b^2}.
$$

分母不会为零；否则 $(a/b)^2=2$ 会让 $\sqrt2$ 成为有理数。

## 求逆元

要在 $F(\alpha)$ 中求 $g(\alpha)^{-1}$，对 $g(x)$ 与 $m_\alpha(x)$ 做扩展 Euclid：

$$
u(x)g(x)+v(x)m_\alpha(x)=1.
$$

代入 $\alpha$ 得 $u(\alpha)g(\alpha)=1$。如果手算规模很小，也可先设逆元为 $c_0+\cdots+c_{n-1}\alpha^{n-1}$，乘开降次后比较系数。

这也解释了为什么商环 $F[x]/(f)$ 只有在 $f$ 不可约时才是域。不可约保证任意不被 $f$ 整除的 $g$ 与 $f$ 互素，扩展 Euclid 才能给出逆元。

塔式公式

$$
[E:F]=[E:K][K:F]
$$

能快速判断中间域是否可能存在，也解释了有限域子域阶数为何受整除关系限制。

例如

$$
\mathbb Q\subseteq\mathbb Q(\sqrt2)
\subseteq\mathbb Q(\sqrt2,i).
$$

前一层次数为 $2$；$i\notin\mathbb Q(\sqrt2)$，后一层次数也为 $2$，所以总次数为 $4$。有限次扩张中的每个元素都必为代数元：$1,\alpha,\alpha^2,\ldots$ 不可能在线性空间里永远线性无关，某个有限线性关系就是 $\alpha$ 满足的多项式。

## 计算题的四步

1. 找到 $\alpha$ 的最小多项式，并证明不可约；
2. 写出基 $1,\alpha,\ldots,\alpha^{n-1}$；
3. 用 $m_\alpha(\alpha)=0$ 把乘积降到次数小于 $n$；
4. 求逆时用扩展 Euclid，或设一般低次多项式后比较系数。
