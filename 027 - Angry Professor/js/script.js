"use strict";

function angryProfessor(k, a) {
  let aux = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) aux++;
  }
  if (aux >= k) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
