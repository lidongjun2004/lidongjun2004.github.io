---
title: "KGE 与推理 2（关系特性建模）"
description: "复杂关系建模：Trans 系列扩展、双线性（DistMult/ComplEx）、图神经网络（R-GCN/CompGCN）"
date: 2026-06-25
tags: ["知识图谱", "课程笔记", "复习"]
---


> 对应 PPT：第11讲
> 第 10 讲的深化——专门讲"如何建模不同的关系特性"（1-N/N-N/对称/逆反/组合/层次）。重点：TransE 家族完整对比、张量分解改进、特定空间模型。

---

## 1. 关系特性分类（必背）

### 1.1 复杂映射特性（4 类）

| 类型 | 含义 | 例子 |
|---|---|---|
| **1-1** | 一对一 | (北京, 首都, 中国) |
| **1-N** | 一对多 | (中国, 有城市, 北京/上海/广州) |
| **N-1** | 多对一 | (小明/小强, 出生于, 北京) |
| **N-N** | 多对多 | (本泽马/贝克汉姆/C罗, 效力于, 皇家马德里) |

> "1"位置是**唯一性实体**，"N"位置是**非唯一性实体**。

### 1.2 多种关系模式（4 类）

| 模式 | 含义 | 例子 |
|---|---|---|
| **对称关系** | $(h, r, t) \Rightarrow (t, r, h)$ | 夫妻、朋友 |
| **反对称关系** | $(h, r, t) \Rightarrow \neg(t, r, h)$ | 老师 |
| **逆反关系** | $(h, r_1, t) \wedge (t, r_2, h)$ | 球员 ↔ 效力于 |
| **组合关系** | $r_1 + r_2 = r_3$ | (小明, 出生于, 北京) + (北京, 首都, 中国) → (小明, 国籍, 中国) |

### 1.3 实体间层次关系

- 中国 > 广西省 > 桂林市（**自顶向下**的层次）
- 双曲空间 / 极坐标可建模这种树状结构

---

## 2. 基础模型的局限

| 模型 | 局限 |
|---|---|
| **TransE** | 不能建模 1-N（强制 t 相等）；对称关系 → $\mathbf{r}=0$；无法建模层次 |
| **RESCAL** | 矩阵乘法满足交换律 → 不能建模反对称；难以建模组合 |

---

## 3. 基于关系感知映射的模型（5 个变种）

### 3.1 总览表（必背）

| 模型 | 表示空间 | 打分函数 | 特点 |
|---|---|---|---|
| **TransH** | 实数 | $\|\mathbf{h}_\perp + \mathbf{r} - \mathbf{t}_\perp\|$ | 关系超平面投影 |
| **TransR** | 实数 | $\|M_r\mathbf{h} + \mathbf{r} - M_r\mathbf{t}\|$ | 关系空间投影 |
| **STransE** | 实数 | $\|M_r^1 \mathbf{h} + \mathbf{r} - M_r^2 \mathbf{t}\|$ | 头尾实体**不同投影** |
| **TransD** | 实数 | $\|\theta_h M_{rh} \mathbf{h} + \mathbf{r} - \theta_t M_{rt} \mathbf{t}\|$ | **自适应稀疏投影** |
| **TransF** | 实数 | $(\mathbf{h}+\mathbf{r})^T\mathbf{t} + \mathbf{h}^T(\mathbf{t}-\mathbf{r})$ | 放松约束 |
| **TransA** | 实数 | $(\mathbf{h}+\mathbf{r}-\mathbf{t})^T M_r (\mathbf{h}+\mathbf{r}-\mathbf{t})$ | 马氏距离 |

### 3.2 TransH

- 每个关系 r 对应**超平面法向量** $\mathbf{w}_r$
- 实体投影到超平面再平移
- 投影公式：
$$
\mathbf{h}_\perp = \mathbf{h} - \mathbf{w}_r^T \mathbf{h} \mathbf{w}_r
$$
$$
\mathbf{t}_\perp = \mathbf{t} - \mathbf{w}_r^T \mathbf{t} \mathbf{w}_r
$$
- **缺点**：同一关系的所有实体都投影到**同一个**超平面，无法精细区分

