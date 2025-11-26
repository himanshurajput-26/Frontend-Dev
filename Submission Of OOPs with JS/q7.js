class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw "Insufficient balance";
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);

try {
  acc.withdraw(500);
  console.log(acc.getBalance());
  acc.withdraw(800);
} catch (e) {
  console.log(e);
}
