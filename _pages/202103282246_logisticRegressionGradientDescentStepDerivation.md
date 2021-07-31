---
title: Logistic Regression Gradient Descent Step Derivation
permalink: /zettel/202103282246_logisticRegressionGradientDescentStepDerivation
layout: page
---
tags: #derivation

# Logistic Regression Gradient Descent Step Derivation

If we have a [logistic regression](202011221613_logisticRegression) model $f(\mathbf{x}) = \sigma(\mathbf{w}^T \mathbf{x})$, 
where we have absorbed the bias term into $\mathbf{w}$. We aim to [minimise the negative log-likelihood](202011221644_likelyhoodLogisticRegression).

$$
J(\mathbf{w}) = - l(\mathbf{w}) = - \sum_{i=1}^N y_i \log f(\mathbf{x}_i) + (1 - y_i) \log(1 - f(\mathbf{x}_i))
$$

Using the [sigmoid function](202011221535_sigmoidFunction) results, along with [vector calculus identities](202101161942_vectorCalculusResults) we get that

$$
\frac{\partial}{\partial \mathbf{w}} f(\mathbf{x}) = f(\mathbf{x})(1 - f(\mathbf{x}))\mathbf{x}
$$

Taking the derivative of our cost function with respect to our parameters, we get

$$
\begin{aligned}
\frac{\partial}{\partial \mathbf{w}} J(\mathbf{w}) &= - \sum_{i=1}^N y_i \frac{1}{f(\mathbf{x}_i)} f(\mathbf{x}_i) (1 - f(\mathbf{x}_i)) \mathbf{x}_i + \frac{1 - y_i}{1 - f(\mathbf{x}_i)} ( - f(\mathbf{x}_i) ( 1 - f(\mathbf{x}_i)) \mathbf{x}_i) \\
&= - \sum_{i=1}^N \big[ y_i (1 - f(\mathbf{x}_i)) \mathbf{x}_i - (1 - y_i) f(\mathbf{x}_i) \mathbf{x}_i \big] \\
&= - \sum_{i=1}^N \big[ y_i \mathbf{x}_i - f(\mathbf{x}_i) \mathbf{x}_i \big] \\
&= \sum_{i=1}^N \mathbf{x}_i \big[ f(\mathbf{x}_i) - y_i \big] \\
&= X^T \big[ f(X) - \mathbf{y} \big] \\
&= X^T \big[ \sigma(X \mathbf{w} ) - \mathbf{y} \big]
\end{aligned}
$$

where we have used the [machine learning summation identities](202102012027_mlVectorSummationIdentities).

We notice it is the [same form as for classical linear regression](202102012111_linearRegressionGradientDescentDerivation), replacing the linear
regression model for the logistic regression model.

The [gradient descent update](202103282312_gradientDescentUpdate) is then

$$
\mathbf{w} \leftarrow \mathbf{w} - \alpha \mathrm{X}^T \big( \sigma(X \mathbf{w} ) - \mathbf{y} \big)
$$

Links: 

References: 

[Return to Index](index)