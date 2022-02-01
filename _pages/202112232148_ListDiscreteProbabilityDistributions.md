---
title: List Discrete Probability Distributions
permalink: /zettel/202112232148_ListDiscreteProbabilityDistributions
layout: page
tags: 

---
# List Discrete Probability Distributions

<figure>
  <img src="/zettel/Images/Statistics/DiscreteDistributions.png"
     alt="ALT"
     class="centerImage"
     style="width: 12ß00px;" />
  <figcaption></figcaption>     
</figure>

- Discrete Uniform

$$
f(x) = 
\begin{cases}
1/k &x=1,\ldots,k \\
0 &\textrm{otherwise}
\end{cases} 
$$
- Bernoulli
$$
f(x) = 
p^x (1-p)^x
$$
- Binomial:
$$
X \sim \textrm{Binomial}(n, p) \\
$$
$$
f(x) = 
\begin{cases}
{n \choose k} p^x (1-p)^x &x=1,\ldots,n \\
0 &\textrm{otherwise}
\end{cases} 
$$
- Geometric
$$
X \sim \textrm{Geom}(p) \\
$$
$$
P(X = k) = p(1-p)^{k-1}
$$
- Poisson
$$
X \sim \textrm{Poisson}(\lambda)
$$
$$
f(x) = e^{-\lambda} \frac{\lambda^x}{x!} \quad x \geq 0
$$

Links: [Continuous Distributions](202112232148_ListContinuousProbabilityDistributions)

References: 

