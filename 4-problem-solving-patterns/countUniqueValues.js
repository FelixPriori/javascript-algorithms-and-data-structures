/*
Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
*/

/* MY SOLUTION */
// function countUniqueValues(numbers) {
//   let i = 0;
//   let j = 1;

//   while (j < numbers.length) {
//     if (numbers[i] === numbers[j]) {
//       j++;
//     } else {
//       i++;
//       numbers[i] = numbers[j];
//     }
//   }

//   return i + 1 === j ? 0 : i + 1;
// }

/* GIVEN SOLUTION */
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
