---
title: Optimal Bayes Classifier
permalink: /zettel/202111061451_OptimalBayesClassifier
layout: page
tags: classification

---
# Optimal Bayes Classifier

Similiar in theory to the optimal regression solutions for [$L_1$](202111061420_ConditionalExpectationSolutiontoAbsoluteErrorLoss) and [$L_2$](202103271143_conditionalExpectationSolutionSquaredError), we can use the same methodology to solve a classification problem.

Assume we are using a zero-one loss function, we aim to find a function $\hat{G}(x)$, which assigns inputs to one of $K$ possible classes.

Again we aim to minimise the expected loss (both $G$ and $X$ are random variables):

$$
\begin{aligned}
EPE(f) &= E \big[ L(G, \hat{G}(X)) \big] \\
&= E_X E_{G \vert X} \big[ L(G, \hat{G}(X)) \vert X=x \big] \\
&= E_X \sum_{k=1}^{K} L (G_k, \hat{G}(X)) P(G_k \vert X)
\end{aligned}
$$

where now we have used the definition of expectation for discrete random variables. Here $G_k$ represent each of the $K$ classes that $G$ can take.

As previously we can minimise this pointwise within the expectation. 

$$
\hat{G}(x) = \mathrm{argmin}_{g \in G} \sum_{k=1}^K L(G_k, g) P(G_k \vert X=x)
$$

Now since we are using a zero-one loss, and over $k$ the probabilities will sum to 1, we can express as 

$$
\begin{aligned}
\hat{G}(x) &= \mathrm{argmin}_{g \in G} [ 1 - P(g \vert X=x)] \\
&= \mathrm{argmax}_{g \in G} [ P(g \vert X=x) ]
\end{aligned}
$$

Ie we assign $x$ to the most probable class according to the conditional distribution $P(G \vert X)$.

It can be shown that the error rate of this classifier is minimal / optimal and is called the **Bayes rate**. Can think of this as the [irreducible error](202103281546_biasVarianceTradeoffDerivation).

[K nearest neighbours](202110302142_kNearestNeighbors) is trying to directly model this solution. 

Links: 

References: 

