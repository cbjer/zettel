---
title: Quicksort Algorithm
permalink: /zettel/202103042013_quickSortAlgorithm
layout: page
---
tags: #

# Quicksort Algorithm

The **quicksort algorithm** is a [sorting algorithm](202102281308_sortingAlgorithms) for an unordered array 
of numbers.

Its worst case runtime is $O(n^2)$ but has an average [time-complexity](202103061211_timeComplexity) of $O(n \log n)$. 
It is an in-place algorithm, ie it has $O(1)$ [space complexity](202103061215_spaceComplexity).

The main idea is:
- Given an unordered subset of the numbers, we choose one of the numbers as a pivot (usually element on far right)
- We then go through the other elements, switching elements so that those smaller than the pivot are on the left, and those larger on the right
- We achieve this through a left pointer going left to right and a right pointer going right to left
- Once we have been through all the numbers, we do a final swap of the pivot and the final position of the left pointer
- This ensures the pivot is now in its final position
- We then apply the algorithm again to the portion left of the pivot and separately to the portion to the right
- Since if we apply the algorithm to a subset of size 1, this is already sorted, the algorithm converges to the ordered set.



```java
public class QuickSort {
  public static ArrayList<Integer> sort(ArrayList<Integer> array) {
    quickSort(array, 0, array.size());
    return array;
  }

  static void quickSort(ArrayList<Integer> array, int left, int right) {
    if (left >= right) {
      return;
    }
    
    int partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex);
    quickSort(array, partitionIndex + 1, right);
  }

  static int partition(ArrayList<Integer> array, int left, int right) {
    int pivotIndex = getPivot(array, right);
    int pivot = array.get(pivotIndex);
    int leftPointer = left;
    int rightPointer = right - 2;

    while (leftPointer <= rightPointer) {
      if (array.get(leftPointer) <= pivot) {
        leftPointer++;
        continue;
      }
      if (array.get(rightPointer) > pivot) {
        rightPointer--;
        continue;
      }
      swap(array, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    }
    swap(array, leftPointer, pivotIndex);
    return leftPointer;
  }

  static int getPivot(ArrayList<Integer> array, int right) {
    return right - 1;
  }

  static void swap(ArrayList<Integer> array, int first, int second) {
    Integer temp = array.get(second);
    array.set(second, array.get(first));
    array.set(first, temp);
  }
}
```

Links: 

References: 

[Return to Index](index)