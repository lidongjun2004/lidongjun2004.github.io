---
title: "第 2 讲 · Arduino 引脚、主循环与定时"
description: "通过 LED 闪烁理解 setup/loop、数字输出、阻塞延时和非阻塞计时"
date: 2026-08-27
---

## 上电之后发生什么

Arduino 完成硬件初始化后，先调用一次 `setup()`，之后永远反复调用 `loop()`。

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

一个完整周期是 2 秒，所以闪烁频率为 $0.5\ \mathrm{Hz}$，占空比为 $50\%$。

## 引脚方向不是可选信息

- `OUTPUT`：单片机主动驱动高或低电平；
- `INPUT`：引脚呈高阻态，读取外部电平；
- `INPUT_PULLUP`：打开内部上拉，常用于按键，按下后可能读到 `LOW`。

如果输入引脚既没有上拉也没有下拉，它会“悬空”，读数可能随干扰乱跳。

## `delay` 为什么会让复杂系统失灵

`delay(1000)` 期间，主循环不会读按键、不会处理串口，也不会更新显示。单任务演示可以这样写，多任务时应改用时间差：

```cpp
unsigned long lastToggle = 0;
bool ledOn = false;

void loop() {
  const unsigned long now = millis();
  if (now - lastToggle >= 1000) {
    lastToggle = now;
    ledOn = !ledOn;
    digitalWrite(13, ledOn);
  }

  // 每轮仍可读按键、串口和传感器
}
```

`now - lastToggle` 这种无符号差值写法还可以正确跨过 `millis()` 计数溢出，比直接比较绝对时刻稳健。

## 定时中断与主循环的分工

综合实验使用 Timer1 翻转 LED 状态。中断服务程序应尽量短：只改状态或置标志，不在里面长时间延时、进行大量计算或串口打印。复杂工作留在 `loop()` 处理。
