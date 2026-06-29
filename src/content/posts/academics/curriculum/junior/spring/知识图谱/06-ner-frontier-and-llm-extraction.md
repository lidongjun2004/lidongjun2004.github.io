---
title: "NER 前沿与 LLM 抽取"
description: "实体识别前沿：MRC 式 NER、字典增强、LLM 抽取与 KG 构建中的范式转变"
date: 2026-06-25
tags: ["知识图谱", "课程笔记", "复习"]
---


> 对应 PPT：第6讲
> 重点：NER 前沿 5 方向（Few/Zero-shot、Continual、Nested、Cross-Domain、Multi-Modal）+ LLM 在知识抽取的**反直觉结论**。

---

## 1. NER 经典方法的 3 个组件

```
① 分布式输入表征（Embedding）：词 → 低维稠密实值向量
② 上下文编码器：CNN / RNN / Transformer 捕捉上下文
③ 标注解码器：预测每个 token 的标签
```

---

## 2. NER 主流数据集（**4 个，常考名字**）

| 数据集 | 实体数 | 特点 |
|---|---|---|
| **CoNLL 2003** | 4 类（PER/LOC/ORG/MISC） | Reuters 新闻，**最经典** |
| **CoNLL++** | 4 类 | CoNLL 2003 的**更干净版本**，修了 ~5% 测试集标签错误 |
| **WNUT 2017** | 6 类 | 社交媒体噪声数据 |
| **Ontonotes v5** | 18 类（11 类型 + 7 值） | 大型、3 语言、200 万 token |
| **Few-NERD** | 8 粗 + 66 细 | 大规模、**小样本 NER**专用 |

### 2.1 CoNLL 2003 SOTA

| 模型 | F1 | 关键创新 |
|---|---|---|
| **ACE + document-context** (Wang 2021) | 94.6 | **神经结构搜索**自动选最优 embedding 串接 |
| **LUKE** (Yamada 2020) | 94.3 | 基于 Transformer 的**实体感知**自注意力 |
| **CL-KL** (Wang 2021) | 93.85 | **检索外部上下文** + 合作学习 |

### 2.2 3 种主流 Embedding 串接

1. **Classical word embeddings**（Word2Vec、GloVe）
2. **Character-level features**（针对特定任务的字特征）
3. **Contextualized embeddings**（ELMo、Flair）

> Flair embeddings：双向字符语言模型 + BiLSTM-CRF。
> ACE：神经结构搜索自动选最优串接方式（强化学习控制器）。

### 2.3 三大改进方向

| 方向 | 思路 | 代表工作 |
|---|---|---|
| **ACE** | 自动搜索最优 embedding 串接 | Wang 2021 |
| **LUKE** | 把实体也当作 token，用 Transformer 学 | Yamada 2020 |
| **CL-KL** | 检索外部文档作上下文 + 合作学习 | Wang 2021 |

---

## 3. NER 衍生方向（**5 大方向，必背**）

### 3.1 Few/Zero-Shot NER

**背景**：
- 实际应用中**目标实体类**标注数据稀缺
- 人类能从 1-2 个例子就学会新概念，机器不行——这是 AI 短板

**Few-NERD 数据集**（**期末爱考**）：
- 8 粗 + 66 细粒度类型、188k 句子、491k 实体
- 3 个子任务：
  - **Few-NERD (SUP)**：标准 NER
  - **Few-NERD (INTRA)**：跨细粒度类型的小样本
  - **Few-NERD (INTER)**：跨粗粒度类型的小样本

**Zero-Shot NERC**（ACL 2021）：
- 方法：用**实体类的自然语言描述**代替标注样本
- 解决"训练/测试类不一致"导致 not-an-entity 类不明确的问题
- 训练：观察到的类；测试：未见过的类
- 例：描述"人类建造的结构：基础设施、街道、桥梁" → 模型识别"Shantou Harbour"为 Facility 类

**SpanNER**（EMNLP 2021）：
- 把 NER 拆成两个子任务：
  1. **跨度检测（Span Detection）**——类别无关，token 采样缓解类别不平衡
  2. **实体类推理（Type Inference）**——基于类别描述的注意力机制
- 优势：小样本 + 零样本 + 领域迁移**三种场景通用**

