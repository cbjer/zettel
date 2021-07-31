---
title: Value Function
permalink: /zettel/202011221845_valueFunctions
layout: page
---
tags: #reinforcementlearning #returns \

# Value Function

The value function of a state $s$ under a [policy](202011242107_rlPolicy) $\pi$, $ V_{\pi}(s) $, is your expected [return](202011221815_returnsRL) from 
starting in state $s$ and following policy $\pi$ thereafter.

$$
\begin{aligned}
V_{\pi}(s) &:= \mathbf{E}_{\pi} \big[ G_t | S_t  = s \big] \\
&= \mathbf{E}_{\pi} \big[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} | S_t = s \big]
\end{aligned}
$$

We sometimes refer to $V_{\pi}$ as the state value function for [policy](202011242107_rlPolicy) $\pi$ to distinguish it from the [action-value function](202011221903_actionValueFunction)

Links: [State-Action value function](202011221903_actionValueFunction)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)