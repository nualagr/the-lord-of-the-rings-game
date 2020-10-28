/*jshint esversion: 6 */
// Suggestion found on StackOverflow (https://stackoverflow.com/questions/8852765/jshint-and-jquery-is-not-defined) to bypass replacing the $ with jquery when passing the code into jshint //
/*globals $:false */

// Global variables
var audio;
var timer;
var moves;
var pairs;
var checkArray = [];
var pairsMatched = 0;
var mute = false;
var chosenAPICharacter = [];
var isProcessing;

// API baseURL
const baseURL = "https://the-one-api.dev/v2/";

// Audio base directory
const baseDir = "assets/audio/";

// Card List Information
const fellowshipCardList = [
    {name:"Frodo Baggins", image:"frodo.png", cardBackImage:"green"},
    {name:"Samwise Gamgee", image:"sam.png", cardBackImage:"green"},
    {name:"Gandalf", image:"gandalf.png", cardBackImage:"green"},
    {name:"Gimli", image:"gimli.png", cardBackImage:"green"},
    {name:"Aragorn II Elessar", image:"aragorn.png", cardBackImage:"green"},
    {name:"Legolas", image:"legolas.png", cardBackImage:"green"},
    {name:"Boromir", image:"boromir.png", cardBackImage:"green"},
    {name:"Elrond", image:"elrond.png", cardBackImage:"green"},
];

const mordorCardList = [
    {name:"Gollum", image:"gollum.png", cardBackImage:"black"},
    {name:"Denethor II", image:"denethor.png", cardBackImage:"black"},
    {name:"Isildur", image:"isildur.png", cardBackImage:"black"},
    {name:"Gríma Wormtongue", image:"wormtongue.png", cardBackImage:"black"},
    {name:"Saruman", image:"saruman.png", cardBackImage:"black"},
    {name:"Khamúl", image:"nazgul.png", cardBackImage:"black"},
    {name:"Shagrat", image:"shagrat.png", cardBackImage:"black"},
    {name:"Gorbag", image:"gorbag.png", cardBackImage:"black"},
];


