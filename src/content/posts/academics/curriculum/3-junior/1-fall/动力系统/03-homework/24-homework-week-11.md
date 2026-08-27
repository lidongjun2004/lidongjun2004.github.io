---
title: "第 11 周作业：Hopf 分岔与捕食模型"
description: "整理第 11 周的亚临界 Hopf 判别与捕食者—猎物模型分岔"
date: 2026-08-24
tags: ["作业"]
---

源作业对应教材 8.2.3 与 8.2.8。两题都在问同一件事：一对共轭特征值穿过虚轴后，产生的是稳定小环还是不稳定小环？

## 题目

完成教材 8.2.3 与 8.2.8：对给定系统检验 Hopf 分岔条件，判断分岔的临界或超临界类型，并分析捕食者—猎物模型的临界参数与生物学含义。

<details class="exam-answer">
<summary>查看解答</summary>

## 8.2.3：用平均径向方程识别亚临界 Hopf

$$
\begin{aligned}
\dot x&=-y+\mu x+xy^2,\\
\dot y&=x+\mu y-x^2.
\end{aligned}
$$

原点的雅可比矩阵为

$$
J(0,0)=
\begin{pmatrix}
\mu&-1\\
1&\mu
\end{pmatrix},
$$

特征值

$$
\lambda_{1,2}=\mu\pm i.
$$

所以 $\mu=0$ 时满足 Hopf 分岔的线性必要条件；$\mu<0$ 时原点稳定，$\mu>0$ 时原点不稳定。

令 $x=r\cos\theta,\ y=r\sin\theta$。由

$$
r\dot r=x\dot x+y\dot y
$$

得到

$$
\dot r
=\mu r-r^2\cos^2\theta\sin\theta
+r^3\cos^2\theta\sin^2\theta.
$$

小振幅时 $\dot\theta=1+O(r)$。在一周内做平均：

$$
\left\langle\cos^2\theta\sin\theta\right\rangle=0,
\qquad
\left\langle\cos^2\theta\sin^2\theta\right\rangle=\frac18.
$$

于是平均径向方程为

$$
\dot r
=\mu r+\frac18r^3+\text{高阶项}.
$$

当 $\mu<0$ 时，除 $r=0$ 外还有

$$
r_*\approx\sqrt{-8\mu}.
$$

对径向右端求导：

$$
\left.\frac{d}{dr}
\left(\mu r+\frac18r^3\right)\right|_{r=r_*}
=-2\mu>0,
$$

所以这个小极限环不稳定。它在 $\mu<0$ 一侧包围稳定原点，随 $\mu\uparrow0$ 缩到原点；越过零后原点失稳而小环消失。因此这是**亚临界 Hopf 分岔**。

## 8.2.8：捕食者—猎物模型

$$
\dot x=x[x(1-x)-y],\qquad
\dot y=y(x-a),
\qquad x,y,a\ge0.
$$

$x$ 是猎物，$y$ 是捕食者，$a$ 是捕食者的死亡阈值。

### 零增长线与不动点

零增长线为

$$
x=0\quad\text{或}\quad y=x(1-x),
$$

以及

$$
y=0\quad\text{或}\quad x=a.
$$

不动点是

$$
(0,0),\qquad
(1,0),\qquad
(a,a-a^2).
$$

第三点只有在 $0\le a\le1$ 时位于第一象限。

### 三个不动点的分类

雅可比矩阵

$$
J(x,y)=
\begin{pmatrix}
2x-3x^2-y&-x\\
y&x-a
\end{pmatrix}.
$$

在 $(0,0)$，线性化有一个零特征值。沿 $y=0$，

$$
\dot x=x^2(1-x)>0\qquad(0<x<1),
$$

所以原点不稳定，是非双曲的鞍结型平衡。

在 $(1,0)$，特征值为

$$
-1,\qquad 1-a.
$$

- $0<a<1$ 时是鞍点；
- $a>1$ 时是稳定结点；
- $a=1$ 时与共存平衡相碰，线性化退化。

在共存点 $(a,a-a^2)$，

$$
\tau=a(1-2a),\qquad
\Delta=a^2(1-a).
$$

对 $0<a<1$，行列式为正，稳定性由迹决定：

- $0<a<1/2$：迹为正，共存点不稳定；
- $1/2<a<1$：迹为负，共存点稳定；
- $a=1/2$：迹为零，出现纯虚特征值。

### Hopf 临界值

在

$$
a_H=\frac12
$$

处，

$$
\Delta=\frac18,\qquad
\lambda_{1,2}=\pm\frac{i}{2\sqrt2}.
$$

因此小振荡角频率为

$$
\omega_H=\frac1{2\sqrt2}.
$$

教材要求结合相图判断分岔类型：当 $a$ 从大于 $1/2$ 降到小于 $1/2$，共存点由稳定变为不稳定，同时出现一条稳定极限环，所以是**超临界 Hopf 分岔**。若改用参数 $\mu=1/2-a$，它就是熟悉的“$\mu$ 过零后稳定小环诞生”。

### 生物学解释

- $a>1$：捕食者死亡阈值过高，共存点离开第一象限，系统趋于 $(1,0)$，捕食者灭绝；
- $1/2<a<1$：捕食者与猎物趋于稳定共存；
- $0<a<1/2$：共存点失稳，种群数量在稳定周期上持续振荡。

## 亚临界与超临界怎么不再记反

- **超临界**：不动点失稳的一侧出现**稳定**小环；
- **亚临界**：稳定不动点外侧存在**不稳定**小环，小环撞进原点后消失。

考试时不要只写名称。至少给出原点两侧的稳定性、极限环存在于参数哪一侧，以及极限环本身稳定还是不稳定。

</details>
