---
title: Permuting Columns in a Matrix Determinant
permalink: /zettel/202105091831_permutingColumnsDeterminant
layout: page
tags: linear algebra

---
# Permuting Columns in a Matrix Determinant

If $A = (\, A_{\cdot, 1} \, \cdots \, A_{\cdot, n} \, )$, where $A_{\cdot, k}$ denotes the kth column of $A$, and taking 
$(m_1, \ldots, m_n)$ as a [permutation](202105091800_permutationDefinition), then

$$
\textrm{det} (\, A_{\cdot, 1} \, \cdots \, A_{\cdot, n} \, ) = \big( \textrm{sign}(m_1, \ldots, m_n) \big) \, \textrm{det} \, A
$$

Basically, if we switch two columns in a matrix, the determinant is multiplied by $-1$.

Links: 

References: 

[Return to Index](index)