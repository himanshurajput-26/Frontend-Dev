// Q4: Academic Performance Evaluator
// File: q4_academic_performance.js

// Use an array of 5 subject marks (0-100)
// Replace these with dynamic inputs to test other cases
const marks = [78, 92, 85, 66, 74];

// Validation: if any subject < 35 -> automatically "Detained"
const anyFailing = marks.some(mark => mark < 35);
const totalMarksObtained = marks.reduce((s, m) => s + m, 0);
const maxTotal = marks.length * 100; // assuming each subject is out of 100
const percentage = (totalMarksObtained / maxTotal) * 100;
const averageMark = totalMarksObtained / marks.length;

if (anyFailing) {
  console.log("Detained (one or more subjects below passing mark)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log(`Average: ${averageMark.toFixed(2)}, Percentage: ${percentage.toFixed(2)}%`);
