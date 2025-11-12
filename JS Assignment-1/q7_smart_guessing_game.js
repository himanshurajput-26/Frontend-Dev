const secretNumber = Math.floor(Math.random() * 50) + 1;
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

console.log(`(debug) secret: ${secretNumber}, guess: ${userGuess}`);
