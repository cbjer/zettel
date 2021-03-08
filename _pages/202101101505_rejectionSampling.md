---
title: Zettels
permalink: /zettel/202101101505_rejectionSampling
layout: default
---
tags: #sampling

# Rejection Sampling

The rejection sampling method is used to sample from a target distribution which is otherwise difficult to sample from, but which we have another
pdf, the candidate distribution, which bounds our target distribution and which we can already sample from.

The algorithm setup, for target distribution $X \sim f$ and candidate distribution $Y \sim g$:
- Find constant $M$ such that $f(x) \leq M q(x) \quad \forall x \in \Omega$
- Simulate $Y \sim q$ and $U \sim U(0,1)$, getting samples $y$ and $u$
- If $u \leq \frac{f(y)}{M q(y)}$ then we accept $y$ as our sample from $X$. If not we restart. 

Proof of why this works:
$$
\begin{aligned}
P(X \leq x) =& P \big( Y \leq x | U \leq f(Y) / M q(Y) \big) \\
=& \frac{P(Y \leq x, U \leq f(Y) / Mq(Y))}{K} \quad \textrm{using} \, P(A,B) = P(A|B)P(B) \, \textrm{and defining} \, K = P(B) \\
=& \frac{1}{K} \int_{y} P(Y \leq x, U \leq f(Y) / Mq(Y) | Y = y ) q(y) dy \\
=& \frac{1}{K} \int_{-\infty}^{x} P(U \leq f(y) / Mq(y) ) q(y) dy \\
=& \frac{1}{K} \int_{-\infty}^{x} \frac{f(y)}{M q(y)} q(y) dy \quad \textrm{using pdf of a uniform distribution} \\
=& \frac{1}{K M} \int_{-\infty}^{x} f(y) dy \\
=& F_X(x) \quad \textrm{taking x to infinity to find constant} \, K = \frac{1}{M} \\
\end{aligned}
$$

Links: [Rejection Sampling Method](https://www.sciencedirect.com/topics/mathematics/rejection-method)

References: 

[Return to Index](index)