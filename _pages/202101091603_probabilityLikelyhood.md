---
title: Likelihood
permalink: /zettel/202101091603_probabilityLikelyhood
layout: page
tags: definition statistics
---
# Likelihood

If we have a joint probability density function $f$ which is parameterised by $\theta$, then the **likelihood function** is 
simply defined as 

$$
L ( \theta | \mathbf{x} ) = f( \mathbf{x} | \theta )
$$

The key idea here is that, rather than thinking "given some parameters, what is the probability...", we are instead viewing
as: given a sample, how likely is it that the parameters were some $\theta$. That is we are viewing as a function of the parameters given the data, not as a 
probability of the data, given some parameters.

If $X$ is an [iid sample](202012241510_sampleDefinition) with $X = (X_1, \dots, X_n)$, then we have 

$$
L(\theta | \mathbf{x}) = \prod_{i=1}^{n} f (x_i | \theta)
$$

We also define the **log-likelihood** as 

$$
l(\theta | \mathbf{x} ) = \log L ( \theta | \mathbf{x} ) = \sum_{i=1}^n \log f (x_i | \theta )
$$

Remember, with a likelihood, we are making an assumption of the type of distribution the data is coming from 
(eg a normal) with then unknown parameters.

> Useful to think as likelyhood of observing the data given the model parameters

In a machine learning classification setup, we are modeling 
$$
p(Y_i = y_i \vert X_i = x_i)
$$
So don't get confused between $x_i$ as an observed input in the ML framework, and as a sample in the classical statistics framework.

Links: [Cross Entropy vs Negative Log Likelihood](202103271848_crossEntropyVsNegativeLogLikelyhood)

References: 

[Return to Index](index)