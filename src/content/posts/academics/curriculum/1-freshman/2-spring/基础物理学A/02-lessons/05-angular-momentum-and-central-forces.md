---
title: "第 5 讲：角动量、力矩与中心力"
description: "掌握对点的角动量定理、冲量矩、中心力守恒，并联系面积速度和有效势能。"
date: 2026-08-27
---

角动量是转动问题中的动量。对选定原点 $O$，

$$
\mathbf L_O=\mathbf r\times\mathbf p,
$$

$$
\boldsymbol\tau_O=\mathbf r\times\mathbf F.
$$

角动量与力矩都依赖参考点；换原点后一般会变。

## 角动量定理

在惯性系、原点固定时，

$$
\frac{d\mathbf L_O}{dt}
=\boldsymbol\tau_{O,\mathrm{ext}}.
$$

积分得角冲量定理：

$$
\Delta\mathbf L_O=
\int\boldsymbol\tau_O\,dt.
$$

若对某点的外力矩为零，关于该点的总角动量守恒。外力本身不必为零，只要其作用线通过所选点，力矩就为零。

## 质点系

质点系总角动量

$$
\mathbf L_O=\sum_i
\mathbf r_i\times m_i\mathbf v_i.
$$

满足

$$
\frac{d\mathbf L_O}{dt}
=\boldsymbol\tau_{O,\mathrm{ext}},
$$

前提是内力成对共线，内力矩抵消。

关于任意点的总角动量可拆成质心公转与相对质心转动：

$$
\mathbf L_O=
\mathbf R_C\times M\mathbf V_C
+\mathbf L_C.
$$

## 中心力

中心力始终沿 $\mathbf r$：

$$
\mathbf F=f(r)\mathbf e_r.
$$

因此

$$
\boldsymbol\tau_O=
\mathbf r\times\mathbf F=0,
$$

角动量守恒。运动被限制在垂直于固定 $\mathbf L$ 的平面内。

面积速度

$$
\frac{dA}{dt}=\frac12r^2\dot\theta
=\frac{L}{2m}
$$

为常量，这就是 Kepler 第二定律对任意中心力的来源。

## 有效势能

平面极坐标下

$$
L=mr^2\dot\theta.
$$

总能量

$$
E=\frac12m\dot r^2
+\frac{L^2}{2mr^2}+U(r).
$$

定义

$$
U_{\mathrm{eff}}(r)=
U(r)+\frac{L^2}{2mr^2}.
$$

径向运动等效为一维粒子在有效势能中运动。第二项是角动量产生的离心势垒，使非零角动量粒子难以到达 $r=0$。

圆轨道满足

$$
\frac{dU_{\mathrm{eff}}}{dr}=0,
$$

稳定性由二阶导数判断。

## 瞬时碰撞中的角动量

碰撞时间很短时，若某外力虽大但对选点力矩为零，可对该点使用角动量守恒，即使线动量不守恒。

例如细杆绕固定铰链被小球撞击：铰链冲量未知且破坏杆—球系统线动量守恒，但铰链冲量对铰点力矩为零，因此碰撞瞬间关于铰点角动量守恒。

碰撞后若继续摆动，再用机械能守恒求上升角度。不要把碰撞瞬间也误用机械能守恒，除非明确为弹性碰撞。

## 方向判断

角动量和力矩用右手定则。二维题中先规定纸外为正，直接用

$$
L_z=xp_y-yp_x,
\qquad
\tau_z=xF_y-yF_x
$$

可减少口头判断错误。
