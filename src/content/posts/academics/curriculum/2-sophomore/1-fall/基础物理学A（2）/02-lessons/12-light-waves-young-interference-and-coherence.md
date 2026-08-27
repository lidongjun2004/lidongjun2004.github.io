---
title: "第 12 讲：光波、Young 干涉与相干性"
description: "从电磁波与光程出发，推导 Young 双缝条纹，并解释普通光源为什么需要分波前或分振幅获得相干光。"
date: 2026-08-27
---

光学课件先回顾光的本性：几何光学研究波长远小于器件尺度时的传播，波动光学研究干涉、衍射和偏振，量子光学则处理光与物质相互作用中的光子特征。

## 光是电磁波

平面电磁波中 $\vec E$、$\vec B$ 与传播方向相互垂直，且同相变化。真空中

$$
c=\frac1{\sqrt{\mu_0\varepsilon_0}}.
$$

进入折射率 $n$ 的介质：

$$
v=\frac cn,
\qquad
\lambda=\frac{\lambda_0}{n}.
$$

频率由光源决定，跨界面保持不变。

## 为什么两盏灯看不到稳定干涉

普通光源由大量原子独立、随机地发出有限长度波列。不同原子或同一原子前后两次发光的初相都随机变化，所以长时间平均后干涉项消失。

获得相干光的常用办法是从同一束光分出两路：

- 分波前：Young 双缝、Fresnel 双镜等；
- 分振幅：薄膜、Michelson 干涉仪等。

## 光程

介质中几何路程 $r$ 对应的光程

$$
L=nr.
$$

不同折射率和不同几何长度可统一比较光程差

$$
\delta=L_2-L_1.
$$

相位差

$$
\Delta\varphi=\frac{2\pi}{\lambda_0}\delta+\Delta\varphi_{\mathrm{extra}},
$$

其中 $\lambda_0$ 是真空波长，额外相位可来自初相或反射相变。

![Young 双缝与薄膜光程差](/images/academics/basic-physics-a2/interference-optical-path.svg)

## Young 双缝

缝距 $d$，屏距 $D\gg d$，观察点距中央 $x$。小角近似下

$$
\delta=d\sin\theta\approx\frac{dx}{D}.
$$

同相双缝的明纹：

$$
\delta=k\lambda,
\qquad
x_k=k\frac{\lambda D}{d}.
$$

暗纹：

$$
\delta=\left(k+\frac12\right)\lambda.
$$

相邻明纹间距

$$
\Delta x=\frac{\lambda D}{d}.
$$

增大波长或屏距，条纹变宽；增大缝距，条纹变密。

## 强度与可见度

两束光强为 $I_1,I_2$：

$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi.
$$

最大、最小强度

$$
I_{\max}=(\sqrt{I_1}+\sqrt{I_2})^2,
$$

$$
I_{\min}=(\sqrt{I_1}-\sqrt{I_2})^2.
$$

条纹可见度

$$
\mathcal V=
\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}
=\frac{2\sqrt{I_1I_2}}{I_1+I_2}.
$$

两束等强时可见度最高；相位完全相干但强度相差很大，暗纹也不会很暗。

## 空间相干与时间相干

- 空间相干关心同一波前上不同位置的相位关联，光源越小通常越好；
- 时间相干关心同一点不同时刻的相位关联，谱线越窄、相干时间越长。

光程差超过相干长度后，即使几何上满足明纹条件，条纹也会消失。

## 插入透明片

若一路插入厚度 $h$、折射率 $n$ 的薄片，替代原来的空气，会增加光程

$$
\Delta\delta=(n-1)h.
$$

条纹整体平移的条数

$$
N=\frac{(n-1)h}{\lambda_0}.
$$

先判断哪一路光程增加，再判断条纹向哪边移动，不能只给平移量没有方向。
