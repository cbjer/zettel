---
title: Zettels
permalink: /zettel/202103061231_selectionSort
layout: default
---
tags: #

# Selection Sort Algorithm

The **selection sort** algorithm is used to order an unordered array of numbers.

It has a [time-complexity](202103061211_timeComplexity) of $O(n^2)$ and [space-complexity](202103061215_spaceComplexity) of $O(1)$.

The general idea is to loop through the array, finding the smallest element from the remaining section of the array, and 
switching it with the current element.

```java
public class SelectionSort {
  public static ArrayList<Integer> sort(ArrayList<Integer> array) {
    for (int i = 0; i < array.size(); i++) {
      int smallIndex = findSmallest(array, i);
      swap(array, i, smallIndex);
    }
    return array;
  }

  static void swap(ArrayList<Integer> array, int i, int j) {
    int temp = array.get(j);
    array.set(j, array.get(i));
    array.set(i, temp);
  }

  static int findSmallest(ArrayList<Integer> array, int startIndex) {
    int smallest = array.get(startIndex);
    int smallIndex = startIndex;

    for (int i = startIndex + 1; i < array.size(); i++) {
      if (array.get(i) < smallest) {
        smallIndex = i;
        smallest = array.get(i);
      }
    }
    return smallIndex;
  }
  
}
```

Links: 

References: 

[Return to Index](index)