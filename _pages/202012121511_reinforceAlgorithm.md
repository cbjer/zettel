---
title: Zettels
permalink: /zettel/202012121511_reinforceAlgorithm
layout: default
---
tags: #gradient

# REINFORCE Algorithm

The REINFORCE Algorithm is a [policy gradient method](202012141139_policyGradientMethods) 
which uses a [stochastic gradient ascent](TODO) based update to find optimal 
policy parameters for our parameterised policy. The update makes use of the 
[policy gradient theorem](202012141215_policyGradientTheorem).

<figure>
  <img src="/zettel/Images/ReinforcementLearning/ReinforceMCPolicyGradientControlPi.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> REINFORCE: Monte-Carlo Policy Gradient Control </figcaption>     
</figure>

This and the adapted [REINFORCE with Baseline](202012121514_reinforceWithBaseline) are Monte-Carlo methods
with a [forward-view](202012061733_forwardViewVsBackwardView) using the full observed
return. They generally suffer from high variance and slow convergence.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)