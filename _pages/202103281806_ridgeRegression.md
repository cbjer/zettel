---
title: Ridge Regression
permalink: /zettel/202103281806_ridgeRegression
layout: page
---
tags: #

# Ridge Regression

**Ridge regression** is a modification on the [linear regression](202011221622_linearRegression) model where instead of
minimising the usual [mean squared error](202101162041_lossFunctions), we add an extra $L_2$ regularisation term.

$$
\Vert \mathbf{y} - X \mathbf{w} \Vert^2_2 + \lambda \Vert \mathbf{w} \Vert^2_2 \\
= \big( \mathbf{y} - X \mathbf{w} \big)^T \big( \mathbf{y} - X \mathbf{w} \big) + \lambda \mathbf{w}^T \mathbf{w}
$$

where we are minimising with respect to $\mathbf{w}$. 

Following a very similiar [derivation for the linear model](202103141315_linearRegressionMatrixSolution) and the 
[vector calculus results](202101161942_vectorCalculusResults) we can show the exact solution:

$$
\hat{\mathbf{w}}^{\textrm{ridge}} = \big( X^T X + \lambda I \big)^{-1} X^T \mathbf{y}
$$

Links: 

References: 

[Return to Index](index)