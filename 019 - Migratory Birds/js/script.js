"use strict";

function migratoryBirds(arr) {
  let sumBird01 = 0,
    sumBird02 = 0,
    sumBird03 = 0,
    sumBird04 = 0,
    sumBird05 = 0;

  let sumArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) sumBird01++;
    if (arr[i] === 2) sumBird02++;
    if (arr[i] === 3) sumBird03++;
    if (arr[i] === 4) sumBird04++;
    if (arr[i] === 5) sumBird05++;
  }

  sumArray.push(sumBird01);
  sumArray.push(sumBird02);
  sumArray.push(sumBird03);
  sumArray.push(sumBird04);
  sumArray.push(sumBird05);

  console.log(sumArray);

  for (let m = 0; m <= 4; m++) {
    if (
      sumArray[m] >= sumArray[0] &&
      sumArray[m] >= sumArray[1] &&
      sumArray[m] >= sumArray[2] &&
      sumArray[m] >= sumArray[3] &&
      sumArray[m] >= sumArray[4]
    )
      return m + 1;
  }
  // if (flagBird01) return 1;
  // if (flagBird02) return 2;
  // if (flagBird03) return 3;
  // if (flagBird04) return 4;
  // if (flagBird05) return 5;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
