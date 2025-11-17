const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

const average = scores.reduce((s, v) => s + v, 0) / scores.length;

const passedCount = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log(`Highest: ${highest}, Lowest: ${lowest}, Average: ${average.toFixed(2)}, Passed: ${passedCount} students`);
