"use strict";

function pickingNumbers(a) {
  let auxLongestSubarray = 0;
  let longestSubarray = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j] || a[i] === a[j] + 1) {
        auxLongestSubarray++;
        console.log(auxLongestSubarray);
      }
      if (auxLongestSubarray > longestSubarray) {
        longestSubarray = auxLongestSubarray;
      }
    }
    auxLongestSubarray = 0;
  }
  return longestSubarray;
}

console.log(
  pickingNumbers([
    4,
    2,
    3,
    4,
    4,
    9,
    98,
    98,
    3,
    3,
    3,
    4,
    2,
    98,
    1,
    98,
    98,
    1,
    1,
    4,
    98,
    2,
    98,
    3,
    9,
    9,
    3,
    1,
    4,
    1,
    98,
    9,
    9,
    2,
    9,
    4,
    2,
    2,
    9,
    98,
    4,
    98,
    1,
    3,
    4,
    9,
    1,
    98,
    98,
    4,
    2,
    3,
    98,
    98,
    1,
    99,
    9,
    98,
    98,
    3,
    98,
    98,
    4,
    98,
    2,
    98,
    4,
    2,
    1,
    1,
    9,
    2,
    4,
  ])
);
