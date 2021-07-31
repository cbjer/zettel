---
title: Monte Carlo Estimator
permalink: /zettel/202101091835_monteCarloEstimator
layout: page
---
tags: #definition #sampling

# Monte Carlo Estimator

Say we have a random variable $X$ with probability mass function / probability density function $f_{X}(x)$ and we want to 
estimate $\theta = \mathrm{E} ( \phi(X) ) $ for some function $\phi(x)$. Then the **Monte Carlo Estimator** for the expectation $\theta$ with 
an [iid sample](202012241510_sampleDefinition) $(X_1, \dots, X_n)$ is defined as

$$
\hat{\theta}_n = \frac{1}{n} \sum_{i=1}^n \phi ( X_i )
$$

Links: 

References: 

[Return to Index](index)