---
title: "第 9 讲 · 协方差、相关与条件期望"
description: "理解随机变量之间的线性关系，掌握协方差矩阵、条件分布、条件期望与随机和公式"
date: 2026-08-27
---

联合分布保存了变量之间的全部关系，但常常太复杂。协方差和相关系数提取线性关系，条件分布与条件期望则回答“知道一个变量以后，另一个变量怎样变化”。

## 1. 随机向量函数的期望

离散型 $(X,Y)$ 的联合分布列为 $p_{ij}$ 时，

$$
E[g(X,Y)]=\sum_i\sum_jg(x_i,y_j)p_{ij}.
$$

连续型联合密度为 $f(x,y)$ 时，

$$
E[g(X,Y)]=\iint g(x,y)f(x,y)\,dx\,dy.
$$

无需先求 $g(X,Y)$ 的分布。这是多维 LOTUS。

### 例：单位线段上两点的平均距离

若 $X,Y$ 独立且都服从 $U(0,1)$，则

$$
E|X-Y|
=2\int_0^1\int_0^x(x-y)\,dy\,dx
=\frac13.
$$

乘 2 是利用主对角线两侧对称。

## 2. 协方差

定义

$$
\operatorname{Cov}(X,Y)
=E[(X-E X)(Y-E Y)]
=E(XY)-E(X)E(Y).
$$

它表示两个变量相对各自均值是否倾向于同方向变化。

基本性质：

$$
\operatorname{Cov}(X,X)=\operatorname{Var}(X),
$$

$$
\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X),
$$

$$
\operatorname{Cov}(aX+b,cY+d)=ac\operatorname{Cov}(X,Y).
$$

线性组合方差：

$$
\operatorname{Var}(aX+bY)
=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)
+2ab\operatorname{Cov}(X,Y).
$$

更一般地，

$$
\operatorname{Var}\left(\sum_iX_i\right)
=\sum_i\operatorname{Var}(X_i)
+2\sum_{i<j}\operatorname{Cov}(X_i,X_j).
$$

若变量两两不相关，交叉项才消失。独立推出不相关（在二阶矩存在时），反向一般不成立。

## 3. 相关系数

若 $\sigma_X,\sigma_Y>0$，定义

$$
\rho_{XY}=
\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}.
$$

Cauchy–Schwarz 不等式给出

$$
|E(XY)|\le\sqrt{E(X^2)E(Y^2)},
$$

从而 $|\rho_{XY}|\le1$。等号成立当且仅当两个中心化变量几乎处处线性相关：

$$
Y-E(Y)=c[X-E(X)].
$$

相关系数没有量纲，只衡量线性关系。$\rho=0$ 仍可能有很强的非线性关系。例如 $X\sim U(-1,1)$、$Y=X^2$，则 $Y$ 完全由 $X$ 决定，但由对称性 $E(XY)=E(X^3)=0$，所以不相关。

## 4. 协方差矩阵与相关矩阵

对随机向量

$$
\boldsymbol X=(X_1,\ldots,X_n)^\mathsf T,
$$

协方差矩阵定义为

$$
\Sigma=
E[(\boldsymbol X-E\boldsymbol X)
(\boldsymbol X-E\boldsymbol X)^\mathsf T].
$$

第 $(i,j)$ 个元素是 $\operatorname{Cov}(X_i,X_j)$。它是对称半正定矩阵，因为对任意向量 $\boldsymbol a$，

$$
\boldsymbol a^\mathsf T\Sigma\boldsymbol a
=\operatorname{Var}(\boldsymbol a^\mathsf T\boldsymbol X)
\ge0.
$$

相关矩阵把对角线标准化为 1，第 $(i,j)$ 项为 $\rho_{ij}$。

## 5. 条件分布

### 离散型

若 $P(Y=y_j)>0$，

$$
P(X=x_i\mid Y=y_j)
=\frac{P(X=x_i,Y=y_j)}{P(Y=y_j)}.
$$

### 连续型

