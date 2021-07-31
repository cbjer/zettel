---
title: Matrix of a Linear Map
permalink: /zettel/202102072233_matrixLinearMap
layout: page
---
tags: #linear #algebra

# Matrix of a Linear Map

For a [linear map](202102071416_linearMapDefinition) $T \in \mathcal{L}(V,W)$ with a [basis](202102062154_basisDefinition) 
$v_1, \ldots, v_n$ for $V$ and $w_1, \ldots, w_m$ a basis for $W$, we define the **matrix of $T$** as 
the m-by-n matrix $\mathcal{M}(T)$ whose entries $A_{j, k}$ are defined by
$$
T(v_k) = A_{1,k} w_1 + \cdots + A_{m,k}w_m
$$

Remember a matrix of a linear map is defined **with respect to 2 sets of basis**.

Can remember it as applying $T$ to each $v_j$ as the columns.

Matrices of linear maps are additive, have scalar multiplication and an additive identity and can
therefore be shown to be a [vector space](202102061359_vectorSpaceDefinition)

With respect to [matrix multiplication](202102072302_matrixMultiplicationProperties), we have that $\mathcal{M}(ST) = \mathcal{M}(S) \mathcal{M}(T)$

Links: 

References: 

[Return to Index](index)