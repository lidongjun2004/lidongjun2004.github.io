---
title: "Computer Vision · 计算机视觉"
description: "计算机视觉 · 让机器看懂图像 · 从图像分类到检测、分割与视觉 Transformer"
---

计算机视觉研究的是**怎么让机器从图像/视频里提取信息并理解内容**——小到判断"这张图是不是猫"，大到自动驾驶里实时框出每一个行人。深度学习时代之后，CV 几乎就是"卷积神经网络 + 各种任务头"的故事，再到近几年被 Transformer 重新洗了一遍。

按**任务难度递进**串一条主线：

| 任务 | 回答的问题 | 代表模型 |
|---|---|---|
| **图像分类** | 这张图是什么？ | LeNet → AlexNet → VGG → ResNet |
| **目标检测** | 图里有什么、在哪？ | R-CNN 系 / YOLO / SSD |
| **图像分割** | 每个像素属于谁？ | FCN / U-Net / Mask R-CNN |
| **视觉 Transformer** | 不用卷积行不行？ | ViT / Swin Transformer |

从"整张图给一个标签"到"每个像素都要判断"，难度逐级上升，模型也越来越精巧。

## TODO

- [ ] 卷积神经网络 CNN 基础（卷积 / 池化 / 感受野）
- [ ] 经典分类网络演进：LeNet / AlexNet / VGG / ResNet
- [ ] 目标检测：两阶段（R-CNN 系）vs 单阶段（YOLO / SSD）
- [ ] 图像分割：FCN / U-Net / 实例分割
- [ ] 视觉 Transformer：ViT 与 Swin
- [ ] 数据增强与迁移学习实践
