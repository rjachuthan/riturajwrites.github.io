---
title: Normalization
description: A database design technique that organizes data to reduce redundancy and improve data integrity by dividing a database into multiple related tables.
aliases:
  - Normalization
tags:
  - 🌱seedling
  - data/modeling
draft: false
date: 2024-04-29
---

Normalization is a systematic approach used in [[database]] design to eliminate redundancy and ensure data integrity. The process involves organizing data into separate tables based on logical relationships, which helps minimize data duplication and maintains consistency across the [[database]]. Normalization typically follows several stages, known as normal forms, each with specific rules that dictate how to structure the data.

- The first normal form (1NF) addresses the elimination of repeating groups
- The second normal form (2NF) requires that all non-key attributes depend on the entire primary key
- The third normal form (3NF) mandates that non-key attributes are not dependent on other non-key attributes.

By normalizing a database, organizations can improve data quality, simplify maintenance, and enhance query performance, while ensuring that updates and deletions do not lead to anomalies or data inconsistencies.