---
title: Matrix of a Vector Definition
permalink: /zettel/202102082009_matrixOfVector
layout: page
tags: linear algebra
---
# Matrix of a Vector Definition

If we have a vector $v \in V$ with $v_1, \ldots, v_n$ as a [basis](202102062154_basisDefinition) for $V$, then 
we define the **matrix of $v$** with respect to this basis as the n-by-1 [matrix](202102072233_matrixLinearMap)
$$
\mathcal{M}(v) = 
\begin{pmatrix} 
c_1 \\
\vdots \\
c_n
\end{pmatrix}
$$

where $c_1, \ldots, c_n$ are scalars such that 
$$
v = c_1 v_1 + \cdots + c_n v_n
$$

Using the [column notation](202102072302_matrixMultiplicationProperties), we can see for a basis element $v_k$
$$
\mathcal{M}(T)_{\cdot, k} = \mathcal{M}(v_k)
$$

Links: 

References: 

[Return to Index](index)