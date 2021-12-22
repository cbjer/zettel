---
title: Softmax Function
permalink: /zettel/202112161920_SoftmaxFunction
layout: page
tags: 

---
# Softmax Function

Generally used in classification problems to create probabilities of belonging to each class. Very commonly used as the final piece in a neural network.

Say we have $K$ numerical outputs $[t_1, t_2, \ldots, t_K]$, then these are 'normalised' to be represent probabilities by taking for each:
$$
p_k = \frac{e^{t_k}}{\sum_{i=1}^K e^{t_i}}
$$

Gives us a vector of positive values summing to 1. 

Links: 

References: 

