---
title: Polar Decomposition
permalink: /zettel/202102201834_polarDecomposition
layout: page
---
tags: #linear #algebra

# Polar Decomposition

If we have an [operator](202102082104_operatorDefinition) $T \in \mathcal{L}(V)$, then there exists an
[isometry](202102201248_isometryDefinition) $S \in \mathcal{L}(V)$ such that:
$$
T = S \sqrt{T^*T}
$$

We call this the **Polar Decomposition** of $T$. 

Note that $\sqrt{T^*T}$ is a [positive operator](202102201207_positiveOperatorDefinition).

This means that Polar Decomposition allows us to decompose any operator into the product of an 
isometry and a positive operator.

Links: [Square Root Operator](202102201216_squareRootOperator), [Adjoint](202102161843_adjointDefinition)

References: 

[Return to Index](index)