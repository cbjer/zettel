---
title: Metropolis Hastings Algorithm
permalink: /zettel/202101161359_metropolisHastings
layout: page
---
tags: #sampling #posterior #intractable

# Metropolis Hastings Algorithm

The Metropolis Hastings Algorithm is a form of [Markov Chain Monte Carlo](TODOs) used to sample from a, often intractable, density function called the **target distribution** $p(x)$.
It works by jumping through the sammple space to form a Markov Chain, either accepting or rejecting each new point.

We also need to specify a **transition / proposal distribution** which will control how we jump to new points, starting at the most recently accepted point. This proposal distribution $q(y|x)$, will
often be a $\mathcal{N}(x \vert 1)$ distribution. That is we form a random walk centred at the previously accepted point. The algorithm proceeds as

- Initialise a starting point $X_1 = x_1$
- Sample a new point using the proposal distribution $x' \sim q(y \vert x_t)$. This is our proposal for $x_{t+1}$.
- Compute the ratio $$r = \frac{p(x')q(x_t \vert x')}{p(x_t) q(x' \vert x_t)}$$
- Sample $u \sim U(0,1)$
- If $r > u$, then we accept our proposed sample $x_{t+1} = x'$. If not set $x_{t+1} = x_t$. Return to the second step to sample next point.

Typically we also include a burn-in period whereby we only start using our samples after some period of time $t > T$.

Metropolist Hastings is very useful in [Bayesian Inference](202101161711_bayesianInference) when trying to sample from an intractable [posterior distribution](TODOs).


Links: [Metropolis Hastings Five Minute Stats](https://stephens999.github.io/fiveMinuteStats/MH_intro.html)

References: 

[Return to Index](index)