---
title: Database Internals
description: ""
aliases:
tags:
  - 📙books
  - literature-note
draft: true
date: 2024-06-05
backlink:
  - "[[database|Database]]"
---

> [!Infobox] Metadata
> <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677429379i/44647144.jpg"></img>
>
> | **Full Title** | Database Internals |
> | --- | --- |
> | Author | Alex Petrov |
> | Goodreads URL | [Goodreads Link](https://www.goodreads.com/book/show/44647144-database-internals) |

# Part 1 - Storage Engines

- Primary role of a [[database management system|Database Management System]] is to reliably store data and make it available to users. It should centralize data storage, enhance application logic by abstracting infrastructure concerns.
- [[database|Database]]s are modular components and includes:
	- **Transport Layer** accepting requests
	- **Query Processor** determining the most efficient way to run queries
	- **Execution Engine** carrying out the operations
	- **Storage Engine**: Storage engines manage data storage, retrieval, and manipulation, acting as the foundational layer for database management systems.

## 1. Introduction and Overview

- **[[oltp|Online Transaction Processing Database]]**: These handle a large number of user-facing requests and transactions. Queries are often predefined and short-lived.
- **[[olap|Online Analytical Processing Database]]**: These handle complex aggregations. OLAP databases are often used for analytics and data warehousing, and are capable of handling complex, long-running ad-hoc queries.
- [[htap|Hybrid Transactional and Analytical Processing]] (HTAP): These databases combine properties of both [[oltp|OLTP]] and [[olap|OLAP]] stores.

### DBMS Architecture

- The design of [[database management system]] is highly customized and lacks a universal blueprint.
	- Some sources have tried to describe the architecture:
		- Research Paper: [Architecture of Database System](https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf)
		- Book: [Transactional Information Systems: Theory, Algorithms, and the Practice of Concurrency Control and Recovery (The Morgan Kaufmann Series in Data Management Systems)](https://www.amazon.com/Transactional-Information-Systems-Algorithms-Concurrency/dp/1558605088)
		- Book: [Fundamentals of Database Systems](https://www.amazon.in/Fundamentals-Database-System-Elmasri-Ramez/dp/933258270X)
		- Book: [Database Systems: The Complete Book](https://www.amazon.in/Database-Systems-Complete-Hector-Garcia-Molina/dp/0131873253)
	- Below architecture demonstrates some of the common theme in these representations:

![[img_database_internals_db_arch.svg|center]]

- **Query Processing**
  - **Transport Subsystem**
    - Receives and hands over queries to the query processor.
    - Responsible for communication within the database cluster.
  - **Query Processor**
    - Parses, interprets, and validates queries.
    - Performs access control checks.
  - **Query Optimizer**
    - Eliminates impossible and redundant query parts.
    - Finds the most efficient [[execution plan]] based on internal statistics and data placement.
    - Handles relational operations and optimizations like index ordering and choosing access methods.
  - **Execution Engine**
    - Executes the chosen execution plan.
    - Manages results from local and remote operations, including data replication.

- **Storage Engine Components**
	- **Transaction Manager**
		- Schedules transactions.
		- Ensures logical consistency.
	- **Lock Manager**
		- Manages locks on database objects.
		- Ensures physical data integrity.
	- **Access Methods** (storage structures)
		- Manages data access and organization on disk.
		- Includes structures like [[B-Tree]]s, and [[LSM Tree]]s.
	- **Buffer Manager**
		- Caches data pages in memory.
	- **Recovery Manager**
		- Maintains operation logs.
		- Restores system state after failures.
- Transaction and Lock Managers are responsible for **Concurrency Control**
	- Ensures logical and physical data integrity.
	- Optimizes concurrent operations.

### Memory-Versus Disk-Based DBMS

- **Types of Storage Systems**
	- **In-Memory DBMS**
		- Stores data primarily in memory, uses disk for recovery and logging.
		- RAM is the main storage medium, offering faster access times.
		- [ ] Find example of this type of database
	- **Disk-Based DBMS**
		- Holds most data on disk, uses memory for caching and temporary storage.
		- More reliant on persistent storage devices like SSDs and HDDs.
		- [ ] Find example of this type of database
- **Memory vs. Disk Access**
	- Memory access is significantly faster than disk access.
	- Decreasing memory prices make in-memory storage more feasible, though RAM remains more expensive than persistent storage.
- **Differences in Design and Optimization**
	- **In-Memory DBMS**
		- Optimized for performance, lower access costs, and access granularity.
		- Simpler programming due to OS abstracting memory management.
	- **Disk-Based DBMS**
		- Requires manual management of data references, serialization, and fragmentation.
		- More complex due to varied data structures and organization techniques.
- **Challenges and Limitations**
	- **In-Memory DBMS**
		- RAM volatility poses durability issues (e.g., data loss due to crashes or power outages).
		- Solutions like uninterrupted power supplies and battery-backed RAM add complexity and cost.
	- **Disk-Based DBMS**
		- Easier to maintain with lower costs compared to in-memory solutions.
- **Future Trends**
	- **Non-Volatile Memory (NVM)**
		- Promises to reduce or eliminate asymmetry between read and write latencies.
		- Enhances performance with byte-addressable access.
		- Potential to change the balance between in-memory and disk-based systems as NVM technology evolves.
		- [ ] What is the state as of 2024? Is there anything better than NVM?
- **Summarizing Memory-Versus Disk-Based DBMS**
  - In-memory databases offer superior performance due to faster access times, but are limited by RAM volatility and cost.
  - Disk-based databases, while slower, are easier to maintain and more cost-effective.
  - The rise of Non-Volatile Memory (NVM) could significantly impact the future of database storage, potentially bridging the gap between memory and disk storage.

#### Durability in Memory-Based Stores

### Column-Versus Row-Oriented DBMS

#### Row-Oriented Data Layout

#### Column-Oriented Data Layout

#### Distinction and Optimizations

#### Wide Column Stores

### Data Files and Index Files

#### Data Files

#### Index Files

#### Primary Index as an Indirection

### Buffering, Immutability and Ordering

## 2. B-Trees Basics

## 3. File Formats

## 4. Implementing B-Trees

## 5. Transaction Processing and Recovery

## 6. B-Tree Variants

## 7. Log-Structured Storage

## Part 1 Conclusion

# Part 2 - Distributed Systems

## 8. Introduction and Overview

## 9. Failure Detection

## 10. Leader Election

## 11. Replication and Consistency

## 12.Anti-Entropy And Dissemination

## 13. Distributed Transactions

## 14. Consensus

# Part 2 Conclusion
