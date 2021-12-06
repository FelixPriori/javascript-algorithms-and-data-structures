# Searching Algorithms

## How do we search?

Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want. JavaScript does this with its own search methods:

- `indexOf()`
- `includes()`
- `find()`
- `findIndex()`

This is called **linear search**.

## Sorted searches

### Binary Search

- Much faseter than linear search.
- rather than eliminate one element at a time, you ccan eliminate half of the remaining elements at a time.
- Binary search **only** works on **sorted** lists.
- It uses the _Divide and Conquer_ pattern
