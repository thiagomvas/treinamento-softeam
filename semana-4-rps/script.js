let playerScore = 0;
let computerScore = 0;

const play = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, computerChoice);

    updateScore(result);
    logResult(playerChoice, computerChoice, result);
}

const getResult = (player, computer) => {
    if (player === computer) {
        return 0;
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return 1;
    } else {
        return -1;
    }
}

const updateScore = (result) => {
    const playerscoreElement = document.querySelector(".playerscore");
    const pcscoreElement = document.querySelector(".pcscore");

    if (result === 1) {
        playerScore++;
    } else if (result === -1) {
        computerScore++;
    }

    playerscoreElement.textContent = `Player: ${playerScore}`;
    pcscoreElement.textContent = `Computer: ${computerScore}`;
}

const logResult = (player, computer, result) => {
    const logElement = document.querySelector(".log");
    logElement.textContent = `You chose ${player}. Computer chose ${computer}. ${parseResult(result)}`;
}

const parseResult = (result) => {
    switch(result)
    {
        case -1: 
            return "You lost! What a shame!";
        case 0: 
            return "You tied!";
        case 1: 
            return"You won! Good Job!";
        default:
            console.log(`Attempted to parse ${result} but was out of bounds. Options: -1, 0, 1`);
        
    }
}


