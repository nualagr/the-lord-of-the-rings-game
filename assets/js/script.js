// Global variables
// (we'll get rid of these as a luxury)
let timeLeft = null;
let checkArray = [];
let pairsMatched = 0;
let chosenCardList = [];
let mute = false;
let chosenAPICharacter = [];


// Card List Information
var fellowshipCardList = [
    {name:"Frodo Baggins", image:"frodo.png", cardBackImage:"green"},
    {name:"Samwise Gamgee", image:"sam.png", cardBackImage:"green"},
    {name:"Gandalf", image:"gandalf.png", cardBackImage:"green"},
    {name:"Gimli", image:"gimli.png", cardBackImage:"green"},
    {name:"Aragorn II Elessar", image:"aragorn.png", cardBackImage:"green"},
    {name:"Legolas", image:"legolas.png", cardBackImage:"green"},
    {name:"Boromir", image:"boromir.png", cardBackImage:"green"},
    {name:"Elrond", image:"elrond.png", cardBackImage:"green"},
]

var mordorCardList = [
    {name:"Gollum", image:"gollum.png", cardBackImage:"black"},
    {name:"Denethor II", image:"denethor.png", cardBackImage:"black"},
    {name:"Isildur", image:"isildur.png", cardBackImage:"black"},
    {name:"Gríma Wormtongue", image:"wormtongue.png", cardBackImage:"black"},
    {name:"Saruman", image:"saruman.png", cardBackImage:"black"},
    {name:"Khamúl", image:"nazgul.png", cardBackImage:"black"},
    {name:"Shagrat", image:"shagrat.png", cardBackImage:"black"},
    {name:"Gorbag", image:"gorbag.png", cardBackImage:"black"},
]

