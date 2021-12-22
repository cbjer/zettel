---
title: Gaussian Mixture Models
permalink: /zettel/202111071240_GaussianMixtureModels
layout: page
tags: 

---
# Gaussian Mixture Models

For Gaussian mixture models, we assume our density is a linear combination of Gaussians. Ie

$$
f(x) = \sum_{m=1}^M \alpha_m \phi (x ; \mu_m, \Sigma_m )
$$
$$
\sum_m \alpha_m = 1
$$

Where $\phi$ is the [Gaussian distribution](202101091649_multivariateNormalDistribution) and our weights sum to $1$.

This is usually fit by [maximum likelyhood](202111071235_MaximumLikelyhoodEstimation) using the [EM Algorithm](202111071246_EMAlgorithm)

Useful for density estimation. We often make constraints on the form of the covariance matrix for tractability. 

Links: 

References: 

