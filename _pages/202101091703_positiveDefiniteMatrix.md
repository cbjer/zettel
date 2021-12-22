---
title: Positive Definite Matrix
permalink: /zettel/202101091703_positiveDefiniteMatrix
layout: page
tags: linear algebra definition

---
# Positive Definite Matrix

A **positive definite matrix** is a symmetric matrix $M$ which has the property that for all non-zero $y$,

$$
y^T M y > 0 \quad \forall y \neq 0
$$

A **positive semi-definite matrix** relaxes the condition to be **greater than or equal to zero** for all $y$. Ie
$$
y^T M y \geq 0 \quad \forall y
$$

We can show this definition [is equivalent to the definition of a positive operator](202108302054_equivalencePositiveSemiDefiniteMatrixPositiveOperator).

Links: [Positive Operator](202102201207_positiveOperatorDefinition)

References: 

