/* STRING SOLUTION */
// function digitCount(num) {
//   return num.toString().length;
// }

/* MATH SOLUTION */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

module.exports = { digitCount };

// console.log(digitCount(1)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3
