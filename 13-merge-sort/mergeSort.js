const { merge } = require("./merge");

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([1, 56, 3, 22, 5, 52, 88, 9, 12]));
console.log(mergeSort([10, 24, 76, 73]));
