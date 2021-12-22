---
title: Supervised Learning Setup
permalink: /zettel/202111061519_SupervisedLearningSetup
layout: page
tags: 

---
# Supervised Learning Setup

Very generally, in supervised learning we are trying to find a function $\hat{f}$ which can model the relationship between an input space $X$ and an output space $Y$, ie $Y = f(X)$ for some unknown function $f$. 

To have a notion of a "good" approximation $\hat{f}$, we need a loss function to measure the distance between the true outputs and approximated outputs. 

We use training data $[x_i, y_i]_{i=1}^N$, to fit $\hat{f}$, with the hope that $\hat{f}$ can more generally approximate a true $y$ for any given input $x$, even if not seen in the training set.

Links: 

References: 

