---
title: Iterative Policy Evaluation for Estimating Value Function
permalink: /zettel/202011291938_iterativePolicyEvaluation
layout: page
tags: iterations algorithms
---
# Iterative Policy Evaluation for Estimating Value Function

Say we have a policy $\pi$ that we want to evaluate its value function. We 
can use the [bellman expecation equation for value functions](202011222150_bellmanEquationStateValues) 
as an iterative update.

<figure><img src="/zettel/Images/ReinforcementLearning/iterativePolicyEvaluation.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Iterative Policy Evaluation </figcaption>     
</figure>

Note we use an updated value function before finishing the batch of states. This 
allows for faster convergence.

The intuition for the algorithm is applying the [bellman equation](202011222150_bellmanEquationStateValues) as 
an update and looping through all states to apply the corresponding update to. We 
then end the algorithm when we have reached convergence (corresponding to a change smaller) 
than $\theta$. 

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto (page 75)

[Return to Index](index)