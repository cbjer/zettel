---
title: Gradient Descent Update
permalink: /zettel/202103282312_gradientDescentUpdate
layout: page
tags: optimisation

---
# Gradient Descent Update

Gradient descent is an optimisation method to minimise some objective function $J(\theta)$ with
respect to parameters $\theta$. This is achieved by taking a step in parameter space in the direction of the most 
negative gradient. Intuitively, we head down in the direction of the steepest slope with the goal of 
reaching a global minimum.


$$
\theta_{t+1} \leftarrow \theta_{t} - \eta \cdot \nabla_{\theta} J(\theta_t)
$$

where $\eta$ is our step-size parameter.

<center><img src="https://blog.paperspace.com/content/images/2018/05/fastlr.png"
     alt="Gradient Descent Image"
     class="center"
     style="width: 400px;" /></center>
     
Standard gradient descent or "batch gradient descent" will compute the derivative for the entire
training set.

Alternatives include:
- [Stochastic Gradient Descent](202104051024_stochasticGradientDescent)
- Mini-batch Gradient Descent

Gradient Descent Algorithms used particularly for the optimisation of neural networks include:
- Momentum
- Nesterov accelerated gradient
- Adagrad
- RMSProp
- AdaMax
- Nadam
- AMSGrad


Links: 

References: [Optimising Gradient Descent Article](https://ruder.io/optimizing-gradient-descent/) [Intro to Optimisation](https://blog.paperspace.com/intro-to-optimization-in-deep-learning-gradient-descent/)

[Return to Index](index)