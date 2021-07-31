---
title: Optimal Value Function
permalink: /zettel/202011262033_optimalValueFunctions
layout: page
---
tags: #optimality #definition 

# Optimal Value Function

For a [Markov Decision Process](TODOs), the **optimal state value function** 
is defined as value function which achieves the maximum expected return starting in all states. 
$$
V_{*} (s) := \max_{\pi} V_{\pi}(s)
$$
For example, for a given state $s$, we maximise over the space of [policies](202011242107_rlPolicy) 
to find the policy with the highest expected [return](202011221815_returnsRL) starting in 
this state. The value function under this policy is defined as the value for 
the optimal state-action value function at this state $s$.

Similiarly we can define the **optimal state-action value function** in the exact same way but for a given 
state-action pair. 
$$
q_{*} (s, a) := \max_{\pi} q_{\pi} (s, a)
$$

Links: [Bellman Optimality Equation for State Values](202011262156_bellmanOptimalityStateValue)

References: [Reinforcent Learning Markov Decision Process](https://towardsdatascience.com/reinforcement-learning-markov-decision-process-part-2-96837c936ec3)

[Return to Index](index)