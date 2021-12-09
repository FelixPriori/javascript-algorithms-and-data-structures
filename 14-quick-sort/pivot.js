function pivot(arr, startIndex = 0, endIndex = arr.length + 1) {
  const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

  let pivot = arr[startIndex];
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, startIndex, swapIndex);

  return swapIndex;
}

module.exports = { pivot };

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]));
