---
title: Zettels
permalink: /zettel/202102141030_sumEigenspacesDirectSum
layout: default
---
tags: #linear #algebra

# Sum of Eigenspaces is a Direct Sum

For finite dimensional $V$ and operator $T$, with $\lambda_1, \ldots, \lambda_m$ being
**distinct** [eigenvalues](202102120912_eigenvalueDefinition) of $T$, then the sum of [eigenspaces](202102141026_eigenspaceDefinition)
$$
E(\lambda_1, T) + \cdots + E(\lambda_m, T)
$$
is a [direct sum](202102061512_directSumDefinition).

The sum of their [dimensions](202102062253_dimensionDefinition) is also less than or equal to the dimension of $V$
$$
\mathrm{dim} \, E(\lambda_1, T) + \cdots + \mathrm{dim} \, E(\lambda_m, T) \leq \mathrm{dim} \, V
$$

We can see this using [that eigenvectors are linearly independent](202102121220_independenceEigenvectors) and 
[result connecting unique zero to a direct sum](202102061527_uniqueZeroDirectSum)

Links: 

References: 

[Return to Index](index)