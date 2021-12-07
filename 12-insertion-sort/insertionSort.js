function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        arr.splice(j, 0, arr[i]);
        arr.splice(i + 1, 1);
      }
    }
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([23, 3, 4, 76, 9]));
