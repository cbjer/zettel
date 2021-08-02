---
title: Law of Total Expectation
permalink: /zettel/202103141349_lawTotalExpectation
layout: page
tags: conditional

---
# Law of Total Expectation

Given a [partition](202012221506_probabilityPartition) $A_i$ we have that

$$
\mathrm{E} [X] = \sum_i \mathrm{E} [ Y \vert A_i ] P(A_i)
$$

If our partition is pointwise:
$$
\mathrm{E} [X] = \sum_x \mathrm{E} [ Y \vert X = x ] P(X=x)
$$

If $X$ is a continuous random variable:
$$
\mathrm{E} [X] = \int_x \mathrm{E} [ Y \vert X = x ] f_X(x) \, dx 
$$

Links: 

References: 

