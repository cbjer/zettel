---
title: Recursive relation for returns
permalink: /zettel/202011222109_recursiveReturns
layout: page
tags: reinforcementlearning rewards returns \
---
# Recursive relation for returns

Given the definition of [return](202011221815_returnsRL) we can show the following recursive relationship:

$$
\begin{aligned}
G_t &:= \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \\
&= R_{t+1} + \gamma \sum_{k=1}^{\infty} \gamma^{k-1} R_{t+k+1} \\
&= R_{t+1} + \gamma \sum_{k=0}^{\infty} \gamma^{k} R_{(t+1) + k +1 } \\
G_t &= R_{t+1} + \gamma G_{t+1} \quad \textbf{Recursive Return Relation}
\end{aligned}
$$

Intuitively, our return is the immediate reward $R_{t+1}$ plus the future return, discounted by 1 timestep.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)