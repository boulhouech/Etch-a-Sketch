const getDimension = document.querySelector('input');
const gameBoard = document.querySelector('.board');
const blackColorButton = document.querySelector('#black');
const rgbColorButton = document.querySelector('#rgb');
const resetButton = document.querySelector('#reset');

function createGrid(rows, columns) {
    
        // Clear the game board before creating a new grid
        gameBoard.innerHTML = '';

        // Create grid rows and columns
        for (let i = 0; i < (rows * columns); i++) {
            const gridCreated = document.createElement('div');
            gridCreated.classList.add('grid-square');
            gridCreated.style.width = `calc(100% / ${columns})`;
            gridCreated.style.height = `calc(100% / ${rows})`;
            gameBoard.appendChild(gridCreated); // Append the row to the game board
        }
    }
       // Initial grid creation
        createGrid(16, 16); //  default grid dimensions

        getDimension.addEventListener('change', function() {
            const dimensionValue = parseInt(getDimension.value);
            if (dimensionValue > 100) {
                window.prompt('Please enter a number less than or equal to 100.');
                getDimension.value = ""; // Clear the input field
                getDimension.setAttribute('max', '100'); // Set max attribute to 100
            } else {
                createGrid(dimensionValue, dimensionValue);
            }
        });