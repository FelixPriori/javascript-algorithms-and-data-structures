/*
  This funciton accepts a sorted array and a value.
  Create a left pointer at hte start of the array,
  and a right pointer at the end of the array.
  While the pointer comes before the right pointer:
    - if the el eq to val, return index.
    - if the el < to val, move left pointer up,
    - if el > move right pointer down.
    - if never found, return -1
 */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let middle = Math.ceil((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else if (arr[middle] > val) {
      right = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 5, 6, 7, 10, 11, 12, 13, 15, 16], 17)); // -1
console.log(binarySearch([2, 3, 4, 5, 6, 7, 10, 11, 12, 13], 3)); // 1
console.log(binarySearch([2, 3, 4, 5, 6, 7, 10, 11, 12, 13], -5)); // -1
