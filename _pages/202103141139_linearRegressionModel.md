---
title: Zettels
permalink: /zettel/202103141139_linearRegressionModel
layout: default
---
tags: #machine #learning

# Linear Regression Model

For a **Linear Regression Model**, we have the setup of

Model: $f(\mathbf{x} \vert \mathbf{w}) = \mathbf{x}^T \mathbf{w}$

Training set $$ \{ (\mathbf{x}_i, y_i ) \}_{i=1}^N $$

Parameters $\mathbf{w} \in \mathbb{R}^p$

Once we have fitted parameters $\tilde{\mathbf{w}}$, for example through the [matrix solution](202103141315_linearRegressionMatrixSolution), then the predictions
for a new data point $\mathbf{x}$ are

$$
\hat{y} = f(\mathbf{x} \vert \tilde{\mathbf{w}} ) = \mathbf{x}^T \tilde{\mathbf{w}}
$$

Links: [Linear Regression Squared Loss Matrix Form](202103141145_linearRegressionSquaredLossMatrix), [Linear Regression Gradient Descent Update](202102012111_linearRegressionGradientDescentDerivation)

References: 

[Return to Index](index)