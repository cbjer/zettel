---
title: Fundamental Theorem of Linear Maps
permalink: /zettel/202102071814_fundamentalTheoremLinearMaps
layout: page
tags: linear algebra

---
# Fundamental Theorem of Linear Maps

Suppose $V$ is a [finite dimensional vector space](202102062028_finiteDimensionalVectorSpace) and 
a [linear map](202102071416_linearMapDefinition) $T : V \rightarrow W$. Then the [range](202102071800_rangeDefinition) of $T$ 
is finite dimensional and the [dimension](202102062253_dimensionDefinition) of $V$ equals the sum 
of the dimension of [null space](202102071742_nullSpaceDefinition) of $T$ and the dimension of the range of $T$.
$$
\mathrm{dim} \, V = \mathrm{dim} \, \mathrm{null} \, T + \mathrm{dim} \, \mathrm{range} \, T
$$

Using the result and [connection between null space and injectivity](202102071751_injectivityNullSpace) we can see that:
- if $\mathrm{dim} \, V > \mathrm{dim} \, W$, ie we are mapping to a smaller space, a linear map cannot be [injective](202102071749_injectiveDefinition).
- if $\mathrm{dim} \, V < \mathrm{dim} \, W$, ie we are mapping to a larger space, a linear map cannot be [surjective](202102071809_surjectiveDefinition)

Using these results we can show:
- A homogenous system of equations with more variables than equations will have non-zero solutions
- A inhomogenous system of equations, there will exist choice of rhs constants that lead to no solutions to the system.

This is commonly called **the rank-nullity theorem**

Links: 

References: Proof p63 Axler

[Return to Index](index)