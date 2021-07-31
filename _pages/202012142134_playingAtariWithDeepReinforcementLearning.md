---
title: Playing Atari with Deep Reinforcment Learning
permalink: /zettel/202012142134_playingAtariWithDeepReinforcementLearning
layout: page
tags: learning reinforcementlearning

---
# Playing Atari with Deep Reinforcment Learning

Paper authored by Mnih et al, 2013.

- Breakthrough for reinforcement learning, allowing an agent to learn without the 
reliance on human-picked features, but simply from the raw pixel input
- Was able to perform very well on a high number of games using the same initial setup and hyperparameter selection. Each game 
  is still trained individually though.
- Makes use of the [semi-gradient form of Q-learning](202012052205_episodicSemiGradientSarsa) (replace epsilon greedy by a max) 
- Made heavy use of [experience replay](TODOs), which basically adds tuples $(S_t, A_t, R_{t+1}, S_{t+1})$ to a buffer, which we then 
  sample from uniformly at random to learn from. This breaks the high amounts correlation between subsequent steps, which is required for the usual
  supervised learning setup. 
- Made use of an deep architecture composing of 3 hidden [convolutional layers](TODOs) with [ReLU](TODOs) activation functions and a 
  final fully connected layer. 
- Provided normalisation of scoring between games, simply giving +1 reward if the game score increased, and -1 if it decreased. This 
  avoids scale issues of the different game scores when selecting hyperparameters.
- Technique of freezing weights in the target [Q-learning](202011302128_qLearning) update for a fixed number of steps to stop 
- Also clipped the [TD-error term](202011302057_TDError) to be in the interval $[-1,1]$
- Also used [RMSProp](TODOs), a form of gradient ascent which adjusts the step size parameter by the magnitude of recent gradients.
  

Links: [Arxiv Paper](https://arxiv.org/pdf/1312.5602.pdf)

References:

[Return to Index](index)