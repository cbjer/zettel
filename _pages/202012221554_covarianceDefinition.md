---
title: Covariance Definition
permalink: /zettel/202012221554_covarianceDefinition
layout: page
---
tags: #definition

# Covariance Definition

Covariance describes the joint variability of two random variables. We can think of it as when one
random variable moves from its mean, how does the other move. If it also moves in the same direction, the 
multiplication will give us a positive number. If they move in opposite directions, we get a negative number. If 
the other doesnt move we get 0.

$$
\begin{aligned}
\mathrm{cov}(X,Y) &= \sigma^2_{X Y} = E \big( (X - E(X))(Y - E(Y)) \big) \\
\mathrm{cov}(X,Y) &= \sigma^2_{X Y} = E (XY) - E(X)E(Y)
\end{aligned}
$$

To get a unitless measure in the $[-1, 1]$ interval we use [correlation](202012241434_correlationDefinition).

We note that independence implies covariance of 0.

Links: 

References: 

[Return to Index](index)