/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
@Return
=> an array that includes both values that sum to zero 
=> undefined if a pair does not exist
*/

/* NAIVE SOLUTION (O(n^2))*/
// function sumZero(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === 0) {
//         return [numbers[i], numbers[j]];
//       }
//     }
//   }
// }

/* REFACTOR: MULTIPLE POINTERS PATTERN (O(n)) */
function sumZero(numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === 0) {
      return [numbers[left], numbers[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
