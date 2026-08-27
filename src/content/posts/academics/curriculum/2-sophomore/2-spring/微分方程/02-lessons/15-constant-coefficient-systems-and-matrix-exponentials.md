---
title: "第 15 讲：常系数系统、矩阵指数与 Jordan 结构"
description: "用特征向量、广义特征向量和矩阵指数求常系数线性系统，并连接相图与 Laplace 法。"
date: 2026-08-27
---

常系数齐次系统

$$
\mathbf x'=A\mathbf x
$$

的标准基解矩阵是 $e^{At}$。计算它的核心是理解矩阵 $A$ 的特征结构。

## 矩阵指数

定义

$$
e^{At}=I+At+\frac{A^2t^2}{2!}+\cdots.
$$

逐项求导可得

$$
\frac{d}{dt}e^{At}=Ae^{At}=e^{At}A,\qquad e^{A0}=I.
$$

因此

$$
\mathbf x(t)=e^{A(t-t_0)}\mathbf x_0.
$$

只有同一个常矩阵的指数具有 $e^{A(t+s)}=e^{At}e^{As}$。对一般不交换矩阵，$e^{A+B}$ 不等于 $e^Ae^B$。

## 可对角化情形

若 $A=P\Lambda P^{-1}$，其中

$$
\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n),
$$

则

$$
e^{At}=Pe^{\Lambda t}P^{-1},\qquad
e^{\Lambda t}=\operatorname{diag}(e^{\lambda_1t},\dots,e^{\lambda_nt}).
$$

等价地，每个特征对 $A\mathbf v_i=\lambda_i\mathbf v_i$ 给出解

$$
\mathbf x_i(t)=e^{\lambda_i t}\mathbf v_i.
$$

凑齐 $n$ 个线性无关特征向量即可组成基解矩阵。

## 复特征值的实解

实矩阵若有 $\lambda=\alpha+i\beta$ 和复特征向量 $\mathbf v=\mathbf p+i\mathbf q$，复解

$$
e^{(\alpha+i\beta)t}(\mathbf p+i\mathbf q)
$$

的实部、虚部分别给两个实解：

$$
e^{\alpha t}(\mathbf p\cos\beta t-\mathbf q\sin\beta t),
$$

$$
e^{\alpha t}(\mathbf p\sin\beta t+\mathbf q\cos\beta t).
$$

$\alpha$ 控制收缩或膨胀，$\beta$ 控制旋转频率。

## 不可对角化与 Jordan 链

对 Jordan 块

$$
J=\lambda I+N,\qquad N^m=0,
$$

由于 $\lambda I$ 与 $N$ 交换，

$$
e^{Jt}=e^{\lambda t}e^{Nt}
=e^{\lambda t}
\left(I+tN+\frac{t^2N^2}{2!}+\cdots+
\frac{t^{m-1}N^{m-1}}{(m-1)!}\right).
$$

若广义特征向量链满足

$$
(A-\lambda I)\mathbf v_1=0,\qquad
(A-\lambda I)\mathbf v_2=\mathbf v_1,
$$

则对应解含

$$
e^{\lambda t}\mathbf v_1,\qquad
e^{\lambda t}(t\mathbf v_1+\mathbf v_2).
$$

这与标量常系数方程重根产生 $te^{\lambda t}$ 完全对应。

## 二维系统的相图速判

![二维线性系统的稳定结点、鞍点、螺旋汇和不稳定结点](/images/academics/differential-equations/linear-system-phase-portraits.svg)

对 $2\times2$ 实矩阵：

- 两个同号实特征值：结点；负为稳定，正为不稳定；
- 异号实特征值：鞍点，必不稳定；
- 共轭复根 $\alpha\pm i\beta$：$\alpha<0$ 螺旋汇，$\alpha>0$ 螺旋源，$\alpha=0$ 线性中心；
- 重根且特征向量不足：退化结点，轨线带 $t e^{\lambda t}$。

旋转方向需在某个简单点代入向量场判断，不能只从特征值看出。

## Laplace 法

变换后

$$
\mathbf X(s)=(sI-A)^{-1}\mathbf x_0
$$

说明

$$
\mathcal L\{e^{At}\}=(sI-A)^{-1}.
$$

小规模系统可通过求逆、部分分式得到每个分量；这也是课件中把 Laplace 变换应用到方程组的路线。

## 计算检查

- $e^{A0}$ 必须是 $I$；
- 求出的 $e^{At}$ 应满足导数为 $Ae^{At}$；
- 基解矩阵在 $t=0$ 的行列式应非零；
- Jordan 链方向按 $(A-\lambda I)\mathbf v_{k+1}=\mathbf v_k$；
- 长期行为由特征值实部控制，但零实部或非线性系统需要更细分析。
