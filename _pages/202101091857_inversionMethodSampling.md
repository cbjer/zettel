---
title: Inversion Method Sampling
permalink: /zettel/202101091857_inversionMethodSampling
layout: page
tags: sampling pmf
---
# Inversion Method Sampling

The inversion method is a sampling method used to generate [i.i.d](202012241510_sampleDefinition) samples for a given
random variable $X$ with cumulative distribution function $F(x)$. We require this cdf to be invertible. 

First we generate a sample from a univariate distribution $U[0,1]$ to get $\{ U_1, \dots, U_n \}$, then 
$\{ F^{-1}(U_1), \dots, F^{-1}(U_n) \}$ is an i.i.d sample from $X$. 

This takes advantage of the result that $X \sim F^{-1}(U)$

Links: 

References: 

[Return to Index](index)