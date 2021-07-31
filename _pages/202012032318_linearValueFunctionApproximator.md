---
title: Linear Value Function Approximator
permalink: /zettel/202012032318_linearValueFunctionApproximator
layout: page
tags: simple approximation

---
# Linear Value Function Approximator

A very simple case of [value function approximation](TODOs) is that of using a linear function.

$$
\hat{v}(s, \mathbf{w}) := \mathbf{w}^T \mathbf{x}(s) := \sum_{i=1}^{d} w_i x_i(s) 
$$

Where $\mathbf{x}(s)$ is a feature vector function for the state $s$, ie 
mapping each state $s$ to some numerical features describing s.

Since the gradient of this simple linear form is $\mathbf{x}(s)$, we have the weights update as

$$
\mathbf{w}_{t+1} = \mathbf{w}_t + \alpha \big[ U_t - \mathbf{w}^T \mathbf{x}(s) \big] \mathbf{x}(s)
$$

Where $U_t$ is our better estimate for the value of state $S_t$. Methods of [encoding our state space](202012041222_featureVectorStates) using 
the feature vectors $\mathbf{x}(s)$ include 

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)