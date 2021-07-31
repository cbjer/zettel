---
title: Orthogonal Decomposition
permalink: /zettel/202102141731_orthogonalDecomposition
layout: page
tags: linear algebra
---
# Orthogonal Decomposition

The following shows we can write any vector $u$ as a sum of two [orthogonal vectors](202102141725_orthogonalDefinition),

For fixed $u, v \in V$ with $v \neq 0$:

$$
u = c v + w \quad \textrm{where} \\
c = \frac{\langle u, v \rangle}{\Vert v \Vert^2} \quad \textrm{and} \quad w = u - \frac{\langle u,v \rangle}{\Vert v \Vert^2} v
$$

With this we have that $\langle w, v \rangle = 0$, ie that they are orthogonal.

Links: 

References: 

[Return to Index](index)