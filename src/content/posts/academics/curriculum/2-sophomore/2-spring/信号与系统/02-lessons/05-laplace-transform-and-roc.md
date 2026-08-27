---
title: "第 5 讲：拉普拉斯变换、收敛域与逆变换"
description: "理解拉普拉斯变换如何推广傅里叶变换，并用 ROC、零极点、初终值和单边变换分析信号。"
date: 2026-08-27
---

傅里叶变换只用纯振荡基函数 $e^{j\omega t}$。给信号先乘 $e^{-\sigma t}$ 再做傅里叶变换，就得到以 $s=\sigma+j\omega$ 为变量的拉普拉斯变换，它能容纳指数增长或衰减更强的信号。

## 双边拉普拉斯变换

$$
X(s)=\int_{-\infty}^{\infty}
x(t)e^{-st}\,dt.
$$

使积分收敛的 $s$ 构成收敛域 ROC。对有理变换，ROC 是平行于虚轴的带状区域，不包含任何极点。

例：

$$
e^{-at}u(t)
\longleftrightarrow\frac1{s+a},
\qquad \operatorname{Re}(s)>-a.
$$

而

$$
-e^{-at}u(-t)
\longleftrightarrow\frac1{s+a},
\qquad \operatorname{Re}(s)<-a.
$$

代数式完全相同，ROC 决定信号在右边还是左边。因此只写 $X(s)$ 不写 ROC，答案不完整。

## ROC 的结构规则

- 右边信号：ROC 在最右极点右侧；
- 左边信号：ROC 在最左极点左侧；
- 双边信号：ROC 在两列极点之间；
- 有限持续右/左信号的 ROC 通常为除去 0 或无穷的整个平面；
- 若 ROC 包含虚轴，傅里叶变换存在，且 $X(j\omega)$ 是 $X(s)$ 在虚轴上的取值。

右边信号的 ROC 可以直接画成某条收敛轴右侧的半平面；纵向的虚轴是否落在阴影中，决定傅里叶变换能否由 $X(s)$ 取到。

![单边拉普拉斯变换的收敛轴与右侧收敛域](/images/academics/signals-and-systems/lessons/laplace-roc.png)

## 常用性质

$$
x(t-t_0)\leftrightarrow e^{-st_0}X(s)
$$

对双边变换成立，前提是普通时移；单边变换的延时还要处理信号起点。

$$
e^{s_0t}x(t)\leftrightarrow X(s-s_0),
$$

$$
\frac{dx}{dt}\leftrightarrow sX(s),
$$

$$
tx(t)\leftrightarrow-\frac{dX}{ds},
$$

$$
x*h\leftrightarrow X(s)H(s).
$$

双边导数公式没有初值项；单边拉普拉斯变换则有

$$
\mathcal L_+\{x'(t)\}
=sX(s)-x(0^-),
$$

高阶导数会依次带入初始值，适合直接解有初始状态的微分方程。

## 逆变换

有理式优先做部分分式：

$$
X(s)=\sum_k\frac{A_k}{s-p_k}
$$

再根据 ROC 判断每一项是右边还是左边信号。若有重极点，

$$
\frac1{(s-p)^m}
\longleftrightarrow
\frac{t^{m-1}}{(m-1)!}e^{pt}u(t)
$$

在右边 ROC 下成立。

零点影响频率选择性，极点决定自然响应模式。画零极点图时要把 ROC 一起画出。

## 初值与终值定理

在适用条件下，

$$
x(0^+)=\lim_{s\to\infty}sX(s),
$$

$$
x(\infty)=\lim_{s\to0}sX(s).
$$

终值定理要求 $sX(s)$ 的全部极点位于左半平面，原点处的允许情况需单独判断。若存在右半平面极点或持续振荡极点，终值不存在，不能形式代入。

## 与系统分析的联系

零状态 LTI 系统满足

$$
Y(s)=H(s)X(s).
$$

对因果有理系统，ROC 在最右极点右侧；BIBO 稳定要求 ROC 含虚轴。因此因果且稳定等价于所有极点严格位于左半平面。

这条结论依赖“有理、因果”。只看极点位置而不看 ROC，会把左边稳定信号与右边不稳定信号混淆。
