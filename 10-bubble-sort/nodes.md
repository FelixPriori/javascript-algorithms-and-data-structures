# Bubble sort

<ul style="list-style:lower-roman">
  <li style="color: #00FF00">Implement bubble sort.</li>
  <li>Implement selection sort.</li>
  <li>Implement inertion sort.</li>
</ul>

## What is sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order:

_Ex:_ numbers smallest to largest, names alphabetically, movies based on release year or revenue, etc.

## Why do we need to learn this?

- Sorting is an incredibly common task, so it's good to know how it works.
- There are many ways to sort things, and different techniques have their own advantages and disadvantages.
- Classic interview topic.

## Built-in JavaScript sort method

Good for strings, but numbers are sorted strangely:

```js
["Steele", "Colt", "Data", "Al"].sort(); // Al, Colt, Data, Steele. (GOOD)
[6, 4, 15, 10].sort(); // 10, 15, 4, 6 (BAD)
```

This can be fixed, however: the sort method accepts an optional callback which allows you to tell it how it should sort the array.

```js
[6, 4, 15, 10].sort((a, b) => a - b); // [4, 6, 10, 15] (GOOD)
```

## The bubble sort algorithm

Time:

- Worst case: O(n^2)
- Best case: O(n)

> Definition: a sorting algorithm where the largest values bubble up to the top.

_Ex:_

```js
/*
1. [5, 3, 4, 1, 2] 
2. [3, 5, 4, 1, 2] 
3. [3, 4, 5, 1, 2] 
4. [3, 4, 1, 5, 2] 
5. [3, 4, 1, 2, 5] 
...
n. [1, 2, 3, 4, 5]
*/

const swap = (arr, idx1, idx2) => {
  [arr[idx], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

- Start looping with a variable called i from the end of the array towards the beginning.
- Start an inner loop with a variable called j from the begining until i - 1
- If arr[j] is greater than arr[i], swap those two values!
- Return the sorted array
