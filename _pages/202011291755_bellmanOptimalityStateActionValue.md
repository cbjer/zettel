---
title: Bellman Optimality Equation for the State-Action Value Function 
permalink: /zettel/202011291755_bellmanOptimalityStateActionValue
layout: page
---
tags: #optimality #bellman #onestep

# Bellman Optimality Equation for the State-Action Value Function 

Using the previous relationship converting a [state-action value function to a state value function](202011262125_stateActionTostatevalue) 
and the definition of [optimal value functions](202011262033_optimalValueFunctions), we can show 
the following 1-step relation for optimality.

$$
\begin{aligned}
q_{*}(s,a) &= R_{s}^{a} + \gamma \sum_{s'} P_{s, s'}^{a} V_{*}(s') \\
q_{*}(s,a) &= R_{s}^{a} + \gamma \sum_{s'} P_{s,s'}^{a} \max_{a'} q_{*}(s', a') \quad \textbf{Bellman Optimality Equation for State-Action Values}
\end{aligned}
$$

Intuitively, assuming we are following an optimal policy, the value of being in state $s$ 
and taking action $a$ are the expected reward from such action plus the value from acting 
optimally in the next state, weighted by the probability of ending up in such a state.

<center><img src="https://miro.medium.com/max/1056/1*2bMhBw2bc4pcvETmIQ-NFQ.png"
     alt="Bellman Optimality Diagram"
     class="center"
     style="width: 400px;" /></center>

Links: [Bellman Optimality Equation for State Value Function](202011262156_bellmanOptimalityStateValue)

References: []

[Return to Index](index)