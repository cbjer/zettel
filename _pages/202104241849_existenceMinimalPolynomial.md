---
title: Zettels
permalink: /zettel/202104241849_existenceMinimalPolynomial
layout: default
---
tags: #linear #algebra

# Existence Minimal Polynomial

Suppose $T$ an operator. Then there is a unique [monic polynomial](202104241842_monicPolynomialDefinition) $p$
of smallest degree such that $p(T) = 0$.

Proof:
- We take the smallest $m$ such that $I, T, T^2, \ldots, T^m$ is [linearly dependent](202102062038_linearlyDependentDefinition)
- Since smallest, means we can write $T^m$  as a linear combination of the others. We define the polynomial as this combination.

Links: 

References: Axler 8.40 p263

[Return to Index](index)