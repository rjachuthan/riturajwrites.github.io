---
title: Snowflake Schema
description: "A snowflake schema is a type of database schema used in data warehousing where a centralized fact table is connected to multiple dimension tables in a hierarchical manner. "
aliases:
  - Snowflake Schema
tags:
  - 🌱seedling
draft: false
date: 2024-04-29
status: not-started
---

A Snowflake Schema is a type of [[data modeling]] technique used in [[data warehouse]] where the [[dimension table]]s are normalized into multiple related tables, forming a shape resembling a snowflake. Unlike the [[star schema]], where dimension tables are denormalized, in the Snowflake Schema, dimension tables are normalized to eliminate redundancy and improve data integrity. This schema design leads to more efficient use of storage space and allows for easier maintenance of the database. However, it can result in more complex queries due to the need for joins across multiple tables.

![[img_20240502_snowflake schema.png]]