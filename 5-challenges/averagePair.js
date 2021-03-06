/*
  Write a function called averagePair. 
  Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array where the
  average of the pair equals the target average.
  There may be more than one pair that matches the average target.

  BONUS
  -----
  Time: O(n)
  Space: O(1)
*/

function averagePair(numbers, target) {
  if (numbers.length === 0) {
    return false;
  }

  let first = 0;
  let last = numbers.length - 1;

  while (first < last) {
    const avg = numbers[first] + numbers[last] / 2;
    if (avg === target) {
      return true;
    }
    if (avg < target) {
      ++first;
    } else {
      --last;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
