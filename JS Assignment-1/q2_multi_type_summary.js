// Q2: Multi-Type Data Summary
// File: q2_multi_type_summary.js

const name = "Asha";                    // string
const age = 24;                         // number
const isMember = true;                  // boolean
const favorites = ["tea", "coding"];    // array
const profile = { city: "Delhi", id: 101 }; // object
const nothingHere = null;               // null
let notDefined;                         // undefined

// Create an array of entries to print via console.table
const report = [
  { label: "name", value: name, type: typeof name },
  { label: "age", value: age, type: typeof age },
  { label: "isMember", value: isMember, type: typeof isMember },
  { label: "favorites", value: favorites, type: Array.isArray(favorites) ? "array" : typeof favorites },
  { label: "profile", value: profile, type: typeof profile },
  { label: "nothingHere", value: nothingHere, type: (nothingHere === null ? "null" : typeof nothingHere) },
  { label: "notDefined", value: notDefined, type: typeof notDefined }
];

// Print a neat table (label + value + type)
console.table(report);
