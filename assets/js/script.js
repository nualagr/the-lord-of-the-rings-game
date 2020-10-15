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

// Set up an array with four card objects.
var fellowshipCardPack = [
  { name: "Frodo Baggins", image: "frodo-baggins.jpg" }, 
  { name: "Samwise Gamgee", image: "samwise-gamgee.jpg" }, 
  { name: "Gandalf the Grey", image: "gandalf-the-grey.jpg" },
  { name: "Gimli son of Gloin", image: "gimli-son-of-gloin.jpg"},
  { name: "Aragron", image: "aragorn.jpg"},
  { name: "Legolas", image: "legolas.jpg"},
];

function makeDeck(num) {
    var newDeck = [];
    for (let i = 0; i < num ; i ++) {
        newDeck.push(fellowshipCardPack[i]);
    }
    return newDeck;
}

myDeck = makeDeck(4)

// Choose a random Card
function getRandomCard(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Assign randomised cards to the divs and print the names of the characters underneath.
function assignCards(){
    var cardSlots = document.getElementsByClassName('game-card-column'); 
    for (var i = 0; i < cardSlots.length; i ++){
        var gameCard = getRandomCard(myDeck);
        cardSlots[i].innerHTML = '<img src="assets/images/'+ gameCard.image + '">' + gameCard.name; 
    }
};


