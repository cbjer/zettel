---
title: Zettels
permalink: /zettel/202011302147_expectedSarsa
layout: default
---
tags: #smoothening #update #expectation

# Expected Sarsa

Expected Sarsa is an alternative [off-policy](202011301312_offPolicyMethods) update step to those found in [Sarsa](202011302117_sarsa) and 
[Q-Learning](202011302128_qLearning), changing the state-action value of the 
subsequent action to be an expecation rather than a sample/max from the state-action 
value function.

$$
\begin{aligned}
Q(S_t, A_t) & \leftarrow Q(S_t, A_t) + \alpha \big[ R_{t+1} + \gamma \mathrm{E}_{\pi} [ Q_(S_{t+1}, A_{t+1}) | S_{t+1} ] - Q(S_t, A_t) \big] \\
& \leftarrow Q(S_t, A_t) + \alpha \big[ R_{t+1} + \gamma \sum_a \pi(a | S_{t+1}) Q(S_{t+1}, a) - Q(S_t, A_t) \big]
\end{aligned}
$$

We say that expected Sarsa subsumes and generalises Q-Learning while reliably improving over Sarsa.


Links: [Sarsa](202011302117_sarsa)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)