---
title: Stochastic Gradient Descent on Value Function Approximators
permalink: /zettel/202012032217_sgdValueFunction
layout: page
---
tags: #descent #optimal #path

# Stochastic Gradient Descent on Value Function Approximators

Given our functional approximator $\hat{v}(s, \mathbf{w})$ to the [value function](202011221845_valueFunctions), 
which depends on some weights vector $\mathbf{w}$, we aim to update this weight vector in 
the direction which would reduce the observed [sample error](202012032202_meanSquaredValueError) between our current value function
functional approximator and the true value function $v_{\pi}$. We do this through a 
[stochastic gradient descent](202104051024_stochasticGradientDescent) based step.

$$
\begin{aligned}
\mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2} \alpha \nabla \big[ v_{\pi}(S_t) - \hat{v}(S_t, \mathbf{w}_t) \big]^2 \\
&= \mathbf{w}_t + \alpha \big[ v_{\pi}(S_t) - \hat{v}(S_t, \mathbf{w}_t) \big] \nabla \hat{v}(S_t, \mathbf{w}_t )
\end{aligned}
$$

Since we do not usually have access to the true value function $v_{\pi}$, we use instead 
$U_t$ which is some estimate of ours to the value of state $S_t$. If this estimate is a function of $\mathbf{w}$ 
then we call these methods **Semi-Gradient**, since it is not the true gradient being used. For examples see 
[Gradient Monte Carlo](202012032231_gradientMonteCarlo) or [Semi-gradient TD(0)](202012032232_semigradientTDZero).

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)