---
title: Policy Gradient Methods
permalink: /zettel/202012141139_policyGradientMethods
layout: page
tags: control direct

---
# Policy Gradient Methods

Policy Gradient Methods are a class of methods which directly learn 
a [policy](202011242107_rlPolicy), rather than determining the policy through a 
[value function](202011221845_valueFunctions) as is seen in [greedy policy improvement](202011292245_greedyPolicy).

We will usually have a differentiable, parameterised policy function $\pi(a|s, \boldsymbol{\theta})$, 
where the policy parameter vector $\boldsymbol{\theta}$ is what we are looking to optimise. 

This optimisation is achieved through [gradient ascent](TODOs) in the policy parameter space, with 
$J(\boldsymbol{\theta})$ representing some performance measure we are looking to maximise. 

$$
\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_{t} + \alpha \nabla J(\boldsymbol{\theta}_{t})
$$

A common parameterised policy form would be [soft-max in action preferences](202012141156_softmaxActionPreferences)

Advantages of policy paramaterisation include placing prior knowledge into the problem and sometimes
easier to directly learn a policy than to learn a value function. They also naturally extend to continuous 
action spaces.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)