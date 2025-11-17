const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (const [name, score] of departments) {
  let evaluation;
  if (score >= 90) evaluation = "Excellent";
  else if (score >= 75 && score <= 89) evaluation = "Good";
  else if (score >= 60 && score <= 74) evaluation = "Average";
  else evaluation = "Needs Improvement";

  console.log(`${name} (${score}): ${evaluation}`);
}
