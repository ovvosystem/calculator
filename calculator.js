const OPERATORS = ["+", "-", "*", "/"];
let displayNumber = "0";
let firstNumber;
let secondNumber;
let operator;

function operate(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
    }
}

function updateDisplay(newDisplay) {
    const display = document.getElementById("display");
    display.textContent = newDisplay;
}