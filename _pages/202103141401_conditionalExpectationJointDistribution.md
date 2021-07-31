---
title: Conditional Expectation Expression for a Joint Distribution
permalink: /zettel/202103141401_conditionalExpectationJointDistribution
layout: page
tags: 

---
# Conditional Expectation Expression for a Joint Distribution

Say we have a function of two random variables $g(X, Y)$, we have the expression

$$
\begin{aligned}
\mathrm{E}_{X,Y} \big[ g(X, Y) \big] &= \int_{x} \int_{y} g(x, y) f(x, y) \, dy \, dx \\
&= \int_x \int_y g(x, y) f(y \vert x) f(x) \, dy \, dx \\
&= \int_x \mathrm{E}_{Y \vert X} [ g(X, Y) \vert X = x ] \, f(x) \, dx \\
&= \mathrm{E}_{X} \, \mathrm{E}_{Y \vert X} \big[ g(X, Y) \vert X \big]
\end{aligned}
$$

Key bit to be careful on is are we taking expectations over the full joint distribution or 
on a conditional / marginal distribution.

Links: 

References: 

[Return to Index](index)