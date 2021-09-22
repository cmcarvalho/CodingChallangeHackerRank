"use strict";

function utopianTree(n) {
  let height = 1;
  const cycles = n;

  for (let i = 0; i < n; i++) {
    //check if the number is even
    if (i % 2 == 0) {
      console.log("The number is even.");
      height = height * 2;
    }

    // if the number is odd
    else {
      console.log("The number is odd.");
      height = height + 1;
    }
  }
  return height;
}

console.log(utopianTree(5));
