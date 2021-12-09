const { mostDigits } = require("./mostDigits");
const { getDigit } = require("./getDigit");

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
