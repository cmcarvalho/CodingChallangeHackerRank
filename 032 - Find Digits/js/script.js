"use strict";

function findDigits(n) {
  const arr = [];
  let i = 0;
  let m = n;
  let sum = 0;

  while (m != 0) {
    arr[i] = m % 10;
    console.log(arr);
    m = Math.floor(m / 10);
    i++;
  }

  for (let j = 0; j < arr.length; j++) {
    if (n % arr[j] === 0) sum++;
  }

  return sum;
}

console.log(findDigits(110));
