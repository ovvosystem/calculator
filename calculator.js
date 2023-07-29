let displayNumber = "0";
let firstNumber;
let secondNumber;
let operator;

const calcButtons = document.querySelectorAll(".calc-button");
calcButtons.forEach(button => {
    button.addEventListener("click", event => {
        const buttonPressed = event.currentTarget;

        if (buttonPressed.classList.contains("number")) {
            pressNumber(buttonPressed);
        }

        else if (buttonPressed.id === "point") {
            pressPoint(buttonPressed);
        }

        updateDisplay(displayNumber);
    })
})

function operate(a, b, operator) {
    a = +a;
    b = +b;
    switch (operator) {
        case "sum": return a + b;
        case "subtract": return a - b;
        case "multiply": return a * b;
        case "divide": return a / b;
    }
}

function updateDisplay(newDisplay) {
    if (newDisplay.length > 8) return;
    const display = document.getElementById("display");
    display.textContent = newDisplay;
}

function pressNumber(button) {
    if (displayNumber == "0") displayNumber = button.textContent;
    else displayNumber += button.textContent;
}

function pressPoint(button) {
    if (!displayNumber.includes(".")) displayNumber += button.textContent;
}