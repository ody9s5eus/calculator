const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ` ${operator} `;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/ /g, ''));
    } catch {
        display.value = 'Error';
    }
}
