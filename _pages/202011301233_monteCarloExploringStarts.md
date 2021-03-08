---
title: Zettels
permalink: /zettel/202011301233_monteCarloExploringStarts
layout: default
---
tags: #algorithm #sampling #control

# Monte Carlo with Exploring Starts

Although [First Visit Monte Carlo Prediction](202011301143_firstVisitMonteCarloPrediction) allows us to 
evaluate the value function for a given policy, it does not allow us 
to evaluate the [state-action value function](202011221903_actionValueFunction) as we 
would need to know about the environment's dynamics in order to perform 
a [one-step lookahead](202011262125_stateActionTostatevalue).

Monte Carlo with exploring starts allows us to estimate the state-action value 
function by sampling returns for specific state-action pairs. We choose an initial state 
$S_0$ and action $A_0$ randomly such that selecting all legal pairs has probability $> 0$. We 
then follow the policy to create and episode. Again we look at the first-visit to a specific 
state-action pair in order to add it to our sampled returns list.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/MCExploringStarts.png"
     alt="Monte Carlo Exploring Starts"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Monte Carlo with Exploring Starts </figcaption>     
</figure>

We see the policy is improved at each step by updating our policy to choose the action 
with the highest state-action value.

The [exploration](TODO) component is only introduced here via the choice of initial state-action pair.

[]

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)