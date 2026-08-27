---
title: "作业二：光照与纹理映射"
description: "完成球面三角化、纹理反走样、Blinn–Phong 三种着色频率、Bump Mapping 与平面阴影"
date: 2026-08-27
tags: ["作业"]
---

## 题目

主要考核光照计算、纹理映射、凹凸纹理和阴影。

1. 将球面三角化，用 earthmap.jpg 做纹理贴图并绘制。相邻经纬线形成四边形后，再沿一条对角线拆成两个三角形。（3 分）
2. 解决参考程序 texture.py 中的纹理走样。（2 分）
3. 实现 Blinn–Phong 光照，并分别采用三角形、顶点、像素三种采样频率。（3 分）
4. 使用纹理实现球面 Bump Mapping 凹凸效果。（1 分）
5. 在球面下放置大平面，实现阴影效果。（1 分）

提交代码与报告，报告需说明每个考核点的实现过程并给出最终渲染结果。

<details class="exam-answer">
<summary>查看提交内容与结果</summary>

## 1. 球面三角化与纹理

提交按 stacks 与 slices 对经纬参数采样，生成位置、UV、法线和三角形索引，上传 VBO 与 EBO；片元着色器采样地球纹理，并叠加环境光与漫反射。

![球面三角化和地球纹理结果](/images/academics/computer-graphics/homework-2-textured-earth.png)

## 2. 纹理反走样

源提交做了两层处理：

- 把放大过滤设为 GL_LINEAR。
- 生成 Mipmap，并把缩小过滤设为 GL_LINEAR_MIPMAP_LINEAR。

程序还启用了 Multisample。这里要区分：Mipmap 主要处理纹理缩小走样，Multisample 主要改善几何边缘；两者解决的采样问题不同。

## 3. 三种着色频率

提交实现 Blinn–Phong 的环境、漫反射与镜面项，并通过 shadingMode 切换三角形级、顶点级和像素级结果。报告中的三组图可看出：计算频率越细，明暗过渡与高光越平滑；三角形级结果能直接看出经纬网格分块。

## 4. Bump Mapping

灰度高度图在 UV 的左右、上下邻点做有限差分，得到局部高度梯度；再构造扰动法线参与 Blinn–Phong 计算。提交结果如下：

![Bump Mapping 地球结果](/images/academics/computer-graphics/homework-2-bump-map.png)

这类方法改变的是法线和明暗，不会改变球体轮廓。

## 5. 未完成部分

源报告明确写明平面阴影任务“未完成”，最终提交目录里也没有一份可据此认定完成的 task5 结果。因此这里只保留任务要求，不补造答案。

</details>
