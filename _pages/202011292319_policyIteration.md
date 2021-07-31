---
title: Policy Iteration
permalink: /zettel/202011292319_policyIteration
layout: page
tags: iterative improvement algorithm
---
# Policy Iteration

Idea behind policy iteration is to repeatedly apply [policy evaluation](202011291938_iterativePolicyEvaluation) 
and then [greedy policy improvement](202011292245_greedyPolicy) to create a sequence 
of monotonically improving policies and value functions.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/PolicyIteration.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Policy Iteration </figcaption>     
</figure>

One problem faced is that policy evaluation can be computationally expensive, since 
we are looping until convergence. Changing the algorithm to only apply one loop of 
policy evaluation results in [value iteration](202011292335_valueIteration).

Links: []

References: Introduction to Reinforment Learning - Sutton and Barto

[Return to Index](index)