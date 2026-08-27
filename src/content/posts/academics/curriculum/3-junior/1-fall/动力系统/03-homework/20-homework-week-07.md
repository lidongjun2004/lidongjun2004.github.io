---
title: "第 7 周作业：二维线性系统与相图"
description: "整理第 7 周的矩阵形式、稳定性定义、特征值分类、相图和 LRC 电路"
date: 2026-08-24
tags: ["作业"]
---

这一周从“会解方程”转向“看到矩阵就能读出相图”。源作业对应教材 5.1.2、5.1.3、5.1.5、5.1.10、5.2.1、5.2.3、5.2.5、5.2.7—5.2.9 与 5.2.12。

## 题目

完成教材 5.1.2、5.1.3、5.1.5、5.1.10、5.2.1、5.2.3、5.2.5、5.2.7—5.2.9 与 5.2.12：把二维线性系统写成矩阵形式，区分稳定性概念，并用特征值、特征向量分析相图和 LRC 电路模型。

<details class="exam-answer">
<summary>查看解答</summary>

## 5.1.2：轨迹为何贴近特征方向

考虑

$$
\dot x=ax,\qquad \dot y=-y,\qquad a<-1.
$$

精确解是

$$
x=x_0e^{at},\qquad y=y_0e^{-t}.
$$

因此轨迹斜率为

$$
\frac{dy}{dx}
=\frac{\dot y}{\dot x}
=-\frac{y_0}{ax_0}e^{-(a+1)t}.
$$

因为 $a+1<0$：

- $t\to+\infty$ 时，斜率绝对值趋于无穷，轨迹与 $y$ 方向平行；
- $t\to-\infty$ 时，斜率趋于 $0$，轨迹与 $x$ 方向平行。

这就是结点相图里的“快、慢方向”：正时间靠近原点时，衰减较慢的 $e^{-t}$ 最终占主导；反向时间则是增长更快的 $e^{at}$ 占主导。

## 5.1.3 与 5.1.5：写成矩阵形式

### 5.1.3

$$
\dot x=-y,\qquad \dot y=-x
$$

可写为

$$
\begin{pmatrix}\dot x\\\dot y\end{pmatrix}
=
\begin{pmatrix}0&-1\\-1&0\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}.
$$

### 5.1.5

$$
\dot x=0,\qquad \dot y=x+1
$$

不是齐次线性系统，而是仿射系统：

$$
\begin{pmatrix}\dot x\\\dot y\end{pmatrix}
=
\begin{pmatrix}0&0\\1&0\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
+
\begin{pmatrix}0\\1\end{pmatrix}.
$$

常数项不能硬塞进 $2\times2$ 矩阵；若一定要齐次化，可以增广状态 $(x,y,1)^\mathsf T$。

## 5.1.10：吸引、稳定与渐近稳定不是同一件事

- **吸引**：附近轨迹最终收敛到不动点，但中途可以先离开；
- **李雅普诺夫稳定**：足够近的轨迹永远保持足够近，但不要求收敛；
- **渐近稳定**：既稳定又吸引。

六个系统的结论如下。

| 小题 | 系统 | 原点的性质 | 为什么 |
|---|---|---|---|
| a | $\dot x=y,\ \dot y=-4x$ | 李雅普诺夫稳定，不吸引 | 椭圆闭轨绕原点运动 |
| b | $\dot x=2y,\ \dot y=x$ | 两者都不是 | 鞍点存在离开方向 |
| c | $\dot x=0,\ \dot y=x$ | 两者都不是 | $x_0\ne0$ 时 $y=y_0+x_0t$ 无界 |
| d | $\dot x=0,\ \dot y=-y$ | 李雅普诺夫稳定，不吸引 | $y\to0$，但 $x(t)=x_0$ 不会趋于零 |
| e | $\dot x=-x,\ \dot y=-5y$ | 渐近稳定 | 两个分量都指数衰减 |
| f | $\dot x=x,\ \dot y=y$ | 两者都不是 | 任意非零扰动都指数增长 |

最容易混淆的是 d：轨迹确实“靠近某个点”，但它靠近的是 $(x_0,0)$，不一定是原点。

## 5.2.1：完整做一遍特征分解

$$
\dot x=4x-y,\qquad \dot y=2x+y,
\qquad
A=\begin{pmatrix}4&-1\\2&1\end{pmatrix}.
$$

