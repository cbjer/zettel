---
title: Zettels
permalink: /zettel/202102161843_adjointDefinition
layout: default
---
tags: #linear #algebra

# Adjoint Definition

Suppose $T \in \mathcal{L}(V,W)$ is a [linear map](202102071416_linearMapDefinition), then the **adjoint**
of $T$ is the function $T^* : W \rightarrow V$ such that
$$
\langle Tv, w \rangle = \langle v, T^* w \rangle
$$
for every $v \in V$ and $w \in W$.

Using the definition and [basic properties of inner products](202102141711_basicPropertiesInnerProduct) we can show 
that the adjoint is a linear map. Ie $T^* \in L(W, V)$

Links: [Inner Product](202102141654_innerProductDefinition) [Basic Properties of the Adjoint](202102162010_propertiesOfAdjoint)

References: 

[Return to Index](index)