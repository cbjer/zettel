---
title: Eligibility Traces
permalink: /zettel/202012061733_eligibilityTraces
layout: page
tags: assignment credit lambda

---
# Eligibility Traces

Eligibility Traces act as a short term memory vector which form a mechanism 
to deal with the credit assignment problem in a [backward-vew](202012061733_forwardViewVsBackwardView) 
formulation. That is when a [TD error](202011302057_TDError) occurs, only the eligible states are 
given credit/blame for the error. Ie which states we should be updating given the current
update step.

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)