---
title: "第 9 周作业：钟摆与指数理论"
description: "整理第 9 周的阻尼钟摆、退化不动点指数、闭轨指数和积分公式"
date: 2026-08-24
tags: ["作业"]
---

源作业对应教材 6.7.1、6.8.2、6.8.4、6.8.6 与 6.8.13。前半用能量和线性化分析阻尼钟摆，后半学习一个很“拓扑”的工具：不精确求轨迹，也能用向量转了几圈判断闭轨能否存在。

## 6.7.1：阻尼钟摆

$$
\ddot\theta+b\dot\theta+\sin\theta=0,
\qquad b>0.
$$

令 $\omega=\dot\theta$，得到

$$
\dot\theta=\omega,\qquad
\dot\omega=-b\omega-\sin\theta.
$$

不动点为

$$
(\theta^*,\omega^*)=(k\pi,0),
\qquad k\in\mathbb Z.
$$

雅可比矩阵

$$
J(k\pi,0)=
\begin{pmatrix}
0&1\\
-(-1)^k&-b
\end{pmatrix}.
$$

### 向下平衡：$\theta=2k\pi$

特征方程是

$$
\lambda^2+b\lambda+1=0.
$$

- $0<b<2$：稳定焦点，摆动衰减着回到最低点；
- $b=2$：退化稳定结点，临界阻尼；
- $b>2$：稳定结点，过阻尼地回到最低点。

### 向上平衡：$\theta=(2k+1)\pi$

特征方程

$$
\lambda^2+b\lambda-1=0
$$

有一正一负两个根，所以总是鞍点。

能量

$$
E(\theta,\omega)
=\frac{\omega^2}{2}+1-\cos\theta
$$

满足

$$
\dot E
=\omega(-b\omega-\sin\theta)+\sin\theta\,\omega
=-b\omega^2\le0.
$$

因此阻尼持续耗散能量。画相图时要记得 $\theta$ 是周期变量：平面上相隔 $2\pi$ 的不动点，在圆柱相空间上其实是同一个位置。

## 6.8.2：指数为零的退化不动点

$$
\dot x=x^2,\qquad \dot y=y.
$$

唯一不动点是原点。在线性化里有零特征值，因此不能套双曲分类。

在小圆 $x=\varepsilon\cos\phi,\ y=\varepsilon\sin\phi$ 上，

$$
\boldsymbol f
=\left(\varepsilon^2\cos^2\phi,\,
\varepsilon\sin\phi\right).
$$

向量在右侧始终有非负水平分量：绕圆一周时，它从向右转向上、再回到向右、转向下、最后又回到向右，正转与反转抵消，净转角为零。因此

$$
I(0,0)=0.
$$

## 6.8.4：一个“高阶鞍点”

$$
\dot x=y^3,\qquad \dot y=x.
$$

唯一不动点仍是原点。在小圆上依次看四个轴向点：

$$
\begin{array}{c|c}
(x,y)&(\dot x,\dot y)\\
\hline
(\varepsilon,0)&(0,\varepsilon)\quad\text{向上}\\
(0,\varepsilon)&(\varepsilon^3,0)\quad\text{向右}\\
(-\varepsilon,0)&(0,-\varepsilon)\quad\text{向下}\\
(0,-\varepsilon)&(-\varepsilon^3,0)\quad\text{向左}
\end{array}
$$

沿小圆逆时针走一周，向量方向却顺时针转一整圈，所以

$$
I(0,0)=-1.
$$

它虽然不是双曲鞍点，拓扑指数却与普通鞍点相同。源手写扫描中的负号很淡；这里按向量实际绕向重新核验。

## 6.8.6：闭轨内各类不动点的计数

一条闭轨本身的指数为 $+1$。常见孤立不动点中：

- 结点、焦点、中心的指数都是 $+1$；
- 鞍点的指数是 $-1$。

若闭轨内分别有 $N$ 个结点、$F$ 个焦点、$C$ 个中心和 $S$ 个鞍点，则指数可加性给出

$$
N+F+C-S=1.
$$

移项即得

$$
\boxed{N+F+C=1+S}.
$$

这条式子常用于排除闭轨：若某个候选区域内不动点指数总和不是 $1$，就不可能有一条闭轨恰好包住它们。

## 6.8.13：曲线指数的积分公式

设

$$
\dot x=f(x,y),\qquad \dot y=g(x,y),
$$

闭曲线 $C$ 不经过不动点。向量场方向角满足

$$
\phi=\arctan\frac gf.
$$

令 $u=g/f$，由

$$
d(\arctan u)=\frac{du}{1+u^2},
\qquad
du=\frac{f\,dg-g\,df}{f^2}
$$

得到

$$
d\phi
=\frac{f\,dg-g\,df}{f^2+g^2}.
$$

沿 $C$ 积分并除以一整圈 $2\pi$：

$$
\boxed{
I_C
=\frac1{2\pi}
\oint_C
\frac{f\,dg-g\,df}{f^2+g^2}
}.
$$

这里 $df=f_xdx+f_ydy$、$dg=g_xdx+g_ydy$。积分结果必为整数，因为它数的是向量方向绕圆的次数。

## 本周做题模板

1. 二阶振子先改成一阶平面系统；
2. 周期角变量要把相平面理解成圆柱；
3. 指数题沿闭曲线固定逆时针方向，再数向量的净转角；
4. 结点、焦点、中心记 $+1$，鞍点记 $-1$；
5. 指数只反映拓扑绕向，不反映稳定性：稳定结点和不稳定结点的指数相同。
