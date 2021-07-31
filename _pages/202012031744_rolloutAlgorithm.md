---
title: Rollout Algorithms
permalink: /zettel/202012031744_rolloutAlgorithm
layout: page
---
tags: #search #control #mc

# Rollout Algorithms

A rollout algorithm is a form of [decision time planning](202012022346_decisionTimePlanning), whereby 
we aim to select the best action for the current state. The rollout algorithm 
works by trying each of the possible actions and then following the existing [policy](202011242107_rlPolicy)
thereafter. We then average the returns of the simulated trajectories to estimate the value 
of taking each action. We then select the action with the highest value and apply the process again at the next
state. The aim is to improve the rollout policy, the policy being followed after each action, not to find 
a globally optimal policy.

By the [policy improvement theorem](202011292146_policyImprovement), the process is guaranteed 
to find an improved policy to the existing rollout policy. 

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)