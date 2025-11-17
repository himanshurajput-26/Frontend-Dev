const x = 16.75;
const rounded = Math.round(x);       
const sqrt = Math.sqrt(x);              
const power3 = Math.pow(x, 3);         
const randomBetween10And50 = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Summary for x = ${x}:
 - Rounded value: ${rounded}
 - Square root: ${sqrt}
 - x^3: ${power3}
 - Random [10-50]: ${randomBetween10And50}
`.trim();

console.log(summary);
