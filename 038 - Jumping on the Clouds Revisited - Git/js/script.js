"use strict";

function jumpingOnClouds(c, k) {
  let energy = 100;
  let jumpSize = k;
  let i = 0;

  do {
    i = i + jumpSize;
    if (i >= c.length) {
      i = i % c.length;
    }
    if (c[i] === 0) {
      energy--;
    } else {
      energy = energy - 3;
    }
  } while (i != 0);
  return energy;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
