---
title: "作业一：三角形光栅化"
description: "实现 LookAt、正交与透视投影、三角形覆盖判断、绕法线旋转，并完成颜色插值、遮挡与旋转插值实验"
date: 2026-08-27
tags: ["作业"]
---

## 题目

给定三角形三个顶点 $A,B,C$ 的三维坐标、相机视图矩阵和投影矩阵等参数，实现三角形光栅化后的图像。

### 基础函数

1. 实现 LookAt(eye, center, up)，构建相机视图矩阵。（1 分）
2. 实现 Perspective(fov, aspect, near, far)，构建透视投影矩阵。（1 分）
3. 实现 Ortho(left, right, bottom, top, near, far)，构建正交投影矩阵。（1 分）
4. 实现 inside 函数，判断点是否位于三角形内。（1 分）
5. 实现 rotate_norm：先由三个顶点求三角形法线，再让三顶点绕过三角形中心、方向为法线的轴旋转 $\theta$ 度。（1 分）

### 渲染任务

a. 渲染透视投影与正交投影图像。（1 分）

b. 渲染三角形绕自身中心分别旋转 $45^\circ,90^\circ,135^\circ,180^\circ$ 后的透视投影图像。（1 分）

c. 按给定三顶点颜色，用重心坐标对三角形内各点做颜色插值。（1 分）

d. 给定

$$
T_1=[(1,0,0),(0,1,0),(0,0,1)],
$$

$$
T_2=[(1.5,0,0),(0,1.5,0),(0,0,1.5)],
$$

$T_1$ 为红色、$T_2$ 为绿色，考虑深度测试后渲染。（1 分）

e. 给定三角形初态顶点

$$
[(0,0,0),(1,0,0),(0,1,0)]
$$

和红色，终态颜色为绿色，旋转

$$
R=R_z(30^\circ)R_y(60^\circ)R_x(30^\circ).
$$

渲染 $t=0,0.25,0.5,0.75,1$ 的旋转与颜色插值结果。（1 分）

提交代码与报告。报告需说明各考核点实现过程，并按题目要求给出渲染结果。

<details class="exam-answer">
<summary>查看提交内容与复核</summary>

## 1. 基础函数

我提交的代码用

$$
\mathbf f=\frac{\mathbf{center}-\mathbf{eye}}
{\|\mathbf{center}-\mathbf{eye}\|},
\qquad
\mathbf r=\frac{\mathbf f\times\mathbf{up}}
{\|\mathbf f\times\mathbf{up}\|},
\qquad
\mathbf u=\mathbf r\times\mathbf f
$$

搭出相机坐标架，旋转部分的三行依次放入 $\mathbf r,\mathbf u,-\mathbf f$，再右乘把 eye 移到原点的平移矩阵。

Perspective 使用

$$
f=\frac{1}{\tan(\mathrm{fov}/2)}
$$

构造 OpenGL 风格透视矩阵；Ortho 把给定长方体平移并缩放到标准立方体。

inside 先由 $(B-A)\times(C-A)$ 求法线，检查点是否在三角形平面，再在 $xy$ 投影上用面积比求重心坐标 $\alpha,\beta,\gamma$。rotate_norm 使用 Rodrigues 轴角矩阵，先把顶点移到三角形中心，再旋转并移回。

## 2. 颜色插值

我的提交按

$$
\mathbf c(P)
=\alpha\mathbf c_A+
\beta\mathbf c_B+
\gamma\mathbf c_C
$$

混合三顶点颜色，得到以下结果：

![重心坐标颜色插值结果](/images/academics/computer-graphics/homework-1-color-interpolation.png)

## 3. 遮挡实验输出

我当时在报告中给出的红绿三角形结果如下：

![作业一遮挡实验输出](/images/academics/computer-graphics/homework-1-depth-test.png)

不过复核最终代码后要特别说明：Rasterization 虽然创建了 depth_buf，但 rasterize_triangle 把屏幕顶点深度统一写成 $0$，也没有读写深度缓冲。该图来自先画绿色 $T_2$、再画红色 $T_1$ 的覆盖顺序，**不能证明我当时真正完成了深度测试**。

正确实现应保留投影后的深度，并在每个覆盖样本处比较：

$$
z_{new}<z_{buffer}(x,y)
$$

时才同时更新颜色和深度。

## 4. 旋转与颜色插值复核

源代码生成了五张不同颜色和姿态的图，但循环里每次都把同一个完整旋转矩阵再次乘到已经旋转过的顶点上，且矩阵本身不随 $t$ 变化。因此它实现的是“每帧再累积一次完整旋转”，不是题目要求的从恒等旋转到 $R$ 的插值。

可靠做法是把 $R$ 转成单位四元数 $q_1$，从恒等四元数 $q_0$ 到 $q_1$ 做 Slerp：

$$
q(t)=\operatorname{Slerp}(q_0,q_1;t),
$$

再用 $q(t)$ 旋转初始顶点；颜色则直接按

$$
\mathbf c(t)=(1-t)(1,0,0)+t(0,1,0)
$$

插值。每一帧都必须从同一组初始顶点计算，不能在上一帧结果上继续累乘。

</details>
