// Q8: Employee Salary Projection
// File: q8_salary_projection.js

const currentSalary = 50000; // starting salary
const annualIncrementPercent = 8; // percent per year
const years = 5;

const projection = []; // array to hold yearly results
let salary = currentSalary;

for (let year = 1; year <= years; year++) {
  // Increment salary by percentage
  salary = salary + (salary * (annualIncrementPercent / 100));
  // Round salary (use Math.round as requested)
  const roundedSalary = Math.round(salary);
  projection.push({ year: `Year ${year}`, salary: roundedSalary });
}

// Print a formatted console table
console.table(projection);
