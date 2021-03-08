---
title: Zettels
permalink: /zettel/202102151055_rieszRepresentationTheorem
layout: default
---
tags: #linear #algebra

# Riesz Representation Theorem

**Riesz Representation Theorem** says that if we have a finite dimensional space $V$ with a 
[linear functional](202102151052_linearFunctionalDefinition) $\phi$ on $V$, then there is a unique 
vector $u \in V$ such that 
$$
\phi(v) = \langle v, u \rangle
$$

The form of $u$ is specifically 
$$
u = \overline{\phi(e_1)}e_1 + \cdots + \overline{\phi(e_n)}e_n
$$

which is unique, regardless of choice of [orthonormal basis](202102142105_orthonormalBasisDefinition)

The proof is straightforward using [expression for v as linear combination of orthonormal basis](202102142128_linearCombinationOrthonomalBasis).
We have to show existence and uniqueness.



Links: 

References: Axler P188. Ref 6.42

[Return to Index](index)