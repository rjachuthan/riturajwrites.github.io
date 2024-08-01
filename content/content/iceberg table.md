---
title: Iceberg Table
description: Iceberg tables are a high-performance, open table format for large analytic datasets that support complex data management and enable ACID transactions.
aliases:
  - Iceberg Table
tags:
  - 🌱seedling
  - data/engineering
draft: false
date: 2024-04-29
---

Iceberg tables are a type of table format used in distributed data processing systems, designed to efficiently manage large-scale data sets with support for atomic transactions, schema evolution, and time-travel queries.

Iceberg tables are designed to handle large-scale analytic datasets in a way that is reliable, efficient, and flexible. Developed by Netflix and now an Apache project, Iceberg tables provide a table format that supports schema evolution, partitioning, and rich metadata management, making them ideal for complex and evolving data environments. One of the key advantages of Iceberg tables is their support for ACID (Atomicity, Consistency, Isolation, Durability) transactions, which ensures data integrity and reliability during concurrent operations. Iceberg tables optimize query performance by utilizing advanced techniques such as hidden partitioning and metadata caching. They are compatible with various compute engines like Apache Spark, Trino, and Flink, making them a versatile choice for modern data lakes.