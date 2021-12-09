# Radix Sort

<ul style="list-style:lower-roman">
  <li>Implement merge sort.</li>
  <li>Implement quick sort.</li>
  <li style="color: #00FF00">Implement radix sort.</li>
</ul>

## Concept

Radix sort is a special sorting algorithm that works on lists of numbers. It never makes comparisons between elements. It expoloits the fact that information about the size of a number is encoded in the number digits. More digits means a bigger number.

## Helper methods

### getDigit

Returns the digit in num at the given place value.

### digitCount

Returns the number of digits in num.

### mostDigits

Given an array of numbers, returns the number of digits in the largest numbers in the list.

## Radix sort pseudocode

- Define a function that accepts a list of numbers.
- Figure out how many digits the largest number has.
- Loop from k = 0 up to this largest number of digits.
- For each iteration of the loop:
  - Create buckets for each digit (0 to 9) (bucket = empty array).
  - Place each number in the corresponding bucket based on its kth digit.
- Replace our existing array with values in our buckets, starting with 0 and going up to 9.
- Return list at the end.

## Complexity

| Time (best) | Time (worst) | Space    |
| ----------- | ------------ | -------- |
| O(nk)       | O(nk)        | O(n + k) |
