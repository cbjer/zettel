---
title: K-Nearest Neighbors Algorithm
permalink: /zettel/202110302142_kNearestNeighbors
layout: page
tags: algorithm machinelearning

---
# K-Nearest Neighbors Algorithm

The **K-Nearest Neighbors Algorithm** can be used be used in a regression or classification setup.

A measure of "nearest" is usually defined via Euclidean distance (L2 norm).

For classificiation: Take the k nearest other data points and take the most common categorical value.

For regression: Take the k nearest other data points and average their values.

This regression method is trying to directly implement the results of [conditional expectation solution to squared error loss](202103271143_conditionalExpectationSolutionSquaredError). Except we approximate conditioning on $x$ to some neighbourhood of $x$ and take an average for the expectation.

However struggles in higher dimensions where the rate of convergence decreases.

Links: 

References:

