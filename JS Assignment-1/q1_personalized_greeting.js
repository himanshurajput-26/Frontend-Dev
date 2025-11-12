// Q1: Personalized Login Greeting
// File: q1_personalized_greeting.js

// Change this name to test with other names
const userName = "Himanshu";

// Get current hour (0-23)
const currentHour = new Date().getHours();

// Build greeting using template literals
let greeting;
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
