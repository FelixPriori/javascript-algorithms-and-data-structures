/* 
  Write a function which takes in a string and 
  returns counts of each character in the string
*/

// make object to return at the end
// make string lowecase
// loop over the string
//  if the char is a number or letter AND char is key in object, add one to count
//  if the char is a number or letter AND char is not in object, add it and set value to 1
//  otherwise if char is something else, do nothing
// return object at the end

// note: allegedly faster than regex
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

function charCount(str) {
  const output = {};
  const lowerStr = str.toLowerCase();

  /* FIRST DRAFT */
  // for (let i = 0; i < lowerStr.length; i++) {
  //   const char = lowerStr[i];
  //   if (/[a-z0-9]/.test(char)) {
  //     if (output[char] > 0) {
  //       output[char]++;
  //     } else {
  //       output[char] = 1;
  //     }
  //   }
  // }

  /* SECOND DRAFT */
  for (const char of lowerStr) {
    if (isAlphaNumeric(char)) {
      output[char] = ++output[char] || 1;
    }
  }

  return output;
}

console.log(charCount("aaaa")); // {a: 4}
console.log(charCount("hello")); // {h:1, e:1, l:2, o:1}
console.log(charCount("Your PIN number is 1234!"));
/*
{
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  b: 1,
  e: 1,
  i: 2,
  m: 1,
  n: 2,
  o: 1,
  p: 1,
  r: 2,
  s: 1,
  u: 2,
  y: 1
}
*/
// charCount("Hello, hi");
// charCount("");
// charCount(null);
