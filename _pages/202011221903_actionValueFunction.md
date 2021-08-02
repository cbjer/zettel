---
title: State-Action Value Function
permalink: /zettel/202011221903_actionValueFunction
layout: page
tags: reinforcementLearning statevalue 

---
# State-Action Value Function

The State-Action value function $q_{\pi} ( s, a ) $ is your [expected return](202011221815_returnsRL) from starting in state $s$, taking 
action $a$ and then following [policy](202011242107_rlPolicy) $\pi$ thereafter.

$$
\begin{aligned}
q_{\pi}(s, a) &:= \mathbf{E}_{\pi} \big[ G_t | S_t  = s, A_t = a \big] \\
&= \mathbf{E}_{\pi} \big[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} | S_t = s, A_t = a \big]
\end{aligned}
$$

Links: [State-value function](202011221845_valueFunctions), [Expressing state value as action value](202011221924_expressingStateToActionValue)

References: Introduction to Reinforcement Learning - Sutton and Barto

