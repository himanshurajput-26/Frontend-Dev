const marks = [78, 92, 85, 66, 74];

const anyFailing = marks.some(mark => mark < 35);
const totalMarksObtained = marks.reduce((s, m) => s + m, 0);
const maxTotal = marks.length * 100;
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
