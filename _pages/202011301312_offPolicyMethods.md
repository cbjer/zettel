---
title: Off-Policy Methods
permalink: /zettel/202011301312_offPolicyMethods
layout: page
tags: control decisions

---
# Off-Policy Methods

Off-Policy methods are those where the policy being evaluated or improved 
is different to the policy we are sampling from in order to make decisions.

In the off-policy approach, we typically have two policies; the **target policy** $\pi$ which 
is learned about and becomes the optimal policy and the **behaviour policy** $b$ which 
is exploratory and is used to generate behaviour. 

We say that $b$ has coverage of $\pi$ if any action taken by $\pi$ is atleast occasionally taken by 
$b$. That is that $\pi(a|s) > 0 \Rightarrow b(a|s) > 0$.

This is in contrast to [On-Policy methods](202011301310_onPolicyMethods).

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)