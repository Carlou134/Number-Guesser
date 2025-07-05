let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random(10) * (10 - 0));

function compareGuesses(humanGuess, computerGuess, secretTargetNumber){
    const distanciaHuman = Math.abs(secretTargetNumber - humanGuess);
    const distanciaComputer = Math.abs(secretTargetNumber - computerGuess);

    if(distanciaHuman < distanciaComputer) return true;
    else if(distanciaComputer === distanciaHuman) return true;
    else return false;
}

const updateScore = (winner) => {
    if(winner === "human") humanScore++;
    else computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}

