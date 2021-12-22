---
title: Log Odds to Sigmoid Relationship
permalink: /zettel/202111070951_LogOddstoSigmoidRelationship
layout: page
tags: 

---
# Log Odds to Sigmoid Relationship

Connection between the log-odds and a [sigmoid function](202011221535_sigmoidFunction) for a two class problem. Let

$$
\begin{aligned}
&\log \frac{P(Y=1 \vert X=x)}{P(Y=0 \vert X=x)} = f(x) \\
&\implies P(Y=1 \vert X=x) = \frac{e^{f(x)}}{1 + e^{f(x)}} \\
&\implies P(Y=1 \vert X=x) = \frac{1}{1+ e^{-f(x)}}
\end{aligned}
$$

For example when $f(x) = w^T x$, then we get [logistic regression](202011221613_logisticRegression)


Links: 

References: 

