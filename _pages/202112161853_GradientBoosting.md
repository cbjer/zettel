---
title: Gradient Boosting
permalink: /zettel/202112161853_GradientBoosting
layout: page
tags: 

---
# Gradient Boosting

Gradient boosting is a form of [boosting](202112161834_Boosting) algorith where we require a differentiable [loss function](202101162041_lossFunctions). The algorithm is very similiar to [gradient descent](202103282312_gradientDescentUpdate). except that we now have a learner computing what that optimum step should be. We add learners at each iteration which are trained to find what next 'gradient descent' step will further reduce the loss function.

<center><img src="https://miro.medium.com/max/700/1*3iojqS-gGsJ4XI6vajl69A.png"
     alt="ALT"
     class="center"
     style="width: 800px;" /></center>

Links: 

References: [Gradient Boosting Article]([202112161612_CARTAlgorithm](https://towardsdatascience.com/demystifying-maths-of-gradient-boosting-bd5715e82b7c#:~:text=The%20idea%20is%20simple%2D%20form,suitable%20number%20of%20base%20learners.))

