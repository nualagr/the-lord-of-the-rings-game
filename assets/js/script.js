// On receiving the Advance Level message.
// Clone card-row-2 and reclassify clone as extra-row.
document.getElementById("advanceButton").addEventListener("click", function() {
    $(".card-row-2").clone().removeClass( "card-row-2" ).addClass( "extra-row" ).appendTo("#gameBoard");
    assignCards();

});

// Reset all the cards to back-of-card images visible.


// On receiving the Home Button clicked message.
// Delete the level 2 and/or level 3 card rows with the class "extra-row".
// Assign cards to the first eight divs.
$(".restart").click(function(){
    $(".extra-row").remove();
    assignCards();
});

class Card {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.display = 1;
        this.html = 
            `<div class="game-card">
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
}

// Set up an array with the fellowshipCards Card instances
var fellowshipCards = [
    new Card("Frodo", "frodo-baggins.jpg", "frodo"),
    new Card("Samwise", "samwise-gamgee.jpg", "sam"),
    new Card("Gandalf", "gandalf-the-grey.jpg", "gandalf"),
    new Card("Gimli", "gimli-son-of-gloin.jpg", "gimli"),
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
    //When card is clicked reveal front-of-card.
    $(".game-card").click(function (){
        $(".card-back").toggleClass("show");
        console.log("I was clicked");
    });
};

assignCards();