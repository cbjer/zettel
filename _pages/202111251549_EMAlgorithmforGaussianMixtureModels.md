---
title: EM Algorithm for Gaussian Mixture Models
permalink: /zettel/202111251549_EMAlgorithmforGaussianMixtureModels
layout: page
tags: 

---
# EM Algorithm for Gaussian Mixture Models

Following the steps in the general [EM Algorithm](202111071246_EMAlgorithm) and [EM Algorithm using KL Divergence](202111251825_EMAlgorithmStepsusingKLDivergence).

Here we have

$$
z_i \sim \mathrm{Categorical}(\mathbf{\pi}) \\
x_i \vert z_i \sim \mathcal{N}(\mu_{z_i}, \Sigma_{z_i}) 
$$

First we need to calculate our [posterior distribution](202111211359_PosteriorDistribution):
$$
r_i^k := p(z_i = k \vert x_i, \theta) = \frac{p(x_i \vert z_i=k, \theta) p(z_i=k)}{\sum_j p(x_i \vert z_i = j, \theta)p(z_i = j)} = \frac{\mathcal{N}(x_i \vert \mu_k, \Sigma_k) \pi_k}{\sum_j \mathcal{N}(x_i \vert \mu_j, \Sigma_j) \pi_j}
$$
Where we have made use of [Bayes Rule](202012221450_bayesRules). We sometimes refer to this as the responsibility of the $k$th distribution belonging to observation $i$. 

Now we need to know our variational distribution term $\mathcal{L}(q, \Theta)$. We know from the general steps, we need to maximise:
$$
\begin{aligned}
&E_{q(Z)} \big[ \log p(X,Z \vert \Theta)] \\
&= \sum_{i=1}^N \sum_{k=1}^K r_i^k \log p(x_i, z_i = k, \vert \theta) \\
&= \sum_{i=1}^N \sum_{k=1}^K r_i^k \big[ \log p(x_i \vert z_i = k, \theta) + \log p(z_i = k \vert \theta) \big] \\
&= \sum_{i=1}^N \sum_{k=1}^K r_i^k \big[ \log \mathcal{N}(x_i \vert \mu_k, \Sigma_k) + \log \pi_k \big]
\end{aligned}
$$

We then take a derivative of this with respect to each of the parameters $\theta = (\mathbf{\pi}, \mu, \Sigma)$ to get the [maximum likelyhood](202111071235_MaximumLikelyhoodEstimation) parameters based on the fixed responsibilities.

Links: 

References: [EM for Gaussian Mixture Models](https://stephens999.github.io/fiveMinuteStats/intro_to_em.html)

