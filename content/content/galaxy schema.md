---
title: Galaxy Schema
description: ""
aliases:
  - Galaxy Schema
tags:
  - 🌱seedling
draft: false
date: 2024-05-02
status: not-started
backlink:
---

A Galaxy Schema is a hybrid [[data modeling]] technique that combines elements of both [[star schema]] and [[snowflake schema]]. In a Galaxy Schema, some [[dimension table]]s are denormalized like in a Star Schema, while others are normalized like in a Snowflake Schema, resulting in a more flexible and adaptable schema design.

In a Galaxy Schema, dimension tables are organized into multiple levels of hierarchy, where some dimensions may be highly denormalized (reduced to a single table) while others may be more normalized (spread across multiple related tables). This allows for a balance between query performance and data integrity, catering to different analytical requirements within the same data warehouse environment.

The term "Galaxy Schema" emphasizes the diverse and interconnected nature of the schema, likening it to the complexity and expansiveness of a galaxy, where various components interact and coexist in a dynamic manner. This schema design is particularly useful in scenarios where different parts of the data model require different levels of normalization for optimal performance and maintainability.
