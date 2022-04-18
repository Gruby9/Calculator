const numberButtons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const firstLine = document.querySelector('.first.line');
const secondLine = document.querySelector('.second.line');
const clearButton = document.querySelector('.button.clear');
const deleteButton = document.querySelector('.button.delete');
const equalsButton = document.querySelector('.operation.equals');
const plusButton = document.querySelector('.operation.plus');
const divideButton = document.querySelector('.operation.divide');
const timesButton = document.querySelector('.operation.times');
const minusButton = document.querySelector('.operation.minus');
//const pointButton = document.querySelector('.operation.point')


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
    secondLine.textContent += button.textContent;
    });
});

clearButton.addEventListener('click', () => {
    secondLine.textContent = '';
    firstLine.textContent = '';
});

deleteButton.addEventListener('click', () => {
    const index = (secondLine.textContent.length) - 1;
    secondLine.textContent = secondLine.textContent.slice(0, index);
});

plusButton.addEventListener('click', () => {
    const index = (firstLine.textContent.length) - 1
    if (firstLine.textContent.includes('=') === false) { 
        if (firstLine.textContent.charAt(index) != '+' &&
        firstLine.textContent.charAt(index) != '/' &&
        firstLine.textContent.charAt(index) != '*' &&
        firstLine.textContent.charAt(index) != '-') {
            firstLine.textContent += secondLine.textContent + '+';
            secondLine.textContent = '';
        }
    } else {
        firstLine.textContent = secondLine.textContent + '+';
        secondLine.textContent = '';
    }
});

equalsButton.addEventListener('click', () => {
    if(firstLine.textContent.includes('=') === false) {
        firstLine.textContent += secondLine.textContent;
        const result = Function('return' + ' ' + firstLine.textContent)();
        firstLine.textContent += '=';
        secondLine.textContent = result;
    }
});

divideButton.addEventListener('click', () => {
    const index = (firstLine.textContent.length) - 1
    if (firstLine.textContent.includes('=') === false) { 
        if (firstLine.textContent.charAt(index) != '+' &&
        firstLine.textContent.charAt(index) != '/' &&
        firstLine.textContent.charAt(index) != '*' &&
        firstLine.textContent.charAt(index) != '-') {
            firstLine.textContent += secondLine.textContent + '/';
            secondLine.textContent = '';
        }
    } else {
        firstLine.textContent = secondLine.textContent + '/';
        secondLine.textContent = '';
    }
});

timesButton.addEventListener('click', () => {
    const index = (firstLine.textContent.length) - 1
    if (firstLine.textContent.includes('=') === false) { 
        if (firstLine.textContent.charAt(index) != '+' &&
        firstLine.textContent.charAt(index) != '/' &&
        firstLine.textContent.charAt(index) != '*' &&
        firstLine.textContent.charAt(index) != '-') {
            firstLine.textContent += secondLine.textContent + '*';
            secondLine.textContent = '';
        }
    } else {
        firstLine.textContent = secondLine.textContent + '*';
        secondLine.textContent = '';
    }
});

minusButton.addEventListener('click', () => {
    const index = (firstLine.textContent.length) - 1
    if (firstLine.textContent.includes('=') === false) { 
        if (firstLine.textContent.charAt(index) != '+' &&
        firstLine.textContent.charAt(index) != '/' &&
        firstLine.textContent.charAt(index) != '*' &&
        firstLine.textContent.charAt(index) != '-') {
            firstLine.textContent += secondLine.textContent + '-';
            secondLine.textContent = '';
        }
    } else {
        firstLine.textContent = secondLine.textContent + '-';
        secondLine.textContent = '';
    }
});
