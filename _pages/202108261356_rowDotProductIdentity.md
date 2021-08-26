---
title: Row Dot Product Identity
permalink: /zettel/202108261356_rowDotProductIdentity
layout: page
tags: identity matrix vector

---
# Row Dot Product Identity

Useful identity for taking a row by row dot product of two matrices:

$$
\mathrm{X} = 
\begin{pmatrix}
\mathbf{x}_1^T \\
\vdots \\
\mathbf{x}_n^T
\end{pmatrix}

\quad

\mathrm{Y} = 
\begin{pmatrix}
\mathbf{y}_1^T \\
\vdots \\
\mathbf{y}_n^T
\end{pmatrix}
$$

$$
\begin{pmatrix}
\mathbf{x}_1^T \mathbf{y}_1 \\
\vdots \\
\mathbf{x}_n^T \mathbf{y}_n \\
\end{pmatrix}

= (\mathrm{X} \odot \mathrm{Y} ) \mathbf{1}
$$

Where $\odot$ is the Hadamard product / element wise multiplication and $\mathbf{1}$ is an n by 1 vector of all $1$'s.

In practice we would apply a sumation across the columns rather than use a separate 1's vector.


Links: 

References: 

