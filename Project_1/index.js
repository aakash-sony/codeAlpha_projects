function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerHTML === '0' && value !== '.') {
        display.innerHTML = value;
    } else {
        display.innerHTML += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerHTML = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    if (display.innerHTML.length === 1) {
        display.innerHTML = '0';
    } else {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = 'Error';
    }
}
