---
title: Logistic Regression
permalink: /zettel/202011221613_logisticRegression
layout: page
tags: classification linearmodels \
---
# Logistic Regression

A very simple binary classification model which composes a regular [linear regression](202011221622_linearRegression) with the [sigmoid function](202011221535_sigmoidFunction) 
such that the output can be interpreted as a probability of a given entry belonging to the '1' category.

The model is setup such that for a given data entry $\mathbf{x}$, we have two parameters $\mathbf{w}$ and $\mathbf{b}$, exactly the same as we have in normal linear regression. The model
is then:
$$ f(\mathbf{x}) = \sigma (\mathbf{w}^T \mathbf{x} + b) = \frac{1}{1 + e^{-(\mathbf{w}^T \mathbf{x} + b)}} $$

We would usually fit the model by maximising the [likelihood](202011221644_likelyhoodLogisticRegression), or equivalently minimising the [cross-entropy](202103271307_crossEntropy).

Links: [Log-likelihood of a Logistic Regression Model](202011221644_likelyhoodLogisticRegression)

References: Hundred-Page machine learning book - Andrey Burkov

[Return to Index](index)