let totalAmount = 6789; 
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

console.log("Original total:", totalAmount);
console.log("Discount percentage:", discountPercent + "%");
console.log("Final price after discount:", Math.round(finalPrice));
