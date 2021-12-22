---
title: Score Function
permalink: /zettel/202111211323_ScoreFunction
layout: page
tags: 

---
# Score Function

The score function is the first derivative of the [log-likelyhood](202101091603_probabilityLikelyhood) with respect to the parameter vector $\theta$.

$$
\begin{aligned}
s(\theta) &= \frac{\partial \log L(\theta \vert D)}{\partial \theta} \\
&= \sum_{i=1}^N \frac{\partial l(\theta \vert x_i)}{\partial \theta}
\end{aligned}
$$

Assuming the [Maximum likelyhood estimator](202111071235_MaximumLikelyhoodEstimation) is in the interior of the parameter space, the score will be 0 there, ie

$$
s(\hat{\theta}) = 0
$$

Links: .

References: 

