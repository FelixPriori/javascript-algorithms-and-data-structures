/* STRING METHOD */
// function getDigit(num, place) {
//   const stringNum = num.toString();
//   const index = stringNum.length - 1 - place;
//   const result = stringNum[index] ? Number(stringNum[index]) : 0;
//   return result;
// }

/* MATH METHOD */
function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

module.exports = { getDigit };

// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1
// console.log(getDigit(12345, 5)); // 0
