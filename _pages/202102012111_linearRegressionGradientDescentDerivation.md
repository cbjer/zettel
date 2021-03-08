---
title: Zettels
permalink: /zettel/202102012111_linearRegressionGradientDescentDerivation
layout: default
---
tags: #derivation

# Gradient Descent for Linear Regression Derivation

For a [Linear Regression Model](TODO), we have the setup of

Model : $f(\mathbf{x} | \mathbf{w}) = \mathbf{x}^T \mathbf{w}$

Training set $\{ (\mathbf{x}_i, y_i ) \}_{i=1}^N$

Parameters $\mathbf{w} \in \mathbb{R}^p$

Using a squared loss function, we define our loss as a function of the parameters

$$
\begin{aligned}
J(\mathbf{w}) &= \frac{1}{N} \sum_{i=1}^N L(y_i, f(\mathbf{x}_i | \mathbf{w} ) ) \\
&= \frac{1}{N} \sum_{i=1}^{N} \big( y_i - f(\mathbf{x}_i | \mathbf{w})\big)^2 \\
&= \frac{1}{N} \sum_{i=1}^{N} (y_i - \mathbf{x}_i^T \mathbf{w} ) ( y_i - \mathbf{x}_i^T \mathbf{w}) \\
&= \frac{1}{N} \big( \mathbf{y}^T \mathbf{y} - 2 \mathbf{w}^T \mathrm{X}^T \mathbf{y} + \mathbf{w}^T \mathrm{X}^T \mathrm{X} \mathbf{w} \big)
\end{aligned}
$$

Where we have used the [ML sum identities](202102012027_mlVectorSummationIdentities).

Taking a partial derivative with respect to the parameters and using [vector calculus identities](202101161942_vectorCalculusResults) we get

$$
\begin{aligned}
\frac{\partial J}{\partial \mathbf{w}} &= \frac{1}{N} ( -2 \mathrm{X}^T \mathbf{y} + 2 \mathrm{X}^T \mathrm{X} \mathbf{w} \\
&= \frac{2}{N} \mathrm{X}^T \big( \mathrm{X} \mathbf{w} - \mathbf{y} \big)
\end{aligned}
$$

Our [Gradient Descent Update](TODO) then becomes 
$$
\mathbf{w} \leftarrow \mathbf{w} - \alpha \mathrm{X}^T \big( \mathrm{X} \mathbf{w} - \mathbf{y} \big)
$$


Links: 

References: 

[Return to Index](index)