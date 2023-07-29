const OPERATORS = ["+", "-", "*", "/"];
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