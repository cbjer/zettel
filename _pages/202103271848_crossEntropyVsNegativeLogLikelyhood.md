---
title: Cross Entropy vs Negative Log-likelyhood
permalink: /zettel/202103271848_crossEntropyVsNegativeLogLikelyhood
layout: page
---
tags: #loss

# Cross Entropy vs Negative Log-likelyhood

If we have a multi-class classification problem, we can think of our model $\hat{f}$ as outputting a vector
representing the probability the model is assigning to each output.

$$
\hat{f}( \mathbf{x}_i \vert \theta) = \mathbf{\hat{y}}_i = 
\begin{pmatrix}
\hat{y}_{i, 1} \\
\vdots \\
\hat{y}_{i, M}
\end{pmatrix}
$$

We then have a ground truth vector with "one hot encoding" to denote the true category.

$$
\mathbf{y}_i = 
\begin{pmatrix}
0 \\
\vdots \\
1 \\
\vdots \\
0
\end{pmatrix}
$$

Our [likelyhood](202101091603_probabilityLikelyhood) can then be written as:

$$
L = \prod^N_{i=1} \prod^M_{j=1} (\hat{y}_{i, j})^{y_{i, j}}
$$

Where most $y_{i,j}$ are $0$ due to the one-hot encoding.

We can write the log-likelyhood of a single data point where $l = \sum_i l_i$ as
$$
l_i = \sum_{j=1}^M y_{i, j} \log \hat{y}_{i, j}
$$

If we interpret $y$ as the true probability distribution, and $\hat{y}$ as our estimate of the true distribution, then we see the negative log-likelyhood 
is equal to the [cross entropy](202103271307_crossEntropy) between $y$ and $\hat{y}$.

An example of this is in [likelihood of a logistic regression model](202011221644_likelyhoodLogisticRegression)

Links: [Likelihood](202101091603_probabilityLikelyhood), [Cross Entropy](202103271307_crossEntropy) 

References: [Connections: Log Likelihood, Cross Entropy, KL Divergence, Logistic Regression, and Neural Networks](https://glassboxmedicine.com/2019/12/07/connections-log-likelihood-cross-entropy-kl-divergence-logistic-regression-and-neural-networks/)

[Return to Index](index)