**关键洞察**：传统 NER 把每个类当作 one-hot 向量，**无法捕捉标签的语义含义**；用**类别描述**学习才能迁移到新类。

### 3.2 Continual NER（持续学习）

**背景**：
- 现实场景中**不断出现新的实体类型**
- 重新标注旧数据**代价高或不可能**（存储/安全限制）
- 不能"全打碎重训"——**灾难性遗忘**问题

**3 种让模型胜任多任务的方法**：

| 方法 | 思路 | 局限 |
|---|---|---|
| **多任务学习/联合训练** | 在新旧任务并集上重训 | 旧数据可能拿不到、随任务增多成本飙升 |
| **微调** | 用小学习率更新（部分/全部）参数 | 简单微调会**影响旧任务性能** |
| **迁移学习/特征抽取** | 复用预训练模型的特征提取 | 通用特征不能覆盖新任务特有信息 |

**ExtendNER**（AAAI 2021）：
- 持续学习框架
- 用**知识蒸馏**（teacher → student）巩固旧知识
- KL 散度损失：$KL(p_T \| p_S)$ 让学生模型输出接近教师
- 关键：只**用新类型标注的新数据**训练

### 3.3 Nested NER（嵌套）

**问题**：实体可以**嵌套**——"霍格沃兹校长阿不思·邓布利多"中"霍格沃兹"、"校长"、"阿不思·邓布利多"都是实体，且互有包含。

**传统序列标注**（BIO）无法处理嵌套 → 需要分层标注。

**最佳方法**（ACL 2021）：
- 多级编码方案：按实体的**深度**分多层
- **从最内部的实体开始识别**（内 → 外）效果更好
- 用 **3 层 BiLSTM** 编码 + **CRF** 解码
- 数据集：ACE2004、ACE2005、GENIA

> **结论**："内部优先"识别比"外部优先"更优。

### 3.4 Cross-Domain NER

**动机**：现有 NER 基准的 2 个问题：
1. 目标数据集**与源数据集过于相近**——评测没意义
2. 源/目标实体类**差距过大**——迁移困难

**CrossNER**（AAAI 2021）数据集：
- 5 个领域：**politics / natural science / music / literature / AI**
- 每个领域有专门实体类
- 提供**领域相关语料库**用于领域自适应预训练（DAPT）

**关键发现**：
- DAPT 比通用预训练更有效
- 用"含领域专业实体的**子集语料**"+ **更具挑战性的预训练策略** → 效果更好

**领域专属 NER**（ACL 2021）：
- 专门领域（生物医学、法律）实体复杂
- 思路：用**全局共指关系 + 局部依赖关系**通过 **GNN** 显式连接实体提及

### 3.5 Multi-Modal NER

**背景**：现实中文本经常伴随图像（推文、商品页），视觉信息能辅助实体识别。

**关键发现**：
- **BERT-CRF > BiLSTM-CRF**（预训练强）
- **BERT-CRF > 纯 BERT**（CRF 有效）
- **多模态 > 纯文本**（视觉信息有效）
- **UMT（Unimodal-Multimodal Transformer）** 强——用交叉 Transformer 融合 + 辅助任务
- 加 **visual guidance** 后还能再提升

---

## 4. 大模型（LLM）在知识抽取中的应用（**重点：反直觉结论**）

### 4.1 提出的 4 个核心问题

1. **少样本 IE 任务中，LLM 能否真正超过 SLM？**
2. 更多标注数据能否提升 LLM 和 SLM 的能力？
3. 经济/时间代价上，哪类模型更好？
4. LLM 和 SLM 是否分别适合处理不同类型样本？

### 4.2 评估设置

**小模型（SLM）**：RoBERTa-large（抽取）、T5-large（生成）
- 4 种方法：微调 FT、FSLS、KnowPrompt、UIE

**大模型（LLM）**：CODEX（code-davinci-002 / text-davinci-003）
- 4 种 ICL（In-Context Learning）设置：
  - 基础 ICL
  - ICL + Auto CoT（生成推理链）
  - ICL + demo 筛选（embedding 相似）
  - ICL + Self-ensemble

**任务**：NER、RE、ED（事件检测）

