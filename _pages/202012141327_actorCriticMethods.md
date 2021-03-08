---
title: Zettels
permalink: /zettel/202012141327_actorCriticMethods
layout: default
---
tags: #control #simultaneous

# Actor-Critic Methods

In Actor-Critic methods we have two components. A Critic which is estimating the value of a 
state / state-action with a value function and is performing a usual value based method
to improve the evaluation of the state. The Actor is then an update improving the policy 
in the direction suggested by the critic. 

Links: [One-step Actor Critic](202012121514_oneStepActorCritic), [Actor-critic with eligibility traces - Episodic](202012121515_actorCriticEligibilityTracesEpisodic),
[Actor-critic with eligibility traces - Continuing](202012121516_actorCriticEligibilityTracesContinuing)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)