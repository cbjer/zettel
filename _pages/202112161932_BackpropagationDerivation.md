---
title: Back-propagation Derivation
permalink: /zettel/202112161932_BackpropagationDerivation
layout: page
tags: 

---
# Back-propagation Derivation

Derivation is an exercise in not messing up the matrix calculus chain rule.

Simple example on a single real valued data point:
$$
(\mathbf{x}_0, y)
$$

We will have 4 layers: an input layer, 2 hidden layers and 1 output layer. Essentially what we are doing at each layer is a linear regression followed by an activation function. Eg

$$
\mathbf{x}_1^T = f_1(\mathbf{x}_0^T W_1)
$$

The above uses similiar function on vector notation, meaning each entry in the vector has the function applied to it, similiar to [machine learning identities](202102012027_mlVectorSummationIdentities)

So the full model would be:
$$
\begin{aligned}
\mathbf{x}_3 &= f_3(\mathbf{x}_2^T W_3) \\
&= f_3(f_2(\mathbf{x}_1^T W_2) W_3) \\
&= f_3(f_2(f_1(\mathbf{x}_0^T W_1)W_2) W_3) \\
\end{aligned}
$$

Say if we are using squared loss, then we are trying to calculate the:

$$\frac{\partial L}{\partial W_i}$$

With the loss being

$$
L = \frac{1}{2} (x_3 - y)^2
$$

And so the derivatives will take the form:
$$
\frac{\partial L}{\partial W_i} = (\mathbf{x}_3 - y ) \frac{\partial \mathbf{x}_3}{\partial W_i}
$$

This is where the chain rule gets messy...

Dimensions:
$$
\begin{aligned}
&\mathbf{x}_0 : m \times 1 \\
&\mathbf{x}_1 : n_1 \times 1 \\
&\mathbf{x}_2 : n_2 \times 1 \\
&\mathbf{x}_3 : 1 \times 1 \\
&W_1 : m \times n_1 \\
&W_2 : n_1 \times n_2 \\
&W_3 : n_2 \times 1 \\
\end{aligned}
$$

Once we have the partial derivates, we use a [gradient descent](202103282312_gradientDescentUpdate) step to move the weights in the direction of decreasing loss:
$$
W_i \leftarrow W_i - \alpha_{W_i} \frac{\partial L}{\partial W_i}
$$

With the alphas representing the learning rate.

Links: 

References: 

