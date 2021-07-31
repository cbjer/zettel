---
title: Monte Carlo Tree Search
permalink: /zettel/202012032005_monteCarloTreeSearch
layout: page
tags: search games rollout
---
# Monte Carlo Tree Search

A brief overview of this algorithm is made up of 4 key parts.

You start with some tree with nodes representing states and the branches the actions that can be taken. 
We have an estimated value of each state also represented on the tree.

First step is **selection**, which uses a tree policy to selects one of the leaf nodes in the tree. This 
tree policy will often be [epsilon-greedy](202011301251_epsilonGreedyPolicy) in that 
will want to further explore areas of the tree which offer higher expected return but 
will also occassionally try out new unexplorered areas to balance the [exploration-exploitation tradeoff](TODOs).

Next we use **expansion** to add further leaf nodes which involve actions starting at unexplorered leaf 
nodes. 

Then we **simulate** trajectories starting in these leaf nodes until the terminal state to give us 
a [Monte Carlo](TODOs) estimate of the value of that state-action value. The number of trajectories simulated 
here can be as little as 1.

Once we have this estimate, we **backup** this estimated value up the tree to update 
previous nodes state-action values. 

Once we have reached some computation time limit, we select an action greedily from the current 
state that we are in (the head node of the tree). Once an action has been selected 
we discard the sections of the tree which are now irrelevant, but keep those under the 
action we chose. 

<center><img src="https://www.researchgate.net/profile/George_Konidaris2/publication/312172859/figure/fig1/AS:613954925625373@1523389669557/Phases-of-the-Monte-Carlo-tree-search-algorithm-A-search-tree-rooted-at-the-current.png"
     alt="ALT"
     class="center"
     style="width: 700px;" /></center>

Links: []

References: Introduction to Reinforcement Learning - Sutton and Barto

[Return to Index](index)