// Audio Controller Constructor
class AudioController {
    constructor() {
        this.mute = mute;
        this.flipSound = new Audio(baseDir + "card-flip.mp3");
        this.unflipSound = new Audio(baseDir + "unflip.mp3");
        this.cardsMatchSound = new Audio(baseDir + "cards-match.mp3");
        this.levelCompleteSound = new Audio(baseDir + "level-complete.mp3");
        this.gameOverSound = new Audio(baseDir + "game-over.mp3");
        this.congratsSound = new Audio(baseDir + "winner.mp3");
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
    constructor(time, audio) {
        this.time = time;
        this.audio = audio;
        this.levelTimer = null;
        this.startTimer();
    }

    startTimer() {
        let timeLeft = this.time;
        let myAudio = this.audio;
        this.levelTimer = setInterval(function(){
            if (timeLeft > 0) {
                document.getElementById("timeRemaining").textContent = timeLeft;
                timeLeft--;  
            }
            else if (timeLeft === 0) {
                document.getElementById("timeRemaining").textContent = timeLeft;
                freezeBoard();
                clearInterval(this.levelTimer);
                timeLeft--;
                turnOn("#gameOverModal");
                myAudio.gameOver();
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
        if (pausedTime === 0) {
            this.stopTimer();
        }
        else {
            var resumeTime = parseInt(pausedTime) - 1;
            this.time = resumeTime;
            this.startTimer();
        }
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
                    <img src="assets/images/${this.image}" class="card-image" style="display: none;" alt="${this.name}">
                </div>
                <div class="card-back">
                    <img src="assets/images/card-back-${this.cardBackImage}.png" class="card-image show" alt="Tree of Gondor Image">
                </div>
            </div>`;
    }
}


// Turn on modal
function turnOn(modalId) {
    $(modalId).modal('show');
}

// Freeze Board
function freezeBoard(){
    $(".game-card").off("click");   
}

function setUpAdvanceLevel(chosenCardList) {
    $(".advance").on("click", function (){
        $(".card-row-2").clone().removeClass("card-row-2").addClass("extra-row").appendTo("#gameBoard");
        assignCards(chosenCardList);
        timer.resetTimer();
        moves.resetMovesCounter();
        pairs.resetPairsCounter();
    });
}

// Make a new deck of new cards for each level dependent on the number of divs to be filled
function makeDeck(num, array) {
    let newDeck = [];
    let cardCounter = 0;
    for (let i = 0; i < num ; i ++) {
        cardCounter++;
        let newCardA = new Card(array[i].name, array[i].image, array[i].cardBackImage, "card" + cardCounter.toString());
        cardCounter++;
        let newCardB = new Card(array[i].name, array[i].image, array[i].cardBackImage, "card" + cardCounter.toString());
        newDeck.push(newCardA);
        newDeck.push(newCardB);
    }
    shuffle(newDeck);
    return newDeck;
}

/* Shuffle Deck
   Fisher-Yates Shuffle found at https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20... */
function shuffle(newDeck) {
  for (let i = newDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
}

// Assign cards to the divs
function assignCards(chosenCardList){
    let cardSlots = document.getElementsByClassName('game-card-column');
    let levelDeck = makeDeck(cardSlots.length / 2, chosenCardList);
    for (let i = 0; i < cardSlots.length; i ++){
        let gameCard = levelDeck[i];
        cardSlots[i].innerHTML = gameCard.html;
    }

    // When card is clicked reveal front-of-card.
    $(".game-card.unmatched").on("click", function (){
        let cardName = $(this).children().children("img").attr("alt");
        let cardId = $(this).attr("id");
        let cardImage = $(this).children().children("img").attr("src");
        let cardSlots = document.getElementsByClassName("game-card-column");
        let cardDiv = $(this).children(".card-front");

        // If the card is face up disregard the click.
        if (isProcessing || cardDiv.hasClass("face-up")) { 
            return; 
        }

        // If card is not face up
        cardDiv.addClass("face-up").addClass("matched");
        cardDiv.children("img").show();
        audio.flip(); 

        // If checkArray length is equal to 0 add the first card name and id to the array
        if (checkArray.length === 0) { 
            checkArray.push([cardName, cardId, cardImage]);
            $(this).removeClass("unmatched");
            moves.incrementMovesCounter();
        }        

        else {
            /* Two cards have been selected. So lock the ability to click any other card.
               Check and see whether the cards match */
            let otherCardId = checkArray[0][1];
            /* If the card the same name but a different id add one to the moves counter add one to the Pairs counter, 
               remove the class 'unmatched', add the class 'matched', remove the ability to turn the matched cards. */
            if (checkArray[0][0] === cardName && checkArray[0][1] !== cardId) {
                moves.incrementMovesCounter();              
                pairs.incrementPairsCounter();
                audio.cardsMatch();
                $("#" + otherCardId).addClass("matched");
                $(this).removeClass("unmatched").addClass("matched");  
                $(".game-card.matched").off("click"); 
   
                // Check and see whether the game is over
                if(pairsMatched === cardSlots.length / 2){
                    // All cards have been matched and the level ends   
                    timer.stopTimer(); 
                    // Display the Advance Level Overlay  
                    if (cardSlots.length === 8) {
                        checkArray.splice(0, 1); 
                        turnOn("#advanceToLevelTwoModal");
                        audio.levelUp();                             
                    }  
                    else if (cardSlots.length === 12) {
                        checkArray.splice(0, 1); 
                        turnOn("#advanceToLevelThreeModal");
                        audio.levelUp();
                    } 
                    else if (cardSlots.length === 16){
                        // Make the API request with regard to this character.
                        chosenAPICharacter = checkArray[0];
                        // Write the information received from the API to the Prize Modal
                        writeToDocument('character');
                        checkArray.splice(0, 1); 
                        turnOn("#congratulationsModal");
                        audio.congrats();
                    }
                }         
         
                else{
                    /* Not all cards have been matched  
                       Clear the checkArray so that more comparisons can be made */
                    checkArray.splice(0, 1); 
                } 
            }

            /* If the cards do not match, add one to the moves counter
               Wait one second, clear checkArray, remove class 'face-up' so that the cards flip face down again. 
               Remove class 'matched' so that the first card can be selected again. */
            else if (checkArray[0][0] !== cardName) {
                moves.incrementMovesCounter();
                let $this = $(this);
                let otherCardNumber = "#" + otherCardId;
                // Fix to stop the user clicking other cards while the setTimeout function is waiting was found on Stack Overflow
                // https://stackoverflow.com/questions/56283681/js-memory-card-game-how-to-prevent-user-flipping-more-then-2-cards-at-the-same
                isProcessing = true;
                setTimeout(function(){
                checkArray.splice(0, 1);
                $(otherCardNumber).children(".card-front").removeClass("face-up");
                $this.children(".card-front").removeClass("face-up");  
                audio.unflip();
                isProcessing = false; 
                }, 1000);                                          
            }
        }
    });
}

/* On receiving the Home Button or the Begin Again Button message.
   Delete the level 2 and/or level 3 card rows with the class "extra-row".
   Assign cards to the first eight divs. */
function setUpRestart(){
    $(".restart").on("click", function(){       
        // Remove all the clicks added by startGame
        $(".extra-row").remove();
        $(".advance").off("click");
        $("#soundToggler").off("click");
        $(".rules").off("click");
        $(".resume").off("click");

        // Reset game objects
        timer.stopTimer();
        moves.resetMovesCounter();
        pairs.resetPairsCounter();

        // New game
        turnOn("#homeModal");
    });
}

function freezeBoardOnModalClose() {
    // Freeze board when the user dismisses the modal rather than choosing an option button.
    $(".close").click(function(){
        freezeBoard();
    });
}

function pauseCountdownOnModalOpen() {
    // Pause countdown clock when Help modal is opened.
    $(".rules").click(function(){
        timer.pauseTimer();
    });
}

function resumeCountDownOnModalClose() {
    // Resume countdown clock when Help modal is closed.
    $(".resume").click(function(){
        timer.resumeTimer();
    });
}

function toggleSoundOnSpeakerClick() {
    // Mute and unmute sounds when speaker icon is clicked and replace icon.
    $("#soundToggler").click(function(){
        if (mute === true) {
            audio.unmuted();
            $(this).html(`<i class="fas fa-volume-up"></i>`);
        }
        else if (mute === false) {
            audio.muted();
            $(this).html(`<i class="fas fa-volume-mute"></i>`);
        }
    });
}

// Call the API to get the Prize Modal content data on the last card matched.
function getData(type, cb){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.setRequestHeader("Authorization", "Bearer ERyHRqZKa0LqLBPZbuEE");

    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            cb(JSON.parse(this.responseText));
        }
        else if (this.status !== 200) {
            document.getElementById("prizeModalContent").innerHTML=`<h5>Error: ${this.responseText} </h5>`;
        }
    };
}

function writeToDocument(type) {
    let el = document.getElementById("prizeModalContent");
    el.innerHTML = "";
    let elImg = document.getElementById("prizeModalImage");

    getData(type, function(data){
        data = data.docs;
        let prizeCharacter = data.find(element => element.name === chosenAPICharacter[0]);
        let prizeImage = chosenAPICharacter[2];

        function removeIfBlank(key) {
            if (prizeCharacter[key] === "" || prizeCharacter[key] === "NaN") {
                delete prizeCharacter[key];
            }
        }
        Object.keys(prizeCharacter).forEach(removeIfBlank);      

        // Draw the image of the Prize Character in the Modal
        elImg.innerHTML = `<div><img src="${prizeImage}" class="card-image rounded mx-auto d-block" alt="${prizeCharacter.name}" /></div>`;
            
        for (let [key, value] of Object.entries(prizeCharacter)) {
            if (key !== "name" && key !== "_id" && key !== "wikiUrl") {
                el.innerHTML += `<div><span class="text-uppercase">${key}:</span> ${value}</div>`;
            }
            if (key === "wikiUrl") {
                el.innerHTML += `<div>For more indepth information, click <a href="${value}" target="_blank">here </a>to go to ${prizeCharacter.name}'s dedicated page on <em>The One Wiki To Rule Them All</em>.</div>`;
            }
        }
    });
}
      
// User Card Pack Choice from Opening Modal
function startGame(pack){
    var chosenCardList;
    if (pack === "fellowship") {
        chosenCardList = fellowshipCardList;
    }
    else if (pack === "mordor") {
        chosenCardList = mordorCardList;
    }
  
    // Set up game
    audio = new AudioController();
    timer = new Timer(30, audio);
    moves = new MovesCounter();
    pairs = new PairsCounter();
    
    isProcessing = false;
    
    // Set up advance level event listener
    setUpAdvanceLevel(chosenCardList);
    
    // Set up the restart button
    setUpRestart();
    
    // Set up modal behaviour   
    pauseCountdownOnModalOpen();
    resumeCountDownOnModalClose();

    // Set up sound toggler
    toggleSoundOnSpeakerClick();
  
    assignCards(chosenCardList);   
}

// When the document opens:
$(document).ready(function(){
    // If the user chooses not to start the game, ensure that the cards do not respond to clicks.
    freezeBoardOnModalClose();

    // Show modal
    $("#homeModal").modal("show");
});

