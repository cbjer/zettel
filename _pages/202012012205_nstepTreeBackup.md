---
title: n-step Tree Backup
permalink: /zettel/202012012205_nstepTreeBackup
layout: page
tags: expectation algorithm

---
# n-step Tree Backup

The n-step Tree Backup algorithm is an [off-policy](202011301312_offPolicyMethods) method 
used for [control](TODOs), thus estimating the optimal [state-action value function](202011221903_actionValueFunction).

Whereas, in [expected Sarsa](202011302147_expectedSarsa) we use an expaction 
step only at the final state-action choice, in n-step Tree Backup, we in some sense 
use an expectation at every step. By this we mean each action not taken at each step 
still contributes to the return target.

<figure>
  <img src="/zettel/Images/ReinforcementLearning/NStepTreeBackupQ.png"
     alt="ALT"
     class="centerImage"
     style="width: 700px;" />
  <figcaption> n-step Tree Backup Algorithm </figcaption>     
</figure>

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)