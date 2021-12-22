---
title: Bayesian Model Averaging
permalink: /zettel/202111252244_BayesianModelAveraging
layout: page
tags: 

---
# Bayesian Model Averaging

Say we have some quantity we are interested in $v$. Eg this may be the prediction at a point $x$, $f(x)$ and we have $M$ canditate models $\mathcal{M}_m$ from our training set $Z$.

This would become the posterior

$$
P(v \vert Z) = \sum_{m=1}^M P(v \vert \mathcal{M}_m, Z) P(\mathcal{M}_m \vert Z)
$$
with a posterior mean:
$$
E(v \vert Z) = \sum_{m=1}^M E(v \vert \mathcal{M}_m, Z) P(\mathcal{M}_m \vert Z)
$$

Links: 

References: 

