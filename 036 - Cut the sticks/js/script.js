"use strict";

// function cutTheSticks(arr) {

//     sticksCut = 0;
//   let arrLenghtOfCut = [],
//     arrSticksCut = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       smallest = Math.min(...arr);
//     }
//     console.log(smallest);
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] >= smallest) {
//         arr[j] = arr[j] - smallest;
//         sticksCut++;
//         if (arr[j] === 0) arr[j] = undefined;
//       }
//     }
//     console.log(arr);
//     arrLenghtOfCut.push(smallest);
//     arrSticksCut.push(sticksCut);
//   }
// }

function cutTheSticks(arr) {
  let smallest = 0,
    sticksCut = 0,
    arrSticksCut = [];
  smallest = Math.min(...arr);
  console.log(smallest);
  console.log(arr);

  let isAllZero = arr.every((item) => item === 0);
  console.log(isAllZero);

  while (isAllZero === false) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] - smallest;
      sticksCut++;
    }

    let j = arr.length;
    while (j--) {
      if (arr[j] === 0) {
        arr.splice(j, 1);
      }
    }

    arrSticksCut.push(sticksCut);
    sticksCut = 0;
    smallest = Math.min(...arr);
    console.log(arr, arrSticksCut);
    isAllZero = arr.every((item) => item === 0);
  }
  return arrSticksCut;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
