/*
Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(n)
*/

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  const frequency1 = {};
  const frequency2 = {};

  for (const char of str1) {
    frequency1[char] = ++frequency1[char] || 1;
  }

  for (const char of str2) {
    frequency2[char] = ++frequency2[char] || 1;
  }

  for (const key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }

    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
