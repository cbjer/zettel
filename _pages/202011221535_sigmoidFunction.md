---
title: Sigmoid Function
permalink: /zettel/202011221535_sigmoidFunction
layout: page
---
tags: #activationfunctions #logisticregression \

# Sigmoid Function

The sigmoid function is commonly used to map the real number line $(-\infty, \infty) \rightarrow (0, 1)$

By composing the output of another function with the Sigmoid function, we can take any real valued function and interpret it as a probability. 

This makes most sense when used with a monotonic increasing function.

$$\sigma(x) = \frac{1}{1 + e^{-x}}$$

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Logistic-curve.svg/1920px-Logistic-curve.svg.png"
     alt="Sigmoid function"
     style="width: 600px;" />
     
Useful identities for the Sigmoid function:
$$
1 - \sigma(x) = \sigma(-x) \\
\sigma'(x) = \sigma(x) \sigma(-x)
$$

Links: [Logistic Regression](202011221613_logisticRegression)

References: Hundred-Page Machine Learning Book - Andrey Burkov

[Return to Index](index)