---
title: Support Vector Classifier
permalink: /zettel/202112212024_SupportVectorClassifier
layout: page
tags: 

---
# Support Vector Classifier

Separable data case. See [Non-Separable Support Vector Classifier](202112212147_NonSeparableSupportVectorClassifier).

Say we have a data set $(x_i, y_i)$ with each $y_i \in \{-1, 1 \}$. We seek to find a separating hyperplane, where the **margin** is maximised. 

The margin is defined as the distance between the closest two points on either side of the hyperplane. Hyperplane:
$$
\{ x : f(x) := x^T w + b = 0 \}
$$
We can show using geometry that the margin $M$ is equal to $1 / \Vert \beta \Vert$, and so maximising the margin is equivalent to minimising $\Vert \beta \Vert$.

Once we have found this $\beta$, our classifier rule is just which sign of the line a point lies on, ie $\textrm{sign} (f(x))$. Since the data is separable, it must be that $y_i f(x_i) > $.

The optimization problem then becomes:
$$
\min_{\beta, \beta_0} \Vert \beta \Vert^2 \\
\mathrm{st} \, \, y_i ( x_i^T \beta + \beta_0) \geq 1 \quad i = 1, \ldots, N
$$
since minimising norm same as minimising the norm squared. 

This is then solved using [Lagrangian Multipliers](202112212043_LagrangianMultipliers).


Links: 

References: 

