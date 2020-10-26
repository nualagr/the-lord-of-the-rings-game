$(document).ready(function(){

    // Set up game
    moves = new MovesCounter();
    pairs = new PairsCounter();
    isProcessing = false;    
    audio = new AudioController();
    
    // Set up modal
    freezeBoardOnModalClose();
    pauseCountdownOnModalOpen();
    resumeCountDownOnModalClose();
    toggleSoundOnSpeakerClick();

    // Start game
    $("#homeModal").modal("show");
});

