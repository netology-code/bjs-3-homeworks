"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr =  [-b / ( 2 * a)];
  } else {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  debugger
  let amountMonth = (percent / 100) / 12;

  let bodyCredit = amount - contribution;

  let payment = bodyCredit * (amountMonth + (amountMonth / (((1 + amountMonth) ** countMonths) - 1)));
  
  const sum = payment * countMonths;
  if (sum > 0) {
  return +sum.toFixed(2); 
} else return +sum;

}