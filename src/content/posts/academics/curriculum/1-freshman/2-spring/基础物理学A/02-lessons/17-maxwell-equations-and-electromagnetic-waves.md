---
title: "第 17 讲：Maxwell 方程组与电磁波"
description: "从充电电容器的矛盾引出位移电流，统一四条 Maxwell 方程并推出电磁波。"
date: 2026-08-27
---

在麦克斯韦之前，静电学、恒定磁场和法拉第感应已经分别建立。但它们放在一起并不完全对称：时变磁场能产生电场，那么时变电场是否也能产生磁场？充电电容器把这个问题变成了必须修补的逻辑矛盾。

## 充电电容器的环路矛盾

用同一条闭合环路 $L$ 围住充电导线，可选两个共边曲面：

- $S_1$ 穿过导线，包围传导电流 $I$；
- $S_2$ 鼓进电容器极板间，没有自由电荷真正穿过间隙。

如果仍用恒定电流的安培环路定理，同一个 $\oint_L\mathbf H\cdot d\mathbf l$ 对 $S_1$ 给出 $I$，对 $S_2$ 却给出零，结果取决于任意选的曲面，这是不允许的。

另一种看法是对恒定方程 $\nabla\times\mathbf H=\mathbf J$ 取散度：

$$
\nabla\cdot(\nabla\times\mathbf H)=0
$$

会强制 $\nabla\cdot\mathbf J=0$，但充电过程中导线电流正在向极板堆积电荷，必须满足

$$
\nabla\cdot\mathbf J_{\mathrm f}
=-\frac{\partial\rho_{\mathrm f}}{\partial t},
$$

不能恒为零。

## 位移电流

麦克斯韦注意到，电位移通量

$$
\Phi_D=\iint_S\mathbf D\cdot d\mathbf S
$$

在充电过程中随时间改变。定义位移电流

$$
I_D=\frac{d\Phi_D}{dt}.
$$

对忽略边缘效应的平行板电容器，$\Phi_D=DS=Q_{\mathrm f}$，因而

$$
I_D=\frac{dQ_{\mathrm f}}{dt}=I.
$$

这样，无论共边曲面穿过导线还是电容器间隙，都得到同一个环流。安培环路定理被修正为

$$
\oint_L\mathbf H\cdot d\mathbf l
=\iint_S\mathbf J_{\mathrm f}\cdot d\mathbf S
+\frac{d}{dt}\iint_S\mathbf D\cdot d\mathbf S.
$$

位移电流和传导电流都能激发磁场，但物理机制不同：传导电流是自由电荷的宏观运输，可有焦耳热；位移电流是变化的 $\mathbf D$ 对磁场的等效源，不代表自由电荷穿过了电容器间隙。

## Maxwell 方程组：积分形式

在宏观介质中，四条方程可写为

$$
\oiint_S\mathbf D\cdot d\mathbf S
=Q_{\mathrm{free,in}},
$$

$$
\oiint_S\mathbf B\cdot d\mathbf S=0,
$$

$$
\oint_L\mathbf E\cdot d\mathbf l
=-\frac{d}{dt}
\iint_S\mathbf B\cdot d\mathbf S,
$$

$$
\oint_L\mathbf H\cdot d\mathbf l
=\iint_S\mathbf J_{\mathrm f}\cdot d\mathbf S
+\frac{d}{dt}
\iint_S\mathbf D\cdot d\mathbf S.
$$

它们依次表示：自由电荷是 $\mathbf D$ 的源；没有被发现的磁单极；时变磁场激发涡旋电场；传导电流和时变电场共同激发磁场。

要在介质中实际求解，还需要材料的本构关系。在简单线性各向同性介质中，

$$
\mathbf D=\varepsilon\mathbf E,
\qquad
\mathbf B=\mu\mathbf H,
\qquad
\mathbf J_{\mathrm f}=\gamma\mathbf E.
$$

