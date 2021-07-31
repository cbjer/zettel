---
title: Prioritized Sweeping
permalink: /zettel/202012022123_prioritizedSweeping
layout: page
---
tags: #focus #update

# Prioritized Sweeping

In Prioritized Sweeping, the idea is to improve over the [Dyna-Q](202012020018_tabularDynaQ) method 
which samples uniformly from the previously experienced state-action pairs when running 
the [planning](202012012357_rlPlanning) process. Instead here, the aim is to 
prioritise the updates according to some measure of urgency. 

This is achieved by maintaining a queue structure, which keeps track of 
which state-action pairs would change drastically in value if the sampled 
state action pair were to change.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/PrioritizedSweepingDeterministic.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Prioritised Sweeping Algorithm </figcaption>     
</figure>

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)