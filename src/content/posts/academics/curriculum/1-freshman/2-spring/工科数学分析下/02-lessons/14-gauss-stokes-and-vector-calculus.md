---
title: "第 14 讲：Gauss 公式、Stokes 公式与向量分析"
description: "用散度和旋度统一理解 Green、Gauss、Stokes 公式，并掌握定理选择与定向检查。"
date: 2026-08-27
---

Green、Gauss、Stokes 三个公式都在做同一件事：把一个区域内部的局部变化，和它边界上的总体效应联系起来。区别只在维度和被积对象。

![Green、Gauss、Stokes 都把内部的局部变化连接到边界上的总体效应](/images/academics/math-analysis-2/boundary-theorems.svg)

## 散度与 Gauss 公式

对向量场 $\mathbf F=(P,Q,R)$，散度为

$$
\nabla\cdot\mathbf F
=P_x+Q_y+R_z.
$$

它衡量一点附近“净流出”的强弱：散度为正像源，负值像汇。

若闭区域 $\Omega$ 的边界 $\partial\Omega$ 分片光滑并取外法向，且 $\mathbf F$ 在区域内有连续一阶偏导，则

$$
\iint_{\partial\Omega}\mathbf F\cdot\mathbf n\,dS
=\iiint_\Omega\nabla\cdot\mathbf F\,dV.
$$

这就是 Gauss 公式。左边是穿出闭曲面的总通量，右边是内部所有微小源汇的总和。

### 什么时候用 Gauss

- 曲面闭合，或容易补成闭曲面；
- 直接做每一片曲面积分麻烦，而散度简单；
- 题目要求闭曲面通量或验证守恒。

若曲面不闭合，先补面再减；若向量场在区域内有奇点，不能直接应用，必须挖去奇点或单独处理。

## 旋度与 Stokes 公式

旋度为

$$
\nabla\times\mathbf F
=\begin{pmatrix}
R_y-Q_z\\
P_z-R_x\\
Q_x-P_y
\end{pmatrix}.
$$

它衡量局部旋转趋势。若有向曲面 $\Sigma$ 的边界为 $\partial\Sigma$，边界方向与法向满足右手定则，则

$$
\oint_{\partial\Sigma}\mathbf F\cdot d\mathbf r
=\iint_\Sigma
(\nabla\times\mathbf F)\cdot\mathbf n\,dS.
$$

右手定则：右手拇指指向法向，四指弯曲方向就是边界正向。从法向一侧看，边界通常是逆时针。

### 曲面可以替换

边界曲线固定时，只要向量场在两曲面之间足够光滑，可以把复杂曲面换成同边界的简单曲面。常见做法是：空间曲线位于某个平面上，就直接选它围成的平面区域作为 $\Sigma$。

这比参数化原来的弯曲曲面更省力，也是 Stokes 公式最重要的计算价值之一。

## Green 是二维 Stokes

令三维向量场为 $(P,Q,0)$，曲面取 $xy$ 平面区域，法向为 $\mathbf k$，则

$$
(\nabla\times\mathbf F)\cdot\mathbf k
=Q_x-P_y,
$$

Stokes 公式就退化为

$$
\oint_{\partial D}P\,dx+Q\,dy
=\iint_D(Q_x-P_y)\,dA.
$$

因此三者的结构可以写成：

| 定理 | 内部量 | 边界量 | 方向 |
|---|---|---|---|
| Green | 平面区域上的标量旋度 | 闭曲线环流 | 区域在左 |
| Gauss | 体积内的散度 | 闭曲面通量 | 外法向 |
| Stokes | 曲面上的旋度通量 | 边界曲线环流 | 右手定则 |

## 两个恒等式

在偏导足够光滑时，

$$
\nabla\cdot(\nabla\times\mathbf F)=0,
$$

$$
\nabla\times(\nabla\phi)=\mathbf0.
$$

第一条说旋度场没有净源汇；第二条说梯度场局部无旋。这解释了为什么保守场的闭路积分为零。

但“旋度为零就一定存在全局势函数”还需要区域没有洞等拓扑条件。局部微分条件不能完全替代区域条件。

## 定理选择器

遇到积分先问：

1. 是闭曲线、闭曲面，还是开曲面带边界？
2. 求的是环流还是通量？
3. $\nabla\cdot\mathbf F$ 和 $\nabla\times\mathbf F$ 哪个更简单？
4. 区域内是否有奇点？
5. 能否补面或换成同边界的简单曲面？

通常：

- 平面闭曲线环流用 Green；
- 闭曲面通量用 Gauss；
- 空间闭曲线环流或曲面上的旋度通量用 Stokes；
- 非闭合对象先判断能否补成闭合对象。

## 方向检查比计算更重要

定理右边算得再漂亮，方向错了也会整体差一个负号。建议每次都在草稿上写明：

- Green：沿边界走时区域在哪一侧；
- Gauss：是否取闭曲面外侧；
- Stokes：拇指指向哪里，四指转向哪里；
- 补面：补面作为闭曲面的一部分时外法向朝哪。

最后再看物理直觉：若区域内部处处是正散度，外通量应为正；若向量场与外法向大致同向，结果也不应莫名为负。
