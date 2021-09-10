"use strict";

function hurdleRace(k, height) {
  let maxDifference = 0;
  let resultAux = 0;
  console.log(height.length);
  for (let i = 0; i < height.length; i++) {
    resultAux = height[i] - k;
    console.log("Teste");
    if (resultAux > 0 && resultAux > maxDifference) {
      maxDifference = height[i] - k;
      console.log(maxDifference);
    }
  }
  return maxDifference;
}

hurdleRace(4, [1, 6, 3, 5, 2]);
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
