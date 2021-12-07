function merge(arr1, arr2) {
  const finalArray = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      finalArray.push(arr1[i]);
      i++;
    } else {
      finalArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    finalArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    finalArray.push(arr2[j]);
    j++;
  }

  return finalArray;
}

// console.log(merge([1, 3, 5, 7, 10, 50], [2, 14, 99, 100]));
// console.log(merge([], [2, 14, 99, 100]));
// console.log(merge([100], [2, 14, 99]));

module.exports = { merge };
