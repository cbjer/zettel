---
title: Double Deep Q-Learning
permalink: /zettel/202012202147_doubleDeepQLearning
layout: page
tags: maximisation implementation

---
# Double Deep Q-Learning

Modification to the standard [Deep Q-Learning](202012202112_implementingDeepQLearning) algorithm which 
reduces [maximisation-bias](202011302212_maximisationBias).

In our implementation version we used:
$$
y = R_{t+1} + \gamma Q_{\textrm{target}} \big( S_{t+1}, \arg \max_a Q_{\textrm{current}}(S_{t+1}, a) \big)
$$

Links: [Deep Reinforcement Learning with Double Q-Learning](https://arxiv.org/abs/1509.06461)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)