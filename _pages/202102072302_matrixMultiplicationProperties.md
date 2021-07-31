---
title: Matrix Multiplication Properties
permalink: /zettel/202102072302_matrixMultiplicationProperties
layout: page
tags: linear algebra

---
# Matrix Multiplication Properties

[Matrix](202102072233_matrixLinearMap) multiplication is defined, for a m-by-n matrix $A$ and a n-by-p matrix $C$ as 
$$
(AC)_{j, k} = \sum_{r=1}^n A_{j,r}C_{r,k}
$$

Notation $A_{j, \cdot}$ is the j-th row in the matrix $A$. $A_{\cdot, k}$ is the k-th column. 
Means that $$(AC)_{j,k} = A_{j, \cdot} C_{\cdot, k}$$

We also have $$(AC)_{\cdot, k} = A C_{\cdot, k}$$

Also trick if $\mathbf{c}$ is a n-by-1 column vector, then $A \mathbf{c} = \sum_{i=1}^n c_i A_{\cdot, i}$
Ie we can do a dot product with the columns of $A$.


Links: 

References: 

[Return to Index](index)