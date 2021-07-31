---
title: Implementing Deep Q-Learning
permalink: /zettel/202012202112_implementingDeepQLearning
layout: page
---
tags: #control #mnih

# Implementing Deep Q-Learning

We implemented a basic Deep Q-Network and some implementation ideas were:

**Experience Replay** we used a Deque structure from the Collections module, which holds a finite number of experience tuples.
Our experience tuples were made up of $(S_t, A_t, R_{t+1}, \delta_{\textrm{done?}}, S_{t+1})$.

We used an [epsilon-greedy](202011301251_epsilonGreedyPolicy) action-selection structure, with a decreasing epsilon schedule. 

To train our network, we waited until our experience replay contained enough experience, and then sampled in batches and trained once we 
had completed an episode. To train the network, we use the following as targets and inputs:
$$
\begin{aligned}
y &= R_{t+1} + \gamma \max_a Q_{\textrm{target}}(S_{t+1}, a) \\
f(x) &= Q_{\textrm{current}}(S_t, A_t)
\end{aligned}
$$
where here our targets use the [q-learning](202011302128_qLearning) update.

The weights from the current network (actual function used for control) were copied to the target network after a certain number of steps. 

We used pytorch to implement the Deep-learning feature. We used a network class which inherited from the torch.nn.Module class.
Here we had to implement the forward function. A key point was the use of torch.no_grad() to ensure the gradients from the autograd process 
did not flow to areas they shouldnt. 

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)