---
title: Zettels
permalink: /zettel/202104262128_operatorOddDimensionalHasEigenvalue
layout: default
---
tags: #linear #algebra

# Operator on Odd-Dimensional Vector Space has Eigenvalue

Every operator on an odd-dimensional real vector space has an [eigenvalue](202102120912_eigenvalueDefinition)

Simple proof:
- We know [nonreal eigenvalues come in pairs](202104262120_nonRealEigenvaluesComplexifiedOperatorPairs) and that they have [equal multiplicity](202104262124_multiplicityEigenvalueEqualsConjugate)
- From this we conclude the sum of [multiplicities](202104241520_multiplictyDefinitionEigenvalue) of all nonreal eigenvalues of $T_C$ is an even number
- Know [sum of multiplicities equals dimension of space](202104262136_sumMultiplicitesEqualsDimensionSpace)
- This implies that $T_C$ must have a real eigenvalue
- Know a [eigenvalue of $T_C$ must be an eigenvalue for $T$](202104262112_realEigenvaluesComplexifiedOperators)

Contrapositive: If operator on a real vector space does not have an eigenvalue $\implies$ must be a even-dimensional
vector space.

Links: 

References: 

[Return to Index](index)