---
title: Insertion Sort Algorithm
permalink: /zettel/202102281125_insertionSortAlgorithm
layout: page
tags: 

---
# Insertion Sort Algorithm

**Insertion Sort** is a [sorting algorithm](202102281308_sortingAlgorithms) for sorting a unordered array.

The algorithm runs in $O(n^2)$ [time complexity](202103061211_timeComplexity) and $O(1)$ [space complexity](202103061215_spaceComplexity).

The key ideas are:
- Loop through list, selecting current value to be sorted
- The array to the left of this point is already sorted. We compare elements, switching if the value is smaller.
- Once we find an element which is smaller or equal, we break from the inner loop.

```java
public class InsertionSort {
  public static ArrayList<Integer> sort(ArrayList<Integer> array) {
    for (int i = 1; i < array.size(); i++) {
      Integer val = array.get(i);
      for (int j = i - 1; j >= 0; j--) {
        if (array.get(j) > val) {
          // switch the elements
          array.set(j+1, array.get(j));
          array.set(j, val);
        }
        else {
          break;
        }
      }
    }
    return array;
  }
}
```

Links: 

References: 

