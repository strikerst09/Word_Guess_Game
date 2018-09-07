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
    "falcon",
    "mantis",
];
// Variable to hold word to guess
var guessBox = [];
// Start the game with a score of 0.
var wins = 0;
// Start the game with all guesses remaining.
const maxTries = 15;
var guessRem = maxTries;
// Variable to hold the index of current word.
var wordsIndex = 0;
// Variable for the word as it's guessed
var guessWord = [];
// Variable for the letters that are wrong
var guessLetters = [];
// Variable for turning the game on
var gameBegin = false;
// Variable for 'press any key to try again'
var gameFinish = false;



// FUNCTIONS
// =================================


// VAR WORKS
var word = words[Math.floor(Math.random() * words.length)];

// Set up answer array (WORKS)
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
}

var remainingLetters = word.length;

// Function to render word.
// WORKS
function renderWord() {
    //If there are still more words, render the next one.
    if (wordsIndex <= (words.length - 1)) {
        document.querySelector("#wordBox").innerHTML = answerArray;
    }
    // If there aren't, render the end game screen.
    else {
        document.querySelector("#wordBox").innerHTML = "Game Over!";
        document.querySelector("#instructions").innerHTML = "You saved: " + wins + " people out of " + words.length + ". Way to be a hero!";
    }
}
// Function to reset game-level variables; not completely functional;
function resetGame() {
    guessRem = 15;
    guessBox = [];
    guessWord = [];
    guessLetters = [];
    wordsIndex = 0;
    gameBegin = true;
    gameFinish = false;
    answerArray = [];
    renderWord();
    updateWinsBox();
    updateGuessRem();
}

// Function that updates the guesses remaining. (Tue 8/28)
function updateGuessRem() {
    document.querySelector("#guessRem").innerHTML = guessRem;
}

// Function that updates the score. (Tue 8/28)
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
    if (gameFinish) {
        resetGame();
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
    // Function for adding guessed letters to array while checking if used already
    function makeGuess(letter) {
        // Starts game if not already begun
        if (guessRem > 0) {
            if (!gameBegin) {
                gameBegin = true;
                gameFinish = false;
                guessRem--;
            }
            // Checking to see if letter has been guessed
            if (guessBox.indexOf(letter) === -1) {
                guessBox.push(letter);
                // Following line subtracts from Number of Guesses
                document.querySelector("#guessRem").innerHTML = (guessRem--);

            }

        }
        // only time game resets is here and only resets numbers and clears letters already guessed. doesnt create new word.
        else {
            alert("You lose!");
            gameBegin = false;
            gameFinish = true;
            document.querySelector("#wordBox").innerHTML = ("You lose!");
            document.querySelector("#guessedBox").innerHTML = ("Click a button to try again!");
        }
    };

    // Function that updates the letters guessed section. (works wed 8/29)
    function updateLettersGuessed() {
        document.querySelector("#guessedBox").innerHTML = (guessBox);
    };
    // Creates variable for string of letter guessed; determines if part of word or not
    for (var j = 0; j < word.length; j++) {
        if (word[j] === userInput) {
            answerArray[j] = userInput;
        }
    }
    // Update game state with guess (WORKS FRI 8/31)
    document.querySelector("#wordBox").innerHTML = (answerArray.join(" "));
    updateLettersGuessed();
    checkWinorLose();
};
function checkWinorLose() {
    // Fully functional;
    if (answerArray.indexOf("_") === -1) {
        alert("The word was " + word + "!");
        wins++;
        updateWinsBox();
        gameBegin = false;
        gameFinish = true;
        document.querySelector("#wordBox").innerHTML = "You win! This game has ended. Press another key to start again!";
    } else if (guessRem <= 0) {
        gameBegin = false;
        gameFinish = true;
        document.querySelector("#wordBox").innerHTML = ("You lose!");
        document.querySelector("#guessedBox").innerHTML = ("Click a button to try again!");
    }
}
// PSEUDOCODING STRUCTURE
// Game recognizes a win and a loss, but won't generate a new word when a new game starts.
// When a key is pressed while the game hasnt started, a word will be generated and the game will begin.
