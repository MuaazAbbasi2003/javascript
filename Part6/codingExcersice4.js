class BankAccount {
  #_balance; // private field

  constructor(balance = 0) {
    this.#_balance = balance >= 0 ? balance : 0; // ensure non-negative initial balance
  }

  get balance() {
    return `Your balance is ${this.#_balance}`;
  }

  set balance(value) {
    if (value < 0) {
      console.error("Invalid balance amount");
    } else {
      this.#_balance = value;
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.#_balance += amount;
    } else {
      console.error("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#_balance >= amount) {
      this.#_balance -= amount;
    } else {
      console.error("Insufficient funds or invalid withdrawal amount");
    }
  }
}
let muaaz1 = new BankAccount();

muaaz1.balance = 5000;
muaaz1.withdraw(3000);
console.log(muaaz1.balance);
