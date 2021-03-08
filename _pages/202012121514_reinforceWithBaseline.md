---
title: Zettels
permalink: /zettel/202012121514_reinforceWithBaseline
layout: default
---
tags: #gradient #montecarlo

# REINFORCE with Baseline

We can add a baseline (a function not depending on actions) into our 
[policy gradient theorem](202012141215_policyGradientTheorem) form without 
changing the result. This is used to reduce the variance in the standard
[REINFORCE](202012121511_reinforceAlgorithm) algorithm. 

The choice here is an estimate of the value of the state currently in. The algorithm is 
therefore learning a policy parameterised by $\boldsymbol{\theta}$ and a state-value function
parameterised by $\mathbf{w}$, with separate gradient methods applied. 

<figure>
  <img src="/zettel/Images/ReinforcementLearning/ReinforceBaselinePi.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> REINFORCE with Baseline </figcaption>     
</figure>

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)