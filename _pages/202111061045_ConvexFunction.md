---
title: Convex Function
permalink: /zettel/202111061045_ConvexFunction
layout: page
tags: definition

---
# Convex Function

We call a function $f$ **convex** if for any $\mathbf{x}, \mathbf{y}$ and any $\theta \in (0,1)$ we have

$$
\theta f(\mathbf{x}) + (1-\theta) f(\mathbf{y}) \geq f(\theta \mathbf{x} + (1-\theta) \mathbf{y})
$$

Essentially if we were to draw a line between two points on the function $f$, it will always be above or equal to the function at those points.

A function in which $-f$ is convex is **concave**.

We have the result that any local minimum of a convex function must be a **global minimum**. If it is strictly convex then this is a unique minimum.

If $f$ is convex then $f(A \mathbf{x} + \mathbf{b})$ is also convex.


Links: 

References: 

