"use strict";
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Fondi insufficienti");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SonAccount extends BankAccount {
    constructor() {
        super();
    }
}
class MotherAccount extends BankAccount {
    constructor(interestRate) {
        super();
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.balance * this.interestRate;
    }
}
let sonAccount = new SonAccount();
let motherAccount = new MotherAccount(0.10);
sonAccount.deposit(100);
sonAccount.withdraw(30);
motherAccount.deposit(500);
motherAccount.withdraw(100);
console.log("Saldo conto del figlio: ", sonAccount.getBalance());
console.log("Saldo conto della madre: ", motherAccount.getBalance());
console.log("Interessi sul conto della madre:", motherAccount.calculateInterest());
