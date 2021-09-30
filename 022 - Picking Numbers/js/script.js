"use strict";

function getMoneySpent(keyboards, drives, b) {
  let moreExpensive = 0;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (
        keyboards[i] + drives[j] <= b &&
        keyboards[i] + drives[j] >= moreExpensive
      ) {
        moreExpensive = keyboards[i] + drives[j];
      }
    }
  }

  if (moreExpensive > 0) {
    return moreExpensive;
  } else if (moreExpensive === 0) {
    return -1;
  }
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));

ws.write(getMoneySpent([3, 1], [5, 2, 8], 10) + "\n");
