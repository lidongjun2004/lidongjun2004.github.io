---
title: "第 10 讲：库仑定律、电场与叠加"
description: "从电荷和库仑力出发，建立电场概念，再用电荷元和对称性计算连续分布的场。"
date: 2026-08-27
---

静电学先回答两个问题：电荷之间如何作用，以及怎样把这种作用改写成空间中的“场”。库仑定律给出点电荷之间的力，叠加原理则把它推广到任意电荷分布。

## 电荷的四个基本性质

- 电荷有正、负两种，同号相斥，异号相吸；
- 电荷量子化，宏观带电量可写成 $q=Ne$，其中 $e\approx1.602\times10^{-19}\,\mathrm C$；
- 对与外界无电荷交换的系统，电荷代数和保持不变；
- 电荷量不随参考系改变，这一点和经典力学中的质量不完全类似。

“电荷守恒”是说净电荷不会凭空增减，不是说电荷不能在物体之间转移。

## 库仑定律

真空中两个静止点电荷 $q_1,q_2$ 相距 $r$ 时，$q_1$ 对 $q_2$ 的力为

$$
\mathbf F_{12}
=\frac{1}{4\pi\varepsilon_0}
\frac{q_1q_2}{r^2}\,\hat{\mathbf r}_{12},
$$

其中 $\hat{\mathbf r}_{12}$ 由 $q_1$ 指向 $q_2$，

$$
\frac{1}{4\pi\varepsilon_0}
\approx8.99\times10^9\,\mathrm{N\,m^2/C^2}.
$$

这个公式的直接条件是“点电荷、静止、真空”。带电体的尺寸远小于它到观察点的距离时，才能近似成点电荷。源电荷快速运动或电磁场明显随时间变化时，不能只套这个静电公式。

## 电场与检验电荷

场源电荷会改变周围空间。放入一个足够小的正检验电荷 $q_0$，定义

$$
\mathbf E(\mathbf r)
=\lim_{q_0\to0}\frac{\mathbf F}{q_0}.
$$

“足够小”的意思是检验电荷不应明显改变原来的电荷分布。电场的方向是正检验电荷的受力方向。已知外电场后，点电荷 $q$ 受力为

$$
\mathbf F=q\mathbf E,
$$

这里的 $\mathbf E$ 必须排除 $q$ 自身产生的场。

单个点电荷的场是

$$
\mathbf E
=\frac{1}{4\pi\varepsilon_0}
\frac{q}{r^2}\hat{\mathbf r}.
$$

## 叠加原理

多个场源同时存在时，总场是各场的矢量和：

$$
\mathbf E(\mathbf r)=\sum_i\mathbf E_i(\mathbf r).
$$

电荷连续分布时，先取电荷元

$$
dq=\lambda\,dl,
\qquad
dq=\sigma\,dS,
\qquad
dq=\rho\,dV,
$$

再积分

$$
\mathbf E(\mathbf r)
=\frac{1}{4\pi\varepsilon_0}
\int\frac{\mathbf r-\mathbf r'}{|\mathbf r-\mathbf r'|^3}\,dq(\mathbf r').
$$

这个公式里 $\mathbf r'$ 是源点，$\mathbf r$ 是场点。实际计算按三步走：

1. 选电荷元和坐标；
2. 画出 $d\mathbf E$ 的方向，利用对称性删掉必然相消的分量；
3. 把剩余分量改写成同一积分变量。

积分完要做极限检验：距离远大于带电体尺寸时，结果应退化成总电荷产生的点电荷场。

## 课件中的典型结果

无限长均匀带电直线外距离 $r$ 处，

$$
E=\frac{\lambda}{2\pi\varepsilon_0r}.
$$

半径 $R$、总电荷 $Q$ 的均匀带电圆环，轴线上距圆心 $x$ 处，

$$
E_x=\frac{1}{4\pi\varepsilon_0}
\frac{Qx}{(R^2+x^2)^{3/2}}.
$$

无限大均匀带电平面两侧，

$$
E=\frac{\sigma}{2\varepsilon_0},
$$

方向垂直平面。两块异号等量无限大平面叠加后，板间 $E=\sigma/\varepsilon_0$，板外为零。这些“无限”结果只在场点距边缘足够远时近似成立。

## 电偶极子

相距为矢量 $\boldsymbol\ell$ 的 $-q$ 和 $+q$ 构成电偶极子，电偶极矩为

$$
\mathbf p=q\boldsymbol\ell,
$$

方向由负电荷指向正电荷。距离远大于 $\ell$ 时，延长线上和中垂线上的场分别为

$$
E_{\parallel}
=\frac{1}{4\pi\varepsilon_0}\frac{2p}{r^3},
\qquad
E_{\perp}
=\frac{1}{4\pi\varepsilon_0}\frac{p}{r^3}.
$$

中垂线上的方向与 $\mathbf p$ 相反。在均匀外电场中，电偶极子合力为零，但有力矩

$$
\boldsymbol\tau=\mathbf p\times\mathbf E,
$$

它倾向于把 $\mathbf p$ 转到与 $\mathbf E$ 同向。在非均匀场中，电偶极子还会受到指向强场区的净力。

## 最容易混淆的三件事

- $\mathbf E$ 是场源和位置的性质，不依赖于选了多大的检验电荷；
- 叠加的是矢量，不是各个场强大小直接相加；
- 对称性只能帮你判断哪些分量相消，不能自动把有限长直线变成无限长直线。
