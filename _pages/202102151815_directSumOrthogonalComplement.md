---
title: Direct Sum of Subspace with Orthogonal Complement
permalink: /zettel/202102151815_directSumOrthogonalComplement
layout: page
tags: linear algebra
---
# Direct Sum of Subspace with Orthogonal Complement

If we have $U$ as a finite dimensional [subspace](202102061429_subspaceDefinition) of $V$ then
$$
V = U \oplus U^{\bot}
$$

Ie, $U$ and its [orthogonal complement](202102151112_orthogonalComplementDefinition) form a [direct sum](202102061512_directSumDefinition)

For the proof we note that we can write for $v \in V$, using a basis for $U$, as 
$$
v = \big[ \langle v, e_1 \rangle e_1 + \cdots + \langle v, e_m \rangle e_m \big] + \big[ v - \langle v, e_1 \rangle e_1 - \cdots - \langle v, e_m \rangle e_m \big]
$$

With the first term being in $U$ and the second it its orthogonal complement.

Links: 

References: 

[Return to Index](index)