// Audio Controller Constructor
class AudioController {
    constructor() {
        this.mute = mute;
        this.flipSound = new Audio("assets/audio/card-flip.mp3");
        this.unflipSound = new Audio("assets/audio/unflip.mp3");
        this.cardsMatchSound = new Audio("assets/audio/cards-match.mp3");
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
class movesCounter {
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
};


//Pairs Counter Constructor
class pairsCounter {
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
};


//Card Constructor
class Card {
    constructor(name, image, cardBackImage, cardId) {
        this.name = name;
        this.image = image;
        this.cardBackImage = cardBackImage
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
};


// Turn on modal
function turnOn(modalId) {
    $(modalId).modal('show');
};


// Turn off modal
function turnOff(modalId) {
    $(modalId).modal('hide');
};


// Freeze Board
function freezeBoard(){
    $(".game-card").off("click");   
};


// Time's Up
function timeUp(){
    if (timeLeft === 0);
    turnOn("#gameOverModal");
    audio.gameOver();
}
  

// User Card Pack Choice
function packChoice(pack){
    if (pack == "fellowship") {
        chosenCardList = fellowshipCardList;
    }
    else if (pack == "mordor") {
        chosenCardList = mordorCardList;
    }
    assignCards(audio);
    timer = new Timer(30);
}


// On receiving the Advance Level message.
// Clone card-row-2 and reclassify clone as extra-row.
function advanceLevel(){
    $(".card-row-2").clone().removeClass( "card-row-2" ).addClass( "extra-row" ).appendTo("#gameBoard");
    assignCards(audio);
    timer.resetTimer();
    moves.resetMovesCounter();
    pairs.resetPairsCounter();
}


// Make a new deck of new cards for each level dependent on the number of divs to be filled
function makeDeck(num, array) {
    var newDeck = [];
    cardCounter = 0;
    for (let i = 0; i < num ; i ++) {
        cardCounter++;
        var newCardA = new Card(array[i].name, array[i].image, array[i].cardBackImage, "card" + cardCounter.toString());
        cardCounter++;
        var newCardB = new Card(array[i].name, array[i].image, array[i].cardBackImage, "card" + cardCounter.toString());
        newDeck.push(newCardA);
        newDeck.push(newCardB);
    }
    shuffle(newDeck);
    return newDeck;
};


// Shuffle Deck
// Fisher-Yates Shuffle found at https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...
function shuffle(newDeck) {
  for (let i = newDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
}

// Assign cards to the divs
function assignCards(audioPlayer){
    var cardSlots = document.getElementsByClassName('game-card-column');
    levelDeck = makeDeck(cardSlots.length / 2, chosenCardList);
    for (var i = 0; i < cardSlots.length; i ++){
        //var gameCard = getRandomCard(levelDeck);
        var gameCard = levelDeck[i];
        cardSlots[i].innerHTML = gameCard.html;
    }


    //When card is clicked reveal front-of-card.
    $(".game-card.unmatched").on("click", function (){
        if (isProcessing) { 
            return; 
        }
        var cardName = $(this).children().children("img").attr("alt");
        var cardId = $(this).attr("id");
        var cardImage = $(this).children().children("img").attr("src");
        var cardSlots = document.getElementsByClassName('game-card-column');
             
        $(this).children(".card-front").addClass("face-up");
        audioPlayer.flip();

        // if checkArray length is equal to 0 add the first card name and id to the array
        if (checkArray.length === 0) { 
            checkArray.push([cardName, cardId, cardImage]);
            $(this).removeClass("unmatched");
            moves.incrementMovesCounter();
        }
        
        // Two cards have been selected. So lock the ability to click any other card
        else {
            // check and see whether the cards match

            // If the card the same name but a different id add one to the moves counter add one to the Pairs counter, remove the class 'unmatched', add the class 'matched', remove the ability to turn the matched cards.
            if (checkArray[0][0] === cardName && checkArray[0][1] !== cardId) {
                moves.incrementMovesCounter();
                var otherCardId = checkArray[0][1];
                pairs.incrementPairsCounter();
                audioPlayer.cardsMatch();
                $("#" + otherCardId).addClass("matched");
                $(this).removeClass("unmatched").addClass("matched");  
                $(".game-card.matched").off("click"); 
   
                // Check and see whether the game is over
                if(pairsMatched === cardSlots.length / 2){
                    // All cards have been matched and the level ends   
                    timer.stopTimer(); 
                    // Display the Advance LevelOverlay  
                    if (cardSlots.length === 8) {
                        checkArray.splice(0, 1); 
                        turnOn("#advanceToLevelTwoModal");                             
                    }  
                    else if (cardSlots.length === 12) {
                        checkArray.splice(0, 1); 
                        turnOn("#advanceToLevelThreeModal");
                    } 
                    else if (cardSlots.length === 16){
                        chosenAPICharacter = checkArray[0];
                        console.log(chosenAPICharacter);
                        checkArray.splice(0, 1); 
                        turnOn("#congratulationsModal");
                        audioPlayer.congrats();
                    }
                }         
         
                else{
                    // Not all cards have been matched  
                    // Clear the checkArray so that more comparisons can be made
                    checkArray.splice(0, 1); 
                } 
            }

            // If the cards do not match, add one to the moves counter
            // Wait one second, clear checkArray, remove class 'face-up' so that the cards flip face down again. Remove class 'matched' so that the first card can be selected again.
            else if (checkArray[0][0] !== cardName) {
                moves.incrementMovesCounter();
                $this = $(this)
                otherCardId = checkArray[0][1];
                let otherCardNumber = "#" + otherCardId
                // Fix to stop the user clicking other cards while the setTimeout function is waiting was found on Stack Overflow
                // https://stackoverflow.com/questions/56283681/js-memory-card-game-how-to-prevent-user-flipping-more-then-2-cards-at-the-same
                isProcessing = true;
                setTimeout(function(){
                checkArray.splice(0, 1);
                $(otherCardNumber).children(".card-front").removeClass("face-up");
                $this.children(".card-front").removeClass("face-up");  
                audioPlayer.unflip();
                isProcessing = false; 
                }, 1000);                                          
            }
        }
    });
};


// On receiving the Home Button or the Begin Again Button message.
// Delete the level 2 and/or level 3 card rows with the class "extra-row".
// Assign cards to the first eight divs.
function restart(){
    $(".extra-row").remove();
    assignCards(audio);
    timer.stopTimer();
    moves.resetMovesCounter();
    pairs.resetPairsCounter();
    turnOn("#homeModal");
}


$(document).ready(function(){
    //creates new counters
    moves = new movesCounter();
    pairs = new pairsCounter();
    isProcessing = false;
    $("#homeModal").modal("show");
    audio = new AudioController();
});


// Freeze board when modal is dismissed rather than one of the options taken
 $(".close").click(function(){
    freezeBoard();
 });

 // Pause countdown clock when Help modal is opened
 $(".rules").click(function(){
    timer.pauseTimer();
 });

 // Resume countdown clock when Help modal is closed
 $(".resume").click(function(){
    timer.resumeTimer();
 });

// Mute and unmute sounds when speaker icon is clicked and replace icon
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



$("#prize").click(function(){
    turnOn("#prizeModal");
});


//curl -k -X GET -H "Authorization: Bearer ERyHRqZKa0LqLBPZbuEE" https://the-one-api.dev/v2/character?sort=name:asc

//var samId = 5cd99d4bde30eff6ebccfd0d;

const baseURL = "https://the-one-api.dev/v2/";

function getData(type, cb){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.setRequestHeader("Authorization", "Bearer ERyHRqZKa0LqLBPZbuEE");

    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            cb(JSON.parse(this.responseText));
            //document.getElementById("prizeModalContent").innerHTML=this.responseText;
        }
    };
}


function writeToDocument(type) {
    // var tableRows = [];
    var el = document.getElementById("prizeModalContent");
    el.innerHTML = "";

    getData(type, function(data){
        data = data.docs;
        console.log(chosenAPICharacter);
        prizeCharacter = data.find(element => element["name"] == chosenAPICharacter[0]);
        console.log(prizeCharacter);
        prizeImage = chosenAPICharacter[2];
        console.log(prizeImage);

        el.innerHTML = `<div><img src="${prizeImage}" class="card-image" alt="${prizeCharacter["name"]}" height="360px" width="300px" />></div>
                        <div>
                        <p>Name: ${prizeCharacter["name"]}</p>
                        <p>Race: ${prizeCharacter["race"]}</p>
                        <p>Gender: ${prizeCharacter["gender"]}</p>
                        <p>Hair colour: ${prizeCharacter["hair"]}</p>
                        <p>Height: ${prizeCharacter["height"]}</p>
                        <p>Want to find out more? Click 
                        <a target="_blank" href="${prizeCharacter["wikiUrl"]}"><span>here</span></a> to go to The One Wiki To Rule Them All and learn more about ${prizeCharacter["name"]}</p>
                        </div>`;
    });
};