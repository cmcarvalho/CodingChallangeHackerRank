"use strict";

function catAndMouse(x, y, z) {
  let catA = x,
    catB = y,
    mouse = z,
    distanceCatA,
    distanceCatB;
  console.log(catA, catB, mouse);
  distanceCatA = Math.abs(catA - mouse);
  distanceCatB = Math.abs(catB - mouse);
  console.log(distanceCatA, distanceCatB);
  if (distanceCatA < distanceCatB) {
    return "Cat A";
  } else if (distanceCatB < distanceCatA) {
    console.log("Cat B");
  } else {
    console.log("Mouse C");
  }
}

catAndMouse(1, 2, 3);
