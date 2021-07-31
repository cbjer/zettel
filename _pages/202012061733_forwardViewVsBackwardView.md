---
title: Forward-view vs Backward-view
permalink: /zettel/202012061733_forwardViewVsBackwardView
layout: page
---
tags: #lambda #traces

# Forward-view vs Backward-view

This terminology is used when discussing implementation of non 1-step returns, eg [n-step returns](202011302230_nstepReturn) 
or [lambda-returns](202012061731_lambdaReturn). Since these return formulations depend on 
information we dont have when at a state $S_t$, the forward-view needs us to wait for 
some future time length before we have all the information necessary to calculate the return. 

This means however that we cannot use these returns online (updating as we visit) in the normal
forward-view formulation. 

The **backward-view** formulation takes advantage of [eligibility-traces](202012061733_eligibilityTraces)
to get round this problem, keeping track of what previous states are responsible
for current updates and updating all these previous states at each step by the correct amount.
This allows us to use the algorithms in an online fashion.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)