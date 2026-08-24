---
title: "最速下降法与 Newton 法"
description: "比较负梯度和 Newton 方向，推导二次函数步长，并理解条件数、阻尼与收敛速度"
date: 2026-08-24
tags: ["最优化方法"]
---

最速下降法只看当前位置的一阶斜率；Newton 法用二阶曲率把局部地形“拉圆”。二者的区别，本质是用什么度量来定义“最陡”。

## 最速下降方向

在 $\lVert d\rVert_2=1$ 下最小化方向导数

$$
\min_d\ \nabla f(x)^Td
$$

由 Cauchy–Schwarz 得最优方向

$$
d=-\frac{\nabla f(x)}{\lVert\nabla f(x)\rVert},
$$

实际迭代可把长度吸收到步长，写成

$$
x_{k+1}=x_k-\alpha_k g_k.
$$

对正定二次函数

$$
f(x)=\frac12x^TQx-b^Tx,\qquad g=Qx-b,
$$

精确步长为

$$
\alpha_k=\frac{g_k^Tg_k}{g_k^TQg_k}.
$$

相邻梯度正交，但在狭长椭圆等高线上会来回锯齿。收敛速度受条件数 $\kappa(Q)=\lambda_{\max}/\lambda_{\min}$ 控制，条件数越大越慢。

## Newton 方向

在 $x_k$ 处用二阶 Taylor 模型

$$
m_k(d)=f(x_k)+g_k^Td+\frac12d^TH_kd.
$$

模型驻点满足

$$
H_kd_k=-g_k,
$$

所以

$$
d_k=-H_k^{-1}g_k.
$$

实际计算应解线性方程，不要显式求逆。若 $H_k\succ0$，

$$
g_k^Td_k=-d_k^TH_kd_k<0,
$$

Newton 方向保证下降。若 Hessian 不定或负定，方向可能上升，必须检查。

## 二次函数上一部到位

若 $f$ 是正定二次函数，Hessian 恒为 $Q$，Newton 方程给

$$
x_{k+1}=x_k-Q^{-1}(Qx_k-b)=Q^{-1}b=x^*.
$$

因此精确 Newton 一步到达最优点。一般非线性函数中，它只在局部近似二次，所以需要迭代。

## 阻尼 Newton

为确保全局下降，取

$$
x_{k+1}=x_k+\alpha_kd_k,\qquad 0<\alpha_k\le1,
$$

并用线搜索选 $\alpha_k$。远离解时小步保护，进入解附近后通常接受全步 $\alpha_k=1$，恢复二次收敛。

Hessian 不正定时可加修正：

$$
(H_k+\tau_kI)d_k=-g_k,
$$

选择 $\tau_k$ 使矩阵正定；这与信赖域思想密切相关。

## 停止和代价

最速下降每步便宜，只需梯度；Newton 每步要 Hessian 和线性方程，约为稠密 $O(n^3)$，但迭代次数少。大规模问题中常用共轭梯度解 Newton 方程，或用拟 Newton 避免 Hessian。

## 考试要点

- Newton 方向不是天然下降方向，先看 Hessian 正定或直接算 $g^Td$。
- 最速下降的“最速”依赖所选范数；在不同度量下方向不同。
- 精确搜索下相邻最速下降方向正交，不代表快速。
- 写 Newton 法时应写“解 $H_kd=-g_k$”，比“算 $H_k^{-1}$”更数值合理。
