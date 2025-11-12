const currentSalary = 50000; 
const annualIncrementPercent = 8; 
const years = 5;

const projection = []; 
let salary = currentSalary;

for (let year = 1; year <= years; year++) {

  salary = salary + (salary * (annualIncrementPercent / 100));

  const roundedSalary = Math.round(salary);
  projection.push({ year: `Year ${year}`, salary: roundedSalary });
}

console.table(projection);
