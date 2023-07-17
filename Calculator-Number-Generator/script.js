let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let entries = "";
let sumEl = document.getElementById("sum-el");

function add() {
  let totalSum = num1 + num2;
  let result = "Sum: " + totalSum;
  sumEl.textContent = result;
}

function subtract() {
  let totalSub = num1 - num2;
  let result = "Difference: " + totalSub;
  sumEl.textContent = result;
}

function divide() {
  if (num2 !== 0) {
    let totalDivide = num1 / num2;
    let result = "Quotient: " + totalDivide;
    sumEl.textContent = result;
  } else {
    sumEl.textContent = "Cannot divide by zero.";
  }
}

function multiply() {
  let totalMult = num1 * num2;
  let result = "Product: " + totalMult;
  sumEl.textContent = result;
}

function restart() {
  num1 = Math.floor(Math.random() * 11);
  num2 = Math.floor(Math.random() * 11);
  document.getElementById("num1-el").textContent = num1;
  document.getElementById("num2-el").textContent = num2;
  sumEl.textContent = "Total: ";
}
