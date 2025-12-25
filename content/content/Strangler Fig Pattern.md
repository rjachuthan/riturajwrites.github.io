---
title: Strangler Fig Pattern
description: A software architectural strategy used for incrementally modernizing [[Legacy Systems]]
aliases: [Strangler Fig Pattern]
tags: [🌱seedling]
backlink:
  - "[[data engineering]]"
  - "[[Design Pattern]]"
---

## **Strangler Fig Pattern Overview**

- The pattern is an Incremental Process for replacing specific parts of a legacy application with new, modern services and systems. It is named after the strangler fig tree, which grows on a host tree and eventually takes its place.

![[Strangler Fig Pattern.png]]

- **Problem Solved by Strangler Fig Pattern**: It addresses the challenge of modernizing Complex and Obsolete Legacy Systems while mitigating the extreme risk of [[Big Bang Replacement]] (replacing the entire system at once).
- **Key Component: The Fascade or Proxy**: A key element is a proxy, or **[[Fascade]]**, which acts as an intelligent router or Traffic Police between the [[Client Application]], the [[Legacy System]], and the [[New System]].

## **[[The Migration Process]]**

1. **Initial Routing**: The [[Fascade]] starts by directing all client requests to the [[Legacy System]].
2. **Incremental Replacement**: As the team develops a new feature or functionality in the **[[Modern System]]**, the [[Fascade]] is updated to redirect only the requests related to that new functionality away from the legacy system.
3. **Iterative Approach**: In each cycle, new functionality is implemented and the facade is updated, gradually reducing the responsibilities of the [[Legacy System]] and increasing the scope of the new system.
4. **Client Transparency**: Throughout the process, the client applications continue to interact with the same API endpoint provided by the [[Fascade]], remaining unaware that a significant migration is taking place behind the scenes.
5. **[[Decommissioning the Legacy System]]**: When all functionalities are successfully migrated, the [[Legacy System]] is completely **Decommissioned or Retired**. The facade then routes all traffic to the new system. It may eventually be removed, allowing clients to speak directly to the new system.

## **[[Challenges, Pitfalls, and Considerations]]**

- **Data Consistency and Shared Resources**: A major challenge is managing **[[Shared Data Stores]]** that both systems need to access during the transition, ensuring [[Data Consistency]] and preventing conflicts.
- **[[Future-Proofing]]**: The [[New System]] should be designed with a **[[Modular Design]]** and clear boundaries to allow for future incremental replacements.
- **Fascade Performance and Scalability**: The [[Fascade]] itself is a critical component and must be designed for **[[High Availability and Scalability]]** to avoid becoming a **[[Single Point of Failure]]** or a **[[Bottleneck]]**. It can sometimes act as an **[[Adapter]]** to translate old client requests for the new system.

## **[[Use Cases and Alignment with Best Practices]]**

- **When to Use**: It is ideal for **Gradually Migrating Large or Highly Complex Backend Applications** where the original system must remain running for an extended period during the migration.
- **When to Avoid**: Do not use the pattern if you **Cannot Intercept Backend Requests** to implement the facade, if the system is **Too Simple for Big Bang Replacement**, or if **[[Rapid Decommissioning]]** is required by the business.
- **Alignment with Well-Architected Framework (e.g., Azure)**:
    - **[[Reliability]] Pillar**: The incremental nature reduces the risk of systemic failure, making recovery easier.
    - **[[Cost Optimization]] Pillar**: Allows organizations to maximize investment in the existing system while prioritizing the replacement of high [[Return On Investment (ROI)]] components first.
    - **[[Operational Excellence]] Pillar**: Promotes **[[Continuous Improvement]]** with safer, more manageable, and predictable small changes.

---

**Video URL:** [https://www.youtube.com/watch?v=dzQgLJ558Mw](https://www.youtube.com/watch?v=dzQgLJ558Mw)
