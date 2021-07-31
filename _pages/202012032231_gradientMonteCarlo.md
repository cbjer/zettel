---
title: Gradient Monte Carlo
permalink: /zettel/202012032231_gradientMonteCarlo
layout: page
tags: simulations episodes prediction
---
# Gradient Monte Carlo

Gradient Monte Carlo makes use of the [stochastic gradient descent based update](202012032217_sgdValueFunction) 
and is an evaluation method for estimating the value function $v_{\pi}$ for a given 
policy.

The episode [return](202011221815_returnsRL) is used as an estimate for the true 
value function at $S_t$. The gradient update means our weights vector from 
our [functional approximator](TODOs) to the [value function](202011221845_valueFunctions) is 
being moved slightly in the direction which reduces the error between our 
previous estimated value and our sampled value $G_t$.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/GradientMCV.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Gradient Monte Carlo </figcaption>     
</figure>

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)