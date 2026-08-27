---
title: "第 16 讲：电磁感应、自感与互感"
description: "区分动生与感生电动势，用法拉第—楞次定律统一处理磁通变化、电感和磁能。"
date: 2026-08-27
---

奥斯特发现“电流产生磁场”后，法拉第追问反过来的过程：磁能不能产生电？实验表明，恒定磁场本身不会让静止线圈中持续有电流，真正关键是穿过回路的磁通量发生变化。

## 电动势是什么

要让正电荷在闭合回路里持续流动，必须有非静电力在回路的某些区域做功。电动势定义为这种力对单位正电荷沿回路做的功：

$$
\mathcal E
=\oint_L\frac{\mathbf F_{\mathrm{nonstatic}}}{q}
\cdot d\mathbf l.
$$

它的单位是伏特，但“电动势”不是力，也不一定是两个固定点之间的静电势差。

## 法拉第电磁感应定律

对选定绕行方向的闭合回路，用右手四指指向回路正向，拇指给出所围曲面的正法线。磁通量为

$$
\Phi_B=\iint_S\mathbf B\cdot d\mathbf S.
$$

感应电动势满足

$$
\mathcal E_i=-\frac{d\Phi_B}{dt}.
$$

$N$ 匝线圈若每匝磁通相同，定义全磁通 $\Psi=N\Phi_B$，则

$$
\mathcal E_i=-\frac{d\Psi}{dt}
=-N\frac{d\Phi_B}{dt}.
$$

负号是楞次定律：感应电流产生的磁场总是阻碍原磁通的变化。它阻碍的是“变化”，不是简单地“与原磁场反向”：原磁通在减小时，感应场会尽力与原场同向。

## 磁通量可以怎样变

对均匀磁场和平面线圈，$\Phi_B=BS\cos\theta$。所以三种量任一变化都可产生感应：

- $B$ 大小或方向改变；
- 回路有效面积 $S$ 改变；
- 面法线与磁场的夹角 $\theta$ 改变。

“线圈在磁场中运动”本身不足以保证有电动势。例如整个刚性回路在无限大均匀磁场中平移，$B$、$S$、$\theta$ 都不变，闭合回路总电动势为零。

## 动生电动势

导体以速度 $\mathbf v$ 在磁场中运动时，内部载流子受洛伦兹力 $q\mathbf v\times\mathbf B$。对一段运动导线，

$$
\mathcal E_{\mathrm{mot}}
=\int(\mathbf v\times\mathbf B)\cdot d\mathbf l.
$$

直导体棒长 $l$，$\mathbf v$、$\mathbf B$ 和棒三者两两垂直时，

$$
|\mathcal E_{\mathrm{mot}}|=Blv.
$$

方向可用 $\mathbf v\times\mathbf B$ 判断，也可用楞次定律判断闭合回路电流方向。若导线弯曲，或 $B$、$v$ 随位置变化，必须做线积分，不能套 $Blv$。

转动导体也可产生动生电动势。例如金属杆绕一端在垂直均匀磁场中以角速度 $\omega$ 转动，长度为 $R$，则

$$
|\mathcal E|
=\int_0^RB(\omega r)\,dr
=\frac12B\omega R^2.
$$

这是法拉第圆盘发电机的基本结果。

## 动生过程的能量从哪里来

导体棒在磁场中切割磁感线，闭合回路中产生电流。该电流又使导体棒受到阻碍运动的安培力。若要维持匀速，外力必须做正功，这份机械能最终转化成回路的焦耳热或对外输出的电能。

微观上磁力对单个载流子仍不做功，但它改变载流子的运动方向，将外力给导体的能量转交给电流。楞次定律中的“阻碍”正是能量守恒的表现。

## 感生电场

导体回路不动、磁场随时间变化时，麦克斯韦提出：即使空间中没有导线，时变磁场也会产生有旋电场 $\mathbf E_{\mathrm{ind}}$：

$$
\oint_L\mathbf E_{\mathrm{ind}}
\cdot d\mathbf l
=-\frac{d}{dt}\iint_S\mathbf B\cdot d\mathbf S.
$$

若边界固定，可写成

$$
\oint_L\mathbf E_{\mathrm{ind}}
\cdot d\mathbf l
=-\iint_S\frac{\partial\mathbf B}{\partial t}
\cdot d\mathbf S,
$$

局部形式为

$$
\nabla\times\mathbf E
=-\frac{\partial\mathbf B}{\partial t}.
$$

