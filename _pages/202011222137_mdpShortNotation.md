---
title: Markov Decision Process Short-hand notation
permalink: /zettel/202011222137_mdpShortNotation
layout: page
tags: markov bellman mdp

---
# Markov Decision Process Short-hand notation

We occasionally use the following short hand notation, especially in the derivation of the [bellman equations](202011222150_bellmanEquationStateValues).

$$
\begin{aligned}
P_{s, s'}^{a} &:= P ( S_{t+1} = s' | S_t = s, A_t = a) \\
R_{s, s'}^{a} &:= \mathbf{E} [ R_{t+1} | S_t = s, A_t = a, S_{t+1} = s' ] \\
R_{s}^{a} &:= \mathbf{E} [ R_{t+1} | S_t = s, A_t = a ] 
\end{aligned}
$$

Links: [Bellman equation for state-values](202011222150_bellmanEquationStateValues), [Bellman equation for state-action values](TODOs)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)