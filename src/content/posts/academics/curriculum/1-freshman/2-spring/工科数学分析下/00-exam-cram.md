---
title: "速成 · 工科数学分析下"
description: "把级数、多元微分、重积分与曲线曲面积分串成一条可计算、可检查条件的复习主线。"
date: 2026-08-27
tags: ["速成"]
---

下册把上册的微积分往两个方向推进：一边处理级数这样的无限过程，一边从单变量走向多元空间。贯穿各章的问题是：**原来的一元方法在什么条件下还能用，又该怎样改写？**

复习时按四段推进：

1. 级数：无限多个数或函数相加，先问是否收敛，再谈能否交换极限、积分和求导；
2. 多元微分：把一元的导数、Taylor 展开和极值推广到多个方向；
3. 重积分：把小区间累加推广成小面积、小体积的累加；
4. 曲线与曲面积分：在弯曲对象上累加，并用 Green、Gauss、Stokes 公式在“边界”和“内部”之间转换。

## 先看考试时的决策顺序

| 题型 | 第一问 | 典型工具 | 最常丢的条件 |
|---|---|---|---|
| 数项级数 | 通项是否趋于 $0$？是否正项？ | 比较、比值、根值、积分、Leibniz、Dirichlet | 通项趋零只是不发散的必要条件 |
| 函数项级数 | 要逐点收敛还是一致收敛？ | 上确界、Cauchy、Weierstrass、Dirichlet、Abel | $N$ 能不能依赖 $x$ |
| 多元极限 | 从不同路径趋近会不会得到不同结果？ | 夹逼、极坐标、路径反例 | 偏导存在不等于可微 |
| 多元极值 | 无约束、边界还是等式约束？ | Hessian、边界参数化、Lagrange 乘子 | 驻点只是候选点 |
| 重积分 | 区域怎样描述最简单？ | 直角坐标、极坐标、柱面坐标、球坐标 | 换元必须乘 Jacobian 的绝对值 |
| 曲线积分 | 对弧长还是对坐标？是否有方向？ | 参数化、Green、势函数 | 第二类积分反向会变号 |
| 曲面积分 | 对面积还是通量？曲面取哪一侧？ | 投影、Gauss、Stokes | 第二类积分必须核对法向方向 |

## 级数：先分类，再判敛散

### 数项级数

级数

$$
\sum_{n=1}^{\infty}u_n
$$

是否收敛，看的是部分和 $S_n=\sum_{k=1}^n u_k$ 是否有有限极限。第一步永远先检查

$$
\lim_{n\to\infty}u_n=0.
$$

若不为零，立即发散；若为零，仍不能断定收敛，例如调和级数。

正项级数的常用路线：

- 能和 $1/n^p$ 或几何级数比较：用比较或极限比较；
- 有阶乘、指数、连乘：优先比值或根值；
- 通项来自一个正的单调函数：考虑积分判别；
- 结构复杂但需要粗估：做等价量或上下界比较。

一般项级数先看绝对收敛：若 $\sum|u_n|$ 收敛，则原级数必收敛。绝对值后不收敛，再看是否交错，或能否写成“有界部分和 $\times$ 单调趋零”的 Dirichlet 结构。

### 函数列与函数项级数

逐点收敛允许每个 $x$ 使用不同的收敛速度；一致收敛要求一个 $N(\varepsilon)$ 同时管住整个区间：

$$
\sup_{x\in I}|S_n(x)-S(x)|\to0.
$$

一致收敛的价值不是“更快”，而是它允许把极限函数的连续性、积分等性质从有限和安全地传到无限和。判断时：

- 能找到与 $x$ 无关的 $M_n$，且 $|u_n(x)|\le M_n$、$\sum M_n$ 收敛：Weierstrass 判别；
- 含振荡项：考虑一致 Dirichlet；
- 想证明不一致收敛：找 $x_n$ 让余项始终不小，或证明 $u_n$ 不一致趋于零。

