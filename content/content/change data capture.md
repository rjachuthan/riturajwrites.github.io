---
title: Change Data Capture
description: Change Data Capture (CDC) is a method used to automatically track and capture changes in data in a database, enabling real-time data integration and analysis.
aliases:
  - Change Data Capture
tags:
- 🌱seedling
- data/engineering
- data/warehouse
draft: false
date: 2024-04-29
---

Change Data Capture (CDC) involves tracking and capturing changes (such as inserts, updates, and deletes) in a database so that these changes can be reflected in other systems or [[data warehouse]]. This technique helps ensure that data across different systems remains consistent and synchronized without the need for full data refreshes. CDC can be implemented through database triggers, log-based methods, or specialized tools. It is widely used in data integration, real-time analytics, and [[etl|ETL]] (Extract, Transform, Load) processes to efficiently propagate updates and maintain data integrity across [[distributed computing|Distributed Systems]]. By capturing only the changes rather than reprocessing entire datasets, CDC helps optimize data processing and reduce overhead.