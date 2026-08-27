---
title: "第 4 讲 · 温湿度与颜色传感器"
description: "通过 DHT11 和 TCS34725 理解传感器初始化、采样周期、原始通道和归一化"
date: 2026-08-27
---

## 传感器代码的四个阶段

1. 引入库并声明对象；
2. 在 `setup()` 中初始化并检查连接；
3. 在 `loop()` 中按合适周期采样；
4. 检查读数，再转成有意义的量并输出。

## DHT11：慢变环境量不需要高频读

```cpp
float humidity = dht.readHumidity();
float temperature = dht.readTemperature();
```

DHT11 的温湿度不会在毫秒量级剧烈变化，源代码每 2 秒读一次是合理的数量级。读数失败时库可能返回 `NaN`，正式程序应先检查：

```cpp
if (isnan(humidity) || isnan(temperature)) {
  Serial.println("DHT read failed");
  return;
}
```

源代码还用两次 `millis()` 相减测量读取耗时，但结果没有输出。如果真要分析性能，应打印该差值，并重复多次而不是只看单次。

## TCS34725：原始 RGB 会同时受亮度影响

传感器返回红、绿、蓝和清晰通道：

```cpp
uint16_t clear, red, green, blue;
tcs.getRawData(&red, &green, &blue, &clear);
```

同一个物体距光源近时，四个通道可能都变大。源代码把 RGB 分别除以 `clear`，是为了减少总亮度的影响：

$$
r'=256\frac{R}{C},\qquad
g'=256\frac{G}{C},\qquad
b'=256\frac{B}{C}.
$$

计算前必须检查 $C\ne0$，否则会除零。这个比例归一化能缓解亮度变化，但不能抵消环境光谱、传感器非线性和物体角度带来的所有误差。

## 传感器实验为什么需要标定

库函数返回数值不等于测量已经可信。标定至少要：

- 用已知参考量在多个点比较；
- 每个点重复采样，看波动而不只看一个值；
- 记录温度、光照、距离等环境条件；
- 区分随机波动和系统性偏大/偏小。
