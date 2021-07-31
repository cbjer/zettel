---
title: Reinforcement Learning as a Supervised Learning Problem
permalink: /zettel/202012041144_rlAsSupervisedLearning
layout: page
tags: dataset error loss
---
# Reinforcement Learning as a Supervised Learning Problem

Using the definition for [mean squared value error](202012032202_meanSquaredValueError) we can see
the connection to the standard [mean squared error](TODOs) definition.
Thus our aim is to find the weights $\mathbf{w}$ which minimises this loss. 

$$
\overline{\mathrm{VE}}(\mathbf{w}) := \sum_t \mu (s) \big[ U_t - \hat{v}(S_t, \mathbf{w}) \big]^2
$$

Here $U_t$ represents some updated/target value. Viewed through this 
paradigm, our dataset becomes 

$$
\big\{ (S_1, U_1), (S_2, U_2), \dots \big\}
$$

which we can then train our machine learning based model on.

However note there are complications as compared to the standard machine learning 
setup in that our data here is [non-iid](202012241510_sampleDefinition) and [non-stationary](TODOs).


Links: [Semi-Gradient TD(0)](202012032232_semigradientTDZero) [Gradient Monte Carlo](202012032231_gradientMonteCarlo)

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)