特征多项式

$$
\det(A-\lambda I)=\lambda^2-5\lambda+6
=(\lambda-2)(\lambda-3).
$$

可以取

$$
\lambda_1=2,\quad \boldsymbol v_1=(1,2)^\mathsf T;
\qquad
\lambda_2=3,\quad \boldsymbol v_2=(1,1)^\mathsf T.
$$

通解为

$$
\begin{pmatrix}x\\y\end{pmatrix}
=C_1e^{2t}\begin{pmatrix}1\\2\end{pmatrix}
+C_2e^{3t}\begin{pmatrix}1\\1\end{pmatrix}.
$$

两个特征值都为正，所以原点是不稳定结点。对初值 $(3,4)$，

$$
C_1(1,2)+C_2(1,1)=(3,4)
$$

给出 $C_1=1,C_2=2$，于是

$$
x=e^{2t}+2e^{3t},\qquad
y=2e^{2t}+2e^{3t}.
$$

## 5.2.3—5.2.9：看到迹和行列式就先分类

记 $\tau=\operatorname{tr}A$、$\Delta=\det A$、$D=\tau^2-4\Delta$。

### 5.2.3

$$
A=\begin{pmatrix}0&1\\-2&-3\end{pmatrix},
\qquad \lambda=-1,-2.
$$

这是稳定结点，特征方向可取 $(1,-1)$ 与 $(1,-2)$。

### 5.2.5

$$
A=\begin{pmatrix}3&-4\\1&-1\end{pmatrix}.
$$

特征值是重根 $\lambda=1$，但只有一个特征方向 $(2,1)$，所以是**不稳定退化结点**。相图中的轨迹最终与唯一特征方向相切，而不是两组直线特征方向。

### 5.2.7

$$
A=\begin{pmatrix}5&2\\-17&-5\end{pmatrix},
\qquad \tau=0,\quad\Delta=9.
$$

特征值 $\lambda=\pm3i$，原点是中心。线性系统的轨道闭合；只看“实部为零”不能把它叫稳定焦点。

### 5.2.8

$$
A=\begin{pmatrix}-3&4\\-2&3\end{pmatrix},
\qquad \tau=0,\quad\Delta=-1.
$$

$\Delta<0$，故特征值为 $\pm1$，原点是鞍点。源手写页只留下题号，没有展开；这里按教材题面补全。

### 5.2.9

$$
A=\begin{pmatrix}4&-3\\8&-6\end{pmatrix},
\qquad \lambda=0,-2.
$$

零特征值意味着原点不是孤立不动点。事实上

$$
4x-3y=0
$$

整条直线都是不动点。负特征值 $\lambda=-2$ 的特征向量可取 $(1,2)$，所以每条非平衡轨迹都沿 $y=2x$ 的方向指数靠近不动点直线；最终落到哪个点由初值决定，并不会都收敛到原点，所以不能称原点渐近稳定。

## 5.2.12：LRC 电路

电路方程为

$$
L\ddot I+R\dot I+\frac IC=0,
\qquad L>0,\ C>0,\ R\ge0.
$$

令 $x=I,\ y=\dot I$，得到

$$
\begin{pmatrix}\dot x\\\dot y\end{pmatrix}
=
\begin{pmatrix}
0&1\\
-1/(LC)&-R/L
\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}.
$$

特征方程

$$
L\lambda^2+R\lambda+\frac1C=0
$$

给出

$$
\lambda_{1,2}
=\frac{-R\pm\sqrt{R^2-4L/C}}{2L}.
$$

- $R=0$：纯虚特征值，原点是中心；能量在电感与电容之间往复交换；
- $R>0$：特征值实部为负，原点渐近稳定；
- $R^2C-4L>0$：稳定结点，对应过阻尼；
- $R^2C-4L=0$：退化稳定结点，对应临界阻尼；
- $R^2C-4L<0$：稳定焦点，对应欠阻尼。

## 本周做题模板

1. 写出矩阵 $A$；
2. 先算 $\tau,\Delta,D$ 给类型；
3. 若要画精确相图，再求特征值和特征向量；
4. 写箭头时同时检查正时间方向；
5. 遇到 $\lambda=0$ 或纯虚特征值，要额外检查是否有一整族不动点、守恒量或非线性高阶项。

</details>
