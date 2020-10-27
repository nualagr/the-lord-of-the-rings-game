// Turn on modal
function turnOn(modalId) {
    $(modalId).modal('show');
}


// Turn off modal
function turnOff(modalId) {
    $(modalId).modal('hide');
}


// Freeze Board
function freezeBoard(){
    $(".game-card").off("click");   
}


// Time's Up
function timeUp(){
    if (timeLeft === 0);
    turnOn("#gameOverModal");
    audio.gameOver();
}
  

// User Card Pack Choice from Opening Modal
function packChoice(pack){
    if (pack === "fellowship") {
        chosenCardList = fellowshipCardList;
    }
    else if (pack === "mordor") {
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
    let newDeck = [];
    cardCounter = 0;
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
    let cardSlots = document.getElementsByClassName('game-card-column');
    levelDeck = makeDeck(cardSlots.length / 2, chosenCardList);
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
        if (isProcessing || cardDiv.hasClass("face-up")) { 
            return; 
        }


        // If card not face up
        cardDiv.addClass("face-up").addClass("matched");
        cardDiv.children("img").show();
        audioPlayer.flip(); 


        // If checkArray length is equal to 0 add the first card name and id to the array
        if (checkArray.length === 0) { 
            checkArray.push([cardName, cardId, cardImage]);
            $(this).removeClass("unmatched");
            moves.incrementMovesCounter();
        }        

        else {
            // Two cards have been selected. So lock the ability to click any other card
            // check and see whether the cards match
            let otherCardId = checkArray[0][1];
            // If the card the same name but a different id add one to the moves counter add one to the Pairs counter, remove the class 'unmatched', add the class 'matched', remove the ability to turn the matched cards.
            if (checkArray[0][0] === cardName && checkArray[0][1] !== cardId) {
                moves.incrementMovesCounter();              
                pairs.incrementPairsCounter();
                audioPlayer.cardsMatch();
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
                        audioPlayer.levelUp();                             
                    }  
                    else if (cardSlots.length === 12) {
                        checkArray.splice(0, 1); 
                        turnOn("#advanceToLevelThreeModal");
                        audioPlayer.levelUp();
                    } 
                    else if (cardSlots.length === 16){
                        // Make the API request with regard to this character.
                        chosenAPICharacter = checkArray[0];
                        // Write the information received from the API to the Prize Modal
                        writeToDocument('character');
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
            // Wait one second, clear checkArray, remove class 'face-up' so that the cards flip face down again. 
            // Remove class 'matched' so that the first card can be selected again.
            else if (checkArray[0][0] !== cardName) {
                moves.incrementMovesCounter();
                $this = $(this);
                let otherCardNumber = "#" + otherCardId;
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
}


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


//FOR TESTING
//curl -k -X GET -H "Authorization: Bearer ERyHRqZKa0LqLBPZbuEE" https://the-one-api.dev/v2/character?sort=name:asc
//var samId = 5cd99d4bde30eff6ebccfd0d;


// Call the API to get the Prize Modal content data on the last card matched.
function getData(type, cb){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.setRequestHeader("Authorization", "Bearer ERyHRqZKa0LqLBPZbuEE");

    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            cb(JSON.parse(this.responseText));
            //FOR TESTING
            //document.getElementById("prizeModalContent").innerHTML=this.responseText;
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
        prizeCharacter = data.find(element => element["name"] === chosenAPICharacter[0]);
        //FOR TESTING
        //prizeCharacter = data.find(element => element["name"] === "Shagrat");
        prizeImage = chosenAPICharacter[2];
        //FOR TESTING
        //prizeImage = "assets/images/shagrat.png";

        function removeIfBlank(key) {
            if (prizeCharacter[key] === "" || prizeCharacter[key] === "NaN") {
                delete prizeCharacter[key];
            }
        }
        Object.keys(prizeCharacter).forEach(removeIfBlank);      

        // Draw the image of the Prize Character in the Modal
        elImg.innerHTML = `<div><img src="${prizeImage}" class="card-image rounded mx-auto d-block" alt="${prizeCharacter["name"]}" /></div>`;
            
        for (let [key, value] of Object.entries(prizeCharacter)) {
            if (key !== "name" && key !== "_id" && key !== "wikiUrl") {
                el.innerHTML += `<div><span class="text-uppercase">${key}:</span> ${value}</div>`;
            }
            if (key === "wikiUrl") {
                el.innerHTML += `<div>For more indepth information, click <a href="${value}" target="_blank">here </a>to go to ${prizeCharacter["name"]}'s dedicated page on <em>The One Wiki To Rule Them All</em>.</div>`
            }
        }
    });
};
