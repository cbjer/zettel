---
title: Maximum Likelyhood Estimator Tends to Normal
permalink: /zettel/202111211350_MaximumLikelyhoodEstimatorTendstoNormal
layout: page
tags: 

---
# Maximum Likelyhood Estimator Tends to Normal

The [maximum likelyhood estimator](202111071235_MaximumLikelyhoodEstimation) can be shown to tend to a [normal distribtion](202101091649_multivariateNormalDistribution). That is if $\theta_0$ represents the true value of the parameter, then

$$
\hat{\theta} \rightarrow N(\theta_0, \mathbf{i}(\theta_0)^{-1})
$$

Where $\mathbf{i}(\theta)$ is the [fisher information](202111211335_FisherInformation).

This suggests we can use the following as a sampling distribution for $\hat{\theta}$ itself:

$$
N(\hat{\theta}, \mathbf{i}(\hat{\theta})^{-1})
$$

This means we can produce [confidence intervals](202111060012_ConfidenceInterval) around the MLE itself.

Links: 

References: 

