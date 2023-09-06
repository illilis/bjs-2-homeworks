"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let discriminant = (b ** 2) - (4 * a * c);

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant) ) / (2 * a), (-b - Math.sqrt(discriminant) ) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) && isNaN(contribution) && isNaN(amount)) {
    return false;
  }

  let percentMonth = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  
  let monthlyPayment = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalSum = parseFloat((monthlyPayment * countMonths).toFixed(2));
  
  return totalSum;
}