---
title: Properties of the Orthogonal Projection
permalink: /zettel/202102151928_propertiesOrthogonalProjection
layout: page
tags: linear algebra
---
# Properties of the Orthogonal Projection

The [orthogonal projection](202102151855_orthogonalProjectionDefinition) has the following properties, with $U$ a subspace of $V$
- $P_U \in \mathcal{L}(V)$
- $P_U u = u \quad \textrm{for each} \, u \in U$
- $P_U w = 0 \quad \textrm{for each} \, w \in U^{\bot}$
- $\textrm{range} \, P_U = U$
- $\textrm{null} \, P_U = U^{\bot}$
- $v - P_U v \in U^{\bot}$
- $P_U^2 = P_U$
- $\Vert P_U v \Vert \leq \Vert v \Vert$
- For every [orthonormal basis](202102142105_orthonormalBasisDefinition) $e_1, \ldots, e_m$ of $U$:
  $$P_U v = \langle v, e_1 \rangle + \cdots + \langle v, e_m \rangle e_m $$

Links: 

References: 

[Return to Index](index)