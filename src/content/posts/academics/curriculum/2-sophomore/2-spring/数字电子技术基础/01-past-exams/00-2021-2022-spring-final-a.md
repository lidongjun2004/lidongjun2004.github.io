---
title: "2021–2022 学年第二学期期末真题（A 卷）"
description: "2022 年数字电子技术基础期末 A 卷，共八道大题，附逐题折叠的非官方参考解法。"
date: 2026-08-27
tags: ["真题"]
---

来源为 `2021-2022.pdf` 与 `2021-2022（2）.pdf`。两份文件是同一张 A 卷的扫描版与清晰电子版，并非两套试卷，也不含答案，因此这里只发布一次。卷面日期为 2022 年 6 月 12 日，考试时间为 19:00–21:00。

以下题干按清晰电子版转写。每个折叠块都是依据题面与课程知识整理的参考解法，不是源文件答案。

## 一、回答问题（20 分，每小题 5 分）

### 1. 补码

十进制数 $X=123$。在 8 位机器中，求 $[X]_{\text{补}}$ 和 $[-X]_{\text{补}}$。

### 2. 卡诺图化简

用卡诺图化简

$$
F(A,B,C,D)=\sum m(0,3,5,8,10,11,14)+\sum d(1,2,7,9,11).
$$

![第一题第 2 小题卡诺图](/images/academics/digital-electronics/exams/2021-q1-2-kmap.png)

原卷把编号 11 同时写入最小项与无关项。作答时应优先按最小项处理，并在卷面注明这一点。

### 3. 音乐信号数字化

音乐信号频率范围为 $20\text{ Hz}$～$20\text{ kHz}$。采用 8 bit 逐次比较型模数转换器进行数字化记录。选择一个合适的采样频率，并计算模数转换器应引入多高频率的时钟信号。

### 4. 二输入与非门实现

用二输入与非门实现下式，要求器件数最少：

$$
F=AB\overline C+\overline A BC+A\overline B C.
$$

<details class="exam-answer">
<summary>展开第一题参考解法</summary>

1. $123=01111011_2$，所以

   $$
   [X]_{\text{补}}=01111011,
   $$

   $$
   [-X]_{\text{补}}=10000101.
   $$

2. 将 11 当作必须覆盖的最小项，利用无关项扩圈，可得到一种最简与或式

   $$
   F=\overline B+\overline A D+AC\overline D.
   $$

3. 奈奎斯特条件要求 $f_s>40\text{ kHz}$。可选常用音频采样率 $f_s=48\text{ kHz}$。若逐次比较一次转换按 8 个比较时钟估算，则

   $$
   f_{CP}\ge 8f_s=384\text{ kHz}.
   $$

   实际器件还要按其启动、锁存等时序留裕量；题面没有给出额外周期数，所以这里采用最基本的 8 次比较模型。

4. 一个八门的二输入与非门连接表如下，$N(x,y)=\overline{xy}$：

   $$
   n_1=N(B,C),
   $$

   $$
   n_2=N(B,A),
   $$

   $$
   n_3=N(A,C),
   $$

   $$
   n_4=N(n_1,n_1),
   $$

   $$
   n_5=N(n_4,n_3),
   $$

   $$
   n_6=N(n_3,n_2),
   $$

   $$
   n_7=N(n_6,n_1),
   $$

   $$
   F=N(n_5,n_7).
   $$

   逐项代入真值表可验证它只在 $011$、$101$、$110$ 时输出 1。

</details>

## 二、OC 门驱动三极管（10 分）

已知图中三极管 $V_{BES}=0.7\text{ V}$、$V_{CES}=0.3\text{ V}$、$\beta=100$；OC 门 $G_1$ 截止时高电平漏电流 $I_{OZ}=50\mu\text{A}$，在 $V_{OL}=0.3\text{ V}$ 时最大允许灌电流 $I_{OL}=16\text{ mA}$；$G_2$～$G_4$ 为 TTL 门，每个输入端的 $I_{iH}=40\mu\text{A}$、$I_{iL}=-1\text{ mA}$。要求集电极输出满足 $V_{OH}\ge3\text{ V}$、$V_{OL}\le0.3\text{ V}$，求 $R_B$ 的范围。

![第二题 OC 门与三极管电路](/images/academics/digital-electronics/exams/2021-q2-oc-transistor.png)

