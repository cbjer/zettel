---
title: Non-Separable Support Vector Classifier
permalink: /zettel/202112212147_NonSeparableSupportVectorClassifier
layout: page
tags: 

---
# Non-Separable Support Vector Classifier

As opposed to the [separable case](202112212024_SupportVectorClassifier), we introduce slack variable $\xi_i$ for each data point. These control how much of the data we allow to be on wrong side of the classifier.

$$
\min_{\beta, \beta_0} \Vert \beta \Vert^2 \\
\mathrm{st} \, \, y_i ( x_i^T \beta + \beta_0) \geq 1 \quad i = 1 - \xi_i, \ldots, N \\
\xi_i \geq 0 \quad \sum \xi_i \leq C
$$

Where $C$ is a hyper parameter.

Solved again via [Lagrangians](202112212043_LagrangianMultipliers) and via solving the dual problem.



Links: 

References: 

