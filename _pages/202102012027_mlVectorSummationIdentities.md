---
title: Machine Learning Vector Summation Identities
permalink: /zettel/202102012027_mlVectorSummationIdentities
layout: page
---
tags: #identity #matrix #sum

# Machine Learning Vector Summation Identities

For a set of training examples $\{\mathbf{x}_i \}_{i=1}^n$, where each $\mathbf{x} \in \mathbb{R}^p$, we define the **data matrix** $\mathrm{X} \in \mathbb{R}^{n x p}$ as 
$$
\mathrm{X} = 
\begin{pmatrix}
\mathbf{x}_1^T \\
\vdots \\
\mathbf{x}_n^T
\end{pmatrix}
$$

Sum of squared elements : $$\sum_i y_i^2 = \mathbf{y}^T \mathbf{y}$$

For $y \in \mathbb{R}$ : $$\sum_i x_i y_i = \mathrm{X}^T \mathbf{y} \\
\sum_i x_i f(x_i) = \mathrm{X}^T f(\mathrm{X}) \quad \textrm{where} \,f(\mathrm{X}) = \begin{pmatrix} f(\mathbf{x}_1) \\ \vdots \\ f(\mathbf{x}_n) \end{pmatrix}$$

Outer product of training data : $$\sum_i \mathbf{x}_i \mathbf{x}^T_i = \mathrm{X}^T \mathrm{X}$$


$$
\mathrm{X} \mathbf{w} =
\begin{pmatrix}
\mathbf{x}_1^T \mathbf{w} \\
\vdots \\
\mathbf{x}_n^T \mathbf{w}
\end{pmatrix}
=\begin{pmatrix}
\mathbf{w}^T \mathbf{x}_1 \\
\vdots \\
\mathbf{w}^T \mathbf{x}_n
\end{pmatrix}
$$

Links: 

References: 

[Return to Index](index)