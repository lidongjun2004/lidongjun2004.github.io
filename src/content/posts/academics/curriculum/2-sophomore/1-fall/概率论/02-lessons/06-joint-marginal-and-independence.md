---
title: "第 7 讲 · 联合分布、边际分布与独立性"
description: "从随机向量的联合分布出发，掌握联合分布函数、联合密度、边际化与独立性的判断"
date: 2026-08-27
---

一维分布只描述每个变量各自怎样变化；联合分布还描述它们怎样一起变化。知道 $X$ 和 $Y$ 的边际分布，通常不能还原联合分布，因为变量之间还可能存在不同依赖关系。

## 1. 随机向量

若 $X,Y$ 定义在同一个样本空间上，$(X,Y)$ 称为二维随机变量或随机向量。同理可定义 $(X_1,\ldots,X_n)$。

例如抛硬币 4 次，$X$ 表示正面数，$Y$ 表示反面数，则 $X+Y=4$。两者各自都服从二项分布，却完全不是独立的；知道 $X$ 就知道 $Y$。

## 2. 联合分布函数

定义

$$
F_{X,Y}(x,y)=P(X\le x,Y\le y).
$$

![联合分布函数对应点左下方区域的概率](/images/academics/probability/lessons/joint-cdf-lower-left-region.webp)

它满足：

- 对每个变量分别单调不减；
- 对每个变量分别右连续；
- 任一变量趋于 $-\infty$ 时极限为 0；
- $x,y$ 都趋于 $+\infty$ 时极限为 1；
- 任意矩形概率非负。

对 $x_1<x_2$、$y_1<y_2$，矩形概率为

$$
\begin{aligned}
&P(x_1<X\le x_2,\ y_1<Y\le y_2)\\
={}&F(x_2,y_2)-F(x_1,y_2)-F(x_2,y_1)+F(x_1,y_1).
\end{aligned}
$$

最后一项要加回来，是二维容斥。

## 3. 离散型联合分布列

若 $(X,Y)$ 只取可列多个点，定义

$$
p_{ij}=P(X=x_i,Y=y_j),
$$

并满足 $p_{ij}\ge0$、$\sum_i\sum_jp_{ij}=1$。

边际分布通过行列求和得到：

$$
P(X=x_i)=\sum_jp_{ij},
\qquad
P(Y=y_j)=\sum_ip_{ij}.
$$

### 例：先取 $X$，再按 $X$ 取 $Y$

$X$ 在 $1,2,3,4$ 中等概率取值；给定 $X=x$ 后，$Y$ 在 $1,\ldots,x$ 中等概率取值。于是

$$
P(X=x,Y=y)=
\begin{cases}
\dfrac1{4x},&1\le y\le x\le4,\\
0,&\text{其他}.
\end{cases}
$$

所以

$$
P(X=Y)=\sum_{x=1}^4P(X=x,Y=x)
=\frac14\left(1+\frac12+\frac13+\frac14\right)
=\frac{25}{48}.
$$

这个例子也说明：联合表中不是所有格子都能取值，支持集结构本身就可能暴露依赖关系。

## 4. 连续型联合密度

若存在 $f_{X,Y}(x,y)\ge0$，使

$$
F_{X,Y}(x,y)=
\int_{-\infty}^{x}\int_{-\infty}^{y}
f_{X,Y}(u,v)\,dv\,du,
$$

则 $f_{X,Y}$ 为联合密度，并满足

$$
\iint_{\mathbb R^2}f_{X,Y}(x,y)\,dx\,dy=1.
$$

区域 $D$ 的概率为

$$
P((X,Y)\in D)=\iint_Df_{X,Y}(x,y)\,dx\,dy.
$$

### 例：先归一化，再算概率

设

$$
f(x,y)=
\begin{cases}
Ae^{-(2x+3y)},&x\ge0,y\ge0,\\
0,&\text{其他}.
\end{cases}
$$

归一化给出

$$
1=A\int_0^\infty e^{-2x}\,dx
\int_0^\infty e^{-3y}\,dy
=\frac A6,
$$

