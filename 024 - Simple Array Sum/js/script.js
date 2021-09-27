"use strict";

function simpleArraySum(ar) {
  console.log(ar);
  let sumArray = 0;
  for (let i = 0; i < ar.length; i++) {
    sumArray += ar[i];
  }
  console.log(sumArray);
  return sumArray;
}

simpleArraySum([1, 2, 3, 4, 10, 11]);
