---
title: "第 14 讲：光的衍射、光栅与分辨率"
description: "从 Huygens–Fresnel 原理推到单缝强度、圆孔 Airy 斑、Rayleigh 判据和多缝光栅。"
date: 2026-08-27
---

几何光学的直线传播是波长远小于孔径和障碍物时的近似。孔径接近波长后，光会进入几何阴影区并形成明暗分布，这就是衍射。

## Huygens–Fresnel 原理

波前上的每一点都可看成发出次波的源，后续光场是所有次波在观察点的相干叠加。Huygens 给出波前传播的几何构造，Fresnel 加入振幅和相位叠加，才解释了明暗条纹。

按装置分：

- Fresnel 衍射：光源和观察屏距孔径有限；
- Fraunhofer 衍射：入射和出射近似平行，常用透镜在焦平面观察。

## 单缝 Fraunhofer 衍射

缝宽 $a$，观察方向与光轴夹角 $\theta$。缝上各窄带到观察点的总相位跨度为

$$
2\beta=\frac{2\pi a\sin\theta}{\lambda},
\qquad
\beta=\frac{\pi a\sin\theta}{\lambda}.
$$

相量积分得到

$$
I(\theta)=I_0
\left(\frac{\sin\beta}{\beta}\right)^2.
$$

暗纹条件：

$$
a\sin\theta=k\lambda,
\qquad
k=\pm1,\pm2,\ldots
$$

中央明纹位于两个一级暗纹之间，角宽约

$$
\Delta\theta_{\mathrm{central}}\approx\frac{2\lambda}{a}.
$$

其他明纹约为中央明纹的一半宽，强度迅速下降。

![单缝衍射与光栅主极大](/images/academics/basic-physics-a2/diffraction-patterns.svg)

## 圆孔与 Airy 斑

直径 $D$ 的圆孔不会把点光源成像成数学点，而形成中央 Airy 斑和较弱圆环。第一暗环角半径

$$
\theta_1\approx1.22\frac{\lambda}{D}.
$$

孔径越大，斑越小，角分辨能力越强。

Rayleigh 判据把两个点像“刚好可分辨”定义为：一个 Airy 斑中心落在另一个的第一暗环处。因此

$$
\theta_{\min}\approx1.22\frac{\lambda}{D}.
$$

这不是仪器加工不好，而是有限孔径和波动性带来的衍射极限。

## 多缝与衍射光栅

光栅常数

$$
d=a+b,
$$

其中 $a$ 是透光缝宽，$b$ 是不透光间隔。相邻缝光程差为 $d\sin\theta$，主极大满足

$$
d\sin\theta=k\lambda.
$$

总强度可理解为：

$$
\text{单缝衍射包络}
\times
\text{N 缝干涉因子}.
$$

缝数 $N$ 越多，主极大越窄、越亮，两主极大之间有 $N-1$ 个极小。

## 缺级

若某方向同时满足光栅主极大

$$
d\sin\theta=k\lambda
$$

和单缝暗纹

$$
a\sin\theta=m\lambda,
$$

该级主极大被单缝包络压成零，出现缺级。联立可得

$$
\frac{k}{m}=\frac da.
$$

## 色散与分辨本领

不同波长的同一级主极大角度不同，所以光栅能分光。角分散率

$$
\frac{\mathrm d\theta}{\mathrm d\lambda}
=\frac{k}{d\cos\theta}.
$$

光栅分辨本领

$$
\mathcal R=\frac{\lambda}{\Delta\lambda}=kN.
$$

高衍射级和更多被照亮的缝能分开更接近的谱线，但实际还受光强、重叠级次和器件尺寸限制。

## 干涉与衍射不是两种叠加规则

二者都来自相干叠加。通常把有限宽连续孔径内部各点的叠加叫衍射，把少数分立相干波束的叠加叫干涉。光栅恰好同时出现两者，说明边界并不绝对。
