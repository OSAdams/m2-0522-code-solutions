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
