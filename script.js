/* 
Adding event listeners to the actual game cells, also adding restart game button
*/ 
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

/* 
Storing game status element here to allow to more easily use it later on
- displaying messages for winner, loser, draw
- display message for current player's turn
*/

const currentGameStatus = document.querySelector('.game-status');
const messageWinner = () => `Player ${currentPlayer} has won !`;
const messageDraw = () => `Game ends in draw !`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn !`;

/*
Variables to track the game state throughout the game. 
   - Using 'gameActive' to pause the game in case of an end scenario
   -'current player' keeps track of who's turn is it 
   - Keeping track of current game state
*/

let gameActive = true;
let currentPlayer = "X";
let gameState =["", "", "", "", "", "", "", "", ""];

/* We set the inital message to let the players know whose turn it is */

currentGameStatus.innerHTML = currentPlayerTurn(); 

/*
Functions for gameboard. 
*/ 

function HandleCellPlayed(){

}

function handlePlayerChange(){

}

function handleResultValidation(){

}

function handleCellClick(){

}

function handleRestartGame(){
    
}


