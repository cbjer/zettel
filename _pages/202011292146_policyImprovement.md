---
title: Policy Improvement Theorem
permalink: /zettel/202011292146_policyImprovement
layout: page
tags: improvement telescoping

---
# Policy Improvement Theorem

The policy improvement theorems says that say we have two deterministic [policies](202011242107_rlPolicy) 
$\pi$ and $\pi'$, and we have the condition 

$$ v_{\pi}(s) \leq q_{\pi}(s, \pi'(s))$$
holding for all 
$s$ in the state space, then this implies that the policy $\pi'$ 
[is as good or better](202011252200_partialOrderingPolicies) than $\pi$. 
Ie that $v_{\pi}(s) \leq v_{\pi'}(s)$ for all $s$ in the state space. 

Breaking this down, this is saying that if following $\pi'$ for 1-step and then $\pi$ thereafter is better than if we had 
followed $\pi$ for this step, in all states, then $pi'$ is overall a better policy always. 

The proof is straightforward using the definition of [state-action value function](202011221903_actionValueFunction) 
and the above relationship, along with the key insight that the value function inside an 
expectation is a constant and therefore we can change the expectation with respect to 
policy $\pi'$ instead. 

Links: []

References: Introduction to Reinforcment Learning - Sutton and Barto (p78)

[Return to Index](index)