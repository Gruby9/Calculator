const numberButtons = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')
const secondLine = document.querySelector('.second.line')
const clearButton = document.querySelector('.button.clear')
const deleteButton = document.querySelector('.button.delete')


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        secondLine.textContent += button.textContent;
    });
});

clearButton.addEventListener('click', () => {
    secondLine.textContent = '';
});

deleteButton.addEventListener('click', () => {
    const index = (secondLine.textContent.length) - 1
    secondLine.textContent = secondLine.textContent.slice(0, index)
})