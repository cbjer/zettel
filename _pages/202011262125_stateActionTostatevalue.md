---
title: Zettels
permalink: /zettel/202011262125_stateActionTostatevalue
layout: default
---
tags: #recursive #expectation

# Expressing State-Action Value function in terms of State value function

We can express the [state-action value function](202011221903_actionValueFunction) $q_{\pi}(s, a)$ in terms of the [state value function](202011221845_valueFunctions) 
$V_{\pi}$ by using the [law of total expectation](202103141349_lawTotalExpectation), [recursive return relation](202011222109_recursiveReturns) 
and [markov property](202011242210_markovStates).

$$
\begin{aligned}
q_{\pi}(s, a) &:= \mathbf{E}_{\pi} [ G_t | S_t  = s, A_t = a] \\
&= \mathbf{E}_{\pi} [ R_{t+1} + \gamma G_{t+1} | S_t = s, A_t = a ] \\
&= \sum_{s'} \mathbf{E}_{\pi} [ R_{t+1} + \gamma G_{t+1} | S_t = s, A_t = a, S_{t+1} = s' ] P_{s, s'}^{a} \quad \textrm{using law of total expectation} \\
&= \sum_{s'} P_{s, s'}^{a} ( R_{s, s'}^{a} + \gamma \mathbf{E}_{\pi} [ G_{t+1} | S_{t+1} = s' ]) \quad \textrm{using markov property} \\
&= \sum_{s'} P_{s, s'}^{a} ( R_{s, s'}^{a} + \gamma V_{\pi}(s')) \\
q_{\pi}(s, a) &= R_{s}^{a} + \gamma \sum_{s'} P_{s, s'}^{a} V_{\pi}(s') \quad \textbf{State-Action value function to state value function} \\
\end{aligned}
$$

The intuition here is that the value of taking a given action in a given state is the expected 
reward from taking that action in that state plus the dicounted value of next state. Since 
we don't know which state we will end up in, this is weighted by the probability of ending up 
a state $s'$.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)