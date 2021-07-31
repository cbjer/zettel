---
title: Off-Policy Monte Carlo Control
permalink: /zettel/202011301638_offPolicyMCControl
layout: page
tags: algorithm importance target

---
# Off-Policy Monte Carlo Control

[Off-policy](202011301312_offPolicyMethods) method for estimating the optimal value function.
Makes use of [importance sampling ratio](202101102040_importanceSampling).

<figure>
  <img src="/zettel/Images/ReinforcementLearning/OffPolicyMCControlPi.png"
     alt="Off Policy MC Control"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Off-policy MC Control </figcaption>     
</figure>

Findings from implementing the ideas in Python, this algorithm can be extremely slow to 
converge as the condition that $A_t \neq \pi(S_t)$ often leads to a break from the loop and therefore 
information is very slow to travel backwards.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)