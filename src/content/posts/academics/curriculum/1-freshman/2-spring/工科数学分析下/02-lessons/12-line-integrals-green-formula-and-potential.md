---
title: "第 12 讲：曲线积分、Green 公式与势函数"
description: "分清对弧长和对坐标的曲线积分，用 Green 公式与路径无关条件转换平面线积分。"
date: 2026-08-27
---

曲线积分是在一条弯曲路径上累加。这里有两类本质不同的积分：第一类按弧长累加，不关心方向；第二类沿位移做功，反向会变号。

## 第一类：对弧长的曲线积分

设曲线 $L$ 上的线密度为 $f(x,y,z)$，总质量为

$$
\int_L f\,ds.
$$

若参数化

$$
\mathbf r(t)=(x(t),y(t),z(t)),\qquad a\le t\le b,
$$

则弧长微元

$$
ds=\|\mathbf r'(t)\|dt
=\sqrt{x'(t)^2+y'(t)^2+z'(t)^2}\,dt,
$$

从而

$$
\int_L f\,ds
=\int_a^b f(\mathbf r(t))\|\mathbf r'(t)\|dt.
$$

因为有模，反向参数化不会改变结果。对显式平面曲线 $y=y(x)$，

$$
ds=\sqrt{1+[y'(x)]^2}\,dx.
$$

## 第二类：对坐标的曲线积分

平面向量场 $\mathbf F=(P,Q)$ 沿有向曲线 $L:A\to B$ 做功为

$$
\int_LP\,dx+Q\,dy
=\int_L\mathbf F\cdot d\mathbf r.
$$

参数化后

$$
\int_a^b
\bigl[P(x(t),y(t))x'(t)+Q(x(t),y(t))y'(t)\bigr]dt.
$$

三维时再加 $R\,dz$。反向后 $d\mathbf r$ 变号，因此积分整体变号。

两类积分可以通过单位切向量联系：

$$
d\mathbf r=\mathbf T\,ds,\qquad
\int_L\mathbf F\cdot d\mathbf r
=\int_L\mathbf F\cdot\mathbf T\,ds.
$$

## Green 公式

设 $D$ 是平面区域，正向边界 $\partial D$ 规定为沿边界行走时区域始终在左侧。若 $P,Q$ 有连续偏导，则

$$
\oint_{\partial D}P\,dx+Q\,dy
=\iint_D\left(
\frac{\partial Q}{\partial x}
-\frac{\partial P}{\partial y}
\right)dA.
$$

它把闭曲线积分换成区域上的二重积分，或反过来。使用前检查：

- 曲线必须闭合；
- 边界方向必须为正向；
- $P,Q$ 在包含区域的范围内有连续偏导；
- 区域有洞时，外边界逆时针、内边界顺时针，才能保持区域在左侧。

### 面积公式

选择 $P=-y/2,Q=x/2$ 可得

$$
A=\frac12\oint_{\partial D}(x\,dy-y\,dx).
$$

也可选 $P=0,Q=x$ 得 $A=\oint x\,dy$，或选 $P=-y,Q=0$ 得 $A=-\oint y\,dx$，前提是方向正确。

### 有奇点怎么办

若 $P,Q$ 在区域内某点无定义，不能直接把整个区域套 Green 公式。常见处理是挖掉奇点附近的小圆盘，对穿孔区域应用 Green，再单独计算小圆周积分并取极限。

## 路径无关与势函数

若从任意 $A$ 到 $B$ 的积分只依赖端点，不依赖路径，就称积分路径无关。等价地，任意闭曲线上的积分为零。

![区域 D 内从 A 到 B 的两条不同路径 L1 和 L2](/images/academics/math-analysis-2/lessons/path-independent-curves.png)

若存在函数 $U(x,y)$ 使

$$
dU=U_x\,dx+U_y\,dy=P\,dx+Q\,dy,
$$

即 $\nabla U=(P,Q)$，则 $\mathbf F$ 是保守场，$U$ 是势函数，并有

$$
\int_A^B P\,dx+Q\,dy=U(B)-U(A).
$$

在单连通区域内、$P,Q$ 一阶偏导连续时，

$$
P_y=Q_x
$$

是存在势函数的充要条件。单连通不能随便删：有洞区域里，一个无旋场仍可能绕洞产生非零环流。

## 求势函数的办法

由 $U_x=P$ 对 $x$ 积分：

$$
U(x,y)=\int P(x,y)\,dx+C(y).
$$

再对 $y$ 求偏导，与 $Q$ 比较以确定 $C'(y)$。最后加任意常数。

也可以固定基点 $(x_0,y_0)$，沿折线路径定义

$$
U(x,y)=
\int_{x_0}^{x}P(s,y_0)\,ds
+\int_{y_0}^{y}Q(x,t)\,dt.
$$

## 选路原则

- 曲线已给参数且不闭合：直接参数化最稳；
- 闭曲线、旋度表达简单：优先 Green；
- 满足保守场条件：先求势函数，只代端点；
- 区域内有奇点或洞：先处理拓扑和奇点，不能直接套公式。
