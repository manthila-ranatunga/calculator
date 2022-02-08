let firstNumEl = document.getElementById("first-num-el");
let secondNumEl = document.getElementById("second-num-el");
let operationEl = document.getElementById("operation-el");
let resultEl = document.getElementById("result-el");

let result = 0;
let num1 = 0;
let num2 = 0;

function add() {
  operationEl.innerText = "+";
  getNums();
  result = num1 + num2;
  printResult();
  logEqn();
}

function subtract() {
  operationEl.innerText = "-";
  getNums();
  result = num1 - num2;
  printResult();
  logEqn();
}

function multiply() {
  operationEl.innerText = "x";
  getNums();
  result = num1 * num2;
  printResult();
  logEqn();
}

function divide() {
  operationEl.innerText = "/";
  getNums();
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

function getNums() {
  num1 = parseInt(firstNumEl.value);
  num2 = parseInt(secondNumEl.value);
}
