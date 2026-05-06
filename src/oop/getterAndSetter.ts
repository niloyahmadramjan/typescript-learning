// getter and setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // for get the balance
  get getBalance() {
    return this._userBalance;
  }
  // for add the balance
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }
}

const testAccount = new BankAccount(123, "test", 100);

testAccount.addBalance = 10;

console.log(testAccount.getBalance);
