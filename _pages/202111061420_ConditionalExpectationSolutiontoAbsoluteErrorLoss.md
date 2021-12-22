---
title: Conditional Expectation Solution to Absolute Error Loss
permalink: /zettel/202111061420_ConditionalExpectationSolutiontoAbsoluteErrorLoss
layout: page
tags: 

---
# Conditional Expectation Solution to Absolute Error Loss

Similiar to the [squared error loss](202103271143_conditionalExpectationSolutionSquaredError), we aim to find the function $f$ which minimises the expected loss, according instead to an $L_1$ / absolute loss function.

$$
\begin{aligned}
\mathrm{EPE}(f) &= \mathrm{E} ( \vert Y - f(X) \vert ) \\
&= \mathrm{E}_X \mathrm{E}_{Y \vert X} \big[ \vert Y - f(X) \vert \vert X \big]
\end{aligned}
$$

where again we have used the [conditional expectation joint distribution result](202103141401_conditionalExpectationJointDistribution).

Remember, we are trying to find a function $f$ which minimises this expression. We can again choose to minimise this pointwise saying:

$$
f^{\ast}(x) = \mathrm{argmin}_c \, \mathrm{E}_{Y \vert X} \big[ \vert Y - c \vert \vert X = x \big]
$$

Now convert to the integral definition of the expectation. Defining this loss nwo as a function of c of which we want to minimise with respect to.

$$
\begin{aligned}
L(c) &= \int^{\infty}_{-\infty} \vert y - c \vert p(y \vert x) dy \\
&= \int^c_{-\infty} (c-y) p(y \vert x) dy + \int^{\infty}_{c} (y-c)p(y \vert x) dy
\end{aligned}
$$

Now we use [leibnz intergral rule](202111060005_LeibnizIntegralRule) (works with infinite bounds?), we can express $L'(c)$ as:

$$
\begin{aligned}
\frac{\partial L}{\partial c} = \int^c_{-\infty} p(y \vert x) dy - \int^{\infty}_c p(y \vert x) dy \stackrel{\text{solve}}{=} 0
\end{aligned}
$$

But this $c$ is precisely the definition of the median of the distribution of $Y \vert X$.

Thus the solution is 
$$
f^*(x) = \mathrm{median} \big( Y \vert X=x \big)
$$


Links: 

References: 

