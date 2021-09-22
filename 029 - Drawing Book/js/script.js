"use strict";

function pageCount(n, p) {
  const lengthOfBook = n;
  const pageWanted = p;
  let turnsFromFirstPage = 0;
  let turnsFromLastPage = 0;

  turnsFromFirstPage = Math.floor(pageWanted / 2);
  console.log(turnsFromFirstPage);

  if (lengthOfBook % 2 === 0) {
    turnsFromLastPage = Math.ceil((lengthOfBook - pageWanted) / 2);
  } else {
    turnsFromLastPage = Math.floor((lengthOfBook - pageWanted) / 2);
  }
  console.log(turnsFromLastPage);

  if (turnsFromFirstPage < turnsFromLastPage) {
    return turnsFromFirstPage;
  } else {
    return turnsFromLastPage;
  }
}

pageCount(9, 5);
