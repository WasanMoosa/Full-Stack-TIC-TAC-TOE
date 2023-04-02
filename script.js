


const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
// Get references to the option elements
const numOfPlayer = document.querySelector(".my-select");
let onePlayer = true;
let player2turn = true;


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
let options = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "X";
let running = false;
let highlightedCells;
numOfPlayer.addEventListener("change", function () {
    intializeGame();
    onePlayer = false;
})

intializeGame();

function intializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != " " || !running || !player2turn) {

        return;

    }
    updateCell(this, cellIndex);
    checkWinner();

    board = {
        "grid": [options[0], options[1], options[2], options[3], options[4], options[5], options[6], options[7], options[8]]
    }

    if (running) {
        if (onePlayer) {
            player2turn = false;
            currentPlayer = "O";
            statusText.textContent = `${currentPlayer}'s turn`;
            postBoard(board);
        }
        else {
            changePlayer();

        }


    }


}



function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    if (running) {
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

        if (cellA == cellB && cellB == cellC && cellA != " ") {
            highlightedCells = condition;
            highlightCells(condition);
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.innerHTML = `${currentPlayer} has won!`
        running = false;
    }
    else if (!options.includes(" ")) {
        statusText.textContent = `Draw!`
        running = false;
    }

}

function highlightCells(combination) {
    combination.forEach(idx => cells[idx].classList.add("highlight"))
}
function removeHighlight(combination) {
    combination.forEach(idx => cells[idx].classList.remove("highlight"))
}


function restartGame() {
    options = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    currentPlayer = "X";
    cells.forEach(cell => cell.textContent = " ")
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
    removeHighlight(highlightedCells);
    player2turn = true;
}



const postBoard = (board) => {
    let url = "http://localhost:8080/api";
    let newBoard;

    reqConfiq = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; Charset=UTF-8',
            'Authorization': 'Basic YWRtaW46YWRtaW4='
        },
        body: JSON.stringify(board)
    };

    fetch(url, reqConfiq)
        .then((response) => { return response.json(); })
        .then((parsedRResponse) => {
            newBoard = parsedRResponse;
            const thisCell = document.querySelector(`[cellIndex="${newBoard}"]`);
            updateCell(thisCell, newBoard);
            checkWinner();
            if (running) {
                player2turn = true;
                currentPlayer = "X";
                statusText.textContent = `${currentPlayer}'s turn`;
            }
        }
        )





}