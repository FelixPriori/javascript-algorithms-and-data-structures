# Merge Sort

<ul style="list-style:lower-roman">
  <li style="color: #00FF00">Implement merge sort.</li>
  <li>Implement quick sort.</li>
  <li>Implement radix sort.</li>
</ul>

## Why learn merge sort?

- Previous algorithms do not scale well.
- Can improve complexity from O(n^2) to O(n log(n))
- Trade off between efficiency and simplicity

## The merge sort algorithm

Created in 1948 by Johnathan Von Neumann. It's a combination of merging and sorting. It takes advantage of the fact that arrays of 0 or 1 elements are always sorted. It works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

## Merging arrays

In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays. Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays. This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

### Merging pseudocode

- Create an empty array, take a look at the smallest values in each input array.
- While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first areray into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
  - Once we exhast one array, push in all remaining values from the other array.

## Merge sort pesudocode

- Break up the array into halves until you have arrays that are empty or have one element.
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back atthe full length of the array
- Once the array has been merged back together, return the merged (and sorted) array.

## Big O

- The splitting of array is O(log(n)) time complexity
- The comparision is O(n) time complexity
- So in total we get O(n log(n)) time complexity
- Space complexity is O(n)
