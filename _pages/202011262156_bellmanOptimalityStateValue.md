---
title: Bellman Optimality Equation For State Values
permalink: /zettel/202011262156_bellmanOptimalityStateValue
layout: page
tags: optimality onestep
---
# Bellman Optimality Equation For State Values

Using our previous [relationship between state-action and state value functions](202011262125_stateActionTostatevalue) 
and the definitions of [optimal value functions](202011262033_optimalValueFunctions), 
we can easily show a 1-step relation for optimality.

$$
\begin{aligned}
V_{*}(s) &= \max_{a} q_{*}(s, a) \\
V_{*}(s) &= \max_{a} \big( R_{s}^{a} + \gamma \sum_{s'} P_{s,s'}^{a} V_{*}(s') \big) \quad \textbf{Bellman Optimality Equation for State Values}
\end{aligned}
$$

Intuitively, to get the optimal value for a given state, we look at the action which would give us the highest expected 
return starting in this state. We do this by looking over all states the action could lead us to, and take the expected 
reward from going into this new state plus the optimal value that can extracted from then onwards. 

<center><img src="https://miro.medium.com/max/1058/1*6YVaMjuJV2IuZb6y_Zpo2w.png"
     alt="Bellman Optimality Diagram"
     class="center"
     style="width: 400px;" /></center>

Links: [Bellman Optimality Equation for State-action Values](202011291755_bellmanOptimalityStateActionValue)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)