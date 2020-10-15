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
        this.direction = 0;
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
    new Card("Frodo Baggins", "frodo-baggins.jpg"),
    new Card("Samwise Gamgee", "samwise-gamgee.jpg"),
    new Card("Gandalf the Grey", "gandalf-the-grey.jpg"),
    new Card("Gimli son of Gloin", "gimli-son-of-gloin.jpg"),
    new Card("Aragorn", "aragorn.jpg"),
    new Card("Legolas", "legolas.jpg"),
    new Card("Boromir", "boromir.jpg"),
    new Card("Galadriel", "galadriel.jpg"),
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
        cardSlots[i].innerHTML = '<img src="assets/images/'+ gameCard.image + '">' + gameCard.name; 
    }
};


