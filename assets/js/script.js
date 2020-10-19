// Global variables
// (we'll get rid of these as a luxury)
let timeLeft = 30;
let checkArray = [];
let pairsMatched = 0;
let chosenCardList = [];

// Card List Information
var fellowshipCardList = [
    {name:"Frodo", image:"frodo-baggins.jpg", cardBackImage:"green"},
    {name:"Samwise", image:"samwise-gamgee.jpg", cardBackImage:"green"},
    {name:"Gandalf", image:"gandalf-the-grey.jpg", cardBackImage:"green"},
    {name:"Gimli", image:"gimli-son-of-gloin.jpg", cardBackImage:"green"},
    {name:"Aragorn", image:"aragorn.jpg", cardBackImage:"green"},
    {name:"Legolas", image:"legolas.jpg", cardBackImage:"green"},
    {name:"Boromir", image:"boromir.jpg", cardBackImage:"green"},
    {name:"Elrond", image:"elrond.jpg", cardBackImage:"green"},
]

var mordorCardList = [
    {name:"Gollum", image:"gollum.png", cardBackImage:"black"},
    {name:"Denethor", image:"saruman.jpg", cardBackImage:"black"},
    {name:"Isildur", image:"saruman.jpg", cardBackImage:"black"},
    {name:"Wormtongue", image:"wormtongue.jpg", cardBackImage:"black"},
    {name:"Saruman", image:"saruman.jpg", cardBackImage:"black"},
    {name:"Nazgul", image:"nazgul.jpg", cardBackImage:"black"},
    {name:"Shagrat", image:"wormtongue.jpg", cardBackImage:"black"},
    {name:"Gorbag", image:"gorbag.jpg", cardBackImage:"black"},
]

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
            if (timeLeft >= 0) {
                document.getElementById("timeRemaining").textContent = timeLeft;
                timeLeft--;               
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.levelTimer);
    }

    resetTimer() {
        this.stopTimer();
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
                    <p>${this.name}</p>
                </div>
                <div class="card-back">
                    <img src="assets/images/card-back-${this.cardBackImage}.png" class="card-image show" alt="Tree of Gondor Image">
                </div>
            </div>`;
    }
};

    $("#fellowshipBtn").on("click", function (){
    chosenCardList = fellowshipCardList;
    assignCards();
    timer = new Timer(30);
    off("startOverlay");
    });


    $("#mordorBtn").on("click", function (){
    chosenCardList = mordorCardList;
    assignCards();
    timer = new Timer(30);
    off("startOverlay");
    });
    
    
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

//  Fisher-Yates Shuffle found at https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...
function shuffle(newDeck) {
  for (let i = newDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
}



// Assign cards to the divs and print the names of the characters underneath.
function assignCards(){
   
    var cardSlots = document.getElementsByClassName('game-card-column');
    levelDeck = makeDeck(cardSlots.length / 2, chosenCardList);
    for (var i = 0; i < cardSlots.length; i ++){
        //var gameCard = getRandomCard(levelDeck);
        var gameCard = levelDeck[i];
        cardSlots[i].innerHTML = gameCard.html;
    }


    //When card is clicked reveal front-of-card.
    $(".game-card.unmatched").on("click", function (){
        if (isProcessing) { return; }
        $(this).children(".card-front").toggleClass("face-up");
        moves.incrementMovesCounter();
        var cardName = $(this).children().children("p").text();
        var cardId = $(this).attr("id");
        var cardSlots = document.getElementsByClassName('game-card-column');

        // if checkArray length is equal to 0 add the first card name and id to the array
        if (checkArray.length === 0) {    
            checkArray.push([cardName, cardId]);
        }
        // Two cards have been selected. So lock the ability to click any other card
        else {
            // check and see whether the cards match
            if (checkArray[0][0] == cardName) {
                var otherCardId = checkArray[0][1];
                // If the cards match add one to the Pairs counter, remove the class 'unmatched', add the class 'matched', remove the ability to turn the matched cards.
                pairs.incrementPairsCounter();
                $("#" + otherCardId).removeClass("unmatched").addClass("matched");
                $(this).removeClass("unmatched").addClass("matched");  
                $(".game-card.matched").off("click"); 
   
                // Check and see whether the game is over
                if(pairsMatched === cardSlots.length / 2){
                    // All cards have been matched and the level ends   
                    timer.stopTimer(); 
                    // Display the Advance LevelOverlay  
                    let level2 = "advanceToLevelTwoOverlay";
                    let level3 = "advanceToLevelThreeOverlay";
                    if (cardSlots.length === 8) {
                        on (level2);                             
                    }  
                    else if (cardSlots.length === 12) {
                        on (level3);
                    } 
                    }         
         
                else{
                    // Not all cards have been matched  
                    // Clear the checkArray so that more comparisons can be made
                    checkArray.splice(0, 1); 
                } 
            }

            // If the cards do not match, wait one second, clear checkArray, remove class 'face-up' so that the cards flip face down again.
            else if (checkArray[0][0] !== cardName) {
                $this = $(this)
                otherCardId = checkArray[0][1];
                // Fix to stop the user clicking other cards while the setTimeout function is waiting was found on Stack Overflow
                // https://stackoverflow.com/questions/56283681/js-memory-card-game-how-to-prevent-user-flipping-more-then-2-cards-at-the-same
                isProcessing = true;
                setTimeout(function(){
                checkArray.splice(0, 1);
                $("#" + otherCardId).children(".card-front").removeClass("face-up");
                $this.children(".card-front").removeClass("face-up");  
                isProcessing = false; 
                }, 1000);                                          
            }
        }
    });
};

$(document).ready(function(){
    //creates new timer and starts it
    moves = new movesCounter();
    pairs = new pairsCounter();
    isProcessing = false;
    document.getElementById("startOverlay").style.display = "block";
});


// On receiving the Advance Level message.
// Clone card-row-2 and reclassify clone as extra-row.
document.getElementById("advance2").addEventListener("click", function() {
    $(".card-row-2").clone().removeClass( "card-row-2" ).addClass( "extra-row" ).appendTo("#gameBoard");
    assignCards();
    timer.resetTimer();
    moves.resetMovesCounter();
    pairs.resetPairsCounter();
    off("advanceToLevelTwoOverlay");
});

document.getElementById("advance3").addEventListener("click", function() {
    $(".card-row-2").clone().removeClass( "card-row-2" ).addClass( "extra-row" ).appendTo("#gameBoard");
    assignCards();
    timer.resetTimer();
    moves.resetMovesCounter();
    pairs.resetPairsCounter();
    off("advanceToLevelThreeOverlay");
});

// Turn on overlay
function on(overlayId) {
    document.getElementById(overlayId).style.display = "block";
    }

// Turn off overlay
function off(overlayId) {
    document.getElementById(overlayId).style.display = "none";
    }

// On receiving the Home Button clicked message.
// Delete the level 2 and/or level 3 card rows with the class "extra-row".
// Assign cards to the first eight divs.
$(".restart").click(function(){
    $(".extra-row").remove();
    assignCards();
    timer.resetTimer();
    moves.resetMovesCounter();
    pairs.resetPairsCounter();
});