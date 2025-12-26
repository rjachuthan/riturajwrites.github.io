---
title: CTEs In PySpark Are Not Effective
description: Understanding when CTEs hurt performance in distributed SQL engines
  and what to use instead
aliases:
  - CTEs In PySpark Are Not Effective
tags:
  - pyspark
  - sql-optimization
  - performance
  - databricks
date: "2025-12-25"
backlink:
    - "[[databricks]]"
    - "[[pyspark]]"
    - "[[sql]]"
    - "[[data lake]]"
    - "[[performance tuning]]"
---

**Source:** [Why I Stopped Using CTEs Everywhere in SQL](https://medium.com/@namrathashenoy01/why-i-stopped-using-ctes-everywhere-in-sql-45c67be31396) by Namratha Shenoy

## The Problem with CTEs

[[common table expression|CTEs]] (Common Table Expressions) appear elegant and modular, but in most SQL engines including Spark SQL, they create significant performance issues because **they are not physically materialized**. They're only logical aliases, meaning the query inside a CTE is **recomputed every time it's referenced**.

### Why This Hurts Performance

When you reference the same CTE multiple times in a query, Spark re-runs that subquery repeatedly, leading to:
- Increased computation overhead
- Redundant data scanning
- Higher shuffle and I/O costs

Example of problematic pattern:
```sql
WITH active_users AS (
  SELECT user_id
  FROM events
  WHERE event_type = 'login'
)
SELECT COUNT(*) FROM active_users;           -- computed once
SELECT AVG(session_time) FROM active_users;  -- computed again!
```

The `active_users` CTE executes twice - once for each reference.

## Better Alternatives

### 1. Temporary Views - Logical Breakpoints

Temp views provide the same modularity as CTEs but are reusable across multiple queries in the same session:

```sql
CREATE OR REPLACE TEMP VIEW active_users AS
SELECT user_id
FROM events
WHERE event_type = 'login';
```

**Characteristics:**
- Logical only (not physically stored)
- Reusable across queries in same Spark session
- Perfect for breaking large transformations into steps
- Not cached unless explicitly cached

### 2. Temporary Tables - Physical Snapshots

For intermediate results that need to persist physically:

```sql
CREATE OR REPLACE TEMPORARY TABLE active_users AS
SELECT user_id
FROM events
WHERE event_type = 'login';
```

**Use when you need:**
- Materialized snapshot to avoid recomputation
- Ability to inspect intermediate data
- Debugging or comparing runs

### 3. Cache Tables - For High Reuse

When using the same data repeatedly:

```sql
CACHE TABLE active_users;
```

Spark stores it in memory (or disk), making subsequent queries significantly faster by skipping recomputation entirely.

## Handling Data Changes

**Important consideration:** If underlying data changes frequently, cached views hold a snapshot and won't update automatically, leading to stale data.

**Solutions:**
1. Manual refresh:
```sql
UNCACHE TABLE active_users;
CACHE TABLE active_users;
```

2. Lazy cache with refresh:
```sql
CACHE LAZY TABLE active_users;
REFRESH TABLE active_users;
```

3. Don't cache if data changes too frequently - Spark's optimizer handles recomputation efficiently

## Decision Matrix

| Use Case | Recommended Approach | Reason |
|----------|---------------------|--------|
| Logic clarity & readability | CTEs | Simple, single-use transformations |
| Reusable intermediate layers | Temp Views | Multiple references, same session |
| Physical inspection needed | Temp Tables | Debugging, materialized results |
| Stable, frequently accessed data | Cache Tables | Performance optimization |
| Frequently changing data | No caching | Avoid stale data issues |

## Key Takeaway

CTEs are excellent for readability but not for performance in distributed systems. Understanding what gets recomputed, cached, or materialized can save hours of processing time in production pipelines.

**Rule of thumb:** Use CTEs for logic clarity, not for performance optimization.
