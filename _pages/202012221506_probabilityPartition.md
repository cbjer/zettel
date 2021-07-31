---
title: Probability Partition
permalink: /zettel/202012221506_probabilityPartition
layout: page
tags: events conditional conditioning

---
# Probability Partition

A partition in probability is simply a set of events such that they are pairwise disjoint and their
union equals the entire event space. Ie a set of events $ \{ A_i \}$ such that

$$
A_i \cap A_j = \emptyset \quad i \neq j \\
\bigcup_i A_i = S
$$

Using the definitional of [conditional probability](202012221446_definitionConditionalProbability) and that probabilities of 
disjoint events equals the sum of probabilities of those events, we get

$$
\begin{aligned}
P(B) &= P(B \cap S) \\
&= \sum_i P ( B \cap A_i ) \\
P(B) &= \sum_i P (B | A_i)P(A_i) \quad \textbf{Conditioning over partition $A_i$}
\end{aligned}
$$

Links: 

References: 

[Return to Index](index)