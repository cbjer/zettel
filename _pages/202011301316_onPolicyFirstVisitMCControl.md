---
title: On-Policy First Visit Monte Carlo Control
permalink: /zettel/202011301316_onPolicyFirstVisitMCControl
layout: page
---
tags: #control #exploration #epsilon

# On-Policy First Visit Monte Carlo Control

Very similiar to previous sampling based methods, except here we have added 
a [epsilon greedy policy](202011301251_epsilonGreedyPolicy) to maintain [exploration](TODOs).

<figure>
  <img src="/zettel/Images/ReinforcementLearning/OnPolicyFirstVisitMC.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> On Policy Fist Visit MC Control </figcaption>     
</figure>

Through this, we get an improvement at each step amongst $\epsilon$-soft policies.

Links: [Monte Carlo with Exploring Starts](202011301233_monteCarloExploringStarts)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)