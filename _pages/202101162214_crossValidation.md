---
title: Cross-Validation
permalink: /zettel/202101162214_crossValidation
layout: page
---
tags: #overfitting #error #estimation 

# Cross-Validation

Cross-Validation is a technique to avoid the requirement of a third split of our available data for a validation set. That is a set 
of the data used to tune the hyperparameters of the model. The method proceeds as

- Split the training data into $T$ folds
- For each $t = 1, \dots, T$:
- Hold fold $t$ out as a validation set. Use the remaining data to train the model.
- Calculate a validation error on the fold $R_t$
- Our Cross-validation score is then average of our validation errors on each fold $\frac{1}{T} \sum_{t=1}^T R_t$. This is an estimate for the true test error.

By applying a [grid-search](TODOs) and running cross-validation multiple times, we can select the hyperparameters with the highest cross-validation score. 
Once selected, we will then train the model on the entire training set. Then we apply on test set to estimate generalisation performance.


Links: 

References: 

[Return to Index](index)