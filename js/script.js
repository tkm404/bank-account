function BankAccount() {
    this.accountHolders = {};
    this.currentId = 0;
}

BankAccount.prototype.addaccountId = function(accountHolder) {
    accountHolder.id = this.assignId();
    this.accountHolders[accountHolder.id] = accountHolder;
};

BankAccount.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId 
};
    BankAccount.prototype.cashWithdraw = function() {
    return this.firstDeposit -= this.withDraw;
}

function AccountHolder(userName, firstDeposit, withDraw) {
    this.userName = userName;
    this.firstDeposit = parseFloat(firstDeposit);
    this.withDraw = parseFloat(withDraw);
}

let bank = new BankAccount();
let newAccount = new AccountHolder("Joey", "100", "25");
let newAccount2 = new AccountHolder("Tom", "2,511,111", "199.999");
bank.addaccountId(newAccount);
bank.addaccountId(newAccount2);

