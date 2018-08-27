// An array of words
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

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];


// Set up answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length

// The game!
while (remainingLetters > 0) {
    // Player progress
    alert(answerArray.join(" "));

    //Get guess from player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.")
    if (guess === null) {
        // Exit game loop
        break;
    } else if (guess.length !== 1) {
        alert ("Please enter a single letter.");
    }
    else {
        // Update game state with guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
// The end of game loop
}
