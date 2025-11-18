"use strict";

class InvalidOperationError extends Error {}
class DivideByZeroError extends Error {}
class NegativeRootError extends Error {}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError();
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0 && b % 2 === 0) throw new NegativeRootError();
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError();
  }
}

const num1 = 25, num2 = 0;
const testOps = ["add", "divide", "power", "root", "unknown"];

testOps.forEach(op => {
  try {
    const result = calculate(op, num1, num2);
    console.log(op, result);
  } catch (err) {
    console.error(op, err.name);
  }
});
