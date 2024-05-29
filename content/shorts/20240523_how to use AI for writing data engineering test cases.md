---
title: How to Use AI for Writing Data Engineering Test Cases
description: ""
aliases:
  - How to Use Github Copilot for Writing Data Engineering Test Cases
tags:
  - 🌱seedling
  - dataengineering
draft: true
date: 2024-05-23
status: not-started
backlink:
  - "[[data engineering|Data Engineering]]"
  - "[[github copilot|Github Copilot]]"
---

While going through some of the messages in a [[Reddit]] posts [^1] I just stumbled upon an idea to create a blog post to list down all the ways you can use [[artificial intelligence|AI]] for testing your codes. Since, I mostly work on [[data engineering]] and sometimes on [[data science]] work, I would mostly be using the examples from [[data engineering]] perspective. But I am pretty sure that you can use these tips and tricks for other streams as well.

## Codiumate (earlier Codium Plugin in [[vs code|VS Code]])[^2]

Let us get over with the plugin which is specifically designed for assisting developers in writing [[test case]]s. I really like this plugin and I really like the way this has evolved over the past couple for months. First of all, the greatest plus point about this plugin is that it has a really generous free tier for all the developers.

This is how the plugin looks in VS Code:
![[img_20240527_20240523_codiumate_screnshot.png]]

This plugin really promotes a collaborative relationship between developers and AI, automating tasks while allowing developers to oversee the work. Codiumate aids not only in iterative code testing, but also in code assistance, efficient PR reviews, Smart Code Completions and you can also chat with it like a Coding Agent. As per the documentation - "Codiumate supports ALL programming languages for test generations, with enhanced support and features for - [[python|Python]], [[javascript|JavaScript]], [[javascript|TypeScript]] and [[java|Java]]". I have tested only for python and it allows you to write the test cases in both - [[pytest|PyTest]] and [[unit test|Unit Test]]. By default the plugin writes two test cases, but it gives you more than 10 suggestions for comprehensive test cases. It also allows you to chat with the bot and create your own test cases as well. The best part is that in the plugin window itself you can test and fix the test cases and this plugin self-corrects the test cases on its own. Once you are satisfied with the test cases, the plugin can create a `.py` file with all the test cases you have selected.

Although the plugin has generous free tier, the free tier is really slow. I still haven't found the motivation to purchase the paid version, but the developers do say that there is a considerable amount of speed improvement in the paid plans. But even without the paid plans, Codiumate is pretty generous and allows you all major feature for free. The test cases, is not always correct though. The quality of the test cases rely heavily on the quality of code you have written - afterall if the AI is not able to understand what code you have written, it is going to write back gibberish test cases. Until this plugin is free, I feel like everyone should try this plugin at least for some time to figure out any edge cases in their testing plans or to automate the boring tasks of writing simple and menial test cases. Fair warning though - this plugin expects a lot of involvement from the developer. It does not automate things 100% for you.

[^1]: [Reddit - Do you data engineering folks actually use Gen AI or nah](https://www.reddit.com/r/dataengineering/comments/1cypmvq/comment/l5b4iwj/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
[^2]: [Meaningful Code Tests for Busy Devs | CodiumAI](https://www.codium.ai). <br> - [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=Codium.codium) <br> - [JetBrains Plugin](https://plugins.jetbrains.com/plugin/21206-codiumate--code-test-and-review-with-confidence--by-codiumai)