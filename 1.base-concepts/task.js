"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let p = percent / 100 / 12; //процентная ставка
  let s = amount - contribution; //тело кредита
  let n = countMonths;
  let monthlyPaymen = s * (p + (p / (((1 + p) ** n) - 1))); //ежемесячная оплата
  let totalAmount = Number((monthlyPaymen * n).toFixed(2));
  return totalAmount

}