const display = document.getElementById('display');

function addToDisplay(value) {
    if (display.value === '0') display.value = '';
    display.value += value;
}

function clearAll() {
    display.value = '';
}

function deleteOne() {
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateSin() {
    display.value = Math.sin(Number(display.value));
}

function calculateCos() {
    display.value = Math.cos(Number(display.value));
}

function calculateTan() {
    display.value = Math.tan(Number(display.value));
}

function calculateSqrt() {
    display.value = Math.sqrt(Number(display.value));
}
