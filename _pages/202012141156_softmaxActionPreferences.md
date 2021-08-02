---
title: Softmax in Action Preferences
permalink: /zettel/202012141156_softmaxActionPreferences
layout: page
tags: policy

---
# Softmax in Action Preferences

Common parameterisation of the [policy](202011242107_rlPolicy) for [policy gradient methods](202012141139_policyGradientMethods)
is in the form of a [softmax distribution](TODOs).

$$
\pi(a|s,\boldsymbol{\theta}) = \frac{e^{h(s,a,\boldsymbol{\theta})}}{\sum_b e^{h(s, b, \boldsymbol{\theta})}}
$$

where $h(s, a, \boldsymbol{\theta})$ is a function denoting representing preference to take 
action $a$ in a state $s$. This preference function can take the form of a [neural network](TODOs) 
or a simple linear function in [features](TODOs):

$$
h(s, a, \boldsymbol{\theta}) = \boldsymbol{\theta}^T \mathbf{x}(s,a)
$$

Advantages of a soft-max form is that all actions will have non-zero probability of being 
taken, but can still tend to deterministic policy in the limit. This allows for [exploration](TODOs) 
to occur.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

