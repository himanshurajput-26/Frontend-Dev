let raw = " wireless headphones PRO ";
let cleaned = raw.trim().toLowerCase().split(" ").filter(Boolean)
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

cleaned = cleaned.replace(/\bPro\b/i, "Pro Edition");

console.log("Cleaned Title:", cleaned);
console.log("Length:", cleaned.length);
