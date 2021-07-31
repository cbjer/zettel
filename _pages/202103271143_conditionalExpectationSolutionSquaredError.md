---
title: Conditional Expectation Solution to Squared Error Loss
permalink: /zettel/202103271143_conditionalExpectationSolutionSquaredError
layout: page
tags: decision theory
---
# Conditional Expectation Solution to Squared Error Loss

In the statistical decision theory setup, if we have a [squared loss function](202101162041_lossFunctions) we are 
aiming to choose $f$ to minimise the expected squared loss.

$$
\begin{aligned}
\mathrm{EPE}(f) &= \mathrm{E} (Y - f(X) )^2 \\
&= \mathrm{E}_X \mathrm{E}_{Y \vert X} \big[ ( Y - f(X))^2 \vert X \big]
\end{aligned}
$$

Where we have used the [conditional expectation expression for a joint distribution](202103141401_conditionalExpectationJointDistribution).

Since we want to choose $f$ to minimise this expected squared loss expression, we can minimise this pointwise for a given $X=x$.
This is saying "choose f such that for a given fixed $x$, it minimises the expression".

$$
f^{\ast}(x) = \mathrm{argmin}_c \, \mathrm{E}_{Y \vert X} \big[ (Y - c)^2 \vert X = x \big]
$$

Treating as a function of $c$ and expanding, clearly we need to minimise:
$$
g(c) = \mathrm{E}_{Y \vert X} \big[ Y^2 \vert X = x \big] - 2 c \, \mathrm{E}_{Y \vert X} \big[ Y \vert X = x \big] + c^2
$$

which has a minimum at $c^{\ast}$. As such our solution $f^{\ast}$ is:
$$
f^{\ast}(x) = c^{\ast} = \mathrm{E} \big[ Y \vert X = x \big]
$$

the conditional expectation, which is also called the **regression function**.

Links: 

References: Elements of Statistical Learning - p18

[Return to Index](index)