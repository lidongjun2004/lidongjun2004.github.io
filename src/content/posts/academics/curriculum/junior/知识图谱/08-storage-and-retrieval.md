---
title: "知识存储与检索"
description: "三元组库 vs 图数据库、Neo4j 等代表系统、语义检索与 SPARQL / Cypher 查询"
date: 2026-06-25
tags: ["知识图谱", "课程笔记", "复习"]
---


> 对应 PPT：第8讲
> 重点：RDF 图 vs 属性图、SPARQL vs Cypher、4 种基于关系型数据库的存储方案。

---

## 1. 概述

### 1.1 2 个核心问题

- 如何**保存**知识图谱？
- 如何**查询 / 增加 / 修改 / 删除**图谱中的知识？

### 1.2 存储载体

| 规模 | 存储方式 | 例子 |
|---|---|---|
| **小规模** | 文件 | CSV、TXT |
| **大规模** | 数据库 | 关系型数据库 / 图数据库 |

---

## 2. 知识图谱数据模型（必背 2 个）

### 2.1 图的数学定义

$$
G = (V, E)
$$

- $V$ = 节点集合（Vertices）
- $E$ = 边集合（Edges）

### 2.2 RDF 图（来自语义网）

> **RDF 图** = 三元组 $(S, P, O)$ 的有限集。

- 每个三元组 = 1 个**陈述（Statement）**
- 多个陈述 = 1 个**描述（Description）**
- 三元组含义：
  - $S$ 与 $O$ 之间有 $P$ 关系
  - 或 $S$ 具有 $P$ 属性，属性值为 $O$

> **关键**：RDF **节点和边都没有属性**（要加属性必须新增一个节点——第 2 块讲过的缺陷）。

### 2.3 属性图（来自数据库）

**节点性质（4 条）**：
- 每个节点有**唯一 id**
- 每个节点有若干**出边 + 入边**
- 每个节点有若干**属性**（键值对）
- 每个节点有若干**标签**（类型）

**边性质（5 条）**：
- 每条边有**唯一 id**
- 每条边有**头节点 + 尾节点**
- 每条边有**标签**（关系类型）
- 每条边有若干**属性**（键值对）

> 速记：节点 4 条 + 边 5 条 = 属性图完整定义。

### 2.4 RDF 图 vs 属性图（期末必考）

| 维度 | RDF 图 | 属性图 |
|---|---|---|
| 起源 | 语义网 | 数据库 |
| 边/点属性 | ❌ 无（要加必须新增节点） | ✅ 原生支持 |
| 类型标注 | 类（Class）+ 属性（Property） | 标签（Label）+ 键值对 |
| Schema 严格性 | OWL 严格，RDF 自由 | 灵活 |
| 推理支持 | ✅ 强（OWL） | ❌ 弱 |
| 工业落地 | 学术 / 政府 / 出版业 | **主流**（Neo4j 用户多） |
| 查询语言 | **SPARQL**（W3C 标准） | **Cypher**（Neo4j） |
| 数据规模 | 万亿级（专用三元组库） | 千亿级（分布式） |

---

## 3. 知识图谱查询语言

### 3.1 SPARQL（RDF 标准查询）

> **SPARQL** = **S**PARQL **P**rotocol **a**nd **R**DF **Q**uery **L**anguage
> W3C 制定的 RDF 图数据**标准查询语言**；**声明式**查询语言。

**返回形式**：XML、JSON、CSV、TSV。

#### SPARQL 核心语法（必背 7 元素）

| 元素 | 作用 | 例子 |
|---|---|---|
| **URI** | 资源唯一标识 | `<http://example.com/ontology#>` |
| **PREFIX** | 定义前缀 | `PREFIX abc: <http://...>` |
| **变量** | `?` 或 `$` 开头 | `?capital`、`$country` |
| **SELECT** | 指定返回变量 | `SELECT ?capital ?country` |
| **WHERE** | 指定查询条件（三元组模式） | `WHERE { ?x abc:cityname ?capital }` |
| **FILTER** | 过滤条件 | `FILTER (?year < 2000)` |
| **OPTIONAL** | 可选匹配 | `OPTIONAL { ?x abc:phone ?phone }` |

#### 常用前缀（W3C 定义）

| 前缀 | 命名空间 | 用途 |
|---|---|---|
| `rdf:` | RDF 核心 | type, Property, Statement |
| `rdfs:` | RDF Schema | Class, subClassOf, label |
| `owl:` | Web Ontology | Class, ObjectProperty |
| `xsd:` | XML Schema Datatype | string, int, date |
| `foaf:` | Friend of a Friend | name, knows |
| `skos:` | Simple Knowledge Organization | Concept, prefLabel |

#### SPARQL 三元组模式（4 种用法）

| 主语 | 谓语 | 宾语 | 作用 |
|---|---|---|---|
| `abc:city_cairo` | `abc:cityname` | `"Cairo"` | 存储内容 |
| `abc:city_cairo` | `abc:cityname` | `?name` | 查城市名称 |
| `?city` | `abc:cityname` | `"Cairo"` | 按名字查城市 |
| `?x` | `abc:cityname` | `?capital` | 查所有城市及其名称 |

> **速记**：哪个位置换成 `?x`，就在查什么。

#### SPARQL 例子：非洲国家的首都

```sparql
PREFIX abc: <http://example.com/exampleOntology#>
SELECT ?capital ?country
WHERE {
  ?country abc:locatedIn "Africa" .
  ?country abc:hasCapital ?capital .
}
```

### 3.2 Cypher（Neo4j 属性图查询）

> **Cypher** 最初由 Neo4j 实现，**声明式**属性图查询语言。
> 实现系统：SAP HANA Graph、Redis Graph、AgensGraph、Memgraph。

