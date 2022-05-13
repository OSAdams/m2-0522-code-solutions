/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance < 0 || !balance) {
    return null;
  }
  if (balance > 0) {
    const newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (let accountIndex = 0; accountIndex < this.accounts.length; accountIndex++) {
    if (this.accounts[accountIndex].number === number) {
      return this.accounts[accountIndex];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  let totalAssets = 0;
  for (let accountIndex = 0; accountIndex < this.accounts.length; accountIndex++) {
    totalAssets += this.accounts[accountIndex].getBalance();
  }
  return totalAssets;
};
