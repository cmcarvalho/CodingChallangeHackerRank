"use strict";

function bonAppetit(bill, k, b) {
  let sumBillAnna = 0;
  let calcCorrectBill = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) sumBillAnna = sumBillAnna + bill[i];
  }
  calcCorrectBill = sumBillAnna / 2;
  if (calcCorrectBill === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - calcCorrectBill);
  }
}

bonAppetit([3, 10, 2, 9], 1, 7);
