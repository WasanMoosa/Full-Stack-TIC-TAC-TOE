const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let highlightedCells;

intializeGame();

function intializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) {
        
        return;
     
    }
    updateCell(this, cellIndex);
    checkWinner();
    changePlayer();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    if(running){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"
    statusText.textContent = `${currentPlayer}'s turn`
    }
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == cellB && cellB == cellC && cellA != "") {
            highlightedCells=condition;
            highlightCells(condition);
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.innerHTML = `${currentPlayer}'s has won!`
        running = false;
    }
    else if (!options.includes("")) {
        statusText.textContent = `Draw!`
    }

}
    
function highlightCells(combination){
    combination.forEach(idx => cells[idx].classList.add("highlight"))
}
function removeHighlight(combination){
    combination.forEach(idx => cells[idx].classList.remove("highlight"))
}


function restartGame() {
options = ["", "", "", "", "", "", "", "", ""];
currentPlayer = "X";
cells.forEach(cell => cell.textContent= "")
statusText.textContent = `${currentPlayer}'s turn`;
running = true;
removeHighlight(highlightedCells);
}
