// VARIABLES
// ================================

// This array contains the words to guess for the game.
var words = [
    "Thanos",
    "Steve Rogers",
    "Groot",
    "Tony Stark",
    "Thor",
    "Spiderman",
    "Hulk",
    "Black Widow",
    "Scarlet Witch",
    "The Wasp",
];

var guessBox = [];
// Start the game with a score of 0.
var wins = 0;
// Start the game with all guesses remaining.
var guessRem = 7;
// Variable to hold the index of current word.
var wordsIndex = 0;



// FUNCTIONS
// =================================
var word = words[Math.floor(Math.random() * words.length)]

// Set up answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Function to render word.
function renderWord() {
    //If there are still more questions, render the next one.
    if (wordsIndex <= (words.length - 1)) {
        document.querySelector("#wordBox").innerHTML = answerArray;
    }
    // If there aren't, render the end game screen.
    else {
        document.querySelector("#wordBox").innerHTML = "Game Over!";
        document.querySelector("#instructions").innerHTML = "You saved: " + wins + " people out of " + words.length + ". Way to be a hero!";
    }
}


// Function that updates the guesses remaining. Not sure if works.
function updateGuessRem() {
    document.querySelector("#guessesRem").innerHTML = guessRem--;
}

// Function that updates the score...
function updateWinsBox() {
    document.querySelector("#winsBox").innerHTML = "Wins: " + wins;
}



// MAIN PROCESS
// ==============================================

// Calling functions to start the game.
renderWord();
updateWinsBox();
updateGuessRem();

// Captures keyboard input and applies letter to letters guessed.
document.onkeydown = function (event) {
    // Variable to hold key entered.
    var userInput = event.key.toLowerCase();
    // Function that updates the letters guessed section.
    function updateLettersGuessed() {
        document.querySelector("#guessedBox").innerHTML = guessBox.push(userInput);
    }
    if (userInput === answerArray[i]) {
        // Update game state with guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userInput) {
                answerArray[j] = userInput;
                answerArray--;
            }
            else {
                updateGuessRem();
            }
        }
    }
    updateLettersGuessed();
}

