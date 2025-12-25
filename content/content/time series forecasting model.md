---
title: Time Series Forecasting Model
description: ""
aliases: [Time Series Forecasting Model]
tags: [🌱seedling]
draft: true
date: '[[2025-08-04]]'
backlink:
---

Here is a list of recommended [[time series forecasting model]]s as per a [post in Linkedin](https://www.linkedin.com/feed/update/urn:li:activity:7358122879684673537?utm_source=share&utm_medium=member_desktop&rcm=ACoAABYga18B_yZTFteToLp1P7dhx_yp8P4BL_o):

- [[Temporal Convolutional Network]] (TCN) - Convolutional model for long memory patterns
	- PRO: Fast, parallel, and stable training
	- CON: Less intuitive than [[Recurrent Neural Network]] (rnn)
- [[TSMixer]]: MLP style model for efficient time series learning
	- PRO: Lightweight and scalable to large data
	- CON: Limited research beyond benchmarks
	- USE CASES: Non linear multivariate, high-frequency data
- [[TimesNet]]: Deep model for long-range structured sequences
	- PRO: Excels on long-horizon benchmarks
	- CON: Still early-stage in real use
	- USE CASES: Long horizon, Multiscale seasonal series
- [[NBEATS]]: Deep model without statistical assumptions
	- PRO: Flexible, no domain-specific design
	- CON: Low interpretability, needs big data
	- USE CASES: Long horizon, Trend-seasonal modelling
- [[DeepAR]]/[[DeepVAR]]: RNN-based probabilistic sequence model
	- PRO: Scales to many related time series
	- CON: Weak with long-term dependecies
	- USE CASES: Multivariate probabilistic, Short Series
- [[Temporal Fusion Transformer]]: Attention based model for complex multivariate data
	- PRO: Handles long- and short-term dynamics
	- CON: Data-hungry and hard to tune
	- USE CASES: Long horizon, Multivariate with covariates
- [[Prophet]]: Additive model with trend, seasonality, holidays
	- PRO: Easy to use, auto seasonality detection
	- CON: Struggles with abrupt data shifts
	- USE CASES: Trend changepoints, Sparse event patterns
- [[Gradient Boosting (with lag features)]]: Tree based model with engineered time features
	- PRO: Handles irregular and nonlinear patterns
	- CON: Requires manual feature creation
	- USE CASES: Mutlivariable exogenous, irregular data
	- [[Exponential Smoothing]] (ETS): Weighted average method for trend/seasonal data
		- PRO: Simple, fast, and interpretable
		- CON: Weak on noisy or shifting series
		- USE CASES: Smooth Seasonal series, level-trend models
	- [[ARIMA]]/[[SARIMA]]: Linear statistical model for seasonal, stable series
		- PRO: Strong on short, seasonal univariate data
		- CON: Fails with non-linear or exogenous signals
		- USE CASES: Univariate seasonal, Short-term trends
