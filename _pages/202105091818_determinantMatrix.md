---
title: Determinant of a Matrix
permalink: /zettel/202105091818_determinantMatrix
layout: page
tags: linear algebra

---
# Determinant of a Matrix

If we have a n-by-n matrix:
$$ A = 
\begin{pmatrix}
A_{1,1} & \cdots & A_{1,n} \\
\vdots & & \vdots \\
A_{n,1} & \cdots & A_{n,n}
\end{pmatrix}
$$

Then the [determinant](202105091734_determinantOperatorDefinition) of $A$, denoted as $\textrm{det} \, A$, is 
defined by
$$
\textrm{det} \, A = \sum_{(m_1, \ldots, m_n) \in \textrm{perm} \, n} \big( \textrm{sign}(m_1, \ldots, m_n) \big) A_{m_1, 1} \cdots A_{m_n, n}
$$

Links: 

References: 

[Return to Index](index)