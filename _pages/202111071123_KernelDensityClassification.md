---
title: Kernel Density Classification
permalink: /zettel/202111071123_KernelDensityClassification
layout: page
tags: 

---
# Kernel Density Classification

We can combine [kernel density estimation](202111071109_KernalDensityEstimation) with [Bayes formula](202101161711_bayesianInference) to directly model the posterior probability distribution. 

Remember from the [optimal Bayes classifier](202111061451_OptimalBayesClassifier) we are trying to model $P(G=j \vert X = x)$. Using Bayes, we can model this as:

$$
P(G=j \vert X=x) = \frac{\hat{\pi_j} \hat{f}_j(x)}{\sum_{k=1}^{K} \hat{\pi}_k \hat{f}_k(x)}
$$

where $\hat{f}_j(x)$ are our density estimations applied to each clas separately. $\hat{\pi}_j$ is our estimate of the prior distribution, usually the sample proportions.

However this method suffers from trying to estimate too much (full probability distributions for each class) which may be too much if the goal is only classification.

Links: 

References: 

