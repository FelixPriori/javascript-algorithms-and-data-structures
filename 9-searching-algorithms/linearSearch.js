/*
  Accepts an array and a value
  Loops through the array and check if value is equal to current element
  If it is, it returns the index at which the element is found.
  If it is not found, it returns -1
*/

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([34, 56, 1, 2], 1)); // 2
console.log(linearSearch([34, 56, 1, 2], 56)); // 1
console.log(linearSearch([34, 56, 1, 2], 100)); // -1
console.log(linearSearch(["Y", 1, "true", true], true)); // 3
