---
title: Description of an Operator on a Complex Vector Space into Generalised Eigenspaces
permalink: /zettel/202104241507_descriptionOperatorComplexSpaceGeneralisedEigenspace
layout: page
tags: linear algebra

---
# Description of an Operator on a Complex Vector Space into Generalised Eigenspaces

If we have $V$ as a complex vector space and [operator](202102082104_operatorDefinition) $T$, with 
$\lambda_1, \ldots, \lambda_m$ as the distinct [eigenvalues](202102120912_eigenvalueDefinition) of $T$ then

- $V = G(\lambda_1, T) \oplus \cdots \oplus G(\lambda_m, T)$. Ie we can decompose the space into a [direct sum](202102061512_directSumDefinition) of [generalised eigenspaces](202102221242_generalizedEigenspaceDefinition)
- each $G(\lambda_j, T)$ is [invariant](202102120907_invariantSubspace) under $T$
- each $(T - \lambda_j I ) \mid_{G(\lambda_j, T)}$ is [nilpotent](202102221258_nilpotentOperatorDefinition)

Links: [Restricted operator](202102121258_restrictionOperatorDefinition)

References: 

[Return to Index](index)