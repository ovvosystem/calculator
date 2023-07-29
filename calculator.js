const OPERATORS = ["+", "-", "*", "/"];
let displayNumber = "0";
let firstNumber;
let secondNumber;
let operator;

const calcButtons = document.querySelectorAll(".calc-button");
console.log(calcButtons);
calcButtons.forEach(button => {
    button.addEventListener("click", event => {
        const buttonPressed = event.currentTarget;
        if (buttonPressed.classList.contains("number")) {
            if (displayNumber == "0") displayNumber = button.textContent;
            else displayNumber += button.textContent;
        } else if (buttonPressed.id === "point") {
            if (!displayNumber.includes(".")) displayNumber += button.textContent;
        }
        updateDisplay(displayNumber);
    })
})

function operate(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
    }
}

function updateDisplay(newDisplay) {
    if (newDisplay.length > 8) return;
    const display = document.getElementById("display");
    display.textContent = newDisplay;
}