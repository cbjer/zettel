---
title: Zettels
permalink: /zettel/202011221644_likelyhoodLogisticRegression
layout: default
---
tags: #logisticregression #likelyhood \

# Log-likelihood of a Logistic Regression Model

For a given [logistic regression](202011221613_logisticRegression) model, assume have data entries $\{ \mathbf{x}_i, y_i \}^{N}_{i = 1}$ where
each $y_i$ is either $1$ or $0$.

Taking $f$ as our logistic regression model, we can express this in a probabilistic framework as:

$$
\begin{aligned}
P ( Y = 1 | X &= \mathbf{x} ) = f(\mathbf{x})  \\
P ( Y = 0 | X &= \mathbf{x} ) = 1 - f(\mathbf{x}) \\
P ( Y = y | X &= \mathbf{x} ) = f(\mathbf{x})^y (1 - f(\mathbf{x}) )^{1 - y} \\
\end{aligned}
$$

Our [likelihood](202101091603_probabilityLikelyhood) then becomes:

$$ L ( \mathbf{w}, b )  = \prod_{i=0}^{N} f( \mathbf{x}_i )^{y_i} ( 1 - f ( \mathbf{x} ))^{ 1 - y_i} $$

where $\mathbf{w}$ and $b$ are the parameters within our logistic regression model. Taking logs, we get our log-likelihood:

$$ l ( \mathbf{w}, b ) = \log ( L ( \mathbf{w}, b ) ) = \sum_{i=1}^{N} y_i \log ( f ( \mathbf{x_i} ) ) + ( 1 - y_i ) \log ( 1 - f ( \mathbf{x_i} ) ) $$

Links: []

References: Hundred-page machine learning book - Andrey Burkov

[Return to Index](index)