"use strict";

function getTotalX(a, b) {
  let bigArray = [];
  let evenlyDividedArrayA = [];
  console.log(a.length, b.length);
  console.log(a);
  console.log(b);

  for (let i = 0; i <= a.length - 1; i++) {
    bigArray.push(a[i]);
    console.log(a[i]);
    console.log(bigArray);
  }

  for (let j = 0; j <= b.length - 1; j++) {
    bigArray.push(b[j]);
    console.log(bigArray);
  }

  for (let m = a[a.length - 1]; m <= b[0]; m++) {
    for (let n = 0; n < a.length; n++) {
      if (m % a[n] === 0) {
        evenlyDividedArrayA.push(m);
        console.log(evenlyDividedArrayA);
      }
    }
  }
}

getTotalX([2, 4], [16, 32, 96]);
