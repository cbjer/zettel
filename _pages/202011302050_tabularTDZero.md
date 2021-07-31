---
title: Tabular TD(0)
permalink: /zettel/202011302050_tabularTDZero
layout: page
---
tags: #bootstrap #temporaldifference #prediction

# Tabular TD(0)

Tabular TD(0) is a method of [prediction](TODOs) for estimating $v_{\pi}$ for a given [policy](202011242107_rlPolicy) 
$\pi$. The method is form of [bootstrapping](TODOs), where we update our current estimate of the 
value function by the difference between our updated estimate of the return, having observed 
one step with the reward $R$. This direction is called the [TD Error](202011302057_TDError).

<figure>
  <img src="/zettel/Images/ReinforcementLearning/TabularTDZeroV.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Tabular TD(0) </figcaption>     
</figure>

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)