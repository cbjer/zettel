---
title: Predictive Distribution
permalink: /zettel/202101161857_predictiveDistribution
layout: page
---
tags: #bayesian #updating

# Predictive Distribution

Say we have $X_1, \ldots, X_n$ independent observation from the distribution $f(x|\theta)$ and we want to find the 
distribution of $X_{n+1}$ given the current observations, treating the problem in a [Bayesian setting](202101161711_bayesianInference).

The **posterior predictive** $g(x_{n+1}|\mathbf{x})$ is our distribution of the next sample $x_{n+1}$, given the current observations $\mathbf{x}$.

$$
\begin{aligned}
g(x_{n+1} | \mathbf{x}) &= \int_{\theta} f(x_{n+1}, \theta| \mathbf{x}) d\theta \\
&= \int_{\theta}f(x_{n+1} | \mathbf{x}, \theta)\pi(\theta | \mathbf{x}) d\theta \\
&= \int_{\theta} f(x_{n+1} | \theta) \pi(\theta | \mathbf{x}) d\theta
\end{aligned}
$$

using the assumption that subsequent samples are conditionally independent, given the parameters.

Links: 

References: 

[Return to Index](index)