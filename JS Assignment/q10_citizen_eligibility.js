// Q10: Citizen Eligibility Validator
// File: q10_citizen_eligibility.js

// Test inputs
const age = 19;
const isCitizen = true;

if (isCitizen && age >= 18 && age > 20) {
  // citizen and age >= 21 (eligible for all services)
  console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
  // citizen and age between 18 and 20 inclusive
  console.log("Eligible to vote only.");
} else if (!isCitizen && age >= 18) {
  // not a citizen but meets age criteria
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}
