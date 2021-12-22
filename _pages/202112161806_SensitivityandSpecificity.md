---
title: Sensitivity and Specificity
permalink: /zettel/202112161806_SensitivityandSpecificity
layout: page
tags: 

---
# Sensitivity and Specificity

In a two class medical classification problem where we have classes "disease" and "not disease", we define the **sensitivity** and **specificity** as

Sensitivity: Probability predicting disease given true state disease

Specificity: Probability of predicting non-disease given true state non-disease.

We often have a tradeoff, if we want higher sensitivity (say we want it to be very low probability that we miss classify a true state disease), then we will suffer worse specificity (we will classify some health non-disease as non-disease). 

In an extreme classification, predict everyone as with disease will be 100% sensitivity and 0% specificity.

Since the two misclassifications have different consequences, we can specify these different amounts of loss through a [loss matrix](202112161754_LossMatrix).

Links: 

References: 

