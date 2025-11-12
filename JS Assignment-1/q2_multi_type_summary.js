const name = "Asha";                  
const age = 24;                        
const isMember = true;                  
const favorites = ["tea", "coding"];   
const profile = { city: "Delhi", id: 101 }; 
const nothingHere = null;               
let notDefined;                         

const report = [
  { label: "name", value: name, type: typeof name },
  { label: "age", value: age, type: typeof age },
  { label: "isMember", value: isMember, type: typeof isMember },
  { label: "favorites", value: favorites, type: Array.isArray(favorites) ? "array" : typeof favorites },
  { label: "profile", value: profile, type: typeof profile },
  { label: "nothingHere", value: nothingHere, type: (nothingHere === null ? "null" : typeof nothingHere) },
  { label: "notDefined", value: notDefined, type: typeof notDefined }
];

console.table(report);