Fourier 级数把周期函数拆成正弦、余弦。先算系数，再根据分段光滑等条件判断收敛值：连续点收敛到函数值，跳跃点收敛到左右极限的平均值。

## 多元微分：偏导不等于可微

多元函数在一点可微，意味着存在统一的线性近似：

$$
f(\mathbf x+\mathbf h)
=f(\mathbf x)+\nabla f(\mathbf x)\cdot\mathbf h+o(\|\mathbf h\|).
$$

因此可微能推出各方向导数和偏导数存在；反过来只知道偏导数存在远远不够。最常用的充分条件是：偏导数在该点附近存在并连续。

方向导数沿单位向量 $\mathbf e$ 为

$$
D_{\mathbf e}f=\nabla f\cdot\mathbf e.
$$

梯度指向函数上升最快的方向，也垂直于等值面。

复合函数先画依赖关系再链式求导。二元复合的矩阵形式最不容易漏项：

$$
D(f\circ g)(x)=Df(g(x))Dg(x).
$$

二元 Taylor 二阶展开是

$$
f(\mathbf x+\mathbf h)
=f(\mathbf x)+\nabla f^T\mathbf h
+\frac12\mathbf h^T H\mathbf h+o(\|\mathbf h\|^2).
$$

求无约束极值时先解 $\nabla f=0$，再看 Hessian：正定是严格极小，负定是严格极大，不定是鞍点。带约束 $g=0$ 时解

$$
\nabla f+\lambda\nabla g=0,\qquad g=0,
$$

但仍要比较所有候选点和边界情形。

## 重积分：区域比被积函数更重要

二重积分最常见错误不是算错原函数，而是上下限没有覆盖正确区域。先画区域，再决定次序：

$$
\iint_D f(x,y)\,dx\,dy
=\int_a^b\!\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,dy\,dx.
$$

若区域由圆、圆环或射线描述，改用

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad dx\,dy=r\,dr\,d\theta.
$$

三重积分同理：柱面坐标的体积元是 $r\,dr\,d\theta\,dz$；球坐标的体积元是 $\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$。一般换元统一写成

$$
dV=\left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|du\,dv\,dw.
$$

## 四种线面积分先分清

| 积分 | 几何对象 | 是否依赖方向 | 参数化后的关键因子 |
|---|---|---|---|
| $\int_L f\,ds$ | 曲线上的质量式累加 | 否 | $\|\mathbf r'(t)\|dt$ |
| $\int_L Pdx+Qdy+Rdz$ | 沿路径做功 | 是 | $\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)dt$ |
| $\iint_\Sigma f\,dS$ | 曲面上的质量式累加 | 否 | $\|\mathbf r_u\times\mathbf r_v\|du\,dv$ |
| $\iint_\Sigma\mathbf F\cdot\mathbf n\,dS$ | 穿过曲面的通量 | 是 | $\mathbf F\cdot(\mathbf r_u\times\mathbf r_v)du\,dv$ |

Green、Gauss、Stokes 不是三套孤立公式，而是同一种“边界定理”的不同维度版本：

$$
\oint_{\partial D}P\,dx+Q\,dy
=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA,
$$

$$
\iint_{\partial\Omega}\mathbf F\cdot\mathbf n\,dS
=\iiint_\Omega\nabla\cdot\mathbf F\,dV,
$$

$$
\oint_{\partial\Sigma}\mathbf F\cdot d\mathbf r
=\iint_\Sigma(\nabla\times\mathbf F)\cdot\mathbf n\,dS.
$$

使用前检查四件事：区域或曲面是否满足定理条件、边界是否闭合、方向是否匹配、偏导是否连续。方向拿不准时，宁可画出“区域在左侧”或用右手定则重新确认。

## 最后复习清单

- 每个判别法都能说清前提，而不是只记结论；
- 能用一个反例解释“通项趋零不够”“偏导存在不够”“逐点收敛不够”；
- 多元积分先画区域，曲线曲面积分先定向；
- 会把 Green、Gauss、Stokes 看成“难算的一侧换成好算的一侧”；
- 算完做量纲、对称性和正负号检查。
