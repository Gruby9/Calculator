const numberButtons = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')
const firstLine = document.querySelector('.first.line')
const secondLine = document.querySelector('.second.line')
const clearButton = document.querySelector('.button.clear')
const deleteButton = document.querySelector('.button.delete')
const plusButton = document.querySelector('.operation.plus')
const equalsButton = document.querySelector('.operation.equals')


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        secondLine.textContent += button.textContent;
    });
});

clearButton.addEventListener('click', () => {
    secondLine.textContent = '';
});

deleteButton.addEventListener('click', () => {
    const index = (secondLine.textContent.length) - 1;
    secondLine.textContent = secondLine.textContent.slice(0, index);
});

plusButton.addEventListener('click', () => {
    firstLine.textContent += secondLine.textContent + '+';
    secondLine.textContent = '';
});

equalsButton.addEventListener('click', () => {
    const overalInput = firstLine.textContent + secondLine.textContent;
    const result = Function('return' + ' ' + overalInput)();
    console.log(result)
});