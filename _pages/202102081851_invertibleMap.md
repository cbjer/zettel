---
title: Invertible Linear Map
permalink: /zettel/202102081851_invertibleMap
layout: page
---
tags: #linear #algebra

# Invertible Linear Map

A [linear map](202102071416_linearMapDefinition) $T \in \mathcal{L}(V,W)$ is called **invertible** if there exists a linear
map $S \in \mathcal{L}(W,V)$ such that
- $ST$ is the identity map on $V$
- $TS$ is the identity map on $W$

Such a map, satisfying $ST = I$ and $TS = I$ is called an **inverse** of $T$

Easy to show that an invertible linear map has a unique inverse. Ie if an inverse exists, it is unique.

We denote the inverse of $T$ as $T^{-1}$

Ie $T T^{-1} = I$ and $T^{-1} T = I$

Links: [Invertibility Equivalence to Injectivity and Surjectivity](202102081919_invertibilityInjectivitySurjectivity)

References: 

[Return to Index](index)