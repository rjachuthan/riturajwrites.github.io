---
title: Kappa Architecture
description: A data processing architecture designed for real-time streaming data, where all data is treated as a stream and processed through a single real-time layer.
aliases:
  - Kappa Architecture
tags:
  - 🌱seedling
  - architecture
draft: false
date: 2024-04-29
---

The Kappa architecture is a stream processing architecture that simplifies data processing by treating both real-time and batch processing as a special case of [[stream processing]].

It consists of a single data flow, where all data is ingested as a stream of events, processed in real-time using a stream processing engine, and optionally stored in a durable data store for batch processing or historical analysis. This architecture simplifies system design and maintenance by eliminating the need for separate batch and stream processing systems, while still allowing for scalable and fault-tolerant data processing.