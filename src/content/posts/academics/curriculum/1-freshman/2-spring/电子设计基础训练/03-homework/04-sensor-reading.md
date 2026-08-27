---
title: "作业 4 · DHT11 与 TCS34725 传感器读取"
description: "根据 2024 年 5 月 6 日代码恢复的温湿度和颜色传感器练习"
date: 2026-08-27
tags: ["作业"]
---

源目录仅保留了两份 Arduino 代码。可以确认的任务是：

1. 用 DHT11 读取湿度和摄氏温度，通过串口输出；
2. 用 TCS34725 读取红、绿、蓝和清晰通道，对 RGB 做归一化后输出。

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

DHT11 程序将数据引脚设在 4 号引脚，每 2 秒采样：

```cpp
float h = dht.readHumidity();
float t = dht.readTemperature();
Serial.print(F("Humidity: "));
Serial.println(h);
Serial.print(F("% Temperature: "));
Serial.println(t);
```

TCS34725 程序使用 $50\ \mathrm{ms}$ 积分时间和 $4\times$ 增益，读取原始通道后按清晰通道归一化：

```cpp
uint16_t clear, red, green, blue;
tcs.getRawData(&red, &green, &blue, &clear);

float r = 256.0 * red / clear;
float g = 256.0 * green / clear;
float b = 256.0 * blue / clear;
```

原提交未检查 `clear == 0` 和 DHT 读数是否为 `NaN`，这两个边界在实际使用中应补上。

</details>
