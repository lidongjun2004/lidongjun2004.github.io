---
title: "实验 2：组合电路和时序电路设计"
description: "三人表决、译码和选择、余三码转换，以及十六进制同步计数。"
date: 2026-08-27
tags: ["作业"]
---

本篇整理自实验 2 的课件要求，以及我当时提交的 PDF、Markdown、图片和 Logisim 电路文件。

## 实验任务

1. 用与非门搭接三人表决电路；
2. 检测 74LS138 的逻辑功能，再用它和与非门实现三人表决；
3. 检测 74LS153 的逻辑功能，并用它实现三人表决；
4. 检测 74LS283 的逻辑功能，搭接余三码电路与标志电路；
5. 用与非门和 CD4027 搭接带清零端的十六进制同步加法计数器。单脉冲作用下，四位输出应从 $0000$ 依次计到 $1111$，再回到 $0000$。

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

### 三人表决电路

报告采用的多数表决函数是

$$
F=AB+BC+CA.
$$

![74LS00 实现三人表决](/images/academics/digital-electronics/experiments/experiment-02-figure-01.png)

用 74LS138 实现时，报告把表决通过的输入写成

$$
F=m_3+m_5+m_6+m_7,
$$

再利用译码器的低有效输出与与非门合成。

![74LS138 实现三人表决](/images/academics/digital-electronics/experiments/experiment-02-figure-02.png)

使用 74LS153 时，报告写出的数据选择关系为

$$
F=m_1C+m_2C+m_3.
$$

![74LS153 实现三人表决](/images/academics/digital-electronics/experiments/experiment-02-figure-03.png)

### 74LS283 余三码与标志电路

余三码电路利用四位加法器给 8421 码加 $0011$。报告中的标志函数为

$$
Y=A_3A_4+A_4A_2.
$$

![74LS283 余三码电路](/images/academics/digital-electronics/experiments/experiment-02-figure-04.png)

![标志电路](/images/academics/digital-electronics/experiments/experiment-02-figure-05.png)

### 十六进制同步加法计数器

报告用 CD4027 的四个 JK 触发器构成从 $0000$ 到 $1111$ 的同步加法计数器，并记录了实际波形和 Logisim 仿真。

![CD4027 十六进制同步计数器](/images/academics/digital-electronics/experiments/experiment-02-figure-06.png)

![同步计数器实测波形](/images/academics/digital-electronics/experiments/experiment-02-figure-07.png)

![同步计数器 Logisim 仿真](/images/academics/digital-electronics/experiments/experiment-02-figure-08.png)

</details>
