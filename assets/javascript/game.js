//Array computer will select from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting vars to 0
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = "";
var Wmsg = "Yes, you are psychic!"
var lmsg = "I guess you're not a psyhic!"

// Using Math.floor to randomize computer selection from the Choices array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//User guesses
var updateGuessesLeft = function() {
// Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessed').innerHTML = "Guesses left: " + guessesLeft;
};
//Function for computer to randomly pick letters
var updateLetterToGuess = function() {
  letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};
//Function to capture user guesses and display on UI
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//Capturing user input and displaying results
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                document.querySelector('#msg').innerHTML = Wmsg;
                // alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            document.querySelector('#msg').innerHTML = lmsg;
            // alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset. ajd
            reset();
        }
};

// Results Reset
var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}
//