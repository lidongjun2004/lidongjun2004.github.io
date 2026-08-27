---
title: "第 15 讲：磁力、带电粒子与磁介质"
description: "统一理解洛伦兹力、安培力、磁矩，再建立 B、H、M 和磁介质边界条件。"
date: 2026-08-27
---

上一讲解决了“电流如何产生磁场”，这一讲解决反过来的问题：磁场如何作用于运动电荷、载流导线和物质内部的微观磁矩。

## 洛伦兹力

![正负电荷在磁场中运动时洛伦兹力方向的右手定则](/images/academics/curriculum/basic-physics-a1/lessons/lorentz-force-directions.png)

带电量 $q$ 的粒子在电磁场中受力

$$
\mathbf F
=q(\mathbf E+\mathbf v\times\mathbf B).
$$

磁力部分始终垂直于速度：

$$
\mathbf F_B\cdot\mathbf v=0.
$$

所以单纯磁场不改变单个粒子的速率和动能，只改变速度方向。若只画受力后看见轨道弯曲，不能因此说“磁力给粒子加了速”。

## 均匀磁场中的轨道

将速度分解为 $\mathbf v=\mathbf v_{\parallel}+\mathbf v_\perp$。

- $\mathbf v\parallel\mathbf B$ 时磁力为零，粒子沿磁场线匀速运动；
- $\mathbf v\perp\mathbf B$ 时做匀速圆周运动；
- 两个分量都有时，合成沿磁场线的螺旋运动。

非相对论情形下，

$$
r=\frac{mv_\perp}{|q|B},
\qquad
\omega_c=\frac{|q|B}{m},
\qquad
T=\frac{2\pi m}{|q|B}.
$$

螺距为

$$
h=v_{\parallel}T.
$$

当速度接近光速时，周期不再与速度无关，不能继续套非相对论回旋周期。

非均匀磁场中，粒子的螺旋半径会随 $B$ 改变。缓慢进入强场区时，粒子可能被磁镜反射；两端强、中间弱的磁场构成磁瓶。课件用这一图像解释磁约束、范艾伦辐射带和极光。

## 载流导线的安培力

导线里大量载流子的洛伦兹力宏观化后，电流元受力

$$
d\mathbf F=I\,d\boldsymbol\ell\times\mathbf B.
$$

整段导线受力为

$$
\mathbf F=I\int d\boldsymbol\ell\times\mathbf B.
$$

直导线长 $l$，均匀磁场与电流夹角 $\theta$ 时，$F=IlB\sin\theta$。任意闭合电流回路在均匀磁场中的合力为

$$
\mathbf F
=I\oint d\boldsymbol\ell\times\mathbf B=0,
$$

但合力矩不一定为零。

两根相距 $a$ 的无限长平行导线，单位长度受力

$$
\frac Fl
=\frac{\mu_0I_1I_2}{2\pi a}.
$$

同向电流相吸，反向电流相斥。

## 载流线圈的磁矩

$N$ 匝平面线圈面积为 $S$，定义

$$
\mathbf m=NIS\hat{\mathbf n}.
$$

在均匀磁场中，线圈合力为零，力矩为

$$
\boldsymbol\tau=\mathbf m\times\mathbf B,
$$

势能为

$$
U=-\mathbf m\cdot\mathbf B.
$$

$\mathbf m$ 与 $\mathbf B$ 同向是稳定平衡。在非均匀场中，线圈还可受净力；对尺寸很小的磁偶极子，可用势能的空间梯度求力。

导线可以在磁场中受力做宏观机械功，与“磁力对单个电荷不做功”不矛盾：维持电流的电源与约束载流子的导体格点同时参与了能量转换。

## 速度选择器、质谱仪和霍尔效应

交叉电磁场中，若电力和磁力反向，直线通过的粒子满足

$$
qE=qvB,
\qquad
v=\frac EB.
$$

再让这些粒子进入单独磁场，由 $r=mv/(|q|B)$ 可分离不同荷质比，这就是质谱仪的基本逻辑。

