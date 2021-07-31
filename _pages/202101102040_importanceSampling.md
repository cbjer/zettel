---
title: Importance Sampling
permalink: /zettel/202101102040_importanceSampling
layout: page
tags: sampling
---
# Importance Sampling

Importance Sampling is a sampling method where we wish to calculate a mean $\mathrm{E}_p[\phi(X)]$ from a target distribution $X \sim p$, but where
we cannot sample from the distribution directly. We could use [rejection sampling](202101101505_rejectionSampling), however the method suffers if our 
bound $M$ is not a tight one, as many samples will end up being rejected. 

Instead in importance sampling, we use all draws from the candidate distribution $Y \sim q$, but reweight them accordingly. We note

$$
\mathrm{E}_p [\phi(X)] = \int_z \phi(z) p(z) dz = \int_z \frac{\phi(z) p(z)}{q(z)} q(z) dz = \mathrm{E}_q \Big[ \frac{\phi(Y) p(Y)}{q(Y)} \Big] = \mathrm{E}_q [w(Y)\phi(Y) ]
$$
where we have defined $w(x) = p(x) / q(x) $ as the **importance sampling ratio / weight**.

Using this we can see if we want to estimate $\theta := \mathrm{E}_p[\phi(X)]$, we can simply sample from $Y \sim q$ and take a weighted mean

$$
\hat{\theta}_n^{IS} = \frac{1}{n} \sum_{i=1}^n \phi(Y_i) w(Y_i)
$$

It is easy to see using the above that this is an [unbiased estimator](202012241553_biasDefinition) for $\theta$.

Links: [Importance Sampling](https://bookdown.org/rdpeng/advstatcomp/importance-sampling.html)

References: 

[Return to Index](index)