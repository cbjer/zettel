---
title: Equivalences of Isometries 
permalink: /zettel/202102201252_equivalencesIsometries
layout: page
tags: linear algebra

---
# Equivalences of Isometries 

If we have $S \in \mathcal{L}(V)$, then the following are equivalent:
- $S$ is an [isometry](202102201248_isometryDefinition)
- $\langle S u , S v \rangle = \langle u , v \rangle$ for all $u, v \in V$
- $S e_1 , \ldots , S e_n$ is [orthonormal](202102142052_orthonormalDefinition) for every orthonormal list of vectors $e_1, \ldots, e_n$ in $V$
- There exists an [orthonormal basis](202102142105_orthonormalBasisDefinition) $e_1, \ldots , e_n$ of $V$ such that $S e_1 , \ldots , S e_n$ is orthonormal
- $S^* S = I$
- $SS^* = I$
- $S^*$ is an isometry
- $S$ is [invertible](202102081851_invertibleMap) and $S^{-1} = S^*$

Showing these results, we use that:
- $\langle Su, S v \rangle  = \big( \Vert S u + S v \Vert^2 - \Vert S u - S v \Vert^2 \big) / 4$

We also note every isometry is [normal](202102162200_normalOperatorDefinition)

Links: [Adjoint](202102161843_adjointDefinition)

References: 

