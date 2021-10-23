"use strict";

function birthday(s, d, m) {
  let birthMonth = m;
  let birthDay = d;
  let possibleWays = 0;
  let aux = 0;

  for (let i = 0; i < s.length - (birthMonth - 1); i++) {
    aux = 0;
    for (let j = i; j < birthMonth + i; j++) {
      aux = aux + s[j];
    }
    console.log(aux);
    if (aux === birthDay) {
      possibleWays++;
    }
  }
  console.log(possibleWays);
  return possibleWays;
}

birthday([1, 2, 1, 3, 2], 3, 2);
// birthday(6, [1, 1, 1, 1, 1, 1], [3, 2]);
