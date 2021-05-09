---
title: Zettels
permalink: /zettel/202012141337_derivationPolicyGradientUpdates
layout: default
---
tags: #update #expectation

# Derivation of Policy Gradient Updates

Substituting in the result of the [policy gradient theorem](202012141215_policyGradientTheorem) into 
the [gradient ascent update](202012141139_policyGradientMethods) we get.

$$
\begin{aligned}
\nabla J(\boldsymbol{\theta}) &= \mathbf{E}_{\pi} \big[ \sum_a \pi(a| S_t, \boldsymbol{\theta}) q_{\pi} (S_t, a) \frac{\nabla \pi (a| S_t, \boldsymbol{\theta})}{\pi (a | S_t, \boldsymbol{\theta})} \big] \\
&= \mathbf{E} \big[ q_{\pi}(S_t, A_t) \frac{ \nabla \pi (A_t | S_t, \boldsymbol{\theta})}{\pi (A_t| S_t, \boldsymbol{\theta})} \big] \quad \textrm{bringing actions into our expectation} \\
&= \mathbf{E} \big[ G_t \frac{ \nabla \pi (A_t | S_t, \boldsymbol{\theta})}{\pi (A_t| S_t, \boldsymbol{\theta})} \big] \quad \textrm{Definition of q as always conditional on current S and A} \\
&= \mathbf{E} \big[ G_t \nabla \log \pi (A_t| S_t, \boldsymbol{\theta}) \big] \quad \textrm{Using grad of log identity}
\end{aligned}
$$

If we instead turn this into a [stochastic gradient ascent update](202104051024_stochasticGradientDescent) then we remove 
the expectation as are taking a sample from the true gradient.

We can also add a function not dependent on $a$ as a baseline, as is used in [REINFORCE with Baseline](202012121514_reinforceWithBaseline). 
This is commonly chosen to be an estimate of the value function as is used in [actor-critic methods](202012141327_actorCriticMethods). Our 
update would then be:

$$
\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_{t} + \alpha \big( G_t - \hat{v}(S_t, \mathbf{w}) \big) \nabla \log \pi (A_t | S_t, \boldsymbol{\theta})
$$

The return $G_t$ can also be substituted for one-step returns to get [temporal-difference](202011302050_tabularTDZero) based methods.


Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)