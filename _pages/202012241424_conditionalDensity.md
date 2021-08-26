---
title: Conditional Density Definition
permalink: /zettel/202012241424_conditionalDensity
layout: page
tags: definition

---
# Conditional Density Definition

We define the conditional density function $f_{X \vert Y}(x)$ as 

$$
f_{X|Y}(x) = \frac{f_{X Y}(x, y)}{f_Y(y)}
$$

Assuming $f_Y(y) > 0$

That it is the joint distribution of $X$ and $Y$ divided by the marginal distribution of $Y$, in exactly the same
relation as in the [definition of conditional probability](202012221446_definitionConditionalProbability) except with density 
functions.

If we then want what is the probability that $X$ is in some set $A$, we would compute:

$$
\mathrm{P} ( X \in A | Y = y ) = \int_A f_{X|Y}(x|y) dx 
$$

Links: 

References: 

