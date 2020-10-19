// Global variables
// (we'll get rid of these as a luxury)
let timeLeft = 30;
let checkArray = [];
let pairsMatched = 0;

// Card List Information
var fellowshipCardList = [
    {name:"Frodo", image:"frodo-baggins.jpg"},
    {name:"Samwise", image:"samwise-gamgee.jpg"},
    {name:"Gandalf", image:"gandalf-the-grey.jpg"},
    {name:"Gimli", image:"gimli-son-of-gloin.jpg"},
    {name: "Aragorn", image:"aragorn.jpg"},
    {name: "Legolas", image:"legolas.jpg"},
    {name: "Boromir", image:"boromir.jpg"},
    {name: "Elrond", image:"elrond.jpg"},
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
        console.log(this.levelTimer);
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
    constructor(name, image, cardId) {
        this.name = name;
        this.image = image;
        this.cardId = cardId;
        this.html = 
            `<div class="game-card" id="${this.cardId}" >
                <div class="card-front">
                    <img src="assets/images/${this.image}" class="card-image" alt="${this.name}" >
                    <p>${this.name}</p>
                </div>
                <div class="card-back">
                    <img src="assets/images/card-back-green.png" class="card-image show" alt="Tree of Gondor Image">
                </div>
            </div>`;
    }

        is_equal_to(otherCard) {
            if (otherCard.name === this.name) {
                return true;
            } else {
                return false;
            }
        }
};


// Make a new deck of new cards for each level dependent on the number of divs to be filled
function makeDeck(num, array) {
    var newDeck = [];
    cardCounter = 0;
    for (let i = 0; i < num ; i ++) {
        cardCounter++;
        var newCardA = new Card(array[i].name, array[i].image, "card" + cardCounter.toString());
        cardCounter++;
        var newCardB = new Card(array[i].name, array[i].image, "card" + cardCounter.toString());
        newDeck.push(newCardA);
        newDeck.push(newCardB);
    }
    console.log(newDeck.length);
    return newDeck;
};


// Assign cards to the divs and print the names of the characters underneath.
function assignCards(){
    var cardSlots = document.getElementsByClassName('game-card-column');
    levelDeck = makeDeck(cardSlots.length / 2, fellowshipCardList);
    for (var i = 0; i < cardSlots.length; i ++){
        //var gameCard = getRandomCard(levelDeck);
        var gameCard = levelDeck[i];
        cardSlots[i].innerHTML = gameCard.html;
    }

    //When card is clicked reveal front-of-card.
    $(".game-card").on("click", function (){
        $(this).children(".card-front").toggleClass("face-up");
        moves.incrementMovesCounter();
        var cardName = $(this).children().children("p").text();
        var cardId = $(this).attr("id");
        var cardSlots = document.getElementsByClassName('game-card-column');

        
        // if checkArray length is equal to 0 add the first card name and id to the array
        if (checkArray.length === 0) {    
            checkArray.push([cardName, cardId]);
        }
        // check and see whether the cards match
        else {
            // If the cards match add one to the Pairs counter, clear checkArray, add class 'matched'.
            if (checkArray[0][0] == cardName) {
                var otherCardId = checkArray[0][1];

                pairs.incrementPairsCounter();
                checkArray.splice(0, 1);
                $("#" + otherCardId).addClass("matched");
                $(this).addClass("matched");  

                
                if(pairsMatched === cardSlots.length / 2){
                    // All cards have been matched and the level ends   
                    timer.stopTimer();           
                    console.log("Level Over")                                             
                    }            
                else{
                    // Not all cards have been matched  
                    // Take away the ability to turn the matched cards
                    $(".game-card.matched").off("click");                                            
            } 

            }
            // If the cards do not match, wait one second, clear checkArray, remove class 'face-up' so that the cards flip face down again.
            else if (checkArray[0][0] !== cardName) {
                $this = $(this)
                setTimeout(function(){
                var otherCardId = checkArray[0][1];
                checkArray.splice(0, 1);
                $("#" + otherCardId).children(".card-front").removeClass("face-up");
                 $this.children(".card-front").removeClass("face-up");  
                }, 1000);                                              
            }
        }
    });
};


$(document).ready(function(){
    //creates new timer and starts it
    timer = new Timer(30);
    moves = new movesCounter();
    pairs = new pairsCounter();
});


// On receiving the Advance Level message.
// Clone card-row-2 and reclassify clone as extra-row.
document.getElementById("advanceButton").addEventListener("click", function() {
    $(".card-row-2").clone().removeClass( "card-row-2" ).addClass( "extra-row" ).appendTo("#gameBoard");
    assignCards();
    timer.resetTimer();
    moves.resetMovesCounter();
    pairs.resetPairsCounter();
});


assignCards();


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