若 $f_Y(y)>0$，

$$
f_{X\mid Y}(x\mid y)
=\frac{f_{X,Y}(x,y)}{f_Y(y)}.
$$

对固定的 $y$，它关于 $x$ 是一个正规化后的密度。虽然连续变量满足 $P(Y=y)=0$，条件密度仍可由联合密度与边际密度之比严格定义。

联合密度可重新分解为

$$
f_{X,Y}(x,y)=f_{X\mid Y}(x\mid y)f_Y(y).
$$

连续型全概率公式为

$$
f_X(x)=\int f_{X\mid Y}(x\mid y)f_Y(y)\,dy,
$$

Bayes 公式为

$$
f_{Y\mid X}(y\mid x)
=\frac{f_{X\mid Y}(x\mid y)f_Y(y)}{f_X(x)}.
$$

## 6. 条件期望

离散情形下

$$
E(X\mid Y=y)
=\sum_xxP(X=x\mid Y=y),
$$

连续情形下

$$
E(X\mid Y=y)
=\int x f_{X\mid Y}(x\mid y)\,dx.
$$

当 $y$ 变化时，它形成随机变量 $E(X\mid Y)$，并且是 $Y$ 的函数。

### 条件期望的关键性质

若相关期望存在：

$$
E[aX+bZ\mid Y]
=aE(X\mid Y)+bE(Z\mid Y),
$$

$$
E[h(Y)\mid Y]=h(Y),
$$

$$
E[h(Y)X\mid Y]=h(Y)E(X\mid Y),
$$

$$
E[E(X\mid Y)]=E(X).
$$

最后一条称为塔式法则或全期望公式。它的直觉是：先在每个 $Y=y$ 的小组中求平均，再对各小组加权，仍得到总体平均。

还有一个常用恒等式：

$$
E(XY)=E[XE(Y\mid X)],
$$

从而

$$
\operatorname{Cov}(X,E(Y\mid X))
=\operatorname{Cov}(X,Y).
$$

## 7. 例：三角形支持域上的条件密度

设

$$
f_{X,Y}(x,y)=3x,
\qquad 0<y<x<1.
$$

边际密度为

$$
f_X(x)=\int_0^x3x\,dy=3x^2,
\qquad 0<x<1.
$$

所以

$$
f_{Y\mid X}(y\mid x)=\frac{3x}{3x^2}=\frac1x,
\qquad 0<y<x.
$$

给定 $X=x$ 后，$Y$ 在 $(0,x)$ 上均匀。于是

$$
E(Y\mid X=x)=\frac x2.
$$

再用塔式法则：

$$
E(Y)=E\left(\frac X2\right)=\frac12E(X)=\frac38.
$$

## 8. 随机和

设 $N$ 是非负整数变量，$X_1,X_2,\ldots$ 独立同分布，并与 $N$ 独立。令

$$
S_N=\sum_{i=1}^NX_i,
$$

约定 $S_0=0$。给定 $N=n$ 后，

$$
E(S_N\mid N=n)=nE(X_1),
$$

所以

$$
E(S_N)=E(N)E(X_1).
$$

利用全方差公式

$$
\operatorname{Var}(Y)
=E[\operatorname{Var}(Y\mid X)]
+\operatorname{Var}[E(Y\mid X)],
$$

得到

$$
\operatorname{Var}(S_N)
=E(N)\operatorname{Var}(X_1)
+\operatorname{Var}(N)[E(X_1)]^2.
$$

第一项来自每个固定样本量下的个体波动，第二项来自样本量本身的波动。

## 9. 检查清单

- 求 $E[g(X,Y)]$ 可直接对联合分布求和或积分。
- 方差展开不能漏协方差项。
- 独立推出不相关，零相关一般不推出独立。
- 条件密度要用联合密度除以作为条件的变量的边际密度。
- $E(X\mid Y)$ 是随机变量，是 $Y$ 的函数。
- 随机和公式需要 $N$ 与各 $X_i$ 独立；条件不满足时不能直接套。
