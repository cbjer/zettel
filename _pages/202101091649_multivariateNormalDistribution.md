---
title: Multivariate Normal Distribution
permalink: /zettel/202101091649_multivariateNormalDistribution
layout: page
tags: pdf

---
# Multivariate Normal Distribution

A multivariate normal distribution is a generalisation of the normal distribution to a multi-dimensional space. $X$ would have
$p$ components, each of which can have non-zero [covariance](202012221554_covarianceDefinition) with the other components.

The pdf of a multivariate normal $X \sim \mathcal{N} (\mathbf{\mu}, \Sigma)$ with mean vector $\mathbf{\mu}$ and covariance matrix $\Sigma$ is

$$
f(\mathbf{x} | \mathbf{\mu}, \Sigma ) = \frac{1}{(2 \pi )^{p/2} | \Sigma |^{1/2}} \exp \Big(- \frac{1}{2} ( \mathbf{x} - \mathbf{\mu} )^T \Sigma^{-1} ( \mathbf{x} - \mathbf{\mu} ) \Big)
$$

We can show that the covariance matrix for a multivariate normal is [positive definite](202101091703_positiveDefiniteMatrix). Multivariate Gaussians 
have some [useful properties](202101091711_multivariateGaussianProperties) that make them easy to work with.

Links: [Lei Mao Blog Post](https://leimao.github.io/blog/Multivariate-Gaussian-Covariance-Matrix/)

References: 

[Return to Index](index)