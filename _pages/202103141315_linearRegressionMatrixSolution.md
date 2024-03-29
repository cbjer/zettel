---
title: Linear Regression Matrix Solution
permalink: /zettel/202103141315_linearRegressionMatrixSolution
layout: page
tags: 

---
# Linear Regression Matrix Solution

If we have a [linear regression](202103141139_linearRegressionModel) model, using the [squared loss expression](202103141145_linearRegressionSquaredLossMatrix)
and the [differential of the expression with respect to our parameter vector](202102012111_linearRegressionGradientDescentDerivation),
we can derive an exact solution in matrix form.

$$
\frac{\partial J}{\partial \mathbf{w}} = \frac{2}{N} \mathrm{X}^T \big( \mathrm{X} \mathbf{w} - \mathbf{y} \big)
$$

Taking a second derivative, [using vector calculus identities](202101161942_vectorCalculusResults) we get
$$
\frac{\partial^2 J}{\partial \mathbf{w}^2} = \frac{2}{N} \mathrm{X}^T \mathrm{X}
$$

Which is a [positive semi definite matrix](202101091703_positiveDefiniteMatrix). This means the [Hessian](202111060003_HessianMatrix) is positive 
semi definite [which implies the problem is convex](202111061115_ConvexEquivalentPositiveSemiDefinite) and [thus has a unique global minimum](202111061045_ConvexFunction).

Setting our first derivate expression to zero and assuming $\mathrm{X}^T \mathrm{X}$ is [invertible](202102081851_invertibleMap) we get
$$
\hat{\mathbf{w}} = (\mathrm{X}^T \mathrm{X} )^{-1} \mathrm{X}^T \mathbf{y}
$$

This is the solution, the weights vector which minimises the empirical squared loss of our model.

Links: 

References: 

