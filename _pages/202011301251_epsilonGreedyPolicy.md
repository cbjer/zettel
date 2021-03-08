---
title: Zettels
permalink: /zettel/202011301251_epsilonGreedyPolicy
layout: default
---
tags: #exploration #soft-policy

# Epsilon Greedy Policy

An $\epsilon$-greedy policy is one which takes the greedy action (corresponding with highest 
state-action value) with probability $ 1 - \epsilon$ and selects uniformally randomly from 
all actions with probability $\epsilon$.

This allows us to act optimally the majority of the time while maintaining [exploration](TODO).

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)