故 $A=6$。进一步

$$
P(X<2,Y<1)
=\int_0^2\int_0^1 6e^{-2x-3y}\,dy\,dx
=(1-e^{-4})(1-e^{-3}).
$$

## 5. 边际分布

把联合分布中的另一个变量“放到所有可能值上”即可得到边际分布。

连续型：

$$
f_X(x)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)\,dy,
$$

$$
f_Y(y)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)\,dx.
$$

CDF 形式为

$$
F_X(x)=\lim_{y\to\infty}F_{X,Y}(x,y),
\qquad
F_Y(y)=\lim_{x\to\infty}F_{X,Y}(x,y).
$$

积分上下限必须来自支持域。例如若 $0<y<x<1$，固定 $x$ 后 $y\in(0,x)$；固定 $y$ 后 $x\in(y,1)$。

## 6. 独立性的等价判断

$X,Y$ 独立，当且仅当对任意 $x,y$，

$$
F_{X,Y}(x,y)=F_X(x)F_Y(y).
$$

离散型等价于

$$
p_{ij}=p_{i\cdot}p_{\cdot j}
$$

对所有可能点都成立；连续型常用

$$
f_{X,Y}(x,y)=f_X(x)f_Y(y)
$$

几乎处处成立。

仅看表达式能否写成 $g(x)h(y)$ 还不够，支持集也必须是边际支持集的直积。三角形区域 $0<y<x<1$ 即使密度公式很简单，通常也不能独立，因为可取的 $y$ 范围依赖 $x$。

## 7. 常用多维分布

### 多项分布

每次试验有 $r$ 类结果，概率 $p_1,\ldots,p_r$，独立做 $n$ 次，$X_i$ 为第 $i$ 类出现次数。若 $x_i\ge0$ 且 $\sum_i x_i=n$，

$$
P(X_1=x_1,\ldots,X_r=x_r)
=\frac{n!}{x_1!\cdots x_r!}
\prod_{i=1}^r p_i^{x_i}.
$$

每个边际 $X_i\sim B(n,p_i)$，但计数之间不独立，因为总和固定为 $n$。

### 多维超几何分布

总体 $N$ 件分成 $r$ 类，第 $i$ 类有 $N_i$ 件，不放回抽 $n$ 件，$X_i$ 为第 $i$ 类数目。若 $\sum_i x_i=n$，

$$
P(X_1=x_1,\ldots,X_r=x_r)
=\frac{\prod_{i=1}^r\binom{N_i}{x_i}}
{\binom Nn}.
$$

### 区域上的均匀分布

若 $(X,Y)$ 在面积有限区域 $D$ 上均匀，

$$
f_{X,Y}(x,y)=
\begin{cases}
1/|D|,&(x,y)\in D,\\
0,&\text{其他}.
\end{cases}
$$

只有当 $D$ 是矩形且密度可分解时，坐标才独立。圆盘上均匀的 $X,Y$ 不独立。

### 二维正态分布

参数为 $\mu_X,\mu_Y,\sigma_X^2,\sigma_Y^2,\rho$ 的二维正态密度为

$$
\begin{aligned}
f(x,y)={}&\frac1{2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}}\\
&\times\exp\left\{-\frac1{2(1-\rho^2)}
\left[
\frac{(x-\mu_X)^2}{\sigma_X^2}
-2\rho\frac{(x-\mu_X)(y-\mu_Y)}{\sigma_X\sigma_Y}
+\frac{(y-\mu_Y)^2}{\sigma_Y^2}
\right]\right\}.
\end{aligned}
$$

边际仍为相应的一维正态。二维正态中

$$
X\perp Y\quad\Longleftrightarrow\quad\rho=0.
$$

这是正态分布的特殊性质，不能推广到任意联合分布。

## 8. 这一讲的固定路线

1. 先画或描述联合支持集。
2. 检查联合质量求和或联合密度积分是否为 1。
3. 求边际时按支持域确定上下限。
4. 判断独立要同时比较数值因子和支持集。
5. 边际分布相同不等于联合分布相同，更不等于独立。
