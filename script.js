const display = document.querySelector('.display');
let currentExpression = '0';

function updateDisplay() {
    display.textContent = currentExpression || '0';
}

function appendToDisplay(value) {
    if (currentExpression === '0' && value !== '.') {
        currentExpression = '';
    }
    currentExpression += value;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '0';
    updateDisplay();
}

function calculate() {
    try {
        // Remove spaces and evaluate the expression
        let result = eval(currentExpression.replace(/\s/g, ''));
        
        // Check for invalid results
        if (!isFinite(result) || isNaN(result)) {
            throw new Error("Math Error");
        }

        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}