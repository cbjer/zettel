---
title: Naive Bayes Classifier
permalink: /zettel/202111071133_NaiveBayesClassifier
layout: page
tags: 

---
# Naive Bayes Classifier

For **Naive Bayes** we start with the form for the [optimal Bayes classifier](202111061451_OptimalBayesClassifier).

Ie we know our classifier will take the form 
$$
\argmax_k P(G=k \vert X=x) 
$$

We can write this posterior
$$
P(G=k \vert X=x) = \frac{\pi_k f_k(x)}{\sum_j \pi_j f_j(x)}
$$

Now assume that each input vector $x$ has $p$ features. So that $X = (X_1, X_2, \ldots, X_p)$. Naive Bayes makes the assumption that these features are conditionally independent given $G$.

This means we can write our density over $x$ as
$$
f_k(x) = \prod_{i=1}^p f_{k,i}(x^{(i)})
$$

where each density is now just the feature density for a given class.

Since the denominator is just a normalising factor, our final classifier is then
$$
\argmax_k \pi_k \prod_{i=1}^p f_{k,i}(x^{(i)})
$$

Or equivalently
$$
\argmax_k \big[ \log \pi_k + \sum_{i=1}^p \log f_{k,i}(x^{(i)}) \big]
$$

$\pi_k$ and $f_{k,i}(x^{(i)})$ are estimated from the data using [maximum likelyhood estimation](202111071235_MaximumLikelyhoodEstimation).

Links: 

References: 

