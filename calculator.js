let displayNumber = "0";
let firstNumber;
let secondNumber;
let operator;

const calcButtons = document.querySelectorAll(".calc-button");
calcButtons.forEach(button => {
    button.addEventListener("click", event => {
        const buttonPressed = event.currentTarget;

        if (buttonPressed.classList.contains("number"))
            pressNumber(buttonPressed);

        else if (buttonPressed.id === "point")
            pressPoint(buttonPressed);

        else if (buttonPressed.classList.contains("operator"))
            pressOperator(buttonPressed);

        else if (buttonPressed.id === "equals")
            pressEquals(buttonPressed);

        else if (buttonPressed.id === "clear")
            pressClear();

        else if (buttonPressed.id === "backspace")
            pressBackspace();

        else if (buttonPressed.id === "sign-swap")
            pressSignswap();

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

function updateDisplay() {
    if (!displayNumber || displayNumber === "-") displayNumber = "0";
    if (displayNumber.length > 8) displayNumber = displayNumber.slice(0, 8);
    const display = document.getElementById("display");
    display.textContent = displayNumber;
}

function pressNumber(button) {
    if (displayNumber == "0") displayNumber = button.textContent;
    else displayNumber += button.textContent;
}

function pressPoint(button) {
    if (!displayNumber.includes(".")) displayNumber += button.textContent;
}

function pressOperator(button) {
    if (!operator) {
        firstNumber = displayNumber;
        displayNumber = "0";
        operator = button.id;
        button.classList.add("pressed");
    }
}

function pressEquals(button) {
    if (!operator) return;
    secondNumber = displayNumber;
    const result = `${operate(firstNumber, secondNumber, operator)}`;
    operator = null;
    firstNumber = result;
    displayNumber = result;

    calcButtons.forEach(button => {
        button.classList.remove("pressed");
    })
}

function pressClear() {
    displayNumber = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;

    calcButtons.forEach(button => {
        button.classList.remove("pressed");
    })
}

function pressBackspace() {
    displayNumber = displayNumber.slice(0, -1);
}

function pressSignswap() {
    displayNumber = `${displayNumber * -1}`;
}