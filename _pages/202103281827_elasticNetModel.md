---
title: Elastic Net Model
permalink: /zettel/202103281827_elasticNetModel
layout: page
tags: model

---
# Elastic Net Model

The **Elastic net model** is a hybrid model between [ridge regression](202103281806_ridgeRegression) and [lasso regression](202103281817_lassoRegression). 

$$
\Vert \mathbf{y} - X \mathbf{w} \Vert^2_2 + \lambda \big( \alpha \Vert \mathbf{w} \Vert^2_2 + ( 1 - \alpha ) \Vert \mathbf{w} \Vert_1 \big) \\
= \big( \mathbf{y} - X \mathbf{w} \big)^T \big( \mathbf{y} - X \mathbf{w} \big) + \lambda \sum_j \big( \alpha w_j^2 + ( 1 - \alpha) \vert w_j \vert \big)
$$

Where now have two hyperparameters to tune; $\lambda$ controlling the amount of regularisation and $\alpha$ controlling between 
an $L_1$ and $L_2$ type regulariser.

Links: 

References: 

[Return to Index](index)