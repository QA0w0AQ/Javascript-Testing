describe("Bank Account", () => {
  it("should add money to the account when it's depsited", () => {
    bankAccount = new BankAccount(1000);

    bankAccount.deposit(100)
    expect(bankAccount.getBalance()).toBe(1100)

    bankAccount.deposit(105)
    expect(bankAccount.getBalance()).toBe(1205)
  })

  it("should remove money from the account when it's withdrawn", () => {
    bankAccount = new BankAccount(1000);

    bankAccount.withdraw(100)
    expect(bankAccount.getBalance()).toBe(900)

    bankAccount.withdraw(105)
    expect(bankAccount.getBalance()).toBe(795)
  })
})