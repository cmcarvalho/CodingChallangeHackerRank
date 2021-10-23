"use strict";

function breakingRecords(scores) {
  let numberTimesMost = 0;
  let numberTimesLeast = 0;
  let maximumScore = scores[0];
  let minimumScore = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maximumScore) {
      numberTimesMost++;
      maximumScore = scores[i];
    }
    if (scores[i] < minimumScore) {
      numberTimesLeast++;
      minimumScore = scores[i];
    }
  }
  console.log(numberTimesMost, numberTimesLeast);
  return [numberTimesMost, numberTimesLeast];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
