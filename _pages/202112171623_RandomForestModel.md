---
title: Random Forest Model
permalink: /zettel/202112171623_RandomForestModel
layout: page
tags: 

---
# Random Forest Model

Random Forest improves on the usual [Decision Tree algorithms](202112161612_CARTAlgorithm) via 2 main ideas:
- Rather than searching for the best split point amongst all features, we **randomly select a subset of the features to search within**.
- We use [bagging](202111252019_Bagging) to learn multiple weak learners via sampling with replacement from the overall dataset.
- This is then averaged (regression) or a majority vote (classification) to create the overall model.

We can also use random forest to perform feature importance. Essentially everytime we split a feature, we attribute the increase in important (eg reduction in Gini) to that feature. This then feeds down the tree also.

 
Links: 

References: 