Maxwell 方程不会替你提供 $\varepsilon$、$\mu$、$\gamma$；这些是介质对场的响应。

## Maxwell 方程组：微分形式

在场足够光滑的区域，

$$
\nabla\cdot\mathbf D=\rho_{\mathrm f},
$$

$$
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf H
=\mathbf J_{\mathrm f}
+\frac{\partial\mathbf D}{\partial t}.
$$

对最后一式取散度，利用旋度的散度恒为零，得

$$
\nabla\cdot\mathbf J_{\mathrm f}
+\frac{\partial}{\partial t}
(\nabla\cdot\mathbf D)=0.
$$

再用 $\nabla\cdot\mathbf D=\rho_{\mathrm f}$，正好回到电荷连续性方程。位移电流不是为了追求形式对称硬加的项，它使电磁场方程与电荷守恒真正相容。

## 静态极限不是两套无关理论

当 $\partial/\partial t=0$ 时，Maxwell 方程自动退化成前面学过的两组方程：

$$
\nabla\times\mathbf E=0,
\qquad
\nabla\times\mathbf H=\mathbf J_{\mathrm f}.
$$

所以静电学和磁静学是统一电磁理论的低频特例，不是后来被丢掉的旧理论。

## 真空中的电磁波

在无自由电荷、无传导电流的真空区域，

$$
\nabla\cdot\mathbf E=0,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{\partial\mathbf B}{\partial t},
\qquad
\nabla\times\mathbf B
=\mu_0\varepsilon_0
\frac{\partial\mathbf E}{\partial t}.
$$

对法拉第定律再取旋度，用

$$
\nabla\times(\nabla\times\mathbf E)
=\nabla(\nabla\cdot\mathbf E)-\nabla^2\mathbf E,
$$

得

$$
\nabla^2\mathbf E
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf E}{\partial t^2}=0.
$$

同理，

$$
\nabla^2\mathbf B
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf B}{\partial t^2}=0.
$$

这就是波动方程，传播速度

$$
c=\frac1{\sqrt{\mu_0\varepsilon_0}}.
$$

它与实验已知的真空光速相等，于是得出课件的关键结论：光是电磁波。

在均匀、线性、无损介质中，同样的推导给出相速度

$$
v=\frac1{\sqrt{\mu\varepsilon}}.
$$

对有电导、色散或强吸收的真实介质，不能只用这个常数公式描写全部传播。

## 平面电磁波的基本性质

在真空平面波中：

- $\mathbf E$ 和 $\mathbf B$ 都垂直于传播方向 $\mathbf k$，电磁波是横波；
- $\mathbf E\perp\mathbf B$，$\mathbf E\times\mathbf B$ 指向传播方向；
- 两场同相振荡，幅值满足

$$
E=cB.
$$

线性介质中的场能密度为

$$
u=\frac12\mathbf E\cdot\mathbf D
+\frac12\mathbf B\cdot\mathbf H.
$$

能量流密度由坡印廷矢量表示：

$$
\mathbf S=\mathbf E\times\mathbf H.
$$

$\mathbf S$ 的方向是能量传播方向，大小是单位时间穿过单位垂直面积的电磁能。这也回应了课程开头的场观点：电磁场可以脱离场源在真空中传播，并携带能量和动量。

## 电磁波谱

无线电波、微波、红外、可见光、紫外、X 射线和 $\gamma$ 射线都是电磁波，区别主要在频率和波长。真空中

$$
c=\lambda f.
$$

同一真空中不同频段传播速度相同，但它们与物质相互作用的方式和能量尺度很不同。

## 用四句话把全课串起来

1. 电荷产生电场，磁感线没有起点和终点；
2. 变化的磁场产生有旋电场；
3. 传导电流和变化的电场共同产生磁场；
4. 离开场源后，时变电场和磁场仍能互相激发，以电磁波向外传播。

这不是额外背诵的结论，而是从前面每条实验定律一步步闭合出来的统一图像。
