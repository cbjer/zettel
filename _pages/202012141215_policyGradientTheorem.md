---
title: Policy Gradient Theorem
permalink: /zettel/202012141215_policyGradientTheorem
layout: page
tags: gradient

---
# Policy Gradient Theorem

The policy gradient theorem gives us a way to evaluate the gradient
of the performance measure as is used in [policy gradient methods](202012141139_policyGradientMethods).

$$
\begin{aligned}
\nabla J(\boldsymbol{\theta}) &\propto \sum_s \mu(s) \sum_a q_{\pi}(s,a) \nabla \pi (a|s, \boldsymbol{\theta}) \\
&= \mathbf{E}_{\pi} \big[ \sum_{a} q_{\pi}(S_t,a) \nabla \pi (a | S_t, \boldsymbol{\theta}) \big]
\end{aligned}
$$

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

