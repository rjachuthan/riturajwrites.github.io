---
title: Build Reliable Systems With Chaos Engineering
description: "This is a summary of a talk in the MLOps Community by Benjamin Whips, CEO of Steadybit, where he discusses the importance of chaos engineering in ensuring the reliability and resilience of complex systems."
aliases:
  - Build Reliable Systems With Chaos Engineering
tags:
  - 🌿budding
  - 🗨️talk
draft: false
date: 2024-06-02
backlink:
  - "[[chaos engineering|Chaos Engineering]]"
---

> [!TLDR] **Chaos Engineering** is a proactive approach to improving system reliability by intentionally injecting failures and disruptions, and it should be integrated into the CI/CD pipeline for automated reliability testing after each deployment.

<div style="text-align:center;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/hUXVTLfkSUU?si=V7we5Y6kVcnXDSmV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

In this video on [MLOps Community](https://mlops.community/), Benjamin Whips, co-founder and CEO of Steadybit, discusses the importance of [[chaos engineering]] in ensuring the reliability and resilience of complex systems. [[chaos engineering|Chaos Engineering]] involves intentionally injecting failures and disruptions into a system to understand how it reacts and identify areas for improvement. Benjamin emphasizes the need for organizations to proactively test their systems under various conditions to prevent outages and ensure customer satisfaction. He also highlights the role of [[observability]] in monitoring system behavior during chaos experiments. Benjamin shares that [[chaos engineering]] can be incorporated into the CI/CD pipeline as an automated test to continuously validate system reliability.

> [!QUOTE] "Hope is not a strategy. You need to be able to understand what the impact is if there is a 10-minute outage or one hour outage."

## Ideas from the Talk

- [[chaos engineering|Chaos Engineering]] allows organizations to proactively test their systems under various conditions to identify weaknesses and improve reliability.
  - The goal of [[chaos engineering]] is to create a proactive failure culture by intentionally injecting failures and disruptions such that the teams learn from incidents and continuously improve system resilience.
  - [[chaos engineering|Chaos Engineering]] requires a shift in mindset and culture, with a focus on learning from failures and continuously improving system resilience.
  - [[chaos engineering|Chaos Engineering]] is not limited to infrastructure or hardware components; it can be applied at different levels, including network, platform, and application layers.

> [!QUOTE] The real need behind Chaos Engineering is that people are building very complex and [[distributed computing|Distributed Systems]], and it's very hard to understand how this system works and how you should react under specific conditions.

- Things to take care:
  - [[chaos engineering|Chaos Engineering]] experiments should be repeatable and executed under the same conditions to ensure accurate results and facilitate continuous improvement.
  - Incorporating [[chaos engineering]] into the CI/CD pipeline allows for automated testing of system reliability after each deployment.
  - _[[chaos engineering|Chaos Engineering]] is not about finding security vulnerabilities but focuses on improving system reliability and availability._
  - The value of [[chaos engineering]] lies in its ability to prevent downtime, maintain customer trust, and avoid revenue loss, by detecting bottlenecks beforehand.
  - [[chaos engineering|Chaos Engineering]] can be particularly valuable for startups that may not have the resources to invest heavily in reliability engineering.
- [[observability|Observability]] tools play a crucial role in [[chaos engineering]] by providing insights into system behavior and helping distinguish between intentional chaos and actual failures.

## Habits

1. Prioritize reliability and resilience in system design and development.
2. Embrace a failure culture where incidents are seen as learning opportunities.
3. Continuously test and improve system reliability through chaos engineering experiments.
4. Incorporate [[chaos engineering]] into the CI/CD pipeline for automated reliability testing.

## References

1. Steadybit - [[chaos engineering|Chaos Engineering]] platform
2. Chaos Monkey - Tool for chaos engineering in Spring Boot applications
3. Kubernetes - Platform commonly used for running chaos experiments
4. Kafka - Messaging system used for chaos experiments related to message handling
5. Redis - In-memory data structure store used for chaos experiments related to data distribution

## Recommendations:

1. Start implementing [[chaos engineering]] to proactively test system reliability and identify areas for improvement.
2. Prioritize [[observability]] and monitoring tools to gain insights into system behavior during chaos experiments.
3. Foster a failure culture that encourages learning from incidents and continuously improving system resilience.
4. Incorporate chaos engineering into the CI/CD pipeline to automate reliability testing after each deployment.
5. Understand the impact of system failures on customer satisfaction and revenue to prioritize reliability efforts.

## My Learnings

As I mostly work for data science and data engineering projects, Chaos Engineering should be used only for Mission Critical applications. Things are data warehouses and data lakes can have a delay of an hour or sometimes a day. But something like medical log collector etc., should find it advantageous to use chaos engineering into their deployment practices.

