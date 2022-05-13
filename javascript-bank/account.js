/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else if (Number.isInteger(amount) && amount > 0) {
    const depositTransaction = new Transaction('deposit', amount);
    this.transactions.push(depositTransaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  } else if (Number.isInteger(amount) && amount > 0) {
    const withdrawTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawTransaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  let finalBalance = 0;
  if (this.transactions.length < 1) {
    return finalBalance;
  }
  for (let transIndex = 0; transIndex < this.transactions.length; transIndex++) {
    if (this.transactions[transIndex].type === 'deposit') {
      finalBalance += this.transactions[transIndex].amount;
    } else if (this.transactions[transIndex].type === 'withdrawal') {
      finalBalance -= this.transactions[transIndex].amount;
    }
  }
  return finalBalance;
};
