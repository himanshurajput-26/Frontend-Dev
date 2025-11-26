class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    return this.name + " is working";
  }
}

class Manager extends Employee {
  work() {
    return this.name + " is managing";
  }
}

const e = new Employee("A", "IT");
const m = new Manager("B", "HR");

console.log(e.work());
console.log(m.work());
