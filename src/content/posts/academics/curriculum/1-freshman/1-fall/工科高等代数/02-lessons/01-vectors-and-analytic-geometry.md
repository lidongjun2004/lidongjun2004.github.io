---
title: "第 1 讲 · 空间向量与解析几何"
description: "从坐标、点积、叉积和混合积出发，建立平面、直线、曲面及距离问题的统一解法。"
date: 2026-08-27
---

解析几何的核心不是背方程，而是把几何关系翻译成向量关系。只要先找到「方向」和「法向」，大多数题都只剩下点积、叉积和解方程。

## 坐标是怎么来的

在空间中选一个原点 $O$ 和三个不共面的基向量 $\boldsymbol e_1,\boldsymbol e_2,\boldsymbol e_3$，就得到一个仿射标架。任意点 $P$ 唯一对应

$$
\overrightarrow{OP}=x\boldsymbol e_1+y\boldsymbol e_2+z\boldsymbol e_3,
$$

于是可以用 $(x,y,z)$ 表示 $P$。课程中常用直角坐标系，也就是三个基向量两两正交且长度均为 $1$。

点和向量要分清：点 $P$ 表示「在哪儿」，向量 $\boldsymbol v$ 表示「向哪儿移多少」。两点之差才是向量：

$$
\overrightarrow{AB}=B-A=(x_B-x_A,y_B-y_A,z_B-z_A).
$$

## 三种乘法各管什么

### 点积：垂直、夹角和投影

$$
\boldsymbol a\cdot\boldsymbol b
=a_1b_1+a_2b_2+a_3b_3
=\lVert\boldsymbol a\rVert\lVert\boldsymbol b\rVert\cos\theta.
$$

因此 $\boldsymbol a\perp\boldsymbol b$ 等价于 $\boldsymbol a\cdot\boldsymbol b=0$。$\boldsymbol a$ 在非零向量 $\boldsymbol b$ 方向上的标量投影和向量投影分别是

$$
\operatorname{comp}_{\boldsymbol b}\boldsymbol a
=\frac{\boldsymbol a\cdot\boldsymbol b}{\lVert\boldsymbol b\rVert},
\qquad
\operatorname{proj}_{\boldsymbol b}\boldsymbol a
=\frac{\boldsymbol a\cdot\boldsymbol b}{\boldsymbol b\cdot\boldsymbol b}\boldsymbol b.
$$

前者是一个数，后者是一个向量；这是真题中很常见的混淆点。

### 叉积：法向和面积

$\boldsymbol a\times\boldsymbol b$ 同时垂直于 $\boldsymbol a,\boldsymbol b$，方向按右手定则，长度为

$$
\lVert\boldsymbol a\times\boldsymbol b\rVert
=\lVert\boldsymbol a\rVert\lVert\boldsymbol b\rVert\sin\theta.
$$

所以它既能产生平面的法向量，也能计算平行四边形面积。三角形 $ABC$ 的面积是

$$
S_{ABC}=\frac12\lVert\overrightarrow{AB}\times\overrightarrow{AC}\rVert.
$$

### 混合积：共面和体积

$$
[\boldsymbol a,\boldsymbol b,\boldsymbol c]
=(\boldsymbol a\times\boldsymbol b)\cdot\boldsymbol c.
$$

它的绝对值是三个向量张成的平行六面体体积；其值为 $0$ 当且仅当三个向量共面。交换其中两个向量会变号，循环换位则不变。

## 平面和直线的三步法

平面过点 $P_0(x_0,y_0,z_0)$，法向量为 $\boldsymbol n=(A,B,C)$ 时，

$$
A(x-x_0)+B(y-y_0)+C(z-z_0)=0.
$$

直线过点 $P_0$，方向向量为 $\boldsymbol s=(l,m,n)$ 时，

$$
(x,y,z)=(x_0,y_0,z_0)+t(l,m,n).
$$

对一道直线或平面题，可以固定问三件事：

1. 有没有一个已知点？
2. 要找的是方向向量，还是法向量？
3. 「平行」「垂直」「相交」分别会给这些向量什么约束？

同一个对象常有几种写法。平面的点法式展开后是一般式

$$
Ax+By+Cz+D=0,
$$

若平面与三条坐标轴分别交于 $(a,0,0),(0,b,0),(0,0,c)$，还可写成截距式

$$
\frac xa+\frac yb+\frac zc=1.
$$

直线除了参数式，还可写成对称式

$$
\frac{x-x_0}{l}
=\frac{y-y_0}{m}
=\frac{z-z_0}{n},
$$

或写成两个平面的交线

$$
\begin{cases}
A_1x+B_1y+C_1z+D_1=0,\\
A_2x+B_2y+C_2z+D_2=0.
\end{cases}
$$

遇到某个方向分量为 $0$ 时不要在对称式里除以 $0$，直接保留相应坐标等式。例如方向为 $(1,0,2)$ 的直线应写成

$$
\frac{x-x_0}{1}=\frac{z-z_0}{2},
\qquad y=y_0.
$$

两个不平行平面

$$
\Pi_1=0,
\qquad
\Pi_2=0
$$

的交线所确定的平面束可写成 $\Pi_1+\lambda\Pi_2=0$。它一次性表示所有经过这条交线的平面；再代入额外条件求 $\lambda$，通常比从四个未知系数开始设平面更快。

## 位置关系与夹角

把直线方向记为 $\boldsymbol s$，平面法向记为 $\boldsymbol n$，位置关系便可直接翻译：

