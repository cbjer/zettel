---
title: Value Iteration
permalink: /zettel/202011292335_valueIteration
layout: page
---
tags: #update #algorithm #improvement

# Value Iteration

Value iteration is very similiar to [policy iteration](202011292319_policyIteration) 
except that we apply only one sweep of [policy evaluation](202011291938_iterativePolicyEvaluation), 
rather than waiting for convergence.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/ValueIteration.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Value Iteration </figcaption>     
</figure>

We can also see value iteration as converting the [bellman optimality equation](202011262156_bellmanOptimalityStateValue) 
into an update step.

$$
V_{k+1}(s) = \max_{a} \big( R_{s}^{a} + \gamma \sum_{s'} P_{s,s'}^{a} V_{k}(s') \big)
$$

Note that value iteration is not always faster than policy iteration. Can have algorithms which do multiple evaluation 
sweeps before applying the improvement step. Value iteration is the extreme in that we don't even wait a full sweep before using the updated 
value function. We use the new one in the very next step. 

Links: [Policy Iteration](202011292319_policyIteration)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)