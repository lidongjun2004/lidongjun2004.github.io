---
title: "第 6 周作业：圆上的流"
description: "整理第 6 周的圆周向量场定义、不动点与稳定性"
date: 2026-08-24
tags: ["动力系统", "作业"]
---

源作业为教材 4.1.1、4.1.2、4.1.4 与 4.1.6。

## 4.1.1：什么时候 $\dot\theta=\sin(a\theta)$ 定义圆上向量场

圆上同一点可写成 $\theta$ 或 $\theta+2k\pi$。向量场必须满足

$$
\sin[a(\theta+2k\pi)]=\sin(a\theta)
$$

对所有整数 $k$ 成立。这要求 $2\pi ak$ 总是 $2\pi$ 的整数倍，因此

$$
a\in\mathbb Z.
$$

若 $a$ 不是整数，给同一个圆周点选不同角度代表会得到不同速度，向量场没有良好定义。

## 4.1.2：$\dot\theta=1+2\cos\theta$

不动点满足 $\cos\theta=-1/2$：

$$
\theta^*=\frac{2\pi}{3},\frac{4\pi}{3}.
$$

$f'=-2\sin\theta$，所以 $2\pi/3$ 稳定，$4\pi/3$ 不稳定。

## 4.1.4：$\dot\theta=\sin^3\theta$

一周内只有两个不动点：

$$
\theta^*=0,\pi\pmod{2\pi}.
$$

它们都满足

$$
f'(\theta)=3\sin^2\theta\cos\theta=0,
$$

所以都是非双曲点，不能用一阶线性化判稳定。直接看符号：$(0,\pi)$ 上 $\dot\theta>0$，$(\pi,2\pi)$ 上 $\dot\theta<0$，圆周相线为

$$
0\ \xrightarrow{\ \dot\theta>0\ }\ \pi\
\xleftarrow{\ \dot\theta<0\ }\ 2\pi\equiv0.
$$

因此 $0\pmod{2\pi}$ 不稳定，$\pi\pmod{2\pi}$ 稳定。

## 4.1.6：$\dot\theta=3+\cos2\theta$

因为

$$
2\le3+\cos2\theta\le4,
$$

所以没有不动点，所有状态沿正方向持续旋转。源手写稿把这一题只记为“有两个解”，与题面方程不符；按教材原题重新验算应为无不动点。

## 圆上作图提醒

将 $0$ 与 $2\pi$ 接起来；不能把它们画成两个独立端点。若所有不动点双曲，稳定点与不稳定点会沿圆周交替出现，这也是很好的自检。
