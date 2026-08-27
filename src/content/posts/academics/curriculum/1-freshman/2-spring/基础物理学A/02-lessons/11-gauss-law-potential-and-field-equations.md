---
title: "第 11 讲：高斯定理、电势与场方程"
description: "用通量和环流抓住静电场的有源、无旋性，联系电场、电势与泊松方程。"
date: 2026-08-27
---

叠加积分是“电荷在哪里，就从哪里积分”。高斯定理换了一种看法：不逐个跟踪电荷元，而是问一个闭合面究竟净穿出了多少电场。

## 电通量

面元矢量定义为

$$
d\mathbf S=\hat{\mathbf n}\,dS.
$$

穿过曲面 $S$ 的电通量是

$$
\Phi_E=\iint_S\mathbf E\cdot d\mathbf S.
$$

对闭合面统一取外法线：电场线穿出贡献正通量，穿入贡献负通量。$\Phi_E=0$ 只说穿入和穿出相抵，不代表面上处处 $\mathbf E=0$。

## 高斯定理

真空静电场中，

$$
\oiint_S\mathbf E\cdot d\mathbf S
=\frac{Q_{\mathrm{in}}}{\varepsilon_0}.
$$

左边的 $\mathbf E$ 由空间内外所有电荷共同产生，右边只数闭合面包围的净电荷。面外电荷会改变面上的局部电场，但它的电场线对闭合面有入必有出，净通量为零。

高斯定理对任意闭合面都成立，但只有电荷分布具有球、柱或平面对称性时，它才能直接“解出” $E$。高斯面应该：

1. 经过待求场点；
2. 让有通量的部分上 $E$ 为常量；
3. 让其余部分与 $\mathbf E$ 平行，使通量为零。

## 三类标准对称

![均匀带电球面的同心球形高斯面与径向电场](/images/academics/curriculum/basic-physics-a1/lessons/spherical-gaussian-surface.png)

![无限长带电直线外的同轴圆柱形高斯面](/images/academics/curriculum/basic-physics-a1/lessons/cylindrical-gaussian-surface.png)

半径 $R$、总电荷 $Q$ 的均匀带电球面：

$$
E(r)=
\begin{cases}
0,&r<R,\\[4pt]
\dfrac{Q}{4\pi\varepsilon_0r^2},&r>R.
\end{cases}
$$

半径 $R$、体电荷密度 $\rho$ 的均匀带电球体：

$$
E(r)=
\begin{cases}
\dfrac{\rho r}{3\varepsilon_0},&r<R,\\[4pt]
\dfrac{\rho R^3}{3\varepsilon_0r^2},&r>R.
\end{cases}
$$

无限长均匀带电圆柱体，总线电荷密度为 $\lambda$：

$$
E(r)=
\begin{cases}
\dfrac{\lambda r}{2\pi\varepsilon_0R^2},&r<R,\\[4pt]
\dfrac{\lambda}{2\pi\varepsilon_0r},&r>R.
\end{cases}
$$

无限大均匀带电厚板，厚度 $d$、体电荷密度 $\rho$，取中面为 $x=0$：

$$
E(x)=
\begin{cases}
\dfrac{\rho x}{\varepsilon_0},&|x|<d/2,\\[4pt]
\dfrac{\rho d}{2\varepsilon_0}\operatorname{sgn}(x),&|x|>d/2.
\end{cases}
$$

对一个球形带电体挖去偏心小球腔，可把它叠加成“完整的 $+\rho$ 大球”与“填回腔体的 $-\rho$ 小球”。若两球心位移为 $\mathbf a$，腔内得到均匀场

$$
\mathbf E=\frac{\rho}{3\varepsilon_0}\mathbf a.
$$

这是课件中“补偿法”的典型用法：先叠加出有对称性的基本分布，再相减。

## 静电场的功与环路定理

点电荷场中，电场力从 $a$ 到 $b$ 做功

$$
W_{a\to b}
=q_0\int_a^b\mathbf E\cdot d\mathbf l
=\frac{qq_0}{4\pi\varepsilon_0}
\left(\frac1{r_a}-\frac1{r_b}\right),
$$

只与起终点有关。由叠加原理可推广到任意静电场，因而

$$
\oint_L\mathbf E\cdot d\mathbf l=0.
$$

静电场是保守场、无旋场，可以定义单值电势。注意这条环路定理不能原样搬到随时间变化的电场；后面的法拉第定律正是对它的修正。

## 电势与电势能

电势差定义为

$$
U_a-U_b=\int_a^b\mathbf E\cdot d\mathbf l,
$$

电荷 $q$ 的电势能为 $W=qU$。有限电荷分布通常取 $U(\infty)=0$；无限长带电线、无限大带电面的电势在无穷远发散，必须选一个有限位置作零势面。不同零点下的电势数值不同，电势差和电场不变。

点电荷系的电势是标量叠加：

$$
U(\mathbf r)
=\frac{1}{4\pi\varepsilon_0}
\sum_i\frac{q_i}{|\mathbf r-\mathbf r_i|}.
$$

连续分布时，

$$
U(\mathbf r)
=\frac{1}{4\pi\varepsilon_0}
\int\frac{dq(\mathbf r')}{|\mathbf r-\mathbf r'|}.
$$

电势没有方向，所以当几何对称不足以直接积分电场矢量时，先算 $U$ 往往更省事。

## 从电势回到电场

电场永远指向电势下降最快的方向：

$$
\mathbf E=-\nabla U.
$$

直角坐标中，

$$
E_x=-\frac{\partial U}{\partial x},
\qquad
E_y=-\frac{\partial U}{\partial y},
\qquad
E_z=-\frac{\partial U}{\partial z}.
$$

电场线与等势面正交；若用相同电势差画相邻等势面，等势面越密的地方场越强。

## 微分形式：场源与边界条件

借助数学上的高斯定理和斯托克斯定理，两条积分定律变成

$$
\nabla\cdot\mathbf E=\frac{\rho}{\varepsilon_0},
\qquad
\nabla\times\mathbf E=0.
$$

再代入 $\mathbf E=-\nabla U$，得泊松方程

$$
\nabla^2U=-\frac{\rho}{\varepsilon_0}.
$$

无电荷区域 $\rho=0$ 时，它化为拉普拉斯方程

$$
\nabla^2U=0.
$$

这组方程说明了“电荷分布 + 边界条件”才能唯一确定静电场。课件没有把镜像法展开成独立解题法，所以这里不额外引入一套超出课程的“像电荷套路”。

## 选方法的快速判断

- 电荷分布有强球、柱或平面对称：先想高斯定理；
- 电荷分布已知、但对称性不足：用叠加积分；
- 只需电势或矢量积分很繁：先算标量 $U$；
- 已知电势函数：直接用 $\mathbf E=-\nabla U$；
- 求无电荷区域的整体场分布：拉普拉斯方程还需要边界条件，单有 $\rho=0$ 不够。
