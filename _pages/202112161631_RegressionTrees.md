---
title: Regression Trees
permalink: /zettel/202112161631_RegressionTrees
layout: page
tags: 

---
# Regression Trees

In a regression tree we are finding binary splits of the input space to optimize some criterion (such as minimising sum of squares). 

Model:
$$
f(x) = \sum_{m=1}^M c_m I(x \in R_m)
$$
Ie for a given input $x$, we find which region this $x$ is contained within and take the constant value associated with that region.

For a dataset $(x_i, y_i)$, its easy to show that the optimal $c_m$ for a given region is the average $y_i$ of points contained within that region.

Greedy Algorithm Approach:

Say we have a region to split. We want to find the feature to split across and the point at which we split. That is to separate the data into two regions:
$$
R_1(j, s) = \{ X \vert X_j \leq s \} \quad R_2(j, s) = \{ X \vert X_j > s \}
$$

How do we do this? Well we are trying to find $j$ and $s$ that minimise:

$$
\min_{j,s} \Big[ \min_{c_1} \sum_{x_i \in R_1(j,s)} (y_i - c_1)^2 + \min_{c_2} \sum_{x_i \in R_2(j,s)} (y_i - c_2)^2 \Big]
$$

The inner minimisation values of $c_1$ and $c_2$ is solved by the average in those regions. So our optimisation becomes

$$
\min_{j,s} \Big[ \sum_{x_i \in R_1(j,s)} (y_i - \hat{c}_1)^2 + \sum_{x_i \in R_2(j,s)} (y_i - \hat{c}_2)^2 \Big]
$$

where

$$
\hat{c}_1 = \textrm{ave}(y_i \vert x_i \in R_1(j,s)) \quad \hat{c}_2 = \textrm{ave}(y_i \vert x_i \in R_2(j,s))
$$

How we do we solve the final optisation over $j$ and $s$? We simply try each feature in turn, sort the values of the feature and test on the mid points of the different $x_i^p$'s.



Links: 

References: 

