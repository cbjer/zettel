---
title: Linear Discriminant Analysis
permalink: /zettel/202111062039_LinearDiscriminantAnalysis
layout: page
tags: 

---
# Linear Discriminant Analysis

We know from the [optimal Bayes classifier](202111061451_OptimalBayesClassifier) that we should assign a given $x$ to the class of which has the highest posterior probability $P(G=k) \vert X=x)$.

Using [Bayes formula](202012221450_bayesRules) / [Bayesian inference](202101161711_bayesianInference), we can write this as 

$$
P(G=k \vert X=x) = \frac{f_k(x)\pi_k}{\sum_l f_l(x) \pi_l}
$$

where $f_k(x)$ is our model to $p(x \vert k)$ / the likelyhood and $\pi_k$ is our prior probability of being in class $k$.

For LDA, we assume $f_k(x)$ takes the form of a [multi-variate normal](202101091649_multivariateNormalDistribution), where each $f_k(x)$ has a corresponding mean vector $\mu_k$ and covariance matrix $\Sigma_k$.

Crucially, for LDA we assume **each covariance matrix is equal**, ie $\Sigma_k = \Sigma$.

We then evaluate the log probability ratio:
$$
\begin{aligned}
\log \frac{P(G=k \vert X=x)}{P(G=l \vert X=x)} = -\frac{1}{2}(\mu_k + \mu_l)^T \Sigma^{-1} (\mu_k - \mu_l) + x^T \Sigma^{-1} (\mu_k - \mu_l) + \log \frac{\pi_k}{\pi_l}
\end{aligned}
$$

Since ths is linear in $x$, our decision boundary between the 2 classes is linear.

To see this, consider when 
$$
P(G=k \vert X=x) = P(G=l \vert X=x)
$$

would be solving the above linear form for $0$.

To perform LDA, we need to estimate the parameters of the Gaussian distributions, which we do using the training data.
$$
\hat{\pi}_k = N_k / N \\
\hat{\mu}_k = \frac{1}{N_k}\sum_{g_i = k} x_i / N_k \\
\hat{\Sigma} = \sum_{k=1}^K \sum_{g_i=k} (x_i - \hat{\mu}_k)(x_i - \hat{\mu}_k)^T / (N-K)
$$
(don't ask me where that last form came from)

Links: 

References: 