<details class="exam-answer">
<summary>展开第二题参考解法</summary>

集电极共接 9 个 TTL 输入：$G_2$ 有 2 个、$G_3$ 有 3 个、$G_4$ 有 4 个。

三极管截止时，9 个高电平输入共需 $9\times40\mu\text{A}=0.36\text{ mA}$，于是

$$
V_C=5-0.36\text{ mA}\times4.7\text{ k}\Omega\approx3.31\text{ V},
$$

满足高电平要求。

三极管饱和时，集电极要吸收电阻电流和 9 个 TTL 低电平输入电流：

$$
I_C=\frac{5-0.3}{4.7\text{ k}\Omega}+9\text{ mA}\approx10\text{ mA}.
$$

按题给 $\beta=100$，至少需要 $0.10\text{ mA}$ 基极电流。扣除 OC 门截止漏电后，

$$
\frac{5-0.7}{R_B}-0.05\text{ mA}\ge0.10\text{ mA},
$$

所以

$$
R_B\le28.7\text{ k}\Omega.
$$

当 $G_1$ 输出低电平时，它要吸收 $R_B$ 电流，且不能超过 $16\text{ mA}$：

$$
\frac{5-0.3}{R_B}\le16\text{ mA},
$$

所以

$$
R_B\ge0.294\text{ k}\Omega.
$$

最终范围为

$$
0.294\text{ k}\Omega\le R_B\le28.7\text{ k}\Omega.
$$

</details>

## 三、TTL 输入电平与输出波形（10 分）

根据图中 $\overline C$ 和 $A$ 的波形，画出 $Y_1$、$Y_2$、$Y_3$ 的波形。

![第三题延迟电路](/images/academics/digital-electronics/exams/2021-q3-delay-circuit.png)

<details class="exam-answer">
<summary>展开第三题参考分析</summary>

这不是 RC 延迟题。图中没有电容，也没有给出传播延迟；三个电阻是在考 TTL 输入端经电阻接地或接信号时，能否被可靠拉成低电平。

按课程中 TTL 输入“悬空等效为高电平”的近似：$R_2=10\Omega$ 能把左侧与门输入可靠拉低，而 $R_1=R_3=200\text{ M}\Omega$ 远大到近似开路，相应输入均等效为高电平。因此

$$
Y_1=0,
$$

与 $\overline C$ 的变化无关。上方是输出带反相泡的与门，所以

$$
Y_2=\overline{1\cdot Y_1}=1.
$$

下方“$=1$”表示异或，输出端还有反相泡，因而是同或：

$$
Y_3=\overline{Y_1\oplus1}=0.
$$

所以应画三条恒定波形：$Y_1$ 始终为低，$Y_2$ 始终为高，$Y_3$ 始终为低；题给 $A$、$\overline C$ 的跳变都不会传到输出。原卷未附官方答案，这里是依据课件 TTL 输入规则给出的参考分析。

</details>

## 四、BCD 5421 码检测（10 分）

设计一个组合逻辑电路。输入为四位二进制码 $A_3A_2A_1A_0$；当输入是 BCD 5421 码时，$Y=1$，否则 $Y=0$。分别采用：

1. 两片 74LS138 和适当门电路；
2. 一片 74LS151 和适当门电路。

![第四题所给器件](/images/academics/digital-electronics/exams/2021-q4-msi.png)

<details class="exam-answer">
<summary>展开第四题参考解法</summary>

BCD 5421 的合法码字为

$$
0000,0001,0010,0011,0100,1000,1001,1010,1011,1100.
$$

因此

$$
Y=\sum m(0,1,2,3,4,8,9,10,11,12),
$$

化简得

$$
Y=\overline{A_2}+\overline{A_1}\overline{A_0}.
$$

用 74LS138 时，以 $A_2A_1A_0$ 为地址，$A_3$ 及其反相信号分别使能两片译码器；把两片中编号 0～4 的低有效输出送入与非合成网络，只要当前片选中的地址是 0～4，输出就为 1。

用 74LS151 时，以 $A_2A_1A_0$ 为选择端，令

$$
D_0=D_1=D_2=D_3=D_4=1,
$$

$$
D_5=D_6=D_7=0.
$$

$A_3$ 不影响合法性，可不进入数据选择逻辑。

</details>

