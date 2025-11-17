const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];


const withCategoryDiscounts = cart.map(product => {
  let discountRate = 0;
  if (product.category === "electronics") discountRate = 0.10;
  else if (product.category === "fashion") discountRate = 0.05;
  
  const discountedPrice = product.price * (1 - discountRate);
  return { ...product, discountedPrice, discountRate };
});

let subtotal = withCategoryDiscounts.reduce((sum, p) => sum + p.discountedPrice, 0);

const originalTotal = cart.reduce((s, p) => s + p.price, 0);
let extraDiscount = 0;
if (originalTotal > 50000) {
  extraDiscount = 0.05;
  subtotal = subtotal * (1 - extraDiscount);
}

console.log("Original total:", originalTotal);
console.log("Per-item after category discounts:", withCategoryDiscounts);
console.log(`Extra overall discount applied: ${extraDiscount * 100}%`);
console.log("Final total:", subtotal.toFixed(2));
