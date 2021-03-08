---
title: Zettels
permalink: /zettel/202101101214_boxMullerMethod
layout: default
---
tags: #normal #sampling

# Box-Muller Method

The Box-Muller Method is a form of [transformation sampling](202101101211_transformationSamplingTechnique) used to sample from a standard 
normal distribution. The key idea is that if we can sample from two independent random variables: an [exponential distribution](202101101223_exponentialDistribution)
and a uniform, we can apply a polar change of co-ordinates to get two independent normal random variables. 

That is, let $R^2 \sim \mathrm{Exp}(\frac{1}{2})$ and $\Theta \sim U(0, 2\pi)$. We then look at the joint distribution $f_{R^2, \Theta}(r^2, \theta) = f_{R^2}(r^2)f_{\Theta}(\theta)$.
Applying a change of variables $x = r \cos (\theta), y = r\sin(\theta)$ and using the jacobian to change variables, we get that the joint is $\big( \frac{1}{\sqrt{2\pi}} \exp(\frac{-x^2}{2}) \big) \big( \frac{1}{\sqrt{2\pi}} \exp(\frac{-y^2}{2}) \big)$
, which is the pdf of the joint of two independent standard normals.

We use the [inverse sampling method](202101091857_inversionMethodSampling) to sample from the exponential distribution. The finished method then becomes:

- Sample two independent uniform random variable $U_1, U_2 \sim U(0,1)$
- Then $R^2 = -2 \log U_1 \sim \mathrm{Exp}(1/2)$ and $\Theta = 2 \pi U_2 \sim U(0, 2\pi)$
- $X = R \cos (\Theta) = \sqrt{-2\log U_1} \cos(2 \pi U_2) \sim \mathcal{N}(0, 1)$
- $Y = R \sin (\Theta) = \sqrt{-2\log U_1} \sin(2 \pi U_2) \sim \mathcal{N}(0, 1)$

Links: 

References: 

[Return to Index](index)