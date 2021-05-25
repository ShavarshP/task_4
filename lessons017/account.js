class Account {

  constructor(name, balance) {
    this._id=Account.count+=1
    this._name=name
    this._balance=balance
  }
  static count = 0
  get balance(){
    return this._balance
  }
  credit(value){
    this._balance+=value
    return this._balance;
  }
  debit(value){

    return value-this._balance
  }
  transferTo(obj, balance){
    obj._balance+=balance
    this.._balance-=balance
    return obj._balance-balance
  }
  toString(){
    return "Saving account's account balance is "+this._balance
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is 1400
