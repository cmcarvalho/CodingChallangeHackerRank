"use strict";

function beautifulDays(i, j, k) {
  let aux = 0;
  let goMovies = 0;

  function reverse(s) {
    return s.split("").reverse().join("");
  }

  for (let l = 0; l <= j - i; l++) {
    console.log("How many times?");
    aux = Number(reverse(String(l + i)));
    aux = Math.abs(aux - (l + i));
    console.log(aux);
    if (aux % k === 0) goMovies++;
  }

  return goMovies;
}

console.log(beautifulDays(20, 23, 6));
