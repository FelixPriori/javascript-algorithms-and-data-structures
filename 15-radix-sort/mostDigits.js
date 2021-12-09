const { digitCount } = require("./digitCount.js");

function mostDigits(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const digits = digitCount(nums[i]);
    max = Math.max(digits, max);
  }

  return max;
}

module.exports = { mostDigits };

// console.log(mostDigits([1234, 56, 7])); // 4
// console.log(mostDigits([1, 1, 11111, 1])); // 5
// console.log(mostDigits([12, 34, 56, 78])); // 2
