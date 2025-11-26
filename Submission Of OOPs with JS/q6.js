const products = [
  { id: 1, name: "Shirt", category: "Clothes", price: 800, stock: 5 },
  { id: 2, name: "Laptop", category: "Electronics", price: 50000, stock: 2 },
  { id: 3, name: "Pen", category: "Stationery", price: 20, stock: 50 },
  { id: 4, name: "Shoes", category: "Clothes", price: 2000, stock: 1 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return products.slice().sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
