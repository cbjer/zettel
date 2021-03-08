---
title: Zettels
permalink: /zettel/202102071429_additionScalarMultiplicationScalarMaps
layout: default
---
tags: #linear #algebra

# Addition and Scalar Multiplication for Linear Maps

We define for [linear maps](202102071416_linearMapDefinition) $S, T \in \mathcal{L}(V, W)$ and $\lambda \in \mathcal{F}$ the sum and scalar product
as the linear maps:
- $(S + T) (v) = Sv + Tv$
- $(\lambda T) (v) = \lambda (T v)$

With the above, it is easy to see that $\mathcal{L}(V, W)$ forms a [vector space](202102061359_vectorSpaceDefinition), where
each element is a linear map.

We also define **product / composition** of linear maps as for $T \in \mathcal{L}(U,V)$ and $S \in \mathcal{L}(V,W)$ then 
$ST \in \mathcal{L}(U,W)$ is defined as 
$$
(S T )(u) = S ( Tu)
$$

Properties include associativity, existence of identity map and distributive. Linear maps are not generally commutative.

From these we can show $T(0) = 0$ for any linear map.

Links: 

References: 

[Return to Index](index)