#### Cypher 基本语法

**节点**：
```cypher
(variable:Label {propertyKey: 'propertyValue'})
// ()
// :Label
// { propertykey: 'value' }
```

**关系**：
```cypher
(node1:LabelA)-[rel1:RELATIONSHIP_TYPE]->(node2:LabelB)
// -[]-> 有向
// <-[]- 反向
// -[]- 无向
```

#### Cypher 常用查询模式

| 模式 | 例子 |
|---|---|
| Match all nodes | `MATCH (n) RETURN n` |
| 按 label 查 | `MATCH (a:Person) RETURN a` |
| 按 label + 属性查 | `MATCH (a:Person {name: "Théo Gauchoux"}) RETURN a` |
| 按关系查 | `MATCH (a)-[:KNOWS]-(b) RETURN a, b` |
| 带 WHERE | `MATCH (p:Person {name:"Alice"})-[s:LIVES_IN]->(city:City) WHERE s.since = 2015 RETURN p, city` |

#### Cypher 经典例题

> 汤姆汉克斯 2000 年之前演过的电影

```cypher
MATCH (actor:Person)-[:ACTED_IN]->(movie:Movie)
WHERE actor.name = "Tom Hanks" AND movie.released < 2000
RETURN movie, actor
```

> 速记：**MATCH-WHERE-RETURN** 3 步走。

---

## 4. 常见知识图谱存储方法（4 大类）

### 4.1 三元组表（最简单）

- 每条记录 = 1 个三元组 `(Subject, Predicate, Object)`
- **最简单、最直接**
- **缺点**：复杂查询需要**大量自连接（self-join）**，性能低下

**复杂度**：
- 5 跳路径 → 5 个 JOIN
- 图模式匹配 → 指数级组合
- 一般：$O(N^k)$（$N$ = 表大小，$k$ = JOIN 次数）

**例子**："找某人朋友所在公司的位置"
```sql
SELECT t3.o
FROM Triple t1
JOIN Triple t2 ON t1.o = t2.s
JOIN Triple t3 ON t2.o = t3.s
WHERE t1.s = 'A' AND t1.p = 'friendOf'
  AND t2.p = 'worksAt' AND t3.p = 'locatedIn';
```

### 4.2 水平表

- 每一行 = 1 个主语 + **全部**谓语和宾语
- **缺点**：不同主语谓语数量不同 → 列数 = **全部谓语数量总和** → 表结构改造成本高

### 4.3 属性表

- 水平表的细化：**同类主语分到一张表**
- **缺点**：表类型过多性能低；不能彻底解决列数问题

### 4.4 垂直划分

- 以**谓语**为划分维度
- 为每种谓语建立 1 张表
- **缺点**：表类型过多，复杂查询开销大

### 4.5 4 种方法对比

| 方法 | 优点 | 缺点 | 适用 |
|---|---|---|---|
| **三元组表** | 最简单、灵活 | **自连接性能差** | 小规模 / 简单查询 |
| **水平表** | 查询快 | 列数固定、改造难 | 谓语稳定的场景 |
| **属性表** | 比水平表更细 | 表多、复杂查询差 | 同类主语多 |
| **垂直划分** | 谓语查询快 | 复杂查询慢 | 简单分析场景 |

> 实际工业界更多用**专门的 RDF 三元组库**或**图数据库**（见下），而不是关系型数据库。

---

## 5. 面向 RDF 的三元组数据库

### 5.1 Eclipse RDF4J（开源标准）

- 开源 RDF 三元组数据库
- 支持 **SPARQL 1.1**
- 模块化设计，**GraphDB** 上层标准框架以 RDF4J 为标准

### 5.2 AllegroGraph（商业强大）

- 支持 SPARQL 1.1
- **推理机很全**：
  - RDFS++ 推理机
  - OWL2 RL 推理机
  - **Prolog 规则推理系统**
  - **时空推理机制**
  - 社会网络分析库
  - 可视化 RDF 图浏览器

---

## 6. 基于 Neo4j 的知识图谱存储与检索

### 6.1 Neo4j 概述

| 维度 | 内容 |
|---|---|
| 模型 | **属性图** |
| 社区版 | **单机**（免费） |
| 企业版 | 集群 / 高可用（付费） |
| 查询语言 | **Cypher** |
| 安装 | Java + Neo4j 安装包 |
| 在线 | **Neo4j Aura**（云服务，免费版） |

### 6.2 安装步骤

```
① 安装 Java 虚拟机
② 下载 Neo4j（https://neo4j.com/download/）
③ 设置环境变量：Path 加 Neo4j bin 路径
④ 管理员身份 CMD 运行：neo4j.bat console
```

---

## 7. 本章脑图

```
知识存储与检索
├── 存储载体
│   ├── 小规模：CSV / TXT
│   └── 大规模：DB（关系型 / 图）
│
├── 2 大数据模型
│   ├── RDF 图（三元组，无属性）
│   └── 属性图（节点+边+属性，4+5 性质）
│
├── 2 大查询语言
│   ├── SPARQL（RDF 标准）
│   │   ├── PREFIX / URI / 变量
│   │   ├── SELECT / WHERE / FILTER
│   │   └── OPTIONAL
│   └── Cypher（Neo4j）
│       ├── MATCH-WHERE-RETURN
│       └── 节点()-[:关系]->() 
│
├── 4 大 RDB 存储方案
│   ├── 三元组表（自连接性能差）
│   ├── 水平表（列数固定）
│   ├── 属性表（同类主语一表）
│   └── 垂直划分（按谓语分）
│
└── 专用存储
    ├── RDF4J（开源标准）
    ├── AllegroGraph（商业强大）
    └── Neo4j（属性图主流）
```
