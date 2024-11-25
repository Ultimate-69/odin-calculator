let firstNum = "0";
let operatorElement = "+";
let thirdNum = "0";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  if (operator === "+") {
    add(a, b);
  } else if (operator === "-") {
    subtract(a, b);
  } else if (operator === "*") {
    multiply(a, b);
  } else if (operator === "/") {
    divide(a, b);
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  if (!button.classList.contains('empty')) {
    button.addEventListener("click", () => {
      addToDisplay(button.textContent);
    });
  };
});

function addToDisplay(number) {
  display.textContent += number;
}
