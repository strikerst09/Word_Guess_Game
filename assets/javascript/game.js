// VARIABLES
// ================================

// This array contains the words to guess for the game.
var words = [
    "thanos",
    "captainamerica",
    "groot",
    "ironman",
    "thor",
    "spiderman",
    "hulk",
    "blackwidow",
    "scarletwitch",
    "thewasp",
    "okoye",
    "shuri",
    "blackpanther",
    "whitewolf",
    "vision",
    "nebula",
    "drstrange",
    "wong",
    "starlord",
    "warmachine",
    "drax",
    "rocket",
    "antman",
];

var guessBox = [];
// Start the game with a score of 0.
var wins = 0;
// Start the game with all guesses remaining.
var guessRem = 10;
// Variable to hold the index of current word.
var wordsIndex = 0;



// FUNCTIONS
// =================================


// VAR WORKS
var word = words[Math.floor(Math.random() * words.length)]

// Set up answer array (WORKS)
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// Function to render word.
// WORKS
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


// Function that updates the guesses remaining. DOESNT WORK because we haven't told guessRem when to decrease, just that it should. (Tue 8/28)
function updateGuessRem() {
    document.querySelector("#guessRem").innerHTML = guessRem;
}

// Function that updates the score... doesn't work, haven't gotten that far yet (Tue 8/28)
function updateWinsBox() {
    document.querySelector("#winsBox").innerHTML = "Wins: " + wins;
}



// MAIN PROCESS
// ==============================================

// Calling functions to start the game. WORK (Tue 8/28)
renderWord();
updateWinsBox();
updateGuessRem();

// Captures keyboard input and applies letter to letters guessed. PUSHES LETTERS TO DIV, CAN'T GET THEM TO CHECK WORD
document.onkeyup = function (event) {

    // Variable to hold key entered.
    var userInput = event.key.toLowerCase();
    guessBox.push(userInput);
    // Function that updates the letters guessed section. (works wed 8/29)
    function updateLettersGuessed() {
        document.querySelector("#guessedBox").innerHTML = (guessBox);
    }
    // Creates variable for string of letter guessed; determines if part of word or not (DOES NOT SUBTRACT VALUE FROM # OF WRONG GUESSES)
    for (var j = 0; j < word.length; j++) {
        if (word[j] === userInput) {
            answerArray[j] = userInput;
            remainingLetters--;
        }
    } 
    // Update game state with guess (WORKS FRI 8/31)
    document.querySelector("#wordBox").innerHTML = (answerArray.join(" "));
    updateLettersGuessed();
 
}
