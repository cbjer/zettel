---
title: Linear Regression Squared Loss Matrix Form
permalink: /zettel/202103141145_linearRegressionSquaredLossMatrix
layout: page
---
tags: #matrix #form

# Linear Regression Squared Loss Matrix Form

We can derive the following form for the [squared loss](202101162041_lossFunctions) of a 
[linear regression model](202103141139_linearRegressionModel).

Defining the loss as a function of the parameters:

$$
\begin{aligned}
J(\mathbf{w}) &= \frac{1}{N} \sum_{i=1}^N L(y_i, f(\mathbf{x}_i | \mathbf{w} ) ) \\
&= \frac{1}{N} \sum_{i=1}^{N} \big( y_i - f(\mathbf{x}_i | \mathbf{w})\big)^2 \\
&= \frac{1}{N} \sum_{i=1}^{N} (y_i - \mathbf{x}_i^T \mathbf{w} ) ( y_i - \mathbf{x}_i^T \mathbf{w}) \\
&= \frac{1}{N} \big( \mathbf{y}^T \mathbf{y} - 2 \mathbf{w}^T \mathrm{X}^T \mathbf{y} + \mathbf{w}^T \mathrm{X}^T \mathrm{X} \mathbf{w} \big) \\
&= \frac{1}{N} \big( \mathbf{y} - \mathrm{X} \mathbf{w} \big)^T \big( \mathbf{y} - \mathrm{X} \mathbf{w} \big)
\end{aligned}
$$

Where we have used the [ML sum identities](202102012027_mlVectorSummationIdentities).

Links: 

References: 

[Return to Index](index)