let firstNumEl = document.getElementById("first-num-el");
let secondNumEl = document.getElementById("second-num-el");
let operationEl = document.getElementById("operation-el");
let resultEl = document.getElementById("result-el");

let result = 0;
let num1 = parseInt(firstNumEl.value);
let num2 = parseInt(secondNumEl.value);

function add() {
  operationEl.innerText = "+";
  result = num1 + num2;
  printResult();
  logEqn();
}

function subtract() {
  operationEl.innerText = "-";
  result = num1 - num2;
  printResult();
  logEqn();
}

function multiply() {
  operationEl.innerText = "x";
  result = num1 * num2;
  printResult();
  logEqn();
}

function divide() {
  operationEl.innerText = "/";
  result = num1 / num2;
  printResult();
  logEqn();
}

function printResult() {
  resultEl.innerText = "Result: \n" + result;
}

function logEqn() {
  console.log(num1 + " " + operationEl.innerText + " " + num2 + " = " + result);
}
