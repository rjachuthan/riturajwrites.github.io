---
title: "Spark: The Definitive Guide"
description: ""
aliases: 
tags:
  - books
  - dataengineering
  - literature-note
draft: false
date: 2024-04-28
status: in-progress
---

<center>
	<img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1518177736i/38467996.jpg" />
</center>

> [!INFO] Metadata
>  - **Full Title**: "Spark: The Definitive Guide: Big Data Processing Made Simple"
>  - **Author**: [[Bill Chambers]], [[Matei Zaharia]]
>  - **Goodreads URL**: [Spark: The Definitive Guide: Big Data Processing made Simple](https://www.goodreads.com/book/show/38467996-spark?ac=1&from_search=true&qid=YxSBVyJBud&rank=1)

# General Overview of [[big data|Big Data]] and Spark

## What is Apache Spark?

[[apache spark|Apache Spark]] stands as a unified computing engine alongside a suite of libraries designed for parallel data processing across computer clusters. It was made to deal with changes in how computers and data storage work. Back in 2005, computer hardware stopped getting much faster, so people needed new ways to handle lots of tasks at once. At the same time, storing data became cheaper, which meant there was more data to deal with than ever before.

## Apache Spark's Philosophy

- **Unified**: Spark offers a single platform for various big data tasks like loading data, querying with [[SQL]], [[Machine Learning]], and handling real-time data, making development easier and more efficient.
- **Computing Engine**: Spark focuses on computing tasks, working with different storage systems but not storing data permanently itself. It aims to minimise data movement and costs by computing where data resides.
- **Libraries**: Spark provides additional libraries for various tasks, expanding its capabilities and allowing users to work with different types of data and perform specific tasks more easily. You can find Spark's libraries listed [here](https://spark-packages.org/).

## Spark's Basic Architecture

To efficiently process large computations on substantial data volumes, clusters of computers pool their resources to act as a unified entity. [[apache spark|Apache Spark]] plays a pivotal role in orchestrating tasks across these clusters, ensuring effective task execution. Spark applications are submitted to a cluster manager, such as Spark's standalone manager, [[yet another resource negotiator|YARN]], or [[mesos|Mesos]], which allocates resources from the cluster for distributed task execution. This approach enables Spark to handle the intricacies of [[distributed computing]], optimizing resource utilization and facilitating scalable data processing.

### Spark Applications

Spark applications comprise a **driver process**, responsible for managing the application and distributing tasks across executors, and **executor processes**, which execute assigned tasks and report back to the driver. The driver is the central controller, while executors carry out parallel computing tasks. A cluster manager, like Spark standalone, [[yet another resource negotiator|YARN]], or [[mesos|Mesos]], oversees physical cluster machines and allocates resources to Spark applications, allowing multiple applications to run concurrently.

Additionally, Spark can operate in local mode, where the driver and executors run on a single machine, making it accessible for personal computer use without requiring a distributed system.

## Spark's Language API's

Spark's Language APIs enable users to write Spark code using various programming languages, with core concepts translated into Spark code for execution on clusters.
- [[scala|Scala]] is Spark's default language.
- [[java|Java]] is also supported for writing Spark code.
- [[python|Python]] offers similar constructs to Scala.
- Spark supports a subset of ANSI SQL 2003, facilitating easy usage for analysts and non-programmers.
- For [[r programming|R]] users, Spark offers two commonly used libraries: SparkR and sparklyr.

## Spark's High Level APIs

- **[[SparkSession]]**: The SparkSession serves as the *driver process* for controlling Spark Applications. It is responsible for executing user-defined manipulations across the cluster. Each Spark Application corresponds to a single SparkSession, ensuring a one-to-one relationship between them.
- **[[spark dataframe|Spark DataFrame]]**: A Spark DataFrame is a distributed collection of data organized into named columns.
- **Partitions**: Spark breaks up data into partitions to enable parallel processing by distributing them across the cluster. Each partition contains a collection of rows residing on a single physical machine within the cluster. Partitions in a DataFrame represent the physical distribution of data across machines during execution, allowing every executor to work on data chunks concurrently.
- **Transformations**: In Spark, core data structures are immutable, meaning they cannot be changed once created. To modify a DataFrame, you need to specify transformations, which are ==instructions for Spark to perform desired modifications==. There are two types of transformations: **narrow transformations**, where each input partition contributes to only one output partition, and **wide transformations**, where input partitions contribute to multiple output partitions, often resulting in a *shuffle* across the cluster. Narrow transformations enable Spark to perform an operations called *pipelining*, performing multiple operations in-memory. However, shuffles require Spark to write results to disk, making them more costly in terms of performance.
	- **[[lazy evaluation|Lazy Evaluation]]**: Lazy evaluation in Spark defers the execution of computation instructions until the last moment, where operations are expressed as transformations on the source data, building a plan that is compiled into a streamlined physical plan for efficient execution across the cluster.
- **Actions**: In Spark, transformations enable the construction of a logical transformation plan, while actions are used to trigger computation by instructing Spark to compute a result from the series of transformations.
- **[[spark ui|Spark UI]]**
- **[[directed acyclic graph|Directed Acyclic Graph]] of Transformations**