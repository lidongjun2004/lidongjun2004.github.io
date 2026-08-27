---
title: "作业三 · RBF 神经网络转向辅助修正"
description: "计算两个高斯基函数的响应，并解释 RBF 网络的局部特性"
date: 2026-08-23
tags: ["数学", "作业"]
---

## 题目

车辆进行车道保持时，使用一个 RBF 神经网络根据横向偏差和航向角误差生成转向辅助量。

设输入为

$$x=[e,\psi]^{\mathsf T}=[0.2,0.1]^{\mathsf T},$$

两个隐层节点的高斯基函数为

$$\phi_1(x)=\exp\left(-\frac{\lVert x-c_1\rVert^2}{2\sigma^2}\right),\qquad c_1=[0,0]^{\mathsf T},$$

$$\phi_2(x)=\exp\left(-\frac{\lVert x-c_2\rVert^2}{2\sigma^2}\right),\qquad c_2=[0.3,0.1]^{\mathsf T}.$$

已知 $\sigma=0.2$，输出层权值 $w_1=0.5,w_2=1.0$，网络输出为

$$u=w_1\phi_1(x)+w_2\phi_2(x).$$

计算 $\phi_1(x)$、$\phi_2(x)$ 和 $u$，并判断输入更接近哪个中心，说明这体现了 RBF 网络的什么特点。

<details class="exam-answer">
<summary>查看参考解答</summary>

输入到两个中心的距离平方分别为

$$\lVert x-c_1\rVert^2=(0.2-0)^2+(0.1-0)^2=0.05,$$

$$\lVert x-c_2\rVert^2=(0.2-0.3)^2+(0.1-0.1)^2=0.01.$$

由于

$$2\sigma^2=2\times0.2^2=0.08,$$

两个基函数输出为

$$\phi_1(x)=\exp\left(-\frac{0.05}{0.08}\right)=\exp(-0.625)\approx0.5353,$$

$$\phi_2(x)=\exp\left(-\frac{0.01}{0.08}\right)=\exp(-0.125)\approx0.8825.$$

网络输出为

$$u=0.5\times0.5353+1.0\times0.8825\approx1.15.$$

因为 $0.01<0.05$，输入 $x$ 更接近 $c_2$，所以 $\phi_2>\phi_1$，第二个隐层节点对输出贡献更大。

这体现了 RBF 的**局部响应特性**：输入越靠近某个中心，相应节点激活越强；远离中心的节点响应迅速衰减。调整一个节点主要影响它附近的输入区域，因此 RBF 具有局部逼近和局部可调的特点。

</details>
