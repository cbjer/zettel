---
title: Decision-time Planning
permalink: /zettel/202012022346_decisionTimePlanning
layout: page
tags: search planning

---
# Decision-time Planning

Decision-time planning is an alternative form of [planning](202012012357_rlPlanning), to the types used 
in algorithms such as [Dyna-Q](202012020018_tabularDynaQ), which is sometimes 
called "background planning". In decision time planning, we instead rather than focussing
on improving the value function through sampled experience from the model for all state-action
pairs, instead it focuses on the selection of the subsequent action in the state currently in. 

Planning of this type is used in Chess for example, where we explore many trajectories ahead 
before selecting the next action.

Examples of these are [heuristic search](TODOs), [rollout algorithms](202012031744_rolloutAlgorithm) and
[Monte Carlo Tree Search](202012032005_monteCarloTreeSearch).

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

