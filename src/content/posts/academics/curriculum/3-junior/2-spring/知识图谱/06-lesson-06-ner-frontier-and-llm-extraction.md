---
title: "第六讲 · NER 前沿与 LLM 知识抽取"
description: "梳理低资源、持续、嵌套、跨领域与多模态 NER，并限定理解 LLM 过滤—重排实验的结论"
date: 2026-06-25
updated: 2026-08-23
tags: ["知识图谱", "数学"]
---

<!-- markdownlint-disable MD031 MD032 MD034 MD040 -->

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

---

## 8. 课件补全与勘误

### 8.1 本讲实际列了五个主流数据集

NER 是在文本中定位预定义类型的命名实体并为其分类的任务，通常建模为序列标注。它既是 NLP 的基础任务，也是把医学、新闻、社交媒体等文本接入知识图谱的关键上游步骤。

前文标题写“4 个”，但表格和课件目录实际包含五项：CoNLL 2003、CoNLL++、WNUT 2017、OntoNotes v5 和 Few-NERD。它们覆盖新闻、清洗后的新闻测试集、社交媒体、多领域多语言语料和细粒度少样本场景，不能只记名称而忽略使用边界。

Few-NERD 的完整课件数字是：**8 个粗粒度类型、66 个细粒度类型、188,200 个句子、491,711 个实体、4,601,223 个 token**。

> **INTRA / INTER 勘误**：课件抽取文本对两者的描述有歧义，前文“INTRA 跨细粒度、INTER 跨粗粒度”也不够准确。按 Few-NERD 的划分直觉，**INTRA** 在各粗粒度类别内部拆分细粒度类型，训练和测试仍共享粗类别；**INTER** 按粗粒度类别跨集合拆分，测试会遇到训练未覆盖的粗类别，迁移跨度更大。考试若题面直接引用课件措辞，应先说明所采用的定义。

### 8.2 ACE、LUKE、CL-KL 分别改进了哪一环

这里的 **ACE** 是 *Automated Concatenation of Embeddings*，不是第三讲的 *Automatic Content Extraction* 评测：

| 工作 | 改进点 | 关键机制 |
|---|---|---|
| ACE + document context | 自动选择怎样拼接多种 embedding | 控制器采样候选组合，以任务模型性能为奖励更新搜索策略 |
| LUKE | 让预训练模型显式感知实体 | 把 word 与 entity 当作不同 token，使用实体感知自注意力共同编码 |
| CL-KL | 原文缺少文档上下文时，从外部补上下文 | 搜索相关文本并重排，将 top-$l$ 文本与原句拼接；合作学习约束两种输入视图的表示和标签分布 |

课件表中的 F1 是特定数据集和评测设置下的历史结果，用来理解方法演进即可，不应解释为跨数据集的通用排名。

- ACE 的控制器与任务模型反复交互：采样 embedding 组合，训练任务模型得到奖励，再用强化学习更新控制器；论文在 6 个任务、21 个数据集上报告了当时的 SOTA。
- LUKE 同时掩码并预测 word 与 entity，课件列出 Open Entity、TACRED、CoNLL-2003、ReCoRD、SQuAD 1.1 五类下游任务。
- CL-KL 先由搜索引擎召回 top-$k$ 外部文本，再由重排器取 top-$l$；NER 模型分别处理原句视图和“原句 + 外部上下文”视图，并以合作学习对齐内部表示或标签分布。课件称其覆盖 5 个领域、8 个 NER 数据集。

CoNLL++ 页面的具体结果还包括 CL-KL 94.81、CrossWeigh + Flair 94.28、Flair 93.89；这些数值只用于还原课件表格，不代表今天的 SOTA。OntoNotes v5 除 18 类、200 万 token 外，还带有共指、词性、词义、命题与句法树等多层标注。

### 8.3 从 SpanNER 到跨领域、远程监督和多模态

**SpanNER** 先做类别无关的跨度检测，再根据类别自然语言描述做类型推理。拆分后，模型既能复用“什么像一个实体”的边界知识，又能通过标签语义推断未见类别，所以被同一框架用于少样本、零样本和领域迁移。

课件报告 SpanNER 在五个基准上相对最佳基线的平均提升：少样本约 10%、领域迁移约 23%、零样本约 26%。这些是论文特定设置下的相对结果，不应拿来承诺任意新数据集上的收益。

