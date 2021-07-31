---
title: Double Q-Learning
permalink: /zettel/202011302204_doubleQLearning
layout: page
tags: alternate algorithm
---
# Double Q-Learning

A tweaked version of [Q-Learning](202011302128_qLearning) involving 
two action-value estimates $Q_1(s,a)$ and $Q_2(s,a)$. The 
introduction of these two state-action value estimates appears 
to reduce the effect of [maximisation bias](202011302212_maximisationBias).

<figure>
  <img src="/zettel/Images/ReinforcementLearning/DoubleQLearningQ.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Double Q-Learning </figcaption>     
</figure>

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)