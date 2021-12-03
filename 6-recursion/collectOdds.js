/* HELPER METHOD RECURSION */
// function collectOdds(nums) {
//   let result = [];
//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return;
//     }

//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }

//     helper(helperInput.slice(1));
//   }

//   helper(nums);

//   return result;
// }

/* PURE RECURSION */
function collectOdds(nums) {
  let oddNums = [];

  if (nums.length === 0) {
    return oddNums;
  }

  if (nums[0] % 2 !== 0) {
    oddNums.push(nums[0]);
  }

  oddNums = oddNums.concat(collectOdds(nums.slice(1)));
  return oddNums;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ 1, 3, 5, 7, 9 ]
console.log(collectOdds([2, 4, 6, 8])); // []
console.log(collectOdds([])); // []
console.log(collectOdds([1, 3, 5, 7, 9])); //  [ 1, 3, 5, 7, 9 ]
