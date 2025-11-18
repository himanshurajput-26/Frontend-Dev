"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

rawData.forEach((line, idx) => {
  try {
    const parsed = JSON.parse(line);
    if (parsed.user === undefined || parsed.age === undefined) throw new Error();
    const ageNum = Number(parsed.age);
    if (!Number.isFinite(ageNum)) throw new Error();
    parsed.age = ageNum;
    clean.push(parsed);
    console.log("OK", parsed);
  } catch {
    errors.push(idx + 1);
    console.warn("Fail", idx + 1);
  }
});

console.log(clean);
console.log(errors);

const adults = clean.filter(u => u.age >= 18);
console.log(adults);
