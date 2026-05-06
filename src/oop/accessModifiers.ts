// access modifies

class BankAccount {
  public readonly userId: number;
 public userName: string;
 protected  _userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

   addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

// class StudentBankAccount extends BankAccount {
//   test() {
//     this.userBalance; // it not allow if private
//   }
// }

const testAccount = new BankAccount(1234, "testaccount", 100);
testAccount.addBalance(500);

testAccount.addBalance(100);
testAccount.addBalance(50);

console.log(testAccount);
