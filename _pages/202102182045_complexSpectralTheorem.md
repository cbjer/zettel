---
title: Complex Spectral Theorem
permalink: /zettel/202102182045_complexSpectralTheorem
layout: page
tags: linear algebra

---
# Complex Spectral Theorem

If we have $\mathbf{F} = \mathbf{C}$ and $T$ an [operator](202102082104_operatorDefinition), then the following are equivalent:
- $T$ is [normal](202102162200_normalOperatorDefinition)
- $V$ has an [orthonormal basis](202102142105_orthonormalBasisDefinition) consisting of [eigenvectors](202102120943_eigenvectorDefinition) of $T$
- $T$ has a [diagonal](202102141025_diagonalMatrix) matrix with respect to some orthonormal basis

To see the proof, note:
- If $T$ is a diagonal matrix, the [adjoint](202102161843_adjointDefinition) of $T$ is obtained [by taking the conjugate transpose](202102162035_conjugateTransposeDefinition). 
  Hence $T^*$ is also diagonal and we can show 2 diagonal matrices commute with each other, therefore we can show the condition to be normal.
- We use [Schur's theorem](202102151048_schursTheoremUpperTriangularOrthonormal) to get an upper triangular form. We then note
$$
\Vert T e_1 \Vert^2 = \vert a_{1,1} \vert^2 \\
\Vert T^* e_1 \Vert^2 = \vert a_{1,1}\vert^2 + \cdots + \vert a_{1,n} \vert^2
$$
  using the conjugate transpose result. But using the [norm of normal result](202102162206_normalNormAdjoint) we see that 
  all terms will drop other than the diagonal. Thus the matrix is actually a diagonal one.

Links: [Real Spectral Theorem](202102191218_realSpectralTheorem)

References: 

[Return to Index](index)