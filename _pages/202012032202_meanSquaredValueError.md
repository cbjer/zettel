---
title: Mean Squared Value Error
permalink: /zettel/202012032202_meanSquaredValueError
layout: page
---
tags: #error #update #loss

# Mean Squared Value Error

Using functional approximations for reinforcement learning, the mean squared value error 
is a measure of how far our functional approximation to the value function is 
from the true value function. 

$$
\overline{\mathrm{VE}}(\mathbf{w}) := \sum_s \mu (s) \big[ v_{\pi}(s) - \hat{v}(s, \mathbf{w}) \big]^2
$$

Where $\mu(s)$ is a distribution on states describing how much we care about the error
for the given state. Often this is the percentage time spent in that state. 

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)