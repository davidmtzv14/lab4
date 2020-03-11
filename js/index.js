// Inputs
let input = document.getElementsByClassName("inputNumber")[0];
let leftNumber;
let rightNumber;
let operation = "";
let operator = "";

let result = document.getElementById("resultValue");
let resultNumber = 0;
let resultLog = document.getElementById("logInformation");

// Actions
let resetBtn = document.getElementsByClassName("resetButton")[0];
let equalBtn = document.getElementsByClassName("equalButton")[0];

// Operators
let addBtn = document.getElementById("addButton");
let substractBtn = document.getElementById("substractButton");
let multiplicationBtn = document.getElementById("multiplicationButton");
let divisionBtn = document.getElementById("divisionButton");

// Button actions
resetBtn.addEventListener("click", event => {
  event.preventDefault();
  reset();
});

equalBtn.addEventListener("click", event => {
  event.preventDefault();
  rightNumber = Number(input.value);
  addToOperation(operator);
  equal();
  showResult();
});

addBtn.addEventListener("click", event => {
  event.preventDefault();
  operatorBtnClick(event.target.innerText);
});

substractBtn.addEventListener("click", event => {
  event.preventDefault();
  operatorBtnClick(event.target.innerText);
});

multiplicationBtn.addEventListener("click", event => {
  event.preventDefault();
  operatorBtnClick(event.target.innerText);
});

divisionBtn.addEventListener("click", event => {
  event.preventDefault();
  operatorBtnClick(event.target.innerText);
});

// Functions
function reset() {
  input.value = "";
  leftNumber = 0;
  rightNumber = 0;
  operation = "";
  operator = "";
  result.value = "";
  resultNumber = 0;
  resultLog.value = "";
}

function showResult() {
  if (resultNumber) {
    result.value = resultNumber;
    operation += " = " + String(resultNumber);
    resultLog.value += operation + "\n";
    operation = "";
    operator = "";
    clearInput();
  }
}

function operatorBtnClick(op) {
  if (operator) {
    rightNumber = Number(input.value);
    addToOperation(operator);
    equal();
    operator = op;
    leftNumber = resultNumber;
  } else {
    leftNumber = Number(input.value);
    operation += leftNumber;
    operator = op;
  }

  clearInput();
}

function add() {
  return leftNumber + rightNumber;
}

function substract() {
  return leftNumber - rightNumber;
}

function multiply() {
  return leftNumber * rightNumber;
}

function divide() {
  return leftNumber / rightNumber;
}

function equal() {
  switch (operator) {
    case "+":
      resultNumber = add();
      break;
    case "-":
      resultNumber = substract();
      break;
    case "*":
      resultNumber = multiply();
      break;
    case "/":
      resultNumber = divide();
      break;
  }
}

function addToOperation(op) {
  operation += " " + op + " " + String(rightNumber);
}

function clearInput() {
  input.value = "";
}
