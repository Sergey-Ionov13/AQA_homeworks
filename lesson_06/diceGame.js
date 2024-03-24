////////////////////----- 1 -----\\\\\\\\\\\\\\\\\\\\

let diceRollsNumber = 3;

let player1RollResults = [];
let player2RollResults = [];

for (let i =0; i < diceRollsNumber; i++) {
    player1RollResults.push(Math.floor(Math.random() * 6) + 1);
    player2RollResults.push(Math.floor(Math.random() * 6) + 1);
}

let player1ResultValue = player1RollResults.reduce((sum, currentValue) => sum + currentValue, 0);
let player2ResultValue = player2RollResults.reduce((sum, currentValue) => sum + currentValue, 0);

let gameResult;

if (player1ResultValue > player2ResultValue) {
    gameResult = 'Player 1 wins'
} else if (player2ResultValue > player1ResultValue) {
    gameResult = 'Player 2 wins'
} else {
    gameResult = 'Draw'
}

let resultMessage = `
Player 1 score: ${player1ResultValue}
Player 2 score: ${player2ResultValue}
${gameResult}
`;
console.log(resultMessage);

