"use strict";

class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

transactions.forEach((tx, idx) => {
  try {
    if (tx === null) throw new NullEntryError();
    if (typeof tx !== "object") throw new MissingFieldError();
    if (tx.id === undefined) throw new MissingFieldError();
    if (tx.amount === undefined) throw new MissingFieldError();
    if (typeof tx.amount !== "number") throw new TypeError();
    if (tx.amount < 0) throw new NegativeAmountError();
    valid.push(tx);
    console.log("OK", tx.id, tx.amount);
  } catch (err) {
    invalid.push({ index: idx, error: err.name });
    console.warn("Fail", idx, err.name);
  }
});

console.log(valid);
console.log(invalid);
