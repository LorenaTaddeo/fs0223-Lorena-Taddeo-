class BankAccount{
    protected balance: number;

    constructor(balance: number = 0){
        this.balance = balance;
    }
    
    deposit(amount: number):void{
        this.balance += amount;
    }

    withdraw(amount: number):void{
        if(amount <= this.balance){
            this.balance -= amount;
        }else{
            console.log("Fondi insufficienti");
        }
    }

    getBalance(): number{
        return this.balance;
    }
}

class SonAccount extends BankAccount{
    constructor(){
        super();
    }
}

class MotherAccount extends BankAccount{
    private interestRate: number;

    constructor(interestRate: number ){
        super();
        this.interestRate = interestRate;
    }

    calculateInterest(): number{
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