---
title: "腾讯广告 · 后台开发"
description: "二面挂"
date: 2026-10-09
tags: []
---

## 一面（2026.10.9）

1. 实习经历

   - 讲解 Agent 的数据链路

   - 怎么处理请求失败与超时

   - 如果长程任务中间断掉，有什么优雅的恢复或者重试方案

   - 如果要让你设计一个专门用来企业检索文章、聊天记录、知识库的 Agent，你会怎么设计

2. 基础知识

   - 你平时写啥语言？用啥框架？

     - Go 和 Python，好像叫 hertz

3. 算法题

   - O(1)空间复杂度，合并两个有序数组

     - 写了个 O(M+N)，很简单

       > **我的回答**
       >
       > *#include<bits/stdc++.h>*
       > *using namespace **std**;*
       > *const int N = 100005;*
       > *int a[N],b[N];*
       > *int n,m;*
       > *int **main**()*
       > *{*
       > *cin>>n>>m;*
       > *for(int i=0;i<n;i++)cin>>a[i];*
       > *for(int i=0;i<m;i++)cin>>b[i];*
       > *int i=n-1,j=m-1,k=n+m-1;*
       > *while(j>=0)*
       > *{*
       > *if(i>=0&&a[i]>b[j])a[k--]=a[i--];*
       > *else a[k--]=b[j--];*
       > *}*
       > *for(int i=0;i<n+m;i++)cout<<a[i]<<" ";*
       > *return 0;*
       > *}*

## 二面（2020.10.15）

1. 实习经历

2. 科研经历

3. 基础

   - c++中 mlock 是怎么实现的

   - 万能头是写在哪个编译器里的

   - 数据库、关系型数据库、kafka、kv 类型存储

   - 回归和分类都在什么时候使用

   - boosting 是什么

   - 10 亿个 embedding 如何和 10 个向量找到最接近的

4. 算法题

   - 输入一颗二叉树，输出每一层最右侧的节点