### 3.3 TransR / STransE / TransD

| 模型 | 关键创新 | 优缺点 |
|---|---|---|
| **TransR** | 每个关系一个投影矩阵 $M_r$ | 实体/关系空间分离；参数多 |
| **STransE** | 头/尾实体**分别投影** $M_r^1, M_r^2$ | 更灵活；参数更多 |
| **TransD** | **自适应稀疏投影矩阵** $M_{rh} = \mathbf{r}_p \mathbf{h}_p^T + I$ | 减少参数 |

> **TransD 公式（重点记忆）**：
> - $M_{rh} = \mathbf{r}_p \mathbf{h}_p^T + I$
> - $M_{rt} = \mathbf{r}_p \mathbf{t}_p^T + I$
> - 头尾实体分别投影 → 自适应

### 3.4 TransF

- 放松 TransE 的硬约束：头实体+关系 ≠ 必须等于尾实体，只需**保持相同方向**
- $E = (\mathbf{h}+\mathbf{r})^T\mathbf{t} + \mathbf{h}^T(\mathbf{t}-\mathbf{r})$

### 3.5 TransA / TransM

- **TransA**：欧氏距离 → 加权马氏距离（对不同分量加权）
- **TransM**：降低 1-N 关系权重

---

## 4. 基于特定表示空间的模型

### 4.1 4 个模型

| 模型 | 表示空间 | 思想 |
|---|---|---|
| **KG2E** | 多维高斯空间 | 实体/关系表示为**高斯分布**，含**不确定性** |
| **ManifoldE** | 流形空间 | 实体在球体内（不强制相等） |
| **TorusE** | 紧李群环 | TransE 的李群环版本 |
| **HAKE** | 极坐标系 | 模长+相角分别建模层次和语义 |

### 4.2 KG2E（不确定性建模）

- 实体/关系嵌入**多维高斯分布** $\mathcal{N}(\mu, \Sigma)$
- $\mu$ = 中心位置，$\Sigma$ = 不确定度
- 打分函数（KL 散度 / 期望似然）：
$$
E(h, r, t) = \int_{\mathbb{R}^k} N(\mathbf{x}, \mu_r, \Sigma_r) \log \frac{N(\mathbf{x}, \mu_e, \Sigma_e)}{N(\mathbf{x}, \mu_r, \Sigma_r)} d\mathbf{x}
$$

> **关键优势**：能直接建模**复杂映射特性** + **不确定性**。

### 4.3 ManifoldE（流形）

- 打破"点 = 点"的硬约束
- 头实体和关系为**球心**，尾实体在**球内**：
$$
E(h, r, t) = MF(\mathbf{h}, \mathbf{r}, \mathbf{t}) - D_r^2
$$
- 巧妙解决 1-N 问题：1-N 的多个 t 只要都在球内即可

### 4.4 TorusE（紧李群环）

- 把 TransE 搬到**李群环**上
- 同一头实体不同尾实体的**差值可以相同** → 建模 1-N
- 打分函数：
$$
E_{L1}(h, r, t) = 2 d_{L1}(\mathbf{h} + \mathbf{r}, \mathbf{t})
$$

### 4.5 HAKE（极坐标建模）

- 实体/关系表示为极坐标 $(\rho, \phi)$
- **模长** $\rho$ 建模**层次**（同一层 → 相同模长）
- **相角** $\phi$ 建模**语义**（同一类 → 相近相角）
- 数学：`$\mathbf{h} \circ \mathbf{r}$` 在极坐标下 = 模长相乘 + 相角相加

---

## 5. 建模多种关系模式的 3 类方法

### 5.1 总览

| 类型 | 代表模型 | 关键思想 |
|---|---|---|
| **改进张量分解** | ComplEx / HolE / SimplE | 打破交换律 |
| **改进关系感知映射** | PairRE / TripleRE / TranS | 增加映射+平移 |
| **旋转操作** | RotatE / QuatE / DualE | 复数/四元数旋转 |

