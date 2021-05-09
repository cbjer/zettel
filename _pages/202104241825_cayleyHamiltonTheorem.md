---
title: Zettels
permalink: /zettel/202104241825_cayleyHamiltonTheorem
layout: default
---
tags: #linear #algebra

# Cayley-Hamilton Theorem

Take $V$ a complex vector space and $T$ an operator. Denote the [characteristic polynomial](202104241811_characteristicPolynomialDefinition) 
of $T$ as $q$. Then 

$$
q(T) = (T - \lambda_1 I)^{d_1} \cdots (T - \lambda_m I)^{d_m} =  0
$$

The result also applies for a real vector space $V$ with $T \in \mathcal{L}(V)$.

The proof is straightforward:
- Take the distinct [eigenvalues](202102120912_eigenvalueDefinition) of $T$, $\lambda_1, \ldots, \lambda_m$, with
$d_1, \ldots, d_m$ as the corresponding [multiplicities](202104241520_multiplictyDefinitionEigenvalue) 
- We know that $(T - \lambda_jI) \vert_{G(\lambda_j, T)}$ is [nilpotent](202102221258_nilpotentOperatorDefinition) by [complex vector space result](202104241507_descriptionOperatorComplexSpaceGeneralisedEigenspace). Ie $(T - \lambda_jI)^{d_j} \vert_{G(\lambda_j, T)} = 0$ 
- Using the same result, we can create a basis for $V$ composing of [generalised eigenvectors](202102221239_generalizedEigenvectorDefinition) of $T$, so only need to show $q(T)$ is $0$ on each [generalised eigenspace](202102221242_generalizedEigenspaceDefinition).
- By rearranging the characteristic polynomial (elements commute), we can put the corresponding $(T - \lambda_j I)^{d_j}$ component to the right. Using the nilpotent result above, $q$ is $0$ on each generalised eigenspace.
- Thus it is $0$ for every element in $V$

Links: 

References: 

[Return to Index](index)