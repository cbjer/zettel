---
title: Bayesian Inference
permalink: /zettel/202101161711_bayesianInference
layout: page
tags: bayes
---
# Bayesian Inference

In Bayesian Inference we treat probabilities as a subjective degree of belief, rather than as a long run frequency (Frequentist).

The setup is 

$$
X | \theta \sim f(x ; \theta) \\
\theta \sim \pi
$$

ie the data given some parameters is distributed from the function $f$ and where our parameters are also random variables distributed from $\pi$. $f$ is 
then our **model** / [likelyhood](202101091603_probabilityLikelyhood) with $\pi$ forming our **prior distribution**, describing our initial beliefs about the parameters.

We can see that the joint distribution, using [bayes rule](202012221450_bayesRules), is distributed as 

$$
(X, \theta ) \sim f(x| \theta) \pi(\theta)
$$

We can then define the **posterior distribution** as our probability density function of the parameters given the data. Using 
bayes rule we see this is equal to

$$
\pi(\theta | x) = \frac{f(x|\theta) \pi(\theta)}{\int_{\theta} f(x | \tilde{\theta} ) \pi ( \tilde{\theta} ) d \tilde{\theta}}
$$

We often write this as $\pi(\theta \vert x ) \propto f(x \vert \theta) \pi(\theta)$. 

Ie **posterior $\propto$ likelyhood $\cdot$ prior**.


Links: 

References: 

[Return to Index](index)