---
title: Zettels
permalink: /zettel/202102142133_gramSchmidtProcedure
layout: default
---
tags: #linear #algebra

# Gram-Schmidt Procedure

The **Gram-Schmidt Procedure** is a iterative process to form an [orthonormal](202102142052_orthonormalDefinition) list 
of vectors, starting from a [linearly independent](202102062030_linearlyIndependentDefinition) list. It 
keeps the [span](202102062022_spanDefinition) of the original linearly independent list equal to span of the final orthonormal list.

Suppose $v_1, \ldots, v_m$ is a linearly independent list of vectors in $V$. Then
1. Let $e_1 = v_1 / \Vert v_1 \Vert$ 
2. For $j = 2, \ldots, m$ define
$$
e_j = \frac{v_j - \langle v_j, e_1 \rangle e_1 - \cdots - \langle v_j, e_{j-1} \rangle e_{j-1}}{\Vert v_j - \langle v_j, e_1 \rangle e_1 - \cdots - \langle v_j, e_{j-1} \rangle \Vert}
$$
3. Then $e_1, \cdots, e_m$ is an orthonormal list of vectors such that 
$$
\textrm{span}(v_1, \ldots, v_j) = \textrm{span}(e_1, \ldots, e_j) \quad \textrm{for} \, j = 1, \cdots, m
$$

Links: 

References: P183 Axler. 6.31

[Return to Index](index)