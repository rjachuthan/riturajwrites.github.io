---
title: Fact Table
description: "A fact table is a central table in a data warehouse that contains measurable, quantitative data, often used for analysis and reporting."
aliases:
  - Fact Table
tags:
  - 🌱seedling
  - data/modeling
draft: false
date: 2024-05-02
backlink:
---

A fact table is a key component of a [[data warehouse]] schema, designed to store quantitative data that represents business metrics and performance measures. It typically contains numerical values, such as sales figures or revenue, and is structured around dimensions provided by related dimension tables.

Fact tables often include measures (e.g., sales amount, transaction counts) and foreign keys linking to dimension tables, which provide context for the data. Fact tables are crucial for performing multidimensional analysis, aggregating data, and generating reports that support decision-making and business intelligence activities.