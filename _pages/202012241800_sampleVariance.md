---
title: Sample Variance
permalink: /zettel/202012241800_sampleVariance
layout: page
tags: definition  statistics

---
# Sample Variance

The sample variance is an [estimator](202012241539_estimatorDefinition) for the true [variance](202012241415_varianceDefinition) $\sigma^2$. 

$$
s^2 = \hat{\sigma}^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar{X})^2
$$
where $\bar{X}$ is the [sample mean](202012241544_sampleMeanDefinition). The factor of $\frac{1}{n-1}$ ensures
the estimator is [unbiased](202012241553_biasDefinition).

Note: To prove this estimator is unbiased, use the substituion $X_i = \mu + \sigma Z_i$ and the [variance identity for sum of independent variables](202012241806_varianceSumIndependentRVs).



Links: 

References: 