### 5.2 改进张量分解

**ComplEx**（**第一个打破交换律**）：
- 实体/关系嵌入**复数空间**
- 头实体、关系、尾实体复数表示间的**哈密顿乘法**
- 打分函数：
$$
E(h, r, t) = \text{Re}(\mathbf{h}^T \text{diag}(\mathbf{r}) \bar{\mathbf{t}})
$$
- $\bar{\mathbf{t}}$ = 尾实体的**共轭**
- **同时建模对称 + 反对称**

**HolE**：
- **循环相关运算** $\mathbf{r}^T (\mathbf{h} \star \mathbf{t})$
- 头尾实体间的循环相关 → 同时建模对称/反对称
- 但**不能建模组合关系**

**SimplE**：
- 为每个实体学 2 个嵌入（作为头 + 作为尾）
- 为每个关系构造**对应的逆关系**
- 打分函数：
$$
E(h, r, t) = \mathbf{h}^T \text{diag}(\mathbf{r}) \mathbf{t}_t + \mathbf{t}^T \text{diag}(\mathbf{r}^{-1}) \mathbf{h}_t
$$

### 5.3 改进关系感知映射

**PairRE**（**最优雅的方案**）：
- 关系用**成对向量** $(\mathbf{r}_h, \mathbf{r}_t)$ 分别处理头/尾
- 打分函数：
$$
E(h, r, t) = \mathbf{h} \circ \mathbf{r}_h - \mathbf{t} \circ \mathbf{r}_t
$$
- 满足约束：

| 关系模式 | PairRE 约束 |
|---|---|
| 对称 | $\|\mathbf{r}_h\| = \|\mathbf{r}_t\|$ |
| 反对称 | $\|\mathbf{r}_h\| \neq \|\mathbf{r}_t\|$ |
| 逆反 | $\mathbf{r}_1^h \circ \mathbf{r}_h^2 = \mathbf{r}_1^t \circ \mathbf{r}_t^2$ |
| 组合 | $\mathbf{r}_1^h \circ \mathbf{r}_h^2 \circ \mathbf{r}_h^3 = \mathbf{r}_1^t \circ \mathbf{r}_t^2 \circ \mathbf{r}_t^3$ |

**TripleRE**：
- 关系表示为**3 部分**（头映射 + 平移 + 尾映射）：
$$
E(h, r, t) = \mathbf{h} \circ \mathbf{r}_h - \mathbf{t} \circ \mathbf{r}_t + \mathbf{r}_m
$$

**TranS**：
- TripleRE 的扩展，**2 次映射 + 3 次平移**：
$$
E = \mathbf{h} \circ \mathbf{t}_h - \mathbf{t} \circ \mathbf{h}_t + \mathbf{r}_h \circ \mathbf{h} + \mathbf{r} + \mathbf{r}_t \circ \mathbf{t}
$$

### 5.4 旋转操作（最现代）

**RotatE**（**复数旋转**）：
$$
E(h, r, t) = \|\mathbf{h} \circ \mathbf{r} - \mathbf{t}\|
$$
- $\mathbf{r}$ 是模长 1 的复数（纯旋转）
- **4 种关系模式都能建模**
- 缺点：复数空间一个平面上的旋转，**可能导致奇异性**

**QuatE**（**四元数旋转**）：
- 实体/关系嵌入**四元数空间**
- 通过**哈密顿乘法**实现在**两个平面**上的旋转（更稳定）
- 打分函数：
$$
E(h, r, t) = \mathbf{h} \otimes \frac{\mathbf{r}^\dagger}{\|\mathbf{r}\|} \cdot \mathbf{t}
$$

**DualE**（**对偶四元数 = 旋转 + 平移**）：
- 实体/关系嵌入**对偶四元数空间**
- 对偶四元数同时表示**旋转和平移**
- 打分函数：
$$
E(h, r, t) = \mathbf{Q}_h \otimes \overline{\mathbf{W}_h}, \mathbf{Q}_t
$$

---

## 6. 建模层次关系

### 6.1 2 类方法

