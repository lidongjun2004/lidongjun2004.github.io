---
title: "第 14 讲：稳恒电流与恒定磁场"
description: "从电流密度和连续性出发，掌握 Biot–Savart 定律、磁高斯定理与安培环路定理。"
date: 2026-08-27
---

电荷一旦定向运动就形成电流，稳恒电流又会产生不随时间变化的磁场。这部分的逻辑与静电学很像：Biot–Savart 定律对应“从场源直接积分”，安培环路定理对应“利用对称性反求场”。

## 电流与电流密度

单位时间通过截面的净电荷为

$$
I=\frac{dq}{dt}.
$$

电流的方向约定为正电荷定向运动的方向。金属中实际载流子通常是电子，它们的漂移方向与约定电流方向相反。

局部的电流用电流密度 $\mathbf J$ 描写：

$$
I=\iint_S\mathbf J\cdot d\mathbf S.
$$

电荷守恒的局部形式是连续性方程

$$
\frac{\partial\rho}{\partial t}
+\nabla\cdot\mathbf J=0.
$$

稳恒电流中 $\partial\rho/\partial t=0$，因而

$$
\nabla\cdot\mathbf J=0,
\qquad
\oiint_S\mathbf J\cdot d\mathbf S=0.
$$

这说明稳恒电流线不能凭空开始或结束；宏观上它必须形成闭合通路。

## 欧姆定律与焦耳热

对线性各向同性导体，欧姆定律的局部形式是

$$
\mathbf J=\gamma\mathbf E,
$$

其中 $\gamma$ 是电导率。对均匀等截面导体，它退化成

$$
U=IR,
\qquad
R=\rho_{\mathrm e}\frac lS,
$$

其中 $\rho_{\mathrm e}=1/\gamma$ 为电阻率。焦耳热的功率密度为

$$
p=\mathbf J\cdot\mathbf E
=\gamma E^2.
$$

导线里的稳恒电场可以不随时间变化，但要让电荷绕回路持续流动，电源内部必须有非静电力把正电荷从低电势端送回高电势端。这个非静电力对单位正电荷做的功定义电源电动势，不能把电动势当成一种“电压降”。

## 磁场与 Biot–Savart 定律

奥斯特实验表明电流会使附近磁针偏转。引入磁感应强度 $\mathbf B$ 描写磁场，电流元 $I\,d\boldsymbol\ell$ 在场点产生

$$
d\mathbf B
=\frac{\mu_0}{4\pi}
\frac{I\,d\boldsymbol\ell\times\hat{\mathbf r}}{r^2}.
$$

$\hat{\mathbf r}$ 由电流元指向场点，方向由右手螺旋定则确定。整段闭合稳恒电流的场是

$$
\mathbf B
=\frac{\mu_0I}{4\pi}
\oint\frac{d\boldsymbol\ell\times\hat{\mathbf r}}{r^2}.
$$

与电场一样，磁场满足矢量叠加原理。“某个电流元单独存在”不是真正的稳恒电流，因此积分时要回到完整电流回路。

## 常用的磁场结果

无限长直电流距导线 $r$ 处，

$$
B=\frac{\mu_0I}{2\pi r}.
$$

半径 $R$ 的圆电流，轴线上距圆心 $x$ 处，

$$
B_x
=\frac{\mu_0IR^2}{2(R^2+x^2)^{3/2}}.
$$

圆心处 $B=\mu_0I/(2R)$。距离远大于线圈尺寸时，它表现为磁偶极子，磁矩为

$$
\mathbf m=NI S\hat{\mathbf n},
$$

方向与电流绕向成右手螺旋关系。

长密绕直螺线管内，忽略边缘效应，

$$
B\approx\mu_0nI,
$$

其中 $n=N/l$ 是单位长度匝数，管外场近似为零。

## 磁通量和磁高斯定理

穿过曲面 $S$ 的磁通量为

$$
\Phi_B=\iint_S\mathbf B\cdot d\mathbf S.
$$

目前没有发现孤立磁荷，磁感线始终闭合，所以

$$
\oiint_S\mathbf B\cdot d\mathbf S=0,
\qquad
\nabla\cdot\mathbf B=0.
$$

这不是说磁场为零，而是说任意闭合面穿出的磁通量与穿入的正好相抵。因 $\nabla\cdot\mathbf B=0$，局部可引入磁矢势 $\mathbf A$：

$$
\mathbf B=\nabla\times\mathbf A.
$$

## 安培环路定理

恒定磁场中，

$$
\oint_L\mathbf B\cdot d\mathbf l
=\mu_0I_{\mathrm{enc}}.
$$

环路方向与穿过其所围曲面的电流正方向按右手定则约定。左边的 $\mathbf B$ 由所有电流产生，右边只数环路链住的电流代数和。

它和高斯定理一样，总是成立不等于总能方便求 $B$。只有高对称电流分布才能把 $B$ 从积分中提出。典型结果包括：

半径 $R$ 的无限长均匀载流圆柱，

$$
B(r)=
\begin{cases}
\dfrac{\mu_0Ir}{2\pi R^2},&r<R,\\[4pt]
\dfrac{\mu_0I}{2\pi r},&r>R;
\end{cases}
$$

密绕细螺绕环内，

$$
B(r)=\frac{\mu_0NI}{2\pi r};
$$

无限大均匀面电流 $\mathbf K$ 两侧，

$$
B=\frac{\mu_0K}{2},
$$

两侧方向相反。

## 环路定理的两个边界

第一，上述形式是稳恒电流下的磁静学方程，时变电场下必须加上麦克斯韦位移电流项。第二，选一条看上去很对称的环路，不会自动让真实电流分布也具有同样的对称性。

## 一张对照表

| 静电场 | 恒定磁场 |
|---|---|
| $\nabla\cdot\mathbf E=\rho/\varepsilon_0$ | $\nabla\cdot\mathbf B=0$ |
| $\oint\mathbf E\cdot d\mathbf l=0$ | $\oint\mathbf B\cdot d\mathbf l=\mu_0I_{\mathrm{enc}}$ |
| 电场线始于正电荷、止于负电荷 | 磁感线闭合 |
| 静电场无旋 | 电流是恒定磁场涡旋的轴心 |

这个对照不是说电和磁永远分开。后面会看到，时变磁场产生旋涡电场，时变电场又产生磁场。
