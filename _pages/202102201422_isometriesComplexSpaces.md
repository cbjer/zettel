---
title: Isometries for Complex Spaces
permalink: /zettel/202102201422_isometriesComplexSpaces
layout: page
tags: linear algebra
---
# Isometries for Complex Spaces

If we have $V$ as a complex [inner product space](202102141708_innerProductSpace) and $S \in \mathcal{L}(V)$, then the following 
are equivalent:
- $S$ is an [isometry](202102201248_isometryDefinition)
- There is an [orthonormal basis](202102142105_orthonormalBasisDefinition) of $V$ consisting of [eigenvectors](202102120943_eigenvectorDefinition) 
  of $S$ whose corresponding [eigenvalues](202102120912_eigenvalueDefinition) all have absolute value 1.
  
For the proof we use the [complex spectral theorem](202102182045_complexSpectralTheorem) and that 
$$
\vert \lambda_j \vert = \Vert \lambda_j e_j \Vert = \Vert S e_j \Vert = \Vert e_j \Vert = 1
$$

Links: 

References: 

[Return to Index](index)