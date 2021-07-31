---
title: Jordan Basis Definition
permalink: /zettel/202104251012_jordanBasisDefinition
layout: page
tags: linear algebra

---
# Jordan Basis Definition

Suppose have operator $T$. A [basis](202102072233_matrixLinearMap) of $V$ is called a 
**Jordan basis** for $T$ if with respect to this basis $T$ has a [block diagonal matrix](202104241535_blockDiagonalMatrixDefinition)
of the form:

$$
\begin{pmatrix}
A_1 & & 0 \\
 & \ddots & \\
 0 & & A_p \\
\end{pmatrix}
$$

where each $A_j$ is an [upper-triangular matrix](202102131604_upperTriangularMatrix) of the form:

$$
\begin{pmatrix}
\lambda_j & 1 & & 0 \\
 & \ddots &  \ddots & \\
 & & \ddots & 1 \\
 0 & & & \lambda_j \\
\end{pmatrix}
$$

Links: 

References: 

[Return to Index](index)