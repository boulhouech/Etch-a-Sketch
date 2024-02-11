// Selecting necessary elements from the DOM
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
       //  Initial setup: create a default 16x16 grid and set color to black
        createGrid(16, 16); //  default grid dimensions
        changeColorToBlack(); // default color 

        // Event listener for changes in the input field to adjust grid dimensions
        getDimension.addEventListener('change', function() {
            const dimensionValue = parseInt(getDimension.value);
            if (dimensionValue > 100) {
                alert('Please enter a number less than or equal to 100.');
                getDimension.value = ""; // Clear the input field
                getDimension.setAttribute('max', '100'); // Set max attribute to 100
            } else {
                createGrid(dimensionValue, dimensionValue);
                changeColorToBlack();
            }
        });


        // Function to change the color of grid squares to black on mouseover
        function changeColorToBlack() {
            const gridSquares = document.querySelectorAll('.grid-square');
            gridSquares.forEach(square => {
                square.addEventListener('mouseover', () => {
                    square.style.background = "black";
                });
            });
        }


        // Function to generate a random RGB color
        function randomColor() {
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);

            let rgbColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue+ ")";
            return rgbColor;
        }

        // Function to change the color of grid squares to random RGB on mouseover
        function changeColortoRandom () {
            const gridSquares = document.querySelectorAll('.grid-square');
            gridSquares.forEach(square => {
                square.addEventListener('mouseover', () => {
                    square.style.background = randomColor();
                })
            });
        }

        // Function to erase the grid by setting all square colors to white
        function eraseGrid () {
            const gridSquares = document.querySelectorAll('.grid-square');
            gridSquares.forEach(square => {
                square.style.background = "white";
            });
        }


        // Event listeners for buttons to change grid square colors and erase 

        blackColorButton.addEventListener('click', () => {
            changeColorToBlack();
        });

        resetButton.addEventListener('click', () => {
            eraseGrid();
        });

        rgbColorButton.addEventListener('click', () => {
            changeColortoRandom();
        });