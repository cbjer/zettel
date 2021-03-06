---
title: Off-Policy Monte Carlo Prediction
permalink: /zettel/202011301626_offPolicyMCPrediction
layout: page
tags: evaluation target importance

---
# Off-Policy Monte Carlo Prediction

[Off-policy method](202011301312_offPolicyMethods) used for policy evaluation, where we aim to find the action-value function for 
a given policy.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/OffPolicyMCPredictionQ.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Off-Policy MC Prediction </figcaption>     
</figure>

Here are taking advantage of the [importance sampling ratio](202101102040_importanceSampling) in order to weight 
relative to how likely our target policy $\pi$ would have also taken such an action.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