### 4.3 核心结论（**期末必背，反直觉**）

> **"Large Language Model Is Not a Good Few-shot Information Extractor, but a Good Reranker for Hard Samples!"**

#### 结论 1：LLM 不是好的少样本 IE 工具

- **1-shot 下**：LLM 比 SLM 表现好
- **5-10 shot 下**：LLM ≈ SLM
- **更多标注数据后**：**SLM > LLM**（因为 SLM 可以微调）
- **复杂 ED 任务**：**SLM 总是比 LLM 好**
- **推理速度**：LLM **慢 100x+**，且**费用高**

> 根本原因：IE 任务形式 + 受限的 demo 数量，LLM 不擅长。

#### 结论 2：LLM 是好的少样本**重排器**（reranker）

**Filter-then-Rerank 范式**：
```
① SLM 作为过滤器：移除不可能标签，保留 Top-N 候选
② LLM 重排这 N 个标签：输出最终答案
   → 把 N 个候选改写成"选择题"形式给 LLM
   → 例："<头实体>和<尾实体>具有<label>关系吗？"
```

- **SLM 处理简单样本，LLM 处理复杂样本**
- 用"所有标签的最大概率"做 confidence score，**低于阈值的判定为困难样本**
- 在 3 个数据集 9 个实验设置下，filter-then-rerank **都取得大幅提升**
- rerank 单独：+2.4% F1；rerank + ensemble：+2.1% F1

> 优势：
> - 减少标签范围（多项选择），降低 LLM 任务难度
> - 让 LLM 用"熟悉的形式"做 IE
> - SLM 和 LLM **能力互补**

### 4.4 整体策略总结

| 场景 | 推荐 |
|---|---|
| 简单样本 + 充足标注 | **SLM 微调**（便宜+快+准） |
| 简单样本 + 极少标注 | LLM 1-shot ICL |
| 复杂样本 + 极少标注 | **Filter-then-Rerank**（SLM + LLM 协作） |
| 复杂样本 + 充足标注 | SLM 微调（仍胜 LLM） |

---

## 5. 行业知识图谱构建工具

| 资源 | 用途 |
|---|---|
| **KnowLM** | 知识增强的开源大语言模型框架（浙大 ZJUNLP） |
| **InstructionKGC** | 指令驱动的自适应知识图谱构建（DeepKE/example/llm） |
| **行业 KG 综述** | https://mp.weixin.qq.com/s/iVIoaZxhS1EyC2etRnBf4Q |

---

## 6. 编程练习

> **Resume NER 数据集**（8 类实体：BIO 标注）：
> - 国籍（CONT）、教育背景（EDU）、地名（LOC）、人名（NAME）
> - 组织名（ORG）、专业（PRO）、民族（RACE）、职称（TITLE）
>
> 推荐模型：BiLSTM+CRF

---

## 7. 本章脑图

```
NER 前沿 + LLM 抽取
├── NER 经典 3 组件
│
├── 主流数据集
│   ├── CoNLL 2003 / CoNLL++（新闻，4 类）
│   ├── WNUT 2017（社交媒体）
│   ├── Ontonotes v5（大型，18 类）
│   └── Few-NERD（小样本专用）
│
├── NER 衍生 5 方向
│   ├── Few/Zero-Shot NER
│   │   ├── Few-NERD（粗+细粒度）
│   │   ├── Zero-Shot NERC（类别描述）
│   │   └── SpanNER（跨度+类推理）
│   ├── Continual NER（持续学习）
│   │   └── ExtendNER（知识蒸馏）
│   ├── Nested NER（嵌套）
│   │   └── 内→外多层编码
│   ├── Cross-Domain NER
│   │   └── CrossNER（5 领域+DAPT）
│   └── Multi-Modal NER
│       └── UMT（视觉辅助）
│
└── LLM 在知识抽取
    ├── 核心结论
    │   ├── 1-shot：LLM > SLM
    │   ├── 5-10 shot：LLM ≈ SLM
    │   ├── 充足标注：SLM > LLM
    │   └── 复杂 ED：SLM 总是 > LLM
    └── Filter-then-Rerank 范式
        ├── SLM 当过滤器
        ├── LLM 当重排器
        └── confidence score 选困难样本
```
