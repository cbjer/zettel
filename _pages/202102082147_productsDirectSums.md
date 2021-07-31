---
title: Products and Direct Sums
permalink: /zettel/202102082147_productsDirectSums
layout: page
---
tags: #linear #algebra

# Products and Direct Sums

If we have [subspaces](202102061429_subspaceDefinition) $U_1, \ldots, U_m$ of $V$ and we define the [linear map](202102071416_linearMapDefinition)
$$\Gamma : U_1 \times \cdots \times U_m \rightarrow U_1 + \cdots + U_m \\
\Gamma(u_1, \ldots, u_m) = u_1 + \cdots + u_m
$$

Then $U_1 + \cdots U_m$ is a [direct sum](202102061512_directSumDefinition) if and only if 
$\Gamma$ is [injective](202102071749_injectiveDefinition)

This can be shown via
- [injective if and only if null space is 0](202102071751_injectivityNullSpace)
- [unique zero direct sum condition](202102061527_uniqueZeroDirectSum)

Links: 

References: 

[Return to Index](index)