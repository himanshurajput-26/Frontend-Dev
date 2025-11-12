// Q9: Random Math Quiz Generator
// File: q9_random_math_quiz.js

// Generate two random numbers 1-20
const a = Math.floor(Math.random() * 20) + 1;
const b = Math.floor(Math.random() * 20) + 1;

// Random operator from the array
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

// Compute correct answer using switch
let correctAnswer;
switch (operator) {
  case "+":
    correctAnswer = a + b;
    break;
  case "-":
    correctAnswer = a - b;
    break;
  case "*":
    correctAnswer = a * b;
    break;
  case "/":
    // Avoid division by zero; ensure b != 0 (b is 1..20 so safe)
    correctAnswer = (a / b).toFixed(2); // rounded to two decimals
    break;
  default:
    correctAnswer = null;
}

// Display question and correct answer
console.log(`Question: What is ${a} ${operator} ${b}?`);
console.log("Correct Answer:", correctAnswer);
