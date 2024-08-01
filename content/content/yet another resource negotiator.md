---
title: Yet Another Resource Negotiator (YARN)
description: "Yet Another Resource Negotiator (YARN) is a resource management and job scheduling framework used in Apache Hadoop for managing resources and running distributed applications on a cluster of machines. "
aliases:
  - YARN
  - Yet Another Resource Negotiator
tags:
  - 🌱seedling
  - data/engineering
draft: false
date: 2024-04-30
---

Yet Another Resource Negotiator (YARN) is a key component of the [[apache hadoop|Apache Hadoop]] ecosystem, introduced to address the limitations of the original MapReduce framework. YARN serves as a resource management layer that decouples resource management and job scheduling from the data processing framework, allowing multiple data processing engines to run on the same Hadoop cluster. It achieves this by managing resources (CPU, memory, and disk) and dynamically allocating them to various applications, such as MapReduce, Spark, and others. YARN consists of a ResourceManager, which oversees resource allocation across the cluster, and NodeManagers, which manage resources on individual nodes. This architecture improves cluster utilization, scalability, and flexibility, enabling organizations to run diverse workloads and applications more efficiently. By allowing multiple processing frameworks to share the same cluster resources, YARN enhances the overall productivity and capability of Hadoop environments.