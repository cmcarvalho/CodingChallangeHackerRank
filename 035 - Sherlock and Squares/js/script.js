"use strict";

function squares(a, b) {
  // Write your code here
  let sum = 0;
  let j = Math.ceil(Math.sqrt(a)) + 1;
  console.log(j);
  while ((j + sum) * (j + sum) <= b) {
    sum++;
  }

  return sum;
}

console.log(squares(3, 9));
