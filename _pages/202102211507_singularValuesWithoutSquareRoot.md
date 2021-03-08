---
title: Zettels
permalink: /zettel/202102211507_singularValuesWithoutSquareRoot
layout: default
---
tags: #linear #algebra

# Singular Values without taking Square Root of Operator

If we have an [operator](202102082104_operatorDefinition) $T$, then the [singular values](202102201841_singularValuesDefinition) are the 
non-negative square roots of the [eigenvalues](202102120912_eigenvalueDefinition) of $T^*T$, with each eigenvalue
$\lambda$ repeated $\mathrm{dim} \, E(\lambda, T^*T)$ times.

- Since $T^*T$ is [a positive operator](202102201207_positiveOperatorDefinition) $\implies$ [has non-negative eigenvalues](202102201218_equivalencesPositiveOperator)
- [Self-adjoint](202102162040_selfAdjointOperator) $\implies$ can use [real spectral theorem](202102191218_realSpectralTheorem) to get the orthonormal basis of eigenvectors
- See the eigenvalues of the [square root operator](202102201216_squareRootOperator) are exactly the square-roots of the previous eigenvalues.

Links: [Eigenspaces](202102141026_eigenspaceDefinition), [Adjoint](202102161843_adjointDefinition)

References: 

[Return to Index](index)