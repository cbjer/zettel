---
title: Semi Gradient TD(0)
permalink: /zettel/202012032232_semigradientTDZero
layout: page
tags: update evaluation 

---
# Semi Gradient TD(0)

Semi-Gradient TD(0) uses the [stochastic gradient descent update for value functions](202012032217_sgdValueFunction) 
with a normal [TD(0) update](202011302050_tabularTDZero). Here we are updating the 
weights vector associated to our [approximal functional form](TODOs) for our value function to move 
our weights in the direction as to minimise the difference between our previous estimate for 
the value of the state and the TD 1-step estimated value, which includes one step of actual observed reward.

We use the term **semi gradient**, since the form of the gradient update is not exact, since our target 
$R_{t+1} + \gamma \hat{v}(S_{t+1}, \mathbf{w})$ is dependent on $\mathbf{w}$ which was what our 
gradient was with respect to.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/SemiGradientTDZeroV.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> Semi Gradient TD(0) </figcaption>     
</figure>

Links: [Gradient Monte Carlo](202012032231_gradientMonteCarlo)

References: Introduction to Reinforcement Learning - Sutton and Barto

