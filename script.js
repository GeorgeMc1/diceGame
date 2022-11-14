gameSelect = document.getElementsByClassName("game-select");
gameSelection = document.getElementById("game-selection");
onePlayer = document.getElementById("one-player");
onePlayerButton = document.getElementById("one-player-button");
twoPlayerButton = document.getElementById("two-player-button");
onePlayerGameBox = document.getElementById("one-player-game-box");
onePlayerGameOverBox = document.getElementById("game-over");
onePlayerWinBox = document.getElementById("one-player-win");
onePlayerDice = document.getElementById("one-player-dice");
onePlayerRollDice = document.getElementById("one-player-roll-dice");
onePlayerRoundScore = document.getElementById("one-player-round-score");
onePlayerTotalScoreDisplay = document.getElementById("one-player-total-score");
onePlayerTotal = document.getElementById("one-player-total");
onePlayerGameOverButton = document.getElementById("one-player-game-over-button");
onePlayerWinButton = document.getElementById("one-player-win-button");
twoPlayer = document.getElementById("two-player");
playerTurnDisplay = document.getElementById("player-turn");
playerOneScore = document.getElementById("player-one-score");
playerOneTotalScoreDisplay = document.getElementById("player-one-total-score");
playerTwoScore = document.getElementById("player-two-score");
playerTwoTotalScoreDisplay = document.getElementById("player-two-total-score");
playerOneRoll = document.getElementById("player-one-roll");
playerOneHold = document.getElementById("player-one-hold");
playerTwoRoll = document.getElementById("player-two-roll");
playerTwoHold = document.getElementById("player-two-hold");
playerOneButtons = document.getElementById("player-one-buttons");
playerTwoButtons = document.getElementById("player-two-buttons");
playerOneDice = document.getElementById("player-one-dice");
playerTwoDice = document.getElementById("player-two-dice");
twoPlayerWinSec = document.getElementById("two-player-win-sec");
winningPlayer = document.getElementById("winning-player");
playAgain = document.getElementById("play-again");
playerTurn = "player 1";
startOnePlayer = () =>{
    onePlayerTotalScoreDisplay.innerHTML = onePlayerTotalScore = 0;
    onePlayerRoundScore.innerHTML = 0;
    gameSelection.style.opacity = 0;
    onePlayer.style.display = "flex";
    onePlayer.style.height = "auto";
    onePlayer.style.opacity = 1;
    setTimeout(() => {
        gameSelection.style.display = "none";
    }, 1000);
}
startTwoPlayer = () =>{
    checkPlayerTurn();
    playerOneTotalScore = playerOneTotalScoreDisplay.innerHTML = 0;
    playerTwoTotalScore = playerTwoTotalScoreDisplay.innerHTML = 0;
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    gameSelection.style.opacity = 0;
    twoPlayer.style.display = "flex";
    twoPlayer.style.height = "auto";
    twoPlayer.style.opacity = 1;
    setTimeout(() => {
        gameSelection.style.display = "none";
    }, 1000);
}
checkPlayerTurn = () => {
    if (playerTurn == "player 1"){
        playerOneButtons.style.display = "inline-block";
        playerTwoButtons.style.display = "none";
        playerTurnDisplay.innerHTML = "Player 1's turn";
        playerTurnDisplay.classList = "player-one-turn";
    } else {
        playerOneButtons.style.display = "none";
        playerTwoButtons.style.display = "inline-block";
        playerTurnDisplay.innerHTML = "Player 2's turn";
        playerTurnDisplay.classList = "player-two-turn";
    }
}
rollDice = () =>{
    randomNumber = Math.floor(Math.random() * 6) + 1;
    onePlayerRoundScore.innerHTML = randomNumber;
    onePlayerDice.setAttribute("src", "images/Dice" + randomNumber + ".png");
    onePlayerTotalScore += randomNumber;
    onePlayerTotalScoreDisplay.innerHTML = onePlayerTotalScore;
    if (randomNumber == 1){
        onePlayerGameOver();
    } else if(onePlayerTotalScore >= 20) {
        onePlayerWin(onePlayerTotalScore);
    }
}
playerOneRollDice = () => {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    playerOneScore.innerHTML = randomNumber;
    playerOneDice.setAttribute("src", "images/Dice" + randomNumber + ".png");
    if (randomNumber == 1) {
        playerOneTotalScoreDisplay.innerHTML = "reset";
        playerOneTotalScore = 0
        setTimeout(() => {
            playerOneTotalScoreDisplay.innerHTML = playerOneTotalScore;
        }, 1000);
        playerTurn = "player 2";
        checkPlayerTurn();
    } else {
        playerOneTotalScore += randomNumber;
        playerOneTotalScoreDisplay.innerHTML = playerOneTotalScore;
        if (playerOneTotalScore >= 20) {
            twoPlayerWin();
        }
    }
}
playerTwoRollDice = () => {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    playerTwoScore.innerHTML = randomNumber;
    playerTwoDice.setAttribute("src", "images/Dice" + randomNumber + ".png");
    if (randomNumber == 1) {
        playerTwoTotalScoreDisplay.innerHTML = "reset";
        playerTwoTotalScore = 0
        setTimeout(() => {
            playerTwoTotalScoreDisplay.innerHTML = playerTwoTotalScore;
        }, 1000);
        playerTurn = "player 1";
        checkPlayerTurn();
    } else {
        playerTwoTotalScore += randomNumber;
        playerTwoTotalScoreDisplay.innerHTML = playerTwoTotalScore;
        if (playerTwoTotalScore >= 20) {
            twoPlayerWin();
        }
    }
}
onePlayerGameOver = () => {
    onePlayerGameBox.style.display = "none";
    onePlayerGameOverBox.style.display = "flex";
}
onePlayerWin = (score) => {
    onePlayerGameBox.style.display = "none";
    onePlayerWinBox.style.display = "flex";
    onePlayerTotal.innerHTML = score;
}
twoPlayerWin = () => {
    playerOneButtons.style.display = "none";
    playerTwoButtons.style.display = "none";
    twoPlayerWinSec.style.display = "flex";
    if (playerTurn == "player 1") {
        winningPlayer.innerHTML = "Player 1 Won!";
    } else {
        winningPlayer.innerHTML = "Player 2 Won!";
    }
}
twoPlayerReset = () => {
    twoPlayerWinSec.style.display = "none";
    startTwoPlayer();
}
onePlayerButton.addEventListener("click", () => {
    startOnePlayer();
})
onePlayerRollDice.addEventListener("click", () => {
    rollDice();
})
onePlayerGameOverButton.addEventListener("click", () => {
    onePlayerGameOverBox.style.display = "none";
    onePlayerGameBox.style.display = "flex";
    startOnePlayer();
})
onePlayerWinButton.addEventListener("click", () => {
    onePlayerWinBox.style.display = "none";
    onePlayerGameBox.style.display = "flex";
    startOnePlayer();
})
twoPlayerButton.addEventListener("click", () => {
    startTwoPlayer();
})
playerOneRoll.addEventListener("click", () => {
    playerOneRollDice();
})
playerTwoRoll.addEventListener("click", () => {
    playerTwoRollDice();
})
playerOneHold.addEventListener("click", () => {
    playerTurn = "player 2";
    checkPlayerTurn();
})
playerTwoHold.addEventListener("click", () => {
    playerTurn = "player 1";
    checkPlayerTurn();
})
playAgain.addEventListener("click", () => {
    twoPlayerReset();
})