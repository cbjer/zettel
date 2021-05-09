---
title: Zettels
permalink: /zettel/202104051024_stochasticGradientDescent
layout: default
---
tags: #optimisation

# Stochastic Gradient Descent

**Stochastic gradient descent** is a form of [gradient descent](202103282312_gradientDescentUpdate) which rather
than performing an update with respect to the derivative of the entire dataset, performs an update
for each training example in the dataset. 

Our loss function will typically have the form of:
$$
J(\theta) = \frac{1}{N} \sum_{i=1}^N J_i(\theta \vert x_i, y_i )
$$

Our stochastic gradient descent update will then be:
$$
\theta_{t+1} \leftarrow \theta_t - \eta \nabla_{\theta} J_i (\theta_t \vert x_i, y_i )
$$

We will sweep through the training set performing this iterative update. After each loop or 
**epoch**, we will shuffle the order of the training set for the next loop.

Again, we are updating using only 1 piece of data at a time, and this piece of data is chosen randomly.

Links: 

References: 

[Return to Index](index)