载流薄板放入垂直板面的磁场后，载流子横向偏转，直到横向电场力抵消磁力。若薄板厚度为 $d$，载流子数密度为 $n$，则霍尔电压

$$
U_H=\frac{IB}{nqd}.
$$

电压正负可判断载流子符号，大小可用于求载流子密度或测量磁场。

## 介质为什么会磁化

课件以安培的“分子电流”图像组织磁介质：原子内电子轨道运动和自旋都贡献微观磁矩。外磁场会改变这些磁矩的大小或取向，产生宏观磁化。

定义磁化强度

$$
\mathbf M
=\lim_{\Delta V\to0}
\frac{\sum\mathbf m_i}{\Delta V},
$$

单位为 $\mathrm{A/m}$。磁化可等效为束缚电流：

$$
\mathbf J_{\mathrm b}=\nabla\times\mathbf M,
\qquad
\mathbf K_{\mathrm b}=\mathbf M\times\hat{\mathbf n}.
$$

均匀磁化介质内部 $\mathbf J_{\mathrm b}=0$，但表面仍有等效面电流 $\mathbf K_{\mathrm b}$。它与真正跨越宏观尺度运输电荷的传导电流不同，但两者都会产生磁场。

## $\mathbf B$、$\mathbf H$、$\mathbf M$

引入磁场强度

$$
\mathbf H=\frac{\mathbf B}{\mu_0}-\mathbf M,
$$

于是恒定场中

$$
\oint_L\mathbf H\cdot d\mathbf l
=I_{\mathrm{free,enc}},
$$

右边只数自由传导电流。得到 $\mathbf H$ 后，还要用介质的磁化关系求 $\mathbf M$ 和真正决定磁力的 $\mathbf B$。

对线性各向同性弱磁质，

$$
\mathbf M=\chi_{\mathrm m}\mathbf H,
$$

$$
\mathbf B
=\mu_0(\mathbf H+\mathbf M)
=\mu_0(1+\chi_{\mathrm m})\mathbf H
=\mu\mathbf H.
$$

- 顺磁质 $\chi_{\mathrm m}>0$，外场被微弱加强；
- 抗磁质 $\chi_{\mathrm m}<0$，外场被微弱削弱；
- 铁磁质中 $\mathbf B$ 与 $\mathbf H$ 强烈非线性，不能把 $\mu$ 当作常数。

铁磁质由磁畴构成。外场促使磁畴转向或有利取向的磁畴长大；去掉外场后可保留剩磁。$B$-$H$ 关系形成磁滞回线，回线面积对应每个循环的磁滞损耗。温度超过居里点后，铁磁性消失而转为顺磁性。

## 磁场的边界条件

取分界面法线 $\hat{\mathbf n}$ 由介质 1 指向介质 2。由磁高斯定理，

$$
(\mathbf B_2-\mathbf B_1)\cdot\hat{\mathbf n}=0,
$$

即 $B_n$ 总连续。由 $\mathbf H$ 的环路定理，

$$
\hat{\mathbf n}\times(\mathbf H_2-\mathbf H_1)
=\mathbf K_{\mathrm f},
$$

其中 $\mathbf K_{\mathrm f}$ 是界面上的自由面电流密度。界面无自由面电流时，$H_t$ 连续，但 $B_t$ 可因磁导率不同而跳变。高磁导率材料会让磁感线更倾向在材料内闭合，因此可用于磁屏蔽，但效果与理想导体的静电屏蔽不同。

## 最后只记一条主线

源电流先决定 $\mathbf H$，介质在 $\mathbf H$ 下产生 $\mathbf M$，两者共同决定

$$
\mathbf B=\mu_0(\mathbf H+\mathbf M).
$$

粒子和载流导线的磁力要用 $\mathbf B$，而只包自由电流的环路积分要用 $\mathbf H$。把这两个角色调换，是磁介质题最常见的错误。
