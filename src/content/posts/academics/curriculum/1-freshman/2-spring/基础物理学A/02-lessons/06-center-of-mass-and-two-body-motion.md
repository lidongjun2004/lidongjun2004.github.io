---
title: "第 6 讲：质心运动与二体问题"
description: "用质心把质点系的整体平动与内部运动分开，并以约化质量处理二体相对运动。"
date: 2026-08-27
---

质心是质量分布的加权平均位置：

$$
\mathbf R_C=\frac1M\sum_i m_i\mathbf r_i,
\qquad M=\sum_i m_i.
$$

连续物体把求和换成

$$
\mathbf R_C=\frac1M\int\mathbf r\,dm.
$$

对均匀且高度对称的物体，质心由对称性确定；挖孔问题可把缺失部分当作“负质量”做叠加。

## 质心运动定理

$$
M\mathbf V_C=
\sum_i m_i\mathbf v_i=\mathbf P,
$$

所以

$$
\boxed{
M\mathbf a_C=\mathbf F_{\mathrm{ext}}
}.
$$

内力可以剧烈改变各部分相对运动，却不能改变质心运动。人在静止小船上走动、物体爆炸、太空人拉绳等问题，只要水平方向外力可忽略，质心水平位置保持不变。

若总外力为零，质心匀速运动；并不是系统内每个物体都匀速。

## 动能分解

令相对质心速度

$$
\mathbf v_i'=\mathbf v_i-\mathbf V_C.
$$

因 $\sum_i m_i\mathbf v_i'=0$，

$$
\sum_i\frac12m_iv_i^2
=\frac12MV_C^2
+\sum_i\frac12m_iv_i'^2.
$$

总动能等于质心整体平动动能与质心系内部动能之和。这是 König 定理，也是碰撞和刚体运动的基础。

## 二体问题的坐标变换

两个质量 $m_1,m_2$，定义

$$
\mathbf R=
\frac{m_1\mathbf r_1+m_2\mathbf r_2}
{m_1+m_2},
$$

$$
\mathbf r=\mathbf r_1-\mathbf r_2.
$$

反解：

$$
\mathbf r_1=\mathbf R+
\frac{m_2}{m_1+m_2}\mathbf r,
$$

$$
\mathbf r_2=\mathbf R-
\frac{m_1}{m_1+m_2}\mathbf r.
$$

若内力只依赖相对位置，整体质心运动与相对运动解耦。

## 约化质量

定义

$$
\mu=\frac{m_1m_2}{m_1+m_2}.
$$

二体动能成为

$$
K=\frac12M\dot R^2
+\frac12\mu\dot r^2.
$$

相对运动方程

$$
\mu\ddot{\mathbf r}
=\mathbf F(\mathbf r)
$$

看起来像质量为 $\mu$ 的单个粒子在中心力场中运动。若 $m_2\gg m_1$，则 $\mu\approx m_1$，退化为轻粒子绕近似固定重物运动。

## 引力二体能量

相对运动能量

$$
E_{\mathrm{rel}}
=\frac12\mu\dot r^2
-\frac{Gm_1m_2}{r}.
$$

结合相对角动量

$$
L=\mu r^2\dot\theta
$$

可写有效势能

$$
U_{\mathrm{eff}}(r)
=\frac{L^2}{2\mu r^2}
-\frac{Gm_1m_2}{r}.
$$

圆轨道位于有效势能极小值。束缚轨道 $E_{\mathrm{rel}}<0$，抛物线临界 $E_{\mathrm{rel}}=0$，双曲逃逸 $E_{\mathrm{rel}}>0$。

## 变形系统的质心

质心定理不要求系统刚性。人在船上移动、绳子从桌边滑落时，内部质量分布在变，但只要把所有相关部分纳入系统，质心方程仍成立。

最常见错误是系统选得不完整：例如只把人作为研究对象，却又想消掉人与船之间的内力。
