---
title: Information Matrix
permalink: /zettel/202111211330_InformationMatrix
layout: page
tags: 

---
# Information Matrix

In the context of [maximum likelyhood estimation](202111071235_MaximumLikelyhoodEstimation), the information matrix is the second derivative of the [log-likeylyhood](202101091603_probabilityLikelyhood) (times $-1$) with respect to the parameter vector.

$$
\mathbf{I}(\theta) = - \sum_{i=1}^N \frac{\partial^2 l(\theta \vert x_i)}{\partial \theta \partial \theta^T}
$$

Remember this is a matrix when $\theta$ is a vector.

The **observed information** is $\mathbf{I}(\theta)$ evaluated at the maximum likelyhood estimator $\hat{\theta}$.

Links: [Fisher Information](202111211335_FisherInformation)

References: 

