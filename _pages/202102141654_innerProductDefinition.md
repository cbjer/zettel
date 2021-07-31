---
title: Inner Product Definition
permalink: /zettel/202102141654_innerProductDefinition
layout: page
tags: linear algebra
---
# Inner Product Definition

An **inner product** on $V$ is a function that takes any ordered pair $(u,v)$ of elements of $V$
to a number $\langle u,v \rangle \in \mathbf{F}$ and has the following properties:
- **positivity** $$\langle v, v \rangle \geq 0 \quad \textrm{for all} \, v \in V$$
- **definiteness** $$\langle v, v \rangle = 0 \iff v = 0$$
- **additivity in the first slot** $$\langle u+v, w\rangle = \langle u, w \rangle + \langle v, w \rangle \quad \textrm{for all} \quad u, v, w \in V$$
- **homogeneity in the first slot** $$\langle \lambda u, v \rangle = \lambda \langle u, v \rangle \quad \textrm{for all} \, \lambda \in \mathbf{F} \, \textrm{and all} \, u, v \in V$$
- **conjugate symmetry** $$\langle u, v \rangle = \overline{\langle v, u \rangle} \quad \textrm{for all} \, u, v \in V$$

Links: [Basic Properties of an Inner Product](202102141711_basicPropertiesInnerProduct)

References: 

[Return to Index](index)