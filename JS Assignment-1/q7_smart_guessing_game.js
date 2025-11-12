// Q7: Smart Guessing Game (Number Range)
// File: q7_smart_guessing_game.js

// Generate secret number 1-50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test user guess (change value to try)
const userGuess = 28;

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const diff = Math.abs(userGuess - secretNumber);
  if (diff <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}

// For debugging, show secret (comment out in actual game)
console.log(`(debug) secret: ${secretNumber}, guess: ${userGuess}`);
