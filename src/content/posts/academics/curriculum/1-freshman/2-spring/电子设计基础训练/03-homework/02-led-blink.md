---
title: "作业 2 · Arduino LED 周期闪烁"
description: "根据 2024 年 4 月 22 日代码恢复的数字输出与延时练习"
date: 2026-08-27
tags: ["作业"]
---

源目录仅保留了 Arduino 代码，没有独立题面。从代码可以确认的任务是：将 13 号引脚设为输出，让 LED 以亮 1 秒、灭 1 秒的周期反复闪烁。

<details class="exam-answer">
<summary>查看提交代码</summary>

```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```

输出周期为 2 秒，频率为 $0.5\ \mathrm{Hz}$，占空比为 $50\%$。

</details>
