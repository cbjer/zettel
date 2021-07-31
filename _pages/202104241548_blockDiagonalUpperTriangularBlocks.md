---
title: Block Diagonal Matrix with Upper-Triangular Blocks
permalink: /zettel/202104241548_blockDiagonalUpperTriangularBlocks
layout: page
---
tags: #linear #algebra

# Block Diagonal Matrix with Upper-Triangular Blocks

If we have a complex vector space $V$ with operator $T$ and $\lambda_1, \ldots, \lambda_m$ the distinct
[eigenvalues](202102120912_eigenvalueDefinition) of $T$ with [multiplicities](202104241520_multiplictyDefinitionEigenvalue) 
$d_1, \ldots, d_m$, then there is a basis of $V$ with respect to which $T$ has [block diagonal matrix form](202104241535_blockDiagonalMatrixDefinition) :

$$
\begin{pmatrix}
A_1 & & 0 \\
 & \ddots & \\
 0 & & A_m \\
\end{pmatrix}
$$

where each $A_j$ is a $d_j$-by-$d_j$ [upper triangular matrix](202102131604_upperTriangularMatrix) of the form:

$$
\begin{pmatrix}
\lambda_j & & \ast \\
 & \ddots & \\
 0 & & \lambda_j \\
\end{pmatrix}
$$

Links: 

References: 

[Return to Index](index)