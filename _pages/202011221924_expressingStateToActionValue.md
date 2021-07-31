---
title: Expressing State Value Function in terms of State-Action Value Function 
permalink: /zettel/202011221924_expressingStateToActionValue
layout: page
tags: valuefunction actionvaluefunction \
---
# Expressing State Value Function in terms of State-Action Value Function 

We can express the [state-value function](202011221845_valueFunctions) $V_{\pi}(s)$ in terms of the [state-action value function](202011221903_actionValueFunction) 
$q_{\pi}(s, a)$ by using the [law of total expectation](202103141349_lawTotalExpectation).

$$
\begin{aligned}
V_{\pi}(s) &:= \mathbf{E}_{\pi} \big[ G_t | S_t  = s\big] \\
&= \sum_{a} \mathbf{E}_{\pi} \big[ G_t | S_t  = s, A_t = a \big] P (A_t = a | S_t = s) \quad \textrm{using law of total expectation}\\
V_{\pi}(s) &= \sum_{a} q_{\pi} (s, a) \: \pi (a | s) \quad \textbf{State value function to state-action value function}
\end{aligned}
$$

Intuitively we can think of the state-value function as a weighted average of our action-value function where we sum all action-values
weighted by the probability of selecting such an action under a policy $\pi$ in the state $s$.

Another useful expression for a determinist policy $\pi(s)$:

$$ v_{\pi}(s) = q_{\pi}(s, \pi(s)) $$

Taking advantage of applying action $\pi(s)$ is exactly following policy $\pi$ and therefore the definition of the value function. 

Links: [Expressing State-Action value function in terms of State value function](202011262125_stateActionTostatevalue)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)