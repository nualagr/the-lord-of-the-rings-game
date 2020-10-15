// On receiving the Advance Level message.
// Clone card-row-2 and reclassify clone as extra-row.
document.getElementById("advanceButton").addEventListener("click", function() {
    $(".card-row-2").clone().removeClass( "card-row-2" ).addClass( "extra-row" ).appendTo("#gameBoard");
    assignCards();

});

// On receiving the Home Button clicked message.
// Delete the level 2 and/or level 3 card rows with the class "extra-row".
$(".restart").click(function(){
    $(".extra-row").remove();
});

class Card {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.html = 
            `<div class="game-card">
                <div class="card-front">
                    <img src="assets/images/${this.image}" class="card-image" alt="${this.name}" >
                    <p>${this.name}</p>
                </div>
                <div class="card-back">
                    <img src="assets/images/card-back-green.png" class="card-image" alt="Tree of Gondor Image">
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
}

// Set up an array with eight Card instances
var fellowshipCards = [
    new Card("Frodo Baggins", "frodo-baggins.jpg", "frodo"),
    new Card("Samwise Gamgee", "samwise-gamgee.jpg", "sam"),
    new Card("Gandalf the Grey", "gandalf-the-grey.jpg", "gandalf"),
    new Card("Gimli son of Gloin", "gimli-son-of-gloin.jpg", "gimli"),
    new Card("Aragorn", "aragorn.jpg", "aragorn"),
    new Card("Legolas", "legolas.jpg", "legolas"),
    new Card("Boromir", "boromir.jpg", "boromir"),
    new Card("Galadriel", "galadriel.jpg", "galadriel"),
]


// Make a new deck for each level dependent on the number of divs to be filled
function makeDeck(num, cardDeck) {
    var newDeck = [];
    for (let i = 0; i < num ; i ++) {
        newDeck.push(cardDeck[i]);
        newDeck.push(cardDeck[i]);
    }
    return newDeck;
};


// Assign randomised cards to the divs and print the names of the characters underneath.
function assignCards(){
    var cardSlots = document.getElementsByClassName('game-card-column');
    levelDeck = makeDeck(cardSlots.length / 2, fellowshipCards);
    for (var i = 0; i < cardSlots.length; i ++){
        //var gameCard = getRandomCard(levelDeck);
        var gameCard = levelDeck[i];
        cardSlots[i].innerHTML = gameCard.html;
    }
};


