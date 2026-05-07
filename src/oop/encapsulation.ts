// class BankAccount {
//    balance = 1000;
// }

// const user1 = new BankAccount();
// console.log(user1);
// user1.balance = 100000000;
// console.log(user1);

class BankAccount {
  private balance = 1000;

  getBalance() {
    return this.balance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
}

const user1 = new BankAccount();

console.log(user1.getBalance());
user1.deposit(500)
console.log(user1.getBalance());

