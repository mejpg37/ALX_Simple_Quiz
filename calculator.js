// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Div by 0";
    }
    return number1 / number2;
}

// Function to retrieve inputs and update the result display
function performCalculation(operationFunction) {
    // Retrieve and validate inputs, defaulting to 0 for empty fields
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    // Perform the calculation using the passed function
    const result = operationFunction(number1, number2);

    // Display the result
    document.getElementById('calculation-result').textContent = result;
}

// Attach Event Listeners
document.getElementById('add').addEventListener('click', function() {
    performCalculation(add);
});

document.getElementById('subtract').addEventListener('click', function() {
    performCalculation(subtract);
});

document.getElementById('multiply').addEventListener('click', function() {
    performCalculation(multiply);
});

document.getElementById('divide').addEventListener('click', function() {
    performCalculation(divide);
});
