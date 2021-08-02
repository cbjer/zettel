---
title: Loss Functions
permalink: /zettel/202101162041_lossFunctions
layout: page
tags: supervised learning

---
# Loss Functions

A loss function is a measure of how good our prediction compared to the true value is in a [supervised learning setup](TODOs). Formally we can describe it 
as a function $L : Y \times Y \rightarrow \mathcal{R}^+$ ie $L(Y, f(X))$.

Loss functions for Regression:
- Square loss $L(Y, f(X)) = (f(X) - Y)^2$ ie $L_2$ loss
- Absolute loss $L(Y, f(X)) = \vert f(X) - Y) \vert$ ie $L_1$ loss

Loss functions for Classification
- 0-1 loss
$$L(Y, f(X)) = \begin{cases}
0 \quad f(X) = Y \\
1 \quad f(X) \neq Y
\end{cases}
$$
- [Cross Entropy Loss / Negative Log Likelyhood](202103271848_crossEntropyVsNegativeLogLikelyhood)



Links: 

References: 

