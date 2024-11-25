let firstNum = "0";
let operatorElement = "+";
let secondNum = "0";
let selection = 1;
let shouldClear = false;

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

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

function operate(a, b, operator) {
  if (operator === "+") {
    display.textContent = add(a, b);
    return add(a, b);
  } else if (operator === "-") {
    display.textContent = subtract(a, b);
    return subtract(a, b);
  } else if (operator === "*") {
    display.textContent = multiply(a, b);
    return multiply(a, b);
  } else if (operator === "/") {
    display.textContent = divide(a, b);
    return divide(a, b);
  }
}

const clear = document.querySelector(".c");
const plus = document.querySelector(".p");
const minus = document.querySelector(".m");
const star = document.querySelector(".st");
const slash = document.querySelector(".sl");
const equal = document.querySelector(".eq");

clear.addEventListener("click", () => {
  firstNum = "0";
  operatorElement = "+";
  secondNum = "0";
  display.textContent = "";
  selection = 1;
});

plus.addEventListener("click", () => {
  operatorElement = "+";
  if (selection === 1) {
    selection = 2;
    display.textContent = "";
  } else if (selection === 2) {
    firstNum = operate(
      parseInt(firstNum),
      parseInt(secondNum),
      operatorElement
    );
    shouldClear = true
  }
});

minus.addEventListener("click", () => {
  operatorElement = "-";
  if (selection === 1) {
    selection = 2;
    display.textContent = "";
  } else if (selection === 2) {
    firstNum = operate(
      parseInt(firstNum),
      parseInt(secondNum),
      operatorElement
    );
    shouldClear = true
  }
});

star.addEventListener("click", () => {
  operatorElement = "*";
  if (selection === 1) {
    selection = 2;
    display.textContent = "";
  } else if (selection === 2) {
    firstNum = operate(
      parseInt(firstNum),
      parseInt(secondNum),
      operatorElement
    );
    shouldClear = true
  }
});

slash.addEventListener("click", () => {
  operatorElement = "/";
  if (selection === 1) {
    selection = 2;
    display.textContent = "";
  } else if (selection === 2) {
    firstNum = operate(
      parseInt(firstNum),
      parseInt(secondNum),
      operatorElement
    );
    shouldClear = true
  }
});

equal.addEventListener("click", () => {
  if (selection === 2) {
    operate(parseInt(firstNum), parseInt(secondNum), operatorElement);
    selection = 1;
  }
});

buttons.forEach((button) => {
  if (!button.classList.contains("empty")) {
    button.addEventListener("click", () => {
      addToDisplay(button.textContent);
    });
  }
});

function addToDisplay(number) {
  if (shouldClear) {
    display.textContent = "";
    shouldClear = false;
  }
  display.textContent += number;
  if (selection === 1) {
    firstNum = display.textContent;
  } else {
    secondNum = display.textContent;
  }
}