| 方法 | 代表模型 | 核心思想 |
|---|---|---|
| **双曲空间** | Poincaré | 双曲空间 = 连续树形空间 |
| **极坐标系** | HAKE | 模长建模层次，相角建模语义 |

### 6.2 Poincaré 模型

- 庞加莱球（特殊的几何空间）
- **距球心近 = 高层抽象概念**，**距球心远 = 低层具体实体**
- 打分函数：
$$
E(h, t) = \text{arcosh}\left(1 + 2 \frac{\|\mathbf{h} - \mathbf{t}\|^2}{(1-\|\mathbf{h}\|^2)(1-\|\mathbf{t}\|^2)}\right)
$$
- **只关注"上位"层次关系**（如 WordNet）

### 6.3 HAKE 极坐标

- 二维极坐标 $(\rho, \phi)$ 表示一个点
- **模长 $\rho$** → 层次关系（同一层 = 相同模长）
- **相角 $\phi$** → 语义（同一类 = 相近相角）

---

## 7. TransE 家族终极对比表（期末必背）

| 模型 | 空间 | 打分函数核心 | 主要建模 |
|---|---|---|---|
| TransE | 实数 | $\|\mathbf{h} + \mathbf{r} - \mathbf{t}\|$ | 1-1、反对称、组合 |
| TransH | 实数 | 投影到关系超平面 | 1-N |
| TransR | 实数 | 投影到关系空间 | 复杂映射 |
| STransE | 实数 | 头尾分别投影 | 复杂映射 |
| TransD | 实数 | 自适应稀疏投影 | 复杂映射 |
| TransF | 实数 | 放松方向约束 | 简单关系 |
| TransA | 实数 | 加权马氏距离 | 复杂映射 |
| KG2E | 高斯 | 不确定性相似度 | 不确定性 |
| ManifoldE | 流形 | 球体内距离 | 1-N |
| TorusE | 李群环 | 李群平移 | 1-N |
| ComplEx | 复数 | 哈密顿乘法 | 对称+反对称 |
| HolE | 实数 | 循环相关 | 对称+反对称 |
| SimplE | 实数 | 双嵌入+逆关系 | 对称+反对称 |
| PairRE | 实数 | 成对关系向量 | **4 种模式 + 复杂映射** |
| TripleRE | 实数 | 头映射+平移+尾映射 | 4 种模式 |
| TranS | 实数 | 2 次映射+3 次平移 | 4 种模式 |
| RotatE | 复数 | $\mathbf{h} \circ \mathbf{r} = \mathbf{t}$ | **4 种模式** |
| QuatE | 四元数 | 哈密顿乘法（两平面） | 4 种模式 + 更稳定 |
| DualE | 对偶四元数 | 旋转+平移 | 4 种模式 |
| HAKE | 极坐标 | 模长+相角 | **层次关系** |
| Poincaré | 双曲 | 庞加莱距离 | **层次关系** |

---

## 8. 本章脑图

```
KGE 与推理 2
├── 关系特性分类
│   ├── 复杂映射（1-1/1-N/N-1/N-N）
│   ├── 多种模式（对称/反对称/逆反/组合）
│   └── 层次关系
│
├── 基于关系感知映射（5 个变种）
│   ├── TransH（超平面投影）
│   ├── TransR（关系空间投影）
│   ├── STransE（头尾分别投影）
│   ├── TransD（自适应稀疏投影）
│   └── TransF/A/M（放松/加权）
│
├── 基于特定表示空间
│   ├── KG2E（高斯分布+不确定性）
│   ├── ManifoldE（流形）
│   ├── TorusE（李群环）
│   └── HAKE（极坐标=层次+语义）
│
├── 建模多种关系模式（3 类）
│   ├── 改进张量分解：ComplEx/HolE/SimplE
│   ├── 改进关系感知映射：PairRE/TripleRE/TranS
│   └── 旋转操作：RotatE/QuatE/DualE
│
└── 建模层次关系
    ├── 双曲空间（Poincaré）
    └── 极坐标（HAKE）
```