- 两直线平行：方向向量成比例；垂直：方向向量点积为 $0$；
- 两平面平行：法向量成比例；垂直：法向量点积为 $0$；
- 直线与平面平行：$\boldsymbol s\cdot\boldsymbol n=0$；垂直：$\boldsymbol s$ 与 $\boldsymbol n$ 成比例。

相应的锐角公式是

$$
\cos\theta_{LL}
=\frac{|\boldsymbol s_1\cdot\boldsymbol s_2|}
{\lVert\boldsymbol s_1\rVert\lVert\boldsymbol s_2\rVert},
$$

$$
\cos\theta_{\Pi\Pi}
=\frac{|\boldsymbol n_1\cdot\boldsymbol n_2|}
{\lVert\boldsymbol n_1\rVert\lVert\boldsymbol n_2\rVert},
$$

$$
\sin\theta_{L\Pi}
=\frac{|\boldsymbol s\cdot\boldsymbol n|}
{\lVert\boldsymbol s\rVert\lVert\boldsymbol n\rVert}.
$$

最后一式用正弦，是因为直线与平面的夹角，和方向向量与法向量的夹角互余。

### 完整例子：过直线且垂直于已知平面

设待求平面包含直线 $L$，$L$ 的方向向量为 $\boldsymbol s$；已知平面 $\Pi$ 的法向量为 $\boldsymbol n$。待求平面的法向 $\boldsymbol N$ 必须同时垂直于 $\boldsymbol s$ 和 $\boldsymbol n$，所以可取

$$
\boldsymbol N=\boldsymbol s\times\boldsymbol n.
$$

再把 $L$ 上任意一点代入点法式即可。关键是先画出向量之间的垂直关系，不要一开始就设 $Ax+By+Cz+D=0$ 然后盲目联立。

## 距离公式的来源

点 $P$ 到平面 $Ax+By+Cz+D=0$ 的距离，本质是 $\overrightarrow{P_0P}$ 在单位法向上的投影长度：

$$
d=\frac{|Ax_P+By_P+Cz_P+D|}{\sqrt{A^2+B^2+C^2}}.
$$

点 $P$ 到直线 $L:P_0+t\boldsymbol s$ 的距离，则可用平行四边形面积除以底边：

$$
d=\frac{\lVert\overrightarrow{P_0P}\times\boldsymbol s\rVert}{\lVert\boldsymbol s\rVert}.
$$

两异面直线的距离是连接两直线上任意两点的向量，在共同法向 $\boldsymbol s_1\times\boldsymbol s_2$ 上的投影长度。

若两异面直线分别过 $P_1,P_2$，方向为 $\boldsymbol s_1,\boldsymbol s_2$，公式就是

$$
d=
\frac{\left|
\overrightarrow{P_1P_2}\cdot
(\boldsymbol s_1\times\boldsymbol s_2)
\right|}
{\lVert\boldsymbol s_1\times\boldsymbol s_2\rVert}.
$$

两平行平面应先把 $A,B,C$ 化成相同的一组系数，再用

$$
d=\frac{|D_1-D_2|}{\sqrt{A^2+B^2+C^2}}.
$$

## 曲面和曲线怎么读

曲面的一般方程是 $F(x,y,z)=0$。方程中若缺少某个坐标，往往表示曲面沿该坐标轴方向无限延伸。例如 $x^2+y^2=1$ 不限制 $z$，所以是以 $z$ 轴为轴的圆柱面，而不是一条圆。

二次曲面不要只凭名字记图，要看等号右边和二次项符号：

| 标准式 | 曲面 | 读法 |
|---|---|---|
| $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}=1$ | 椭球面 | 三个同号平方项围成封闭曲面 |
| $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}-\dfrac{z^2}{c^2}=1$ | 单叶双曲面 | 两正一负，等于 $1$ |
| $\dfrac{z^2}{c^2}-\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ | 双叶双曲面 | 一正两负，正项所在轴是分叶方向 |
| $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=2z$ | 椭圆抛物面 | 同号平方项，沿 $z$ 的正向张开 |
| $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=2z$ | 双曲抛物面 | 异号平方项，呈马鞍形 |
| $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}-\dfrac{z^2}{c^2}=0$ | 椭圆锥面 | 齐次二次式，顶点在原点 |

一般二次曲面先通过配方平移中心，再看各平方项符号和系数。判断平面截痕时，把平面方程代入曲面，最后得到的是椭圆、双曲线还是抛物线，就对应交线类型。

空间曲线可以用参数式

$$
x=x(t),\qquad y=y(t),\qquad z=z(t),
$$

也常写成两个曲面的交

$$
\begin{cases}
F(x,y,z)=0,\\
G(x,y,z)=0.
\end{cases}
$$

求它在 $XOY$ 面上的投影，分两步：先从 $F=0,G=0$ 中消去 $z$，得到只含 $x,y$ 的投影柱面 $H(x,y)=0$；再加上 $z=0$，才得到投影曲线

$$
\begin{cases}
H(x,y)=0,\\
z=0.
\end{cases}
$$

这也解释了为什么不能简单地把原方程里的 $z$ 项删掉。

## 最容易错的地方

- $\boldsymbol a\times\boldsymbol b=-\boldsymbol b\times\boldsymbol a$，叉积不满足交换律；向量三重积也不能随便加括号。
- 方向向量平行于直线，法向量垂直于平面，两者的角度关系不能混用。
- 求夹角时通常取锐角，所以分子需要绝对值；求有向角时才保留符号。
- 求投影曲线不是直接把某个坐标删掉，而是先消元再加投影面方程。
