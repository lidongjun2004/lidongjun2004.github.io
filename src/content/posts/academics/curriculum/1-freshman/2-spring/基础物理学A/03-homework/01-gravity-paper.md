---
title: "作业 1 · 万有引力性质小论文"
description: "力学阶段小论文：用微积分讨论均匀球壳内部引力，并讨论平方反比律的严格性。"
date: 2026-08-27
tags: ["作业"]
---

## 作业来源

《小论文题目（力学&相对论）》在 2024 年 3 月 6 日给出了这个选题：

> 采用微积分的办法，证明均匀质量球面对内部任意点的万有引力大小为零。同时，如果平方反比定律不是严格的 2，那么将发生什么？发挥想象力，给出一个科幻。

同目录的《小论文模板》是《大学物理》期刊式排版模板，其中还给出了中英文摘要、关键词、公式编号、图表和参考文献的格式说明。

下面是我当时提交的《关于万有引力性质的讨论与猜想》。内容按提交稿转写，只重排了 Markdown 和公式；其中式 (11) 的符号与前一式存在明显不一致，在原文后单独标注，没有悄悄改掉原提交。

<details class="exam-answer">
<summary>查看原提交内容</summary>

## 关于万有引力性质的讨论与猜想

李东骏

（北京航空航天大学 人工智能研究院，北京 100875）

**摘要：** 通过微积分，严格证明均匀质量球壳对其内部任意一点的引力为零。并发现这与万有引力平方反比规律息息相关。对万有引力是否严格平方反比作出假设，并分情况进行了讨论。对万有引力不严格平方反比的情况给出了一种科幻。

**关键词：** 微积分；万有引力；均匀质量球壳；严格平方反比；科幻

在学习牛顿运动定律的过程中，学到了万有引力定律的相关知识。对此展开联想，老师提出了两个探究问题：均匀质量球面对内部任一点的引力为零的微积分严格证明，以及万有引力平方反比规律的严格与否假设探究。

## 1 探究均匀质量球面对球面内部点的引力大小

### 1.1 题目条件

假设一球壳密度为 $\rho$，半径为 $r$，厚度为 $d$（$d\ll r$），球心为 $O$。球壳内存在一质量为 $m$、距球心距离为 $R$ 的质点 $P$。现计算球壳对质点 $P$ 的引力大小 $F$。

### 1.2 微积分推导

以 $OP$ 连线为轴，将球壳微分为许多环带。由球壳的对称性，球壳对质点 $P$ 的引力仅需考虑 $PO$ 方向的分量。

在球壳上取一环带，设 $\theta$ 为环带到球心 $O$ 的连线与 $OP$ 的夹角。环的半径为 $r\sin\theta$，周长为 $2\pi r\sin\theta$，宽为 $r\mathrm d\theta$。环带体积为

$$
\mathrm dV=2\pi r\sin\theta\cdot r\mathrm d\theta\cdot d
=2\pi r^2d\sin\theta\mathrm d\theta.\tag{1}
$$

环带质量为

$$
\mathrm dm_0=\rho\mathrm dV
=2\pi\rho r^2d\sin\theta\mathrm d\theta.\tag{2}
$$

设环带上各质元到 $P$ 点的连线与 $OP$ 的夹角为 $\alpha$，各质元到 $P$ 的距离为 $x$。环带对质点 $P$ 的引力分量大小为

$$
\mathrm dF=G\frac{m\,\mathrm dm_0}{x^2}\cos\alpha
=2\pi G\rho mr^2\frac{\sin\theta\mathrm d\theta}{x^2}\cos\alpha.\tag{3}
$$

式中 $x,α,θ$ 满足

$$
\cos\alpha=\frac{R-r\cos\theta}{x},\tag{4}
$$

$$
x^2=R^2+r^2-2Rr\cos\theta,\tag{5}
$$

$$
r\cos\theta=\frac{R^2+r^2-x^2}{2R}.\tag{6}
$$

对式 (5) 微分得

$$
2x\mathrm dx=2Rr\sin\theta\mathrm d\theta,\tag{7}
$$

$$
\sin\theta\mathrm d\theta=\frac{x}{Rr}\mathrm dx.\tag{8}
$$

将式 (6) 代入式 (4)，得

$$
\cos\alpha=\frac{R^2-r^2+x^2}{2Rx}.\tag{9}
$$

将式 (8)、(9) 代入式 (3)，化简得

$$
\mathrm dF=\frac{\pi Gmr\rho d}{R^2}
\left(\frac{R^2-r^2}{x^2}+1\right)\mathrm dx.\tag{10}
$$

对式 (10) 积分：

$$
F=\int_{r-R}^{r+R}\frac{\pi Gmr\rho d}{R^2}
\left(\frac{R^2+r^2}{x^2}+1\right)\mathrm dx.\tag{11}
$$

经积分运算，$F=0$。

> **编排注：** 原提交的式 (11) 写成了 $R^2+r^2$，与式 (10) 的 $R^2-r^2$ 不一致。若沿式 (10) 积分，应保留减号，此时积分结果才为零。

### 1.3 结论

由 $m$ 和 $R$ 的任意性可知，无论 $P$ 点的位置以及质点质量大小，$F$ 恒为零。均匀质量球壳对其内部任意点的引力为零。

## 2 万有引力定律平方反比规律探究

### 2.1 假设

假设万有引力公式 $F=GMm/R^2$ 中，分母的指数不是严格的「2」，即平方反比规律并不严格。下面就该假设讨论可能发生的情形。

### 2.2 可能情形讨论

一、上述证明所得出的结论「均匀质量球壳对其内部任意点引力为零」将失效。当且仅当严格平方反比成立时，$F$ 始终为零。

二、行星绕恒星运动的轨道将不闭合。比如，地球可能会逐渐向太阳靠近，逐渐被太阳所吸引，最终被吞噬。

### 2.3 一种科幻

在某个时间点，地球上的科学家发现地球绕太阳运动的轨道不闭合，且靠近太阳的速度加快。在进行了一系列探测和实验后，人们发现万有引力定律并不严格遵循平方反比定律。这引发了一系列物理学变革，并使人类逐渐注重如何摆脱被太阳吞噬的命运。

## Conjecture to discuss and assumptions about the nature of all gravity

LI Dong-jun

(Artificial Intelligence Research Institute, Beihang University, Beijing 100875, China)

**Abstract:** Through the calculus, it is strictly proved that the quality of the better quality shell is zero to arbitrarily internal. And found that this is closely related to the gravity of gravity. Regarding whether the gravity is strictly strictly rejected and discussed in division. A kind of science fiction is given to the situation where the gravity is not strict.

**Key words:** Plugs; gravity; uniform quality ball shells; strict formula ratio; science fiction

</details>
