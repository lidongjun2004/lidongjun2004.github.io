---
title: "第 2 次作业：Newton 环与 Michelson 干涉仪"
description: "原作业中的 Newton 环、等倾干涉和相干长度计算；题目在外，提交答案默认折叠。"
date: 2026-08-27
tags: ["作业"]
---

## 题 3.11

用波长为 $589\ \mathrm{nm}$ 的黄光观察 Newton 环。在透镜与平板玻璃接触良好的情形下，测得从中心算起第 20 个暗纹的直径为 $0.687\ \mathrm{cm}$。当透镜向上移动 $5.00\times10^{-4}\ \mathrm{cm}$ 时，同一级暗纹的直径变为多少？

<details class="exam-answer">
<summary>展开原提交解答</summary>

原提交从反射光暗纹条件出发，把透镜抬升造成的附加空气层厚度计入光程差，再用移动前的第 20 环消去曲率半径。提交中给出的结果为

$$
d'\approx0.224\ \mathrm{cm}.
$$

这里保留扫描作业中的原结果，不另行替换成重算答案。

</details>

## 题 3.15

Michelson 干涉仪以波长为 $5893\ \mathring{\mathrm A}$ 的钠黄光作光源。开始时视场中心为亮点，此外还能看到 10 个亮环。移动一臂中的反射镜后，有 10 个亮环向中心收缩并消失；此时除中心亮点外还剩 5 个亮环。求：

1. 反射镜移动的距离；
2. 开始时中心亮点的干涉级；
3. 反射镜移动后，视场中最外圈亮环的干涉级。

<details class="exam-answer">
<summary>展开原提交解答</summary>

等倾干涉满足

$$
2h\cos\theta=k\lambda.
$$

有 10 个环向中心收缩并消失，说明中心光程差跨过 10 个波长：

$$
2(h_1-h_2)=10\lambda.
$$

因此反射镜移动距离为

$$
h_1-h_2=5\lambda
=5\times5893\ \mathring{\mathrm A}
\approx2.947\ \mu\mathrm m.
$$

原提交进一步利用移动前后同一视场边缘对应同一 $\theta$，并结合亮环数目，得到：

$$
k_{\text{center, before}}=20,
\qquad
k_{\text{outer, after}}=5.
$$

</details>

## 题 3.17

利用 Michelson 干涉仪进行长度精密测量。若光源是镉的红色谱线，波长为 $6438\ \mathring{\mathrm A}$、谱线宽度为 $0.01\ \mathring{\mathrm A}$，一次测长的量程是多少？若改用波长为 $6328\ \mathring{\mathrm A}$、谱线宽度为 $1\times10^{-5}\ \mathring{\mathrm A}$ 的激光，一次测长的量程又是多少？

<details class="exam-answer">
<summary>展开原提交解答</summary>

用相干长度估算量程：

$$
L\approx\frac{\lambda^2}{\Delta\lambda}.
$$

对镉红线，

$$
L_1\approx\frac{(6438\ \mathring{\mathrm A})^2}
{0.01\ \mathring{\mathrm A}}
\approx0.41\ \mathrm m.
$$

对激光，

$$
L_2\approx\frac{(6328\ \mathring{\mathrm A})^2}
{10^{-5}\ \mathring{\mathrm A}}
\approx400\ \mathrm m.
$$

</details>
