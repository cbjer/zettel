---
title: Computational Complexity of Tree Fitting
permalink: /zettel/202112161824_ComputationalComplexityofTreeFitting
layout: page
tags: 

---
# Computational Complexity of Tree Fitting

If each split is balanced, the depth of the tree will be $O(\log N)$, and at each split will require testing each of $M$ features at each of the $N$ values.

So total [time complexity](202103061211_timeComplexity) is $O(M N \log N)$. 

However can be worse than this due to splits not being balanced. Say each split results in just 1 data point being split, then the depth would be $O(N)$ and total complexity would be $O(MN^2)$

Links: 

References: 

