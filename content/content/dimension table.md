---
title: Dimension Table
description: "A dimension table is a type of table in a data warehouse that stores descriptive attributes related to dimensions, providing context for data in fact tables."
aliases:
  - Dimension Table
tags:
  - 🌱seedling
  - data/warehouse
draft: false
date: 2024-05-02
backlink:
---

In a [[data warehouse]], a dimension table contains descriptive, categorical information that provides context to the quantitative data stored in fact tables. Dimension tables are used to organize data into various categories such as time, location, or product attributes.

For example, a "Customer" dimension table might include attributes like customer ID, name, address, and phone number. These attributes help in analyzing data from different perspectives and generating meaningful reports. Dimension tables are often used in conjunction with fact tables in a star or snowflake schema to facilitate complex queries and business intelligence operations by enriching the analysis with contextual information.