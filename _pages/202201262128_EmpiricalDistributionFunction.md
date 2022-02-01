---
title: Empirical Distribution Function
permalink: /zettel/202201262128_EmpiricalDistributionFunction
layout: page
tags: 

---
# Empirical Distribution Function

We say that the **empirical distribution function** $\hat{F}_n$ is the CDF to try estimate the true underlying, but unknown, CDF from the data.

$$
\hat{F}_n (x) = \frac{\sum_{i=1}^n I(X_i \leq x)}{n}
$$

It forms a stepwise function over the data, moving up $1/n$ after each data point.

Links: 

References: 

