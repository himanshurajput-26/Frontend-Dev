// Q6: Progressive Discount System
// File: q6_progressive_discount.js

// Input: total purchase amount
let totalAmount = 6789; // change to test

let discountPercent = 0;

if (totalAmount >= 10000) {
  discountPercent = 25;
} else if (totalAmount >= 5000) {
  discountPercent = 15;
} else if (totalAmount >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const discountValue = (discountPercent / 100) * totalAmount;
const finalPrice = totalAmount - discountValue;

// Print results, rounding final price with Math.round as required
console.log("Original total:", totalAmount);
console.log("Discount percentage:", discountPercent + "%");
console.log("Final price after discount:", Math.round(finalPrice));
