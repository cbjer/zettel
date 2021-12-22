---
title: Equivalence of Positive Semi-Definite Matrix and Positive Operator
permalink: /zettel/202108302054_equivalencePositiveSemiDefiniteMatrixPositiveOperator
layout: page
tags: equivalence positive

---
# Equivalence of Positive Semi-Definite Matrix and Positive Operator

We will show that a [Positive Semi-Definite Matrix](202101091703_positiveDefiniteMatrix) is equivalent to a 
[Positive Operator](202102201207_positiveOperatorDefinition). We will assume vector space over $\mathbb{R}$.

Forward direction:
- Take positive semi-definite matrix $M$.
- Since $M$ is symmetric, $M$ is self-adjoint by [adjoint of a matrix](202102162037_matrixAdjoint).
- Assume $\lambda$ is an [eigenvalue](202102120912_eigenvalueDefinition) of $M$ with 
[eigenvector](202102120943_eigenvectorDefinition) $\mathbf{v}$, then
$$
0 \leq \mathbf{v}^T M \mathbf{v} = \mathbf{v}^T \lambda \mathbf{v} = \lambda \mathbf{v}^T \mathbf{v} \implies \lambda \geq 0
$$
- Since $M$ is self-adjoint and all its eigenvalues are non-negative and using the [isomorphism between linear maps and matrices](202102081944_mapSpaceIsomorphicMatrixSpace),
we get by the [equivalences of positive operators](202102201218_equivalencesPositiveOperator) that the [linear map of $M$](202102072233_matrixLinearMap)
is a positive operator.

Reverse direction:
- Now assume $T$ is a positive operator. Consider $\mathbf{y}^T M \mathbf{y}$, where $M$ is the matrix representation of $T$ and
$\mathbf{y}$ is a general vector.
- Since is self-adjoint, we know $M$ is symmetric.
- By the equivalences of a positive operator, we know all eigenvalues of $T$ are non-negative.
- Since it is self-adjoint, by the [real spectral theorem](202102191218_realSpectralTheorem), we know there exists an
[orthonormal basis](202102142105_orthonormalBasisDefinition) of eigenvectors, $\mathbf{e}_i$.
- Writing $\mathbf{y} = \sum a_i \mathbf{e}_i$, we can show
$$
\begin{align}
\mathbf{y}^T M \mathbf{y} &= \big( \sum a_i \mathbf{e}_i^T \big) M \big( \sum a_i \mathbf{e}_i \big) \\
&= \big( \sum a_i \mathbf{e}_i^T \big) \big( \sum a_i \lambda_i \mathbf{e}_i \big) \\
&= \sum a_i^2 \lambda_i \geq 0
\end{align}
$$
- Where we have used definition of orthonormal and that the eigenvalues are non-negative.

Links: 

References: 

