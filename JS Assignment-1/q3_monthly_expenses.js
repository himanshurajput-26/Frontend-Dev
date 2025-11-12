// Q3: Monthly Expense Tracker
// File: q3_monthly_expenses.js

// Expenses for five categories (numbers in currency units)
const expenses = {
  food: 4500,
  travel: 1200,
  rent: 8000,
  bills: 2300,
  leisure: 1500
};

// Convert values to an array for calculations
const amounts = Object.values(expenses);

// Calculate total
const total = amounts.reduce((acc, val) => acc + val, 0);

// Calculate average
const average = total / amounts.length;

// Apply 10% tax to total
const taxRate = 0.10;
const totalAfterTax = total * (1 + taxRate);

// Show numbers rounded to two decimals where appropriate
console.log("Monthly Expenses Breakdown:", expenses);
console.log("Total:", total.toFixed(2));
console.log("Average per category:", average.toFixed(2));
console.log("Total after 10% tax:", totalAfterTax.toFixed(2));
