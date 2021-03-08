---
title: Zettels
permalink: /zettel/202012221004_upperConfidenceBoundExploration
layout: default
---
tags: #greedy #exploration

# Upper Confidence Bound Exploration

UCB or Upper Confidence Bounds are a method to be used to ensure short term exploration 
with long term greedy choices. The method works by assigning an upper confidence bound $U_t(a)$ to 
each action, which represents a confidence interval of the action value over the current stored action value (Q-value).
The method makes use of [Hoeffding's Inquality](TODO) to give us a bound on $U_t(a)$. (This version for [Bandit problems](TODO)).

The method works by by always selecting the action greedy with respect to each actions action value + upper confidence bound.

$$
a_t = \arg \max_a \big( Q(a) + \sqrt{\frac{\strut 2 \log t}{N_t(a)}} \big)
$$

where $N_t(a)$ is a count of times used this action. 

Links: []

References: David Silver UCL RL Lecture 9

[Return to Index](index)