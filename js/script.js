function BankAccount(userName, firstDeposit) {
    this.userName = userName;
    this.firstDeposit = parseInt(firstDeposit);
}


let newAccount = new BankAccount("Joey", "100");

console.log(newAccount)

