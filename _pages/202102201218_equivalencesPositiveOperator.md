---
title: Equivalences of Positive Operators
permalink: /zettel/202102201218_equivalencesPositiveOperator
layout: page
---
tags: #linear #algebra

# Equivalences of Positive Operators

If we have [operator](202102082104_operatorDefinition) $T$, then the following are equivalent:
- $T$ is [positive](202102201207_positiveOperatorDefinition)
- $T$ is [self-adjoint](202102162040_selfAdjointOperator) and all the [eigenvalues](202102120912_eigenvalueDefinition) of $T$ are non-negative
- $T$ has a [positive](202102201207_positiveOperatorDefinition) [square root](202102201216_squareRootOperator)
- $T$ has a self-adjoint square root
- There exists an operator $R$ such that $T = R^*R$

To see these note:
- Any eigenvalue of a positive operator an easily be shown to be positive
- Via the [complex](202102182045_complexSpectralTheorem) and [real spectral theorems](202102191218_realSpectralTheorem), we can create 
  an orthonormal basis of eigenvectors and if the eigenvalues are non-negative, define $T e_j = \sqrt{\lambda_j} e_j$
- $R^*R$ is self-adjoint
  
Links: [Adjoint](202102161843_adjointDefinition)

References: 

[Return to Index](index)