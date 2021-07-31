---
title: Bellman Equation for State-Action Values
permalink: /zettel/202011242151_bellmanStateAction
layout: page
---
tags: #bellman #onestep \

# Bellman Equation for State-Action Values

Using the definition of the [action-value function](202011221903_actionValueFunction) and taking advantage 
of the [recursive return relation](202011222109_recursiveReturns) and [markov property](202011242210_markovStates) 
we can derive a 1-step lookahead relationship.

$$
\begin{aligned}
q_{\pi}(s, a) &= \mathbf{E}_{\pi} [ G_t | S_t = s, A_t = a] \\
&= \mathbf{E}_{\pi} [R_{t+1} + \gamma G_{t+1} | S_t = s , A_t = a] \quad \textrm{using recursive return relationship}\\
&= R_{s}^{a} + \gamma \sum_{s'} \mathbf{E}_{\pi} [ G_{t+1} | S_t = s, A_t = a, S_{t+1} = s'] P_{s, s'}^{a} \quad \textrm{conditioning on the next state and using short-hand notation} \\
&= R_{s}^{a} + \gamma \sum_{s'} \mathbf{E}_{\pi} [ G_{t+1} | S_{t+1} = s' ] P_{s, s'}^{a} \quad \textrm{using the Markov property} \\
&= R_{s}^{a} + \gamma \sum_{s'} P_{s, s'}^{a} \sum_{a'} \mathbf{E}_{\pi} [ G_{t+1} | S_{t+1} = s' , A_{t+1} = a'] P ( A_{t+1} = a' | S_{t+1} = a' ) \quad \textrm{conditioning on the following action} \\
q_{\pi}(s, a) &= R_{s}^{a} + \gamma \sum_{s'} P_{s, s'}^{a} \sum_{a'} q_{\pi} ( s', a') \pi (a' | s' ) \quad \textbf{Bellman Equation for State-Action Values }\\
\end{aligned}
$$

Intuitively, what is the value of taking an action $a$ in a state $s$? It is the expected immediate reward followed by the discounted expected future reward. 
This expected future reward can be broken down by the weighted average of all the action-values in a state $s$, weighted by the change of selecting such an action 
and then further weighting this by the probability we ended up in that state from our original state and action choice. 


<center><img src="https://www.damiankolmas.com/images/backupDiagram_actionValue_actionValue.png"
     alt="Bellman Backup diagram"
     class="center"
     style="width: 300px;" /></center>

Links: [Bellman equation for value function](202011222150_bellmanEquationStateValues)

References: Reinforcement Learning - Sutton and Barto

[Return to Index](index)