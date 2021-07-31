---
title: Singular Values Definition
permalink: /zettel/202102201841_singularValuesDefinition
layout: page
---
tags: #linear #algebra

# Singular Values Definition

If we have an [operator](202102082104_operatorDefinition) $T$, the **singular values** of $T$ are the 
[eigenvalues](202102120912_eigenvalueDefinition) of $\sqrt{T^{\ast} T}$, with each eigenvalue $\lambda$ repeated 
$\mathrm{dim} \, E(\lambda, \sqrt{T^{\ast} T})$ times.

We note that [all the eigenvalues are non-negative](202102201218_equivalencesPositiveOperator) since $\sqrt{T^* T}$ is 
a [positive operator](202102201207_positiveOperatorDefinition)

To see the repeated aspect, note as is a positive operator
- $\implies$ [Self-adjoint](202102162040_selfAdjointOperator) by definition
- $\implies$ Has an [orthonormal basis](202102142105_orthonormalBasisDefinition) of [eigenvectors](202102120943_eigenvectorDefinition) 
  by the [real spectral theorem](202102191218_realSpectralTheorem)
- $\implies$ is [diagonalizable](202102141037_diagonalizableDefinition) by the [conditions equivalent to diagonalizable](202102141040_conditionsDiagonalizablity)
- $\implies$ Has a [direct sum](202102061512_directSumDefinition) decomposition into [eigenspaces](202102141026_eigenspaceDefinition) 
  by the same equivalences to diagonalizability
  
We note by this each $T$ has $\mathrm{dim} \, V$ Singular Values

Singular values allow us to do [singular value decomposition](202102201910_singularValueDecomposition)

Links: 

References: 

[Return to Index](index)