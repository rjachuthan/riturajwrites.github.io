---
title: Slowly Changing Dimension (SCD)
description: A concept in data warehousing that refer to how data in a database changes over time while preserving historical information.
aliases:
  - Slowly Changing Dimension
  - SCD
tags:
  - 🌱seedling
  - data/engineering
draft: false
date: 2024-04-29
---

Slowly Changing Dimensions (SCD) are a crucial aspect of dimensional modeling in [[data warehouse]]-ing, addressing how to handle changes in attributes of dimension tables over time. There are several types of SCDs, including Type 1, Type 2, and Type 3.

- Type 1 SCD overwrites old data with new data, resulting in no historical record of changes.
- Type 2 SCD creates a new record with a new version of the changed data, preserving the history of changes and allowing for accurate historical reporting.
- Type 3 SCD maintains a limited history by storing both the old and new values of an attribute in the same record, typically using additional columns.

Choosing the appropriate SCD type depends on the specific business requirements for tracking changes and the importance of historical accuracy in reporting. Implementing SCDs effectively enables organizations to maintain reliable data for analysis and decision-making, ensuring that historical trends and changes in dimensions are accurately captured.