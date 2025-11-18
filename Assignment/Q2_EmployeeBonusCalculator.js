"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

employees.forEach((emp, i) => {
  try {
    if (!emp || !emp.name) throw new Error();
    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (!Number.isFinite(salary)) throw new Error();
    if (!Number.isFinite(years)) throw new Error();
    const bonus = (years > 3) ? (salary * 0.1) : (salary * 0.05);
    const total = salary + bonus;
    console.log(emp.name, salary, years, bonus, total);
  } catch (err) {
    console.error("Error", emp);
  }
});
