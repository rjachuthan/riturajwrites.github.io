---
title: SparkSession
description: ""
aliases:
  - SparkSession
tags:
  - 🌱seedling
draft: false
date: 2024-05-02
status: done
backlink:
---

Spark Session is a unified interface in [[apache spark|Apache Spark]] that provides a convenient way to interact with Spark functionality. It serves as the entry point for Spark applications, encapsulating the configuration, runtime environment, and essential services required to execute Spark tasks.

Creating Spark Session:

```python
from pyspark.sql import SparkSession

spark = (
  SparkSession.builder()
  .appName("SparkSessionName")
  .config("spark.some.config.option", "some-value")
  .getOrCreate()
)
```
