const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;
const lower = feedback.toLowerCase();
const hasNeg = lower.includes("bad") || lower.includes("poor");

console.log(`Feedback: "${feedback}"`);
console.log("Word count:", wordCount);
console.log(hasNeg ? "Needs Improvement" : "Positive Feedback");
