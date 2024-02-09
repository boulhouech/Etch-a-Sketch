document.addEventListener('DOMContentLoaded', () => {
    const blackColorButton = document.getElementById('black');
    const rgbColorButton = document.getElementById('rgb');
    const resetButton = document.getElementById('reset');
    const getDimension = document.getElementById('dimensionInputField');
    const boardGame = document.querySelector('.board');

    function createGrid() {
        boardGame.innerHTML = '';
        const gameDimension = getDimension.value;
        for (let i = 0; i < gameDimension * gameDimension; i++) {
            const cell = document.createElement('div');
            cell.classList.add('newGrid');
            boardGame.appendChild(cell);
        }
    }

    createGrid(); // Initial creation

    getDimension.addEventListener('input', createGrid); // Update grid on input change
});