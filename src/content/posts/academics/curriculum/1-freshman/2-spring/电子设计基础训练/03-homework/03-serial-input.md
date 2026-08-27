---
title: "作业 3 · Arduino 串口接收与回显"
description: "根据 2024 年 4 月 29 日代码恢复的单字节与多字节串口练习"
date: 2026-08-27
tags: ["作业"]
---

源目录有三个 Arduino 工程，第三个只有空的 `setup()` 和 `loop()`，无法恢复具体任务。前两个程序可以确认两个递进要求：

1. 以 9600 波特率接收一个字节并回显；
2. 读取当前缓冲区的多个字节，拼成字符串后回显。

<details class="exam-answer">
<summary>查看提交代码与说明</summary>

单字节版的核心代码：

```cpp
if (Serial.available() > 0) {
  x = Serial.read();
  Serial.print("I have received:");
  Serial.println(x);
}
```

多字节版通过循环追加：

```cpp
String comData = "";
while (Serial.available() > 0) {
  x = Serial.read();
  comData = comData + x;
}
Serial.println(comData);
```

这份提交能把“当前已到达”的字节拼起来，但没有明确的消息结束符。数据分批到达时，一条完整消息可能被拆成多次输出。

</details>
