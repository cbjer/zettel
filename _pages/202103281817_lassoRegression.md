---
title: Zettels
permalink: /zettel/202103281817_lassoRegression
layout: default
---
tags: #model

# Lasso Regression

**Lasso regression** is a small modification from the standard [linear model](202103141139_linearRegressionModel) and [ridge regression model](202103281806_ridgeRegression),
instead using a $L_1$ term for regularisation.

$$
\Vert \mathbf{y} - X \mathbf{w} \Vert^2_2 + \lambda \Vert \mathbf{w} \Vert_1 \\
= \big( \mathbf{y} - X \mathbf{w} \big)^T \big( \mathbf{y} - X \mathbf{w} \big) + \lambda \sum_j \vert w_j \vert
$$

There isn't a closed form solution to minimising this expression.

Lasso regression has the advantage that it will force the weights for unimportant features to $0$. Ie
it is doing a type of automatic feature selection.

Links: [Elastic Net](202103281827_elasticNetModel)

References: 

[Return to Index](index)