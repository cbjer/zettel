---
title: EM Algorithm Steps using KL-Divergence
permalink: /zettel/202111251825_EMAlgorithmStepsusingKLDivergence
layout: page
tags: 

---
# EM Algorithm Steps using KL-Divergence

Alternative view of the [EM-Algorithm](202111071246_EMAlgorithm)

__Derivation__:

We aim to maximise $p(X \vert \Theta)$, but this is difficult. 

But optimising $p(X, Z \vert \Theta)$ is easy.

We define $q(Z)$ as a distribution over the latent variable $Z$. We can then write the log-likelyhood as:
$$
\log p(X \vert \Theta) = \mathcal{L}(q, \Theta) + D_{KL} ( q \vert \vert p(Z \vert X, \Theta))
$$
where 
$$
\mathcal{L}(q, \Theta) = E_{q(Z)} \Big[ \log \frac{P(X,Z \vert \Theta)}{q(Z)} \Big] = \sum_Z q(Z) \log \frac{p(X, Z \vert \Theta) }{q(Z)} \\
D_{KL} ( q \vert \vert p(Z \vert X, \Theta)) = \sum_Z q(Z) \log \frac{q(Z)}{p(Z \vert X, \Theta)}
$$
ie the [KL Divergence](202111251549_KLDivergence) of $q$ with the posterior of the latents.

We can then view the EM algorithm as such:

In the **E-Step** we set $q$ to be the latent posterior, which turns the KL-Divergence to $0$. This brings our $\mathcal{L}$ function to be equal to the log-likelyhood.

In the **M-Step** we then keep $q$ fixed and apply an optimation on $\Theta$ to increase the value of $L$. Since the KL-Divergence is non-negative, this optimisation on $\mathcal{L}$ increase the log-likelyhood by atleast as much.

**Iterative steps:**

Start with some parameters $\Theta_{old}$.

Set $q$ equal $p(Z \vert X, \Theta_{old})$. Call it $q_{old}$.

This results in $\log p(X \vert \Theta_{old}) = \mathcal{L}(q_{old}, \Theta_{old})$

We then optimise $\mathcal{L}$ with this $q$ fixed. Resulting in $\Theta_{new}$, such that $\mathcal{L}(q_{old}, \Theta_{old}) \leq \mathcal{L}(q_{old}, \Theta_{new})$.

So:

$$
\begin{aligned}
\log p(X \vert \Theta_{old}) &= \mathcal{L}(q_{old}, \Theta_{old}) \\
& \leq \mathcal{L}(q_{old}, \Theta_{new}) \\
& \leq \mathcal{L}(q_{old}, \Theta_{new}) + D_{KL}(q_{old} \vert \vert p(Z \vert X, \Theta_{new}) \\ 
&= \log p(X \vert \Theta_{new})
\end{aligned}
$$

We see these two steps result in an increasing log-likelyhood.

In the M-Step, maximising $\mathcal{L}(q, \Theta)$ is equivalent to maximising:
$$
E_{q(Z)} \Big[ \log P(X,Z \vert \Theta) \Big] = E_{q(Z)} \Big[ \log P(X \vert Z, \Theta) + \log P(Z \vert \Theta) \Big]
$$
as we are holding $q$ constant. (Despite $q$ including $\Theta$ terms, these are assumed constant). Since we are taking an expectation with respect to $q(Z)$, we do not need to know the actual $z_i$ values.

Links: 

References: [Toronto Lecture Notes](https://www.cs.toronto.edu/~rgrosse/courses/csc2515_2019/slides/lec09-slides.pdf)