## 五、冗余数据传输与锁存（15 分）

一位数据用两根信号线冗余传输。两信号相同表示数据正确，不同表示错误。锁存使能为 $CE$：在 $CP$ 上升沿且 $CE$ 为低电平时锁存正确数据；$CE$ 为高电平时保持。用 D 触发器和门电路实现，给出设计过程和原理图。

<details class="exam-answer">
<summary>展开第五题参考解法</summary>

设两根数据线为 $X_1,X_2$。正确指示是同或：

$$
E=X_1X_2+\overline{X_1}\overline{X_2}.
$$

错误指示可取

$$
ERR=X_1\mathbin{\oplus}X_2.
$$

不要直接门控时钟，而是在 D 端做选择。仅当 $\overline{CE}E=1$ 时装入 $X_1$；其余情况反馈旧状态 $Q$：

$$
D=\overline{CE}EX_1+(CE+\overline E)Q.
$$

把该 $D$ 接入上升沿 D 触发器即可。两数据不一致时 $E=0$，触发器自动保持，同时 $ERR=1$。

</details>

## 六、ROM 驱动七段数码管（10 分）

用 ROM 和适当电路驱动共阴极七段数码管，循环显示字符串 `HAPPY2022`。要求写出设计过程并画出电路图。

![第六题 ROM 与七段数码管](/images/academics/digital-electronics/exams/2021-q6-rom-display.png)

<details class="exam-answer">
<summary>展开第六题参考解法</summary>

字符串共有 9 个字符，先用模 9 计数器产生地址 0～8，再用 ROM 把地址译成七段码。共阴极数码管采用高电平点亮，依次写入：

| 地址 | 字符 | 点亮段 |
|---|---|---|
| 0 | H | b、c、e、f、g |
| 1 | A | a、b、c、e、f、g |
| 2 | P | a、b、e、f、g |
| 3 | P | a、b、e、f、g |
| 4 | Y | b、c、d、f、g |
| 5 | 2 | a、b、d、e、g |
| 6 | 0 | a、b、c、d、e、f |
| 7 | 2 | a、b、d、e、g |
| 8 | 2 | a、b、d、e、g |

计数器输出接 ROM 地址，ROM 七个数据位分别接 a～g 段；第九个状态之后同步回到 0。若段电流超过 ROM 直接驱动能力，还应加限流电阻和缓冲驱动。

</details>

## 七、四位串行加法器（10 分）

两个四位寄存器 RA、RB 各存一个四位二进制数。用 74LS194、74LS183 和适当器件完成两个数求和，结果送回 RA。

![第七题所给寄存器与全加器](/images/academics/digital-electronics/exams/2021-q7-serial-adder.png)

<details class="exam-answer">
<summary>展开第七题参考解法</summary>

把 RA、RB 都设为右移：

1. 两个寄存器的 $Q_0$ 分别接 74LS183 的 $A$、$B$；
2. 全加器进位输入接一个进位 D 触发器的 $Q$，进位输出送回该触发器的 $D$；
3. 和位 $S$ 接 RA 的右移串行输入 $D_R$；RB 的 $D_R$ 接 0；
4. 两片 74LS194 和进位触发器共用时钟，开始前把进位置 0。

每拍处理当前最低位，再把和位从 RA 高端移入。四个时钟后，RA 从高到低恰为 $S_3S_2S_1S_0$；若还要保留最高进位，可另存为第五位。

</details>

## 八、25 秒高电平、15 秒低电平（15 分）

用 $1\text{ Hz}$ 时钟设计一个时序电路，使输出周期性产生高电平 $25\text{ s}$、低电平 $15\text{ s}$ 的波形，器件和方法不限。

![第八题目标波形](/images/academics/digital-electronics/exams/2021-q8-waveform.png)

<details class="exam-answer">
<summary>展开第八题参考解法</summary>

总周期为 $40\text{ s}$，所以用六位二进制计数器构成模 40 计数器。令复位后的状态为 0，并定义

当 $0\le N\le24$ 时令 $Y=1$；当 $25\le N\le39$ 时令 $Y=0$。

计到 39 后，下一个 $1\text{ Hz}$ 脉冲使计数器同步回到 0。这样 0～24 共 25 个状态输出高电平，25～39 共 15 个状态输出低电平，周期为 40 秒。

</details>
