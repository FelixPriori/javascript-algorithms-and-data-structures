# Insertion sort

<ul style="list-style:lower-roman">
  <li>Implement bubble sort.</li>
  <li>Implement selection sort.</li>
  <li style="color: #00FF00">Implement insertion sort.</li>
</ul>

## The insertion sort algorithm

Builds up the sort by gradually creating a larger left half which is always sorted.

### Time complexity

- Worst Case: O(n^2)
- Best Case (nearly sorted): O(n^2)

It is good for storing new data that comes into an already sorted list.

### Pseudocode

- Start by picking the second element in the array.
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted.
