let bonus = 5000;
function calculateSalary(isPermanent) {
  
  let salary = 40000;
  let totalSalary = salary;
  if (isPermanent) {
    totalSalary += bonus; 
  }

  console.log(`Inside function (isPermanent=${isPermanent}): totalSalary = ${totalSalary}`);
  return totalSalary;
}

console.log("Global bonus before:", bonus);
calculateSalary(true);   
calculateSalary(false);  

console.log("Global bonus after:", bonus);

function promoteAndIncreaseGlobalBonus(amount) {
  bonus += amount;
  console.log(`Global bonus increased by ${amount}. New global bonus: ${bonus}`);
}

promoteAndIncreaseGlobalBonus(1000);
calculateSalary(true); 
