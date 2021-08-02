---
title: Minimising the Distance to a Subspace
permalink: /zettel/202102151948_minimisingDistanceSubspace
layout: page
tags: linear algebra

---
# Minimising the Distance to a Subspace

If we have $U$ a finite dimensional subspace of $V$, with $v \in V$ and $u \in U$ then
$$
\Vert v - P_U v \Vert \leq \Vert v - u \Vert
$$

The inequality is an equality if an only if $u = P_U v$

What this is saying is that, if we have fixed vectors $u$ and $v$, the distance between $v$ and its [projection](202102151855_orthogonalProjectionDefinition) 
onto $U$ is always less than or equal to the distance between $v$ and $u$

We show this by adding on $\Vert P_U v - u \Vert^2$ onto the LHS and using the [pythagorean theorem](202102141728_pythagoreanLinearAlgebra).

$$
\begin{aligned}
\Vert v - P_U v \Vert^2 &\leq \Vert v - P_U v \Vert^2 + \Vert P_U v - u \Vert^2 \\
&= \Vert (v - P_U v) + ( P_U v - u) \Vert^2 \\
&= \Vert v - u \Vert^2
\end{aligned}
$$

Where we have used [basic properties of an orthogonal project](202102151928_propertiesOrthogonalProjection) to show that $v - P_Uv$ is in the 
[orthogonal projection](202102151855_orthogonalProjectionDefinition) and $P_U v - u$ is in $U$. Therefore they are [orthogonal](202102141725_orthogonalDefinition) and
we can therefore use the pythagorean theorem.

Steps for finding the closest point:
- Find an [orthonormal basis](202102142105_orthonormalBasisDefinition) for the subspace
- Write $v$ [as a linear combination of the orthonormal basis](202102142128_linearCombinationOrthonomalBasis)
- This is the projection of $v$ onto $U$

Links: 

References: 

