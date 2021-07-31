---
title: First Visit Monte Carlo Prediction
permalink: /zettel/202011301143_firstVisitMonteCarloPrediction
layout: page
tags: sampling evaluation episodic algorithm
---
# First Visit Monte Carlo Prediction

Monte Carlo Prediction is a technique used to estimate the [value function](202011221845_valueFunctions) 
for a given [policy](202011242107_rlPolicy) via [sampling](TODOs) techniques. 

<figure>
  <img src="/zettel/Images/ReinforcementLearning/FirstVisitMCPrediction.png"
     alt="First Visit MC Prediction"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> First Visit MC Prediction </figcaption>     
</figure>

Intuitively, we are generating episodes which have a terminal point, and working 
backwards, calculating the return from that state onwards. In the first-visit setup, we 
check if this step is the first time we have visited this state. If yes, then we add the return 
to our list keeping track of sampled returns. Our estimate for the value of a given state is then 
the average of our sampled returns which started in that state. 

A very simple tweak, removing the need for it to be the first-visit, gets us the **every-visit variation**, with 
both variations converging to $V_{\pi}(s)$.

To see convergence, note each return is an [i.i.d](202012241510_sampleDefinition) estimate of $V_{\pi}(s)$ with finite [variance](TODOs). 
Then by the [law of large numbers](TODOs), the sequence of these estimates converges to its expected value. Each 
average is an [unbiased estimate](TODOs) and the [standard deviation](TODOs) of its error falls as $\frac{1}{\sqrt{n}}$.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)