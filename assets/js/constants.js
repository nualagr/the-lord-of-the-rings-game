// Global variables
var timeLeft = null;
var checkArray = [];
var pairsMatched = 0;
var chosenCardList = [];
var mute = false;
var chosenAPICharacter = [];

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
