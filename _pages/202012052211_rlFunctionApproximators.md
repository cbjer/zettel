---
title: Function Approximators 
permalink: /zettel/202012052211_rlFunctionApproximators
layout: page
---
tags: #value #actionvalue

# Function Approximators 

Domains with large numbers of states / state-action pairs can no longer be 
approached via a tabula method where we keep track of a value of each state / state-action, 
for example in [regular TD(0)](202011302050_tabularTDZero) or [regular Sarsa](202011302117_sarsa).

This brings forward the approach of function approximators, to approximate
the true value $V_{\pi}(s)$ or action-value $q_{\pi}(s,a)$ functions with a 
class of function requiring much fewer paramaters to fit. This parameter vector 
we denote as $\mathbf{w}$. We commonly therefore denote our value function 
approximators as

$$
\begin{aligned}
\hat{v}(s, \mathbf{w}) &\approx v_{\pi}(s) \quad \textrm{for evaluation case} \\
\hat{q}(s, a, \mathbf{w}) &\approx q_{\pi}(s, a) \quad \textrm{for control case} 
\end{aligned}
$$

We often look for differentiable families of approximators to allow for
[stochastic gradient descent based methods](202012032217_sgdValueFunction).

Examples of approximators include [linear functions](202012032318_linearValueFunctionApproximator), 
[neural networks](TODOs) and ...

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)