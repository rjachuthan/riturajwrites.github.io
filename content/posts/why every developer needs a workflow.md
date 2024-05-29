---
title: 20240512_1856_why Every Developer Needs A Workflow
description: ""
aliases:
  - Why Every Developer Needs A Workflow
tags:
  - 🌱seedling
draft: true
date: 2024-05-12
status: not-started
backlink: 
---

In this blog post, I would like to share my views  and maybe try to convince all the developers reading this blog - why you need a Workflow for your day-to-day code. Every [[10x developer|10X Developer]] I have seen in the industry, my senior developers, or big shot YouTubers - they all have some sort of developer workflow. I was convinced about this when I saw the Vim community creating their own workflows and people like TJ Devries even quoting the term - [[personal development environment|Personal Development Environment]] as a way to create there developer workflow. Seeing them flowing smoothing through their codes and jumping and editing commands by the click of a button, was a eyesight to behold. I was convinced and tried to create the same workflows as them in Vim/[[neovim|NeoVim]] without even understanding that the world of Vim and the world of [[data engineering|Data Engineering]] is completely different. It was difficult to setup a workflow without referencing someone else's configs. I had wasted so many hours creating a workflow for myself. I spent countless hours going through various posts on [r/neovim](www.reddit.com/r/neovim) and watched countless YouTube videos from the Primegen, TJ Devries and Typecraft (BTW this guy has the best series on setting up your Neovim config from scratch using [[lua programming|Lua]]). Once I had a decent flow for myself to do the basic day-to-day data engineering work, I was convinced that I don't need any sort of fancy editors to create a workflow. Currently I have a pretty good workflow using [[databricks|Databricks]], [[vs code|VS Code]] and [[git|Git]]. Although I am still enticed with the world of Neovim and having a true personalized development environment, but I am happy with what I have right now. Maybe in future, I will be able to incorporate Neovim as well in my workflow. And after months of experimenting, I believe that anyone can create a workflow out of any decent editor and they don't need any fancy plugins or AI or paid subscription to create a decent workflow. Let me share my ways of doing things and in process let me motivate you as well to create a workflow for yourself.

## Why You Need a Workflow?

The most important thing a developer can do for himself is to streamline his/her flow so that other than programming/coding nothing else comes to disturb you. This workflow is only for the developer to focus only about thinking about the code. Nothing should come between the coder and the code he/she is writing.

I am a data guy, who is currently working on a [[data engineering]] project and therefore, my examples in this article would be targeted towards the data engineering community. But you can almost consider the same thing for any other field of programming as well. Now that is clear, in my opinion, the best thing to happen to any data engineering folks who are forced to work Databricks environment is the launch of the Databricks Extension for VS Code, it still does not fixes the complete bottleneck. Even though after forcing my junior devs to use the VS Code extension for Databricks, my junior devs keep on running their code in the cloud itself. And when they push their code to the cloud, there is a delay of atleast 10-30 seconds. Even though the code contains a very minor or irrelevant change, it takes Databricks sometime to respond to the changes done by the developer. You might be thinking that 10-30 seconds is nothing much. You are right, but this small delay is more than enough for the developer to get distracted and get out of the [[flow state]]. And this is the same for every other field of programming you take.

## How is My Workflow

I would like to give an example of my how my workflow is setup and maybe this can help you convince why you need one and how you can create a workflow for yourself. 

## Things to Cover in the Article

1. Define a workflow
2. Why should a developer streamline his/her workflow.
	- Faster development cycles, reduced errors, and improved collaborations
	- Productivity and Efficiency
	- Minimise distractions
	- streamline coding process
	- Avoid Context Switching
3. Version Control: Why is Git important for managing code changes, collaborations
4. Folder structure
5. Documentation and Knowledge Sharing
	- Importance of Documenting
	- Coding Practices
	- Project Specific Guidelines
6. Task Management: TODO Highlights and TODO Trees
7. Code Refactoring and Code Quality Tools
	- Code linting
	- Code Formatting
	- ~~Code Reviews~~
8. Workflow Optimization Techniques