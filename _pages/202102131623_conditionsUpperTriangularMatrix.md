---
title: Conditions for Upper-Triangular Matrix
permalink: /zettel/202102131623_conditionsUpperTriangularMatrix
layout: page
tags: linear algebra

---
# Conditions for Upper-Triangular Matrix

If we have an [operator](202102082104_operatorDefinition) $T$ and $v_1, \ldots, v_n$ a [basis](202102062154_basisDefinition) 
of $V$. Then the following are equivalent
- The [matrix](202102072233_matrixLinearMap) of $T$ with respect to $v_1, \ldots, v_n$ is [upper-triangular](202102131604_upperTriangularMatrix)
- $T v_j \in \mathrm{span}(v_1, \ldots, v_j)$ for each $j = 1, \ldots, n$. "In the [span](202102062022_spanDefinition)"
- $\mathrm{span}(v_1, \ldots, v_j)$ is [invariant](202102120907_invariantSubspace) under $T$ for each $j = 1, \ldots, n$

Links: 

References: Ref 5.26

