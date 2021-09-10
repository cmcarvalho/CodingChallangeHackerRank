"use strict";

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

function sockMerchant(n, ar) {
  let aux = 1,
    auxPair = 0,
    numPairs = 0,
    color = 0;

  for (let i = 0; i < ar.length; i = 0) {
    aux = 0;
    color = ar[i];
    console.log(ar);
    for (let j = 0; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        aux++;
      }
    }
    auxPair = Math.floor(aux / 2);
    numPairs = numPairs + auxPair;
    ar.remove(color);

    console.log(aux);
    console.log(auxPair);
    console.log(numPairs);
  }
  return numPairs;
}

console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
