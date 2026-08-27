---
title: "第 2 讲：几何变换、旋转与四元数"
description: "理解齐次坐标、复合变换和三维旋转，并说明欧拉角、轴角与四元数各自在解决什么问题"
date: 2026-08-27
---

几何变换可以看成一个函数：给每个点安排一个新位置。图形学需要用同一套机制摆放模型、移动相机、做动画和建立层级结构，所以会尽量把变换写成矩阵。

## 1. 二维线性变换

二维缩放和绕原点旋转为

$$
S(s_x,s_y)=
\begin{pmatrix}s_x&0\\0&s_y\end{pmatrix},
\qquad
R(\theta)=
\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{pmatrix}.
$$

反射改变某个轴的符号，错切让一个坐标随另一个坐标线性偏移。这些矩阵都保留原点，并满足

$$
T(a\mathbf u+b\mathbf v)=aT(\mathbf u)+bT(\mathbf v).
$$

平移不保留原点，所以单靠 $2\times2$ 矩阵表示不了。

## 2. 齐次坐标把平移装进矩阵

把二维点写成 $(x,y,1)^T$，平移便可写成

$$
T(t_x,t_y)=
\begin{pmatrix}
1&0&t_x\\
0&1&t_y\\
0&0&1
\end{pmatrix}.
$$

方向向量写成 $(v_x,v_y,0)^T$，因此平移不会改变方向。三维中同理，用四维齐次坐标和 $4\times4$ 矩阵。

## 3. 复合变换最容易错的是顺序

列向量约定下，若先做 $A$、再做 $B$，结果是

$$
\mathbf p'=BA\mathbf p.
$$

离点最近的矩阵最先作用。例如绕任意中心 $\mathbf c$ 旋转：

$$
\mathbf p'=T(\mathbf c)R(\theta)T(-\mathbf c)\mathbf p.
$$

读法是：先把中心移到原点，再旋转，最后移回去。复合矩阵的逆会倒序：

$$
(ABC)^{-1}=C^{-1}B^{-1}A^{-1}.
$$

调试时不要死背 API 的乘法顺序，拿一个简单点代进去，看它究竟先被谁作用。

## 4. 变换的层级

- 刚体变换：保长度和角度，只含旋转、平移及可能的镜像。
- 相似变换：再允许统一缩放，角度仍保持。
- 线性变换：保持线性组合，原点不动。
- 仿射变换：在线性变换上加平移，平行线仍平行。
- 投影变换：还允许透视效果，平行线可能汇聚到消失点。

不是“越后面越好”，而是允许的自由度越来越多、保留的几何性质越来越少。

## 5. 三维旋转为什么更麻烦

绕 $x,y,z$ 轴的旋转都能写成 $3\times3$ 矩阵，但三维旋转通常不可交换：

$$
R_xR_y\ne R_yR_x.
$$

欧拉角用三次轴旋转描述姿态，直观却会发生 Gimbal Lock：某些姿态下两个旋转轴重合，系统失去一个独立自由度。这不是浮点误差，而是参数化本身的奇异点。

轴角表示用单位轴 $\widehat{\mathbf a}$ 和角度 $\theta$ 描述旋转。Rodrigues 公式为

$$
R=
\cos\theta I+
(1-\cos\theta)\widehat{\mathbf a}\widehat{\mathbf a}^T+
\sin\theta[\widehat{\mathbf a}]_\times,
$$

其中 $[\widehat{\mathbf a}]_\times\mathbf v=\widehat{\mathbf a}\times\mathbf v$。

## 6. 从复数到四元数

二维单位复数 $q=\cos\theta+i\sin\theta$ 可表示平面旋转，复数相乘对应旋转复合。四元数把它推广到三维：

$$
q=s+x\mathbf i+y\mathbf j+z\mathbf k,
$$

并满足 $\mathbf i^2=\mathbf j^2=\mathbf k^2=\mathbf{ijk}=-1$。乘法不交换，这恰好符合三维旋转的性质。

绕单位轴 $\widehat{\mathbf a}$ 旋转 $\theta$ 的单位四元数是

$$
q=
\left(
\cos\frac\theta2,
\widehat{\mathbf a}\sin\frac\theta2
\right).
$$

把向量 $\mathbf p$ 看成纯四元数 $(0,\mathbf p)$，旋转结果为

$$
p'=qpq^{-1}.
$$

单位四元数的逆等于共轭。$q$ 与 $-q$ 表示同一个空间旋转，这也是插值时需要选较短路径的原因。

## 7. 旋转插值不能直接插矩阵

逐元素线性插值两个旋转矩阵，通常会破坏列向量的正交性。单位四元数位于四维单位球面上，Slerp 沿球面大圆匀速插值：

$$
\operatorname{Slerp}(q_0,q_1;t)
=
\frac{\sin((1-t)\Omega)}{\sin\Omega}q_0
+
\frac{\sin(t\Omega)}{\sin\Omega}q_1,
$$

其中 $\cos\Omega=q_0\cdot q_1$。若点积为负，通常先把其中一个四元数取负，走更短的弧。

一句话概括：欧拉角适合人调参数，旋转矩阵适合直接作用于向量，四元数适合存储姿态和连续插值。
