---
title: Zettels
permalink: /zettel/202102012111_linearRegressionGradientDescentDerivation
layout: default
---
tags: #derivation

# Gradient Descent for Linear Regression Derivation

Using a [Linear Regression Model](202103141139_linearRegressionModel) and the 
[expression for the squared loss](202103141145_linearRegressionSquaredLossMatrix)

Taking a partial derivative with respect to the parameters and using [vector calculus identities](202101161942_vectorCalculusResults) we get

$$
\begin{aligned}
\frac{\partial J}{\partial \mathbf{w}} &= \frac{1}{N} ( -2 \mathrm{X}^T \mathbf{y} + 2 \mathrm{X}^T \mathrm{X} \mathbf{w} ) \\
&= \frac{2}{N} \mathrm{X}^T \big( \mathrm{X} \mathbf{w} - \mathbf{y} \big)
\end{aligned}
$$

Our [Gradient Descent Update](202103282312_gradientDescentUpdate) then becomes 
$$
\mathbf{w} \leftarrow \mathbf{w} - \alpha \mathrm{X}^T \big( \mathrm{X} \mathbf{w} - \mathbf{y} \big)
$$

With $\alpha$ being our step size parameter.

Links: [Logistic Regression Gradient Descent Update](202103282246_logisticRegressionGradientDescentStepDerivation)

References: 

[Return to Index](index)