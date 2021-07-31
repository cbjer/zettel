---
title: Conditions Equivalent to Diagonalizability
permalink: /zettel/202102141040_conditionsDiagonalizablity
layout: page
---
tags: #linear #algebra

# Conditions Equivalent to Diagonalizability

For a finite dimensional $V$ and linear operator $T$, let $\lambda_1, \ldots, \lambda_m$ be the distinct [eigenvalues](202102120912_eigenvalueDefinition)
of $T$. Then the following are equivalent:
- $T$ is [diagonalizable](202102141037_diagonalizableDefinition)
- $V$ has a [basis](202102062154_basisDefinition) of [eigenvectors](202102120943_eigenvectorDefinition) of $T$
- There exists [invariant](202102120907_invariantSubspace) subspaces $U_1, \ldots, U_n$ of $V$, each invariant under $T$ and that form 
  a [direct sum for $V$](202102061512_directSumDefinition) $$V = U_1 \oplus \cdots \oplus U_n$$
- $V$ is a direct sum of the [eigenspaces](202102141026_eigenspaceDefinition) $$V = E(\lambda_1, T) \oplus \cdots \oplus E(\lambda_m, T)$$
- Sum of dimensions of eigenspaces add to dimension of $V$ $$\mathrm{dim} \, V = \mathrm{dim} \, E(\lambda_1, T) + \cdots + \mathrm{dim} \, E(\lambda_m, T)$$

Links: 

References: 

[Return to Index](index)