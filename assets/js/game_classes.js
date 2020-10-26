// Audio Controller Constructor
class AudioController {
    constructor() {
        this.mute = mute;
        this.flipSound = new Audio("assets/audio/card-flip.mp3");
        this.unflipSound = new Audio("assets/audio/unflip.mp3");
        this.cardsMatchSound = new Audio("assets/audio/cards-match.mp3");
        this.levelCompleteSound = new Audio("assets/audio/level-complete.mp3");
        this.gameOverSound = new Audio("assets/audio/game-over.mp3");
        this.congratsSound = new Audio("assets/audio/winner.mp3");
    }

    muted(){
        mute = true;
        this.mute = true;
    }

    unmuted(){
        mute = false;
        this.mute = false;
    }

    flip() {
        if(this.mute === false){
        this.flipSound.play();
        }
    }

    unflip() {
        if(this.mute === false){
        this.unflipSound.play();
        }
    }

    cardsMatch() {
        if(this.mute === false){
        this.cardsMatchSound.play();
        }
    }

    levelUp() {
        if(this.mute === false){
            this.levelCompleteSound.play();
        }
    }

    congrats() {
        if(this.mute === false){
        this.congratsSound.play();
        }
    }

    gameOver() {
        if(this.mute === false){
        this.gameOverSound.play();
        }
    }
}


// Moves Counter Constructor
class MovesCounter {
    constructor(){
        this.movesMade = 0;
    }

    incrementMovesCounter() {
        this.movesMade ++;
        document.getElementById("movesCounter").textContent = this.movesMade;
    }

    resetMovesCounter() {
        this.movesMade = 0;
        document.getElementById("movesCounter").textContent = this.movesMade;
    }
}


//Pairs Counter Constructor
class PairsCounter {
    constructor() {
    }
    
    incrementPairsCounter() {
        pairsMatched ++;
        document.getElementById("pairs").textContent = pairsMatched;
    }

    resetPairsCounter(){
        pairsMatched = 0;
        document.getElementById("pairs").textContent = pairsMatched;
    }
}


//Count Down Timer Constructor
class Timer {
    constructor(time) {
        this.time = time;
        this.levelTimer = null;
        this.startTimer();
    }

    startTimer() {
        timeLeft = this.time;
        this.levelTimer = setInterval(function(){
            if (timeLeft > 0) {
                document.getElementById("timeRemaining").textContent = timeLeft;
                timeLeft--;  
            }
            else if (timeLeft === 0) {
                document.getElementById("timeRemaining").textContent = timeLeft;
                freezeBoard();
                turnOn("#gameOverModal");
                audio.gameOver();
                timeLeft--;
            }             
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.levelTimer);
    }

    resetTimer() {
        this.stopTimer();
        document.getElementById("timeRemaining").textContent = 0;
        this.startTimer();
    }

    pauseTimer(){
        this.stopTimer();
    }

    resumeTimer(){
        var pausedTime = document.getElementById("timeRemaining").textContent;
        var resumeTime = parseInt(pausedTime) - 1;
        this.time = resumeTime;
        this.startTimer();
    }
}


//Card Constructor
class Card {
    constructor(name, image, cardBackImage, cardId) {
        this.name = name;
        this.image = image;
        this.cardBackImage = cardBackImage;
        this.cardId = cardId;
        this.html = 
            `<div class="game-card unmatched" id="${this.cardId}" >
                <div class="card-front">
                    <img src="assets/images/${this.image}" class="card-image" alt="${this.name}" >
                </div>
                <div class="card-back">
                    <img src="assets/images/card-back-${this.cardBackImage}.png" class="card-image show" alt="Tree of Gondor Image">
                </div>
            </div>`;
    }
}