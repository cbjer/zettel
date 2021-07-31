---
title: Merge Sort Algorithm
permalink: /zettel/202102281630_mergeSortAlgorithm
layout: page
tags: 
---
# Merge Sort Algorithm

**Merge Sort** is a [sorting algorithm](202102281308_sortingAlgorithms) which sorts an unordered array

It runs in $O(n \log n)$ [time-complexity](202103061211_timeComplexity) and $O(n)$ [space-complexity](202103061215_spaceComplexity).

The key ideas are:
- Divide the array into sub arrays around the mid point
- Merging two arrays which are assumed are individually sorted already
- This is done by creating a temporary array, and considering the elements at the start of the two sub arrays
  and moving along them, adding the smallest to the temporary array.
- Once we have reached the end of either array, we copy in the remaining elements from the left array (the right ones already in place in main array)
- We then copy the temporary array into the main array

```java
public class MergeSort {
  public static ArrayList<Integer> sort(ArrayList<Integer> array) {
    mergeSort(array, 0, array.size());
    return array;
  }

  static void mergeSort(ArrayList<Integer> array, int leftIndex, int rightIndex) {
    if (rightIndex <= leftIndex + 1) {
      return;
    }

    int mid = (leftIndex + rightIndex) / 2; //overflow problems?

    mergeSort(array, leftIndex, mid);
    mergeSort(array, mid, rightIndex);

    combine(array, leftIndex, rightIndex);
  }

  static void combine(ArrayList<Integer> array, int leftIndex, int rightIndex) {
    int mid = (leftIndex + rightIndex) / 2; 
    int i = leftIndex;
    int j = mid;

    // now we assume that [leftIndex : mid] and [mid : rightIndex] are sorted
    // Need to use additional memory to create a temporary array
    ArrayList<Integer> tempArray = new ArrayList<Integer>();

    while (i < mid && j < rightIndex) {
      if (array.get(i) <= array.get(j)) {
        tempArray.add(array.get(i));
        i += 1;
      }
      else {
        tempArray.add(array.get(j));
        j += 1;
      }
    }

    // Need to copy in remaining leftList
    for (int k = i; k < mid; k++) {
      tempArray.add(array.get(k));
    }

    //Copy in whole list into array
    for (int k = 0; k < tempArray.size(); k++) {
      array.set(k + leftIndex, tempArray.get(k));
    }
  }
}
```

Links: 

References: 

[Return to Index](index)