这个电场的电场线闭合，不能在全空间由一个单值静电势来描述。感生电场不依赖于导体是否存在；导体只是让它驱动出可观测的感应电流。

局限在半径 $R$ 圆柱区域内的均匀轴向磁场 $B(t)$，由轴对称性，涡旋电场沿圆周方向，其大小为

$$
E_{\mathrm{ind}}(r)=
\begin{cases}
\dfrac r2\left|\dfrac{dB}{dt}\right|,&r\le R,\\[6pt]
\dfrac{R^2}{2r}\left|\dfrac{dB}{dt}\right|,&r\ge R.
\end{cases}
$$

即使 $r>R$ 处 $B=0$，那里仍可有非零感生电场，因为该环路所围曲面中的磁通在变。

涡流加热、感应炉、电磁阻尼和电子感应加速器都是课件中这一机制的应用。变压器铁芯做成绝缘薄片叠压，是为了切断大尺寸涡流回路、降低涡流损耗。

## 动生与感生的统一写法

对可运动导体回路，总电动势可写成

$$
\mathcal E
=\oint_L
(\mathbf E+\mathbf v\times\mathbf B)
\cdot d\mathbf l
=-\frac{d}{dt}\iint_S\mathbf B\cdot d\mathbf S.
$$

$\mathbf E$ 包含时变磁场产生的感生场，$\mathbf v\times\mathbf B$ 是回路运动的动生项。只有边界固定时，才能把全导数简单换成对 $\mathbf B$ 的偏导数。

## 自感

回路中电流改变，它自己产生的磁通也改变，从而在自身中产生电动势。线性、几何固定时，

$$
\Psi=LI,
$$

$$
\mathcal E_L=-L\frac{dI}{dt}.
$$

自感系数 $L$ 只由回路几何、匝数和周围介质决定。长密绕螺线管的自感为

$$
L=\mu\frac{N^2S}{l}
=\mu n^2Sl.
$$

若几何位置改变或含非线性铁磁芯，$L$ 可能不是常数，应从 $\mathcal E=-d(LI)/dt$ 出发，不能只留 $-L\,dI/dt$。

直流电源 $\mathcal E_0$、电阻 $R$ 和自感 $L$ 串联时，接通后

$$
I(t)=\frac{\mathcal E_0}{R}
\left(1-e^{-t/\tau}\right),
\qquad
\tau=\frac LR.
$$

断开电源而保留放电回路后，

$$
I(t)=I_0e^{-t/\tau}.
$$

电感阻碍电流的变化，不是永远阻碍电流；足够长时间后，理想电感对直流相当于导线。

## 互感

线圈 1 中的电流 $I_1$ 在线圈 2 中产生全磁通

$$
\Psi_{21}=M_{21}I_1,
$$

从而

$$
\mathcal E_{21}
=-M_{21}\frac{dI_1}{dt}.
$$

在线性互易介质和几何固定时，

$$
M_{12}=M_{21}=M.
$$

互感取决于线圈尺寸、匝数、相对位置和介质。它满足

$$
|M|\le\sqrt{L_1L_2},
\qquad
M=k\sqrt{L_1L_2},
\quad 0\le k\le1.
$$

两电感串联时，根据绕向与磁通是相助还是相消，

$$
L_{\mathrm{eq}}
=L_1+L_2\pm2M.
$$

变压器和无线充电利用互感；线路串扰和信号泄漏则是不希望出现的互感。

## 磁场能量

建立电流时，电源必须克服反向自感电动势做功，这份能量储存在磁场中：

$$
W_{\mathrm m}=\frac12LI^2.
$$

两个耦合线圈的总磁能为

$$
W_{\mathrm m}
=\frac12L_1I_1^2
+\frac12L_2I_2^2
+MI_1I_2,
$$

$M$ 的符号由绕向约定决定。线性磁介质中磁能密度为

$$
w_{\mathrm m}
=\frac12\mathbf B\cdot\mathbf H,
$$

真空中是 $B^2/(2\mu_0)$。对存在显著磁滞的铁磁体，$\mathbf B$ 与 $\mathbf H$ 不是单值线性关系，不能无条件套这个简单密度公式。

## 解题时的四个先后顺序

1. 先选回路正向和面法线，不先猜电流方向；
2. 写带符号的 $\Phi_B=\int\mathbf B\cdot d\mathbf S$；
3. 用 $\mathcal E=-d\Phi_B/dt$ 得代数结果，正负号自动说明真实方向；
4. 最后再用楞次定律做物理检查。

这个步骤比“看图先猜感应电流”更稳，特别是磁场、面积和方向同时变化时。
