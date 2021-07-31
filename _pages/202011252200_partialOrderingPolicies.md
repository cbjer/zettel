---
title: Partial Ordering of Policies
permalink: /zettel/202011252200_partialOrderingPolicies
layout: page
tags: optimal behaviour
---
# Partial Ordering of Policies

We can define a partial ordering over [policies](202011242107_rlPolicy) by

$$
\pi' \leq \pi \Longleftrightarrow V_{\pi'} (s) \leq V_{\pi}(s) \quad \forall s \in S
$$

This is saying one policy is better than another policy if the expected return starting in a given 
state $s$ and following policy $\pi$ is higher than the expected return from following policy $\pi'$, 
**for all** choice of states $s$.

This means there may be policies that are not comparable. For example a two state 
problem, where each state has the choice of a reward or none and the episode terminates. The 2 policies 
which choose the high reward action in one state but not the other, are not comparable under the partial 
ordering definition above. 

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)