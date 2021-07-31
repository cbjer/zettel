---
title: Bellman Equation for State-Values
permalink: /zettel/202011222150_bellmanEquationStateValues
layout: page
tags: bellman reinforcementlearning onestep

---
# Bellman Equation for State-Values

Using the definition of the [value function](202011221845_valueFunctions) and the 
[recursive return relationship](202011222109_recursiveReturns), we can do a 1-step look ahead in our [MDP](TODOs).

$$
\begin{aligned}
V_{\pi}(s) &= \mathbf{E}_{\pi} [ G_t | S_t = s ] \\
&= \mathbf{E}_{\pi} [R_{t+1} + \gamma G_{t+1} | S_t = s ] \quad \textrm{using recursive return relationship}\\
&= \sum_a \mathbf{E}_{\pi} [ R_{t+1} + \gamma G_{t+1} | S_t = s, A_t = a] \pi(a|s) \quad \textrm{conditioning on next action and definition of a policy} \\
&= \sum_a \pi(a|s) \sum_{s'} \mathbf{E}_{\pi} [ R_{t+1} + \gamma G_{t+1} | S_t = s, A_t = a, S_{t+1} = s' ] P_{s, s'}^{a} \quad \textrm{conditioning on s', the next state} \\
&= \sum_a \pi(a|s) \sum_{s'} P_{s, s'}^{a} ( R_{s,s'}^{a} + \gamma \mathbf{E}_{\pi} [ G_{t+1} | S_t = s, A_t = a, S_{t+1} = s' ]) \\
&= \sum_a \pi(a|s) \sum_{s'} P_{s, s'}^{a} ( R_{s,s'}^{a} + \gamma \mathbf{E}_{\pi} [ G_{t+1} | S_{t+1} = s' ]) \quad \textrm{using Markov Property} \\
V_{\pi}(s) &= \sum_a \pi(a|s) \sum_{s'} P_{s, s'}^{a} ( R_{s,s'}^{a} + \gamma V_{\pi}(s')) \quad \textbf{Bellman Equation for State-Values}\\
\end{aligned}
$$

Where we have used the [short-hand notation](202011222137_mdpShortNotation) and the [Markov property](202011242218_markovProcess) of the MDP.

Intuitively we are averaging over which action we will take, as is chosen by our policy, and which state we will 
end up in $s'$. Then our expected return is the expected reward we will gain by going into the new state plus the expected return 
from now being in state $s'$, discounted by 1 time-step.

<center><img src="https://jmichaux.github.io/assets/images/state-value-full-backup2.png"
     alt="Bellman Backup diagram"
     class="center"
     style="width: 400px;" /></center>

Links: [Bellman equation for state-action values](202011242151_bellmanStateAction)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)