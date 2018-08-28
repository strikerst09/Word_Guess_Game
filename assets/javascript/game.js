// VARIABLES
// ================================

// This array contains the words to guess for the game.
var words = [
    "thanos",
    "steverogers",
    "groot",
    "tonystark",
    "thor",
    "spiderman",
    "hulk",
    "blackwidow",
    "scarletwitch",
    "thewasp",
];

var guessBox = [""];
// Start the game with a score of 0.
var wins = 0;
// Start the game with all guesses remaining.
var guessRem = 7;
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
    document.querySelector("#guessRem").innerHTML = guessRem - 1;
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

// Captures keyboard input and applies letter to letters guessed. PUSHES LETTERS TO CONSOLE, CAN'T GET THEM TO CHECK WORD
document.onkeyup = function (event) {
    
    // Variable to hold key entered.
    var userInput = event.key.toLowerCase();
    // Function that updates the letters guessed section. (ONLY INCREASES BY NUMBER NOT LETTER TUE 8/28)
    function updateLettersGuessed() {
        var newArray = guessBox.push(userInput);
        return newArray;
        document.querySelector("#guessedBox").innerHTML = (newArray);
    }
    // writing letters to letters guessed div, but does not concatenate TUE 8/28
    document.querySelector("#guessedBox").innerHTML = (event.key);
    // Update game state with guess NOT FUNCTIONAL, DONT THINK COMES INTO PLAY TUE 8/28
    for (var j = 0; j < word.length; j++) {
        if (word[j] === userInput) {
            answerArray[j] = userInput;
            remainingLetters--;
        }
        else {
            updateGuessRem();
        }

        updateLettersGuessed();
    }
}


