/*
  Write a function called findLongestSubstring, 
  which accepts a string and returns the length of
  the longest substring with all distinct characters.

  REQUIREMENTS
  ------------
  Time: O(n)
*/

// function findLongestSubstring(str) {
//   if (!str) {
//     return 0;
//   }

//   let chars = {};
//   let longestSubstringLength = 0;
//   let j = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (chars[str[i]]) {
//       longestSubstringLength = Math.max(
//         longestSubstringLength,
//         Object.keys(chars).length
//       );
//       chars = {};
//       i = j;
//       j++;
//     } else {
//       chars[str[i]] = 1;
//     }
//   }

//   return longestSubstringLength;
// }

function findLongestSubstring(str) {
  if (!str) {
    return 0;
  }
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring()); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
