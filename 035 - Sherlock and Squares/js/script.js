"use strict";

function squares(a, b) {
  // Write your code here
  let sum = 0;
  console.log(Math.ceil(Math.sqrt(a)));
  let j = Math.ceil(Math.sqrt(a));
  console.log(j);
  while ((j + sum) * (j + sum) <= b) {
    sum++;
  }

  return sum;
}

console.log(squares(3, 9));
