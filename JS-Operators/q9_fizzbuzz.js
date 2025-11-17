const results = [];

for (let n = 1; n <= 30; n++) {
  if (n % 3 === 0 && n % 5 === 0) results.push("FizzBuzz");
  else if (n % 2 === 0) results.push("Even");
  else results.push("Odd");
}

console.log("1-30 classification:", results);
