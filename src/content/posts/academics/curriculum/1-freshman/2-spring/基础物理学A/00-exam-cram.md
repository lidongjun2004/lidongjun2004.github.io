---
title: "速成 · 基础物理学 A"
description: "从力学、狭义相对论到电磁学，用守恒律、场和对称性串起基础物理学 A。"
date: 2026-08-27
tags: ["速成"]
---

这门课横跨力学、狭义相对论和电磁学，但解题方式高度统一：

1. 选研究对象和参考系；
2. 利用对称性判断方向与不变量；
3. 写局部定律或守恒律；
4. 处理边界、初始条件和正负号；
5. 用量纲与极限检查结果。

## 力学：先决定用哪条主线

### 运动学

$$
\mathbf v=\frac{d\mathbf r}{dt},\qquad
\mathbf a=\frac{d\mathbf v}{dt}.
$$

平面极坐标：

$$
\mathbf v=\dot r\,\mathbf e_r+r\dot\theta\,\mathbf e_\theta,
$$

$$
\mathbf a=(\ddot r-r\dot\theta^2)\mathbf e_r
+(r\ddot\theta+2\dot r\dot\theta)\mathbf e_\theta.
$$

圆周运动的切向、法向分量：

$$
a_\tau=\frac{dv}{dt},\qquad
a_n=\frac{v^2}{R}.
$$

### 三个守恒律

线动量：

$$
\frac{d\mathbf P}{dt}=\mathbf F_{\mathrm{ext}},
\qquad
\Delta\mathbf P=\int\mathbf F_{\mathrm{ext}}dt.
$$

机械能：

$$
K=\frac12mv^2,\qquad
W_{\mathrm{net}}=\Delta K.
$$

保守力 $\mathbf F=-\nabla U$，若只有保守力做功，则 $K+U$ 守恒。

角动量：

$$
\mathbf L=\mathbf r\times\mathbf p,\qquad
\frac{d\mathbf L}{dt}=\boldsymbol\tau_{\mathrm{ext}}.
$$

选哪条取决于题目：

- 碰撞、爆炸、短时冲量：动量；
- 只问位置与速度、路径上有保守力：能量；
- 绕点运动、中心力：角动量；
- 需要时间或约束力：通常回到牛顿第二定律。

### 质心与刚体

$$
\mathbf R_C=\frac1M\sum_im_i\mathbf r_i,
\qquad
M\mathbf a_C=\mathbf F_{\mathrm{ext}}.
$$

定轴刚体：

$$
\tau=I\alpha,\qquad
K=\frac12I\omega^2.
$$

平行轴定理：

$$
I=I_C+Md^2.
$$

纯滚动约束 $v_C=\omega R$；静摩擦未必做功，也未必等于 $\mu_sN$，其数值由动力学方程决定。

## 相对论：不变量比“谁变慢”更可靠

$$
\gamma=\frac1{\sqrt{1-v^2/c^2}}.
$$

洛伦兹变换：

$$
x'=\gamma(x-vt),\qquad
t'=\gamma\left(t-\frac{vx}{c^2}\right).
$$

固有时在两个事件同地的参考系测量：

$$
\Delta t=\gamma\Delta\tau.
$$

固有长度在物体静止系测量：

$$
L=\frac{L_0}{\gamma}.
$$

时空间隔

$$
c^2\Delta t^2-\Delta x^2
$$

在惯性系间不变。相对论动量与能量：

$$
\mathbf p=\gamma m\mathbf v,\qquad
E=\gamma mc^2,
$$

$$
E^2=p^2c^2+m^2c^4.
$$

## 静电场：离散电荷叠加，连续分布用对称性

$$
\mathbf E(\mathbf r)=
\frac1{4\pi\varepsilon_0}
\int\frac{\mathbf r-\mathbf r'}
{|\mathbf r-\mathbf r'|^3}\,dq.
$$

高斯定律：

$$
\oint_S\mathbf E\cdot d\mathbf S
=\frac{Q_{\mathrm{in}}}{\varepsilon_0}.
$$

只有球、柱、平面等高对称情况，高斯定律才能直接求场。

电势：

$$
V(B)-V(A)=-\int_A^B\mathbf E\cdot d\mathbf l,
\qquad
\mathbf E=-\nabla V.
$$

势是标量，叠加比场更容易。导体静电平衡时内部场为零、整体等势、净电荷在表面，表面外法向场满足 $E_n=\sigma/\varepsilon_0$。

电容器：

$$
C=\frac Q{\Delta V},\qquad
U=\frac12C(\Delta V)^2
=\frac{Q^2}{2C}.
$$

插介质后先判断电源是否仍连接：接电源时电压不变，断开时自由电荷不变。

## 磁场与电磁感应

洛伦兹力：

$$
\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B).
$$

磁力不做功，只改变速度方向。匀强磁场中垂直运动：

$$
R=\frac{mv}{|q|B},\qquad
\omega_c=\frac{|q|B}{m}.
$$

Biot–Savart：

$$
d\mathbf B=
\frac{\mu_0}{4\pi}
\frac{I\,d\mathbf l\times\hat{\mathbf r}}{r^2}.
$$

安培环路定律：

$$
\oint\mathbf B\cdot d\mathbf l
=\mu_0I_{\mathrm{enc}}
$$

适用于稳恒电流，并要有足够对称性才能直接解场。

Faraday 定律：

$$
\mathcal E=-\frac{d\Phi_B}{dt}.
$$

负号是 Lenz 定律：感应效应反抗磁通的变化。动生电动势也可写

$$
\mathcal E=\oint
(\mathbf v\times\mathbf B)\cdot d\mathbf l.
$$

电感储能：

$$
U_L=\frac12LI^2.
$$

## Maxwell 方程组

$$
\nabla\cdot\mathbf E=\frac\rho{\varepsilon_0},
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E=-\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf B=
\mu_0\mathbf J+
\mu_0\varepsilon_0\frac{\partial\mathbf E}{\partial t}.
$$

位移电流项使变化电场也能产生磁场，并导出真空电磁波速度

$$
c=\frac1{\sqrt{\mu_0\varepsilon_0}}.
$$

## 考场检查

- 矢量方向是否由右手定则或坐标基明确给出；
- 功、通量、环量的正负是否与所选方向一致；
- 守恒律是否真的满足“外冲量/外力矩/非保守功为零”；
- 高斯面或安培回路是不是只利用了定律，却没有足够对称性；
- 相对论中的长度是否为同时测量，时间是否为同地事件；
- 答案在 $v\ll c$、距离趋远、介质退化为真空等极限下是否回到熟悉结果。
