---
title: Singular Value Decomposition
permalink: /zettel/202102201910_singularValueDecomposition
layout: page
tags: linear algebra

---
# Singular Value Decomposition

If we have an [operator](202102082104_operatorDefinition) $T$, with [singular values](202102201841_singularValuesDefinition) $s_1, \ldots, s_n$,
then there exist [orthonormal bases](202102142105_orthonormalBasisDefinition) $e_1, \ldots, e_n$ and $f_1, \ldots, f_n$ of $V$
such that:
$$
T v = s_1 \langle v, e_1 \rangle f_1 + \cdots + s_n \langle v, e_n \rangle f_n \\
\textrm{for every} \, v \in V
$$

For the proof we note:
- Since $\sqrt{T^{\ast} T}$ is [self-adjoint](202102162040_selfAdjointOperator) we can use the [spectral theorem](202102191218_realSpectralTheorem) 
  to create an orthonormal basis of eigenvectors of $\sqrt{T^{\ast} T}$.
$$
\sqrt{T^*T} e_j = s_j e_j
$$
- These eigenvalues are exactly the singular values.
- The [expression for v in terms of linear combination of orthonormal basis](202102142128_linearCombinationOrthonomalBasis). Apply $\sqrt{T^{\ast} T}$ to both sides.
$$
v = \langle v, e_1 \rangle e_1 + \cdots + \langle v, e_n \rangle e_n
$$
- Use the [polar decomposition](202102201834_polarDecomposition) to get an [isometry](202102201248_isometryDefinition) such that 
  we can write $T = S \sqrt{T^{\ast} T}$. We apply $S$ to each side.
- Then using the [equivalences for an isometry](202102201252_equivalencesIsometries) to get the second orthonormal basis

Links: 

References: Axler p237. Ref 7.51

[Return to Index](index)