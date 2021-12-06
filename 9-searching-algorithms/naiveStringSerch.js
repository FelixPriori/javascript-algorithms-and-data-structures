/*
  PSEUDOCODE:
  - Loop over the longer string
  - Loop over the shorter string
  - If the characters don't match, break out of the inner loop
  - If the characters do match, keep going
  - If you complete the inner loop and find a match, increment the count of matches
  - Return the count
*/

/* MY SOLUTION */
// function naiveStringSearch(str, search) {
//   let counter = 0;
//   let j = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === search[j]) {
//       if (j === search.length - 1) {
//         counter++;
//         j = 0;
//       } else {
//         j++;
//       }
//     } else {
//       j = 0;
//     }
//   }

//   return counter;
// }

/* GIVEN SOLUTION */
function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveStringSearch("wowomgzomg", "omg")); // 2
console.log(naiveStringSearch("wowomgzomg", "lol")); // 0
console.log(naiveStringSearch("wowomgzomg", "zomg")); // 1
console.log(naiveStringSearch("wowomgzomg", "zomg")); // 1
console.log(naiveStringSearch("ananakin", "anakin")); // 1
