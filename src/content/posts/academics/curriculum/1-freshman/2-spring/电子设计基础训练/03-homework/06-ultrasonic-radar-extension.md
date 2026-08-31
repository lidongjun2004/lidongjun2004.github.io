---
title: "作业 6 · 扩展实验：Arduino 超声波雷达"
description: "根据教程视频和 Processing 代码恢复的角度扫描、超声波测距与上位机可视化扩展实验"
date: 2026-08-27
tags: ["作业"]
---

源目录保留了“Arduino 超声波雷达制作讲解”视频、Processing 程序和完整运行环境，但没有独立作业题面或个人实验报告。能够客观恢复的扩展任务是：

1. 用伺服机带动超声波模块扫描不同角度；
2. Arduino 通过串口发送角度和距离；
3. Processing 解析数据，绘制扫描线、范围弧线和 40 cm 内的目标。

<details class="exam-answer">
<summary>查看教程代码的核心实现</summary>

Processing 使用句点作为数据帧结束符：

```java
myPort.bufferUntil('.');
```

收到一帧后，去掉末尾句点，按逗号拆分：

```java
data = myPort.readStringUntil('.');
data = data.substring(0, data.length() - 1);
int separator = data.indexOf(',');
angle = data.substring(0, separator);
distance = data.substring(separator + 1);
iAngle = int(angle);
iDistance = int(distance);
```

绘图时把距离转为像素，再用极坐标转换确定线段和目标位置：

```java
float x = pixsDistance * cos(radians(iAngle));
float y = -pixsDistance * sin(radians(iAngle));
```

教程代码把串口固定为 `COM4`，把窗口固定为 $1920\times1080$。在其他机器上运行时，需要换成真实端口，并根据窗口大小调整比例。

</details>
