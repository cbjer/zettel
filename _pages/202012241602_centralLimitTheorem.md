---
title: Central Limit Theorem
permalink: /zettel/202012241602_centralLimitTheorem
layout: page
---
tags: #theorem # statistics

# Central Limit Theorem

The central limit theorem intuitively states that if we have a large enough sample, then the [sample mean estimator](202012241544_sampleMeanDefinition) $\bar{X}$
will approach a [normal distribution](202012241603_normalDistribution). That is if we have a [random sample](202012241510_sampleDefinition)
$\{ X_1, \dots, X_n \}$ of $X$, with true mean and [variance](202012241415_varianceDefinition) of $X$ being $\mu$ and $\sigma^2$ respectively, 
then the average of the sample converges in distribution to a [normal distribution](202012241603_normalDistribution):

$$
\begin{aligned}
\hat{X}_n \xrightarrow{d} \mathcal{N} \big( \mu, \frac{\sigma^2}{n} \big) \\
Z = \Big( \frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \Big) \xrightarrow{d} \mathcal{N} (0, 1)
\end{aligned}
$$

Intuitively this is quite amazing. Regardless of what is the underlying distribution of $X$, we will approach a Gaussian in 
the sample mean.

Links: 

References: 

[Return to Index](index)