**CrossNER** 刻意覆盖 politics、natural science、music、literature、artificial intelligence 五个差异明显的领域。其领域自适应预训练不是简单多喂 Wikipedia，而是强调选取含专业实体的领域子语料，并设置更具挑战性的预训练目标。

CrossNER 的数据制作过程是：收集无标签 Wikipedia 数据，以 DBpedia Ontology 预标注，再结合两个已训练 NER 标注器和专家完成标注。课件随后介绍领域专属 NER 的 GNN 方法：用全局共指关系和局部依存关系显式连接实体提及，在 AnatEM 生物医学数据和 Mars 行星科学数据上，相对 BioBERT、SciBERT 分别报告约 0.88、0.62 个 F1 点的提升。

**TEBNER** 面向专业领域标注稀缺和字典覆盖不全的问题：

1. Dictionary Extender 从未标注语料中发现高质量短语，用实体类型模型筛选后扩展字典；
2. Entity Recognizer 同时利用边界检测与实体分类；
3. “Break or Tie” 从相邻 token 是否属于同一 mention 看局部边界，BIO 看句子级序列，Phrase Matching 提供全文级字典特征。

课件用“原字典覆盖约 50%”说明漏标问题，Dictionary Extender 先用 AutoPhrase 从未标注数据发现高质量短语，再由 entity typing model 判断类型。实验数据集包括 BC5CDR、NCBI-Disease 和 LaptopReview。它解决的是远程监督带来的**不完整、含噪标注**，并不意味着自动扩展出的词典无需人工或验证集检查。

**UMGF**（Unified Multimodal Graph Fusion）才是课件重点展开的多模态图融合模型；前文提到的 UMT 是它对比的强基线之一。UMGF 将文本词和检测到的视觉对象都建成图节点，加入模态内边与模态间边，堆叠图融合层交互语义，最后以注意力得到每个词的多模态表示并用 CRF 解码。目标视觉引导让相关对象区域参与消歧，而不是把整张图像的全局向量机械拼到每个词上；课件实验使用 Twitter-2015 与 Twitter-2017。

### 8.4 LLM 过滤—重排的完整流程

![SLM 过滤与 LLM 重排流程](/images/knowledge-graph/llm-filter-rerank.png)

*高置信样本直接采用小模型结果；低置信困难样本才交给 LLM 在 Top-$N$ 标签中选择。*

对输入 $x$，小模型输出各标签概率 $p(y\mid x)$，以最大概率作为置信度：

$$
c(x)=\max_y p(y\mid x).
$$

- 若 $c(x)\geqslant\tau$，直接采用 SLM 的 top-1 预测；
- 若 $c(x)<\tau$，保留 SLM 的 top-$N$ 候选，把开放式抽取改写成多项选择，再由 LLM 重排；
- ensemble 与 rerank 是两个互补模块，不能把集成带来的收益全部算到 LLM 上。

课件对重排实验的明确范围是三个任务、三个数据集和九种 $k$-shot 设置：NER 使用 FewNERD 的 $k=5,10,20$，RE 使用 TACREV 的 $k=20,50,100$，ED 使用 ACE05 的 $k=5,10,20$。无 ensemble 时幻灯片报告 rerank 平均提升 2.4 个 F1 点，加入 ensemble 后报告提升 2.1 个 F1 点。

### 8.5 LLM 结论只能在实验范围内成立

前文“LLM 不是好的少样本 IE 工具”“复杂 ED 中 SLM 总是更好”都应读成该论文实验结论，而不是对所有时代、模型和任务的定律。其证据边界是：

- LLM 主要是当时的 `code-davinci-002`、`text-davinci-003`，SLM 主要是 RoBERTa-large、T5-large；
- 总体比较覆盖 NER、RE、ED 三类任务的八个数据集，过滤—重排部分只在上面的三个数据集上验证；
- 1-shot、5-shot、10-shot 等判断依赖具体采样、提示、微调方法、标签空间和评测指标；
- 前文“慢 100 倍以上”的具体倍数无法从 PPT 文本抽取结果核实，因为推理耗时只保存在幻灯片图表中；在没有回看并读清原图数值前，只能保留“该实验中 LLM 时间和金钱开销更高”的定性结论，更不能外推到其他部署平台。

因此真正可迁移的结论不是“LLM 一定输给 SLM”，而是：**结构化抽取的标签空间明确时，先用可训练的小模型缩小候选和识别困难样本，再把 LLM 的推理能力花在少量疑难样本上，可能比让 LLM 包办全部样本更经济、更稳定。**
