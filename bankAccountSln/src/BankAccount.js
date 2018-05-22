class BankAccount {
  constructor(startingBalance) {
    this.balance = startingBalance;
  }

  deposit(amount) {
    this.balance = this.balance + amount
  }

  getBalance() {
    return this.balance
  }

  withdraw(amount) {
    this.balance = this.balance - amount
  }
}