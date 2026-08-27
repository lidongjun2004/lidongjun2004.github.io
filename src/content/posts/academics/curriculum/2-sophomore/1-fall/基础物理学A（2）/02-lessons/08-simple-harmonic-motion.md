---
title: "第 8 讲：简谐振动与能量"
description: "从恢复力和微分方程得到振幅、相位、周期，用旋转矢量、初始条件和能量三种视角理解简谐振动。"
date: 2026-08-27
---

振动是系统在稳定平衡位置附近的往复运动。大量弱扰动下的系统都能近似为简谐振动，因为势能在稳定平衡点附近的最低阶非平凡项通常是二次项。

![简谐振动的旋转矢量与能量交换](/images/academics/basic-physics-a2/shm-phase-energy.svg)

## 动力学定义

若恢复力与位移成反比且方向相反：

$$
F=-kx,
$$

Newton 第二定律给出

$$
m\ddot x+kx=0,
$$

即

$$
\ddot x+\omega_0^2x=0,
\qquad
\omega_0=\sqrt{\frac{k}{m}}.
$$

通解

$$
x(t)=A\cos(\omega_0t+\varphi).
$$

$A$ 是振幅，$\omega_0$ 是固有角频率，$\varphi$ 是初相位。

$$
T=\frac{2\pi}{\omega_0},
\qquad
\nu=\frac1T.
$$

## 速度、加速度与相位

$$
v=-A\omega_0\sin(\omega_0t+\varphi),
$$

$$
a=-A\omega_0^2\cos(\omega_0t+\varphi)
=-\omega_0^2x.
$$

加速度始终指向平衡位置。速度相对位移超前 $\pi/2$，加速度与位移反相。

## 由初始条件求振幅和相位

若 $t=0$ 时 $x=x_0,v=v_0$：

$$
x_0=A\cos\varphi,
\qquad
v_0=-A\omega_0\sin\varphi.
$$

因此

$$
A=\sqrt{x_0^2+\left(\frac{v_0}{\omega_0}\right)^2}.
$$

相位要结合 $\cos\varphi$ 和 $\sin\varphi$ 的符号判断象限，不能只用普通 $\arctan$ 丢掉象限信息。

## 旋转矢量

长度为 $A$ 的矢量以角速度 $\omega_0$ 匀速旋转，其在横轴上的投影就是 $x=A\cos(\omega_0t+\varphi)$。

这个图景能直接看出：

- 相位是矢量转过的角；
- 同频振动合成可转成矢量相加；
- 微分、积分只改变振幅比例和相位，仍是同频简谐量。

## 能量

弹簧振子的势能和动能：

$$
U=\frac12kx^2
=\frac12kA^2\cos^2(\omega_0t+\varphi),
$$

$$
K=\frac12mv^2
=\frac12kA^2\sin^2(\omega_0t+\varphi).
$$

总能量

$$
E=K+U=\frac12kA^2
$$

保持不变。能量在动能与势能之间以 $2\omega_0$ 的角频率交换。

在平衡位置 $x=0$，速度最大、势能最小；在端点 $|x|=A$，速度为零、势能最大。

## 小角近似

单摆满足

$$
\ddot\theta+\frac g\ell\sin\theta=0.
$$

只有在 $|\theta|\ll1$ 时用 $\sin\theta\approx\theta$，才得到

$$
T\approx2\pi\sqrt{\frac{\ell}{g}}.
$$

所以“单摆周期与振幅无关”是小振幅近似下的结论。

## 怎样识别简谐运动

- 最可靠：运动方程能化成 $\ddot x+\omega_0^2x=0$；
- 等价判据：加速度与位移成正比、方向相反；
- 只看轨迹来回或波形“像正弦”不够。

遇到复杂系统，可先在稳定平衡点附近展开恢复力，保留线性项，往往就得到有效弹簧常量和固有频率。
