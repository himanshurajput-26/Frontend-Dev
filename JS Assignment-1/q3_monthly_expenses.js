const expenses = {
  food: 4500,
  travel: 1200,
  rent: 8000,
  bills: 2300,
  leisure: 1500
};

const amounts = Object.values(expenses);

const total = amounts.reduce((acc, val) => acc + val, 0);

const average = total / amounts.length;

const taxRate = 0.10;
const totalAfterTax = total * (1 + taxRate);

console.log("Monthly Expenses Breakdown:", expenses);
console.log("Total:", total.toFixed(2));
console.log("Average per category:", average.toFixed(2));
console.log("Total after 10% tax:", totalAfterTax.toFixed(2));
