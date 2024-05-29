---
title: SparkSession
description: A Spark session is the entry point to programming with Apache Spark, allowing users to create DataFrame and Dataset objects, manage Spark configurations, and access Spark's capabilities for distributed data processing.
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
