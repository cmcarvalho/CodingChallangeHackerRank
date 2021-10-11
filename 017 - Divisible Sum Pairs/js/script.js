"use strict";

function divisibleSumPairs(n, k, ar) {
  let countPairs = 0;
  console.log(ar.length);
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      console.log(i, j);
      if ((ar[i] + ar[j]) % k === 0) {
        console.log(ar[i], ar[j]);
        countPairs++;
      }
    }
  }
  console.log(countPairs);
  return countPairs;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
