---
title: Bias-Variance Tradeoff Derivation
permalink: /zettel/202103281546_biasVarianceTradeoffDerivation
layout: page
tags: 

---
# Bias-Variance Tradeoff Derivation

Assume we have the data arise from a model

$$
Y = f(X) + \epsilon\\
\mathrm{E}[\epsilon] = 0 \quad \mathrm{E}[\epsilon^2] = \sigma^2
$$

with the error random variable [independent](202012241408_independence) from our model.

We aim to train an [estimator](202012241539_estimatorDefinition) (a random variable) $\hat{f}$ to be model the unknown 
function $f$.

Taking a fixed test point $x$, we look at what is the expected squared error:

$$
\begin{aligned}
ESE(x) &= \mathrm{E} \big[ \big( Y - \hat{f}(x) \big)^2 \vert X = x \big] \\
&= \mathrm{E} \big[ \big( f(X) + \epsilon - \hat{f}(x) \big)^2  \vert X = x \big] \\
&= \mathrm{E} \big [ \epsilon^2 \big] + 2 \mathrm{E} \big[ \epsilon \big] \mathrm{E} \big[ (f(x) - \hat{f}(x) \big] + \mathrm{E} \big[ \big( \hat{f}(x) - f(x) \big)^2 \big] \\
&= \sigma^2 + \mathrm{E} \big[ \big( ( \hat{f}(x) - \mathrm{E}[\hat{f}(x)] ) + (\mathrm{E} [ \hat{f}(x) ] - f(x) ) \big)^2 \big] \\
&= \sigma^2 + \mathrm{E} \big[ \big( \hat{f}(x) - \mathrm{E} [ \hat{f}(x) ] \big)^2 \big] + \big( \mathrm{E} \big[ \hat{f}(x) \big] - f(x) \big)^2 + 2 \big( \mathrm{E} \big[ \hat{f}(x) \big] - \mathrm{E}[\hat{f}(x)] \big) \big( \mathrm{E}[\hat{f}(x)] - f(x) \big) \\
&= \sigma^2 + \textrm{Bias} \big[ \hat{f}(x) \big]^2 + \textrm{Var} \big[ \hat{f}(x) \big]
\end{aligned}
$$

where we have used the definition of [bias](202012241553_biasDefinition) and [variance](202012241415_varianceDefinition) of an estimator.

The $\sigma^2$ term is the irreducible error and is beyond our control. 

Links: 

References: 

