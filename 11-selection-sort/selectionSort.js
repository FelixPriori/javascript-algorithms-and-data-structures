function selectionSort(arr) {
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    if (i !== smallest) {
      swap(arr, i, smallest);
    }
  }

  return arr;
}

console.log(selectionSort([1, 4, 2, 3, 6, 8, 7]));
console.log(selectionSort([34, 22, 10, 19, 17]));
console.log(selectionSort([34, 2, 10, -1, 17, 12]));
