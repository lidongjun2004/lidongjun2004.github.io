---
title: "大作业：手动实现卷积与卷积神经网络"
description: "2024–2025 学年信号与系统大作业要求，以及第 10 组卷积神经网络项目的提交内容整理。"
date: 2026-08-27
tags: ["作业"]
---

这篇同时依据课程的 `2024-2025 信号与系统大作业说明.pptx` 与第 10 组提交的报告、答辩 PPT、README 和代码整理。**“课程要求”与“实际提交”分开写；下文性能数字来自提交报告，未在本次整理中重新运行代码复测。**

## 一、课程统一要求

大作业占课程成绩 30%：课堂汇报 15%，报告与程序 15%。学生自选六个题目之一，分组完成、课堂汇报并提交报告与程序。

六个方向为：DFT/FFT 实现、JPEG 编解码、卷积神经网络、智能绘谱、音频压缩、音频风格化。本组选择第 3 题“卷积神经网络”。

### 题目 3 的原始要求

- 基础 1：不依赖 PyTorch、TensorFlow 等神经网络框架，手动实现二维卷积；支持多通道输入输出、`padding`、`stride`，并设计不同卷积核提取图像特征。
- 基础 2：手动实现小型 CNN（例如 LeNet），在 MNIST 官方测试集上达到至少 95% 准确率。
- 进阶：手动实现 Conv1d、Conv3d 并验证；分析卷积性能，与 PyTorch 官方实现比较。
- 提交答辩 PPT、大作业报告与程序代码。报告应说明问题、原理、算法、运行结果和成员分工；代码目录应含可运行程序、README 与精确依赖版本。
- 答辩时长为 5 分钟汇报加 3 分钟提问。

## 二、提交内容 1：二维卷积与图像特征

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

提交实现用 NumPy 完成多通道二维卷积，流程是：补零、生成滑动窗口、按步长抽取窗口、用 `einsum` 对窗口和卷积核求和。输出尺寸按

$$
H_{out}=\left\lfloor\frac{H+2p-k_H}{s}\right\rfloor+1,
\qquad
W_{out}=\left\lfloor\frac{W+2p-k_W}{s}\right\rfloor+1
$$

计算。

报告展示了以下卷积核：

- Sobel X、Sobel Y：检测垂直与水平边缘；
- $3\times3$ 均值核：模糊和平滑；
- 中心为 5、四邻域为 $-1$ 的锐化核；
- 可调方向与尺度的 Gabor 核：提取纹理。

提交结果包括彩色图像模糊、锐化、边缘与纹理提取，以及 RGB 通道分离；这些结果用于验证多通道、`padding` 与 `stride` 的实现确实参与计算，而不只是函数签名占位。

</details>

## 三、提交内容 2：手写小型 CNN

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

网络输入为 $1\times28\times28$ 的 MNIST 灰度图，结构为：

$$
\text{Conv}(30\text{ 个 }5\times5\text{ 核})
\to\text{ReLU}\to\text{MaxPool}(2\times2)
\to\text{FC}(4320\to100)
\to\text{ReLU}\to\text{FC}(100\to10)
\to\text{SoftmaxWithLoss}.
$$

卷积层不填充、步长为 1，输出 $30\times24\times24$；池化后为 $30\times12\times12$，展平长度 4320。

提交报告记录的测试结果为：第 2 个 epoch 达到 96.8%，第 5 个 epoch 98.1%，第 8 个 epoch 98.9%，最终记录为 98.89%，超过任务要求的 95%。报告还可视化了 30 个 $5\times5$ 学习卷积核，并把它们与 Sobel、Gabor 等人工卷积核作了对比：人工核有明确先验含义，学习核由任务数据决定、组合更多样但解释性更弱。

</details>

## 四、提交内容 3：进阶实现与性能分析

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

进阶代码包含：

- `Conv1d`：支持步长、填充等参数，并与库实现核对数值；
- `Conv3d`：把滑动窗口扩展到深度、高度、宽度三个维度；
- 向量化 `Conv2d`：用 NumPy 视图与 `einsum` 减少显式 Python 循环；
- 自定义卷积核：实验不同核对图像特征的响应；
- 与 PyTorch 的性能比较。

提交报告记录的三组二维卷积耗时示例为：均值核 25.9 ms 对 2.9 ms，锐化核 33.3 ms 对 4.1 ms，Sobel 核 33.6 ms 对 1.5 ms。报告据此归因于 PyTorch 的底层并行、GPU 支持、内存管理和对稀疏计算的优化；同时指出 NumPy 实现的填充与滑动窗口会带来额外内存开销。

这些数字是提交环境中的实验记录，能说明相对趋势，但不应脱离硬件、数据尺寸和预热方式当作通用基准。

</details>

## 五、文件与运行方式

<details class="exam-answer">
<summary>查看提交文件与运行方法</summary>

提交目录包含报告、答辩 PPT、实验图片与代码。代码主体包括二维卷积、向量化二维卷积、Conv1d、Conv3d、自定义卷积核，以及手写 CNN 的层、训练器和 MNIST 数据读取模块。

README 给出的运行方式是先安装依赖：

```bash
pip install -r requirements.txt
```

再运行 CNN：

```bash
python ./基础2-CNN/main.py
```

其他独立实验脚本直接使用 `python` 运行对应文件。

课程要求报告列出成员分工。提交记录中，我负责性能分析、自定义卷积核、代码润色、PPT 制作与课堂展示；其余成员分别承担二维卷积、CNN、Conv1d/Conv3d 及相关报告内容。

</details>
