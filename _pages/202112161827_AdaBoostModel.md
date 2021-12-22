---
title: AdaBoost Model
permalink: /zettel/202112161827_AdaBoostModel
layout: page
tags: 

---
# AdaBoost Model


Takes advantage of [boosting](202112161834_Boosting). Power of starting with a very weak learner and iteratively improving it.

**_We successively fit classifiers on weighted data samples_**

Algorithm proceeds as below. Essentially we loop through the classifiers, assigning a weight to each, which is used to update a weight on each data point. 

<center><img src="https://miro.medium.com/max/700/1*-j0_UzLDyEuF187-cZtyoA.png"
     alt="ALT"
     class="center"
     style="width: 600px;" /></center>



Links: 

References: 

