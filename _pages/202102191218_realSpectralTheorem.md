---
title: Real Spectral Theorem
permalink: /zettel/202102191218_realSpectralTheorem
layout: page
tags: linear algebra

---
# Real Spectral Theorem

If we have $\mathbf{F} = \mathbf{R}$, and [operator](202102082104_operatorDefinition) $T$, then the following are
equivalent:
- $T$ is [self-adjoint](202102162040_selfAdjointOperator)
- $V$ has an [orthonormal basis](202102142105_orthonormalBasisDefinition) consisting of eigenvectors of $T$.
- $T$ has a [diagonal matrix](202102141025_diagonalMatrix) with respect to some orthonormal basis of $V$

Easy to see that if it has a diagonal matrix, then this equals its transpose and thus is self-adjoint
by the [result of conjugate transpose matrix for the adjoint operator](202102162035_conjugateTransposeDefinition) (no conjugate 
part as real vector space)


Links: [Complex Spectral Theorem](202102182045_complexSpectralTheorem) 

References: Axler P221. Ref 7.29

[Return to Index](index)