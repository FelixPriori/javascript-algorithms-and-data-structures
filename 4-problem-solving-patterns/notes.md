# Problem Solving

## How to improve

<ol>
  <li><strong>Devise</strong> a plan for solving problems</li>
  <li style="color: green;"><strong>Master</strong> common problem solving patterns</li>
</ol>

## Problem Solving Patterns

Kind of like programing mechanisms, or blueprints.

### 1. Frequency Counter Pattern

Uses objects or sets to collect values/frequencies of values. Often involves nested loops or O(n^2) operations with string or arrays.

> _Ex:_ Write afunction called `same`, which accepts two arrays. The functions should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

> _Ex:_ Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

### 2. Multiple Pointers Pattern

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well.

> _Ex:_ Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

> _Ex:_ Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

### 3. Sliding Window Pattern

This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.

> _Ex:_ Write a function called `maxSubarraySum` which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

### 4. Divide And Conquer Pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.

> _Ex:_ Algorithms such as Quicksort, Mergesort, Binary search are good examples of the divide and conquer pattren.

> _Ex:_ Given a sorted array of integers, write a function called `search`, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1;
