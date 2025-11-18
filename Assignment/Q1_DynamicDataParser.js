"use strict";

const apiData = ["25", "true", "false", "NaN", "  ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

function isNumericString(s) {
  if (typeof s !== "string") return false;
  const trimmed = s.trim();
  if (trimmed === "") return false;
  const n = Number(trimmed);
  return Number.isFinite(n);
}

apiData.forEach((val, idx) => {
  const asString = String(val);
  const asBoolean = Boolean(val);
  let asNumber = Number(val);

  const trimmedString = (typeof val === "string") ? val.trim() : val;

  if (val === null || val === undefined) {
    invalidEntries.push({ index: idx, original: val });
  } else if (typeof val === "string" && (trimmedString === "" || trimmedString.toLowerCase() === "nan" || !isNumericString(val))) {
    invalidEntries.push({ index: idx, original: val });
  } else {
    validNumbers.push(asNumber);
  }

  console.log(`Index ${idx}:`, val);
  console.log(`String: "${asString}"`);
  console.log(`Boolean: ${asBoolean}`);
  console.log(`Number: ${Number.isFinite(asNumber) ? asNumber : "NaN"}`);
});

console.log("Valid numbers:", validNumbers);
console.log("Invalid entries:", invalidEntries);
