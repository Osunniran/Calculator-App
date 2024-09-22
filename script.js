let display = document.getElementById('display')

function one() {
    display.value += '1'
}

function two() {
    display.value += '2'
}

function three() {
    display.value += '3'
}

function four() {
    display.value += '4'
}

function five() {
    display.value += '5'
}

function six() {
    display.value += '6'
}

function seven() {
    display.value += '7'
}

function eight() {
    display.value += '8'
}

function nine() {
    display.value += '9'
}

function dot() {
    display.value += '.'
}

function minus() {
    display.value += '-'
}

function plus() {
    display.value += '+'
}

function percentage() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);

    if (!isNaN(value)) {
        display.value = value / 100;
    } else {
        display.value = 'error';
    }
}

function divide() {
    display.value += '/'
}

function doubleZero() {
    display.value += '00'
}

function zero() {
    display.value += '0'
}

function multiply() {
    display.value += '*'
}

function minus() {
    display.value += '-'
}

function clearAll() {
    display.value = ''
}

function equal() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'error';
    }
}