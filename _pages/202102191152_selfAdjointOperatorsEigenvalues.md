---
title: Zettels
permalink: /zettel/202102191152_selfAdjointOperatorsEigenvalues
layout: default
---
tags: #linear #algebra

# Self Adjoint Operators have Eigenvalues

If $T$ is a [self-adjoint](202102162040_selfAdjointOperator) [operator](202102082104_operatorDefinition), then $T$ has an
[eigenvalue](202102120912_eigenvalueDefinition).

For the proof, note
$$
v, Tv, T^2 v, \ldots, T^n v
$$
Is [linearly dependent](202102062038_linearlyDependentDefinition). We then use the [invertible quadratic lemma](202102191145_invertibleQuadraticLemma) 
along with the idea that if $(T - \lambda_j I)$ is not [injective](202102071749_injectiveDefinition) then [it has an eigenvalue using the equivalence result](202102120920_equivalencesEigenvalue). 

Links: 

References: 

[Return to Index](index)